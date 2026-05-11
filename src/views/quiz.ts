import { state, esc } from '../state';
import { icons } from '../icons';

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
        <div style="text-align:left;margin:16px 0">
          ${q.answers.map((a, i) => `<div class="answer-row">${a.correct ? icons.check : icons.x}<span>Question ${i+1}</span></div>`).join('')}
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
          let cls = 'option';
          if (q.showExplain) {
            if (i === current.correct) cls += ' correct';
            else if (i === q.selected) cls += ' wrong';
            else cls += ' faded';
          } else if (q.selected === i) cls += ' selected';
          return `<button class="${cls}" onclick="selectOption(${i})" ${q.showExplain ? 'disabled' : ''}>
            <span class="option-letter">${String.fromCharCode(65+i)}.</span>${esc(opt)}
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
