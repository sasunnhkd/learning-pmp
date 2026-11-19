# PMP Quest — Import-Ready Curriculum Blueprint
**Version:** 1.0 curriculum mapping draft  
**Prepared:** 2026-11-14  
**Scope:** 12 chapters / 168 planned missions / 26 ECO task targets  
**Status:** Curriculum architecture only. Missions beyond the previously drafted Phoenix scenarios are **story hooks, not finished scripts**. PMBOK and ECO mappings require subject-matter review before release.
## What is inside
| File | Grain / use |
|---|---|
| `pmp_quest_missions.csv` | One row per mission (168); IDs, plot, objective, challenge, task mapping, delivery approach, mechanics, artifact, estimate, progress status. |
| `pmp_quest_chapters.csv` | One row per chapter (12); progression, plot, estimates, and story world. |
| `pmp_quest_eco_coverage.csv` | One row per exam task (26); domain, task number, internal paraphrase, mission coverage, reference page. |
| `pmp_quest_ch1_script_seeds.csv` | Six starter decision nodes based on existing Phoenix narrative drafts; not complete dialogue nodes. |
| `pmp_quest_assessment_blueprint.csv` | One row per planned diagnostic, chapter checkpoint, or mock exam (15); specifies item counts, time, and domain/approach targets. |

## Verified external facts versus proposed design
- PMI **PMP Exam Content Outline (July 2026)** is the exam assessment blueprint. Domain weights: **People 33%, Process 41%, Business Environment 26%**. The ECO contains **8 + 10 + 8 = 26 tasks**. Each domain task is a coverage requirement, not a fixed question count per task.
- PMI specifies **approximately 40% predictive** questions; the remaining 60% is adaptive/agile and hybrid combined. The exact breakdown between adaptive and hybrid is *not* prescribed.
- PMBOK® Guide **Eighth Edition (November 2025)** is a complementary body of knowledge, with **six principles and seven performance domains**. It is not the exam blueprint itself.
- Course structure, chapter names, mission count, timing, mechanics, and question targets are **original design assumptions**, not PMI requirements.
- Proposed primary-mission coverage: **Business Environment: 44 (26.2%), People: 55 (32.7%), Process: 69 (41.1%)**. This follows exam-domain percentages approximately but does not enforce exam form construction.
- Proposed mission contextual approaches: **adaptive: 51 (30.4%), hybrid: 50 (29.8%), predictive: 67 (39.9%)**. Assessment item-bank distribution should be verified separately.

## Curriculum pacing and question-bank scope
| Content | Units | Estimated time | Items targeted |
|---|---:|---:|---:|
| Guided missions | 168 × 30 minutes | 84 hours | 1,008 unique mission practice items (6 per mission) |
| Chapter checks | 12 × 20 minutes | 4 hours | 180 unique items (15 per chapter) |
| Diagnostic | 1 × 60 minutes | 1 hour | 40 unique items |
| Timed mock exams | 2 × 240 minutes | 8 hours | 360 unique items (180 per mock) |
| Suggested spaced review | Variable | 8 hours estimated | Reuses mastered items; not counted as unique |
| **Total estimated learner time** | | **105 hours** | **1,588 unique item slots** |

**Important:** These are authoring targets and seat-time estimates, not completed questions or a guarantee of qualifying training hours. Item-bank questions and exact interactive scripts remain to be authored and reviewed. PMI reports an exam of 180 questions in 240 minutes.

## Journey input update — 15 November 2026

Written free-text responses, explanations and reflections are optional throughout the project journey. Structured choices and required practice answers satisfy response requirements. Leaving optional notes blank must not block submission, mission completion, scoring, rewards or progression. Notebook artifacts retain the selected response and evidence even when no note is entered.

This product-owner preference supersedes any interpretation that story artifacts require typed prose.

## Player experience architecture
Each mission is intended to include: **story briefing (6 min) → evidence discovery (6 min) → decision / simulation (8 min) → mini-lesson (5 min) → retrieval questions and debrief (5 min)**. Smaller saveable chunks allow 5–8-minute mobile sessions.
Game mechanics should never make a noncompliant or unsafe action appear exam-correct just because it produces a high in-game reward. Choices can have mixed consequences; the debrief should distinguish decision quality from uncertain project outcomes.
Each chapter should contain a checkpoint assessment after the 14 missions. Two full-length mock exams and the diagnostic live in the separate assessment module rather than as ordinary story missions.

