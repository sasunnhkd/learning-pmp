# PMP28d / PMP Quest — Product roadmap

Version 1.1 · 15 November 2026 · Updated journey input preference

Build a mobile scenario game that helps PMP candidates practice evidence-based project decisions, receive explained feedback, and assess coverage through a complete learning course. The first release proves the full loop in Project Phoenix; later releases scale the curriculum and assessment experience.

This is a delivery plan and backlog derived from the six attached files. It does not make the curriculum complete, approve PMBOK/ECO mappings, or establish technical feasibility. Existing source files remain unchanged. The course's 105-hour estimate is learner seat time, not development effort. PMP28d is the project context; no 28-day learning or development commitment is inferred.

## Journey input rule

Written free-text responses, explanations and reflections are optional throughout the project journey. Structured choices and required practice answers satisfy response requirements. Leaving optional notes blank must not block submission, mission completion, scoring, rewards or progression. Notebook artifacts retain the selected response and evidence even when no note is entered.

This preference was explicitly requested by the product owner and supersedes any implication that narrative or artifact stories require typing. Evidence inspection and structured activity requirements still apply.

## Development implementation status — 15 November 2026

All 14 Phoenix mission briefs (S-46–S-59) now have playable development scenarios and 84 original practice items in the existing PWA. Written notes remain optional; structured activities supply the required responses. Launch Day has explicit full/phased/blocked evidence cases. This is implementation progress, not SME approval or completion of the R1 release gate. The checkpoint, diagnostic, content publication workflow and pilot validation remain pending.

## Product outcomes and measures

| Outcome | Proposed measure | Release decision |
|---|---|---|
| Candidates understand the core game | At least 4 of 5 pilot participants complete CH01-M01 without moderator rescue | Resolve blocking usability failures before expansion |
| Short sessions preserve learning | All committed-node interruption fixtures restore exactly one valid attempt state | Pilot gate |
| Feedback teaches defensible decisions | Every published decision and item has reviewed rationale and source mapping; gate bypasses never earn exam correctness | Every release |
| Candidates finish the intended curriculum | Completion shown for all 168 missions, 12 checkpoints and separate diagnostic/mocks | Full-course release |
| The team can sustain content production | Measure author/reviewer hours and rework per mission and per item during Phoenix | Reforecast after R1 |

No pass-probability, PMI endorsement, qualifying training-hours claim or exam-success guarantee is proposed. Learning impact can later be evaluated with distinct pre/post forms; the same repeated item is not evidence of independent improvement.

## Release roadmap

Forecast assumes 2-week sprints. Sprint 1 starts after team availability and decisions are agreed; there are no committed calendar dates. These are outcome windows, not allocation promises for every story. Each phase is releasable only when its gate passes.

| Release | Forecast | Learner outcome / scope | New content target | Exit gate |
|---|---|---|---|---|
| R0 — Decisions | Sprints 1–2 / weeks 1–4 | Platform, learning rules, data boundaries and assessment/reference decisions | Review input contracts and replace ambiguous seed semantics | S-31–S-34 decision records; source inventory accepted; implementation owners named |
| R1 — Phoenix pilot | Sprints 3–6 / weeks 5–12 | Guest learner completes CH01: briefing → evidence → decision → lesson → retrieval/debrief; interruption recovery, map, diagnostic and checkpoint | 14 missions; 84 practice + 15 check + 40 diagnostic = 139 items | All Phoenix paths terminate; content approved; 5-candidate study; performance and accessibility checks; no blocking defects |
| R2 — Foundational course | Sprints 7–10 / weeks 13–20 | CH02–CH04; diagnostic recommendations, spaced review, additional response format, account recovery and offline missions | 42 missions; 252 practice + 45 checks = 297 items | All 56 cumulative missions playable; synchronization conflicts and offline recovery verified; cumulative 436 unique items |
| R3 — Delivery challenges | Sprints 11–14 / weeks 21–28 | CH05–CH07: schedule, finance, leadership; calculation and resource activities reused with reviewed fixtures | 42 missions; 297 items | Cumulative 98 missions and 733 items approved; formulas, rounding and rubrics checked |
| R4 — Advanced practice | Sprints 15–18 / weeks 29–36 | CH08–CH10: quality, risk, agile; evidence gates and adapted interactions | 42 missions; 297 items | Cumulative 140 missions and 1,030 items; all new interaction fixtures pass |
| R5 — Capstone and mocks | Sprints 19–22 / weeks 37–44 | CH11–CH12, cross-project decisions and 2 full-length timed mocks | 28 missions; 168 practice + 30 checks + 360 mock = 558 items | 168 missions, 26 task targets, all 15 assessments and 1,588 unique items approved; mock margins met |
| R6 — General release | Sprints 23–24 / weeks 45–48 | Full course available on the agreed mobile platforms | No new curriculum quota | S-241 gate: complete manifest, journey regression, content audit, recovery, accessibility, performance, support readiness |

