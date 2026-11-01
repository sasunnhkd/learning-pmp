// Run: npm test  (node --experimental-strip-types --test tests/; needs Node >= 22.6)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  buildPool, computeStats, defaultPractice, finishSession, questionId, recordAnswer,
  selectSession, topicStatus, DAY_TOPIC, EXAM_MIX, MAX_SESSIONS, SESSION_SIZE, TOPICS, TOPIC_BY_ID,
  type PracticeQuestion, type TrainerRow,
} from '../src/practice.ts';
import type { PracticeData, QuestionBank } from '../src/types.ts';
// @ts-expect-error plain .mjs build script, no type declarations
import { extractTrainerQuiz, renderBank, TRAINER_PATH, BANK_PATH } from '../scripts/extract-trainer-quiz.mjs';

const dayBank = JSON.parse(readFileSync(new URL('../data/questions.json', import.meta.url), 'utf8')) as QuestionBank;
const trainer = JSON.parse(readFileSync(new URL('../data/practice-bank.json', import.meta.url), 'utf8')) as TrainerRow[];
const pool = buildPool(dayBank, trainer);

// Deterministic RNG (mulberry32) so selection tests are repeatable.
function rng(seed: number): () => number {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const domainOf = (q: PracticeQuestion) => TOPIC_BY_ID.get(q.topic)!.domain;

test('data/practice-bank.json matches the Trainer QUIZ (re-run scripts/extract-trainer-quiz.mjs)', () => {
  const fresh = renderBank(extractTrainerQuiz(readFileSync(TRAINER_PATH, 'utf8')));
  assert.equal(readFileSync(BANK_PATH, 'utf8'), fresh);
});

test('pool holds every day and Trainer question, each with a known topic and unique id', () => {
  const dayCount = Object.values(dayBank).reduce((n, qs) => n + qs.length, 0);
  assert.equal(pool.length, dayCount + trainer.length);
  assert.equal(new Set(pool.map(q => q.id)).size, pool.length);
  for (const q of pool) assert.ok(TOPIC_BY_ID.has(q.topic), q.topic);
  for (let d = 1; d <= 28; d++) assert.ok(DAY_TOPIC[d], `day ${d} has no topic`);
  for (const t of TOPICS) assert.ok(pool.some(q => q.topic === t.id), `topic ${t.id} has no questions`);
});

test('buildPool throws on an unmapped Trainer label instead of dropping it', () => {
  assert.throws(() => buildPool({}, [{ topic: 'Nope', q: 'x', options: ['a', 'b', 'c', 'd'], correct: 0, explain: '' }]), /Nope/);
});

test('questionId is stable and stem-based', () => {
  assert.equal(questionId('abc'), questionId('abc'));
  assert.notEqual(questionId('abc'), questionId('abd'));
  assert.match(questionId(''), /^q[0-9a-z]+$/);
});

test('exam mix: 10 distinct questions split 3 People / 4 Process / 3 Business', () => {
  for (let seed = 1; seed <= 20; seed++) {
    const s = selectSession(pool, defaultPractice(), 'mix', [], rng(seed));
    assert.equal(s.length, SESSION_SIZE);
    assert.equal(new Set(s.map(q => q.id)).size, SESSION_SIZE);
    for (const [domain, n] of Object.entries(EXAM_MIX)) {
      assert.equal(s.filter(q => domainOf(q) === domain).length, n, `seed ${seed} ${domain}`);
    }
  }
});

test('exam mix tops up from other domains when one runs short', () => {
  const tiny = pool.filter(q => domainOf(q) !== 'Business').concat(pool.filter(q => domainOf(q) === 'Business').slice(0, 1));
  const s = selectSession(tiny, defaultPractice(), 'mix', [], rng(3));
  assert.equal(s.length, SESSION_SIZE);
  assert.equal(s.filter(q => domainOf(q) === 'Business').length, 1);
});

test('unseen questions come before seen ones, wrong before right', () => {
  const risk = pool.filter(q => q.topic === 'risk');
  let p: PracticeData = defaultPractice();
  // Mark all but 3 as answered right; one of those right-answered gets a later wrong answer.
  risk.slice(3).forEach((q, i) => { p = recordAnswer(p, q.id, true, 1000 + i); });
  p = recordAnswer(p, risk[3]!.id, false, 5000);
  const s = selectSession(risk, p, 'topics', ['risk'], rng(9));
  const ids = new Set(s.map(q => q.id));
  for (const q of risk.slice(0, 4)) assert.ok(ids.has(q.id), 'unseen or missed question was skipped');
});

test('topic mode returns only chosen topics, fewer than 10 when the pool is small', () => {
  const s = selectSession(pool, defaultPractice(), 'topics', ['scope'], rng(1));
  const n = pool.filter(q => q.topic === 'scope').length;
  assert.equal(s.length, Math.min(n, SESSION_SIZE));
  assert.ok(s.every(q => q.topic === 'scope'));
  assert.equal(selectSession(pool, defaultPractice(), 'topics', [], rng(1)).length, 0);
});

test('mistakes mode returns only questions last answered wrong, newest first, max 10', () => {
  let p = defaultPractice();
  pool.slice(0, 15).forEach((q, i) => { p = recordAnswer(p, q.id, false, i); });
  p = recordAnswer(p, pool[14]!.id, true, 99); // fixed since: no longer a mistake
  assert.equal(computeStats(pool, p).mistakes, 14);
  const s = selectSession(pool, p, 'mistakes', [], rng(2));
  assert.equal(s.length, SESSION_SIZE);
  const want = new Set(pool.slice(4, 14).map(q => q.id)); // the 10 most recent mistakes
  assert.ok(s.every(q => want.has(q.id)));
});

test('recordAnswer accumulates per question without mutating the input', () => {
  const p0 = defaultPractice();
  const p1 = recordAnswer(p0, 'qa', true, 1);
  const p2 = recordAnswer(p1, 'qa', false, 2);
  assert.deepEqual(p0.questions, {});
  assert.deepEqual(p2.questions.qa, { seen: 2, correct: 1, lastCorrect: false, lastAt: 2 });
});

test('finishSession appends, sets lastDate and caps history', () => {
  let p = defaultPractice();
  for (let i = 0; i < MAX_SESSIONS + 5; i++) {
    p = finishSession(p, { date: `d${i}`, mode: 'mix', topics: [], score: i % 11, total: 10 });
  }
  assert.equal(p.sessions.length, MAX_SESSIONS);
  assert.equal(p.lastDate, `d${MAX_SESSIONS + 4}`);
  assert.equal(p.sessions[0]!.date, 'd5');
});

test('topicStatus: new at 0 tries, weak only with >=3 tries under 70%', () => {
  assert.equal(topicStatus(0, 0), 'new');
  assert.equal(topicStatus(1, 0), 'ok'); // one miss is not enough to flag
  assert.equal(topicStatus(3, 2), 'weak'); // 66.7%
  assert.equal(topicStatus(10, 7), 'ok'); // exactly 70%
});

test('computeStats: coverage, accuracy, mistakes, and ignores ids no longer in the pool', () => {
  const empty = computeStats(pool, defaultPractice());
  assert.equal(empty.covered, 0);
  assert.equal(empty.seenUnique, 0);
  assert.equal(empty.poolSize, pool.length);
  assert.ok(empty.topics.every(t => t.status === 'new' && t.accuracy === null));

  const cost = pool.filter(q => q.topic === 'cost');
  let p = defaultPractice();
  p = recordAnswer(p, cost[0]!.id, false, 1);
  p = recordAnswer(p, cost[1]!.id, false, 2);
  p = recordAnswer(p, cost[2]!.id, true, 3);
  p = recordAnswer(p, 'q-removed', true, 4);
  const s = computeStats(pool, p);
  const t = s.topics.find(x => x.id === 'cost')!;
  assert.deepEqual([t.attempts, t.correct, t.seenUnique, t.status], [3, 1, 3, 'weak']);
  assert.equal(s.covered, 1);
  assert.equal(s.attempts, 3);
  assert.equal(s.mistakes, 2);
  assert.equal(s.domains.find(d => d.domain === 'Process')!.attempts, 3);
});