## Import contract
1. Decode CSV as **UTF-8 with BOM** (`utf-8-sig`); use the header as field keys. All mission and chapter IDs are stable ASCII identifiers.
2. `mission_id` is unique and should be the primary key. `chapter_id` joins `pmp_quest_chapters.csv`. `primary_eco_task_id` joins `pmp_quest_eco_coverage.csv`.
3. `secondary_eco_task_ids` and `pmbok8_principle_tags` are **semicolon-delimited** arrays; split on `;`. Do not split narrative fields on punctuation.
4. `prerequisite_mission_id` references another mission, blank for entry. `content_status` indicates authoring maturity, not readiness for learner release.
5. Numeric `estimated_minutes` and `practice_question_target` are integer design targets. `delivery_approach` enum: `predictive`, `adaptive`, `hybrid`. `eco_domain` enum: `People`, `Process`, `Business Environment`.
6. A production API should keep **mission metadata separate from dialogue nodes, choice variants, rules, localized strings, and assessment items**. The six seed nodes demonstrate the intended separation but are not the complete scene graph.
7. Build-time validations: foreign-key integrity, unique IDs, all 26 ECO task codes covered, complete required-evidence references, and reachable/terminating dialogue graphs once authored.
8. If learner-facing phrasing or expected answers change, version the item and its reference mapping; avoid silently modifying previously scored content.

## Scenario engine: proposed data model
```text
Mission: mission_id, chapter_id, learning_objective, primary_eco_task_id, ...
Scene: scene_id, mission_id, type, speaker_key, text_key, conditions, next_scene_id
Evidence: evidence_id, mission_id, content_key, unlock_condition
Choice: choice_id, scene_id, text_key, requires_evidence_ids, outcome_id
Outcome: outcome_id, simulation_deltas, story_flags, next_scene_id, debrief_key
AssessmentItem: item_id, mission_id, eco_task_ids, approach, format, answer_key, rationale, review_status
Progress: user_id, mission_id, mastery_score, attempts, checkpoints, updated_at
```
**Assessment blueprint:** The two 180-item mock exams use approximate 33% / 41% / 26% domain distributions (59 / 74 / 47 items). Chapter checks follow their individual chapter curricula rather than artificially mimicking a whole-exam distribution. No question wording is included in these files.
**Recommendation:** Make simulation deltas and story flags distinct. A high stakeholder score cannot override security clearance, contractual approval, or other mandatory gates. For adaptive delivery, allow backlog reprioritization within delegated authority; for changes affecting controlled external commitments, follow the relevant governance.

## Curriculum chapter overview
| Chapter | Fictional project | Story focus | Planned missions |
|---|---|---|---:|
| CH01 · Project Phoenix — Rescue the Launch | NovaTech analytics launch | Starting PM must rescue a threatened SaaS launch; original six episodes are expanded into fourteen teaching encounters. | 14 |
| CH02 · The New Initiative — From Idea to Value | Horizon student-services platform | At NovaTech Labs you evaluate whether a public-facing initiative deserves investment before implementation. | 14 |
| CH03 · The Stakeholder Maze — Building Public Trust | CivicLink municipal service platform | A regional citizen-services project requires diplomacy across agencies users and partners. | 14 |
| CH04 · The Delivery Blueprint — Designing the Work | Meridian community-health facility | A facility modernization tests scope decomposition resource coordination and robust planning. | 14 |
| CH05 · The Deadline Trap — Saving Atlas Logistics | Atlas warehouse network rollout | A multi-site operational rollout encounters schedule compression capacity limits and cross-project conflicts. | 14 |
| CH06 · The Budget Crisis — Aurora Energy | Aurora solar-plus-storage rollout | A renewable-energy investment needs careful financial governance procurement and benefit forecasting. | 14 |
| CH07 · The Team Challenge — Pulse Health | Pulse Health patient engagement app | A distributed health-technology team needs leadership conflict resolution and knowledge transfer. | 14 |
| CH08 · The Quality Breakdown — ShieldPay | ShieldPay regulated payment service | A payment integration faces test failures regulatory obligations and difficult release governance. | 14 |
| CH09 · The Risk Frontier — Arctic Supply | Arctic critical-medicine distribution | An extreme-weather logistics program forces dynamic risk governance and resilience planning. | 14 |
| CH10 · The Agile Transformation — NovaCloud | NovaCloud digital collaboration platform | A product group moves from rigid handoffs to adaptive delivery under frequent feedback. | 14 |
| CH11 · The Hybrid Enterprise — GreenGrid | GreenGrid intelligent energy management | A mixed infrastructure and software initiative tests sustainability responsible AI procurement and integrated governance. | 14 |
| CH12 · The Executive Portfolio — Final Capstone | Global Delivery Council multi-project investment | As portfolio delivery director the learner integrates leadership operations finance and value choices across three active projects. | 14 |

