import curriculumData from '../data/curriculum.json';
import questionsData from '../data/questions.json';
import practiceBankData from '../data/practice-bank.json';
import { buildPool, defaultPractice, type TrainerRow } from './practice';
import type { AppData, AppState, Lesson, QuestionBank } from './types';

export const curriculum = curriculumData as Lesson[];
export const questionBank = questionsData as QuestionBank;
// Day quizzes + the Mindset Trainer's QUIZ (copied by scripts/extract-trainer-quiz.mjs).
export const practicePool = buildPool(questionBank, practiceBankData as TrainerRow[]);

const STORAGE_KEY = 'pmp_data_v1';

export function defaultData(): AppData {
  return {
    streak: 0,
    lastStudyDate: null,
    completedDays: [],
    quizScores: {},
    totalCorrect: 0,
    totalAnswered: 0,
    startDate: new Date().toISOString(),
    practice: defaultPractice(),
  };
}

function persist(d: AppData): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch { /* ignore */ }
}

function loadOrInit(): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    // Spread over defaults so data saved by older versions (no `practice`) still loads.
    if (raw) {
      const saved = JSON.parse(raw) as Partial<AppData>;
      return { ...defaultData(), ...saved, practice: { ...defaultPractice(), ...saved.practice } };
    }
  } catch { /* ignore */ }
  const d = defaultData();
  persist(d);
  return d;
}

export const state: AppState = {
  view: 'dashboard',
  selectedDay: null,
  quiz: null,
  practicePick: { mode: 'mix', topics: [] },
  data: loadOrInit(),
  deferredPrompt: null,
  showInstall: false,
};

export function saveData(d: AppData): void {
  state.data = d;
  persist(d);
}

export const today = (): string => new Date().toDateString();
export const yesterday = (): string => new Date(Date.now() - 86400000).toDateString();

export function getCurrentDay(): number {
  if (!state.data.startDate) return 1;
  const diff = Math.floor((Date.now() - new Date(state.data.startDate).getTime()) / 86400000) + 1;
  return Math.min(Math.max(diff, 1), 28);
}

export function esc(s: string | number): string {
  const map: Record<string, string> = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' };
  return String(s).replace(/[&<>"']/g, c => map[c]!);
}
