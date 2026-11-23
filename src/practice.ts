// Daily Practice: question pool, topic taxonomy, session selection and stats.
// Pure data in, data out. No DOM or JSON imports keep it runnable under
// `node --experimental-strip-types` (tests/practice.test.ts), so the banks are passed in
// as parameters instead of imported here (src/state.ts builds the pool). The only runtime
// import is ./items.ts (also pure); it carries the .ts extension because Node needs it
// (tsconfig allowImportingTsExtensions).
import type {
  PracticeData, PracticeMode, PracticeSession, QuestionBank, QuizQuestion,
} from './types';
import { validateQuestion } from './items.ts';
import { domainOf, isEcoTask, type Domain, type EcoTaskId } from './eco.ts';
export { domainOf, type Domain } from './eco.ts';


export const DOMAIN_LABEL: Record<Domain, string> = {
  People: 'People',
  Process: 'Process',
  Business: 'Business Environment',
};

// The picker groups and the exam mix both read this table. A topic id is stored in saved
// sessions, so rename the label freely but never an existing id.
export const TOPICS = [
  { id: 'team', label: 'Team & Leadership', domain: 'People' },
  { id: 'stakeholders', label: 'Stakeholders', domain: 'People' },
  { id: 'comms', label: 'Communications', domain: 'People' },
  { id: 'foundations', label: 'Foundations', domain: null },
  { id: 'integration', label: 'Integration', domain: null },
  { id: 'change', label: 'Change Control', domain: 'Business' },
  { id: 'resources', label: 'Resource Management', domain: 'Process' },
  { id: 'scope', label: 'Scope', domain: 'Process' },
  { id: 'schedule', label: 'Schedule', domain: 'Process' },
  { id: 'cost', label: 'Cost & Finance', domain: 'Process' },
  { id: 'quality', label: 'Quality', domain: 'Process' },
  { id: 'risk', label: 'Risk', domain: 'Business' },
  { id: 'procurement', label: 'Procurement', domain: 'Process' },
  { id: 'agile', label: 'Agile & Hybrid', domain: null },
  { id: 'business', label: 'Business Environment', domain: 'Business' },
  { id: 'mindset', label: 'Exam Mindset', domain: null },
] as const satisfies readonly { id: string; label: string; domain: Domain | null }[];

export type TopicId = typeof TOPICS[number]['id'];
export const TOPIC_BY_ID = new Map<string, typeof TOPICS[number]>(TOPICS.map(t => [t.id, t]));

// Trainer QUIZ labels (data/practice-bank.json "topic") → practice topic. Tiny labels are folded
// into a bigger topic. A Trainer label missing here makes buildPool() throw (caught by the tests).
export const TRAINER_TOPIC: Record<string, TopicId> = {
  Team: 'team', Resources: 'resources', Role: 'team',
  Stakeholder: 'stakeholders',
  Comms: 'comms',
  Integration: 'integration', Change: 'change',
  Scope: 'scope',
  Schedule: 'schedule',
  Cost: 'cost',
  Quality: 'quality',
  Risk: 'risk',
  Procurement: 'procurement',
  Agile: 'agile',
  Business: 'business',
  Mindset: 'mindset',
};

// Day quiz (data/questions.json key) → practice topic. Mapped per day, not per curriculum
// domain, because "Planning" spans scope, schedule, quality and risk.
export const DAY_TOPIC: Record<number, TopicId> = {
  1: 'foundations', 2: 'foundations', 3: 'foundations', 4: 'foundations', 5: 'foundations',
  6: 'agile', 7: 'foundations',
  8: 'stakeholders', 9: 'stakeholders',
  10: 'team', 11: 'team', 12: 'team', 13: 'team', 14: 'team',
  15: 'integration', 16: 'scope', 17: 'schedule', 18: 'cost', 19: 'quality', 20: 'risk', 21: 'integration',
  22: 'business', 23: 'cost', 24: 'business',
  25: 'agile', 26: 'agile', 27: 'mindset', 28: 'mindset',
};

export const SESSION_SIZE = 10;
// PMP Examination Content Outline (July 2026) domain weights.
export const EXAM_WEIGHTS: Record<Domain, number> = { People: 0.33, Process: 0.41, Business: 0.26 };