## Mission roadmap (one-line authoring briefs)

### CH01 — Project Phoenix — Rescue the Launch

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH01-M01` | The New Project Brief — Select a tailored hybrid delivery and governance model from project constraints | `PRO01` | hybrid |
| `CH01-M02` | Promises and Vision — Reconcile customer value and team objectives into a shared mission statement | `PEO01` | hybrid |
| `CH01-M03` | The Unexpected Request — Evaluate a late dashboard request through the agreed decision rights | `BUS03` | hybrid |
| `CH01-M04` | Sponsor Expectations — Map interested parties and tailor a sponsor conversation | `PEO04` | hybrid |
| `CH01-M05` | The Hidden Dependency — Calculate float and test schedule recovery options with vendor dependency | `PRO08` | predictive |
| `CH01-M06` | An Issue or a Risk? — Classify uncertainties and select risk owners and triggers | `BUS05` | hybrid |
| `CH01-M07` | The Team Fracture — Facilitate a conflict resolution using evidence and shared ground rules | `PEO02` | adaptive |
| `CH01-M08` | The Status Nobody Wants — Build an honest evidence-based project status update | `PRO09` | predictive |
| `CH01-M09` | The Vendor Warning — Resolve an actual impediment without confusing it with future risk | `BUS04` | hybrid |
| `CH01-M10` | The Procurement Choice — Compare spending decisions and implications for remaining contingency | `PRO06` | predictive |
| `CH01-M11` | The Quality Dilemma — Protect mandatory release criteria while evaluating phased options | `PRO07` | predictive |
| `CH01-M12` | The Security Gate — Verify compliance evidence before proposing deployment authorization | `BUS02` | adaptive |
| `CH01-M13` | Launch Day — Recommend a viable release strategy based on validated business value | `PRO03` | adaptive |
| `CH01-M14` | Phoenix Retrospective — Complete transition and capture actionable lessons learned | `PRO10` | adaptive |

### CH02 — The New Initiative — From Idea to Value

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH02-M01` | The Executive Pitch — Distinguish outputs and outcomes while constructing a value hypothesis | `PRO03` | hybrid |
| `CH02-M02` | Who Decides? — Define decision rights and escalation thresholds for a new initiative | `BUS01` | predictive |
| `CH02-M03` | A Vision That Unites — Compose a shared project vision across conflicting constituencies | `PEO01` | hybrid |
| `CH02-M04` | Hidden Stakeholders — Identify affected groups and classify interests and influence | `PEO04` | adaptive |
| `CH02-M05` | Choose How to Deliver — Tailor predictive adaptive or hybrid delivery to changing requirements | `PRO01` | hybrid |
| `CH02-M06` | The Rule Changes — Respond to an external policy update with a structured impact analysis | `BUS08` | predictive |
| `CH02-M07` | Access for Everyone — Translate compliance needs into verifiable acceptance conditions | `BUS02` | predictive |
| `CH02-M08` | A Tough Alignment Meeting — Negotiate measurable expectations for launch and adoption | `PEO05` | adaptive |
| `CH02-M09` | The Customer Promise — Balance service promises with realistic delivery outcomes | `PEO06` | adaptive |
| `CH02-M10` | Initial Scope Boundaries — Define included and excluded outcomes and decompose high-level work | `PRO02` | predictive |
| `CH02-M11` | A Business Case Check — Use evidence to reassess funding and value assumptions | `PRO09` | hybrid |
| `CH02-M12` | The Adoption Obstacle — Plan support for employee transition to a new service model | `PEO05` | adaptive |
| `CH02-M13` | Retrospective Inputs — Convert pilot observations into prioritized process improvements | `BUS06` | predictive |
| `CH02-M14` | The Investment Gate — Document the transition decision and close the discovery phase | `PRO10` | hybrid |

