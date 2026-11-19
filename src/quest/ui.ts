import catalogData from '../../data/quest/map.json';
import { state, esc } from '../state';
import { render } from '../render';
import { getMission, phoenixMissions } from './content';
import { canBegin, commitProgress, completionCount, emptyProgress, isComplete, latestAttempt, loadProgress, missionFor, nextMission, QUEST_KEY, releaseOutcome, score } from './engine';
import type { Attempt, Command, QuestProgress } from './engine';
import { chapterIllustration } from './art';
import './quest.css';

type Mission = {
  mission_id: string; chapter_id: string; mission_title: string; mission_sequence: number;
  narrative_hook: string; learning_objective: string; prerequisite_mission_id: string;
  primary_eco_task_id: string; eco_domain: string; delivery_approach: string;
  story_artifact: string;
};
const catalog = catalogData;
let progress: QuestProgress = emptyProgress();
let loaded = false;
let loadError = '';
let error = '';
let screen: 'map' | 'mission' | 'notebook' | 'outline' = 'map';
let outlineId = '';
let selectedChoice = '';
let pendingAnswer = -1;
let questionIndex: number | null = null;
let evidenceOpen = '';
let selectedAttemptId: number | null = null;
let selectedActivity: Record<string, number> = {};
const currentAttempt = (): Attempt | undefined => progress.attempts.find(a => a.id === selectedAttemptId) ?? latestAttempt(progress);

function load(): void {
  if (loaded) return;
  loaded = true;
  try { progress = loadProgress(localStorage); loadError = ''; }
  catch (e) { loadError = e instanceof Error ? e.message : 'Quest storage is unavailable.'; }
}
const action = (name: string, label: string, attrs = '', style = 'btn btn-dark'): string =>
  `<button type="button" class="${style}" data-quest-action="${name}" ${attrs}>${label}</button>`;
const status = (text: string): string => `<span class="quest-status">${esc(text)}</span>`;
const titleFor = (id: string): string => catalog.missions.find(m => m.mission_id === id)?.mission_title ?? id;
const prerequisite = (m: Mission): string => {
  if (m.chapter_id === 'CH02' && m.mission_sequence === 1 && isComplete(progress, 'CH01-M14')) return 'The Phoenix chapter checkpoint must be submitted before the next chapter. Its assessment is still in development.';
  return m.prerequisite_mission_id && !isComplete(progress, m.prerequisite_mission_id)
    ? `Complete “${titleFor(m.prerequisite_mission_id)}” first.` : '';
};
const missionState = (m: Mission): string => isComplete(progress, m.mission_id) ? 'Complete · preview'
  : latestAttempt(progress, m.mission_id) ? 'In progress'
  : prerequisite(m) ? 'Locked'
  : getMission(m.mission_id) ? 'Ready to preview' : 'In development';

function hero(): string {
  return `<section class="quest-hero quest-illustrated">${chapterIllustration('CH01')}<div class="quest-banner-copy"><div class="eyebrow">Your next chapter</div>
    <h1 class="h1" id="quest-heading" tabindex="-1">Learn by leading.</h1>
    <p>Step into the project. Read the evidence.<br>Make a decision you can explain.</p>
    <div class="quest-hero-foot"><span>12 chapters · 168 planned missions</span>${status('Development preview')}</div>
    </div></section>`;
}

