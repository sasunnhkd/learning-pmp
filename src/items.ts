// Question item types: single answer, "Choose N" (multi) and "Put in order" (order).
// Every place that scores, selects or validates an answer goes through this file, so a new
// item type only needs changes here plus its rendering in src/views/quiz.ts and src/review.ts.
// Type-only imports keep it runnable under `node --experimental-strip-types` (tests/items.test.ts).
import type { ItemType, QuizQuestion } from './types';

export function itemType(q: QuizQuestion): ItemType {
  return q.type ?? 'single';
}

// Right answer as an index array: [i] for single, the set for multi, the sequence for order.
export function correctList(q: QuizQuestion): number[] {
  return Array.isArray(q.correct) ? q.correct : [q.correct];
}

// How many options the learner must pick before Submit is enabled.
export function requiredPicks(q: QuizQuestion): number {
  const t = itemType(q);
  if (t === 'single') return 1;
  if (t === 'multi') return correctList(q).length;
  return q.options.length;
}

export function isComplete(q: QuizQuestion, selected: number[]): boolean {
  return selected.length === requiredPicks(q);
}

// All-or-nothing. Multi ignores pick order; order compares position by position.
export function isAnswerCorrect(q: QuizQuestion, selected: number[]): boolean {
  const right = correctList(q);
  if (selected.length !== right.length) return false;
  if (itemType(q) === 'multi') {
    const want = new Set(right);
    return new Set(selected).size === selected.length && selected.every(i => want.has(i));
  }
  return selected.every((i, k) => i === right[k]);
}

// Tap on option i.
// - single: replaces the choice.
// - multi: toggles i; a tap past the limit is ignored (the learner unticks one first).
// - order: an unplaced option gets the next number; tapping a placed one removes it and every
//   option placed after it, so the numbers already shown never change meaning.
export function toggleSelection(q: QuizQuestion, selected: number[], i: number): number[] {
  if (i < 0 || i >= q.options.length) return selected;
  const t = itemType(q);
  if (t === 'single') return [i];
  const at = selected.indexOf(i);
  if (t === 'multi') {
    if (at >= 0) return selected.filter(x => x !== i);
    return selected.length >= requiredPicks(q) ? selected : [...selected, i];
  }
  return at >= 0 ? selected.slice(0, at) : [...selected, i];
}

// Shape check for banks loaded through `as` casts (tsc can't see JSON shapes).
// Returns a list of problems; empty = valid.
export function validateQuestion(q: unknown): string[] {
  const errs: string[] = [];
  const x = q as Partial<QuizQuestion> | null;
  if (!x || typeof x !== 'object') return ['not an object'];
  if (typeof x.q !== 'string' || !x.q.trim()) errs.push('q must be a non-empty string');
  if (typeof x.explain !== 'string' || !x.explain.trim()) errs.push('explain must be a non-empty string');
  if (!Array.isArray(x.options) || x.options.length < 2 || !x.options.every(o => typeof o === 'string' && o.trim())) {
    return [...errs, 'options must be 2+ non-empty strings'];
  }
  const n = x.options.length;
  const t = x.type ?? 'single';
  const inRange = (i: unknown) => Number.isInteger(i) && (i as number) >= 0 && (i as number) < n;
  if (t === 'single') {
    if (!inRange(x.correct)) errs.push('single: correct must be one option index');
  } else if (t === 'multi' || t === 'order') {
    const c = x.correct;
    if (!Array.isArray(c) || !c.every(inRange) || new Set(c).size !== c.length) {
      errs.push(`${t}: correct must be distinct option indices`);
    } else if (t === 'multi' && (c.length < 2 || c.length >= n)) {
      errs.push('multi: pick 2 or more, but fewer than all options');
    } else if (t === 'order' && c.length !== n) {
      errs.push('order: correct must list every option once');
    } else if (t === 'order' && c.every((v, k) => v === k)) {
      errs.push('order: options are stored already in the right order; scramble them');
    }
  } else {
    errs.push(`unknown type "${String(t)}"`);
  }
  return errs;
}