// Questions per domain for a session of `size`, by largest remainder so the parts always sum
// to `size`: 10 → 3/4/3, 180 → 59/74/47. Ties follow domain order.
export function splitMix(size: number): Record<Domain, number> {
  const domains = Object.keys(EXAM_WEIGHTS) as Domain[];
  const raw = domains.map(d => ({ d, x: EXAM_WEIGHTS[d] * size }));
  const out = Object.fromEntries(raw.map(r => [r.d, Math.floor(r.x)])) as Record<Domain, number>;
  let left = size - domains.reduce((n, d) => n + out[d], 0);
  for (const r of [...raw].sort((a, b) => Math.round(((b.x % 1) - (a.x % 1)) * 1e10))) {
    if (left-- <= 0) break;
    out[r.d]++;
  }
  return out;
}
export const EXAM_MIX = splitMix(SESSION_SIZE);
// "Needs work" = accuracy below WEAK_ACCURACY after at least MIN_ATTEMPTS answers in the topic.
export const WEAK_ACCURACY = 0.7;
export const MIN_ATTEMPTS = 3;
// Saved session history is capped so localStorage stays small.
export const MAX_SESSIONS = 100;

export type BankQuestion = QuizQuestion & { ecoTask: EcoTaskId | null };
export type PracticeQuestion = BankQuestion & { id: string; topic: TopicId };
export type TrainerRow = BankQuestion & { topic: string };
// data/item-bank.json: multi-select and ordering items, tagged directly with a practice topic id.
export type ItemRow = BankQuestion & { topic: string };

// Stable id from the question stem (FNV-1a 32-bit), so reordering a bank keeps saved stats.
// Editing a stem gives it a new id: its old stats stay in storage but stop counting.
export function questionId(stem: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < stem.length; i++) {
    h ^= stem.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return 'q' + (h >>> 0).toString(36);
}

// Saved selections are option indices. Verify that they still refer to the same
// choices and grading rules even when the stem (and therefore ID) is unchanged.
export function practiceItemSignature(question: QuizQuestion): string {
  return JSON.stringify([question.type ?? 'single', question.options, question.correct, question.ecoTask]);
}

// Throws on an unknown topic or a malformed question, so a bad bank fails the tests and the
// build instead of breaking a quiz screen.
export function buildPool(dayBank: QuestionBank, trainer: TrainerRow[], items: ItemRow[] = []): PracticeQuestion[] {
  const pool: PracticeQuestion[] = [];
  const seen = new Set<string>();
  const add = (q: QuizQuestion, topic: TopicId | undefined, where: string) => {
    if (!topic) throw new Error(`No practice topic for ${where}`);
    const errs = validateQuestion(q);
    if (errs.length) throw new Error(`${where}: ${errs.join('; ')}`);
    const ecoTask = q.ecoTask;
    if (ecoTask !== null && !isEcoTask(ecoTask)) throw new Error(`${where}: invalid or missing ecoTask`);
    const id = questionId(q.q);
    if (seen.has(id)) return; // same stem in two banks: keep the first copy
    seen.add(id);
    // Copy field by field (no spread) so bank-only fields like `topic` labels don't leak in.
    const copy: PracticeQuestion = { q: q.q, options: q.options, correct: q.correct, explain: q.explain, ecoTask, id, topic };
    if (q.type) copy.type = q.type;
    pool.push(copy);
  };
  for (const [day, qs] of Object.entries(dayBank)) {
    qs.forEach((q, i) => add(q, DAY_TOPIC[Number(day)], `day ${day} question ${i + 1}`));
  }
  trainer.forEach((r, i) => add(r, TRAINER_TOPIC[r.topic], `Trainer QUIZ entry ${i + 1} ("${r.topic}")`));
  items.forEach((r, i) => add(r, TOPIC_BY_ID.get(r.topic)?.id, `item-bank entry ${i + 1} ("${r.topic}")`));
  return pool;
}

export function defaultPractice(): PracticeData {
  return { questions: {}, sessions: [], lastDate: null };
}

