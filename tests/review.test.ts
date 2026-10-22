// Run: npm test  (node --experimental-strip-types --test tests/; needs Node >= 22.6)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildReview, optionLetter } from '../src/review.ts';
import type { QuizQuestion } from '../src/types.ts';

const qs: QuizQuestion[] = [
  { q: 'Q1', options: ['a', 'b', 'c', 'd'], correct: 1, explain: 'E1' },
  { q: 'Q2', options: ['a', 'b', 'c', 'd'], correct: 2, explain: 'E2' },
  { q: 'Q3', options: ['a', 'b', 'c', 'd'], correct: 0, explain: 'E3' },
];

test('maps each answer to yours/right with letters and explanation', () => {
  const rows = buildReview(qs, [
    { selected: 1, correct: true },
    { selected: 3, correct: false },
    { selected: 0, correct: true },
  ]);
  assert.equal(rows.length, 3);
  assert.deepEqual(rows[1], {
    num: 2, question: 'Q2', correct: false,
    yours: { letter: 'D', text: 'd' }, right: { letter: 'C', text: 'c' }, explain: 'E2',
  });
  assert.equal(rows[0]!.correct, true);
  assert.deepEqual(rows[2]!.right, { letter: 'A', text: 'a' });
});

test('null selection becomes yours: null instead of crashing', () => {
  const [row] = buildReview(qs, [{ selected: null, correct: false }]);
  assert.equal(row!.yours, null);
  assert.deepEqual(row!.right, { letter: 'B', text: 'b' });
});

test('partial quiz only returns answered questions; empty gives empty', () => {
  assert.equal(buildReview(qs, [{ selected: 1, correct: true }]).length, 1);
  assert.deepEqual(buildReview(qs, []), []);
  assert.deepEqual(buildReview([], []), []);
});

test('extra answers beyond the question list are ignored', () => {
  const answers = [0, 1, 2, 3].map(() => ({ selected: 0, correct: false }));
  assert.equal(buildReview(qs, answers).length, 3);
});

test('out-of-range selection yields empty text rather than undefined', () => {
  const [row] = buildReview(qs, [{ selected: 7, correct: false }]);
  assert.deepEqual(row!.yours, { letter: 'H', text: '' });
});

test('optionLetter', () => {
  assert.equal(optionLetter(0), 'A');
  assert.equal(optionLetter(3), 'D');
});
