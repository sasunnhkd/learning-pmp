import { getMission, phoenixMissions } from './content.ts';
import type { QuestMission } from './model';

export type Stage = 'briefing' | 'evidence' | 'decision' | 'lesson' | 'practice' | 'debrief';
export type Attempt = {
  id: number; missionId: string; version: string; stage: Stage; startedAt: string;
  evidence: string[]; decision: string | null; reasoning: string;
  responses: { itemId: string; selected: number }[]; completedAt: string | null;
  // Optional fields preserve compatibility with the original CH01-M01 saved record.
  activity?: Record<string, number>; caseId?: string;
};
export type QuestProgress = { schema: 1; attempts: Attempt[] };
export type Command = (
  | { type: 'begin'; now: string; missionId?: string; caseId?: string }
  | { type: 'continue'; from?: Stage }
  | { type: 'inspect'; evidenceId: string }
  | { type: 'decide'; choice: string; reasoning: string; activity?: Record<string, number> }
  | { type: 'answer'; itemId: string; selected: number }
  | { type: 'finish'; now: string }
) & { attemptId?: number };

export const emptyProgress = (): QuestProgress => ({ schema: 1, attempts: [] });
export const latestAttempt = (p: QuestProgress, missionId?: string): Attempt | undefined =>
  [...p.attempts].reverse().find(a => !missionId || a.missionId === missionId);
export const isComplete = (p: QuestProgress, id: string): boolean => p.attempts.some(a => a.missionId === id && a.completedAt !== null);
export const completionCount = (p: QuestProgress): number => new Set(p.attempts.filter(a => a.completedAt).map(a => a.missionId)).size;
export const predecessor = (id: string): string | undefined => {
  const index = phoenixMissions.findIndex(m => m.id === id);
  return index > 0 ? phoenixMissions[index - 1]!.id : undefined;
};
export const canBegin = (p: QuestProgress, id: string): boolean => !!getMission(id) && (!predecessor(id) || isComplete(p, predecessor(id)!));
export const nextMission = (p: QuestProgress): QuestMission | undefined => phoenixMissions.find(m => !isComplete(p, m.id) && canBegin(p, m.id));
export function missionFor(a: Attempt): QuestMission {
  const mission = getMission(a.missionId, a.caseId);
  if (!mission || mission.version !== a.version) throw new Error('This attempt needs its original content version. Export your progress before resetting.');
  return mission;
}
export const score = (a: Attempt): number => a.responses.filter(r => missionFor(a).items.find(i => i.id === r.itemId)?.correct === r.selected).length;
export function releaseOutcome(a: Attempt): { status: string; note: string } {
  const m = missionFor(a); const c = m.choices.find(c => c.id === a.decision);
  if (c?.requestedRelease) {
    const allowed = m.releaseGate?.[c.requestedRelease] === true;
    return { status: allowed ? `${c.requestedRelease} scope supported` : 'Blocked', note: m.releaseGate?.note ?? 'Required release evidence and authorization have not been established by this exercise.' };
  }
  if (a.decision === 'postpone') return {status: 'Postponed', note: m.releaseGate?.note ?? 'A release recommendation has not been made.'};
  return {status: 'No deployment authorization', note: 'This activity records a project decision. It does not establish release readiness or authorize deployment.'};
}

// Target a specific attempt so reviewing or resuming an earlier mission cannot mutate another.
export function transition(p: QuestProgress, command: Command): QuestProgress {
  const next = structuredClone(p);
  if (command.type === 'begin') {
    const id = command.missionId ?? phoenixMissions[0]!.id;
    const mission = getMission(id, command.caseId);
    if (!mission) throw new Error('This mission or readiness case is unavailable.');
    if (!canBegin(p, id)) throw new Error(`Complete ${predecessor(id)} before starting this mission.`);
    const active = [...p.attempts].reverse().find(a => a.missionId === id && !a.completedAt);
    if (active) {
      if (command.caseId && active.caseId !== command.caseId) throw new Error('Finish your current readiness case before starting another.');
      return p;
    }
    next.attempts.push({ id: p.attempts.length + 1, missionId: id, version: mission.version,
      stage: 'briefing', startedAt: command.now, evidence: [], decision: null, reasoning: '', responses: [], completedAt: null,
      ...(mission.activities ? {activity: {}} : {}), ...(mission.cases ? {caseId: command.caseId ?? mission.cases[0]!.id} : {}) });
    return next;
  }
  const a = command.attemptId ? next.attempts.find(a => a.id === command.attemptId) : latestAttempt(next);
  if (!a) throw new Error('Start the mission first.');
  const m = missionFor(a);
  if (a.completedAt) return p;
  if (command.type === 'inspect') {
    if (!m.evidence.some(e => e.id === command.evidenceId)) throw new Error('Evidence is unavailable.');
    if (!a.evidence.includes(command.evidenceId)) a.evidence.push(command.evidenceId);
  } else if (command.type === 'decide') {
    if (a.decision) return p;
    if (a.stage !== 'decision') throw new Error('Open the comparison before submitting a decision.');
    if (m.evidence.some(e => !a.evidence.includes(e.id))) throw new Error('Inspect both evidence entries before committing your decision.');
    if (!m.choices.some(c => c.id === command.choice)) throw new Error('Choose a delivery proposal or project response.');
    const activity: Record<string, number> = {};
    for (const field of m.activities ?? []) {
      const value = command.activity?.[field.id];
      if (!Number.isInteger(value) || value! < 0 || value! >= field.options.length) throw new Error(`Complete the selection: ${field.prompt}`);
      activity[field.id] = value!;
    }
    a.decision = command.choice;
    a.reasoning = command.reasoning.trim().slice(0, 2000);
    if (m.activities) a.activity = activity;
  } else if (command.type === 'answer') {
    if (a.responses.some(r => r.itemId === command.itemId)) return p;
    if (a.stage !== 'practice') throw new Error('Finish the mini-lesson before practice.');
    const item = m.items[a.responses.length];
    if (item?.id !== command.itemId || !Number.isInteger(command.selected) || command.selected < 0 || command.selected >= item.options.length) throw new Error('Choose one answer for the current question.');
    a.responses.push({itemId: item.id, selected: command.selected});
  } else if (command.type === 'continue') {
    if (command.from && command.from !== a.stage) return p;
    if (a.stage === 'briefing') a.stage = 'evidence';
    else if (a.stage === 'evidence') {
      if (m.evidence.some(e => !a.evidence.includes(e.id))) throw new Error('Inspect both evidence entries before comparing responses.');
      a.stage = 'decision';
    } else if (a.stage === 'decision') {
      if (!a.decision) throw new Error('Submit the required comparison first.');
      a.stage = 'lesson';
    } else if (a.stage === 'lesson') a.stage = 'practice';
  } else if (command.type === 'finish') {
    if (a.stage !== 'practice' || !a.decision || a.responses.length !== m.items.length) throw new Error('Complete the comparison, mini-lesson and all six practice responses first.');
    a.stage = 'debrief'; a.completedAt = command.now;
  }
  return next;
}

