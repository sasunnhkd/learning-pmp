// Daily Practice: question pool, topic taxonomy, session selection and stats.
// Pure data in, data out. Type-only imports keep it runnable under
// `node --experimental-strip-types` (tests/practice.test.ts), so the banks are passed in
// as parameters instead of imported here (src/state.ts builds the pool).
import type {
  PracticeData, PracticeMode, PracticeSession, QuestionBank, QuizQuestion,
} from './types';

export type Domain = 'People' | 'Process' | 'Business';

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
  { id: 'foundations', label: 'Foundations', domain: 'Process' },
  { id: 'integration', label: 'Integration & Change', domain: 'Process' },
  { id: 'scope', label: 'Scope', domain: 'Process' },
  { id: 'schedule', label: 'Schedule', domain: 'Process' },
  { id: 'cost', label: 'Cost & Finance', domain: 'Process' },
  { id: 'quality', label: 'Quality', domain: 'Process' },
  { id: 'risk', label: 'Risk', domain: 'Process' },
  { id: 'procurement', label: 'Procurement', domain: 'Process' },
  { id: 'agile', label: 'Agile & Hybrid', domain: 'Process' },
  { id: 'business', label: 'Business Environment', domain: 'Business' },
  { id: 'mindset', label: 'Exam Mindset', domain: 'Business' },
] as const satisfies readonly { id: string; label: string; domain: Domain }[];

export type TopicId = typeof TOPICS[number]['id'];
export const TOPIC_BY_ID = new Map<string, typeof TOPICS[number]>(TOPICS.map(t => [t.id, t]));

// Trainer QUIZ labels (data/practice-bank.json "topic") → practice topic. Tiny labels are folded
// into a bigger topic. A Trainer label missing here makes buildPool() throw (caught by the tests).
export const TRAINER_TOPIC: Record<string, TopicId> = {
  Team: 'team', Resources: 'team', Role: 'team',
  Stakeholder: 'stakeholders',
  Comms: 'comms',
  Integration: 'integration', Change: 'integration',
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
// PMP Examination Content Outline (July 2026): People 33% / Process 41% / Business 26% of 10.
export const EXAM_MIX: Record<Domain, number> = { People: 3, Process: 4, Business: 3 };
// "Needs work" = accuracy below WEAK_ACCURACY after at least MIN_ATTEMPTS answers in the topic.
export const WEAK_ACCURACY = 0.7;
export const MIN_ATTEMPTS = 3;
// Saved session history is capped so localStorage stays small.
export const MAX_SESSIONS = 100;

export type PracticeQuestion = QuizQuestion & { id: string; topic: TopicId };
export type TrainerRow = QuizQuestion & { topic: string };

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

export function buildPool(dayBank: QuestionBank, trainer: TrainerRow[]): PracticeQuestion[] {
  const pool: PracticeQuestion[] = [];
  const seen = new Set<string>();
  const add = (q: QuizQuestion, topic: TopicId | undefined, where: string) => {
    if (!topic) throw new Error(`No practice topic for ${where}`);
    const id = questionId(q.q);
    if (seen.has(id)) return; // same stem in both banks: keep the first copy
    seen.add(id);
    pool.push({ q: q.q, options: q.options, correct: q.correct, explain: q.explain, id, topic });
  };
  for (const [day, qs] of Object.entries(dayBank)) {
    qs.forEach((q, i) => add(q, DAY_TOPIC[Number(day)], `day ${day} question ${i + 1}`));
  }
  trainer.forEach((r, i) => add(r, TRAINER_TOPIC[r.topic], `Trainer QUIZ entry ${i + 1} ("${r.topic}")`));
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

// Up to SESSION_SIZE questions, in random order. Fewer when the chosen pool is smaller;
// the caller shows the real count instead of padding.
export function selectSession(
  pool: PracticeQuestion[],
  practice: PracticeData,
  mode: PracticeMode,
  topics: string[],
  rng: Rng = Math.random,
): PracticeQuestion[] {
  const stats = practice.questions;
  if (mode === 'topics') {
    const want = new Set(topics);
    return shuffle(pickFrom(pool.filter(q => want.has(q.topic)), SESSION_SIZE, stats, rng), rng);
  }
  if (mode === 'mistakes') {
    // Most recent mistakes first: they are the freshest gaps.
    const picked = pool
      .filter(q => stats[q.id] && !stats[q.id]!.lastCorrect)
      .sort((a, b) => stats[b.id]!.lastAt - stats[a.id]!.lastAt)
      .slice(0, SESSION_SIZE);
    return shuffle(picked, rng);
  }
  // Exam mix: fill each domain's quota, then top up from whatever is left if a domain ran short.
  const picked: PracticeQuestion[] = [];
  for (const domain of Object.keys(EXAM_MIX) as Domain[]) {
    const inDomain = pool.filter(q => TOPIC_BY_ID.get(q.topic)!.domain === domain);
    picked.push(...pickFrom(inDomain, EXAM_MIX[domain], stats, rng));
  }
  if (picked.length < SESSION_SIZE) {
    const taken = new Set(picked.map(q => q.id));
    picked.push(...pickFrom(pool.filter(q => !taken.has(q.id)), SESSION_SIZE - picked.length, stats, rng));
  }
  return shuffle(picked, rng);
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
  domain: Domain;
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
    const ts = topics.filter(t => t.domain === domain);
    return { domain, attempts: ts.reduce((n, t) => n + t.attempts, 0), correct: ts.reduce((n, t) => n + t.correct, 0) };
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
