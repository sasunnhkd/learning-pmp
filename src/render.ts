import { state } from './state';
import { renderDashboard } from './views/dashboard';
import { renderLesson } from './views/lesson';
import { renderQuiz } from './views/quiz';
import { renderAll } from './views/all';

export function render(): void {
  const app = document.getElementById('app');
  if (!app) return;
  let html = '';
  if (state.view === 'dashboard') html = renderDashboard();
  else if (state.view === 'lesson') html = renderLesson();
  else if (state.view === 'quiz') html = renderQuiz();
  else if (state.view === 'all') html = renderAll();
  app.innerHTML = html;
}
