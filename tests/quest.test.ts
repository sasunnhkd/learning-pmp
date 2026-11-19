import { test } from 'node:test';
import assert from 'node:assert/strict';
import { phoenix } from '../src/quest/fixture.ts';
import {
  commitProgress, emptyProgress, latestAttempt, loadProgress, QUEST_KEY, score, transition, validateProgress,
} from '../src/quest/engine.ts';
import { importCatalog, parseCsv, validateCatalog } from '../scripts/import-quest.mjs';

const now = '2026-11-15T12:00:00Z';
function decisionReady() {
  let p = transition(emptyProgress(), {type: 'begin', now});
  p = transition(p, {type: 'continue'});
  for (const e of phoenix.evidence) p = transition(p, {type: 'inspect', evidenceId: e.id});
  return transition(p, {type: 'continue'});
}
function practiceReady(choice = 'hybrid') {
  let p = transition(decisionReady(), {type: 'decide', choice, reasoning: 'Plan fixed integration and iterate dashboards within the agreed authority.'});
  p = transition(p, {type: 'continue'});
  return transition(p, {type: 'continue'});
}

test('Quest source contract: BOM, quoted commas, semicolons, newlines and escaped quotes', () => {
  assert.deepEqual(parseCsv('\uFEFFid,text\r\na,"A; B, ""quoted""\nnext"\r\n'), [{id: 'a', text: 'A; B, "quoted"\nnext'}]);
  const c = importCatalog();
  assert.deepEqual(validateCatalog(c), []);
  assert.equal(c.missions.length, 168);
  assert.deepEqual(c.missions[0].secondary_eco_task_ids, ['BUS01', 'PRO09']);
  assert.equal(c.seeds.at(-1).recommended_choice, '0'); // Kept draft; never interpreted as correctness.
  assert.equal(c.assessments.every(a => a.content_status === 'not_authored'), true);
});

test('Quest import rejects duplicates, missing references and prerequisite cycles', () => {
  const c = importCatalog();
  c.missions[0].prerequisite_mission_id = c.missions[1].mission_id;
  c.missions[2].primary_eco_task_id = 'MISSING';
  c.chapters[1].chapter_id = c.chapters[0].chapter_id;
  const errors = validateCatalog(c);
  assert.ok(errors.some(e => e.includes('duplicate ID CH01')));
  assert.ok(errors.some(e => e.includes('unresolved ID MISSING')));
  assert.ok(errors.some(e => e.includes('cycle CH01-M01')));
});

test('Required evidence, comparison and six ordered responses gate completion', () => {
  let p = transition(emptyProgress(), {type: 'begin', now});
  assert.throws(() => transition(p, {type: 'finish', now}), /Complete the comparison/);
  p = transition(p, {type: 'continue'});
  assert.throws(() => transition(p, {type: 'continue'}), /Inspect both evidence/);
  p = decisionReady();
  assert.throws(() => transition(p, {type: 'continue'}), /required comparison/);
  assert.throws(() => transition(p, {type: 'decide', choice: '', reasoning: ''}), /Choose a delivery proposal/);
  assert.throws(() => transition(p, {type: 'answer', itemId: phoenix.items[0].id, selected: 1}), /mini-lesson/);
  p = practiceReady();
  assert.throws(() => transition(p, {type: 'answer', itemId: phoenix.items[1].id, selected: 1}), /current question/);
  assert.throws(() => transition(p, {type: 'answer', itemId: phoenix.items[0].id, selected: -1}), /Choose one/);
});

test('Every choice terminates, low scores can complete, attempts preserve first results', () => {
  for (const choice of phoenix.choices) {
    let p = practiceReady(choice.id);
    for (const item of phoenix.items) p = transition(p, {type: 'answer', itemId: item.id, selected: (item.correct + 1) % 4});
    p = transition(p, {type: 'finish', now});
    const first = structuredClone(p.attempts[0]);
    assert.equal(first.stage, 'debrief'); assert.equal(score(first), 0);
    assert.equal(choice.authorized, false); // Planning never waives the deployment gate.
    assert.ok(validateProgress(p));
    assert.strictEqual(transition(p, {type: 'finish', now}), p);
    p = transition(p, {type: 'begin', now});
    assert.equal(p.attempts.length, 2); assert.deepEqual(p.attempts[0], first);
    assert.ok(validateProgress(p));
  }
});

test('Committed checkpoints survive reload and duplicate commands do not score twice', () => {
  let raw: string | null = null;
  const storage = {getItem: (_: string) => raw, setItem: (_: string, value: string) => { raw = value; }};
  let p = emptyProgress();
  const commands = [
    {type: 'begin', now}, {type: 'continue'},
    ...phoenix.evidence.map(e => ({type: 'inspect', evidenceId: e.id})),
    {type: 'continue'}, {type: 'decide', choice: 'hybrid', reasoning: 'Tailor to the charter and feedback.'},
    {type: 'continue'}, {type: 'continue'},
    ...phoenix.items.map(i => ({type: 'answer', itemId: i.id, selected: i.correct})), {type: 'finish', now},
  ] as const;
  for (const command of commands) {
    p = commitProgress(storage, p, command);
    assert.deepEqual(loadProgress(storage), p);
  }
  assert.equal(score(latestAttempt(p)!), 6);
  let active = practiceReady();
  const answer = {type: 'answer', itemId: phoenix.items[0].id, selected: 1} as const;
  active = transition(active, answer);
  assert.strictEqual(transition(active, answer), active);
  assert.equal(latestAttempt(active)!.responses.length, 1);
});

test('Storage failure never acknowledges progress or overwrites corrupt data', () => {
  const storage = {getItem: () => 'broken JSON', setItem: () => { throw new Error('QuotaExceededError'); }};
  assert.throws(() => loadProgress(storage));
  const p = emptyProgress();
  assert.throws(() => commitProgress(storage, p, {type: 'begin', now}), /Quota/);
  assert.deepEqual(p, emptyProgress());
  assert.equal(QUEST_KEY, 'pmp_quest_v1');
  assert.equal(validateProgress({schema: 2, attempts: []}), false);
  const corrupt = practiceReady(); corrupt.attempts[0]!.responses = [{itemId: phoenix.items[5].id, selected: 100}];
  assert.equal(validateProgress(corrupt), false);
  const older = practiceReady(); older.attempts[0]!.version = 'old-version';
  assert.equal(validateProgress(older), false);
});


test('Optional notes can be omitted through completion and recovery; existing notes are retained', () => {
  for (const reasoning of ['', '   ', 'I chose this based on the charter.']) {
    let p = transition(decisionReady(), {type: 'decide', choice: 'hybrid', reasoning});
    assert.equal(latestAttempt(p)!.reasoning, reasoning.trim());
    assert.ok(validateProgress(p));
    p = transition(p, {type: 'continue'});
    p = transition(p, {type: 'continue'});
    for (const item of phoenix.items) p = transition(p, {type: 'answer', itemId: item.id, selected: item.correct});
    p = transition(p, {type: 'finish', now});
    assert.equal(latestAttempt(p)!.stage, 'debrief');
    assert.equal(score(latestAttempt(p)!), 6);
    assert.deepEqual(loadProgress({getItem: () => JSON.stringify(p), setItem: () => {}}), p);
  }
});
