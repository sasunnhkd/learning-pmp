import curriculumData from '../data/curriculum.json';
import questionsData from '../data/questions.json';
import practiceBankData from '../data/practice-bank.json';
import itemBankData from '../data/item-bank.json';
import { buildPool, defaultPractice, practiceItemSignature, SESSION_SIZE, type ItemRow, type TrainerRow } from './practice';
import { requiredPicks } from './items';
import { isSavedMock, mockMatchesQuestions, type SavedMock } from './mock';
import type { AppData, AppState, Lesson, QuestionBank, QuizQuestion, QuizState } from './types';

export const curriculum = curriculumData as Lesson[];
export const questionBank = questionsData as QuestionBank;
// Day quizzes + the Mindset Trainer's QUIZ (copied by scripts/extract-trainer-quiz.mjs)
// + the multi-select / ordering items (data/item-bank.json). buildPool validates every shape.
export const practicePool = buildPool(questionBank, practiceBankData as TrainerRow[], itemBankData as ItemRow[]);
export const poolById = new Map(practicePool.map(q => [q.id, q]));

const STORAGE_KEY = 'pmp_data_v1';
// Unfinished mock exam (SavedMock in src/mock.ts). Separate from AppData so a 180-question run
// doesn't rewrite the main record on every tap, and so clearing it can't touch real progress.
const MOCK_KEY = 'pmp_mock_v1';

export function loadSavedMock(): SavedMock | null {
  try {
    const raw = localStorage.getItem(MOCK_KEY);
    const x = raw ? JSON.parse(raw) as unknown : null;
    return isSavedMock(x) && mockMatchesQuestions(x, x.ids.map(id => poolById.get(id))) ? x : null;
  } catch { return null; }
}

export function hasOutdatedMock(): boolean {
  try { return !!localStorage.getItem(MOCK_KEY) && !loadSavedMock(); } catch { return false; }
}

export function storeSavedMock(m: SavedMock | null): void {
  try {
    if (m) localStorage.setItem(MOCK_KEY, JSON.stringify(m));
    else localStorage.removeItem(MOCK_KEY);
  } catch { /* ignore */ }
}

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
  practicePick: { mode: 'mix', topics: [], mockLength: 'mini' },
  data: loadOrInit(),
  deferredPrompt: null,
  showInstall: false,
};

export function saveData(d: AppData): void {
  state.data = d;
  persist(d);
}

function validSelection(question: QuizQuestion, selection: unknown, complete: boolean): boolean {
  if (!Array.isArray(selection)) return false;
  const limit = requiredPicks(question);
  return (complete ? selection.length === limit : selection.length <= limit)
    && new Set(selection).size === selection.length
    && selection.every(i => Number.isInteger(i) && i >= 0 && i < question.options.length);
}

export function loadActivePractice(): QuizState | null {
  const saved = state.data.activePractice;
  if (!saved || !['mix', 'topics', 'mistakes'].includes(saved.mode)
    || !Array.isArray(saved.topics) || !saved.topics.every(t => typeof t === 'string')
    || !Array.isArray(saved.ids) || saved.ids.length > SESSION_SIZE
    || !Array.isArray(saved.itemSignatures) || saved.itemSignatures.length !== saved.ids.length
    || !Number.isInteger(saved.idx) || saved.idx < 0 || saved.idx >= saved.ids.length
    || !Array.isArray(saved.answers) || saved.answers.length !== saved.idx
    || typeof saved.showExplain !== 'boolean') return null;
  const questions = saved.ids.map(id => poolById.get(id)).filter(q => q !== undefined);
  if (questions.length !== saved.ids.length
    || questions.some((q, i) => practiceItemSignature(q) !== saved.itemSignatures[i])
    || !saved.answers.every((a, i) => a && typeof a.correct === 'boolean' && validSelection(questions[i]!, a.selected, true))
    || !validSelection(questions[saved.idx]!, saved.selected, saved.showExplain)) return null;
  return {
    kind: 'practice', day: 0, questions, mock: null, finished: false,
    practice: { mode: saved.mode, topics: saved.topics },
    ids: saved.ids, topics: questions.map(q => q.topic), idx: saved.idx,
    answers: saved.answers, selected: saved.selected, showExplain: saved.showExplain,
  };
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