function mapView(): string {
  const next = nextMission(progress);
  const suggestedId = next?.id ?? 'CH01-M14';
  const a = latestAttempt(progress, suggestedId);
  const count = completionCount(progress);
  return `${hero()}<aside class="quest-notice">Play all 14 Phoenix missions as a development preview. Written notes are optional. Content and feedback await subject-matter review; later chapters and assessments remain in development.</aside>
    <section class="card quest-next"><div class="eyebrow-accent">Chapter 01 · Project Phoenix</div><h2 class="h2">Rescue the launch.</h2>
      <p class="body">Six weeks. A demanding customer. A team that needs a plan. Your first decision sets the direction.</p>
      <div class="quest-meta">14 playable missions · 84 practice questions · 1 checkpoint planned</div>
      ${action('open', a && !a.completedAt ? 'Continue your mission →' : next ? 'Begin next mission →' : 'Review Phoenix finale →', `data-id="${suggestedId}"`)}
      <p class="small">${next ? esc(next.title) : 'All 14 story missions complete · chapter checkpoint pending'}</p>
      <p class="small">${count} of 14 Phoenix missions completed · save after each activity</p></section>
    <div class="quest-section-heading"><h2 class="h2">The journey</h2><span class="small">${count} / 168 preview completions</span></div>
    ${catalog.chapters.map(ch => {
      const missions = catalog.missions.filter(m => m.chapter_id === ch.chapter_id);
      return `<details class="quest-chapter" ${ch.sequence === 1 ? 'open' : ''}><summary>
        ${chapterIllustration(ch.chapter_id, true)}<span class="quest-chapter-number">${String(ch.sequence).padStart(2, '0')}</span><span class="quest-chapter-copy"><span class="quest-chapter-title">${esc(ch.chapter_title.replace(/^.*? — /, ''))}</span><span class="quest-chapter-world">${esc(ch.project_world)} · ${ch.planned_missions} missions</span></span><span class="quest-disclosure" aria-hidden="true">+</span>
        </summary><div class="quest-chapter-body"><p class="body">${esc(ch.story_arc)}</p>
        <ol class="quest-missions">${missions.map(m => `<li><button type="button" data-quest-action="outline" data-id="${esc(m.mission_id)}" class="quest-mission-row">
          <span class="quest-node ${getMission(m.mission_id) && canBegin(progress, m.mission_id) ? 'quest-node-active' : ''}">${isComplete(progress, m.mission_id) ? '✓' : m.mission_sequence}</span>
          <span><strong>${esc(m.mission_title)}</strong><span class="quest-mission-sub">${esc(m.eco_domain)} · ${esc(m.delivery_approach)}</span></span>${status(missionState(m))}</button></li>`).join('')}</ol>
        <div class="quest-checkpoint"><strong>Chapter checkpoint</strong><span>15 questions · 20 minutes · awaiting authored content</span></div></div></details>`;
    }).join('')}
    <section class="card"><div class="eyebrow">Assessments · planned</div><h2 class="h2">Know where to focus.</h2><p class="body">A 40-question diagnostic, 12 chapter checkpoints and two 180-question mocks are planned. Their question sets have not been authored or approved.</p><p class="small">Quest assessment results will be separate from the app’s existing practice quizzes.</p></section>`;
}

function outlineView(): string {
  const m = catalog.missions.find(m => m.mission_id === outlineId);
  if (!m) return `<section class="card"><h1 class="h2">Mission unavailable</h1><p class="body">This mission could not be found. Your saved work is unchanged.</p>${action('map', 'Return to journey')}</section>`;
  const playable = getMission(m.mission_id);
  const active = latestAttempt(progress, m.mission_id);
  const chapter = catalog.chapters.find(ch => ch.chapter_id === m.chapter_id)!;
  return `<section class="quest-chapter-banner quest-outline-banner">${chapterIllustration(m.chapter_id)}<div class="quest-banner-copy"><div class="eyebrow">Chapter ${String(chapter.sequence).padStart(2, '0')}</div><h2 class="h2">${esc(chapter.chapter_title)}</h2><p class="small">${esc(chapter.project_world)}</p></div></section>
    <section class="card"><div class="eyebrow-accent">${esc(m.mission_id)} · ${esc(missionState(m))}</div>
    <h1 class="h1" id="quest-heading" tabindex="-1">${esc(m.mission_title)}</h1><p class="body">${esc(m.narrative_hook)}</p>
    <h2 class="h3">Your objective</h2><p class="body">${esc(m.learning_objective)}</p>
    <dl class="quest-facts"><div><dt>Exam task</dt><dd>${esc(m.primary_eco_task_id)} · ${esc(m.eco_domain)}</dd></div><div><dt>Approach</dt><dd>${esc(m.delivery_approach)}</dd></div><div><dt>Artifact</dt><dd>${esc(m.story_artifact)}</dd></div></dl>
    ${playable ? `<p class="small">${esc(prerequisite(m))}</p>${action('open', active && !active.completedAt ? 'Resume mission →' : isComplete(progress, m.mission_id) ? 'Review mission →' : 'Open mission →', `data-id="${m.mission_id}" ${canBegin(progress, m.mission_id) ? '' : 'disabled'}`)}
      ${playable.cases && canBegin(progress, m.mission_id) ? `<h2 class="h3 quest-case-heading">Practice another readiness case</h2><p class="small">Each case supplies its own evidence. Finish an active case before starting another.</p><div class="btn-group">${playable.cases.map(c => action('start-case', esc(c.title), `data-id="${m.mission_id}" data-case="${c.id}" ${active && !active.completedAt ? 'disabled' : ''}`, 'btn btn-ghost')).join('')}</div>` : ''}` : `<div class="quest-notice">${prerequisite(m) ? esc(prerequisite(m)) + ' ' : ''}This mission is an outline. Play will become available when its scenes, evidence and questions are authored and reviewed.</div>`}
    <p class="small">Source mapping is draft and awaits review. Estimated full mission: ${m.estimated_minutes} minutes.</p>
    ${action('map', '← Back to journey', '', 'btn btn-ghost')}</section>`;
}

