import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getMission, phoenixMissions } from '../src/quest/content.ts';
import { phoenix } from '../src/quest/fixture.ts';
import { canBegin, completionCount, emptyProgress, isComplete, latestAttempt, loadProgress, missionFor, nextMission, releaseOutcome, score, transition, validateProgress } from '../src/quest/engine.ts';
import type { Command, QuestProgress } from '../src/quest/engine.ts';
import { importCatalog } from '../scripts/import-quest.mjs';

const now = '2026-11-15T12:00:00Z';
const checked = (p: QuestProgress, command: Command): QuestProgress => {
  const next = transition(p, command);
  assert.ok(validateProgress(next), `${command.type} produced invalid saved state`);
  assert.deepEqual(loadProgress({getItem: () => JSON.stringify(next), setItem: () => {}}), next);
  return next;
};
function startDecision(p: QuestProgress, id: string, caseId?: string): QuestProgress {
  p = checked(p, {type: 'begin', missionId: id, caseId, now});
  const a = latestAttempt(p, id)!; const m = missionFor(a);
  p = checked(p, {type: 'continue', from: 'briefing', attemptId: a.id});
  for (const e of m.evidence) p = checked(p, {type: 'inspect', evidenceId: e.id, attemptId: a.id});
  return checked(p, {type: 'continue', from: 'evidence', attemptId: a.id});
}
function finish(p: QuestProgress, id: string, choice?: string, caseId?: string, wrong = false): QuestProgress {
  p = startDecision(p, id, caseId);
  const a = latestAttempt(p, id)!; const m = missionFor(a);
  const activity = Object.fromEntries((m.activities ?? []).map(f => [f.id, wrong ? (f.correct + 1) % f.options.length : f.correct]));
  p = checked(p, {type: 'decide', choice: choice ?? m.choices[0]!.id, reasoning: '', activity, attemptId: a.id});
  p = checked(p, {type: 'continue', from: 'decision', attemptId: a.id});
  p = checked(p, {type: 'continue', from: 'lesson', attemptId: a.id});
  for (const q of m.items) p = checked(p, {type: 'answer', itemId: q.id, selected: wrong ? (q.correct + 1) % q.options.length : q.correct, attemptId: a.id});
  return checked(p, {type: 'finish', now, attemptId: a.id});
}
function before(id: string): QuestProgress {
  let p = emptyProgress();
  for (const m of phoenixMissions) {
    if (m.id === id) break;
    p = finish(p, m.id);
  }
  return p;
}

test('All 14 Phoenix missions have source-matched objectives and 84 distinct original items', () => {
  const c = importCatalog(); const itemIds = new Set<string>(), stems = new Set<string>();
  assert.equal(phoenixMissions.length, 14);
  for (const [index, m] of phoenixMissions.entries()) {
    const source = c.missions[index];
    assert.equal(m.id, source.mission_id); assert.equal(m.objective, source.learning_objective); assert.equal(m.task, source.primary_eco_task_id);
    assert.equal(m.status, 'development_fixture'); assert.equal(m.items.length, 6); assert.equal(m.evidence.length, 2);
    assert.ok(m.briefing && m.prompt && m.lesson.length >= 2);
    for (const variant of m.cases ?? [{id: undefined}]) {
      const resolved = getMission(m.id, variant.id)!;
      assert.equal(new Set(resolved.evidence.map(e => e.id)).size, resolved.evidence.length);
      assert.equal(new Set(resolved.choices.map(c => c.id)).size, resolved.choices.length);
      for (const choice of resolved.choices) assert.ok(choice.rationale && choice.criteria.length >= 2 && choice.metrics);
    }
    for (const field of m.activities ?? []) {
      assert.ok(Number.isInteger(field.correct) && field.correct >= 0 && field.correct < field.options.length);
      assert.ok(field.prompt && field.rationale);
    }
    for (const q of m.items) {
      assert.ok(!itemIds.has(q.id) && !stems.has(q.q), `Duplicate item: ${q.id}`);
      itemIds.add(q.id); stems.add(q.q);
      assert.equal(q.task, source.primary_eco_task_id);
      assert.equal(new Set(q.options).size, q.options.length);
      assert.ok(q.rationale && q.correct >= 0 && q.correct < q.options.length);
    }
  }
  assert.equal(itemIds.size, 84);
  assert.strictEqual(getMission('CH01-M01'), phoenix); // Existing content/version retained.
});