Prioritization: R0 resolves expensive uncertainty; R1 proves one complete chapter rather than releasing disconnected tools; R2 adds continuity across a broader course; R3–R5 reuse validated interactions while increasing content coverage. Multiplayer, social competition and monetization do not displace this learning loop.

## Capacity and forecast limits

Planning assumption: one stable squad with a PO, designer, 2 application engineers, QA, 2 scenario/item writers, a dedicated SME reviewer, and part-time platform support. Roles may be shared only after capacity is demonstrated. No team roster, budget, implementation repository or measured velocity was supplied.

Content production spans R1–R5: 20 sprints / 40 weeks. Average required throughput is 8.4 fully reviewed missions and 79.4 unique items per sprint (4.2 missions and 39.7 items per week), plus integration/rework. The 1,008 mission questions are included in the 1,588 item total. Narrative and question throughput are separate measures even when delivered in one mission story.

| Content window | Missions per sprint | New items per sprint | Forecast implication |
|---|---:|---:|---|
| R1 (4 sprints) | 3.5 | 34.75 | Establish actual authoring/review/rework rate |
| R2, R3, R4 (4 sprints each) | 10.5 | 74.25 | Expansion requires reusable templates and proven reviewer capacity |
| R5 (4 sprints) | 7.0 | 139.5 | Mock writing is the peak demand; start pack authoring during R3 once contracts stabilize |

Release tags indicate first availability, not the earliest time authoring can begin. R5 mock packs may be authored earlier; they still require R5 form assembly and release approval. Mission predecessor dependencies describe narrative/release integration and learner progression; writers can draft later missions in parallel using reviewed continuity briefs.

At the end of R1, forecast remaining content time as the maximum of remaining missions / accepted mission rate and remaining items / accepted item rate, using rates that include SME rework. Application delivery can also be the critical path. If the team cannot sustain the required R2 rate, reduce each release's chapter scope or extend the timeline before committing dates. Story sizes are relative hints, not days or a velocity assumption; technical implementation stories and content stories need separate throughput tracking.

## Scope and proposed decisions

The default product is an English-language mobile learning experience with a guest pilot, original scenario content, reviewable learning artifacts and separate timed assessments. Platform choice remains open in R0. No authoring GUI is required for the pilot: a validated file workflow and role-controlled review record can satisfy the publishing stories.

| ID | Proposed default | Confirmation owner / decision story |
|---|---|---|
| A-1 / Q-1 | Select native, cross-platform or mobile web based on a persistence/accessibility spike; pin baseline device/OS versions before estimates | Technical lead + PO / S-31 |
| A-2 | English first, single-player, guest storage for pilot; no payment or leaderboard | PO / R0 scope review |
| A-3 / Q-2 | Mission completion requires required steps and submission of 6 structured practice responses, not a score threshold. Written notes are optional. Next mission requires preceding mission completion. Next chapter also requires checkpoint submission; no pass threshold. Diagnostic may be skipped | PO + SME / S-32 |
| A-4 / Q-2 | Single-choice scores 1/0; multiple-response uses exact-set scoring; unanswered timed items score 0; no negative marking. Story outcomes are not exam item scores. Record first-attempt and retry results separately | SME / S-32 |
| A-5 | Review missed items next day, then after correct responses at 3- and 7-day intervals; incorrect review restarts the sequence. Mastery display is descriptive evidence, without a pass prediction | PO + learning designer / S-32 |
| A-6 / Q-3 | Downloaded missions can run offline after R2; timed assessments start only with trusted online time. Backgrounding does not pause the deadline; recovery uses that deadline | Technical lead / S-31, S-33 |
| A-7 / Q-3 | Optional product measurement; core progress data kept separate. Proposed learner deletion within 7 days. Market, retention, backup handling, consent and identity provider need a documented decision | Data/privacy owner / S-33 |
| A-8 / Q-4 | Single-choice in pilot; add multiple-response in R2. Do not promise exact official exam formats or breaks until reference review. Use licensed/authorized references and original question wording | SME + content owner / S-34 |
| A-9 | Azure DevOps Agile process; flat CSV with Feature tags. Area, iteration, assignees and calendar dates remain unset | PO / confirm before actual import |

