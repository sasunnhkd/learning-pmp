import { state, curriculum, esc } from '../state';
import { icons } from '../icons';
import { formatLesson } from '../lessonFormat';

export function renderLesson(): string {
  const lesson = curriculum.find(c => c.day === state.selectedDay);
  if (!lesson) return '';
  const prevScore = state.selectedDay !== null ? state.data.quizScores[state.selectedDay] : undefined;

  return `
    <button class="back-btn" onclick="navigate('dashboard')">← Dashboard</button>
    <div style="margin-bottom:24px">
      <div class="lesson-meta">
        <div class="eyebrow-accent">Week ${lesson.week} · Day ${lesson.day}</div>
        <div class="eyebrow">${esc(lesson.domain)}</div>
      </div>
      <h1 class="h1" style="font-size:2rem">${esc(lesson.title)}</h1>
      <div class="divider"></div>
    </div>

    <div class="lesson-body">
      <div class="lesson-text">${formatLesson(lesson.lesson)}</div>
      <div class="key-terms">
        <div class="key-terms-label">Key Terms</div>
        <div class="tags">${lesson.keyTerms.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
    </div>

    ${prevScore ? `<div class="prev-score">Previous quiz: <strong>${prevScore.score}/${prevScore.total}</strong> (${Math.round(prevScore.score/prevScore.total*100)}%)</div>` : ''}

    <button class="btn btn-dark" onclick="startQuiz(${state.selectedDay})">${icons.brain} ${prevScore ? 'Retake Practice Quiz' : 'Begin Practice Quiz'}</button>
  `;
}
