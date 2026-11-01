import { state, practicePool, esc } from '../state';
import {
  TOPICS, DOMAIN_LABEL, SESSION_SIZE, WEAK_ACCURACY, MIN_ATTEMPTS,
  computeStats, selectSession, type Domain, type TopicStat,
} from '../practice';

const DOMAINS = Object.keys(DOMAIN_LABEL) as Domain[];
const pct = (x: number | null) => (x === null ? '—' : `${Math.round(x * 100)}%`);

function dot(status: TopicStat['status']): string {
  if (status === 'new') return '<span class="dot dot-new" aria-hidden="true"></span>';
  if (status === 'weak') return '<span class="dot dot-weak" aria-hidden="true"></span>';
  return '';
}

function modeOption(mode: 'mix' | 'mistakes' | 'topics', title: string, sub: string, disabled = false): string {
  const on = state.practicePick.mode === mode;
  return `<button class="mix-option ${on ? 'selected' : ''}" onclick="setPracticeMode('${mode}')" role="radio" aria-checked="${on}" ${disabled ? 'disabled' : ''}>
    <span class="radio" aria-hidden="true"></span>
    <span><span class="mix-title">${title}</span><br><span class="mix-sub">${sub}</span></span>
  </button>`;
}

export function renderPracticePicker(): string {
  const pick = state.practicePick;
  const stats = computeStats(practicePool, state.data.practice);
  const byId = new Map(stats.topics.map(t => [t.id as string, t]));
  const mistakes = stats.mistakes; // only questions still in the pool, same as selectSession('mistakes')
  // Dry-run the selection only to show the real count; startPractice() picks again.
  const count = pick.mode === 'topics' && pick.topics.length === 0
    ? 0
    : selectSession(practicePool, state.data.practice, pick.mode, pick.topics).length;
  const label = count === 0
    ? (pick.mode === 'topics' ? 'Pick at least one topic' : 'No questions to practise')
    : `Start ${count} question${count === 1 ? '' : 's'}`;

  return `
    <button class="back-btn" onclick="navigate('dashboard')">← Back</button>
    <div class="eyebrow-accent">Daily Practice</div>
    <h2 class="h2" style="margin:6px 0 16px">What do you want to practise?</h2>

    <div role="radiogroup" aria-label="Practice type">
      ${modeOption('mix', 'Exam mix (no idea? pick this)', `${SESSION_SIZE} random questions weighted like the PMP exam: 3 People · 4 Process · 3 Business Environment. Unseen and missed questions come first.`)}
      ${modeOption('mistakes', 'Retry my mistakes', mistakes ? `Up to ${SESSION_SIZE} questions you last answered wrong · ${mistakes} waiting` : 'No missed questions yet', mistakes === 0)}
      ${modeOption('topics', 'Choose topics', 'Pick one or more below')}
    </div>

    ${DOMAINS.map(domain => `
      <div class="eyebrow group-label">${DOMAIN_LABEL[domain]}</div>
      <div class="topic-grid">
        ${TOPICS.filter(t => t.domain === domain).map(t => {
          const on = pick.mode === 'topics' && pick.topics.includes(t.id);
          const s = byId.get(t.id)!;
          const hint = s.status === 'new' ? ', not covered yet' : s.status === 'weak' ? ', needs work' : '';
          return `<button class="topic ${on ? 'on' : ''}" onclick="toggleTopic('${t.id}')" aria-pressed="${on}" aria-label="${esc(t.label)}${hint}">${dot(s.status)}${esc(t.label)}</button>`;
        }).join('')}
      </div>`).join('')}
    <div class="legend-line"><span><span class="dot dot-new"></span>Not covered yet</span><span><span class="dot dot-weak"></span>Needs work (&lt;${Math.round(WEAK_ACCURACY * 100)}%)</span></div>

    <div class="practice-start"><button class="btn btn-dark" onclick="startPractice()" ${count === 0 ? 'disabled' : ''}>${label}</button></div>
  `;
}