### CH03 — The Stakeholder Maze — Building Public Trust

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH03-M01` | The Missing Voice — Identify overlooked stakeholder groups before engagement begins | `PEO04` | hybrid |
| `CH03-M02` | Different Definitions of Success — Surface and negotiate incompatible stakeholder expectations | `PEO05` | hybrid |
| `CH03-M03` | The Public Promise — Evaluate and correct a misleading launch promise | `PEO06` | hybrid |
| `CH03-M04` | Choose the Message — Tailor communication channels to literacy access and stakeholder needs | `PEO08` | predictive |
| `CH03-M05` | The Agency Conflict — Investigate the root cause of interagency conflict | `PEO02` | adaptive |
| `CH03-M06` | Rebuild the Vision — Refresh a shared vision after priorities change | `PEO01` | hybrid |
| `CH03-M07` | The Knowledge Gap — Create an actionable knowledge-transfer process for regional teams | `PEO07` | predictive |
| `CH03-M08` | The Field Team — Choose an empowering leadership approach across distributed teams | `PEO03` | adaptive |
| `CH03-M09` | A Community Backlash — Support adaptation to organizational and citizen resistance | `BUS07` | adaptive |
| `CH03-M10` | Unexpected Legislation — Determine the effect of emerging external rules on project commitments | `BUS08` | adaptive |
| `CH03-M11` | Value Beyond Usage — Define outcomes and meaningful benefits beyond account registrations | `PRO03` | hybrid |
| `CH03-M12` | A Governance Exception — Align agency expectations while routing an exception through appropriate governance | `PEO05` | predictive |
| `CH03-M13` | The Difficult Conversation — Restore customer expectations through transparent follow-up | `PEO06` | adaptive |
| `CH03-M14` | Community Trust Scorecard — Interpret survey and service data before reporting project health | `PRO09` | predictive |

### CH04 — The Delivery Blueprint — Designing the Work

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH04-M01` | Blueprint Before Building — Integrate requirements constraints stakeholders and delivery plans | `PRO01` | predictive |
| `CH04-M02` | What Is Actually Included? — Translate ambiguous requirements into an agreed scope boundary | `PRO02` | predictive |
| `CH04-M03` | Break Down the Work — Create a deliverable-focused decomposition with coherent work packages | `PRO02` | predictive |
| `CH04-M04` | Staff and Specialists — Match specialist availability to work phases and constraints | `PRO04` | predictive |
| `CH04-M05` | The Permit Timeline — Sequence dependencies with realistic lead times and milestones | `PRO08` | predictive |
| `CH04-M06` | One Shared Objective — Align facilities and clinical groups on benefit outcomes | `PEO01` | hybrid |
| `CH04-M07` | Reporting the Plan — Select reporting channels and cadence for different audiences | `PEO08` | predictive |
| `CH04-M08` | The Progress Baseline — Define leading and lagging measures for execution | `PRO09` | predictive |
| `CH04-M09` | Approval Boundaries — Design a governance path with change authority and thresholds | `BUS01` | predictive |
| `CH04-M10` | Controlled Design Change — Evaluate a room-layout change and track approval impacts | `BUS03` | predictive |
| `CH04-M11` | Quality by Design — Embed inspections and acceptance criteria into delivery planning | `PRO07` | hybrid |
| `CH04-M12` | The Late Specialist — Engage a specialist stakeholder before freezing requirements | `PEO04` | adaptive |
| `CH04-M13` | The Benefits Trade-off — Prioritize deliverables against service outcomes and constraints | `PRO03` | adaptive |
| `CH04-M14` | Planning Phase Complete — Verify stage deliverables and authorize transition to execution | `PRO10` | predictive |

