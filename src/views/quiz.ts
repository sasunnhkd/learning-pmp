import { state, esc } from '../state';
import { icons } from '../icons';
import { buildReview, optionLetter, type Pick } from '../review';
import { TOPIC_BY_ID, DOMAIN_LABEL, BAND_LABEL, bandFor, domainOf, type Domain } from '../practice';
import { correctList, isAnswerCorrect, isComplete, itemType, requiredPicks } from '../items';
import { MOCK_LENGTHS, MOCK_WARN_MS, formatClock, remainingMs, usedMs } from '../mock';
import type { QuizQuestion, QuizState } from '../types';

const topicLabel = (id: string | undefined) => (id && TOPIC_BY_ID.get(id)?.label) || 'Mixed';
const questionDomainLabel = (question: QuizQuestion) => {
  const domain = domainOf(question);
  return domain ? DOMAIN_LABEL[domain] : 'Study support';
};

// Practice result: correct / answered per topic, in first-seen order.
function renderTopicBreakdown(q: QuizState): string {
  const rows = new Map<string, { right: number; total: number }>();
  q.answers.forEach((a, i) => {
    const r = rows.get(q.topics[i] ?? '') ?? { right: 0, total: 0 };
    r.total++;
    if (a.correct) r.right++;
    rows.set(q.topics[i] ?? '', r);
  });
  return `<div class="result-topics">
    <div class="review-label">By topic this session</div>
    ${[...rows].map(([id, r]) => `<div class="rt-row"><span>${esc(topicLabel(id))}</span>${r.right === 0
      ? `<span class="badge badge-warn">${r.right} / ${r.total}</span>`
      : `<span>${r.right} / ${r.total}</span>`}</div>`).join('')}
  </div>`;
}

const bandChip = (share: number) => {
  const b = bandFor(share);
  return `<span class="band band-${b}">${BAND_LABEL[b]}</span>`;
};

// Mock result: right / total and a band per domain (same cut-offs as the stats readiness card).
function renderDomainBreakdown(q: QuizState): string {
  const rows: Record<Domain, { right: number; total: number }> = {
    People: { right: 0, total: 0 }, Process: { right: 0, total: 0 }, Business: { right: 0, total: 0 },
  };
  q.answers.forEach((a, i) => {
    const domain = domainOf(q.questions[i]!);
    if (!domain) return;
    const r = rows[domain];
    r.total++;
    if (a.correct) r.right++;
  });
  return `<div class="result-topics">
    <div class="review-label">By domain</div>
    ${(Object.keys(rows) as Domain[]).filter(d => rows[d].total > 0).map(d => `<div class="rt-row"><span>${DOMAIN_LABEL[d]}</span><span class="rt-right">${rows[d].right} / ${rows[d].total} ${bandChip(rows[d].right / rows[d].total)}</span></div>`).join('')}
  </div>`;
}

const pickText = (p: Pick[], ordered: boolean) =>
  p.map((x, k) => `${ordered ? `${k + 1}. ` : ''}${x.letter} · ${esc(x.text)}`).join('<br>');

// Wrong answers are expanded (yours vs right + explanation); correct ones stay one line.
function renderReview(q: QuizState): string {
  return buildReview(q.questions, q.answers).map(r => {
    if (r.correct) return `<div class="review-item"><div class="review-head">${icons.check}<span>${esc(r.question)}</span></div></div>`;
    const ordered = r.type === 'order';
    return `<div class="review-item"><div class="review-head">${icons.x}<span>${esc(r.question)}</span></div>
        <div class="review-body">
          <div class="review-row"><span class="review-key">Yours</span><span class="review-yours">${r.yours ? pickText(r.yours, ordered) : 'No answer'}</span></div>
          <div class="review-row"><span class="review-key">Right</span><span class="review-right">${pickText(r.right, ordered)}</span></div>
          <div>${esc(r.explain)}</div>
        </div></div>`;
  }).join('');
}

function itemHint(current: QuizQuestion): string {
  const t = itemType(current);
  if (t === 'single') return '';
  const n = requiredPicks(current);
  const label = t === 'multi' ? `Choose ${n}` : 'Put in order · tap first to last';
  return `<span class="item-hint">${label}</span>`;
}

