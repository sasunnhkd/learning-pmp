import curriculumData from '../data/curriculum.json';
import questionsData from '../data/questions.json';
import type { AppData, AppState, Lesson, QuestionBank } from './types';

export const curriculum = curriculumData as Lesson[];
export const questionBank = questionsData as QuestionBank;

const STORAGE_KEY = 'pmp_data_v1';

function defaultData(): AppData {
  return {
    streak: 0,
    lastStudyDate: null,
    completedDays: [],
    quizScores: {},
    totalCorrect: 0,
    totalAnswered: 0,
    startDate: new Date().toISOString(),
  };
}

function persist(d: AppData): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch { /* ignore */ }
}

function loadOrInit(): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as AppData;
  } catch { /* ignore */ }
  const d = defaultData();
  persist(d);
  return d;
}

export const state: AppState = {
  view: 'dashboard',
  selectedDay: null,
  quiz: null,
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
