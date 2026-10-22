import { state, curriculum, getCurrentDay, esc } from '../state';
import { icons } from '../icons';

export function renderAll(): string {
  const currentDay = getCurrentDay();
  return `
    <button class="back-btn" onclick="navigate('dashboard')">← Dashboard</button>
    <h1 class="h1" style="font-size:2rem">The 28-Day Curriculum</h1>
    <div class="divider" style="margin-bottom:32px"></div>

    ${[1,2,3,4].map(w => `
      <div class="week-section">
        <div class="eyebrow-accent" style="margin-bottom:12px">Week ${w}</div>
        ${curriculum.filter(c => c.week === w).map(lesson => {
          // No row is locked: learners may read ahead of the calendar day.
          const completed = state.data.completedDays.includes(lesson.day);
          const isToday = lesson.day === currentDay;
          const score = state.data.quizScores[lesson.day];
          const cls = ['lesson-row'];
          if (isToday) cls.push('today');
          else if (completed) cls.push('done');

          return `<button class="${cls.join(' ')}" onclick="navigate('lesson', ${lesson.day})">
            <div class="lesson-num">${completed ? '<span style="color:var(--success)">✓</span>' : lesson.day}</div>
            <div class="lesson-info">
              <div class="lesson-title">${esc(lesson.title)}</div>
              <div class="lesson-domain">${esc(lesson.domain)}</div>
            </div>
            ${score ? `<div class="lesson-score">${score.score}/${score.total}</div>` : ''}
            ${isToday ? `<div class="today-tag">Today</div>` : ''}
            ${icons.chevron}
          </button>`;
        }).join('')}
      </div>
    `).join('')}
  `;
}