### CH05 — The Deadline Trap — Saving Atlas Logistics

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH05-M01` | The Impossible Date — Construct a schedule using durations dependencies and milestones | `PRO08` | predictive |
| `CH05-M02` | Find the Critical Path — Analyze path duration total float and schedule threats | `PRO08` | predictive |
| `CH05-M03` | Status Versus Reality — Reconcile reported progress against verified completion | `PRO09` | predictive |
| `CH05-M04` | Too Many Specialists — Resolve resource contention across parallel facilities | `PRO04` | predictive |
| `CH05-M05` | The Overtime Proposal — Protect team capacity and safety while managing schedule pressure | `PEO03` | adaptive |
| `CH05-M06` | Dispatch Disagreement — Resolve conflicting priorities between logistics and installers | `PEO02` | hybrid |
| `CH05-M07` | The Broken Conveyor — Triage an active site impediment and remove it effectively | `BUS04` | predictive |
| `CH05-M08` | Weather Window — Develop contingency actions for a weather-sensitive shipment | `BUS05` | hybrid |
| `CH05-M09` | Revise the Strategy — Tailor the delivery plan to credible recovery options | `PRO01` | predictive |
| `CH05-M10` | Cost of Catching Up — Evaluate acceleration costs against remaining budget and value | `PRO06` | predictive |
| `CH05-M11` | Estimate the Remaining Work — Update realistic forecasts without confusing baseline and current plan | `PRO08` | predictive |
| `CH05-M12` | The Daily Brief — Tailor factual communications during high schedule pressure | `PEO08` | hybrid |
| `CH05-M13` | The Surprise Resequence — Route a schedule-impacting scope or milestone change appropriately | `BUS03` | adaptive |
| `CH05-M14` | Go Live Readiness — Make a decision from cross-site evidence rather than optimistic summaries | `PRO09` | predictive |

### CH06 — The Budget Crisis — Aurora Energy

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH06-M01` | The Financial Baseline — Build an approved budget and define cost-control thresholds | `PRO06` | predictive |
| `CH06-M02` | Forecast Gone Wrong — Calculate variance and forecast remaining cost from project evidence | `PRO06` | predictive |
| `CH06-M03` | Contingency or Reserve? — Distinguish risk response contingency from unsupported spending | `BUS05` | predictive |
| `CH06-M04` | Vendor Bid Evaluation — Compare supplier offers using cost quality risk and contract fit | `PRO05` | predictive |
| `CH06-M05` | Cash Flow Crunch — Adjust funding and payment projections to match work timing | `PRO06` | predictive |
| `CH06-M06` | Market Shock — Assess the effect of exchange-rate and policy changes | `BUS08` | hybrid |
| `CH06-M07` | Investors and Communities — Create an engagement approach for communities and investors | `PEO04` | adaptive |
| `CH06-M08` | A Promise to Investors — Correct unsupported savings and environmental claims | `PEO06` | predictive |
| `CH06-M09` | Environmental Compliance — Validate sustainability and safety obligations in procurement | `BUS02` | predictive |
| `CH06-M10` | Value Over Lowest Price — Rank options using lifecycle value and sustainability outcomes | `PRO03` | hybrid |
| `CH06-M11` | Financial Transparency — Report cost pressure and assumptions without hiding variances | `PRO09` | predictive |
| `CH06-M12` | Choose a Recovery Option — Evaluate scope phasing versus additional authorized funding | `PRO06` | predictive |
| `CH06-M13` | Funding Approval Path — Use approval thresholds to authorize financing and scope changes | `PRO06` | hybrid |
| `CH06-M14` | Close the Funding Phase — Complete contractual and financial reconciliation for phase exit | `PRO10` | hybrid |

