import { state, esc } from '../state';
import { icons } from '../icons';
import { buildReview, optionLetter } from '../review';
import type { QuizState } from '../types';

// Wrong answers are expanded (yours vs right + explanation); correct ones stay one line.
function renderReview(q: QuizState): string {
  return buildReview(q.questions, q.answers).map(r => r.correct
    ? `<div class="review-item"><div class="review-head">${icons.check}<span>${esc(r.question)}</span></div></div>`
    : `<div class="review-item"><div class="review-head">${icons.x}<span>${esc(r.question)}</span></div>
        <div class="review-body">
          <div class="review-row"><span class="review-key">Yours</span><span class="review-yours">${r.yours ? `${r.yours.letter} · ${esc(r.yours.text)}` : 'No answer'}</span></div>
          <div class="review-row"><span class="review-key">Right</span><span class="review-right">${r.right.letter} · ${esc(r.right.text)}</span></div>
          <div>${esc(r.explain)}</div>
        </div></div>`
  ).join('');
}

export function renderQuiz(): string {
  const q = state.quiz;
  if (!q) return '';

  if (q.finished) {
    const correct = q.answers.filter(a => a.correct).length;
    const total = q.questions.length;
    const pct = Math.round((correct / total) * 100);
    const msg = pct >= 80
      ? "Excellent work. You're building strong knowledge—momentum matters."
      : pct >= 60
        ? "Solid effort. Review the missed concepts and revisit tomorrow."
        : "Don't be discouraged. Re-read the lesson and try again. Mastery comes from repetition.";

    return `
      <div class="card" style="text-align:center;margin-top:40px">
        ${icons.trophy}
        <div class="eyebrow" style="margin-bottom:8px">Day ${q.day} Complete</div>
        <div class="finish-score">${pct}%</div>
        <div class="small" style="margin-bottom:8px">${correct} of ${total} correct</div>
        <p class="finish-message">${msg}</p>
        <div class="review">
          <div class="review-label">Review your answers</div>
          ${renderReview(q)}
        </div>
        <button class="btn btn-dark" onclick="navigate('dashboard')">Return to Dashboard</button>
      </div>
    `;
  }

  const current = q.questions[q.idx]!;
  const progress = ((q.idx + (q.showExplain ? 1 : 0)) / q.questions.length) * 100;
  const isCorrect = q.selected === current.correct;

  return `
    <div class="quiz-header">
      <button class="back-btn" style="margin:0" onclick="if(confirm('Exit quiz? Progress lost.')){navigate('dashboard')}">← Exit</button>
      <div class="eyebrow">Question ${q.idx + 1} of ${q.questions.length}</div>
    </div>
    <div class="quiz-progress-top"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>

    <div class="quiz-card">
      <div class="quiz-eyebrow">Day ${q.day} · Practice</div>
      <h2 class="question">${esc(current.q)}</h2>
      <div class="options">
        ${current.options.map((opt, i) => {
          // State is shown by text tag + letter badge, not colour alone.
          let cls = 'option';
          let tag = '';
          if (q.showExplain) {
            if (i === current.correct) { cls += ' correct'; tag = 'Correct'; }
            else if (i === q.selected) { cls += ' wrong'; tag = 'Yours'; }
            else cls += ' faded';
          } else if (q.selected === i) cls += ' selected';
          return `<button class="${cls}" onclick="selectOption(${i})" ${q.showExplain ? 'disabled' : ''} aria-pressed="${q.selected === i}">
            <span class="option-letter">${optionLetter(i)}</span><span class="option-text">${esc(opt)}</span>${tag ? `<span class="option-tag">${tag}</span>` : ''}
          </button>`;
        }).join('')}
      </div>

      ${q.showExplain ? `
        <div class="explain ${isCorrect ? 'right' : 'wrong'}">
          <div class="explain-label">${isCorrect ? 'Correct' : 'Not Quite'}</div>
          <div class="explain-text">${esc(current.explain)}</div>
        </div>
        <button class="btn btn-dark" onclick="nextQuestion()">${q.idx + 1 >= q.questions.length ? 'Finish' : 'Next Question'} ${icons.arrowRight}</button>
      ` : `
        <button class="btn btn-dark" onclick="submitAnswer()" ${q.selected === null ? 'disabled' : ''}>Submit Answer</button>
      `}
    </div>
  `;
}
