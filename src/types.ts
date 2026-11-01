export type Lesson = {
  day: number;
  week: number;
  title: string;
  domain: string;
  lesson: string;
  keyTerms: string[];
};

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: number;
  explain: string;
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
};

// Daily Practice (src/practice.ts). Keys of `questions` are questionId() of the stem.
export type PracticeMode = 'mix' | 'topics' | 'mistakes';

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
};

export type PracticeData = {
  questions: Record<string, QuestionStat>;
  sessions: PracticeSession[];
  lastDate: string | null;
};

export type View = 'dashboard' | 'lesson' | 'quiz' | 'all' | 'practice' | 'stats';

export type QuizState = {
  kind: 'day' | 'practice'; // 'practice' never touches quizScores or completedDays
  day: number; // 0 for practice
  questions: QuizQuestion[];
  ids: string[]; // questionId() per question, for per-question stats
  topics: string[]; // practice topic id per question
  practice: { mode: PracticeMode; topics: string[] } | null;
  idx: number;
  answers: { selected: number | null; correct: boolean }[];
  selected: number | null;
  showExplain: boolean;
  finished: boolean;
};

export type AppState = {
  view: View;
  selectedDay: number | null;
  quiz: QuizState | null;
  practicePick: { mode: PracticeMode; topics: string[] }; // picker selection, not persisted
  data: AppData;
  deferredPrompt: BeforeInstallPromptEvent | null;
  showInstall: boolean;
};

export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
