export type QuestItem = { id: string; q: string; options: string[]; correct: number; rationale: string; task: string };
export type Evidence = { id: string; title: string; kind: string; text: string };
export type Choice = {
  id: string; title: string; text: string; quality: string; rationale: string; metrics: string;
  authorized: boolean; criteria: string[]; requestedRelease?: 'full' | 'phased';
};
export type Activity = { id: string; prompt: string; options: string[]; correct: number; rationale: string };
export type ReadinessCase = {
  id: string; title: string; evidence: Evidence[]; choices: Choice[];
  releaseGate: { full: boolean; phased: boolean; note: string };
};
export type QuestMission = {
  id: string; version: string; title: string; task: string; status: string;
  objective: string; briefing: string; speaker?: string; quote?: string; artifact?: string;
  evidence: Evidence[]; prompt: string; choices: Choice[];
  lesson: { title: string; text: string }[]; items: QuestItem[];
  activities?: Activity[]; cases?: ReadinessCase[]; releaseGate?: ReadinessCase['releaseGate'];
};
