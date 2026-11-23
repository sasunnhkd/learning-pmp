import {
  state, saveData, today, yesterday, questionBank, practicePool, poolById, defaultData,
  loadSavedMock, storeSavedMock, loadActivePractice,
} from './state';
import { render } from './render';
import { DAY_TOPIC, domainOf, questionId, recordAnswer, finishSession, selectSession, practiceItemSignature } from './practice';
import { isAnswerCorrect, isComplete, toggleSelection } from './items';
import {
  MOCK_LENGTHS, MOCK_WARN_MS, formatClock, newRun, pauseRun, remainingMs, resumeRun, usedMs,
} from './mock';
import type { AppData, MockLength, PracticeCheckpoint, PracticeMode, QuizState, View } from './types';

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
    kind: 'day', day, questions, practice: null, mock: null,
    ids: questions.map(q => questionId(q.q)), topics: questions.map(() => topic),
    idx: 0, answers: [], selected: [], showExplain: false, finished: false,
  };
  navigate('quiz', day);
}

// Picker (views/practice.ts renderPracticePicker).
export function setPracticeMode(mode: PracticeMode): void {
  state.practicePick = { ...state.practicePick, mode };
  render();
}

export function setMockLength(mockLength: MockLength): void {
  state.practicePick = { ...state.practicePick, mode: 'mock', mockLength };
  render();
}

export function toggleTopic(id: string): void {
  const { topics } = state.practicePick;
  state.practicePick = {
    ...state.practicePick,
    mode: 'topics',
    topics: topics.includes(id) ? topics.filter(t => t !== id) : [...topics, id],
  };
  render();
}

export function startPractice(mode: PracticeMode = state.practicePick.mode): void {
  if (mode === 'mock') { startMock(); return; }
  const topics = mode === 'topics' ? state.practicePick.topics : [];
  const picked = selectSession(practicePool, state.data.practice, mode, topics);
  if (picked.length === 0) return;
  if (loadActivePractice() && !confirm('Replace your unfinished practice? Submitted answers stay in your stats.')) return;
  state.quiz = {
    kind: 'practice', day: 0, questions: picked, practice: { mode, topics }, mock: null,
    ids: picked.map(q => q.id), topics: picked.map(q => q.topic),
    idx: 0, answers: [], selected: [], showExplain: false, finished: false,
  };
  savePracticeProgress(state.quiz);
  navigate('quiz');
}

function practiceCheckpoint(q: QuizState): PracticeCheckpoint | undefined {
  if (!q.practice || q.practice.mode === 'mock') return;
  const { ids, idx, answers, selected, showExplain } = q;
  return {
    ids, idx, answers, selected, showExplain, mode: q.practice.mode, topics: q.practice.topics,
    itemSignatures: q.questions.map(practiceItemSignature),
  };
}

function savePracticeProgress(q: QuizState): void {
  const activePractice = practiceCheckpoint(q);
  if (activePractice) saveData({ ...state.data, activePractice });
}

export function resumeActivePractice(): void {
  const quiz = loadActivePractice();
  if (!quiz) { render(); return; }
  state.quiz = quiz;
  navigate('quiz');
}

export function selectOption(i: number): void {
  const q = state.quiz;
  if (!q || q.showExplain || q.finished) return;
  q.selected = toggleSelection(q.questions[q.idx]!, q.selected, i);
  savePracticeProgress(q);
  render();
}

export function clearSelection(): void {
  const q = state.quiz;
  if (!q || q.showExplain) return;
  q.selected = [];
  savePracticeProgress(q);
  render();
}

export function submitAnswer(): void {
  const q = state.quiz;
  if (!q || q.showExplain || q.finished) return;
  if (q.mock) { mockNext(); return; }
  const current = q.questions[q.idx]!;
  if (!isComplete(current, q.selected)) return;
  q.showExplain = true;
  // Per-question stats are saved on submit (day quizzes too), so leaving mid-session keeps them.
  const id = q.ids[q.idx];
  if (id) {
    const d = state.data;
    const activePractice = practiceCheckpoint(q);
    saveData({
      ...d,
      practice: recordAnswer(d.practice, id, isAnswerCorrect(current, q.selected), Date.now()),
      ...(activePractice && { activePractice }),
    });
  }
  render();
}