// Single: letter badge (radio-like). Multi: square check box + letter. Order: step number.
// State is always shown by text or symbols, never colour alone.
function renderOptions(current: QuizQuestion, q: QuizState, reveal: boolean): string {
  const t = itemType(current);
  const right = correctList(current);
  return current.options.map((opt, i) => {
    const pos = q.selected.indexOf(i);
    const chosen = pos >= 0;
    let cls = 'option';
    let tag = '';
    if (reveal) {
      if (t === 'order') {
        const ok = right[pos] === i;
        cls += ok ? ' correct' : ' wrong';
        tag = `Right ${right.indexOf(i) + 1}`;
      } else if (right.includes(i)) { cls += ' correct'; tag = chosen ? 'Correct' : 'Missed'; }
      else if (chosen) { cls += ' wrong'; tag = 'Yours'; }
      else cls += ' faded';
    } else if (chosen) cls += ' selected';
    const marker = t === 'order'
      ? `<span class="order-num" aria-hidden="true">${chosen ? pos + 1 : ''}</span>`
      : t === 'multi'
        ? `<span class="option-check" aria-hidden="true">${chosen ? '✓' : ''}</span><span class="option-letter">${optionLetter(i)}</span>`
        : `<span class="option-letter">${optionLetter(i)}</span>`;
    const label = t === 'order' && chosen ? ` aria-label="Step ${pos + 1}: ${esc(opt)}"` : '';
    return `<button class="${cls}" onclick="selectOption(${i})" ${reveal ? 'disabled' : ''} aria-pressed="${chosen}"${label}>
      ${marker}<span class="option-text">${esc(opt)}</span>${tag ? `<span class="option-tag">${tag}</span>` : ''}
    </button>`;
  }).join('');
}

function selectionLine(current: QuizQuestion, q: QuizState): string {
  const t = itemType(current);
  if (t === 'single') return '';
  const n = requiredPicks(current);
  return `<div class="row-actions"><span>${q.selected.length} of ${n} ${t === 'order' ? 'placed' : 'chosen'}</span>${q.selected.length ? '<button class="link-btn" onclick="clearSelection()">Clear</button>' : ''}</div>`;
}

function renderFinished(q: QuizState): string {
  const correct = q.answers.filter(a => a.correct).length;
  const total = q.questions.length;
  const pct = Math.round((correct / total) * 100);
  const practice = q.kind === 'practice';
  const mock = q.mock;
  const msg = pct >= 80
    ? "Excellent work. You're building strong knowledge—momentum matters."
    : pct >= 60
      ? "Solid effort. Review the missed concepts and revisit tomorrow."
      : practice
        ? "Don't be discouraged. Read the explanations below, then use Retry my mistakes tomorrow."
        : "Don't be discouraged. Re-read the lesson and try again. Mastery comes from repetition.";
  const modeLabel = q.practice?.mode === 'mistakes' ? 'Retry mistakes' : q.practice?.mode === 'topics' ? 'Chosen topics' : 'Exam mix';
  const eyebrow = mock ? `${MOCK_LENGTHS[mock.length].label} complete` : practice ? 'Daily Practice Complete' : `Day ${q.day} Complete`;
  const sub = mock
    ? `${correct} of ${total} correct · ${Math.max(1, Math.round(Math.min(usedMs(mock, Date.now()), mock.limitMs) / 60000))} min used of ${MOCK_LENGTHS[mock.length].minutes}`
    : `${correct} of ${total} correct${practice ? ` · ${modeLabel}` : ''}`;
  return `
    <div class="card" style="text-align:center;margin-top:40px">
      ${icons.trophy}
      <div class="eyebrow" style="margin-bottom:8px">${eyebrow}</div>
      <div class="finish-score">${pct}%</div>
      <div class="small" style="margin-bottom:8px">${sub}</div>
      ${mock ? `<div style="margin:10px 0">${bandChip(correct / total)} <span class="small">our estimate</span></div>` : `<p class="finish-message">${msg}</p>`}
      ${mock ? renderDomainBreakdown(q) : practice ? renderTopicBreakdown(q) : ''}
      <div class="review">
        <div class="review-label">Review your answers</div>
        ${renderReview(q)}
      </div>
      ${practice
        ? `<div class="btn-group"><button class="btn btn-dark" onclick="navigate('stats')">See my stats</button><button class="btn btn-ghost" onclick="navigate('dashboard')">Return to Dashboard</button></div>`
        : `<button class="btn btn-dark" onclick="navigate('dashboard')">Return to Dashboard</button>`}
    </div>
  `;
}

