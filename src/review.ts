// Pure data for the quiz results "Review your answers" list (rendered by views/quiz.ts).
// No DOM imports keep it runnable under `node --experimental-strip-types` (tests/review.test.ts).
import type { ItemType, QuizQuestion, QuizState } from './types';
import { correctList, itemType } from './items.ts';

export type Pick = { letter: string; text: string };

export type ReviewRow = {
  num: number;
  question: string;
  type: ItemType;
  correct: boolean;
  // Picks in the order given: the chosen options for single/multi, the tapped sequence for order.
  // null = no answer (submitted empty, skipped or never reached in a mock).
  yours: Pick[] | null;
  right: Pick[];
  explain: string;
};

export const optionLetter = (i: number): string => String.fromCharCode(65 + i);

function pick(q: QuizQuestion, i: number): Pick {
  return { letter: optionLetter(i), text: q.options[i] ?? '' };
}

// Multi answers read best in letter order (A, C); order answers keep their sequence.
function picks(q: QuizQuestion, idx: number[]): Pick[] {
  const list = itemType(q) === 'multi' ? [...idx].sort((a, b) => a - b) : idx;
  return list.map(i => pick(q, i));
}

// One row per answered question, in quiz order. Questions without an answer yet are skipped,
// so a partly finished quiz never shows rows for questions the learner has not seen.
export function buildReview(questions: QuizQuestion[], answers: QuizState['answers']): ReviewRow[] {
  return answers.slice(0, questions.length).map((a, i) => {
    const q = questions[i]!;
    return {
      num: i + 1,
      question: q.q,
      type: itemType(q),
      correct: a.correct,
      yours: a.selected.length === 0 ? null : picks(q, a.selected),
      right: picks(q, correctList(q)),
      explain: q.explain,
    };
  });
}
