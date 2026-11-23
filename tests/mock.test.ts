import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isSavedMock, mockMatchesQuestions, newRun, type SavedMock } from '../src/mock.ts';
import { buildPool, practiceItemSignature } from '../src/practice.ts';

const question = buildPool({}, [{ topic: 'Risk', q: 'A response creates a new risk', options: ['a','b','c','d'], correct: 0, explain: 'Scenario rationale.', ecoTask: 'BUS05' }])[0]!;
const saved: SavedMock = {
  v: 2, ids: [question.id], itemSignatures: [practiceItemSignature(question)],
  idx: 0, answers: [], run: { ...newRun('mini', 0), runningSince: null },
};

test('saved mocks require the current signed content format', () => {
  assert.ok(isSavedMock(saved));
  assert.equal(isSavedMock({ ...saved, v: 1 }), false);
  assert.equal(isSavedMock({ ...saved, itemSignatures: [] }), false);
  assert.equal(isSavedMock({ ...saved, itemSignatures: [null] }), false);
  assert.ok(mockMatchesQuestions(saved, [question]));
});

test('resuming a mock rejects removed, regraded, reordered, retagged, or supplemental questions', () => {
  for (const current of [undefined,
    { ...question, correct: 1 },
    { ...question, options: ['b','a','c','d'] },
    { ...question, ecoTask: 'BUS04' as const },
    { ...question, ecoTask: null },
  ]) assert.equal(mockMatchesQuestions(saved, [current]), false);
  assert.ok(mockMatchesQuestions(saved, [{ ...question, explain: 'A clearer explanation' }]));
});
