import { state, saveData, today, yesterday, questionBank } from './state';
import { render } from './render';
import type { View } from './types';

export function completeLesson(day: number): void {
  const d = state.data;
  const newCompleted = d.completedDays.includes(day) ? d.completedDays : [...d.completedDays, day];
  let newStreak = d.streak;
  if (d.lastStudyDate !== today()) {
    if (d.lastStudyDate === yesterday() || d.streak === 0) {
      newStreak = d.streak + 1;
    } else {
      newStreak = 1;
    }
  }
  saveData({ ...d, completedDays: newCompleted, lastStudyDate: today(), streak: newStreak });
}

export function startQuiz(day: number): void {
  const questions = questionBank[String(day)] ?? questionBank['1'];
  if (!questions) return;
  state.quiz = { day, questions, idx: 0, answers: [], selected: null, showExplain: false, finished: false };
  state.view = 'quiz';
  render();
}

export function selectOption(i: number): void {
  if (!state.quiz || state.quiz.showExplain) return;
  state.quiz.selected = i;
  render();
}

export function submitAnswer(): void {
  if (!state.quiz || state.quiz.selected === null) return;
  state.quiz.showExplain = true;
  render();
}

export function nextQuestion(): void {
  const q = state.quiz;
  if (!q) return;
  const current = q.questions[q.idx]!;
  const correct = q.selected === current.correct;
  q.answers.push({ selected: q.selected, correct });
  if (q.idx + 1 >= q.questions.length) {
    const correctCount = q.answers.filter(a => a.correct).length;
    const d = state.data;
    const newScores = {
      ...d.quizScores,
      [q.day]: { score: correctCount, total: q.questions.length, date: today() },
    };
    saveData({
      ...d,
      quizScores: newScores,
      totalCorrect: d.totalCorrect + correctCount,
      totalAnswered: d.totalAnswered + q.questions.length,
    });
    completeLesson(q.day);
    q.finished = true;
  } else {
    q.idx++;
    q.selected = null;
    q.showExplain = false;
  }
  render();
}

export function navigate(view: View, day?: number): void {
  state.view = view;
  if (day !== undefined) state.selectedDay = day;
  if (view === 'dashboard') state.quiz = null;
  window.scrollTo(0, 0);
  render();
}

export function resetProgress(): void {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  saveData({
    streak: 0,
    lastStudyDate: null,
    completedDays: [],
    quizScores: {},
    totalCorrect: 0,
    totalAnswered: 0,
    startDate: new Date().toISOString(),
  });
  navigate('dashboard');
}

export function installApp(): void {
  if (state.deferredPrompt) {
    state.deferredPrompt.prompt();
    state.deferredPrompt.userChoice.then(() => {
      state.deferredPrompt = null;
      state.showInstall = false;
      render();
    });
  } else {
    alert('To install:\n\niOS: Tap Share → "Add to Home Screen"\nAndroid: Tap menu (⋮) → "Install app" or "Add to Home screen"');
  }
}

export function dismissInstall(): void {
  state.showInstall = false;
  try { localStorage.setItem('pmp_install_dismissed', '1'); } catch { /* ignore */ }
  render();
}

declare global {
  interface Window {
    completeLesson: typeof completeLesson;
    startQuiz: typeof startQuiz;
    selectOption: typeof selectOption;
    submitAnswer: typeof submitAnswer;
    nextQuestion: typeof nextQuestion;
    navigate: typeof navigate;
    resetProgress: typeof resetProgress;
    installApp: typeof installApp;
    dismissInstall: typeof dismissInstall;
  }
}

export function exposeActions(): void {
  window.completeLesson = completeLesson;
  window.startQuiz = startQuiz;
  window.selectOption = selectOption;
  window.submitAnswer = submitAnswer;
  window.nextQuestion = nextQuestion;
  window.navigate = navigate;
  window.resetProgress = resetProgress;
  window.installApp = installApp;
  window.dismissInstall = dismissInstall;
}