### CH07 — The Team Challenge — Pulse Health

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH07-M01` | Leading Without Command — Select a leadership style that gives specialists appropriate autonomy | `PEO03` | adaptive |
| `CH07-M02` | The Cultural Misread — Diagnose conflict across time zones and team norms | `PEO02` | adaptive |
| `CH07-M03` | Empower the Squad — Clarify decision boundaries and delegated responsibilities | `PEO03` | adaptive |
| `CH07-M04` | The Only Expert — Reduce single-person dependency through knowledge transfer | `PEO07` | adaptive |
| `CH07-M05` | Daily Signals — Set feedback loops that support transparency without micromanagement | `PEO08` | adaptive |
| `CH07-M06` | Sponsor and Team Alignment — Coach stakeholder expectations through a realistic delivery forecast | `PEO05` | hybrid |
| `CH07-M07` | Beyond the Feature List — Create a shared purpose around patient outcomes | `PEO01` | adaptive |
| `CH07-M08` | The Skeptical Clinician — Build trust through stakeholder discovery and adapted communication | `PEO04` | hybrid |
| `CH07-M09` | A Persistent Blocker — Remove organizational impediments while protecting team autonomy | `BUS04` | hybrid |
| `CH07-M10` | Capacity Without Burnout — Balance team capacity against realistic work commitments | `PRO04` | predictive |
| `CH07-M11` | The Mentor Decision — Coach a struggling contributor with a growth-centered response | `PEO03` | adaptive |
| `CH07-M12` | Conflict Returns — Facilitate an agreed resolution for an unresolved product disagreement | `PEO02` | predictive |
| `CH07-M13` | Knowledge for the Next Team — Develop a useful handover using teach-back and validation | `PEO07` | adaptive |
| `CH07-M14` | How Healthy Is the Team? — Interpret team and delivery signals without weaponizing metrics | `PRO09` | predictive |

### CH08 — The Quality Breakdown — ShieldPay

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH08-M01` | Quality Begins Upstream — Translate quality expectations into preventive practices and acceptance tests | `PRO07` | hybrid |
| `CH08-M02` | The Rework Spiral — Analyze prevention appraisal and failure costs | `PRO07` | predictive |
| `CH08-M03` | Regulatory Checkpoint — Verify security and financial regulatory requirements | `BUS02` | predictive |
| `CH08-M04` | Threat Register — Assess security and supplier risks and agree treatments | `BUS05` | hybrid |
| `CH08-M05` | Pressure on Engineering — Lead a team under quality and deadline stress | `PEO03` | adaptive |
| `CH08-M06` | What Does the Dashboard Hide? — Distinguish cosmetic green status from verifiable release evidence | `PRO09` | predictive |
| `CH08-M07` | The Late Interface Change — Submit a controlled interface change with verified impacts | `BUS03` | hybrid |
| `CH08-M08` | Root Cause Before Patch — Analyze recurring defect causes and prevent recurrence | `PRO07` | predictive |
| `CH08-M09` | The Blocking Defect — Coordinate triage and resolution of a confirmed issue | `BUS04` | adaptive |
| `CH08-M10` | Lessons Into Standards — Convert test learning into practical quality process improvements | `PRO07` | adaptive |
| `CH08-M11` | Explain the Delay — Communicate quality risks transparently to distinct audiences | `PEO08` | hybrid |
| `CH08-M12` | The Minimum Safe Release — Balance useful delivery scope against non-negotiable quality requirements | `PRO03` | adaptive |
| `CH08-M13` | Authorization to Launch — Use documented release decision rights and evidence | `BUS01` | predictive |
| `CH08-M14` | Transition Without Surprises — Validate operational readiness and conclude project obligations | `PRO10` | predictive |

### CH09 — The Risk Frontier — Arctic Supply

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH09-M01` | Scan the Horizon — Identify event and systemic threats across the delivery chain | `BUS05` | predictive |
| `CH09-M02` | Probability and Impact — Analyze risk exposure using sound assumptions and ranges | `BUS05` | predictive |
| `CH09-M03` | When a Risk Becomes an Issue — Reclassify an occurred disruption and coordinate issue response | `BUS04` | hybrid |
| `CH09-M04` | The Regulatory Shift — Evaluate changes in cross-border policy before altering plans | `BUS08` | predictive |
| `CH09-M05` | Partner Resilience — Evaluate contract and logistics dependencies for continuity | `PRO05` | predictive |
| `CH09-M06` | Response Strategies — Compare avoidance mitigation transfer acceptance and escalation in context | `BUS05` | hybrid |
| `CH09-M07` | Public Health Stakeholders — Engage recipients and agencies during uncertainty | `PEO04` | adaptive |
| `CH09-M08` | Cold-Chain Compliance — Set and test mandatory handling controls | `BUS02` | predictive |
| `CH09-M09` | Schedule Under Uncertainty — Construct a feasible alternate route and delivery forecast | `PRO08` | predictive |
| `CH09-M10` | Risk Reserve — Assess contingency needs and financial exposure | `PRO06` | hybrid |
| `CH09-M11` | The Worst-Case Brief — Communicate uncertainty and response triggers without false precision | `BUS05` | adaptive |
| `CH09-M12` | After-Action Review — Turn incident evidence into repeatable resilience improvements | `BUS06` | hybrid |
| `CH09-M13` | Inform the Network — Maintain transparent communications across high-stakes partners | `PEO08` | adaptive |
| `CH09-M14` | Next-Week Forecast — Update progress data and risk exposure for the next decision | `PRO09` | predictive |

### CH10 — The Agile Transformation — NovaCloud

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH10-M01` | The Way of Working — Explain when predictive adaptive or hybrid delivery is justified | `PRO01` | predictive |
| `CH10-M02` | A Team with Ownership — Set up a self-organizing team with clear accountabilities | `PEO03` | adaptive |
| `CH10-M03` | Value First Backlog — Prioritize work by customer outcomes learning and effort | `PRO03` | adaptive |
| `CH10-M04` | Boundaries and Stories — Refine requirements into testable user outcomes and acceptance | `PRO02` | adaptive |
| `CH10-M05` | Feedback with Customers — Engage users in iterative discovery and adaptation | `PEO04` | adaptive |
| `CH10-M06` | The Sprint Dispute — Resolve an iteration planning disagreement constructively | `PEO02` | adaptive |
| `CH10-M07` | Seeing Flow — Interpret throughput flow and work-in-progress signals | `PRO09` | hybrid |
| `CH10-M08` | Change Without Chaos — Distinguish backlog reprioritization from changes to controlled commitments | `BUS03` | adaptive |
| `CH10-M09` | Remove the Blocker — Help the team clear a dependency without taking over its work | `BUS04` | adaptive |
| `CH10-M10` | Continuous Learning — Create a knowledge-sharing habit and preserve key technical learning | `PEO07` | adaptive |
| `CH10-M11` | Definition of Done — Create robust quality criteria that support frequent delivery | `PRO07` | hybrid |
| `CH10-M12` | Expectation Reset — Communicate forecasts using uncertainty rather than false guarantees | `PEO06` | adaptive |
| `CH10-M13` | The Product Increment — Validate an increment handoff and clarify ongoing product operations | `PRO10` | hybrid |
| `CH10-M14` | Empowered Leadership — Coach the team to choose context-aware improvement experiments | `PEO03` | adaptive |

