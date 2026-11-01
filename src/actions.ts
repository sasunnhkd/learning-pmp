import { state, saveData, today, yesterday, questionBank, practicePool, defaultData } from './state';
import { render } from './render';
import { DAY_TOPIC, questionId, recordAnswer, finishSession, selectSession } from './practice';
import type { AppData, PracticeMode, View } from './types';

// Streak goes up at most once per calendar date, whether the study was a lesson quiz or a
// Daily Practice session.
function bumpStreak(d: AppData): Pick<AppData, 'streak' | 'lastStudyDate'> {
  if (d.lastStudyDate === today()) return { streak: d.streak, lastStudyDate: d.lastStudyDate };
  const streak = d.lastStudyDate === yesterday() || d.streak === 0 ? d.streak + 1 : 1;
  return { streak, lastStudyDate: today() };
}

export function completeLesson(day: number): void {
  const d = state.data;
  const newCompleted = d.completedDays.includes(day) ? d.completedDays : [...d.completedDays, day];
  saveData({ ...d, completedDays: newCompleted, ...bumpStreak(d) });
}

export function startQuiz(day: number): void {
  const questions = questionBank[String(day)] ?? questionBank['1'];
  if (!questions) return;
  const topic = DAY_TOPIC[day] ?? '';
  state.quiz = {
    kind: 'day', day, questions, practice: null,
    ids: questions.map(q => questionId(q.q)), topics: questions.map(() => topic),
    idx: 0, answers: [], selected: null, showExplain: false, finished: false,
  };
  state.view = 'quiz';
  render();
}

// Picker (views/practice.ts renderPracticePicker).
export function setPracticeMode(mode: PracticeMode): void {
  state.practicePick = { ...state.practicePick, mode };
  render();
}

export function toggleTopic(id: string): void {
  const { topics } = state.practicePick;
  state.practicePick = {
    mode: 'topics',
    topics: topics.includes(id) ? topics.filter(t => t !== id) : [...topics, id],
  };
  render();
}

export function startPractice(mode: PracticeMode = state.practicePick.mode): void {
  const topics = mode === 'topics' ? state.practicePick.topics : [];
  const picked = selectSession(practicePool, state.data.practice, mode, topics);
  if (picked.length === 0) return;
  state.quiz = {
    kind: 'practice', day: 0, questions: picked, practice: { mode, topics },
    ids: picked.map(q => q.id), topics: picked.map(q => q.topic),
    idx: 0, answers: [], selected: null, showExplain: false, finished: false,
  };
  state.view = 'quiz';
  window.scrollTo(0, 0);
  render();
}

export function selectOption(i: number): void {
  if (!state.quiz || state.quiz.showExplain) return;
  state.quiz.selected = i;
  render();
}

export function submitAnswer(): void {
  const q = state.quiz;
  if (!q || q.selected === null || q.showExplain) return;
  q.showExplain = true;
  // Per-question stats are saved on submit (day quizzes too), so leaving mid-session keeps them.
  const id = q.ids[q.idx];
  if (id) {
    const d = state.data;
    saveData({ ...d, practice: recordAnswer(d.practice, id, q.selected === q.questions[q.idx]!.correct, Date.now()) });
  }
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
    if (q.kind === 'practice') {
      saveData({
        ...d,
        ...bumpStreak(d),
        practice: finishSession(d.practice, {
          date: today(), mode: q.practice!.mode, topics: q.practice!.topics,
          score: correctCount, total: q.questions.length,
        }),
        totalCorrect: d.totalCorrect + correctCount,
        totalAnswered: d.totalAnswered + q.questions.length,
      });
      q.finished = true;
      render();
      return;
    }
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
  saveData(defaultData());
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
    setPracticeMode: typeof setPracticeMode;
    toggleTopic: typeof toggleTopic;
    startPractice: typeof startPractice;
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
  window.setPracticeMode = setPracticeMode;
  window.toggleTopic = toggleTopic;
  window.startPractice = startPractice;
  window.selectOption = selectOption;
  window.submitAnswer = submitAnswer;
  window.nextQuestion = nextQuestion;
  window.navigate = navigate;
  window.resetProgress = resetProgress;
  window.installApp = installApp;
  window.dismissInstall = dismissInstall;
}