type Rng = () => number;

function shuffle<T>(xs: T[], rng: Rng): T[] {
  const a = xs.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

// Order: never seen, then last answered wrong, then the longest ago. Ties are random.
function pickFrom(cands: PracticeQuestion[], n: number, stats: PracticeData['questions'], rng: Rng): PracticeQuestion[] {
  const rank = (q: PracticeQuestion) => {
    const s = stats[q.id];
    return s ? (s.lastCorrect ? 2 : 1) : 0;
  };
  return shuffle(cands, rng)
    .map(q => ({ q, r: rank(q), at: stats[q.id]?.lastAt ?? 0 }))
    .sort((a, b) => a.r - b.r || a.at - b.at)
    .slice(0, n)
    .map(x => x.q);
}

// Up to `size` questions (SESSION_SIZE unless a mock passes its length), in random order.
// Fewer when the chosen pool is smaller; the caller shows the real count instead of padding.
// 'mix' and 'mock' both use the exam split (splitMix); they differ only in size and in how the
// quiz screen runs them.
export function selectSession(
  pool: PracticeQuestion[],
  practice: PracticeData,
  mode: PracticeMode,
  topics: string[],
  rng: Rng = Math.random,
  size: number = SESSION_SIZE,
): PracticeQuestion[] {
  const stats = practice.questions;
  if (mode === 'topics') {
    const want = new Set(topics);
    return shuffle(pickFrom(pool.filter(q => want.has(q.topic)), size, stats, rng), rng);
  }
  if (mode === 'mistakes') {
    // Most recent mistakes first: they are the freshest gaps.
    const picked = pool
      .filter(q => stats[q.id] && !stats[q.id]!.lastCorrect)
      .sort((a, b) => stats[b.id]!.lastAt - stats[a.id]!.lastAt)
      .slice(0, size);
    return shuffle(picked, rng);
  }
  // Exam mix: fill each domain's quota, then top up from whatever is left if a domain ran short.
  const quota = splitMix(size);
  const examPool = pool.filter(q => domainOf(q) !== null);
  const picked: PracticeQuestion[] = [];
  for (const domain of Object.keys(quota) as Domain[]) {
    const inDomain = examPool.filter(q => domainOf(q) === domain);
    picked.push(...pickFrom(inDomain, quota[domain], stats, rng));
  }
  if (picked.length < size) {
    const taken = new Set(picked.map(q => q.id));
    picked.push(...pickFrom(examPool.filter(q => !taken.has(q.id)), size - picked.length, stats, rng));
  }
  return shuffle(picked, rng);
}

// Questions per domain in a picked list (the mock setup card shows the real split).
export function countByDomain(qs: QuizQuestion[]): Record<Domain, number> {
  const out: Record<Domain, number> = { People: 0, Process: 0, Business: 0 };
  for (const q of qs) {
    const domain = domainOf(q);
    if (domain) out[domain]++;
  }
  return out;
}

// ---- Readiness (our estimate on PMI's four report bands) ----
// PMI names the bands but publishes no cut-offs, so these thresholds are ours.
export type Band = 'above' | 'target' | 'below' | 'needs';
export const BAND_LABEL: Record<Band, string> = {
  above: 'Above Target', target: 'Target', below: 'Below Target', needs: 'Needs Improvement',
};
// Lower bound of each band, highest first. share >= 0.8 → above, >= 0.7 → target, >= 0.6 → below.
export const BAND_FLOORS: [Band, number][] = [['above', 0.8], ['target', 0.7], ['below', 0.6], ['needs', 0]];
// A domain gets no band until this many different questions in it have been answered.
export const READINESS_MIN_SEEN = 20;

export function bandFor(share: number): Band {
  for (const [band, floor] of BAND_FLOORS) if (share >= floor) return band;
  return 'needs';
}

export type DomainReadiness = { domain: Domain; seen: number; right: number; share: number | null; band: Band | null };

// Per domain: of the questions answered at least once, the share whose LATEST answer was right.
// Latest (not lifetime) so fixing a mistake counts. Questions no longer in the pool are ignored.
export function computeReadiness(pool: PracticeQuestion[], practice: PracticeData): DomainReadiness[] {
  const acc: Record<Domain, { seen: number; right: number }> = {
    People: { seen: 0, right: 0 }, Process: { seen: 0, right: 0 }, Business: { seen: 0, right: 0 },
  };
  for (const q of pool) {
    const s = practice.questions[q.id];
    if (!s) continue;
    const domain = domainOf(q);
    if (!domain) continue;
    const a = acc[domain];
    a.seen++;
    if (s.lastCorrect) a.right++;
  }
  return (Object.keys(DOMAIN_LABEL) as Domain[]).map(domain => {
    const { seen, right } = acc[domain];
    const share = seen > 0 ? right / seen : null;
    return { domain, seen, right, share, band: share !== null && seen >= READINESS_MIN_SEEN ? bandFor(share) : null };
  });
}

export function recordAnswer(practice: PracticeData, id: string, correct: boolean, now: number): PracticeData {
  const prev = practice.questions[id];
  return {
    ...practice,
    questions: {
      ...practice.questions,
      [id]: {
        seen: (prev?.seen ?? 0) + 1,
        correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
        lastCorrect: correct,
        lastAt: now,
      },
    },
  };
}

export function finishSession(practice: PracticeData, session: PracticeSession): PracticeData {
  return { ...practice, sessions: [...practice.sessions, session].slice(-MAX_SESSIONS), lastDate: session.date };
}

export type TopicStatus = 'new' | 'weak' | 'ok';
export type TopicStat = {
  id: TopicId;
  label: string;
  domain: Domain | null;
  poolSize: number;
  seenUnique: number;
  attempts: number;
  correct: number;
  accuracy: number | null; // null when attempts === 0
  status: TopicStatus;
};

export function topicStatus(attempts: number, correct: number): TopicStatus {
  if (attempts === 0) return 'new';
  return attempts >= MIN_ATTEMPTS && correct / attempts < WEAK_ACCURACY ? 'weak' : 'ok';
}

export type PracticeStats = {
  topics: TopicStat[];
  domains: { domain: Domain; attempts: number; correct: number }[];
  poolSize: number;
  seenUnique: number;
  attempts: number;
  correct: number;
  covered: number;
  mistakes: number;
  sessions: number;
  recent: PracticeSession[]; // last 10, oldest first
};

// Answers to questions no longer in the pool (stem edited or removed) are ignored.
export function computeStats(pool: PracticeQuestion[], practice: PracticeData): PracticeStats {
  const topics: TopicStat[] = TOPICS.map(t => ({
    id: t.id, label: t.label, domain: t.domain,
    poolSize: 0, seenUnique: 0, attempts: 0, correct: 0, accuracy: null, status: 'new',
  }));
  const byId = new Map(topics.map(t => [t.id as string, t]));
  let mistakes = 0;
  for (const q of pool) {
    const t = byId.get(q.topic)!;
    t.poolSize++;
    const s = practice.questions[q.id];
    if (!s) continue;
    t.seenUnique++;
    t.attempts += s.seen;
    t.correct += s.correct;
    if (!s.lastCorrect) mistakes++;
  }
  for (const t of topics) {
    t.accuracy = t.attempts > 0 ? t.correct / t.attempts : null;
    t.status = topicStatus(t.attempts, t.correct);
  }
  const domains = (Object.keys(DOMAIN_LABEL) as Domain[]).map(domain => {
    let attempts = 0;
    let correct = 0;
    for (const q of pool) {
      const s = practice.questions[q.id];
      if (s && domainOf(q) === domain) { attempts += s.seen; correct += s.correct; }
    }
    return { domain, attempts, correct };
  });
  const sum = (k: 'seenUnique' | 'attempts' | 'correct') => topics.reduce((n, t) => n + t[k], 0);
  return {
    topics,
    domains,
    poolSize: pool.length,
    seenUnique: sum('seenUnique'),
    attempts: sum('attempts'),
    correct: sum('correct'),
    covered: topics.filter(t => t.attempts > 0).length,
    mistakes,
    sessions: practice.sessions.length,
    recent: practice.sessions.slice(-10),
  };
}
