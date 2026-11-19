# PMP Quest development preview

This repository now implements the **14-mission Phoenix development journey** (S-46–S-59), with supporting learning-loop, journey, evidence, recovery and notebook behavior. All 84 mission practice items have development content. This is not an R1 release and no SME or product approval is implied. The roadmap and authoritative stories are retained alongside this document.

## Play

Run `npm run dev`, open the app, then choose **Explore PMP Quest**. Every Phoenix mission runs through briefing → inspect both evidence entries → complete any structured evidence exercise, select a project response and optionally add a written reflection → feedback → mini-lesson → six required retrieval responses → debrief. The recommended option is explained against the evidence and constraints. Low practice scores do not prevent preview completion. Every authored decision path reaches the debrief. Launch Day uses three explicit readiness cases; release conditions are separate from question scores and project consequences.

The journey displays all 12 chapters and 168 source missions in order. All 14 CH01 missions are playable in source order with predecessor completion enforced. Later chapters show their outlines and prerequisite explanations. The Phoenix chapter checkpoint remains required before later-chapter progression and has not been authored. The 15 assessment forms are not runnable because the source contains no authored items. The original study quizzes, practice pool and in-progress mock changes retain their own behavior.

## Journey input rule

Written free-text responses, explanations and reflections are optional throughout the project journey. Structured choices and required practice answers satisfy response requirements. Leaving optional notes blank must not block submission, mission completion, scoring, rewards or progression. Notebook artifacts retain the selected response and evidence even when no note is entered.

## Data and content boundaries

- Existing mobile web/PWA architecture is reused for this preview. R0's device matrix, platform conformance, learning rule approval, identity/privacy and reference/content decisions remain open.
- Source CSVs and the specification live in `data/quest/source/`. `npm run quest:import` validates them and regenerates `catalog.json` and the smaller browser-facing `map.json`; `npm run quest:validate` checks integrity and freshness without mutation. Add that check when changing curriculum data. BOM/CSV escaping are accepted; only the two designated mission array fields are split on semicolons.
- `src/quest/fixture.ts` is original, explicitly unreviewed development content based on CH01-M01. It retains its original two evidence entries, three comparison responses and six task-mapped retrieval items. `content.ts` adds 13 distinct authored scenarios and 78 additional original retrieval items; `model.ts` defines their shared contracts. It does not reuse arbitrary questions from the existing pool or treat seed choice numbers as approved answers. The raw seed graphs remain draft; runtime scenes are separately authored. Launch Day's ambiguous `recommended_choice=0` is replaced by full/phased/blocked evidence cases, never interpreted as an answer index.
- M01 retains `phoenix-fixture-1`; M02–M14 pin independent `phoenix-mNN-preview-1` versions. Readiness case IDs and submitted structured exercise values are retained per attempt. A learner-facing change requires a new version and retained old content before supporting old-version continuation. Current unsupported versions are preserved and shown as a recovery error with export/reset options; they are never silently rescored.
- Guest progress is stored in one atomic `pmp_quest_v1` localStorage record, independent of the original `pmp_data_v1` and `pmp_mock_v1` keys. Writes acknowledge a checkpoint only after succeeding. Duplicated answer/completion commands are idempotent. Every retry is a new attempt; earlier responses and artifacts stay intact.
- Save boundaries are evidence inspections, committed decision, mini-lesson advancement, submitted answers and completed debrief. Unsubmitted choices/explanations are not promised across reloads. The interface states this. The notebook exports the raw saved record and can reset only the preview. No telemetry, backend, sync, accounts or trusted timed assessment clock is introduced.

## Verification

`npm run typecheck`, `npm test`, `npm run quest:validate`, `npm run build`.

Quest tests exercise all 14 missions without written notes, all decision paths and readiness cases, structured activity validation, release gates independent of scores, old M01 compatibility, per-attempt targeting and retries, as well as source joins/counts, CSV parsing, invalid imports, prerequisite cycles, required evidence, skipped/invalid responses, each decision's terminal path, completion without a score threshold, separate retries, reload after every committed checkpoint, idempotency, storage failure and invalid-version preservation.

## Remaining roadmap work

R1 still needs SME review and approval of the authored 14 Phoenix scenarios and 84 mission items, plus authoring and approval of the 15 checkpoint and 40 diagnostic items (139 approved items total), published version manifests and reviewer records, complete scene graph contracts for the additional mechanics, checkpoint progression, the diagnostic, accessibility/device/performance conformance and the five-candidate pilot. R2–R6 (accounts, synchronization, broader content, review scheduling, offline packages and trusted-time assessments) are not implemented by this preview. No release-ready, training-hours, exam-success or PMI-endorsement claims are made.

See [PHOENIX.md](PHOENIX.md) for the interaction contracts, numeric fixtures, case rules and remaining simulation limits.