export function nextQuestion(): void {
  const q = state.quiz;
  if (!q || q.mock || !q.showExplain || q.finished) return;
  const current = q.questions[q.idx]!;
  q.answers.push({ selected: q.selected, correct: isAnswerCorrect(current, q.selected) });
  if (q.idx + 1 >= q.questions.length) {
    const correctCount = q.answers.filter(a => a.correct).length;
    const d = state.data;
    if (q.kind === 'practice') {
      saveData({
        ...d,
        ...bumpStreak(d),
        activePractice: null,
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
    q.selected = [];
    q.showExplain = false;
    savePracticeProgress(q);
  }
  render();
}

// ---- Mock exam ----
// One question per screen, no feedback until the end. The clock is a MockRun (src/mock.ts):
// the ticker only rewrites the #mock-clock element so typing/scrolling isn't reset each second.
// The run is saved (paused) to localStorage after every answer and when the page is hidden,
// so a reload or an iOS kill offers Resume in the picker.

let ticker: ReturnType<typeof setInterval> | null = null;

function stopTicker(): void {
  if (ticker !== null) clearInterval(ticker);
  ticker = null;
}

function startTicker(): void {
  stopTicker();
  ticker = setInterval(tick, 1000);
}

function tick(): void {
  const q = state.quiz;
  if (!q?.mock || q.finished || q.mock.runningSince === null || state.view !== 'quiz') { stopTicker(); return; }
  const left = remainingMs(q.mock, Date.now());
  if (left <= 0) { finishMock(true); return; }
  const el = document.getElementById('mock-clock');
  if (el) {
    el.textContent = formatClock(left);
    el.classList.toggle('low', left <= MOCK_WARN_MS);
  }
}

function saveMockProgress(q: QuizState): void {
  if (!q.mock || q.finished) return;
  storeSavedMock({ v: 2, ids: q.ids, itemSignatures: q.questions.map(practiceItemSignature), idx: q.idx, answers: q.answers, run: pauseRun(q.mock, Date.now()) });
}

export function startMock(): void {
  if (loadSavedMock() && !confirm('Start a new mock? Your unfinished mock will be discarded.')) return;
  const length = state.practicePick.mockLength;
  const picked = selectSession(practicePool, state.data.practice, 'mock', [], Math.random, MOCK_LENGTHS[length].size);
  if (picked.length === 0) return;
  state.quiz = {
    kind: 'practice', day: 0, questions: picked, practice: { mode: 'mock', topics: [] },
    mock: newRun(length, Date.now()),
    ids: picked.map(q => q.id), topics: picked.map(q => q.topic),
    idx: 0, answers: [], selected: [], showExplain: false, finished: false,
  };
  saveMockProgress(state.quiz);
  navigate('quiz');
  startTicker();
}

// "Next" in a mock. An incomplete pick counts as a skip: scored wrong, and NOT written to the
// per-question stats, so skipped questions don't show up in Retry my mistakes or coverage.
function mockNext(): void {
  const q = state.quiz!;
  if (remainingMs(q.mock!, Date.now()) <= 0) { finishMock(true); return; }
  const current = q.questions[q.idx]!;
  const answered = isComplete(current, q.selected);
  const correct = answered && isAnswerCorrect(current, q.selected);
  if (answered) {
    const d = state.data;
    saveData({ ...d, practice: recordAnswer(d.practice, q.ids[q.idx]!, correct, Date.now()) });
  }
  q.answers.push({ selected: answered ? q.selected : [], correct });
  if (q.idx + 1 >= q.questions.length) { finishMock(false); return; }
  q.idx++;
  q.selected = [];
  saveMockProgress(q);
  window.scrollTo(0, 0);
  render();
}

// Ends the run. On timeout, questions never reached are scored wrong in the mock result only.
function finishMock(timedOut: boolean): void {
  const q = state.quiz;
  if (!q?.mock || q.finished) return;
  stopTicker();
  const now = Date.now();
  q.mock = pauseRun(q.mock, now);
  while (q.answers.length < q.questions.length) q.answers.push({ selected: [], correct: false });
  const byDomain: Record<string, { right: number; total: number }> = {};
  q.answers.forEach((a, i) => {
    const domain = domainOf(q.questions[i]!);
    if (!domain) return;
    const r = (byDomain[domain] ??= { right: 0, total: 0 });
    r.total++;
    if (a.correct) r.right++;
  });
  const score = q.answers.filter(a => a.correct).length;
  const answered = q.answers.filter(a => a.selected.length > 0).length;
  const d = state.data;
  saveData({
    ...d,
    ...bumpStreak(d),
    practice: finishSession(d.practice, {
      date: today(), mode: 'mock', topics: [], score, total: q.questions.length,
      mock: {
        length: q.mock.length, timedOut, byDomain,
        secondsUsed: Math.round(Math.min(usedMs(q.mock, now), q.mock.limitMs) / 1000),
      },
    }),
    totalCorrect: d.totalCorrect + score,
    totalAnswered: d.totalAnswered + answered,
  });
  storeSavedMock(null);
  q.idx = q.questions.length - 1;
  q.finished = true;
  if (timedOut) alert("Time's up. Unanswered questions count as wrong.");
  state.view = 'quiz';
  window.scrollTo(0, 0);
  render();
}

export function pauseMock(): void {
  const q = state.quiz;
  if (!q?.mock || q.finished) return;
  q.mock = pauseRun(q.mock, Date.now());
  saveMockProgress(q);
  stopTicker();
  render();
}

export function resumeMock(): void {
  const q = state.quiz;
  if (!q?.mock || q.finished) return;
  if (remainingMs(q.mock, Date.now()) <= 0) { finishMock(true); return; }
  q.mock = resumeRun(q.mock, Date.now());
  render();
  startTicker();
}

export function endMockNow(): void {
  const q = state.quiz;
  if (!q?.mock || q.finished) return;
  if (!confirm('Finish the mock now? Questions you have not answered count as wrong.')) return;
  finishMock(false);
}

// From the picker's "Resume" card. Opens the run paused; the learner taps Resume to restart the clock.
export function resumeSavedMock(): void {
  const saved = loadSavedMock();
  if (!saved) { render(); return; }
  const questions = saved.ids.map(id => poolById.get(id));
  if (questions.some(x => !x)) {
    alert('This mock used questions that have since changed, so it cannot be resumed. Please start a new one.');
    storeSavedMock(null);
    render();
    return;
  }
  const qs = questions as NonNullable<typeof questions[number]>[];
  state.quiz = {
    kind: 'practice', day: 0, questions: qs, practice: { mode: 'mock', topics: [] },
    mock: { ...saved.run, runningSince: null },
    ids: saved.ids, topics: qs.map(x => x.topic),
    idx: saved.idx, answers: saved.answers, selected: [], showExplain: false, finished: false,
  };
  navigate('quiz');
}

export function discardSavedMock(): void {
  if (!confirm('Discard your unfinished mock? Answers already given stay in your stats.')) return;
  storeSavedMock(null);
  render();
}

type Route = { view: View; day?: number };

function applyRoute({ view, day }: Route): void {
  // Leaving a running mock pauses and saves it; Resume is offered in the practice picker.
  const q = state.quiz;
  if (q?.mock && !q.finished && view !== 'quiz') {
    q.mock = pauseRun(q.mock, Date.now());
    saveMockProgress(q);
    stopTicker();
  }
  state.view = view;
  if (day !== undefined) state.selectedDay = day;
  if (view !== 'quiz') state.quiz = null;
  window.scrollTo(0, 0);
  render();
}

export function navigate(view: View, day?: number): void {
  const route = { view, day };
  if (view !== state.view || (view === 'lesson' && day !== state.selectedDay)) {
    history.pushState({ pmpRoute: route }, '');
  }
  applyRoute(route);
}

function restoredRoute(entry: unknown): Route {
  const route = (entry as { pmpRoute?: Route } | null)?.pmpRoute;
  if (!route) return { view: 'dashboard' };
  const { view, day } = route;
  const validDay = day !== undefined && Number.isInteger(day) && day >= 1 && day <= 28;
  // A quiz history entry is a pointer to its entry screen. Unfinished practice
  // and mock sessions can be resumed from the picker once the live screen is gone.
  if (view === 'quiz') return validDay ? { view: 'lesson', day } : { view: 'practice' };
  if (view === 'lesson' && validDay) return { view, day };
  if (view === 'all' || view === 'practice' || view === 'stats' || view === 'quest') return { view };
  return { view: 'dashboard' };
}

export function initNavigation(): void {
  const route = restoredRoute(history.state);
  history.replaceState({ pmpRoute: route }, '');
  applyRoute(route);
  window.addEventListener('popstate', event => applyRoute(restoredRoute(event.state)));
}

export function resetProgress(): void {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  storeSavedMock(null);
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
    setMockLength: typeof setMockLength;
    toggleTopic: typeof toggleTopic;
    startPractice: typeof startPractice;
    resumeActivePractice: typeof resumeActivePractice;
    selectOption: typeof selectOption;
    clearSelection: typeof clearSelection;
    submitAnswer: typeof submitAnswer;
    nextQuestion: typeof nextQuestion;
    pauseMock: typeof pauseMock;
    resumeMock: typeof resumeMock;
    endMockNow: typeof endMockNow;
    resumeSavedMock: typeof resumeSavedMock;
    discardSavedMock: typeof discardSavedMock;
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
  window.setMockLength = setMockLength;
  window.toggleTopic = toggleTopic;
  window.startPractice = startPractice;
  window.resumeActivePractice = resumeActivePractice;
  window.selectOption = selectOption;
  window.clearSelection = clearSelection;
  window.submitAnswer = submitAnswer;
  window.nextQuestion = nextQuestion;
  window.pauseMock = pauseMock;
  window.resumeMock = resumeMock;
  window.endMockNow = endMockNow;
  window.resumeSavedMock = resumeSavedMock;
  window.discardSavedMock = discardSavedMock;
  window.navigate = navigate;
  window.resetProgress = resetProgress;
  window.installApp = installApp;
  window.dismissInstall = dismissInstall;

  // A running mock: save when the page is hidden (iOS may kill it in the background) and
  // re-check the clock when it comes back (timers don't run while suspended).
  document.addEventListener('visibilitychange', () => {
    const q = state.quiz;
    if (!q?.mock || q.finished) return;
    if (document.visibilityState === 'hidden') saveMockProgress(q);
    else if (q.mock.runningSince !== null) tick();
  });
}
