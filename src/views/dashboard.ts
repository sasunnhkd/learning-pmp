import { state, curriculum, getCurrentDay, today, esc } from '../state';
import { icons } from '../icons';

function renderInstallBanner(): string {
  if (!state.showInstall) return '';
  return `<div class="install-banner">
    <div>📱 Install to your home screen for app-like experience</div>
    <div style="display:flex;gap:8px;align-items:center">
      <button onclick="installApp()">Install</button>
      <button class="close" onclick="dismissInstall()">×</button>
    </div>
  </div>`;
}

export function renderDashboard(): string {
  const d = state.data;
  const currentDay = getCurrentDay();
  const todays = curriculum.find(c => c.day === currentDay);
  const studiedToday = d.lastStudyDate === today();
  const overallProgress = (d.completedDays.length / 28) * 100;
  const accuracy = d.totalAnswered > 0 ? Math.round((d.totalCorrect / d.totalAnswered) * 100) : 0;

  return `
    ${renderInstallBanner()}
    <div class="header">
      <div>
        <div class="eyebrow-accent">PMP Certification</div>
        <h1 class="h1">The 28-Day Path</h1>
        <div class="divider"></div>
      </div>
      <button class="reset-btn" onclick="resetProgress()">${icons.reset} Reset</button>
    </div>

    <div class="stats">
      <div class="stat">
        <div class="stat-icon flame">${icons.flame}</div>
        <div class="stat-value">${d.streak}</div>
        <div class="stat-label">Day Streak</div>
      </div>
      <div class="stat">
        <div class="stat-icon">${icons.book}</div>
        <div class="stat-value">${d.completedDays.length}<span class="stat-value-small">/28</span></div>
        <div class="stat-label">Days Done</div>
      </div>
      <div class="stat">
        <div class="stat-icon">${icons.target}</div>
        <div class="stat-value">${accuracy}<span class="stat-value-small">%</span></div>
        <div class="stat-label">Accuracy</div>
      </div>
      <div class="stat">
        <div class="stat-icon">${icons.award}</div>
        <div class="stat-value">${d.totalAnswered}</div>
        <div class="stat-label">Questions</div>
      </div>
    </div>

    ${todays ? `
    <div class="card card-accent">
      <div class="today-header">
        <div>
          <div class="eyebrow-accent">Today · Day ${todays.day}</div>
          <h2 class="h2" style="margin-top:6px">${esc(todays.title)}</h2>
          <div class="today-meta">${esc(todays.domain)}</div>
        </div>
        ${studiedToday ? `<div class="studied-badge">${icons.checkCircle} Studied</div>` : ''}
      </div>
      <p class="lesson-preview">${esc(todays.lesson.substring(0, 200))}...</p>
      <div class="btn-group">
        <button class="btn btn-dark" onclick="navigate('lesson', ${currentDay})">${icons.book} Read Lesson</button>
        <button class="btn btn-accent" onclick="startQuiz(${currentDay})">${icons.brain} Quick Quiz</button>
      </div>
    </div>
    ` : ''}

    <div class="card">
      <div class="progress-header">
        <div class="eyebrow">Overall Progress</div>
        <div class="small">${Math.round(overallProgress)}% complete</div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${overallProgress}%"></div></div>
      <div class="day-grid">
        ${curriculum.map(c => {
          const done = d.completedDays.includes(c.day);
          const isToday = c.day === currentDay;
          // Every cell opens its lesson, including days after today (reading ahead is allowed).
          return `<button class="day-cell ${done ? 'done' : isToday ? 'today' : ''}" onclick="navigate('lesson', ${c.day})" aria-label="Day ${c.day}${done ? ', completed' : isToday ? ', today' : ''}">${done ? '✓' : c.day}</button>`;
        }).join('')}
      </div>
    </div>

    <div class="quote-card">
      ${icons.sparkle}
      <div class="quote-eyebrow">The Daily Practice</div>
      <p class="quote-text">"Small habits, repeated, become extraordinary results."</p>
      <div class="quote-sub">Each day: 10 minutes lesson + 5 minutes quiz. That's it. Your streak is the best predictor of your success—keep it alive.</div>
    </div>

    <button class="nav-btn" onclick="navigate('all')">
      <div>
        <div class="nav-btn-title">View Full Curriculum</div>
        <div class="eyebrow">All 28 days · 4 weeks</div>
      </div>
      ${icons.chevron}
    </button>

    <div class="footer">PMBOK 8 · PMP Exam Content Outline (July 2026) · Project Management Institute</div>
  `;
}