These defaults make the proposal concrete; none is described as an approved source rule. Decisions can be changed without redoing source traceability.

## Product backlog structure

242 work items across 20 features: 168 mission stories, 15 assessment-form stories, 12 mock item-pack stories, 42 other product/interaction stories, 4 decision spikes and 1 pilot-validation enabler. The game and content are one outcome backlog, with separate production measures. All ordinary stories have 3–7 acceptance criteria including a negative case. Each mission has its exact original objective in AC1 and its specific artifact, mechanic, mappings and prerequisites in its story and traceability row.

stories.md is the authoritative narrative backlog; backlog-index.csv is the planning view; mission-traceability.csv and assessment-traceability.csv bridge back to source IDs. Dependencies are local S- IDs, not Azure DevOps database IDs. Priority 1 means required course scope; Priority 2 marks supporting experience. Release order provides the primary ordering within those priorities.

There are 89 distinct source mechanic labels. mechanic-register.csv proposes 12 reuse families including conditional conversations. A family mapping is an implementation candidate, not evidence that different mechanics are interchangeable. Every mechanic needs an explicit input/output contract, reviewed evaluation fixtures and an accessible alternative to dragging. Split a family story into additional adapters if those fixtures expose materially different behavior.

## Initial sprint planning

| Sprint | Proposed goal | Candidate scope / evidence |
|---|---|---|
| 1 | Remove platform and learning-rule uncertainty | S-31 platform spike; S-32 progression/scoring spike; S-1 explicitly marked development fixture if capacity allows |
| 2 | Establish trusted content and data boundaries | S-33 data decision; S-34 assessment/reference decision; refine S-2 import, S-3 graph and S-4 review against recorded outcomes |
| 3 | Produce the first reviewed mission | Integrate S-2–S-5 validation/publication; S-46 CH01-M01 content; S-1 full loop; scope chosen to observed capacity |
| 4–6 | Finish and validate Phoenix | Remaining CH01 content, required interaction families, 6-item practice, save/resume, 15-item check, 40-item diagnostic, accessibility/performance checks and S-242 pilot study |

The sprint examples are sequencing proposals, not commitments that all listed items fit. Pull only dependency-ready items within demonstrated capacity. Keep unfinished content draft and excluded from the active package.

## Release gates and shared Definition of Done

1. Source integrity: stable IDs, unique keys, valid references, no prerequisite cycles, all required task mappings and intended chapter ordering. All dialogue graphs have complete evidence references and reachable terminal outcomes.
2. Content correctness: an identified SME reviews objectives, decisions, calculations, rationales and source locators. The six seeds become full scenes; CH01-M13's undefined recommended_choice=0 becomes context-based outcome rules. A choice's gate status is separate from simulation rewards.
3. Learner behavior: story-specific acceptance criteria pass on the supported device matrix; loading, empty, unavailable, interruption and retry behavior preserve work; core controls support assistive input. Proposed targets: 200 percent text scaling, accessible non-drag alternatives, cached mission start p95 ≤2s and online pilot entry p95 ≤5s on the agreed network/device conditions.
4. Persistence and scoring: attempts pin content versions; committed outcomes apply once; prior attempts are not silently rescored; assessment item and domain/approach totals reconcile; no invented pass threshold or training-hours claim.
5. Operations: versioned manifest, withdrawal/correction procedure, incident evidence and support owner exist. Release has no unresolved blocker that prevents completing a required activity, loses acknowledged work, awards incorrect mandatory-gate correctness or exposes another learner's data.

## Definition of Ready and current blockers