// Old M01 records remain valid; unsupported versions and corrupt records are preserved.
export function validateProgress(value: unknown): value is QuestProgress {
  if (!value || typeof value !== 'object') return false;
  const p = value as QuestProgress;
  if (p.schema !== 1 || !Array.isArray(p.attempts)) return false;
  const unfinished = new Set<string>();
  return p.attempts.every((a, index) => {
    if (!a || a.id !== index + 1) return false;
    const m = getMission(a.missionId, a.caseId);
    if (!m || a.version !== m.version || (m.cases && !m.cases.some(c => c.id === a.caseId))) return false;
    const prev = predecessor(a.missionId);
    if (prev && !p.attempts.slice(0, index).some(x => x.missionId === prev && x.completedAt !== null)) return false;
    if (!['briefing', 'evidence', 'decision', 'lesson', 'practice', 'debrief'].includes(a.stage)) return false;
    if (typeof a.startedAt !== 'string' || !Number.isFinite(Date.parse(a.startedAt)) || typeof a.reasoning !== 'string' || a.reasoning.length > 2000) return false;
    if (!Array.isArray(a.evidence) || new Set(a.evidence).size !== a.evidence.length || a.evidence.some(id => !m.evidence.some(e => e.id === id))) return false;
    if (a.decision !== null && !m.choices.some(c => c.id === a.decision)) return false;
    if (a.decision !== null && a.evidence.length !== m.evidence.length) return false;
    if (a.activity !== undefined && (!a.activity || typeof a.activity !== 'object' || Array.isArray(a.activity))) return false;
    if (Object.keys(a.activity ?? {}).some(id => !(m.activities ?? []).some(f => f.id === id))) return false;
    for (const field of m.activities ?? []) {
      const v = a.activity?.[field.id];
      if ((a.decision !== null || v !== undefined) && (!Number.isInteger(v) || v! < 0 || v! >= field.options.length)) return false;
    }
    if (['lesson', 'practice', 'debrief'].includes(a.stage) && a.decision === null) return false;
    if (!Array.isArray(a.responses) || a.responses.length > m.items.length) return false;
    if (a.responses.some((r, k) => !r || r.itemId !== m.items[k]?.id || !Number.isInteger(r.selected) || r.selected < 0 || r.selected >= m.items[k]!.options.length)) return false;
    if (a.responses.length && !['practice', 'debrief'].includes(a.stage)) return false;
    if (a.stage === 'debrief') {
      if (a.responses.length !== m.items.length || typeof a.completedAt !== 'string' || !Number.isFinite(Date.parse(a.completedAt))) return false;
    } else {
      if (a.completedAt !== null || unfinished.has(a.missionId)) return false;
      unfinished.add(a.missionId);
    }
    return true;
  });
}

export const QUEST_KEY = 'pmp_quest_v1';
export interface QuestStorage { getItem(key: string): string | null; setItem(key: string, value: string): void }
export function loadProgress(storage: QuestStorage): QuestProgress {
  const raw = storage.getItem(QUEST_KEY);
  if (raw === null) return emptyProgress();
  const parsed: unknown = JSON.parse(raw);
  if (!validateProgress(parsed)) throw new Error('Saved Quest data is incompatible or damaged. Your original data has been preserved.');
  return parsed;
}
export function commitProgress(storage: QuestStorage, p: QuestProgress, command: Command): QuestProgress {
  const next = transition(p, command);
  if (next !== p) storage.setItem(QUEST_KEY, JSON.stringify(next));
  return next;
}
