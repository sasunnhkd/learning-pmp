# Phoenix development journey — v0.7.0

All 14 missions and 84 single-choice practice items are original development content, awaiting SME/reference validation. The source curriculum is retained as a draft; authored runtime content lives separately in `src/quest/content.ts`. M01's existing fixture and version remain unchanged. This implementation does not claim the R1 release gate has passed.

Every mission follows briefing → two inspected evidence entries → structured exercise where applicable → committed decision and feedback → mini-lesson → six retrieval responses → debrief. A response and all six questions are required, without a passing-score threshold. **Written notes are always optional.** A blank note cannot block submission, scores, progression, recovery or artifact retention.

| Mission | Artifact / interaction | Concrete evidence contract |
|---|---|---|
| M01 The New Project Brief | Delivery approach comparison / project charter | Stable integration, uncertain dashboards and explicit decision rights |
| M02 Promises and Vision | Shared-vision negotiation / vision canvas | Sponsor intent, customer outcomes and feasible acceptance conditions |
| M03 The Unexpected Request | Change response / change request | Local prioritization versus controlled scope, costs, dates and security impacts |
| M04 Sponsor Expectations | Stakeholder/communication selections / register | Sponsor decision needs, technical evidence needs and affected-user feedback |
| M05 The Hidden Dependency | Path, float and forecast selections / network | Path A 5+4+3=12 days; B 6+3=9; B float 3; delayed A 7+4+3=14 |
| M06 An Issue or a Risk? | Classification and trigger selections / risk register | Future vendor delay, current environment outage and an observable Wednesday trigger |
| M07 The Team Fracture | Facilitated conversation / team agreement | Direct diagnosis, respectful ground rules, mandatory versus adaptable testing |
| M08 The Status Nobody Wants | Completion and RAG selections / status report | 55/100 accepted, 80/100 started; forecast day 14 versus target 12; defined red threshold |
| M09 The Vendor Warning | Issue owner and status selections / issue log | Actual missed handoff, Alex accountable, vendor recovery and contractual review |
| M10 The Procurement Choice | Forecast and remaining-funds selections / cost forecast | $62k actual + $26k remaining = $88k; +$6k fee = $94k; $6k funding remains |
| M11 The Quality Dilemma | Release alternatives / quality checklist | Failed data boundary, unvalidated flag, required retest or validated isolation |
| M12 The Security Gate | Evidence coverage and approval selections / security pack | A UI control test does not cover API/worker paths or supply explicit authorization |
| M13 Launch Day | Evidence-conditioned recommendation / release case | Three separately version-pinned readiness cases below |
| M14 Phoenix Retrospective | Handover and improvement selections / closure record | Operational acceptance, deferred-work ownership and measurable follow-up |

## Structured activity contract

Activities use keyboard-accessible native selects with no default answer. Every required field must receive a valid option index before the decision can be committed. Answers, evidence IDs and the selected response are saved atomically. Incorrect selections receive criterion-level correction and rationale; they do not impose an invented completion threshold. Retrieval score is reported separately from the decision rubric and activity feedback. No typed calculation or prose is required.

The network and budget are explicit simplified fixtures, not a generic scheduling or financial simulation. Stakeholder mapping, issue ownership and handover use authored selections rather than free placement. Every option has an explained consequence; all decision branches terminate at the mission debrief.

## Launch Day cases

| Case | Full proposal | Phased proposal | Postpone |
|---|---|---|---|
| Full scope verified | Supported by full tests, security verification, sponsor authorization, value and operations | A smaller verified subset is within the supported boundary; deferral needs a value justification | Safe but delays accepted value without an evidenced unmet condition |
| Core-only phase verified (default) | Blocked: export correction and full authorization are missing | Supported only for validated, accepted, authorized core scope | Safe but delays the supported core value unless justified |
| Mandatory evidence missing | Blocked | Blocked: safe isolation and scoped authorization are missing | Defensible; name recovery owners, conditions and review date |

Gate status is derived from the attempt's pinned case and requested scope. Practice accuracy, stakeholder enthusiasm, optional notes and simulation consequences cannot override it. A supported recommendation is an outcome inside the fictional exercise, not a real deployment action. Finish an active case before starting another; completed cases and retries remain separately reviewable in the notebook.

## Continuity and storage

Mission completion unlocks its immediate successor regardless of retrieval accuracy. The 14-mission count uses unique completed mission IDs, so replay does not inflate progress. A completed predecessor stays completed while it is being retried. All commands target an attempt ID: opening an old notebook entry cannot redirect a later mission's answers. Each committed activity survives reload under its original mission version and case.

These are authored mission snapshots, not a cross-mission simulation of accumulated budgets or story flags. A later briefing explicitly provides updated exercise evidence; prior choices are kept as learning records and do not automatically establish safety or authorization in later missions. A future stateful simulation needs reviewed transition rules before changing that behavior.

The original `pmp_quest_v1` record remains compatible. Existing M01 attempts are loaded without new required fields, rescoring or migration. Unknown versions/cases and corrupt records are preserved with export/recovery options. Completing M14 marks the **story missions** complete; it does not award the checkpoint-dependent chapter badge or unlock CH02. Chapter checkpoint, diagnostic, reviewed publishing and the formal R1 pilot gate remain pending.

## Verification

`npm run typecheck`, `npm test`, `npm run build`. Tests cover all 14 no-typing journeys, all choice/case terminal paths, all 84 IDs and source mappings, every committed checkpoint, invalid selections, predecessors, independent retry history, old M01 compatibility, targeted commands, and release gates across all nine case/proposal combinations.

Browser verification completed every mission with no typed notes, confirmed all 14 completions after reload, reopened M05 from the notebook and verified that M13 rejects full scope in the core-only case. The browser run intentionally used mixed/wrong practice responses to verify completion has no score threshold.

## Chapter illustrations (v0.7.1)

The supplied PNG originals in `public/illu/` are preserved. `src/quest/art.ts` matches by subject rather than filename export order: CH02 student prototype (3), CH03 municipal map (1), CH04 health facility (4), CH05 warehouse sites (2), CH06 solar sites (7), CH07 team collaboration (5), CH08 payment flow (6), CH09 Arctic supply (8), CH10 workboard (9), CH11 hardware/software (11), CH12 portfolio resources (10). There is no dedicated Phoenix file in the supplied set, so CH01 deliberately shares collaboration artwork (5).

All 12 journey chapter headers, chapter outline banners and playable mission banners use this mapping. The journey hero uses the Phoenix artwork. Illustrations are decorative with empty alternative text; chapter names and objectives remain normal accessible text. Banner text occupies its own area, above the artwork on phones, with a fixed contrasting palette against the supplied cream image backgrounds in both themes.

The `public/illu/web/` display copies are WebP at 256px and 720px widths, encoded with `cwebp -q 82 -resize <width> 0`. Responsive image selection and lazy loading on chapter cards keep the full-resolution PNGs out of the display download. All 22 display variants total approximately 403 KiB versus 13.6 MiB of originals. Unknown chapter IDs simply omit decorative artwork.