function renderPaused(q: QuizState): string {
  const run = q.mock!;
  const left = remainingMs(run, Date.now());
  return `
    <div class="card" style="text-align:center;margin-top:40px">
      <div class="eyebrow-accent">${MOCK_LENGTHS[run.length].label} · paused</div>
      <div class="finish-score">${formatClock(left)}</div>
      <div class="small" style="margin-bottom:16px">left · question ${q.idx + 1} of ${q.questions.length}</div>
      <div class="btn-group">
        <button class="btn btn-dark" onclick="resumeMock()">Resume</button>
        <button class="btn btn-ghost" onclick="endMockNow()">Finish now and see results</button>
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Leave (resume later from Daily Practice)</button>
      </div>
    </div>`;
}

export function renderQuiz(): string {
  const q = state.quiz;
  if (!q) return '';
  if (q.finished) return renderFinished(q);
  if (q.mock && q.mock.runningSince === null) return renderPaused(q);

  const current = q.questions[q.idx]!;
  const complete = isComplete(current, q.selected);

  if (q.mock) {
    const left = remainingMs(q.mock, Date.now());
    const progress = (q.idx / q.questions.length) * 100;
    const last = q.idx + 1 >= q.questions.length;
    return `
      <div class="quiz-header">
        <button class="back-btn" style="margin:0" onclick="pauseMock()">${icons.pause} Pause</button>
        <span id="mock-clock" class="clock ${left <= MOCK_WARN_MS ? 'low' : ''}" role="timer" aria-label="Time left">${formatClock(left)}</span>
        <div class="eyebrow">${q.idx + 1} / ${q.questions.length}</div>
      </div>
      <div class="quiz-progress-top"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>
      <div class="quiz-card">
        <div class="quiz-eyebrow quiz-eyebrow-split"><span>${MOCK_LENGTHS[q.mock.length].label}</span><span>${esc(questionDomainLabel(current))}</span></div>
        ${itemHint(current)}
        <h2 class="question">${esc(current.q)}</h2>
        <div class="options">${renderOptions(current, q, false)}</div>
        ${selectionLine(current, q)}
        <button class="btn ${complete ? 'btn-dark' : 'btn-ghost'}" onclick="submitAnswer()">${complete ? (last ? 'Finish' : 'Next') : (last ? 'Skip and finish' : 'Skip')} ${icons.arrowRight}</button>
      </div>`;
  }

  const progress = ((q.idx + (q.showExplain ? 1 : 0)) / q.questions.length) * 100;
  const isCorrect = isAnswerCorrect(current, q.selected);

  return `
    <div class="quiz-header">
      <button class="back-btn" style="margin:0" onclick="${q.kind === 'practice' ? "navigate('practice')" : "if(confirm('Exit quiz? Your score for this day will not be saved.')) navigate('dashboard')"}">${q.kind === 'practice' ? '← Leave practice' : '← Exit'}</button>
      <div class="eyebrow">Question ${q.idx + 1} of ${q.questions.length}</div>
    </div>
    <div class="quiz-progress-top"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>

    <div class="quiz-card">
      ${q.kind === 'practice'
        ? `<div class="quiz-eyebrow quiz-eyebrow-split"><span>Daily Practice · ${esc(topicLabel(q.topics[q.idx]))}</span><span>${esc(questionDomainLabel(current))}</span></div>`
        : `<div class="quiz-eyebrow">Day ${q.day} · Practice</div>`}
      ${itemHint(current)}
      <h2 class="question">${esc(current.q)}</h2>
      <div class="options">${renderOptions(current, q, q.showExplain)}</div>
      ${q.showExplain ? '' : selectionLine(current, q)}

      ${q.showExplain ? `
        <div class="explain ${isCorrect ? 'right' : 'wrong'}">
          <div class="explain-label">${isCorrect ? 'Correct' : 'Not Quite'}</div>
          <div class="explain-text">${esc(current.explain)}</div>
        </div>
        <button class="btn btn-dark" onclick="nextQuestion()">${q.idx + 1 >= q.questions.length ? 'Finish' : 'Next Question'} ${icons.arrowRight}</button>
      ` : `
        <button class="btn btn-dark" onclick="submitAnswer()" ${complete ? '' : 'disabled'}>Submit Answer</button>
      `}
    </div>
  `;
}
