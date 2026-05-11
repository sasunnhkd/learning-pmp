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
};

export type View = 'dashboard' | 'lesson' | 'quiz' | 'all';

export type QuizState = {
  day: number;
  questions: QuizQuestion[];
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
  data: AppData;
  deferredPrompt: BeforeInstallPromptEvent | null;
  showInstall: boolean;
};

export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