function evidenceView(a: Attempt): string {
  const m = missionFor(a);
  return `<h2 class="h2">Read the room. Then the facts.</h2><p class="body">Inspect both entries before choosing a project response. You can reopen the evidence throughout your attempt.</p>
    ${m.evidence.map(e => `<section class="quest-evidence"><div class="eyebrow">${esc(e.kind)}</div><h3 class="h3">${esc(e.title)}</h3>
      <p class="small">${esc(e.id)} · ${a.evidence.includes(e.id) ? 'Inspected ✓' : 'Not yet inspected'}</p>
      ${action('inspect', a.evidence.includes(e.id) ? 'Reopen evidence' : 'Inspect evidence', `data-id="${e.id}"`, 'btn btn-ghost')}
      ${evidenceOpen === e.id ? `<p class="body quest-evidence-text">${esc(e.text)}</p>` : ''}</section>`).join('')}
    ${action('continue', 'Compare project responses →', a.evidence.length < m.evidence.length ? 'disabled' : '')}`;
}

function feedback(a: Attempt): string {
  const m = missionFor(a);
  const choice = m.choices.find(c => c.id === a.decision);
  if (!choice) return '';
  return `<section class="quest-feedback" aria-label="Decision feedback"><div class="eyebrow-accent">Decision quality · ${esc(choice.quality)}</div>
    <p class="body">${esc(choice.rationale)}</p><ul class="quest-criteria">${choice.criteria.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
    <h3 class="h3">Project consequences</h3><p class="body">${esc(choice.metrics)}</p>
    <h3 class="h3">Mandatory gate status · ${esc(releaseOutcome(a).status)}</h3><p class="body">${esc(releaseOutcome(a).note)}</p>
    ${activitySummary(a)}
    <p class="small">Development rubric · not an exam score or reviewed assessment.</p></section>`;
}

function decisionView(a: Attempt): string {
  const m = missionFor(a);
  if (a.decision) return `<h2 class="h2">Your decision is recorded.</h2>${feedback(a)}${action('continue', 'Read the mini-lesson →')}`;
  return `<h2 class="h2">${esc(m.prompt)}</h2><p class="body">Use the evidence to compare the available responses. Your written reflection is optional.</p>
    ${activityFields(a)}<div class="quest-options" role="group" aria-label="Project responses">${m.choices.map((c, i) => `<button type="button" class="quest-option ${selectedChoice === c.id ? 'selected' : ''}" data-quest-action="choose" data-id="${c.id}" aria-pressed="${selectedChoice === c.id}"><span class="quest-option-letter">${String.fromCharCode(65 + i)}</span><span><strong>${esc(c.title)}</strong><span>${esc(c.text)}</span></span></button>`).join('')}</div>
    <label for="quest-reason" class="quest-label">Your notes (optional)</label><p class="small" id="quest-reason-help">Add a reflection if you like, or continue with just your selected proposal. Notes are saved when you commit.</p>
    <textarea id="quest-reason" rows="4" maxlength="2000" aria-describedby="quest-reason-help" placeholder="Optional: what influenced your decision?">${esc(a.reasoning)}</textarea>
    ${action('decide', 'Commit decision →', !selectedChoice || (m.activities ?? []).some(f => selectedActivity[f.id] === undefined) ? 'disabled' : '')}`;
}

