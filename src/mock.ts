// Mock exam: lengths, the pausable clock and the saved in-progress run.
// Pure functions only (no DOM, no storage) so tests/mock.test.ts runs them under plain Node.
// The UI side (ticking, saving, resuming) is in src/actions.ts.
import type { MockLength, MockRun } from './types';

// Full = the real exam (PMP ECO July 2026: 180 questions, 240 minutes).
// Mini = a third of it at the same pace (80 s per question).
export const MOCK_LENGTHS: Record<MockLength, { size: number; minutes: number; label: string }> = {
  mini: { size: 60, minutes: 80, label: 'Mini mock' },
  full: { size: 180, minutes: 240, label: 'Full mock' },
};

// The clock turns to its warning style when this much time is left.
export const MOCK_WARN_MS = 10 * 60 * 1000;

export function newRun(length: MockLength, now: number): MockRun {
  return { length, limitMs: MOCK_LENGTHS[length].minutes * 60_000, elapsedMs: 0, runningSince: now };
}

export function usedMs(run: MockRun, now: number): number {
  return run.elapsedMs + (run.runningSince === null ? 0 : Math.max(0, now - run.runningSince));
}

export function remainingMs(run: MockRun, now: number): number {
  return Math.max(0, run.limitMs - usedMs(run, now));
}

export function pauseRun(run: MockRun, now: number): MockRun {
  if (run.runningSince === null) return run;
  return { ...run, elapsedMs: usedMs(run, now), runningSince: null };
}

export function resumeRun(run: MockRun, now: number): MockRun {
  return run.runningSince === null ? { ...run, runningSince: now } : run;
}

// h:mm:ss under an hour shows m:ss. Rounds up so 0:00 means time is really out.
export function formatClock(ms: number): string {
  const total = Math.ceil(Math.max(0, ms) / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

// What localStorage keeps for an unfinished mock. Question ids, not questions, so a bank edit
// can't resurrect stale text. If any id is no longer in the pool (a stem was edited since), the
// saved mock can't be resumed and is discarded (resumeSavedMock() in src/actions.ts).
// answers.length === idx: one answer per question already passed.
export type SavedMock = {
  v: 1;
  ids: string[];
  idx: number;
  answers: { selected: number[]; correct: boolean }[];
  run: MockRun; // always saved paused (runningSince null)
};

export function isSavedMock(x: unknown): x is SavedMock {
  const s = x as SavedMock | null;
  return !!s && s.v === 1 && Array.isArray(s.ids) && s.ids.length > 0 && Number.isInteger(s.idx)
    && s.idx >= 0 && s.idx < s.ids.length && Array.isArray(s.answers) && s.answers.length === s.idx && !!s.run
    && (s.run.length === 'mini' || s.run.length === 'full') && typeof s.run.elapsedMs === 'number'
    && typeof s.run.limitMs === 'number';
}