### CH11 — The Hybrid Enterprise — GreenGrid

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH11-M01` | Architecture of Hybrid Delivery — Partition work by appropriate development approach with clear integration points | `PRO01` | hybrid |
| `CH11-M02` | Portfolio Governance — Set controls decision rights and thresholds for mixed work streams | `BUS01` | hybrid |
| `CH11-M03` | Sustainability Requirements — Turn sustainability goals into measurable verified conditions | `BUS02` | predictive |
| `CH11-M04` | The Contract Maze — Select contracts and supplier oversight appropriate to uncertainty | `PRO05` | predictive |
| `CH11-M05` | The AI Forecast — Critically evaluate AI-generated forecasts given changing external conditions | `BUS08` | hybrid |
| `CH11-M06` | Stakeholder Trade-offs — Engage communities operators suppliers and executives around competing outcomes | `PEO04` | adaptive |
| `CH11-M07` | Lifecycle Economics — Compare options using lifecycle costs and opportunity assumptions | `PRO06` | hybrid |
| `CH11-M08` | Sustainable Quality — Design measurable durability and environmental quality checks | `PRO07` | hybrid |
| `CH11-M09` | Emerging System Risk — Assess model errors cyber risk and supplier concentration | `BUS05` | predictive |
| `CH11-M10` | An Empowered Hybrid Team — Coordinate authority across iterative and predictive teams without overcontrol | `PEO03` | adaptive |
| `CH11-M11` | Adoption Across Departments — Plan organization change and training for new operating methods | `BUS07` | adaptive |
| `CH11-M12` | A Change Across Streams — Route a cross-stream change to the correct approval forum | `BUS03` | predictive |
| `CH11-M13` | Speak With Evidence — Communicate AI and sustainability uncertainty honestly | `PEO08` | adaptive |
| `CH11-M14` | End-to-End Readiness — Confirm cross-stream transition to accountable operations teams | `PRO10` | hybrid |

### CH12 — The Executive Portfolio — Final Capstone

| Mission ID | Mission / gameplay encounter | ECO primary | Approach |
|---|---|---|---|
| `CH12-M01` | Three Projects One Strategy — Choose coherent delivery strategies for multiple projects under constraints | `PRO01` | hybrid |
| `CH12-M02` | Unify the Executive Vision — Align stakeholders around measurable outcomes across programs | `PEO01` | hybrid |
| `CH12-M03` | Decision Rights at Scale — Design governance and escalation across interdependent investments | `BUS01` | predictive |
| `CH12-M04` | The Stakeholder Alliance — Prioritize engagement for high-influence and high-impact groups | `PEO04` | adaptive |
| `CH12-M05` | The Market Disruption — Adjust investments in response to credible external shifts | `BUS08` | hybrid |
| `CH12-M06` | Capital Allocation — Recommend funding based on forecast value uncertainty and constraints | `PRO06` | predictive |
| `CH12-M07` | Conflict in the Council — Facilitate principled resolution between executive stakeholders | `PEO02` | adaptive |
| `CH12-M08` | Cross-Project Critical Path — Analyze dependencies and resource constraints across initiatives | `PRO08` | predictive |
| `CH12-M09` | Compound Risk — Assess correlated risks and avoid treating projects independently | `BUS05` | hybrid |
| `CH12-M10` | Culture During Crisis — Lead and empower multiple delivery teams through uncertainty | `PEO03` | adaptive |
| `CH12-M11` | Evidence Not Optimism — Build a defensible integrated performance and benefits report | `PRO09` | predictive |
| `CH12-M12` | Ethics and Compliance Gate — Identify mandatory constraints and authorize only defensible options | `BUS02` | adaptive |
| `CH12-M13` | Learning Across Projects — Transfer lessons into reusable methods and organizational memory | `PEO07` | hybrid |
| `CH12-M14` | The Final Board Decision — Recommend closure transition or recovery with accountability for value | `PRO10` | predictive |

## Full exam-task coverage checklist (paraphrased internal focus labels)
| ECO code | Domain / task | Internal focus label | Primary missions |
|---|---|---|---:|
| `PEO01` | People / task 1 | Shared purpose and project vision | 6 |
| `PEO02` | People / task 2 | Conflict diagnosis and resolution | 7 |
| `PEO03` | People / task 3 | Team leadership and empowerment | 10 |
| `PEO04` | People / task 4 | Stakeholder identification and engagement | 10 |
| `PEO05` | People / task 5 | Expectation alignment and mentoring | 5 |
| `PEO06` | People / task 6 | Customer and sponsor expectation management | 5 |
| `PEO07` | People / task 7 | Knowledge capture and transfer | 5 |
| `PEO08` | People / task 8 | Communication planning and feedback loops | 7 |
| `PRO01` | Process / task 1 | Integrated planning and delivery approach | 7 |
| `PRO02` | Process / task 2 | Scope definition and decomposition | 4 |
| `PRO03` | Process / task 3 | Prioritizing and measuring realized value | 7 |
| `PRO04` | Process / task 4 | Resource planning and optimization | 3 |
| `PRO05` | Process / task 5 | Purchasing strategy and supplier management | 3 |
| `PRO06` | Process / task 6 | Financial planning and controls | 10 |
| `PRO07` | Process / task 7 | Quality planning and optimization | 8 |
| `PRO08` | Process / task 8 | Schedule creation and adaptation | 7 |
| `PRO09` | Process / task 9 | Status assessment and performance reporting | 12 |
| `PRO10` | Process / task 10 | Closure and transition readiness | 8 |
| `BUS01` | Business Environment / task 1 | Project governance architecture | 5 |
| `BUS02` | Business Environment / task 2 | Compliance obligations and response | 7 |
| `BUS03` | Business Environment / task 3 | Controlled change evaluation and implementation | 6 |
| `BUS04` | Business Environment / task 4 | Issue and impediment resolution | 6 |
| `BUS05` | Business Environment / task 5 | Risk identification and responses | 10 |
| `BUS06` | Business Environment / task 6 | Continuous improvement and lessons learned | 2 |
| `BUS07` | Business Environment / task 7 | Supporting organization-wide change | 2 |
| `BUS08` | Business Environment / task 8 | External environment impact analysis | 6 |

## QA / approval gates
- **Curriculum SME:** verify each ECO task alignment and knowledge granularity; sample mission distractors and correctness across approaches.
- **PMBOK 8 SME:** validate domains, principles, tailoring assertions, and proprietary-guide section references against the licensed text (not merely the public TOC).
- **Assessment SME:** construct original items, make 2026 ECO-weighted practice sets, pilot-test wording and difficulty, validate rationales and accessibility.
- **Narrative designer:** expand outlines to precise dialogue, branching prerequisites, evidence unlocks, persistent effects and recovery states.
- **Engineering QA:** ensure progression/branch reachability, restart behavior, analytics, localization and deterministic save-state upgrades.
- **Regulatory / marketing review:** avoid implying PMI endorsement or that the course meets the 35 training-hours requirement unless eligibility and records are verified.

## Primary source references
- July 2026 PMI PMP Exam Content Outline: https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf
- PMI PMBOK 8 overview: https://www.pmi.org/standards/pmbok
- PMI PMBOK 8 public TOC: https://www.pmi.org/-/media/pmi/documents/public/pdf/publications/pmbok-guide-eighth-edition_table-of-contents.pdf

**Copyright note:** Content labels, missions, objectives, and scenarios are original/paraphrased. The ECO task codes map by official domain and task number. PMI source material is linked rather than reproduced in full. This curriculum is not issued, approved, or endorsed by PMI.