Lint checks story structure; they do not certify feasibility. Only the four time-boxed decision spikes are ready for immediate planning without further product decisions. S-1 may be built as a disposable development fixture; production delivery still requires R0 decisions and approved content. All mission stories are refinement-ready content briefs, not finished scripts or tested mechanics.

| Blocker | Affected scope | Evidence / resolution |
|---|---|---|
| No chosen application platform, device matrix or existing implementation | Product runtime, storage, sync, performance and accessibility | Only curriculum supplied; S-31 must establish architecture and evidence |
| No approved completion/scoring/mastery rules | Course progression, rewards, assessments, debriefs | Source describes experience but omits thresholds; S-32 resolves proposed defaults |
| Unauthored content and unreviewed standards mappings | All 168 missions and all 1,588 items | 162 outline-only missions; 6 seed-linked drafts; all 15 assessment forms unauthored; S-34 plus review/publication workflow |
| Undefined Launch Day correctness and incomplete scene graphs | CH01-M13 and all six seeds | recommended_choice=0 and blank next_node; explicit evidence-conditioned branches required |
| No identity, retention, access or infrastructure evidence | Accounts, telemetry, deletion, offline/sync and timed persistence | S-33 decision; technical conformance must later be demonstrated |
| Unknown team throughput and content rights | Whole forecast and public release | Pilot measurements and S-34 reference-use decision before committing release dates |

constraint-check.md records a source-grounded pre-check with design risks and unknown implementation feasibility. This plan does not externally reverify the source package's PMI claims; all ECO/PMBOK mappings remain draft pending SME/reference validation.

## Scope excluded from this roadmap

Multiplayer, public leaderboards, chat, social feeds, monetization, payments, ads, live instructor services, AI-generated exam scoring, personalized pass predictions, certification issuance, additional languages, audio production and new curriculum beyond the supplied 12 chapters. No coding implementation, ADO project write, live user-data collection, publication or communication has been performed by creating these planning files.

## Source traceability

| Source | How used | Source maturity retained |
|---|---|---|
| pmp_quest_curriculum_spec.md | Experience loop, import/graph/version contracts, pacing and scope | Architecture draft, subject to SME review |
| pmp_quest_chapters.csv | 12 chapter titles, order, worlds and estimates | Curriculum mapped |
| pmp_quest_missions.csv | 168 individually traced content stories and required mechanics | 162 outline-only, 6 seed-linked drafts |
| pmp_quest_eco_coverage.csv | 26 task targets; primary/secondary counts reconciled to missions | All require SME validation |
| pmp_quest_ch1_script_seeds.csv | Six specific decision scenes and ambiguity/graph risks | Starter nodes, not full dialogue |
| pmp_quest_assessment_blueprint.csv | Exact 15 form sizes, durations and separate domain/approach counts | All unauthored |

## Learning coverage by release

The table below tracks primary-task mission coverage cumulatively. Secondary mappings remain in mission-traceability.csv. Counts demonstrate design coverage, not reviewed instruction, mastery or assessment validity. R1 intentionally does not cover every task.