function practiceView(a: Attempt): string {
  const m = missionFor(a);
  const index = questionIndex ?? Math.min(a.responses.length, m.items.length - 1);
  const item = m.items[index]!;
  const answer = a.responses[index];
  return `<div class="eyebrow-accent">Retrieval practice · ${index + 1} of 6 · ${esc(item.task)}</div><h2 class="h2">${esc(item.q)}</h2>
    <div class="quest-options" role="group" aria-label="Answer choices">${item.options.map((o, i) => `<button type="button" class="quest-option ${(answer?.selected ?? pendingAnswer) === i ? 'selected' : ''}" data-quest-action="select-answer" data-index="${i}" aria-pressed="${(answer?.selected ?? pendingAnswer) === i}" ${answer ? 'disabled' : ''}><span class="quest-option-letter">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}</div>
    ${answer ? `<section class="quest-feedback" role="status"><strong>${answer.selected === item.correct ? 'Correct in this development fixture' : 'A concept to revisit'}</strong><p class="body">${esc(item.rationale)}</p><p class="small">Recommended answer: ${esc(item.options[item.correct]!)} · Task ${esc(item.task)} · ${esc(item.id)}</p></section>
      ${index === 5 ? action('finish', 'Finish mission & view debrief →') : action('next-item', 'Next question →')}`
      : action('answer', 'Submit answer', pendingAnswer < 0 ? 'disabled' : '')}
    <p class="small">All six responses are required. There is no passing-score threshold. Results are preview feedback.</p>`;
}

function debriefView(a: Attempt): string {
  const m = missionFor(a);
  const first = progress.attempts.find(x => x.missionId === a.missionId && x.caseId === a.caseId && x.completedAt);
  const next = phoenixMissions[phoenixMissions.findIndex(x => x.id === a.missionId) + 1];
  return `<div class="eyebrow-accent">Mission complete · development preview</div><h2 class="h1">A decision to learn from.</h2>
    <p class="body">You examined the evidence, recorded a project decision and completed six practice responses.</p>
    <div class="quest-result"><strong>${score(a)}<span> / 6</span></strong><span>practice answers correct · attempt ${a.id}</span></div>
    ${first && first.id !== a.id ? `<p class="small">First completed attempt: ${score(first)}/6. This retry is retained separately.</p>` : ''}
    ${feedback(a)}
    <details class="quest-review"><summary>Review all six answers</summary>${m.items.map((q, i) => `<article><div class="eyebrow">Question ${i + 1} · ${esc(q.task)}</div><h3 class="h3">${esc(q.q)}</h3><p class="body">Your answer: ${esc(q.options[a.responses[i]!.selected]!)}<br>Recommended answer: ${esc(q.options[q.correct]!)}</p><p class="body">${esc(q.rationale)}</p></article>`).join('')}</details>
    <div class="quest-notice">${next ? `Next: ${esc(next.title)}. Continue when you’re ready.` : 'Phoenix story complete. The chapter checkpoint is still in development, so the next chapter remains unavailable.'} Preview results do not establish reviewed mastery or exam readiness.</div>
    <div class="quest-debrief-actions">
      ${next ? action('open', `Continue to ${esc(next.title)} →`, `data-id="${next.id}"`) : ''}
      <div class="btn-group">${action('notebook', 'Open your notebook')}${action('replay', 'Try a new approach', `data-id="${a.missionId}"`, 'btn btn-ghost')}</div>
      ${action('map', '← Back to journey', '', 'btn btn-ghost')}
    </div>`;
}

function missionView(): string {
  const a = currentAttempt();
  if (!a) return `<section class="card"><h1 class="h2">Begin your first mission</h1>${action('begin', 'Start The New Project Brief')}</section>`;
  const m = missionFor(a);
  const stages = ['briefing', 'evidence', 'decision', 'lesson', 'practice', 'debrief'];
  const stageLabels = ['Briefing', 'Evidence', 'Decision', 'Mini-lesson', 'Practice', 'Debrief'];
  let body = '';
  if (a.stage === 'briefing') body = `<div class="eyebrow-accent">${esc(m.speaker ?? 'Maya · Sponsor')}</div><h2 class="h2">“${esc(m.quote ?? 'Phoenix needs a credible plan.')}”</h2><p class="body">${esc(m.briefing)}</p><div class="quest-objective"><div class="eyebrow">Your objective</div><p>${esc(m.objective)}</p></div>${action('continue', 'Open the evidence →')}`;
  else if (a.stage === 'evidence') body = evidenceView(a);
  else if (a.stage === 'decision') body = decisionView(a);
  else if (a.stage === 'lesson') body = `<div class="eyebrow-accent">The mini-lesson</div><h2 class="h2">What this decision teaches</h2>${m.lesson.map(l => `<article class="quest-lesson"><h3 class="h3">${esc(l.title)}</h3><p class="body">${esc(l.text)}</p></article>`).join('')}${action('continue', 'Check your understanding →')}`;
  else if (a.stage === 'practice') body = practiceView(a);
  else body = debriefView(a);
  return `<header class="quest-mission-header quest-chapter-banner">${chapterIllustration(a.missionId.split('-')[0]!)}<div class="quest-banner-copy"><div class="eyebrow">${esc(m.id)} · Attempt ${a.id}${a.caseId ? ` · ${esc(m.cases?.find(c => c.id === a.caseId)?.title ?? a.caseId)}` : ''} · Development preview</div><h1 class="h2" id="quest-heading" tabindex="-1">${esc(m.title)}</h1></div></header>
    <ol class="quest-steps" aria-label="Mission progress">${stageLabels.map((s, i) => `<li ${a.stage === stages[i] ? 'aria-current="step"' : ''} class="${stages.indexOf(a.stage) > i ? 'done' : ''}">${s}</li>`).join('')}</ol>
    <section class="card quest-play">${body}</section>
    ${a.stage !== 'evidence' ? `<details class="quest-reference"><summary>Reference evidence</summary>${m.evidence.map(e => `<h3 class="h3">${esc(e.title)} · ${esc(e.id)}</h3><p class="body">${esc(e.text)}</p>`).join('')}</details>` : ''}
    <p class="small quest-save-status">Saved checkpoints stay on this browser. You can leave after a committed activity.${a.completedAt ? '' : ' Unsubmitted choices are not yet saved.'}</p>`;
}

function activityFields(a: Attempt): string {
  const m = missionFor(a);
  return (m.activities ?? []).length ? `<fieldset class="quest-activity"><legend>Work with the evidence</legend><p class="small">Make a selection for each field. No typing required.</p>${m.activities!.map(f => `<label class="quest-label" for="quest-field-${f.id}">${esc(f.prompt)}</label><select id="quest-field-${f.id}" data-quest-field="${f.id}"><option value="">Choose a response…</option>${f.options.map((o, i) => `<option value="${i}" ${selectedActivity[f.id] === i ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`).join('')}</fieldset>` : '';
}
function activitySummary(a: Attempt): string {
  const m = missionFor(a);
  if (!a.decision || !m.activities?.length) return '';
  return `<h3 class="h3">Evidence exercise feedback</h3>${m.activities.map(f => `<p class="body"><strong>${esc(f.prompt)}</strong><br>Your selection: ${esc(f.options[a.activity![f.id]!]!)}<br>${a.activity![f.id] === f.correct ? 'Supported by the evidence.' : `Revisit: ${esc(f.options[f.correct]!)}`} ${esc(f.rationale)}</p>`).join('')}`;
}
function notebookView(): string {
  return `<div class="eyebrow-accent">Your working record</div><h1 class="h1" id="quest-heading" tabindex="-1">The field notebook.</h1><p class="body">Your decisions and optional reflections. Each mission, readiness case and attempt keeps its own record.</p>
    ${progress.attempts.length ? [...progress.attempts].reverse().map(a => {
      const m = missionFor(a);
      return `<article class="card"><div class="eyebrow">${esc(a.missionId)} · ${esc(a.version)} · Attempt ${a.id}${a.caseId ? ` · ${esc(a.caseId)}` : ''}</div><h2 class="h2">${esc(m.artifact ?? 'Project charter')} response</h2><p class="small">${esc(m.title)} · ${a.completedAt ? 'Completed preview attempt' : 'Draft · unfinished attempt'} · ${esc(new Date(a.startedAt).toLocaleString())}</p>
      <p class="body">${a.decision ? esc(m.choices.find(c => c.id === a.decision)!.title) : 'No decision submitted yet.'}</p><blockquote class="quest-artifact">${a.reasoning ? esc(a.reasoning) : a.decision ? 'No optional notes added.' : 'Your selected response and any optional notes will appear here.'}</blockquote>
      ${activitySummary(a)}<p class="small">Evidence inspected: ${a.evidence.map(esc).join(', ') || 'None yet'}<br>Practice: ${a.responses.length}/6 answered${a.completedAt ? ` · ${score(a)}/6 correct` : ''}</p><p class="small">Learning artifact · not an approved project document.</p>${action('review', a.completedAt ? 'Review this attempt' : 'Resume this attempt', `data-attempt="${a.id}"`, 'btn btn-ghost')}</article>`;
    }).join('') : `<section class="card"><h2 class="h2">A fresh page.</h2><p class="body">Begin Project Phoenix to keep your first artifact here. Written notes are optional.</p>${action('open', 'Begin your first mission →')}</section>`}
    <div class="btn-group">${action('export', 'Export Quest progress', '', 'btn btn-ghost')}${action('reset', 'Reset Quest preview', '', 'btn btn-ghost')}</div>`;
}

export function renderQuest(): string {
  load();
  return `<div class="quest"><nav class="quest-nav" aria-label="Quest navigation"><button type="button" class="back-btn" data-quest-action="home">← Study home</button><div>${action('map', 'Journey', `aria-pressed="${screen === 'map' || screen === 'outline'}"`, 'quest-tab')}${action('notebook', 'Notebook', `aria-pressed="${screen === 'notebook'}"`, 'quest-tab')}</div></nav>
    <div class="quest-alert" role="alert" ${error || loadError ? '' : 'hidden'}>${esc(error || loadError)}</div>
    ${loadError ? `<section class="card"><h1 class="h2">Your saved work is preserved.</h1><p class="body">Quest could not restore its progress. Retry to load the existing record, or export it before resetting only the Quest preview.</p><div class="btn-group">${action('reload', 'Retry loading')}${action('export', 'Export saved data', '', 'btn btn-ghost')}${action('reset', 'Reset Quest preview', '', 'btn btn-ghost')}</div></section>` : screen === 'mission' ? missionView() : screen === 'notebook' ? notebookView() : screen === 'outline' ? outlineView() : mapView()}
    <footer class="quest-footer">PMP Quest · Preview content awaits review · Not affiliated with or endorsed by PMI</footer></div>`;
}

function commit(command: Command): void {
  progress = commitProgress(localStorage, progress, command.type === 'begin' ? command : {...command, attemptId: currentAttempt()?.id});
}
function exportProgress(): void {
  const raw = localStorage.getItem(QUEST_KEY) ?? JSON.stringify(progress);
  const url = URL.createObjectURL(new Blob([raw], {type: 'application/json'}));
  const link = document.createElement('a'); link.href = url; link.download = 'pmp-quest-progress.json'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function initQuest(): void {
  document.addEventListener('change', event => {
    const field = event.target as HTMLSelectElement;
    if (state.view !== 'quest' || !field.matches('[data-quest-field]')) return;
    if (field.value === '') delete selectedActivity[field.dataset.questField!];
    else selectedActivity[field.dataset.questField!] = Number(field.value);
    const a = currentAttempt();
    const submit = document.querySelector<HTMLButtonElement>('[data-quest-action="decide"]');
    if (a && submit) submit.disabled = !selectedChoice || (missionFor(a).activities ?? []).some(f => selectedActivity[f.id] === undefined);
  });
  document.addEventListener('click', event => {
    const element = (event.target as Element | null)?.closest<HTMLButtonElement>('[data-quest-action]');
    if (!element || element.disabled || state.view !== 'quest') return;
    const name = element.dataset.questAction;
    error = '';
    // Preserve an unsubmitted explanation across local option changes and error rerenders.
    const reason = document.querySelector<HTMLTextAreaElement>('#quest-reason')?.value;
    try {
      if (loadError && !['reload', 'export', 'reset', 'home'].includes(name ?? '')) throw new Error(loadError);
      if (name === 'home') { window.navigate('dashboard'); return; }
      else if (name === 'map') screen = 'map';
      else if (name === 'notebook') screen = 'notebook';
      else if (name === 'outline') { outlineId = element.dataset.id ?? ''; screen = 'outline'; }
      else if (name === 'open' || name === 'begin' || name === 'replay' || name === 'start-case' || name === 'review') {
        if (name === 'review') {
          const existing = progress.attempts.find(a => a.id === Number(element.dataset.attempt));
          if (!existing) throw new Error('This saved attempt is unavailable.');
          selectedAttemptId = existing.id;
        } else {
          const id = element.dataset.id ?? nextMission(progress)?.id ?? 'CH01-M14';
          const existing = latestAttempt(progress, id);
          if (name === 'replay' || name === 'start-case' || !existing) commit({type: 'begin', missionId: id, caseId: name === 'start-case' ? element.dataset.case : name === 'replay' ? existing?.caseId : undefined, now: new Date().toISOString()});
          selectedAttemptId = latestAttempt(progress, id)?.id ?? null;
        }
        selectedChoice = ''; selectedActivity = {}; pendingAnswer = -1; questionIndex = null; evidenceOpen = ''; screen = 'mission';
      } else if (name === 'inspect') { commit({type: 'inspect', evidenceId: element.dataset.id ?? ''}); evidenceOpen = element.dataset.id ?? ''; }
      else if (name === 'continue') commit({type: 'continue', from: currentAttempt()?.stage});
      else if (name === 'choose') selectedChoice = element.dataset.id ?? '';
      else if (name === 'decide') commit({type: 'decide', choice: selectedChoice, reasoning: reason ?? '', activity: selectedActivity});
      else if (name === 'select-answer') pendingAnswer = Number(element.dataset.index);
      else if (name === 'answer') {
        const a = currentAttempt()!; const m = missionFor(a); const index = questionIndex ?? a.responses.length;
        commit({type: 'answer', itemId: m.items[index]!.id, selected: pendingAnswer}); questionIndex = index; pendingAnswer = -1;
      } else if (name === 'next-item') { questionIndex = (questionIndex ?? Math.min(currentAttempt()!.responses.length - 1, 5)) + 1; pendingAnswer = -1; }
      else if (name === 'finish') commit({type: 'finish', now: new Date().toISOString()});
      else if (name === 'reload') { loaded = false; load(); }
      else if (name === 'export') { exportProgress(); return; }
      else if (name === 'reset') {
        if (!confirm('Reset only Quest preview progress and notebook attempts? Export first if you want to keep a copy. Your 28-day study and practice progress will stay.')) return;
        localStorage.removeItem(QUEST_KEY); progress = emptyProgress(); loaded = false; load(); selectedAttemptId = null; selectedActivity = {}; screen = 'map';
      }
      render();
      if (reason !== undefined && name !== 'decide') {
        const textarea = document.querySelector<HTMLTextAreaElement>('#quest-reason'); if (textarea) textarea.value = reason;
      }
      if (!['choose', 'select-answer', 'inspect'].includes(name ?? '')) {
        window.scrollTo(0, 0); document.getElementById('quest-heading')?.focus({preventScroll: true});
      } else {
        // Rendering replaces the clicked control; restore focus for keyboard/assistive input.
        document.querySelector<HTMLButtonElement>(`[data-quest-action="${name}"][${name === 'select-answer' ? 'data-index' : 'data-id'}="${name === 'select-answer' ? element.dataset.index : element.dataset.id}"]`)?.focus({preventScroll: true});
      }
    } catch (e) {
      error = e instanceof Error ? e.message : 'This checkpoint could not be saved. Retry before leaving.';
      if (/quota|storage|denied|security/i.test(error)) error = 'This checkpoint was not saved. Browser storage may be full or unavailable. Free space or enable storage, then retry before leaving.';
      render();
      const textarea = document.querySelector<HTMLTextAreaElement>('#quest-reason'); if (textarea && reason !== undefined) textarea.value = reason;
    }
  });
}