function topicBar(t: TopicStat): string {
  const cls = t.status === 'weak' ? 'weak' : t.status === 'new' ? 'new' : '';
  const val = t.status === 'new' ? 'New' : `${pct(t.accuracy)}${t.status === 'weak' ? ' !' : ''}`;
  const tip = t.status === 'new'
    ? `${t.label}: not answered yet · ${t.poolSize} questions`
    : `${t.label}: ${t.correct}/${t.attempts} correct · ${t.seenUnique} of ${t.poolSize} questions seen`;
  return `<div class="bar-row ${cls}" title="${esc(tip)}">
    <span class="bar-name">${esc(t.label)}</span>
    <span class="bar-track" aria-hidden="true">${t.accuracy !== null ? `<span class="bar-fill" style="width:${Math.round(t.accuracy * 100)}%"></span>` : ''}<span class="bar-target" style="left:${WEAK_ACCURACY * 100}%"></span></span>
    <span class="bar-val">${val}</span>
    <span class="bar-sub">${t.seenUnique}/${t.poolSize} seen</span>
  </div>`;
}

export function renderPracticeStats(): string {
  const s = computeStats(practicePool, state.data.practice);
  const newTopics = s.topics.filter(t => t.status === 'new');
  const weak = s.topics.filter(t => t.status === 'weak').sort((a, b) => a.accuracy! - b.accuracy!);
  const names = (ts: TopicStat[]) => ts.length ? ts.map(t => esc(t.label)).join(', ') : 'None';
  const recent = s.recent;

  return `
    <button class="back-btn" onclick="navigate('dashboard')">← Back</button>
    <div class="eyebrow-accent">Progress</div>
    <h2 class="h2" style="margin:6px 0 16px">My practice stats</h2>

    <div class="stats">
      <div class="stat"><div class="stat-value">${s.sessions}</div><div class="stat-label">Sessions</div></div>
      <div class="stat"><div class="stat-value">${s.attempts ? Math.round((s.correct / s.attempts) * 100) : 0}<span class="stat-value-small">%</span></div><div class="stat-label">Accuracy</div></div>
      <div class="stat"><div class="stat-value">${s.seenUnique}<span class="stat-value-small">/${s.poolSize}</span></div><div class="stat-label">Questions seen</div></div>
      <div class="stat"><div class="stat-value">${s.covered}<span class="stat-value-small">/${s.topics.length}</span></div><div class="stat-label">Topics covered</div></div>
    </div>

    <div class="card">
      <div class="eyebrow">Recent sessions · % correct</div>
      ${recent.length === 0 ? '<p class="small" style="margin:10px 0 0">No sessions yet. Finish a Daily Practice to see your trend.</p>' : `
        <div class="sessions" role="img" aria-label="Session scores, oldest first: ${recent.map(r => `${r.score} of ${r.total}`).join(', ')}">
          ${recent.map(r => `<div class="sess" style="height:${Math.max(3, Math.round((r.score / r.total) * 100))}%" title="${esc(r.date)} · ${r.score}/${r.total}"></div>`).join('')}
        </div>
        <div class="sess-axis"><span>${esc(recent[0]!.date)}</span><span>Latest · ${recent[recent.length - 1]!.score}/${recent[recent.length - 1]!.total}</span></div>`}
    </div>

    <div class="card">
      <div class="eyebrow">Accuracy by topic · line = ${Math.round(WEAK_ACCURACY * 100)}% target</div>
      ${DOMAINS.map(domain => {
        const d = s.domains.find(x => x.domain === domain)!;
        return `<div class="domain-head"><span class="eyebrow">${DOMAIN_LABEL[domain]}</span><span class="small">${d.attempts ? pct(d.correct / d.attempts) : '—'}</span></div>
          ${s.topics.filter(t => t.domain === domain).map(topicBar).join('')}`;
      }).join('')}
    </div>

    <div class="card">
      <div class="eyebrow" style="margin-bottom:4px">Needs attention</div>
      <div class="list-item"><span>Not covered yet</span><span class="small list-value">${names(newTopics)}</span></div>
      <div class="list-item"><span>Needs work (&lt;${Math.round(WEAK_ACCURACY * 100)}%, ≥${MIN_ATTEMPTS} tries)</span><span class="small list-value">${names(weak)}</span></div>
      <div class="list-item"><span>Missed questions waiting</span><span class="small list-value">${s.mistakes}</span></div>
      <button class="btn btn-accent" style="margin-top:12px" onclick="startPractice('mistakes')" ${s.mistakes === 0 ? 'disabled' : ''}>Retry my ${Math.min(SESSION_SIZE, s.mistakes) || ''} most recent mistakes</button>
    </div>
  `;
}