| Task | Learning focus from source | R1 | R2 | R3 | R4 | R5 |
|---|---|---:|---:|---:|---:|---:|
| PEO01 | Shared purpose and project vision | 1 | 4 | 5 | 5 | 6 |
| PEO02 | Conflict diagnosis and resolution | 1 | 2 | 5 | 6 | 7 |
| PEO03 | Team leadership and empowerment | 0 | 1 | 5 | 8 | 10 |
| PEO04 | Stakeholder identification and engagement | 1 | 4 | 6 | 8 | 10 |
| PEO05 | Expectation alignment and mentoring | 0 | 4 | 5 | 5 | 5 |
| PEO06 | Customer and sponsor expectation management | 0 | 3 | 4 | 5 | 5 |
| PEO07 | Knowledge capture and transfer | 0 | 1 | 3 | 4 | 5 |
| PEO08 | Communication planning and feedback loops | 0 | 2 | 4 | 6 | 7 |
| PRO01 | Integrated planning and delivery approach | 1 | 3 | 4 | 5 | 7 |
| PRO02 | Scope definition and decomposition | 0 | 3 | 3 | 4 | 4 |
| PRO03 | Prioritizing and measuring realized value | 1 | 4 | 5 | 7 | 7 |
| PRO04 | Resource planning and optimization | 0 | 1 | 3 | 3 | 3 |
| PRO05 | Purchasing strategy and supplier management | 0 | 0 | 1 | 2 | 3 |
| PRO06 | Financial planning and controls | 1 | 1 | 7 | 8 | 10 |
| PRO07 | Quality planning and optimization | 1 | 2 | 2 | 7 | 8 |
| PRO08 | Schedule creation and adaptation | 1 | 2 | 5 | 6 | 7 |
| PRO09 | Status assessment and performance reporting | 1 | 4 | 8 | 11 | 12 |
| PRO10 | Closure and transition readiness | 1 | 3 | 4 | 6 | 8 |
| BUS01 | Project governance architecture | 0 | 2 | 2 | 3 | 5 |
| BUS02 | Compliance obligations and response | 1 | 2 | 3 | 5 | 7 |
| BUS03 | Controlled change evaluation and implementation | 1 | 2 | 3 | 5 | 6 |
| BUS04 | Issue and impediment resolution | 1 | 1 | 3 | 6 | 6 |
| BUS05 | Risk identification and responses | 1 | 1 | 3 | 8 | 10 |
| BUS06 | Continuous improvement and lessons learned | 0 | 1 | 1 | 2 | 2 |
| BUS07 | Supporting organization-wide change | 0 | 1 | 1 | 1 | 2 |
| BUS08 | External environment impact analysis | 0 | 2 | 3 | 4 | 6 |

## Release-to-story map

| Release | Work items | Backlog references |
|---|---:|---|
| R0 | 4 | S-31, S-32, S-33, S-34 |
| R1 | 47 | S-1, S-2, S-3, S-4, S-5, S-6, S-7, S-8, S-9, S-10, S-11, S-12, S-13, S-14, S-15, S-16, S-17, S-18, S-25, S-26, S-27, S-29, S-35, S-36, S-37, S-38, S-40, S-41, S-43, S-44, S-46, S-47, S-48, S-49, S-50, S-51, S-52, S-53, S-54, S-55, S-56, S-57, S-58, S-59, S-214, S-215, S-242 |
| R2 | 55 | S-19, S-21, S-22, S-23, S-24, S-28, S-30, S-39, S-42, S-45, S-60, S-61, S-62, S-63, S-64, S-65, S-66, S-67, S-68, S-69, S-70, S-71, S-72, S-73, S-74, S-75, S-76, S-77, S-78, S-79, S-80, S-81, S-82, S-83, S-84, S-85, S-86, S-87, S-88, S-89, S-90, S-91, S-92, S-93, S-94, S-95, S-96, S-97, S-98, S-99, S-100, S-101, S-216, S-217, S-218 |
| R3 | 45 | S-102, S-103, S-104, S-105, S-106, S-107, S-108, S-109, S-110, S-111, S-112, S-113, S-114, S-115, S-116, S-117, S-118, S-119, S-120, S-121, S-122, S-123, S-124, S-125, S-126, S-127, S-128, S-129, S-130, S-131, S-132, S-133, S-134, S-135, S-136, S-137, S-138, S-139, S-140, S-141, S-142, S-143, S-219, S-220, S-221 |
| R4 | 45 | S-144, S-145, S-146, S-147, S-148, S-149, S-150, S-151, S-152, S-153, S-154, S-155, S-156, S-157, S-158, S-159, S-160, S-161, S-162, S-163, S-164, S-165, S-166, S-167, S-168, S-169, S-170, S-171, S-172, S-173, S-174, S-175, S-176, S-177, S-178, S-179, S-180, S-181, S-182, S-183, S-184, S-185, S-222, S-223, S-224 |
| R5 | 45 | S-20, S-186, S-187, S-188, S-189, S-190, S-191, S-192, S-193, S-194, S-195, S-196, S-197, S-198, S-199, S-200, S-201, S-202, S-203, S-204, S-205, S-206, S-207, S-208, S-209, S-210, S-211, S-212, S-213, S-225, S-226, S-227, S-228, S-229, S-230, S-231, S-232, S-233, S-234, S-235, S-236, S-237, S-238, S-239, S-240 |
| R6 | 1 | S-241 |
