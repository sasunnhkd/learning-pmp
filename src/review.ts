// Pure data for the quiz results "Review your answers" list (rendered by views/quiz.ts).
// Type-only imports keep it runnable under `node --experimental-strip-types` (tests/review.test.ts).
import type { QuizQuestion, QuizState } from './types';

export type ReviewRow = {
  num: number;
  question: string;
  correct: boolean;
  yours: { letter: string; text: string } | null; // null = submitted without a selection
  right: { letter: string; text: string };
  explain: string;
};

export const optionLetter = (i: number): string => String.fromCharCode(65 + i);

function pick(q: QuizQuestion, i: number): { letter: string; text: string } {
  return { letter: optionLetter(i), text: q.options[i] ?? '' };
}

// One row per answered question, in quiz order. Questions without an answer yet are skipped,
// so a partly finished quiz never shows rows for questions the learner has not seen.
export function buildReview(questions: QuizQuestion[], answers: QuizState['answers']): ReviewRow[] {
  return answers.slice(0, questions.length).map((a, i) => {
    const q = questions[i]!;
    return {
      num: i + 1,
      question: q.q,
      correct: a.correct,
      yours: a.selected === null ? null : pick(q, a.selected),
      right: pick(q, q.correct),
      explain: q.explain,
    };
  });
}
