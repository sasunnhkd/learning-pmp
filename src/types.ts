export type Lesson = {
  day: number;
  week: number;
  title: string;
  domain: string;
  lesson: string;
  keyTerms: string[];
};

// One question. `type` is absent for the classic single-answer question (day bank, Trainer).
// - 'single': `correct` is the right option index.
// - 'multi':  "Choose N". `correct` lists the N right option indices (any order); N = its length.
// - 'order':  "Put in order". `correct` lists every option index in the right order.
// Scoring and selection rules live in src/items.ts.
export type ItemType = 'single' | 'multi' | 'order';

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: number | number[];
  explain: string;
  type?: ItemType;
  // Required in authored banks; null marks supplemental study outside weighted exam drills.
  ecoTask?: import('./eco').EcoTaskId | null;
};

export type QuestionBank = Record<string, QuizQuestion[]>;

export type QuizScore = {
  score: number;
  total: number;
  date: string;
};

export type AppData = {
  streak: number;
  lastStudyDate: string | null;
  completedDays: number[];
  quizScores: Record<string, QuizScore>;
  totalCorrect: number;
  totalAnswered: number;
  startDate: string;
  practice: PracticeData; // missing in data saved before v0.5.0; loadOrInit() in state.ts fills it
  activePractice?: PracticeCheckpoint | null;
};

// Daily Practice (src/practice.ts). Keys of `questions` are questionId() of the stem.
export type PracticeMode = 'mix' | 'topics' | 'mistakes' | 'mock';
export type MockLength = 'mini' | 'full';

export type QuestionStat = {
  seen: number;
  correct: number;
  lastCorrect: boolean;
  lastAt: number; // epoch ms
};

export type PracticeSession = {
  date: string; // today() format, same as lastStudyDate
  mode: PracticeMode;
  topics: string[]; // chosen topic ids (mode 'topics' only)
  score: number;
  total: number;
  // Mock exams only (mode 'mock'); absent on older and non-mock sessions.
  mock?: { length: MockLength; secondsUsed: number; timedOut: boolean; byDomain: Record<string, { right: number; total: number }> };
};

export type PracticeData = {
  questions: Record<string, QuestionStat>;
  sessions: PracticeSession[];
  lastDate: string | null;
};

export type View = 'dashboard' | 'lesson' | 'quiz' | 'all' | 'practice' | 'stats' | 'quest';

export type QuizState = {
  kind: 'day' | 'practice'; // 'practice' never touches quizScores or completedDays
  day: number; // 0 for practice
  questions: QuizQuestion[];
  ids: string[]; // questionId() per question, for per-question stats
  topics: string[]; // practice topic id per question
  practice: { mode: PracticeMode; topics: string[] } | null;
  mock: MockRun | null; // set only for mode 'mock'
  idx: number;
  // Selections are option indices: one for 'single', N for 'multi', the tapped order for 'order'.
  // An empty array = no answer (a skipped or never-reached mock question).
  answers: { selected: number[]; correct: boolean }[];
  selected: number[];
  showExplain: boolean;
  finished: boolean;
};

export type PracticeCheckpoint = Pick<QuizState, 'ids' | 'idx' | 'answers' | 'selected' | 'showExplain'> & {
  itemSignatures: string[];
  mode: Exclude<PracticeMode, 'mock'>;
  topics: string[];
};

// Mock exam clock. Time used = elapsedMs + (now - runningSince) while running; paused when
// runningSince is null. Pure helpers in src/mock.ts; the in-progress run is also saved under its
// own localStorage key (MOCK_KEY in src/state.ts) so a reload offers Resume.
export type MockRun = {
  length: MockLength;
  limitMs: number;
  elapsedMs: number;
  runningSince: number | null;
};

export type AppState = {
  view: View;
  selectedDay: number | null;
  quiz: QuizState | null;
  practicePick: { mode: PracticeMode; topics: string[]; mockLength: MockLength }; // picker selection, not persisted
  data: AppData;
  deferredPrompt: BeforeInstallPromptEvent | null;
  showInstall: boolean;
};

export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