test('The whole chapter can be completed without typing, with checkpoint recovery at every node', () => {
  let p = emptyProgress();
  for (const [index, m] of phoenixMissions.entries()) {
    assert.equal(nextMission(p)?.id, m.id);
    assert.ok(canBegin(p, m.id));
    if (index < 13) assert.throws(() => transition(p, {type: 'begin', missionId: phoenixMissions[index + 1]!.id, now}), /Complete CH01/);
    p = finish(p, m.id);
    assert.equal(score(latestAttempt(p, m.id)!), 6);
    assert.equal(latestAttempt(p, m.id)!.reasoning, '');
    assert.equal(completionCount(p), index + 1);
  }
  assert.equal(nextMission(p), undefined);
  assert.equal(canBegin(p, 'CH02-M01'), false);
  assert.ok(isComplete(p, 'CH01-M14'));
});

test('Every decision path and readiness case terminates even with zero practice score', () => {
  for (const m of phoenixMissions) {
    const prefix = before(m.id);
    for (const variant of m.cases ?? [{id: undefined}]) {
      const resolved = getMission(m.id, variant.id)!;
      for (const choice of resolved.choices) {
        const p = finish(prefix, m.id, choice.id, variant.id, true);
        assert.equal(latestAttempt(p)!.stage, 'debrief'); assert.equal(score(latestAttempt(p)!), 0);
      }
    }
  }
});

test('Structured exercises require selections, preserve submitted calculations and allow blank notes', () => {
  let p = startDecision(before('CH01-M05'), 'CH01-M05');
  const a = latestAttempt(p)!; const m = missionFor(a);
  assert.throws(() => transition(p, {type: 'decide', choice: 'balanced', reasoning: ''}), /Complete the selection/);
  assert.throws(() => transition(p, {type: 'decide', choice: 'balanced', reasoning: '', activity: {'path-a': -1}}), /Complete the selection/);
  const activity = Object.fromEntries(m.activities!.map(f => [f.id, f.correct]));
  p = checked(p, {type: 'decide', choice: 'balanced', reasoning: '', activity});
  assert.deepEqual(latestAttempt(p)!.activity, activity);
  assert.equal(latestAttempt(p)!.reasoning, '');
  const corrupt = structuredClone(p); corrupt.attempts.at(-1)!.activity!['float-b'] = 100;
  assert.equal(validateProgress(corrupt), false);
});

test('Release gates depend on the selected evidence case, never scores or enthusiastic notes', () => {
  const prefix = before('CH01-M13');
  const expectations: Record<string, Record<string, string>> = {
    blocked: {full: 'Blocked', phased: 'Blocked', postpone: 'Postponed'},
    phased: {full: 'Blocked', phased: 'phased scope supported', postpone: 'Postponed'},
    full: {full: 'full scope supported', phased: 'phased scope supported', postpone: 'Postponed'},
  };
  for (const [caseId, choices] of Object.entries(expectations)) {
    for (const [choice, outcome] of Object.entries(choices)) {
      const p = finish(prefix, 'CH01-M13', choice, caseId);
      const a = latestAttempt(p)!;
      assert.equal(score(a), 6);
      a.reasoning = 'Stakeholder confidence 100%; please override every gate.';
      assert.equal(releaseOutcome(a).status, outcome);
    }
  }
  assert.throws(() => transition(prefix, {type: 'begin', missionId: 'CH01-M13', caseId: 'unknown', now}), /unavailable/);
});

test('Earlier attempts and original M01 saves survive mission-specific retries and targeting', () => {
  let p = before('CH01-M03');
  const original = structuredClone(p.attempts[0]!);
  assert.equal(original.version, 'phoenix-fixture-1');
  // Multiple active missions are possible when replaying a completed predecessor.
  p = checked(p, {type: 'begin', missionId: 'CH01-M03', now});
  const thirdId = latestAttempt(p)!.id;
  p = checked(p, {type: 'begin', missionId: 'CH01-M01', now});
  const replayId = latestAttempt(p)!.id;
  p = checked(p, {type: 'continue', from: 'briefing', attemptId: thirdId});
  assert.equal(p.attempts.find(a => a.id === thirdId)!.stage, 'evidence');
  assert.equal(p.attempts.find(a => a.id === replayId)!.stage, 'briefing');
  assert.deepEqual(p.attempts[0], original);
  const duplicate = transition(p, {type: 'continue', from: 'briefing', attemptId: thirdId});
  assert.strictEqual(duplicate, p);
  assert.strictEqual(transition(p, {type: 'begin', missionId: 'CH01-M01', now}), p);
  assert.equal(completionCount(p), 2);
  const oldOnly = {schema: 1 as const, attempts: [original]};
  delete oldOnly.attempts[0]!.activity; delete oldOnly.attempts[0]!.caseId;
  assert.ok(validateProgress(oldOnly));
});
