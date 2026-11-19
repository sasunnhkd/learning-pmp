<!-- PMP28d / PMP Quest. Proposed backlog v1; not an implementation or approved curriculum. -->

# Shared journey acceptance rule (15 November 2026)

Written free-text responses, explanations and reflections are optional throughout the project journey. Structured choices and required practice answers satisfy response requirements. Leaving optional notes blank must not block submission, mission completion, scoring, rewards or progression. Notebook artifacts retain the selected response and evidence even when no note is entered.

This user-requested rule applies to every mission and artifact story below, including future mechanics. A required response means the authored structured interaction, not a written explanation.

## Development implementation status — 15 November 2026

All 14 Phoenix mission briefs (S-46–S-59) now have playable development scenarios and 84 original practice items in the existing PWA. Written notes remain optional; structured activities supply the required responses. Launch Day has explicit full/phased/blocked evidence cases. This is implementation progress, not SME approval or completion of the R1 release gate. The checkpoint, diagnostic, content publication workflow and pilot validation remain pending.

# F-1: Playable learning loop
Goal: Deliver independently reviewable learner or content-publisher value.

## S-1: Complete the first Phoenix learning loop
Type: Story
As a: PMP candidate studying on a phone
I want: play CH01-M01 from briefing to debrief
So that: I can practice a project decision during one study session
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-1
Refs: C-1, C-2
Depends: none

### Acceptance criteria
- AC1: Given the CH01-M01 development fixture When I start the mission Then the project charter and hybrid-delivery objective are presented before the comparison challenge
- AC2: Given the fixture evidence and approved comparison rubric When I submit a delivery approach without typing an explanation Then the authored outcome and explanation connect my evidence to the governance decision
- AC3: Given a decision has been discussed When I finish the mini-lesson and 6 practice items Then a debrief shows answered items, rationales and one completed attempt
- AC4: Given no delivery proposal has been selected When I try to finish Then the missing response is identified and no completed attempt is recorded
- AC5: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Thinnest end-to-end development slice; use an explicitly marked test fixture until S-2/S-5 publication and CH01-M01 content approval exist. No authentication or full catalogue required.

## S-6: Find the next available mission
Type: Story
As a: PMP candidate studying on a phone
I want: see a chapter map with my next mission
So that: I can continue without choosing from 168 unexplained activities
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-1
Refs: C-1, C-6
Depends: S-1, S-5, S-31, S-32

### Acceptance criteria
- AC1: Given an active package and saved progress When I open the map Then chapters follow source order and each mission shows not started, in progress, complete or locked
- AC2: Given a prerequisite mission is incomplete When I request its successor Then the successor is locked and the prerequisite title is explained
- AC3: Given the preceding chapter mission 14 is complete When I open the next chapter Then mission 1 is available under the proposed progress rule
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- A-3 proposes checkpoint completion without a pass threshold as the additional next-chapter gate; checkpoint enforcement is S-17.

## S-7: Inspect required mission evidence
Type: Story
As a: PMP candidate studying on a phone
I want: open evidence before committing my decision
So that: I can support my response with project facts
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-1
Refs: C-4
Depends: S-1, S-3, S-31, S-32

### Acceptance criteria
- AC1: Given an unlocked mission When I inspect an evidence entry Then its authored content and evidence ID are available throughout the attempt
- AC2: Given a choice requires evidence I have not examined When I submit it Then the missing evidence is identified and the choice is not committed
- AC3: Given evidence fails to load When I retry Then the same entry is reopened without losing other inspected evidence
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-8: Follow a consequential conversation
Type: Story
As a: PMP candidate studying on a phone
I want: respond to an authored stakeholder conversation
So that: I can see how a decision changes the project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-1
Refs: C-2, C-4
Depends: S-7, S-3, S-31, S-32

### Acceptance criteria
- AC1: Given a scene with valid options When I choose a response Then the versioned rule selects the expected outcome and next scene
- AC2: Given a choice alters project metrics or story flags When the outcome is applied Then each authored delta and flag is applied exactly once
- AC3: Given an option is not eligible under current flags When I attempt to select it Then it remains blocked with the authored explanation
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-9: Respect a mandatory release gate
Type: Story
As a: PMP candidate studying on a phone
I want: see mandatory readiness evidence in a release decision
So that: I can distinguish an attractive outcome from an authorized decision
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-1
Refs: C-2, C-4
Depends: S-8, S-31, S-32

### Acceptance criteria
- AC1: Given missing mandatory security or approval evidence When I select full launch Then the outcome cannot record an authorized launch even if stakeholder metrics are high
- AC2: Given the authored phased-release conditions are satisfied When I select a phased launch Then only the authorized scope is marked releasable
- AC3: Given mandatory requirements are unmet When I postpone Then the debrief explains the unmet conditions without awarding exam correctness to a bypass
- AC4: Given all mandatory conditions are verified When I compare valid options Then the authored context determines rationale rather than a universally correct option number

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: CH01-M11-S01; CH01-M13-S01
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-11: Separate learning feedback from project outcomes
Type: Story
As a: PMP candidate studying on a phone
I want: see my decision rationale beside project consequences
So that: I can learn even when a sound decision has a difficult outcome
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-1
Refs: C-2, C-5
Depends: S-8, S-10, S-31, S-32

### Acceptance criteria
- AC1: Given a completed decision When I open the debrief Then decision quality, project metric changes and mandatory-gate status are separately labelled
- AC2: Given a context-dependent option When I review feedback Then the actual evidence and rule that justified the outcome are shown
- AC3: Given an attempt without approved rationale When I request scored completion Then scored completion is blocked and a content error is shown
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

# F-2: Content trust and publishing
Goal: Deliver independently reviewable learner or content-publisher value.

## S-2: Validate a curriculum import before activation
Type: Story
As a: Curriculum editor
I want: preview a curriculum import report
So that: I can reject broken content before learners encounter it
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-2
Refs: C-1, C-3
Depends: S-34

### Acceptance criteria
- AC1: Given the 6 supplied files When I validate the package Then UTF-8 BOM is accepted, stable IDs retained, and only designated array fields split on semicolons
- AC2: Given a missing chapter, task, or prerequisite reference When I validate Then the row, field and unresolved ID are reported and activation is blocked
- AC3: Given duplicate IDs or cyclic prerequisites When I validate Then all offending IDs are reported without changing the active package
- AC4: Given a successful validation When I review the report Then counts of chapters, missions, seeds, assessments and covered tasks match the package manifest

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: All six input files
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-3: Validate a playable scene graph
Type: Story
As a: Scenario author
I want: preview a mission branch graph
So that: I can find broken learner journeys before publication
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-2
Refs: C-2, C-4
Depends: S-2

### Acceptance criteria
- AC1: Given a complete authored mission When I validate its graph Then every reachable path reaches a terminal debrief or an explicitly bounded retry
- AC2: Given a dangling edge, unreachable required node or missing evidence reference When I validate Then publication is blocked with the relevant node and reference IDs
- AC3: Given a starter seed with blank next_node or recommended_choice 0 When I validate Then it remains draft until explicit outcome rules and terminal paths replace the ambiguity
- AC4: Given simulation deltas and mandatory gate flags When I evaluate a graph Then they are stored separately and gate checks cannot be overridden by a high score

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_ch1_script_seeds.csv; curriculum spec: Scenario engine
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-4: Approve an educational content version
Type: Story
As a: PMP subject-matter reviewer
I want: review an educational content version
So that: I can prevent unsupported teaching or answers from reaching learners
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-2
Refs: C-2, C-5
Depends: S-2, S-34

### Acceptance criteria
- AC1: Given a submitted version When I review it Then objective, ECO mapping, PMBOK mapping, rationale, source locator and author identity are visible
- AC2: Given a reviewer approves every required check When I record approval Then reviewer identity, date, version and decision are retained
- AC3: Given missing references or a rejected answer rationale When an editor requests release Then the version remains unpublished and the rejection reason is shown
- AC4: Given a learner-facing answer or phrasing changes When a new version is submitted Then previous approvals are invalidated for that version and old attempts retain their original version

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-5: Publish a reviewed content package
Type: Story
As a: Content publisher
I want: activate a validated package
So that: learners receive one consistent approved curriculum
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-2
Refs: C-4, C-5
Depends: S-3, S-4, S-34

### Acceptance criteria
- AC1: Given all required versions are approved and graph validation passes When I publish Then a package manifest pins mission, node, evidence, rule and item versions
- AC2: Given a mission includes draft or unapproved content When I publish Then activation is denied and the previous manifest remains active
- AC3: Given an attempt is already in progress When a new manifest is activated Then that attempt stays pinned to its starting versions
- AC4: Given the same activation request is retried When it is accepted again Then only one active manifest transition is recorded

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-24: Withdraw an incorrect published item
Type: Story
As a: Content publisher
I want: retire a flawed content version
So that: I can stop new exposure while preserving audit history
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R2; F-2
Refs: C-5
Depends: S-5

### Acceptance criteria
- AC1: Given a published error is confirmed When I withdraw the version Then new attempts cannot start that version and affected IDs are listed
- AC2: Given an attempt was scored on the withdrawn version When I inspect it Then the original score remains with a correction notice and optional approved reattempt
- AC3: Given a prior manifest contains withdrawn content When I request rollback Then activation is denied until a fully approved manifest is available

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

# F-3: Progress and study support
Goal: Deliver independently reviewable learner or content-publisher value.

## S-12: Resume a mission after interruption
Type: Story
As a: PMP candidate studying on a phone
I want: continue from my last committed activity
So that: I can study in 5–8 minute sessions
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-3
Refs: C-4, C-5, C-8
Depends: S-8, S-10, S-31, S-32

### Acceptance criteria
- AC1: Given a committed choice or response When the app is closed and reopened Then the same version, node, evidence, flags and answer state are restored
- AC2: Given a write is interrupted When I restart Then the last acknowledged checkpoint is restored without a partial outcome
- AC3: Given a completed choice is delivered twice When progress is saved Then no duplicate delta or completion is recorded
- AC4: Given a cached mission When I move between 5–8 minute chunks Then the interface identifies a safe stop after each committed node

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-13: Keep a mission artifact in my notebook
Type: Story
As a: PMP candidate studying on a phone
I want: reopen the artifact I created
So that: I can review how my reasoning evolved
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-3
Refs: C-5
Depends: S-12, S-31, S-32

### Acceptance criteria
- AC1: Given an artifact response is submitted When I finish the activity Then its mission ID, version, attempt and saved response are retained
- AC2: Given a later retry creates a revision When I open my notebook Then both attempts can be distinguished
- AC3: Given an unfinished artifact When I open the notebook Then it is labelled draft and never displayed as an approved project document
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

- AC5: Given a submitted structured choice with no written note When I open the notebook Then the selected response and evidence are retained and the missing optional note does not mark the artifact incomplete

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-14: Review learning coverage without a pass prediction
Type: Story
As a: PMP candidate studying on a phone
I want: inspect my learning progress
So that: I can find gaps in my preparation
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-3
Refs: C-3, C-5, C-7
Depends: S-12, S-31, S-32

### Acceptance criteria
- AC1: Given versioned completed responses When I open progress Then chapter completion and first-attempt task accuracy show counts and denominators
- AC2: Given an item maps to multiple tasks When coverage is calculated Then each task uses unique item IDs and repeated retries do not inflate the first-attempt count
- AC3: Given a task has no responses When I view it Then it shows no evidence rather than 0 percent ability or an exam pass prediction
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-15: Earn completion rewards once
Type: Story
As a: PMP candidate studying on a phone
I want: receive a chapter badge for completing its learning activities
So that: I can recognize sustained study progress
Priority: 2
Size: 2
Value area: Business
Tags: pmp-quest; R1; F-3
Refs: C-2, C-6
Depends: S-14, S-31, S-32

### Acceptance criteria
- AC1: Given all 14 missions and the checkpoint are completed When the chapter closes Then one completion badge is awarded
- AC2: Given I replay a completed mission When completion is recorded again Then no duplicate badge or first-completion reward is awarded
- AC3: Given a mandatory gate was bypassed in a simulation When rewards are calculated Then the bypass is never labelled an exam-correct decision

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- No streak penalties, purchasable correctness, lives or energy limits are proposed.

## S-19: Revisit missed concepts in spaced review
Type: Story
As a: PMP candidate studying on a phone
I want: receive a review queue from my missed items
So that: I can revisit weak concepts between missions
Priority: 2
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-3
Refs: C-5
Depends: S-14, S-31, S-32

### Acceptance criteria
- AC1: Given a missed reviewed item When I finish an attempt Then the item enters a review queue due the next day
- AC2: Given a correct review response When the queue is recalculated Then next reviews are due after 3 then 7 days under A-5
- AC3: Given a retired or corrected item When the queue is opened Then it is replaced only by an approved version and prior scores are unchanged
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- A-5 proposed schedule; 8 hours is an aggregate learner estimate, not a required queue duration.

## S-22: Continue a downloaded mission offline
Type: Story
As a: PMP candidate studying on a phone
I want: play a reviewed downloaded mission without a connection
So that: I can study when mobile connectivity drops
Priority: 2
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-3
Refs: C-5, C-8
Depends: S-12, S-31, S-32

### Acceptance criteria
- AC1: Given a complete mission package is downloaded When connectivity is lost Then evidence, decisions and practice remain available with local checkpoints
- AC2: Given a package is incomplete When I attempt offline entry Then the missing download is explained and progress is not reset
- AC3: Given connectivity returns When queued results synchronize Then the same attempt events are accepted once and the sync status is shown
- AC4: Given a timed assessment requires trusted online time under A-6 When I request offline entry Then entry is blocked without starting a timer

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-23: Recover progress on another device
Type: Story
As a: PMP candidate studying on a phone
I want: restore my saved course progress
So that: I can change phones without restarting the course
Priority: 2
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-3
Refs: C-5, C-8
Depends: S-12, S-31, S-32, S-33

### Acceptance criteria
- AC1: Given a verified learner account When I sign in on a second device Then acknowledged progress is restored for that account
- AC2: Given the same attempt is modified on 2 devices When both synchronize Then a version conflict is shown and neither branch silently overwrites the other
- AC3: Given another learner signs in When progress is requested Then only that learner account data is returned
- AC4: Given guest progress exists When I link the account Then I confirm an explicit merge preview before existing progress changes
- AC5: Given account authentication fails When I request synchronized progress Then access is denied and the existing local attempt is retained

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Q-1 decides identity provider and supported platforms; guest local storage is the pilot default.

# F-4: Assessments and feedback
Goal: Deliver independently reviewable learner or content-publisher value.

## S-10: Answer mission retrieval questions
Type: Story
As a: PMP candidate studying on a phone
I want: answer 6 practice items after a mission
So that: I can check what I understood before moving on
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-4
Refs: C-5, C-7
Depends: S-1, S-4, S-32

### Acceptance criteria
- AC1: Given 6 reviewed items for the mission When I begin practice Then each unique item is presented once with its supported response format
- AC2: Given a submitted response When I request feedback Then correctness, rationale and reference mapping are shown after that response
- AC3: Given a blank required response When I submit Then the item stays unanswered and does not receive an invented score
- AC4: Given a completed set When I revisit the summary Then first-attempt results and later practice attempts remain separate
- AC5: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-16: Complete a timed assessment attempt
Type: Story
As a: PMP candidate studying on a phone
I want: take an assessment against its configured time limit
So that: I can practice retrieval under a consistent clock
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-4
Refs: C-7, C-8
Depends: S-10, S-12, S-32

### Acceptance criteria
- AC1: Given a validated assessment form When I start Then the form ID, item versions and deadline are fixed for the attempt
- AC2: Given the deadline is reached When time is evaluated Then the attempt is submitted once and unanswered items count as incorrect under A-4
- AC3: Given the app is backgrounded or reopened When I resume Then elapsed time continues against the persisted deadline
- AC4: Given the item response has been saved When I move to another item Then the saved response is retained and solutions stay hidden until submission
- AC5: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-17: Use a checkpoint to finish a chapter
Type: Story
As a: PMP candidate studying on a phone
I want: take the 15-item checkpoint after mission 14
So that: I can review the chapter before advancing
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-4
Refs: C-6, C-7
Depends: S-16, S-6, S-32

### Acceptance criteria
- AC1: Given the 14 chapter missions are completed When I start its checkpoint Then 15 unique items are offered for 20 minutes using that chapter blueprint
- AC2: Given the checkpoint is submitted When results are available Then score, rationales and review recommendations are shown and next-chapter eligibility is recalculated
- AC3: Given a chapter mission is incomplete When I request the checkpoint Then entry is denied with the remaining mission IDs
- AC4: Given a low checkpoint score When I finish Then review is suggested without an invented PMI pass threshold

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-18: Use a diagnostic to choose review topics
Type: Story
As a: PMP candidate studying on a phone
I want: take the course diagnostic
So that: I can see where to focus my study
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-4
Refs: C-7
Depends: S-16, S-14, S-32

### Acceptance criteria
- AC1: Given a reviewed diagnostic form When I start Then 40 items are offered for 60 minutes with source target counts 13/16/11 by domain and 16/12/12 by approach
- AC2: Given the attempt is submitted When I review results Then recommendations link to mapped tasks and available missions
- AC3: Given I skip the diagnostic When I start Chapter 1 Then access remains available and no readiness score is inferred

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: DIAG-001
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-20: Sit a full-length mock exam
Type: Story
As a: PMP candidate studying on a phone
I want: take a complete timed mock with question review
So that: I can rehearse a long assessment session
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-4
Refs: C-7
Depends: S-16, S-14, S-32

### Acceptance criteria
- AC1: Given MOCK-01 or MOCK-02 is published When I start Then 180 distinct items are loaded for 240 minutes with domain counts 59/74/47 and approach counts 72/54/54
- AC2: Given an active attempt When I flag an item for review Then the flag is retained and I can navigate to flagged unanswered items before submitting
- AC3: Given a required quota cannot be met When I start Then the form is unavailable with an explanation and no shorter mock is silently substituted
- AC4: Given the attempt is submitted When I review Then domain accuracy and rationales are shown with a non-certifying preparation disclaimer

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Break placement and format fidelity remain Q-4; this is a timed practice product, not a claim of exact exam replication.

## S-21: Answer a reviewed multiple-response item
Type: Story
As a: PMP candidate studying on a phone
I want: select more than one answer where an item requires it
So that: I can practice questions beyond single choice
Priority: 2
Size: 3
Value area: Business
Tags: pmp-quest; R2; F-4
Refs: C-5, C-7
Depends: S-10, S-32

### Acceptance criteria
- AC1: Given a multiple-response item with an explicit selection count When I answer Then the selected count is validated and exact-set scoring follows A-4
- AC2: Given the selected option count differs from the required count When I submit Then the required count is shown and the response is not accepted
- AC3: Given a choice order is shuffled When the item is scored Then stable answer IDs retain the same answer key

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- MVP supports single-choice; no other format is assumed authored in the inputs.

# F-5: Reusable simulation interactions
Goal: Deliver independently reviewable learner or content-publisher value.

## S-35: Compare constrained options
Type: Story
As a: PMP candidate studying on a phone
I want: compare options against explicit project criteria
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then a ranked option records selected criteria and the authored trade-off explanation
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: approach_comparison, plan_comparison, portfolio_board, value_board, value_canvas, value_tradeoff, vendor_comparison

## S-36: Calculate a dependency network
Type: Story
As a: PMP candidate studying on a phone
I want: analyze a task dependency network
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then authored durations yield the expected paths, float and recovery explanation
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: critical_path_puzzle, network_portfolio, schedule_network

## S-37: Calculate a financial trade-off
Type: Story
As a: PMP candidate studying on a phone
I want: test a financial option against supplied project data
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then inputs, units, rounding and computed result match the approved worked example
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: budget_builder, budget_calculation, budget_tradeoff, cashflow_sim, cost_quality, evm_calculation, forecast_puzzle, lifecycle_calculation, portfolio_budget

## S-38: Build a stakeholder or responsibility map
Type: Story
As a: PMP candidate studying on a phone
I want: assign a project entity to its authored category
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then the saved assignment is compared against the context-specific rubric
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: governance_decision, governance_design, role_matrix, stakeholder_map

## S-39: Arrange a scope or backlog artifact
Type: Story
As a: PMP candidate studying on a phone
I want: arrange a project work artifact
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then the saved hierarchy or order is evaluated against authored dependencies and value criteria
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: backlog_puzzle, plan_builder, scope_builder, story_refinement, wbs_puzzle

## S-40: Classify an uncertainty or active issue
Type: Story
As a: PMP candidate studying on a phone
I want: classify a project uncertainty
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then the category, owner, trigger or response is recorded and explained
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: impediment_board, issue_board, portfolio_risk, risk_allocation, risk_board, risk_identification, risk_issue_sort, risk_matrix, risk_response_game, risk_triage

## S-41: Reconcile a project metric
Type: Story
As a: PMP candidate studying on a phone
I want: interpret reported performance against evidence
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then the selected evidence and corrected interpretation are saved with the authored explanation
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: benefits_dashboard, board_dashboard, dashboard_reconciliation, decision_dashboard, evidence_dashboard, flow_metrics, metric_builder, status_reconciliation, team_metrics

## S-42: Allocate constrained capacity
Type: Story
As a: PMP candidate studying on a phone
I want: allocate available capacity across competing work
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then the allocation is evaluated against capacity limits and delivery consequences
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: capacity_planner, resource_allocation

## S-43: Verify a requirement with evidence
Type: Story
As a: PMP candidate studying on a phone
I want: verify a project requirement against evidence
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then each finding retains evidence IDs and identifies unsupported claims
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: ai_evidence_review, closure_check, compliance_gate, compliance_review, external_scan, quality_gate, quality_plan, quality_tradeoff, readiness_board, release_gate, root_cause_investigation, stage_gate, sustainability_review

## S-44: Create an actionable improvement
Type: Story
As a: PMP candidate studying on a phone
I want: turn a lesson into a named follow-up action
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then the action has an owner, trigger or date and observable success condition
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: handover_puzzle, improvement_board, knowledge_transfer, retrospective_sort, transition_puzzle

## S-45: Compose a context-specific communication
Type: Story
As a: PMP candidate studying on a phone
I want: choose a message for its intended audience
So that: I can practice a project-management action rather than only read a scenario
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-5
Refs: C-2, C-4
Depends: S-7, S-8, S-31

### Acceptance criteria
- AC1: Given a reviewed fixture and its evidence When I submit a response Then audience, evidence, channel and feedback choice are saved with rationale
- AC2: Given a required input is missing or outside authored limits When I submit Then the response is rejected with the field or constraint identified
- AC3: Given the same fixture and response are replayed When evaluation runs Then the authored result is reproduced without duplicate effects
- AC4: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Candidate reuse family. Each label needs an explicit authored input/output contract and conformance fixture; visual and behavioral equivalence are not presumed. Labels: communication_decision, communications_planner, message_builder, risk_communication

# F-6: Release quality and operations
Goal: Deliver independently reviewable learner or content-publisher value.

## S-25: Inspect learning funnel events
Type: Story
As a: Product owner
I want: see consented aggregate activity counts
So that: I can identify where the pilot loses learners
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-6
Refs: C-5
Depends: S-12, S-31, S-33

### Acceptance criteria
- AC1: Given a learner opted into product measurement When an activity starts or finishes Then a deduplicated event records package, mission, step, timestamp and pseudonymous attempt ID
- AC2: Given measurement is declined When I play Then optional measurement events are not transmitted and gameplay remains available
- AC3: Given a report is prepared When I view aggregates Then starts, completions and abandonment are calculated with published denominators
- AC4: Given a narrative free-text answer is entered When events are transmitted Then the answer text and direct identity fields are excluded

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Retention and reporting access require Q-3; proposed optional measurement is distinct from progress storage.

## S-26: Complete the pilot using assistive input
Type: Story
As a: PMP candidate studying on a phone
I want: use the core learning loop with assistive technology
So that: I can study without relying on small text or drag gestures
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-6
Refs: C-8
Depends: S-1, S-31

### Acceptance criteria
- AC1: Given the pilot flow on the agreed device matrix When I use screen reader or keyboard/switch navigation Then briefing, evidence, choices, practice and debrief have named controls and logical focus order
- AC2: Given text is enlarged to 200 percent When I complete a mission Then no required content or action is clipped
- AC3: Given a board supports dragging When I use an alternative input Then select-then-place produces the same authored result
- AC4: Given an invalid response is shown When I use assistive input Then the error is announced and focus reaches the correction

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Proposed acceptance targets; implementation must be tested after Q-1 selects platform.

## S-27: Open a mission within the mobile performance budget
Type: Story
As a: PMP candidate studying on a phone
I want: start a cached mission without a long wait
So that: I can use a short study break for learning
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-6
Refs: C-8
Depends: S-1, S-31

### Acceptance criteria
- AC1: Given the Q-1 baseline phone and a cached package When I start a mission in 30 measured runs Then p95 time to interactive is at most 2 seconds
- AC2: Given a 10 Mbps connection with 150 ms latency When I load the pilot entry in 30 measured runs Then p95 time to interactive is at most 5 seconds
- AC3: Given a request fails or exceeds 10 seconds When I am waiting Then retry is offered without a duplicate attempt

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Proposed budgets, subject to device decision; no benchmark evidence exists yet.

## S-28: Remove a learner progress record
Type: Story
As a: PMP candidate studying on a phone
I want: delete my stored learner data
So that: I can control the persistence of my learning history
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R2; F-6
Refs: C-5
Depends: S-23, S-31, S-33

### Acceptance criteria
- AC1: Given a verified deletion request When I confirm it Then account-linked progress and optional measurement identifiers are removed within 7 days under A-7
- AC2: Given a request is unverified When deletion is requested Then it is denied without disclosing another learner record
- AC3: Given guest mode on the device When I confirm local reset Then saved guest attempts and cached personal artifacts are removed with a clear confirmation preview

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Proposed product behavior, not a legal compliance determination. Q-3 covers jurisdiction, backups and retention.

## S-29: Detect a blocked learning path
Type: Story
As a: Support operator
I want: inspect release health for learning failures
So that: I can correct defects that prevent course completion
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-6
Refs: C-4, C-5
Depends: S-5, S-12, S-31, S-33

### Acceptance criteria
- AC1: Given a published version produces an unhandled graph or scoring error When the error is recorded Then the mission, node, version and error class appear without raw learner answers
- AC2: Given 5 identical blocking errors occur within 15 minutes When the health rule evaluates Then one deduplicated operator alert is created
- AC3: Given a previously failing fixture is replayed When it completes Then the report links the successful version without erasing the incident history

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Alert destination is an implementation decision; this plan sends no messages.

## S-30: Report a questionable explanation
Type: Story
As a: PMP candidate studying on a phone
I want: flag an item with a reason
So that: I can help the course team correct confusing content
Priority: 2
Size: 2
Value area: Business
Tags: pmp-quest; R2; F-6
Refs: C-5
Depends: S-10, S-12, S-31

### Acceptance criteria
- AC1: Given a rationale is displayed When I flag it Then the report records item/version/attempt IDs plus an optional comment
- AC2: Given the report is submitted twice When it is saved Then one report per learner, version and reason is retained
- AC3: Given no connection exists When I submit Then a pending state retains the report for retry without changing my score

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-241: Access the complete reviewed course
Type: Story
As a: PMP candidate
I want: study the complete released curriculum
So that: I can prepare across the full intended course coverage
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R6; F-6
Refs: C-1, C-2, C-3, C-7, C-8
Depends: S-213, S-26, S-27, S-29, S-214, S-215, S-216, S-217, S-218, S-219, S-220, S-221, S-222, S-223, S-224, S-225, S-226, S-233, S-240, S-31

### Acceptance criteria
- AC1: Given the release candidate When the PO reviews its manifest Then 12 chapters, 168 playable missions, 1008 mission items, 180 checkpoint items, 40 diagnostic items and 360 mock items are approved and present
- AC2: Given any required mission, item, reference or assessment margin is missing When release is requested Then the full-course release is blocked with a gap report
- AC3: Given the 26 task targets and all source mechanic labels When release conformance runs Then every target has released coverage and each mechanic has a passing reviewed fixture
- AC4: Given a release candidate When the end-to-end learner journey is verified Then entry, progress, checkpoints, mocks, recovery and correction paths pass the agreed device and accessibility matrix

### Notes
- Release: R6. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

## S-242: Validate the pilot study flow
Type: Enabler
As a: Product owner
I want: observe 5 target candidates attempting the pilot
So that: the PO can revise the interaction before expanding content
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R1; F-6
Refs: C-8
Depends: S-1, S-26, S-59, S-215, S-31

### Acceptance criteria
- AC1: Given 5 recruited PMP candidates using the agreed device matrix When the pilot study is run Then at least 4 complete the first mission without moderator rescue and each evidence-to-decision failure is recorded
- AC2: Given a blocking usability defect When the study ends Then the defect receives an owner and retest plan before the expansion decision
- AC3: Given the 14 mission pilot is produced When the review ends Then actual authoring, SME review and rework hours per mission and per question are recorded for roadmap recalibration

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Apply shared Definition of Done and the release gate in roadmap.md.

# F-7: Discovery decisions
Goal: Deliver independently reviewable learner or content-publisher value.

## S-31: Decide the pilot platform
Type: Spike
As a: Product owner
I want: resolve the decision before delivery commitments
So that: the team can estimate affected work against a recorded decision
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R0; F-7
Refs: C-8
Depends: none
Question: Which mobile delivery platform and baseline devices support the pilot within the available team skills?
Timebox: 3d

### Acceptance criteria
- AC1: Given the supplied curriculum and delivery options When the 3-day investigation ends Then a decision record compares native, cross-platform and mobile web options, names supported OS/browser versions, and demonstrates local checkpoint persistence
- AC2: Given evidence is missing When the investigation ends Then unknowns, owner and a follow-up check are recorded rather than an unsupported approval
- AC3: Given a default is recommended When the PO reviews it Then affected story IDs and acceptance changes are enumerated

### Notes
- Release: R0. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Which mobile delivery platform and baseline devices support the pilot within the available team skills?

## S-32: Approve learning and progression rules
Type: Spike
As a: Product owner
I want: resolve the decision before delivery commitments
So that: the team can estimate affected work against a recorded decision
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R0; F-7
Refs: C-8
Depends: none
Question: Which rubric, retry policy and checkpoint eligibility rule should govern course progress?
Timebox: 3d

### Acceptance criteria
- AC1: Given the supplied curriculum and delivery options When the 3-day investigation ends Then a signed rule table defines scoring, first versus repeat attempts, gate precedence, badge conditions and next-chapter access with 6 worked examples including CH01-M13
- AC2: Given evidence is missing When the investigation ends Then unknowns, owner and a follow-up check are recorded rather than an unsupported approval
- AC3: Given a default is recommended When the PO reviews it Then affected story IDs and acceptance changes are enumerated

### Notes
- Release: R0. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Which rubric, retry policy and checkpoint eligibility rule should govern course progress?

## S-33: Set data and identity boundaries
Type: Spike
As a: Product owner
I want: resolve the decision before delivery commitments
So that: the team can estimate affected work against a recorded decision
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R0; F-7
Refs: C-8
Depends: none
Question: Which identity, consent, retention and deletion approach fits the intended audience and launch market?
Timebox: 3d

### Acceptance criteria
- AC1: Given the supplied curriculum and delivery options When the 3-day investigation ends Then a reviewed data inventory names every stored field, owner, retention period, deletion behavior, account provider decision and access boundary
- AC2: Given evidence is missing When the investigation ends Then unknowns, owner and a follow-up check are recorded rather than an unsupported approval
- AC3: Given a default is recommended When the PO reviews it Then affected story IDs and acceptance changes are enumerated

### Notes
- Release: R0. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Which identity, consent, retention and deletion approach fits the intended audience and launch market?

## S-34: Confirm assessment fidelity and content rights
Type: Spike
As a: Product owner
I want: resolve the decision before delivery commitments
So that: the team can estimate affected work against a recorded decision
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R0; F-7
Refs: C-8
Depends: none
Question: Which reference edition, permitted source use, response formats and timing behavior must the course support?
Timebox: 3d

### Acceptance criteria
- AC1: Given the supplied curriculum and delivery options When the 3-day investigation ends Then an SME decision records permitted references and locators, supported item formats, review roles and mock break/timing rules without claiming official certification
- AC2: Given evidence is missing When the investigation ends Then unknowns, owner and a follow-up check are recorded rather than an unsupported approval
- AC3: Given a default is recommended When the PO reviews it Then affected story IDs and acceptance changes are enumerated

### Notes
- Release: R0. Proposed estimate only; team must estimate after the listed decisions.
- Source: Product proposal derived from the curriculum experience; not an existing source requirement.
- Which reference edition, permitted source use, response formats and timing behavior must the course support?

# F-11: CH01 — Project Phoenix — Rescue the Launch
Goal: Deliver independently reviewable learner or content-publisher value.

## S-46: Play CH01-M01 — The New Project Brief
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M01 scenario challenge
So that: I can apply PRO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M01 briefing in NovaTech analytics launch When I begin Then NovaTech appoints you to rescue Phoenix six weeks before launch; the objective is to select a tailored hybrid delivery and governance model from project constraints
- AC2: Given the authored project charter evidence When I use approach_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted project charter response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M01; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-47: Play CH01-M02 — Promises and Vision
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M02 scenario challenge
So that: I can apply PEO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-46, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M02 briefing in NovaTech analytics launch When I begin Then Maya and Priya disagree about what launch success means; the objective is to reconcile customer value and team objectives into a shared mission statement
- AC2: Given the authored vision canvas evidence When I use dialogue_negotiation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted vision canvas response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M02; pmp_quest_eco_coverage.csv:PEO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-48: Play CH01-M03 — The Unexpected Request
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M03 scenario challenge
So that: I can apply BUS03 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-47, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M03 briefing in NovaTech analytics launch When I begin Then A strategic customer demands functionality outside the approved release; the objective is to evaluate a late dashboard request through the agreed decision rights
- AC2: Given the authored change request evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted change request response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M03; pmp_quest_eco_coverage.csv:BUS03; pmp_quest_ch1_script_seeds.csv:CH01-M03-S01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: script_draft_exists_needs_structuring. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / accountable_leadership;value. Seed CH01-M03-S01: Northstar wants a live dashboard before launch; can you promise it? Candidate choices: promise now || assess impact and seek approval || reject without analysis. Author every branch and next node; the supplied seed is not executable.

## S-49: Play CH01-M04 — Sponsor Expectations
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M04 scenario challenge
So that: I can apply PEO04 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-48, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M04 briefing in NovaTech analytics launch When I begin Then Maya expects a promise while Engineering needs evidence; the objective is to map interested parties and tailor a sponsor conversation
- AC2: Given the authored stakeholder register evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted stakeholder register response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M04; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-50: Play CH01-M05 — The Hidden Dependency
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M05 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-36, S-49, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M05 briefing in NovaTech analytics launch When I begin Then Authentication delivery threatens integration testing; the objective is to calculate float and test schedule recovery options with vendor dependency
- AC2: Given the authored dependency network evidence When I use schedule_network Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted dependency network response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M05; pmp_quest_eco_coverage.csv:PRO08; pmp_quest_ch1_script_seeds.csv:CH01-M05-S01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: script_draft_exists_needs_structuring. Mechanic family: network. PMBOK mapping awaiting SME: Schedule / holistic_view;value. Seed CH01-M05-S01: The authentication package may arrive late; is the launch on the critical path? Candidate choices: add engineers immediately || analyze float and recovery options || wait for confirmed slip. Author every branch and next node; the supplied seed is not executable.

## S-51: Play CH01-M06 — An Issue or a Risk?
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M06 scenario challenge
So that: I can apply BUS05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-50, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M06 briefing in NovaTech analytics launch When I begin Then Vendor dates are uncertain and team forecasts diverge; the objective is to classify uncertainties and select risk owners and triggers
- AC2: Given the authored risk register evidence When I use risk_triage Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted risk register response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M06; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-52: Play CH01-M07 — The Team Fracture
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M07 scenario challenge
So that: I can apply PEO02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-51, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M07 briefing in NovaTech analytics launch When I begin Then Engineering and QA argue over testing shortcuts; the objective is to facilitate a conflict resolution using evidence and shared ground rules
- AC2: Given the authored team agreement evidence When I use conversation_branch Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted team agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M07; pmp_quest_eco_coverage.csv:PEO02; pmp_quest_ch1_script_seeds.csv:CH01-M07-S01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: script_draft_exists_needs_structuring. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. Seed CH01-M07-S01: Engineering wants to reduce critical test coverage. We cannot accept that risk. Candidate choices: take engineering side || facilitate a fact-based discussion || escalate every disagreement. Author every branch and next node; the supplied seed is not executable.

## S-53: Play CH01-M08 — The Status Nobody Wants
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M08 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-52, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M08 briefing in NovaTech analytics launch When I begin Then Leadership asks for an unambiguous RAG status; the objective is to build an honest evidence-based project status update
- AC2: Given the authored status report evidence When I use dashboard_reconciliation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted status report response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M08; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-54: Play CH01-M09 — The Vendor Warning
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M09 scenario challenge
So that: I can apply BUS04 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-53, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M09 briefing in NovaTech analytics launch When I begin Then An integration package misses a committed handoff; the objective is to resolve an actual impediment without confusing it with future risk
- AC2: Given the authored issue log evidence When I use impediment_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted issue log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M09; pmp_quest_eco_coverage.csv:BUS04; pmp_quest_ch1_script_seeds.csv:CH01-M09-S01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: script_draft_exists_needs_structuring. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / empowered_culture;holistic_view. Seed CH01-M09-S01: The vendor missed a handoff and no mitigation owner is listed. Candidate choices: ignore until next week || assign issue owner and coordinate recovery || secretly replace vendor. Author every branch and next node; the supplied seed is not executable.

## S-55: Play CH01-M10 — The Procurement Choice
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M10 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-54, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M10 briefing in NovaTech analytics launch When I begin Then A proposed acceleration fee competes with test budget; the objective is to compare spending decisions and implications for remaining contingency
- AC2: Given the authored cost forecast evidence When I use budget_tradeoff Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cost forecast response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M10; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-56: Play CH01-M11 — The Quality Dilemma
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M11 scenario challenge
So that: I can apply PRO07 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-55, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M11 briefing in NovaTech analytics launch When I begin Then QA finds potential cross-customer data exposure; the objective is to protect mandatory release criteria while evaluating phased options
- AC2: Given the authored quality checklist evidence When I use release_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quality checklist response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M11; pmp_quest_eco_coverage.csv:PRO07; pmp_quest_ch1_script_seeds.csv:CH01-M11-S01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: script_draft_exists_needs_structuring. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. Seed CH01-M11-S01: We detected possible cross-customer export exposure during security testing. Candidate choices: ship and patch || verify correction/isolation and seek release authorization || silently remove the feature. Author every branch and next node; the supplied seed is not executable.

## S-57: Play CH01-M12 — The Security Gate
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M12 scenario challenge
So that: I can apply BUS02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-56, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M12 briefing in NovaTech analytics launch When I begin Then A feature flag may isolate but has not yet been validated; the objective is to verify compliance evidence before proposing deployment authorization
- AC2: Given the authored security evidence pack evidence When I use compliance_review Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted security evidence pack response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M12; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-58: Play CH01-M13 — Launch Day
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M13 scenario challenge
So that: I can apply PRO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-57, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M13 briefing in NovaTech analytics launch When I begin Then The steering committee demands a launch decision; the objective is to recommend a viable release strategy based on validated business value
- AC2: Given the authored value and release case evidence When I use executive_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted value and release case response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M13; pmp_quest_eco_coverage.csv:PRO03; pmp_quest_ch1_script_seeds.csv:CH01-M13-S01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: script_draft_exists_needs_structuring. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / value;holistic_view. Seed CH01-M13-S01: Given verified scope, costs, risk and security evidence, what launch strategy do you recommend? Candidate choices: full launch only if verified || phased authorized release if safe || postpone if mandatory requirements unmet. Author every branch and next node; the supplied seed is not executable. recommended_choice=0 has no defined sentinel contract. Replace with evidence-conditioned full launch / phased authorized release / postponement rules; no universal correct choice.

## S-59: Play CH01-M14 — Phoenix Retrospective
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH01-M14 scenario challenge
So that: I can apply PRO10 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-11; CH01-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-58, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-M14 briefing in NovaTech analytics launch When I begin Then The outcome creates obligations for operations and customer support; the objective is to complete transition and capture actionable lessons learned
- AC2: Given the authored closure handover evidence When I use retrospective_sort Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted closure handover response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH01-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-12: CH02 — The New Initiative — From Idea to Value
Goal: Deliver independently reviewable learner or content-publisher value.

## S-60: Play CH02-M01 — The Executive Pitch
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M01 scenario challenge
So that: I can apply PRO03 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-59, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M01 briefing in Horizon student-services platform When I begin Then A sponsor promotes a platform without defining success; the objective is to distinguish outputs and outcomes while constructing a value hypothesis
- AC2: Given the authored benefits hypothesis evidence When I use value_canvas Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted benefits hypothesis response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M01; pmp_quest_eco_coverage.csv:PRO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Scope / value;holistic_view. 

## S-61: Play CH02-M02 — Who Decides?
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M02 scenario challenge
So that: I can apply BUS01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-60, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M02 briefing in Horizon student-services platform When I begin Then Three executive groups compete for approvals; the objective is to define decision rights and escalation thresholds for a new initiative
- AC2: Given the authored decision-rights matrix evidence When I use governance_design Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted decision-rights matrix response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M02; pmp_quest_eco_coverage.csv:BUS01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Governance / accountable_leadership;holistic_view. 

## S-62: Play CH02-M03 — A Vision That Unites
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M03 scenario challenge
So that: I can apply PEO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-61, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M03 briefing in Horizon student-services platform When I begin Then Customer services and finance want different outcomes; the objective is to compose a shared project vision across conflicting constituencies
- AC2: Given the authored project vision evidence When I use vision_workshop Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted project vision response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M03; pmp_quest_eco_coverage.csv:PEO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-63: Play CH02-M04 — Hidden Stakeholders
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M04 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-62, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M04 briefing in Horizon student-services platform When I begin Then Accessibility advocates were omitted from discovery; the objective is to identify affected groups and classify interests and influence
- AC2: Given the authored stakeholder inventory evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted stakeholder inventory response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M04; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-64: Play CH02-M05 — Choose How to Deliver
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M05 scenario challenge
So that: I can apply PRO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-63, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M05 briefing in Horizon student-services platform When I begin Then The product vision is stable but integration unknowns remain; the objective is to tailor predictive adaptive or hybrid delivery to changing requirements
- AC2: Given the authored tailoring rationale evidence When I use approach_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted tailoring rationale response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M05; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-65: Play CH02-M06 — The Rule Changes
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M06 scenario challenge
So that: I can apply BUS08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-64, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M06 briefing in Horizon student-services platform When I begin Then A new digital accessibility rule alters expectations; the objective is to respond to an external policy update with a structured impact analysis
- AC2: Given the authored impact assessment evidence When I use external_scan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted impact assessment response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M06; pmp_quest_eco_coverage.csv:BUS08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Risk / sustainability;holistic_view. 

## S-66: Play CH02-M07 — Access for Everyone
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M07 scenario challenge
So that: I can apply BUS02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-65, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M07 briefing in Horizon student-services platform When I begin Then A proposed shortcut may exclude screen-reader users; the objective is to translate compliance needs into verifiable acceptance conditions
- AC2: Given the authored compliance matrix evidence When I use compliance_review Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted compliance matrix response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M07; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-67: Play CH02-M08 — A Tough Alignment Meeting
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M08 scenario challenge
So that: I can apply PEO05 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-66, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M08 briefing in Horizon student-services platform When I begin Then Stakeholders disagree about service speed and reach; the objective is to negotiate measurable expectations for launch and adoption
- AC2: Given the authored alignment record evidence When I use dialogue_negotiation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted alignment record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M08; pmp_quest_eco_coverage.csv:PEO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / empowered_culture;value. 

## S-68: Play CH02-M09 — The Customer Promise
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M09 scenario challenge
So that: I can apply PEO06 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-67, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M09 briefing in Horizon student-services platform When I begin Then Marketing publishes a launch claim not approved by delivery; the objective is to balance service promises with realistic delivery outcomes
- AC2: Given the authored customer promise log evidence When I use expectation_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted customer promise log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M09; pmp_quest_eco_coverage.csv:PEO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-69: Play CH02-M10 — Initial Scope Boundaries
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M10 scenario challenge
So that: I can apply PRO02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-39, S-68, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M10 briefing in Horizon student-services platform When I begin Then The sponsor adds loosely defined adjacent initiatives; the objective is to define included and excluded outcomes and decompose high-level work
- AC2: Given the authored scope statement evidence When I use scope_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted scope statement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M10; pmp_quest_eco_coverage.csv:PRO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: ordering. PMBOK mapping awaiting SME: Scope / holistic_view;value. 

## S-70: Play CH02-M11 — A Business Case Check
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M11 scenario challenge
So that: I can apply PRO09 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-69, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M11 briefing in Horizon student-services platform When I begin Then Early research challenges the uptake forecast; the objective is to use evidence to reassess funding and value assumptions
- AC2: Given the authored value forecast evidence When I use decision_dashboard Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted value forecast response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M11; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-71: Play CH02-M12 — The Adoption Obstacle
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M12 scenario challenge
So that: I can apply PEO05 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-70, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M12 briefing in Horizon student-services platform When I begin Then Frontline staff worry that automation replaces their roles; the objective is to plan support for employee transition to a new service model
- AC2: Given the authored adoption plan evidence When I use change_adoption Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted adoption plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M12; pmp_quest_eco_coverage.csv:PEO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / empowered_culture;value. 

## S-72: Play CH02-M13 — Retrospective Inputs
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M13 scenario challenge
So that: I can apply BUS06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-71, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M13 briefing in Horizon student-services platform When I begin Then Pilot participants describe unmet needs; the objective is to convert pilot observations into prioritized process improvements
- AC2: Given the authored improvement backlog evidence When I use retrospective_sort Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted improvement backlog response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M13; pmp_quest_eco_coverage.csv:BUS06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / quality;empowered_culture. 

## S-73: Play CH02-M14 — The Investment Gate
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH02-M14 scenario challenge
So that: I can apply PRO10 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-12; CH02-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-72, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-M14 briefing in Horizon student-services platform When I begin Then Executives decide whether to fund delivery; the objective is to document the transition decision and close the discovery phase
- AC2: Given the authored phase closure record evidence When I use stage_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted phase closure record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH02-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-13: CH03 — The Stakeholder Maze — Building Public Trust
Goal: Deliver independently reviewable learner or content-publisher value.

## S-74: Play CH03-M01 — The Missing Voice
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M01 scenario challenge
So that: I can apply PEO04 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-73, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M01 briefing in CivicLink municipal service platform When I begin Then Rural residents report being excluded from planning; the objective is to identify overlooked stakeholder groups before engagement begins
- AC2: Given the authored stakeholder register evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted stakeholder register response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M01; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-75: Play CH03-M02 — Different Definitions of Success
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M02 scenario challenge
So that: I can apply PEO05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-74, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M02 briefing in CivicLink municipal service platform When I begin Then Local agencies demand different service targets; the objective is to surface and negotiate incompatible stakeholder expectations
- AC2: Given the authored expectation map evidence When I use facilitated_workshop Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted expectation map response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M02; pmp_quest_eco_coverage.csv:PEO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / empowered_culture;value. 

## S-76: Play CH03-M03 — The Public Promise
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M03 scenario challenge
So that: I can apply PEO06 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-75, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M03 briefing in CivicLink municipal service platform When I begin Then A council announcement claims 100 percent coverage; the objective is to evaluate and correct a misleading launch promise
- AC2: Given the authored promise correction evidence When I use communication_decision Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted promise correction response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M03; pmp_quest_eco_coverage.csv:PEO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-77: Play CH03-M04 — Choose the Message
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M04 scenario challenge
So that: I can apply PEO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-76, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M04 briefing in CivicLink municipal service platform When I begin Then Residents receive conflicting messages from agencies; the objective is to tailor communication channels to literacy access and stakeholder needs
- AC2: Given the authored communications plan evidence When I use message_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted communications plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M04; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-78: Play CH03-M05 — The Agency Conflict
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M05 scenario challenge
So that: I can apply PEO02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-77, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M05 briefing in CivicLink municipal service platform When I begin Then Two departments dispute ownership of a shared process; the objective is to investigate the root cause of interagency conflict
- AC2: Given the authored issue narrative evidence When I use conflict_diagnosis Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted issue narrative response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M05; pmp_quest_eco_coverage.csv:PEO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-79: Play CH03-M06 — Rebuild the Vision
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M06 scenario challenge
So that: I can apply PEO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-78, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M06 briefing in CivicLink municipal service platform When I begin Then Leadership divides over equity versus speed; the objective is to refresh a shared vision after priorities change
- AC2: Given the authored updated vision evidence When I use vision_workshop Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted updated vision response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M06; pmp_quest_eco_coverage.csv:PEO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-80: Play CH03-M07 — The Knowledge Gap
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M07 scenario challenge
So that: I can apply PEO07 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-79, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M07 briefing in CivicLink municipal service platform When I begin Then A specialist is leaving with undocumented deployment knowledge; the objective is to create an actionable knowledge-transfer process for regional teams
- AC2: Given the authored knowledge-transfer pack evidence When I use handover_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted knowledge-transfer pack response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M07; pmp_quest_eco_coverage.csv:PEO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / empowered_culture;holistic_view. 

## S-81: Play CH03-M08 — The Field Team
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M08 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-80, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M08 briefing in CivicLink municipal service platform When I begin Then Local coordinators cannot act without central approval; the objective is to choose an empowering leadership approach across distributed teams
- AC2: Given the authored team operating agreement evidence When I use leadership_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted team operating agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M08; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-82: Play CH03-M09 — A Community Backlash
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M09 scenario challenge
So that: I can apply BUS07 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-81, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M09 briefing in CivicLink municipal service platform When I begin Then Frontline staff fear new digital workflows; the objective is to support adaptation to organizational and citizen resistance
- AC2: Given the authored change support plan evidence When I use adoption_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted change support plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M09; pmp_quest_eco_coverage.csv:BUS07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-83: Play CH03-M10 — Unexpected Legislation
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M10 scenario challenge
So that: I can apply BUS08 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-82, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M10 briefing in CivicLink municipal service platform When I begin Then Data sharing legislation changes consent requirements; the objective is to determine the effect of emerging external rules on project commitments
- AC2: Given the authored policy impact log evidence When I use external_scan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted policy impact log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M10; pmp_quest_eco_coverage.csv:BUS08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Risk / sustainability;holistic_view. 

## S-84: Play CH03-M11 — Value Beyond Usage
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M11 scenario challenge
So that: I can apply PRO03 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-83, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M11 briefing in CivicLink municipal service platform When I begin Then High sign-ups mask low service completion rates; the objective is to define outcomes and meaningful benefits beyond account registrations
- AC2: Given the authored benefit measures evidence When I use benefits_dashboard Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted benefit measures response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M11; pmp_quest_eco_coverage.csv:PRO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Scope / value;holistic_view. 

## S-85: Play CH03-M12 — A Governance Exception
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M12 scenario challenge
So that: I can apply PEO05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-84, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M12 briefing in CivicLink municipal service platform When I begin Then An agency seeks to omit an agreed review step; the objective is to align agency expectations while routing an exception through appropriate governance
- AC2: Given the authored change decision record evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted change decision record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M12; pmp_quest_eco_coverage.csv:PEO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / empowered_culture;value. 

## S-86: Play CH03-M13 — The Difficult Conversation
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M13 scenario challenge
So that: I can apply PEO06 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-85, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M13 briefing in CivicLink municipal service platform When I begin Then Local advocates question missed commitments; the objective is to restore customer expectations through transparent follow-up
- AC2: Given the authored revised engagement plan evidence When I use stakeholder_dialogue Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted revised engagement plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M13; pmp_quest_eco_coverage.csv:PEO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-87: Play CH03-M14 — Community Trust Scorecard
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH03-M14 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-13; CH03-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-86, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-M14 briefing in CivicLink municipal service platform When I begin Then Executives want one simplistic happiness metric; the objective is to interpret survey and service data before reporting project health
- AC2: Given the authored engagement scorecard evidence When I use evidence_dashboard Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted engagement scorecard response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH03-M14; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

# F-14: CH04 — The Delivery Blueprint — Designing the Work
Goal: Deliver independently reviewable learner or content-publisher value.

## S-88: Play CH04-M01 — Blueprint Before Building
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M01 scenario challenge
So that: I can apply PRO01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-39, S-87, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M01 briefing in Meridian community-health facility When I begin Then A facility sponsor wants construction to start before planning closes; the objective is to integrate requirements constraints stakeholders and delivery plans
- AC2: Given the authored integrated plan evidence When I use plan_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted integrated plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M01; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: ordering. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-89: Play CH04-M02 — What Is Actually Included?
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M02 scenario challenge
So that: I can apply PRO02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-39, S-88, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M02 briefing in Meridian community-health facility When I begin Then Clinical staff request unlisted equipment and rooms; the objective is to translate ambiguous requirements into an agreed scope boundary
- AC2: Given the authored scope baseline evidence When I use scope_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted scope baseline response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M02; pmp_quest_eco_coverage.csv:PRO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: ordering. PMBOK mapping awaiting SME: Scope / holistic_view;value. 

## S-90: Play CH04-M03 — Break Down the Work
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M03 scenario challenge
So that: I can apply PRO02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-39, S-89, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M03 briefing in Meridian community-health facility When I begin Then The team confuses activities with deliverables; the objective is to create a deliverable-focused decomposition with coherent work packages
- AC2: Given the authored work breakdown structure evidence When I use wbs_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted work breakdown structure response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M03; pmp_quest_eco_coverage.csv:PRO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: ordering. PMBOK mapping awaiting SME: Scope / holistic_view;value. 

## S-91: Play CH04-M04 — Staff and Specialists
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M04 scenario challenge
So that: I can apply PRO04 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-42, S-90, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M04 briefing in Meridian community-health facility When I begin Then Key inspectors are shared across multiple programs; the objective is to match specialist availability to work phases and constraints
- AC2: Given the authored resource calendar evidence When I use resource_allocation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted resource calendar response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M04; pmp_quest_eco_coverage.csv:PRO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: allocation. PMBOK mapping awaiting SME: Resources / holistic_view;empowered_culture. 

## S-92: Play CH04-M05 — The Permit Timeline
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M05 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-36, S-91, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M05 briefing in Meridian community-health facility When I begin Then Planning permits block several construction activities; the objective is to sequence dependencies with realistic lead times and milestones
- AC2: Given the authored milestone plan evidence When I use schedule_network Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted milestone plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M05; pmp_quest_eco_coverage.csv:PRO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: network. PMBOK mapping awaiting SME: Schedule / holistic_view;value. 

## S-93: Play CH04-M06 — One Shared Objective
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M06 scenario challenge
So that: I can apply PEO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-92, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M06 briefing in Meridian community-health facility When I begin Then Facilities prioritize cost while clinicians prioritize access; the objective is to align facilities and clinical groups on benefit outcomes
- AC2: Given the authored success charter evidence When I use vision_workshop Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted success charter response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M06; pmp_quest_eco_coverage.csv:PEO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-94: Play CH04-M07 — Reporting the Plan
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M07 scenario challenge
So that: I can apply PEO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-93, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M07 briefing in Meridian community-health facility When I begin Then A board and clinical users need different detail; the objective is to select reporting channels and cadence for different audiences
- AC2: Given the authored status and comms plan evidence When I use communications_planner Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted status and comms plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M07; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-95: Play CH04-M08 — The Progress Baseline
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M08 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-94, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M08 briefing in Meridian community-health facility When I begin Then Construction status is reported without verified evidence; the objective is to define leading and lagging measures for execution
- AC2: Given the authored performance baseline evidence When I use metric_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted performance baseline response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M08; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-96: Play CH04-M09 — Approval Boundaries
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M09 scenario challenge
So that: I can apply BUS01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-95, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M09 briefing in Meridian community-health facility When I begin Then Contractor requests may exceed delegated approval; the objective is to design a governance path with change authority and thresholds
- AC2: Given the authored approval matrix evidence When I use governance_design Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted approval matrix response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M09; pmp_quest_eco_coverage.csv:BUS01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Governance / accountable_leadership;holistic_view. 

## S-97: Play CH04-M10 — Controlled Design Change
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M10 scenario challenge
So that: I can apply BUS03 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-96, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M10 briefing in Meridian community-health facility When I begin Then Accessibility feedback triggers a design revision; the objective is to evaluate a room-layout change and track approval impacts
- AC2: Given the authored design change record evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted design change record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M10; pmp_quest_eco_coverage.csv:BUS03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / accountable_leadership;value. 

## S-98: Play CH04-M11 — Quality by Design
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M11 scenario challenge
So that: I can apply PRO07 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-97, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M11 briefing in Meridian community-health facility When I begin Then An inspection failure would trigger costly rework; the objective is to embed inspections and acceptance criteria into delivery planning
- AC2: Given the authored inspection plan evidence When I use quality_plan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted inspection plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M11; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-99: Play CH04-M12 — The Late Specialist
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M12 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-98, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M12 briefing in Meridian community-health facility When I begin Then An infection-control expert was excluded from review; the objective is to engage a specialist stakeholder before freezing requirements
- AC2: Given the authored consultation record evidence When I use stakeholder_dialogue Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted consultation record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M12; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-100: Play CH04-M13 — The Benefits Trade-off
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M13 scenario challenge
So that: I can apply PRO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-99, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M13 briefing in Meridian community-health facility When I begin Then A premium waiting room competes with urgent care access; the objective is to prioritize deliverables against service outcomes and constraints
- AC2: Given the authored prioritized requirements evidence When I use value_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted prioritized requirements response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M13; pmp_quest_eco_coverage.csv:PRO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Scope / value;holistic_view. 

## S-101: Play CH04-M14 — Planning Phase Complete
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH04-M14 scenario challenge
So that: I can apply PRO10 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-14; CH04-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-100, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-M14 briefing in Meridian community-health facility When I begin Then The sponsor requests a go or no-go decision; the objective is to verify stage deliverables and authorize transition to execution
- AC2: Given the authored phase transition pack evidence When I use stage_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted phase transition pack response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH04-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-15: CH05 — The Deadline Trap — Saving Atlas Logistics
Goal: Deliver independently reviewable learner or content-publisher value.

## S-102: Play CH05-M01 — The Impossible Date
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M01 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-36, S-101, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M01 briefing in Atlas warehouse network rollout When I begin Then Sales announces a network opening date without estimates; the objective is to construct a schedule using durations dependencies and milestones
- AC2: Given the authored baseline schedule evidence When I use schedule_network Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted baseline schedule response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M01; pmp_quest_eco_coverage.csv:PRO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: network. PMBOK mapping awaiting SME: Schedule / holistic_view;value. 

## S-103: Play CH05-M02 — Find the Critical Path
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M02 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-36, S-102, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M02 briefing in Atlas warehouse network rollout When I begin Then Equipment delivery and site setup have intersecting paths; the objective is to analyze path duration total float and schedule threats
- AC2: Given the authored network analysis evidence When I use critical_path_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted network analysis response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M02; pmp_quest_eco_coverage.csv:PRO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: network. PMBOK mapping awaiting SME: Schedule / holistic_view;value. 

## S-104: Play CH05-M03 — Status Versus Reality
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M03 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-103, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M03 briefing in Atlas warehouse network rollout When I begin Then A contractor says tasks are 90 percent done but cannot evidence them; the objective is to reconcile reported progress against verified completion
- AC2: Given the authored progress report evidence When I use status_reconciliation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted progress report response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M03; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-105: Play CH05-M04 — Too Many Specialists
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M04 scenario challenge
So that: I can apply PRO04 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-42, S-104, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M04 briefing in Atlas warehouse network rollout When I begin Then One commissioning engineer is allocated to four sites; the objective is to resolve resource contention across parallel facilities
- AC2: Given the authored resource histogram evidence When I use resource_allocation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted resource histogram response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M04; pmp_quest_eco_coverage.csv:PRO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: allocation. PMBOK mapping awaiting SME: Resources / holistic_view;empowered_culture. 

## S-106: Play CH05-M05 — The Overtime Proposal
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M05 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-105, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M05 briefing in Atlas warehouse network rollout When I begin Then Operations demands repeated overnight shifts; the objective is to protect team capacity and safety while managing schedule pressure
- AC2: Given the authored capacity plan evidence When I use leadership_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted capacity plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M05; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-107: Play CH05-M06 — Dispatch Disagreement
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M06 scenario challenge
So that: I can apply PEO02 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-106, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M06 briefing in Atlas warehouse network rollout When I begin Then Both groups accuse each other of delays; the objective is to resolve conflicting priorities between logistics and installers
- AC2: Given the authored team resolution evidence When I use conflict_diagnosis Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted team resolution response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M06; pmp_quest_eco_coverage.csv:PEO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-108: Play CH05-M07 — The Broken Conveyor
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M07 scenario challenge
So that: I can apply BUS04 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-107, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M07 briefing in Atlas warehouse network rollout When I begin Then A conveyor arrives damaged and blocks commissioning; the objective is to triage an active site impediment and remove it effectively
- AC2: Given the authored issue log evidence When I use issue_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted issue log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M07; pmp_quest_eco_coverage.csv:BUS04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / empowered_culture;holistic_view. 

## S-109: Play CH05-M08 — Weather Window
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M08 scenario challenge
So that: I can apply BUS05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-108, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M08 briefing in Atlas warehouse network rollout When I begin Then Port closure probability rises before the delivery window; the objective is to develop contingency actions for a weather-sensitive shipment
- AC2: Given the authored risk response plan evidence When I use risk_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted risk response plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M08; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-110: Play CH05-M09 — Revise the Strategy
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M09 scenario challenge
So that: I can apply PRO01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-109, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M09 briefing in Atlas warehouse network rollout When I begin Then A phased site opening is possible with revised handoffs; the objective is to tailor the delivery plan to credible recovery options
- AC2: Given the authored recovery plan evidence When I use plan_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted recovery plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M09; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-111: Play CH05-M10 — Cost of Catching Up
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M10 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-110, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M10 briefing in Atlas warehouse network rollout When I begin Then Freight and overtime consume reserves; the objective is to evaluate acceleration costs against remaining budget and value
- AC2: Given the authored financial impact estimate evidence When I use budget_calculation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted financial impact estimate response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M10; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-112: Play CH05-M11 — Estimate the Remaining Work
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M11 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-111, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M11 briefing in Atlas warehouse network rollout When I begin Then Several work packages report unverified productivity gains; the objective is to update realistic forecasts without confusing baseline and current plan
- AC2: Given the authored revised forecast evidence When I use forecast_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted revised forecast response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M11; pmp_quest_eco_coverage.csv:PRO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Schedule / holistic_view;value. 

## S-113: Play CH05-M12 — The Daily Brief
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M12 scenario challenge
So that: I can apply PEO08 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-112, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M12 briefing in Atlas warehouse network rollout When I begin Then Regional leaders need a reliable exception summary; the objective is to tailor factual communications during high schedule pressure
- AC2: Given the authored daily status brief evidence When I use message_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted daily status brief response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M12; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-114: Play CH05-M13 — The Surprise Resequence
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M13 scenario challenge
So that: I can apply BUS03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-113, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M13 briefing in Atlas warehouse network rollout When I begin Then The sponsor requests a new site opening order; the objective is to route a schedule-impacting scope or milestone change appropriately
- AC2: Given the authored approved revised plan evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted approved revised plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M13; pmp_quest_eco_coverage.csv:BUS03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / accountable_leadership;value. 

## S-115: Play CH05-M14 — Go Live Readiness
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH05-M14 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-15; CH05-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-114, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-M14 briefing in Atlas warehouse network rollout When I begin Then Two sites have conflicting go-live readiness reports; the objective is to make a decision from cross-site evidence rather than optimistic summaries
- AC2: Given the authored network readiness assessment evidence When I use readiness_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted network readiness assessment response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH05-M14; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

# F-16: CH06 — The Budget Crisis — Aurora Energy
Goal: Deliver independently reviewable learner or content-publisher value.

## S-116: Play CH06-M01 — The Financial Baseline
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M01 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-115, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M01 briefing in Aurora solar-plus-storage rollout When I begin Then An energy sponsor has approved an ambitious multi-site rollout; the objective is to build an approved budget and define cost-control thresholds
- AC2: Given the authored cost baseline evidence When I use budget_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cost baseline response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M01; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-117: Play CH06-M02 — Forecast Gone Wrong
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M02 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-116, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M02 briefing in Aurora solar-plus-storage rollout When I begin Then Material costs rise while earned work lags; the objective is to calculate variance and forecast remaining cost from project evidence
- AC2: Given the authored cost forecast evidence When I use evm_calculation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cost forecast response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M02; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-118: Play CH06-M03 — Contingency or Reserve?
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M03 scenario challenge
So that: I can apply BUS05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-117, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M03 briefing in Aurora solar-plus-storage rollout When I begin Then A risk event draws pressure to use all available reserves; the objective is to distinguish risk response contingency from unsupported spending
- AC2: Given the authored reserve strategy evidence When I use risk_allocation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted reserve strategy response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M03; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-119: Play CH06-M04 — Vendor Bid Evaluation
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M04 scenario challenge
So that: I can apply PRO05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-118, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M04 briefing in Aurora solar-plus-storage rollout When I begin Then The cheapest inverter quote has uncertain warranty coverage; the objective is to compare supplier offers using cost quality risk and contract fit
- AC2: Given the authored source selection record evidence When I use vendor_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted source selection record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M04; pmp_quest_eco_coverage.csv:PRO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-120: Play CH06-M05 — Cash Flow Crunch
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M05 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-119, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M05 briefing in Aurora solar-plus-storage rollout When I begin Then Equipment deposits fall due before a funding milestone; the objective is to adjust funding and payment projections to match work timing
- AC2: Given the authored cash flow plan evidence When I use cashflow_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cash flow plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M05; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-121: Play CH06-M06 — Market Shock
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M06 scenario challenge
So that: I can apply BUS08 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-120, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M06 briefing in Aurora solar-plus-storage rollout When I begin Then Import duties alter the business case; the objective is to assess the effect of exchange-rate and policy changes
- AC2: Given the authored business impact memo evidence When I use external_scan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted business impact memo response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M06; pmp_quest_eco_coverage.csv:BUS08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Risk / sustainability;holistic_view. 

## S-122: Play CH06-M07 — Investors and Communities
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M07 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-121, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M07 briefing in Aurora solar-plus-storage rollout When I begin Then A local association opposes a planned installation; the objective is to create an engagement approach for communities and investors
- AC2: Given the authored engagement plan evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted engagement plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M07; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-123: Play CH06-M08 — A Promise to Investors
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M08 scenario challenge
So that: I can apply PEO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-122, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M08 briefing in Aurora solar-plus-storage rollout When I begin Then Marketing overstates early expected energy benefits; the objective is to correct unsupported savings and environmental claims
- AC2: Given the authored benefits communication evidence When I use expectation_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted benefits communication response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M08; pmp_quest_eco_coverage.csv:PEO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-124: Play CH06-M09 — Environmental Compliance
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M09 scenario challenge
So that: I can apply BUS02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-123, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M09 briefing in Aurora solar-plus-storage rollout When I begin Then A vendor proposes equipment with unclear disposal obligations; the objective is to validate sustainability and safety obligations in procurement
- AC2: Given the authored compliance checklist evidence When I use compliance_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted compliance checklist response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M09; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-125: Play CH06-M10 — Value Over Lowest Price
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M10 scenario challenge
So that: I can apply PRO03 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-124, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M10 briefing in Aurora solar-plus-storage rollout When I begin Then Efficient equipment costs more upfront but saves over time; the objective is to rank options using lifecycle value and sustainability outcomes
- AC2: Given the authored lifecycle comparison evidence When I use value_tradeoff Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted lifecycle comparison response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M10; pmp_quest_eco_coverage.csv:PRO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Scope / value;holistic_view. 

## S-126: Play CH06-M11 — Financial Transparency
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M11 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-125, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M11 briefing in Aurora solar-plus-storage rollout When I begin Then Steering committee requests a sanitized financial dashboard; the objective is to report cost pressure and assumptions without hiding variances
- AC2: Given the authored financial dashboard evidence When I use status_reconciliation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted financial dashboard response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M11; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-127: Play CH06-M12 — Choose a Recovery Option
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M12 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-126, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M12 briefing in Aurora solar-plus-storage rollout When I begin Then The remaining budget cannot support all planned sites; the objective is to evaluate scope phasing versus additional authorized funding
- AC2: Given the authored reforecast proposal evidence When I use budget_tradeoff Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted reforecast proposal response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M12; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-128: Play CH06-M13 — Funding Approval Path
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M13 scenario challenge
So that: I can apply PRO06 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-127, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M13 briefing in Aurora solar-plus-storage rollout When I begin Then A senior manager asks the team to spend before approval; the objective is to use approval thresholds to authorize financing and scope changes
- AC2: Given the authored funding authorization evidence When I use governance_decision Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted funding authorization response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M13; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-129: Play CH06-M14 — Close the Funding Phase
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH06-M14 scenario challenge
So that: I can apply PRO10 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-16; CH06-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-128, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-M14 briefing in Aurora solar-plus-storage rollout When I begin Then Finance wants the phase closed before supplier claims settle; the objective is to complete contractual and financial reconciliation for phase exit
- AC2: Given the authored financial closure pack evidence When I use closure_check Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted financial closure pack response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH06-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-17: CH07 — The Team Challenge — Pulse Health
Goal: Deliver independently reviewable learner or content-publisher value.

## S-130: Play CH07-M01 — Leading Without Command
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M01 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-129, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M01 briefing in Pulse Health patient engagement app When I begin Then A newly formed squad expects the PM to allocate every task; the objective is to select a leadership style that gives specialists appropriate autonomy
- AC2: Given the authored working agreement evidence When I use leadership_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted working agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M01; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-131: Play CH07-M02 — The Cultural Misread
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M02 scenario challenge
So that: I can apply PEO02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-130, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M02 briefing in Pulse Health patient engagement app When I begin Then Two engineers interpret terse feedback as personal criticism; the objective is to diagnose conflict across time zones and team norms
- AC2: Given the authored conflict notes evidence When I use conflict_diagnosis Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted conflict notes response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M02; pmp_quest_eco_coverage.csv:PEO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-132: Play CH07-M03 — Empower the Squad
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M03 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-131, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M03 briefing in Pulse Health patient engagement app When I begin Then Team members wait for approval on every minor backlog change; the objective is to clarify decision boundaries and delegated responsibilities
- AC2: Given the authored decision boundaries evidence When I use role_matrix Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted decision boundaries response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M03; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-133: Play CH07-M04 — The Only Expert
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M04 scenario challenge
So that: I can apply PEO07 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-132, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M04 briefing in Pulse Health patient engagement app When I begin Then One architect holds undocumented API knowledge; the objective is to reduce single-person dependency through knowledge transfer
- AC2: Given the authored knowledge-sharing plan evidence When I use handover_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted knowledge-sharing plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M04; pmp_quest_eco_coverage.csv:PEO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / empowered_culture;holistic_view. 

## S-134: Play CH07-M05 — Daily Signals
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M05 scenario challenge
So that: I can apply PEO08 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-133, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M05 briefing in Pulse Health patient engagement app When I begin Then Standups become lengthy status interrogations; the objective is to set feedback loops that support transparency without micromanagement
- AC2: Given the authored team feedback cadence evidence When I use communications_planner Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted team feedback cadence response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M05; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-135: Play CH07-M06 — Sponsor and Team Alignment
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M06 scenario challenge
So that: I can apply PEO05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-134, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M06 briefing in Pulse Health patient engagement app When I begin Then A physician sponsor demands a full roadmap guarantee; the objective is to coach stakeholder expectations through a realistic delivery forecast
- AC2: Given the authored expectation agreement evidence When I use stakeholder_dialogue Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted expectation agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M06; pmp_quest_eco_coverage.csv:PEO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / empowered_culture;value. 

## S-136: Play CH07-M07 — Beyond the Feature List
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M07 scenario challenge
So that: I can apply PEO01 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-135, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M07 briefing in Pulse Health patient engagement app When I begin Then Design and Engineering chase conflicting success metrics; the objective is to create a shared purpose around patient outcomes
- AC2: Given the authored outcome statement evidence When I use vision_workshop Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted outcome statement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M07; pmp_quest_eco_coverage.csv:PEO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-137: Play CH07-M08 — The Skeptical Clinician
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M08 scenario challenge
So that: I can apply PEO04 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-136, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M08 briefing in Pulse Health patient engagement app When I begin Then Clinicians resist a prototype that disrupts workflow; the objective is to build trust through stakeholder discovery and adapted communication
- AC2: Given the authored engagement plan evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted engagement plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M08; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-138: Play CH07-M09 — A Persistent Blocker
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M09 scenario challenge
So that: I can apply BUS04 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-137, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M09 briefing in Pulse Health patient engagement app When I begin Then Security review tickets remain stalled across departments; the objective is to remove organizational impediments while protecting team autonomy
- AC2: Given the authored blocker escalation evidence When I use impediment_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted blocker escalation response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M09; pmp_quest_eco_coverage.csv:BUS04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / empowered_culture;holistic_view. 

## S-139: Play CH07-M10 — Capacity Without Burnout
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M10 scenario challenge
So that: I can apply PRO04 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-42, S-138, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M10 briefing in Pulse Health patient engagement app When I begin Then A sudden priority spike pushes work beyond sustainable throughput; the objective is to balance team capacity against realistic work commitments
- AC2: Given the authored capacity forecast evidence When I use capacity_planner Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted capacity forecast response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M10; pmp_quest_eco_coverage.csv:PRO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: allocation. PMBOK mapping awaiting SME: Resources / holistic_view;empowered_culture. 

## S-140: Play CH07-M11 — The Mentor Decision
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M11 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-139, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M11 briefing in Pulse Health patient engagement app When I begin Then A junior analyst misses several commitments; the objective is to coach a struggling contributor with a growth-centered response
- AC2: Given the authored development action evidence When I use coaching_dialogue Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted development action response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M11; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-141: Play CH07-M12 — Conflict Returns
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M12 scenario challenge
So that: I can apply PEO02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-140, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M12 briefing in Pulse Health patient engagement app When I begin Then Design and Clinical teams contest a user interaction; the objective is to facilitate an agreed resolution for an unresolved product disagreement
- AC2: Given the authored resolution record evidence When I use facilitation_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted resolution record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M12; pmp_quest_eco_coverage.csv:PEO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-142: Play CH07-M13 — Knowledge for the Next Team
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M13 scenario challenge
So that: I can apply PEO07 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-141, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M13 briefing in Pulse Health patient engagement app When I begin Then A successful pilot must be handed to another squad; the objective is to develop a useful handover using teach-back and validation
- AC2: Given the authored validated runbook evidence When I use knowledge_transfer Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted validated runbook response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M13; pmp_quest_eco_coverage.csv:PEO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / empowered_culture;holistic_view. 

## S-143: Play CH07-M14 — How Healthy Is the Team?
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH07-M14 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-17; CH07-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-142, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-M14 briefing in Pulse Health patient engagement app When I begin Then Velocity increases but engagement and quality decline; the objective is to interpret team and delivery signals without weaponizing metrics
- AC2: Given the authored balanced scorecard evidence When I use team_metrics Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted balanced scorecard response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH07-M14; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

# F-18: CH08 — The Quality Breakdown — ShieldPay
Goal: Deliver independently reviewable learner or content-publisher value.

## S-144: Play CH08-M01 — Quality Begins Upstream
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M01 scenario challenge
So that: I can apply PRO07 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-143, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M01 briefing in ShieldPay regulated payment service When I begin Then Payments are designed without clear traceability or failure thresholds; the objective is to translate quality expectations into preventive practices and acceptance tests
- AC2: Given the authored quality strategy evidence When I use quality_plan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quality strategy response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M01; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-145: Play CH08-M02 — The Rework Spiral
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M02 scenario challenge
So that: I can apply PRO07 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-144, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M02 briefing in ShieldPay regulated payment service When I begin Then Repeated defects consume the final integration budget; the objective is to analyze prevention appraisal and failure costs
- AC2: Given the authored quality cost analysis evidence When I use cost_quality Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quality cost analysis response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M02; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-146: Play CH08-M03 — Regulatory Checkpoint
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M03 scenario challenge
So that: I can apply BUS02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-145, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M03 briefing in ShieldPay regulated payment service When I begin Then An audit exposes missing approval evidence; the objective is to verify security and financial regulatory requirements
- AC2: Given the authored obligation register evidence When I use compliance_review Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted obligation register response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M03; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-147: Play CH08-M04 — Threat Register
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M04 scenario challenge
So that: I can apply BUS05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-146, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M04 briefing in ShieldPay regulated payment service When I begin Then A threat assessment reveals weak monitoring controls; the objective is to assess security and supplier risks and agree treatments
- AC2: Given the authored risk response plan evidence When I use risk_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted risk response plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M04; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-148: Play CH08-M05 — Pressure on Engineering
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M05 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-147, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M05 briefing in ShieldPay regulated payment service When I begin Then The sponsor calls for weekend work and skipped reviews; the objective is to lead a team under quality and deadline stress
- AC2: Given the authored team recovery plan evidence When I use leadership_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted team recovery plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M05; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-149: Play CH08-M06 — What Does the Dashboard Hide?
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M06 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-148, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M06 briefing in ShieldPay regulated payment service When I begin Then Defect trends worsen despite improved headline status; the objective is to distinguish cosmetic green status from verifiable release evidence
- AC2: Given the authored quality dashboard evidence When I use status_reconciliation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quality dashboard response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M06; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-150: Play CH08-M07 — The Late Interface Change
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M07 scenario challenge
So that: I can apply BUS03 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-149, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M07 briefing in ShieldPay regulated payment service When I begin Then A banking partner alters interface specifications; the objective is to submit a controlled interface change with verified impacts
- AC2: Given the authored interface change record evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted interface change record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M07; pmp_quest_eco_coverage.csv:BUS03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / accountable_leadership;value. 

## S-151: Play CH08-M08 — Root Cause Before Patch
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M08 scenario challenge
So that: I can apply PRO07 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-150, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M08 briefing in ShieldPay regulated payment service When I begin Then Multiple failed transactions share a hidden configuration issue; the objective is to analyze recurring defect causes and prevent recurrence
- AC2: Given the authored cause analysis evidence When I use root_cause_investigation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cause analysis response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M08; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-152: Play CH08-M09 — The Blocking Defect
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M09 scenario challenge
So that: I can apply BUS04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-151, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M09 briefing in ShieldPay regulated payment service When I begin Then A live test environment loses settlement records; the objective is to coordinate triage and resolution of a confirmed issue
- AC2: Given the authored incident response log evidence When I use issue_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted incident response log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M09; pmp_quest_eco_coverage.csv:BUS04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / empowered_culture;holistic_view. 

## S-153: Play CH08-M10 — Lessons Into Standards
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M10 scenario challenge
So that: I can apply PRO07 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-152, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M10 briefing in ShieldPay regulated payment service When I begin Then A release retrospective identifies unreliable test data; the objective is to convert test learning into practical quality process improvements
- AC2: Given the authored quality improvement action evidence When I use improvement_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quality improvement action response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M10; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-154: Play CH08-M11 — Explain the Delay
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M11 scenario challenge
So that: I can apply PEO08 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-153, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M11 briefing in ShieldPay regulated payment service When I begin Then Customers and executives seek different release explanations; the objective is to communicate quality risks transparently to distinct audiences
- AC2: Given the authored release communication evidence When I use message_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted release communication response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M11; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-155: Play CH08-M12 — The Minimum Safe Release
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M12 scenario challenge
So that: I can apply PRO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-154, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M12 briefing in ShieldPay regulated payment service When I begin Then A reduced deployment could serve a subset of customers; the objective is to balance useful delivery scope against non-negotiable quality requirements
- AC2: Given the authored release options memo evidence When I use release_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted release options memo response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M12; pmp_quest_eco_coverage.csv:PRO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Scope / value;holistic_view. 

## S-156: Play CH08-M13 — Authorization to Launch
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M13 scenario challenge
So that: I can apply BUS01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-155, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M13 briefing in ShieldPay regulated payment service When I begin Then Operations and compliance dispute who can approve deployment; the objective is to use documented release decision rights and evidence
- AC2: Given the authored release authorization evidence When I use governance_design Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted release authorization response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M13; pmp_quest_eco_coverage.csv:BUS01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Governance / accountable_leadership;holistic_view. 

## S-157: Play CH08-M14 — Transition Without Surprises
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH08-M14 scenario challenge
So that: I can apply PRO10 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-18; CH08-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-156, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-M14 briefing in ShieldPay regulated payment service When I begin Then An incomplete on-call handover threatens post-release support; the objective is to validate operational readiness and conclude project obligations
- AC2: Given the authored operations transition pack evidence When I use closure_check Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted operations transition pack response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH08-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-19: CH09 — The Risk Frontier — Arctic Supply
Goal: Deliver independently reviewable learner or content-publisher value.

## S-158: Play CH09-M01 — Scan the Horizon
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M01 scenario challenge
So that: I can apply BUS05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-157, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M01 briefing in Arctic critical-medicine distribution When I begin Then A weather-dependent shipment window approaches; the objective is to identify event and systemic threats across the delivery chain
- AC2: Given the authored risk register evidence When I use risk_identification Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted risk register response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M01; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-159: Play CH09-M02 — Probability and Impact
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M02 scenario challenge
So that: I can apply BUS05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-158, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M02 briefing in Arctic critical-medicine distribution When I begin Then Leadership presents inconsistent likelihood estimates; the objective is to analyze risk exposure using sound assumptions and ranges
- AC2: Given the authored quantitative risk brief evidence When I use risk_matrix Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quantitative risk brief response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M02; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-160: Play CH09-M03 — When a Risk Becomes an Issue
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M03 scenario challenge
So that: I can apply BUS04 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-159, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M03 briefing in Arctic critical-medicine distribution When I begin Then An airport shutdown is confirmed rather than merely possible; the objective is to reclassify an occurred disruption and coordinate issue response
- AC2: Given the authored issue response log evidence When I use risk_issue_sort Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted issue response log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M03; pmp_quest_eco_coverage.csv:BUS04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / empowered_culture;holistic_view. 

## S-161: Play CH09-M04 — The Regulatory Shift
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M04 scenario challenge
So that: I can apply BUS08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-160, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M04 briefing in Arctic critical-medicine distribution When I begin Then A destination country changes import requirements; the objective is to evaluate changes in cross-border policy before altering plans
- AC2: Given the authored regulatory impact review evidence When I use external_scan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted regulatory impact review response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M04; pmp_quest_eco_coverage.csv:BUS08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Risk / sustainability;holistic_view. 

## S-162: Play CH09-M05 — Partner Resilience
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M05 scenario challenge
So that: I can apply PRO05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-161, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M05 briefing in Arctic critical-medicine distribution When I begin Then A freight partner lacks a secondary transport route; the objective is to evaluate contract and logistics dependencies for continuity
- AC2: Given the authored supplier resilience plan evidence When I use vendor_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted supplier resilience plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M05; pmp_quest_eco_coverage.csv:PRO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-163: Play CH09-M06 — Response Strategies
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M06 scenario challenge
So that: I can apply BUS05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-162, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M06 briefing in Arctic critical-medicine distribution When I begin Then A coastal route has extreme forecast exposure; the objective is to compare avoidance mitigation transfer acceptance and escalation in context
- AC2: Given the authored risk response matrix evidence When I use risk_response_game Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted risk response matrix response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M06; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-164: Play CH09-M07 — Public Health Stakeholders
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M07 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-163, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M07 briefing in Arctic critical-medicine distribution When I begin Then Clinics have different criticality and urgency levels; the objective is to engage recipients and agencies during uncertainty
- AC2: Given the authored priority stakeholder map evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted priority stakeholder map response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M07; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-165: Play CH09-M08 — Cold-Chain Compliance
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M08 scenario challenge
So that: I can apply BUS02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-164, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M08 briefing in Arctic critical-medicine distribution When I begin Then A reroute may break temperature-control requirements; the objective is to set and test mandatory handling controls
- AC2: Given the authored handling checklist evidence When I use compliance_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted handling checklist response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M08; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-166: Play CH09-M09 — Schedule Under Uncertainty
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M09 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-36, S-165, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M09 briefing in Arctic critical-medicine distribution When I begin Then Transport disruption shifts shipment lead times; the objective is to construct a feasible alternate route and delivery forecast
- AC2: Given the authored revised logistics plan evidence When I use schedule_network Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted revised logistics plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M09; pmp_quest_eco_coverage.csv:PRO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: network. PMBOK mapping awaiting SME: Schedule / holistic_view;value. 

## S-167: Play CH09-M10 — Risk Reserve
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M10 scenario challenge
So that: I can apply PRO06 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-166, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M10 briefing in Arctic critical-medicine distribution When I begin Then Cold-chain emergency capacity is expensive; the objective is to assess contingency needs and financial exposure
- AC2: Given the authored contingency authorization evidence When I use budget_tradeoff Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted contingency authorization response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M10; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-168: Play CH09-M11 — The Worst-Case Brief
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M11 scenario challenge
So that: I can apply BUS05 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-167, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M11 briefing in Arctic critical-medicine distribution When I begin Then Leadership demands a single delivery guarantee; the objective is to communicate uncertainty and response triggers without false precision
- AC2: Given the authored risk briefing evidence When I use risk_communication Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted risk briefing response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M11; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-169: Play CH09-M12 — After-Action Review
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M12 scenario challenge
So that: I can apply BUS06 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-168, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M12 briefing in Arctic critical-medicine distribution When I begin Then The first shipment arrives late with useful operational lessons; the objective is to turn incident evidence into repeatable resilience improvements
- AC2: Given the authored improvement plan evidence When I use retrospective_sort Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted improvement plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M12; pmp_quest_eco_coverage.csv:BUS06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / quality;empowered_culture. 

## S-170: Play CH09-M13 — Inform the Network
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M13 scenario challenge
So that: I can apply PEO08 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-169, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M13 briefing in Arctic critical-medicine distribution When I begin Then Clinics need timely confirmed delivery updates; the objective is to maintain transparent communications across high-stakes partners
- AC2: Given the authored communications protocol evidence When I use message_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted communications protocol response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M13; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-171: Play CH09-M14 — Next-Week Forecast
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH09-M14 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-19; CH09-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-170, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-M14 briefing in Arctic critical-medicine distribution When I begin Then Late shipments create cascading inventory uncertainties; the objective is to update progress data and risk exposure for the next decision
- AC2: Given the authored rolling forecast evidence When I use decision_dashboard Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted rolling forecast response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH09-M14; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

# F-20: CH10 — The Agile Transformation — NovaCloud
Goal: Deliver independently reviewable learner or content-publisher value.

## S-172: Play CH10-M01 — The Way of Working
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M01 scenario challenge
So that: I can apply PRO01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-171, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M01 briefing in NovaCloud digital collaboration platform When I begin Then An old project plan cannot absorb rapidly changing product insight; the objective is to explain when predictive adaptive or hybrid delivery is justified
- AC2: Given the authored tailoring decision evidence When I use approach_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted tailoring decision response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M01; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-173: Play CH10-M02 — A Team with Ownership
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M02 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-172, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M02 briefing in NovaCloud digital collaboration platform When I begin Then Managers continue allocating all tasks from above; the objective is to set up a self-organizing team with clear accountabilities
- AC2: Given the authored agile team agreement evidence When I use team_charter Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted agile team agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M02; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-174: Play CH10-M03 — Value First Backlog
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M03 scenario challenge
So that: I can apply PRO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-39, S-173, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M03 briefing in NovaCloud digital collaboration platform When I begin Then A backlog has 120 equal-priority requests; the objective is to prioritize work by customer outcomes learning and effort
- AC2: Given the authored ordered backlog evidence When I use backlog_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted ordered backlog response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M03; pmp_quest_eco_coverage.csv:PRO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: ordering. PMBOK mapping awaiting SME: Scope / value;holistic_view. 

## S-175: Play CH10-M04 — Boundaries and Stories
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M04 scenario challenge
So that: I can apply PRO02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-39, S-174, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M04 briefing in NovaCloud digital collaboration platform When I begin Then Large vague epics prevent credible delivery forecasts; the objective is to refine requirements into testable user outcomes and acceptance
- AC2: Given the authored acceptance criteria evidence When I use story_refinement Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted acceptance criteria response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M04; pmp_quest_eco_coverage.csv:PRO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: ordering. PMBOK mapping awaiting SME: Scope / holistic_view;value. 

## S-176: Play CH10-M05 — Feedback with Customers
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M05 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-175, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M05 briefing in NovaCloud digital collaboration platform When I begin Then A prototype contradicts executive assumptions; the objective is to engage users in iterative discovery and adaptation
- AC2: Given the authored research insight log evidence When I use user_feedback_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted research insight log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M05; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-177: Play CH10-M06 — The Sprint Dispute
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M06 scenario challenge
So that: I can apply PEO02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-176, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M06 briefing in NovaCloud digital collaboration platform When I begin Then Developers and product leadership disagree on commitments; the objective is to resolve an iteration planning disagreement constructively
- AC2: Given the authored sprint agreement evidence When I use conflict_diagnosis Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted sprint agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M06; pmp_quest_eco_coverage.csv:PEO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-178: Play CH10-M07 — Seeing Flow
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M07 scenario challenge
So that: I can apply PRO09 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-177, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M07 briefing in NovaCloud digital collaboration platform When I begin Then The board shows busy people but slow feature completion; the objective is to interpret throughput flow and work-in-progress signals
- AC2: Given the authored flow dashboard evidence When I use flow_metrics Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted flow dashboard response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M07; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-179: Play CH10-M08 — Change Without Chaos
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M08 scenario challenge
So that: I can apply BUS03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-178, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M08 briefing in NovaCloud digital collaboration platform When I begin Then A new request affects an external contractual milestone; the objective is to distinguish backlog reprioritization from changes to controlled commitments
- AC2: Given the authored tailored change record evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted tailored change record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M08; pmp_quest_eco_coverage.csv:BUS03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / accountable_leadership;value. 

## S-180: Play CH10-M09 — Remove the Blocker
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M09 scenario challenge
So that: I can apply BUS04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-179, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M09 briefing in NovaCloud digital collaboration platform When I begin Then A shared API team delays development; the objective is to help the team clear a dependency without taking over its work
- AC2: Given the authored impediment log evidence When I use impediment_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted impediment log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M09; pmp_quest_eco_coverage.csv:BUS04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / empowered_culture;holistic_view. 

## S-181: Play CH10-M10 — Continuous Learning
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M10 scenario challenge
So that: I can apply PEO07 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-180, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M10 briefing in NovaCloud digital collaboration platform When I begin Then Repeated production fixes are not documented; the objective is to create a knowledge-sharing habit and preserve key technical learning
- AC2: Given the authored learning log evidence When I use knowledge_transfer Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted learning log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M10; pmp_quest_eco_coverage.csv:PEO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / empowered_culture;holistic_view. 

## S-182: Play CH10-M11 — Definition of Done
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M11 scenario challenge
So that: I can apply PRO07 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-181, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M11 briefing in NovaCloud digital collaboration platform When I begin Then Completed stories repeatedly return from customer acceptance; the objective is to create robust quality criteria that support frequent delivery
- AC2: Given the authored definition of done evidence When I use quality_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted definition of done response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M11; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-183: Play CH10-M12 — Expectation Reset
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M12 scenario challenge
So that: I can apply PEO06 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-182, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M12 briefing in NovaCloud digital collaboration platform When I begin Then A sponsor wants a fixed date for unknown features; the objective is to communicate forecasts using uncertainty rather than false guarantees
- AC2: Given the authored forecast communication evidence When I use expectation_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted forecast communication response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M12; pmp_quest_eco_coverage.csv:PEO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-184: Play CH10-M13 — The Product Increment
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M13 scenario challenge
So that: I can apply PRO10 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-183, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M13 briefing in NovaCloud digital collaboration platform When I begin Then The team transitions features into routine operations; the objective is to validate an increment handoff and clarify ongoing product operations
- AC2: Given the authored product support handoff evidence When I use transition_puzzle Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted product support handoff response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M13; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

## S-185: Play CH10-M14 — Empowered Leadership
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH10-M14 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-20; CH10-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-184, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-M14 briefing in NovaCloud digital collaboration platform When I begin Then A new delivery metric creates unhealthy behavior; the objective is to coach the team to choose context-aware improvement experiments
- AC2: Given the authored team experiment plan evidence When I use coaching_dialogue Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted team experiment plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH10-M14; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

# F-21: CH11 — The Hybrid Enterprise — GreenGrid
Goal: Deliver independently reviewable learner or content-publisher value.

## S-186: Play CH11-M01 — Architecture of Hybrid Delivery
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M01 scenario challenge
So that: I can apply PRO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-185, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M01 briefing in GreenGrid intelligent energy management When I begin Then Hardware needs fixed procurement while analytics needs rapid iteration; the objective is to partition work by appropriate development approach with clear integration points
- AC2: Given the authored hybrid delivery model evidence When I use approach_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted hybrid delivery model response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M01; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-187: Play CH11-M02 — Portfolio Governance
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M02 scenario challenge
So that: I can apply BUS01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-186, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M02 briefing in GreenGrid intelligent energy management When I begin Then Hardware and software teams have inconsistent approval rules; the objective is to set controls decision rights and thresholds for mixed work streams
- AC2: Given the authored cross-stream governance evidence When I use governance_design Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cross-stream governance response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M02; pmp_quest_eco_coverage.csv:BUS01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Governance / accountable_leadership;holistic_view. 

## S-188: Play CH11-M03 — Sustainability Requirements
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M03 scenario challenge
So that: I can apply BUS02 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-187, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M03 briefing in GreenGrid intelligent energy management When I begin Then A sustainability claim lacks lifecycle and reporting data; the objective is to turn sustainability goals into measurable verified conditions
- AC2: Given the authored impact criteria evidence When I use sustainability_review Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted impact criteria response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M03; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-189: Play CH11-M04 — The Contract Maze
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M04 scenario challenge
So that: I can apply PRO05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-188, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M04 briefing in GreenGrid intelligent energy management When I begin Then A cloud provider offers multiple pricing and risk structures; the objective is to select contracts and supplier oversight appropriate to uncertainty
- AC2: Given the authored procurement strategy evidence When I use vendor_comparison Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted procurement strategy response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M04; pmp_quest_eco_coverage.csv:PRO05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-190: Play CH11-M05 — The AI Forecast
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M05 scenario challenge
So that: I can apply BUS08 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-189, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M05 briefing in GreenGrid intelligent energy management When I begin Then An assistant predicts demand with little provenance; the objective is to critically evaluate AI-generated forecasts given changing external conditions
- AC2: Given the authored AI validation record evidence When I use ai_evidence_review Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted AI validation record response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M05; pmp_quest_eco_coverage.csv:BUS08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Risk / sustainability;holistic_view. 

## S-191: Play CH11-M06 — Stakeholder Trade-offs
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M06 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-190, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M06 briefing in GreenGrid intelligent energy management When I begin Then Energy optimization may disadvantage low-access regions; the objective is to engage communities operators suppliers and executives around competing outcomes
- AC2: Given the authored impact stakeholder plan evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted impact stakeholder plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M06; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-192: Play CH11-M07 — Lifecycle Economics
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M07 scenario challenge
So that: I can apply PRO06 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-191, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M07 briefing in GreenGrid intelligent energy management When I begin Then A low upfront price has high operating energy use; the objective is to compare options using lifecycle costs and opportunity assumptions
- AC2: Given the authored whole-life analysis evidence When I use lifecycle_calculation Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted whole-life analysis response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M07; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-193: Play CH11-M08 — Sustainable Quality
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M08 scenario challenge
So that: I can apply PRO07 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-192, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M08 briefing in GreenGrid intelligent energy management When I begin Then Two components meet function but differ in waste and reliability; the objective is to design measurable durability and environmental quality checks
- AC2: Given the authored quality requirements evidence When I use quality_tradeoff Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted quality requirements response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M08; pmp_quest_eco_coverage.csv:PRO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;accountable_leadership. 

## S-194: Play CH11-M09 — Emerging System Risk
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M09 scenario challenge
So that: I can apply BUS05 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-193, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M09 briefing in GreenGrid intelligent energy management When I begin Then An automated recommendation could disrupt grid operations; the objective is to assess model errors cyber risk and supplier concentration
- AC2: Given the authored emerging risk register evidence When I use risk_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted emerging risk register response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M09; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-195: Play CH11-M10 — An Empowered Hybrid Team
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M10 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-194, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M10 briefing in GreenGrid intelligent energy management When I begin Then Hardware and software leads dispute integration ownership; the objective is to coordinate authority across iterative and predictive teams without overcontrol
- AC2: Given the authored integration agreement evidence When I use team_charter Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted integration agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M10; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-196: Play CH11-M11 — Adoption Across Departments
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M11 scenario challenge
So that: I can apply BUS07 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-195, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M11 briefing in GreenGrid intelligent energy management When I begin Then Facilities managers distrust automated recommendations; the objective is to plan organization change and training for new operating methods
- AC2: Given the authored adoption roadmap evidence When I use change_adoption Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted adoption roadmap response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M11; pmp_quest_eco_coverage.csv:BUS07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-197: Play CH11-M12 — A Change Across Streams
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M12 scenario challenge
So that: I can apply BUS03 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-196, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M12 briefing in GreenGrid intelligent energy management When I begin Then A firmware update changes the launch interface contract; the objective is to route a cross-stream change to the correct approval forum
- AC2: Given the authored integrated change log evidence When I use change_control_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted integrated change log response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M12; pmp_quest_eco_coverage.csv:BUS03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Scope / accountable_leadership;value. 

## S-198: Play CH11-M13 — Speak With Evidence
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M13 scenario challenge
So that: I can apply PEO08 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-45, S-197, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M13 briefing in GreenGrid intelligent energy management When I begin Then Executives want a simplistic green score and precise savings; the objective is to communicate AI and sustainability uncertainty honestly
- AC2: Given the authored integrated report evidence When I use message_builder Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted integrated report response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M13; pmp_quest_eco_coverage.csv:PEO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: communication. PMBOK mapping awaiting SME: Stakeholders / holistic_view;accountable_leadership. 

## S-199: Play CH11-M14 — End-to-End Readiness
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH11-M14 scenario challenge
So that: I can apply PRO10 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-21; CH11-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-198, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-M14 briefing in GreenGrid intelligent energy management When I begin Then Software is ready but site maintenance documentation is not; the objective is to confirm cross-stream transition to accountable operations teams
- AC2: Given the authored integrated handover evidence When I use closure_check Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted integrated handover response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH11-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-22: CH12 — The Executive Portfolio — Final Capstone
Goal: Deliver independently reviewable learner or content-publisher value.

## S-200: Play CH12-M01 — Three Projects One Strategy
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M01 scenario challenge
So that: I can apply PRO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M01
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-199, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M01 briefing in Global Delivery Council multi-project investment When I begin Then The executive council approves three competing initiatives; the objective is to choose coherent delivery strategies for multiple projects under constraints
- AC2: Given the authored integrated delivery strategy evidence When I use portfolio_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted integrated delivery strategy response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M01; pmp_quest_eco_coverage.csv:PRO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Governance / holistic_view;value. 

## S-201: Play CH12-M02 — Unify the Executive Vision
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M02 scenario challenge
So that: I can apply PEO01 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M02
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-200, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M02 briefing in Global Delivery Council multi-project investment When I begin Then Finance and operations disagree on the strategic north star; the objective is to align stakeholders around measurable outcomes across programs
- AC2: Given the authored portfolio vision evidence When I use vision_workshop Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted portfolio vision response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M02; pmp_quest_eco_coverage.csv:PEO01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Stakeholders / value;accountable_leadership. 

## S-202: Play CH12-M03 — Decision Rights at Scale
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M03 scenario challenge
So that: I can apply BUS01 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M03
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-201, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M03 briefing in Global Delivery Council multi-project investment When I begin Then Sponsors dispute budget transfers between projects; the objective is to design governance and escalation across interdependent investments
- AC2: Given the authored portfolio rights matrix evidence When I use governance_design Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted portfolio rights matrix response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS01; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M03; pmp_quest_eco_coverage.csv:BUS01
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Governance / accountable_leadership;holistic_view. 

## S-203: Play CH12-M04 — The Stakeholder Alliance
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M04 scenario challenge
So that: I can apply PEO04 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M04
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-38, S-202, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M04 briefing in Global Delivery Council multi-project investment When I begin Then A regional government challenges a new rollout; the objective is to prioritize engagement for high-influence and high-impact groups
- AC2: Given the authored executive stakeholder map evidence When I use stakeholder_map Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted executive stakeholder map response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO04; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M04; pmp_quest_eco_coverage.csv:PEO04
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: mapping. PMBOK mapping awaiting SME: Stakeholders / holistic_view;value. 

## S-204: Play CH12-M05 — The Market Disruption
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M05 scenario challenge
So that: I can apply BUS08 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M05
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-203, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M05 briefing in Global Delivery Council multi-project investment When I begin Then A competitor and regulation change expected benefits; the objective is to adjust investments in response to credible external shifts
- AC2: Given the authored external impact portfolio evidence When I use external_scan Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted external impact portfolio response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M05; pmp_quest_eco_coverage.csv:BUS08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Risk / sustainability;holistic_view. 

## S-205: Play CH12-M06 — Capital Allocation
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M06 scenario challenge
So that: I can apply PRO06 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M06
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-37, S-204, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M06 briefing in Global Delivery Council multi-project investment When I begin Then One project seeks reserve funding as another shows higher return; the objective is to recommend funding based on forecast value uncertainty and constraints
- AC2: Given the authored investment memo evidence When I use portfolio_budget Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted investment memo response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO06; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M06; pmp_quest_eco_coverage.csv:PRO06
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: finance. PMBOK mapping awaiting SME: Finance / holistic_view;accountable_leadership. 

## S-206: Play CH12-M07 — Conflict in the Council
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M07 scenario challenge
So that: I can apply PEO02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M07
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-205, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M07 briefing in Global Delivery Council multi-project investment When I begin Then Two sponsors each demand scarce specialists; the objective is to facilitate principled resolution between executive stakeholders
- AC2: Given the authored negotiated agreement evidence When I use executive_dialogue Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted negotiated agreement response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M07; pmp_quest_eco_coverage.csv:PEO02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-207: Play CH12-M08 — Cross-Project Critical Path
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M08 scenario challenge
So that: I can apply PRO08 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M08
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-36, S-206, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M08 briefing in Global Delivery Council multi-project investment When I begin Then All three projects depend on the same security team; the objective is to analyze dependencies and resource constraints across initiatives
- AC2: Given the authored cross-project schedule evidence When I use network_portfolio Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted cross-project schedule response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO08; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M08; pmp_quest_eco_coverage.csv:PRO08
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: network. PMBOK mapping awaiting SME: Schedule / holistic_view;value. 

## S-208: Play CH12-M09 — Compound Risk
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M09 scenario challenge
So that: I can apply BUS05 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M09
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-40, S-207, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M09 briefing in Global Delivery Council multi-project investment When I begin Then A shared supplier outage threatens several initiatives; the objective is to assess correlated risks and avoid treating projects independently
- AC2: Given the authored aggregate risk profile evidence When I use portfolio_risk Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted aggregate risk profile response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS05; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M09; pmp_quest_eco_coverage.csv:BUS05
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: risk. PMBOK mapping awaiting SME: Risk / holistic_view;accountable_leadership. 

## S-209: Play CH12-M10 — Culture During Crisis
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M10 scenario challenge
So that: I can apply PEO03 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M10
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-8, S-208, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M10 briefing in Global Delivery Council multi-project investment When I begin Then An incident creates pressure for command-and-control responses; the objective is to lead and empower multiple delivery teams through uncertainty
- AC2: Given the authored crisis leadership plan evidence When I use leadership_sim Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted crisis leadership plan response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO03; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M10; pmp_quest_eco_coverage.csv:PEO03
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: conversation. PMBOK mapping awaiting SME: Resources / empowered_culture;accountable_leadership. 

## S-210: Play CH12-M11 — Evidence Not Optimism
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M11 scenario challenge
So that: I can apply PRO09 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M11
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-41, S-209, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M11 briefing in Global Delivery Council multi-project investment When I begin Then Executives receive conflicting dashboards from project teams; the objective is to build a defensible integrated performance and benefits report
- AC2: Given the authored executive scorecard evidence When I use board_dashboard Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted executive scorecard response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO09; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M11; pmp_quest_eco_coverage.csv:PRO09
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: metrics. PMBOK mapping awaiting SME: Governance / holistic_view;accountable_leadership. 

## S-211: Play CH12-M12 — Ethics and Compliance Gate
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M12 scenario challenge
So that: I can apply BUS02 in a adaptive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M12
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-43, S-210, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M12 briefing in Global Delivery Council multi-project investment When I begin Then A proposed acceleration conflicts with contractual obligations; the objective is to identify mandatory constraints and authorize only defensible options
- AC2: Given the authored decision evidence pack evidence When I use compliance_gate Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted decision evidence pack response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to BUS02; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M12; pmp_quest_eco_coverage.csv:BUS02
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: evidence_review. PMBOK mapping awaiting SME: Governance / quality;sustainability. 

## S-212: Play CH12-M13 — Learning Across Projects
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M13 scenario challenge
So that: I can apply PEO07 in a hybrid project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M13
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-44, S-211, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M13 briefing in Global Delivery Council multi-project investment When I begin Then Completed projects repeat similar avoidable mistakes; the objective is to transfer lessons into reusable methods and organizational memory
- AC2: Given the authored knowledge playbook evidence When I use knowledge_transfer Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted knowledge playbook response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PEO07; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M13; pmp_quest_eco_coverage.csv:PEO07
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: reflection. PMBOK mapping awaiting SME: Resources / empowered_culture;holistic_view. 

## S-213: Play CH12-M14 — The Final Board Decision
Type: Story
As a: PMP candidate studying on a phone
I want: complete the CH12-M14 scenario challenge
So that: I can apply PRO10 in a predictive project context
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-22; CH12-M14
Refs: C-1, C-2, C-3, C-4, C-5
Depends: S-5, S-10, S-11, S-35, S-212, S-32, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-M14 briefing in Global Delivery Council multi-project investment When I begin Then The council must choose which deliverables proceed to operation; the objective is to recommend closure transition or recovery with accountability for value
- AC2: Given the authored executive decision and transition evidence When I use portfolio_board Then criterion-level feedback shows how my submission meets or violates the reviewed rubric for the objective in AC1
- AC3: Given the submitted executive decision and transition response When I receive feedback Then the response, evidence IDs and rubric outcome are saved; the debrief distinguishes decision quality from project consequences. The structured selection is sufficient; written notes are optional and may be blank
- AC4: Given required evidence is missing or a response violates an authored constraint When I submit Then feedback identifies the missing evidence or violated rule and cannot award correctness to a mandatory-gate bypass
- AC5: Given the scenario reaches its debrief When I finish the mini-lesson and practice Then 6 unique reviewed mission items include answer rationales and mappings to PRO10; completion follows the agreed rule
- AC6: Given a completed activity checkpoint When I leave and resume Then my versioned scene, artifact and response are restored without duplicate scoring
- AC7: Given a learner activity is opening When content is loading, empty, or unavailable Then a loading indicator, an explicit empty explanation, or an error with retry is shown respectively, without erasing saved work

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_missions.csv:CH12-M14; pmp_quest_eco_coverage.csv:PRO10
- Delivery package: full five-part mission, all branches, evidence, rubric, mini-lesson and 6 practice items. Source maturity: curriculum_outline_only. Mechanic family: comparison. PMBOK mapping awaiting SME: Governance / value;accountable_leadership. 

# F-30: Assessment content production
Goal: Deliver independently reviewable learner or content-publisher value.

## S-214: Publish DIAG-001 reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take DIAG-001 with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-30; DIAG-001
Refs: C-5, C-7
Depends: S-4, S-16, S-18, S-34

### Acceptance criteria
- AC1: Given the reviewed DIAG-001 form When I start Then exactly 40 unique items are offered for 60 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 13/16/11 and approach counts predictive/adaptive/hybrid are 16/12/12
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:DIAG-001
- Author and SME-review all 40 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-215: Publish CH01-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH01-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R1; F-30; CH01-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-59, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH01-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 3/8/4 and approach counts predictive/adaptive/hybrid are 4/4/7
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R1. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH01-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-216: Publish CH02-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH02-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-30; CH02-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-73, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH02-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 5/6/4 and approach counts predictive/adaptive/hybrid are 6/4/5
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH02-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-217: Publish CH03-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH03-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-30; CH03-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-87, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH03-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 11/2/2 and approach counts predictive/adaptive/hybrid are 4/5/6
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH03-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-218: Publish CH04-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH04-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R2; F-30; CH04-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-101, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH04-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 3/10/2 and approach counts predictive/adaptive/hybrid are 11/2/2
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R2. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH04-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-219: Publish CH05-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH05-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-30; CH05-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-115, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH05-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 3/9/3 and approach counts predictive/adaptive/hybrid are 10/2/3
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH05-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-220: Publish CH06-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH06-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-30; CH06-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-129, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH06-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 2/10/3 and approach counts predictive/adaptive/hybrid are 10/1/4
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH06-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-221: Publish CH07-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH07-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R3; F-30; CH07-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-143, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH07-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 12/2/1 and approach counts predictive/adaptive/hybrid are 3/9/3
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R3. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH07-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-222: Publish CH08-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH08-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-30; CH08-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-157, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH08-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 2/8/5 and approach counts predictive/adaptive/hybrid are 7/4/4
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH08-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-223: Publish CH09-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH09-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-30; CH09-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-171, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH09-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 2/4/9 and approach counts predictive/adaptive/hybrid are 8/3/4
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH09-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-224: Publish CH10-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH10-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R4; F-30; CH10-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-185, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH10-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 6/7/2 and approach counts predictive/adaptive/hybrid are 1/11/3
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R4. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH10-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-225: Publish CH11-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH11-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30; CH11-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-199, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH11-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 3/5/7 and approach counts predictive/adaptive/hybrid are 4/4/7
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH11-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-226: Publish CH12-CHECK reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take CH12-CHECK with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30; CH12-CHECK
Refs: C-5, C-7
Depends: S-4, S-16, S-213, S-17, S-34

### Acceptance criteria
- AC1: Given the reviewed CH12-CHECK form When I start Then exactly 15 unique items are offered for 20 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 5/6/4 and approach counts predictive/adaptive/hybrid are 6/4/5
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:CH12-CHECK
- Author and SME-review all 15 original items; no question text exists in the source. Domain and approach counts are separate margins; validate both on the same items.

## S-227: Review MOCK-01 item pack 1
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-01 pack 1 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Pack IDs MOCK-01-P1. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-228: Review MOCK-01 item pack 2
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-01 pack 2 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Pack IDs MOCK-01-P2. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-229: Review MOCK-01 item pack 3
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-01 pack 3 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Pack IDs MOCK-01-P3. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-230: Review MOCK-01 item pack 4
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-01 pack 4 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Pack IDs MOCK-01-P4. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-231: Review MOCK-01 item pack 5
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-01 pack 5 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Pack IDs MOCK-01-P5. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-232: Review MOCK-01 item pack 6
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-01 pack 6 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Pack IDs MOCK-01-P6. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-233: Assemble MOCK-01 reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take MOCK-01 with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R5; F-30; MOCK-01
Refs: C-5, C-7
Depends: S-4, S-16, S-227, S-228, S-229, S-230, S-231, S-232, S-20, S-34

### Acceptance criteria
- AC1: Given the reviewed MOCK-01 form When I start Then exactly 180 unique items are offered for 240 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 59/74/47 and approach counts predictive/adaptive/hybrid are 72/54/54
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-01
- Assemble from 6 separately reviewed 30-item packs; no new authoring in this assembly story. Domain and approach counts are separate margins; validate both on the same items.

## S-234: Review MOCK-02 item pack 1
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-02 pack 1 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Pack IDs MOCK-02-P1. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-235: Review MOCK-02 item pack 2
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-02 pack 2 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Pack IDs MOCK-02-P2. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-236: Review MOCK-02 item pack 3
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-02 pack 3 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Pack IDs MOCK-02-P3. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-237: Review MOCK-02 item pack 4
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-02 pack 4 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Pack IDs MOCK-02-P4. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-238: Review MOCK-02 item pack 5
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-02 pack 5 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Pack IDs MOCK-02-P5. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-239: Review MOCK-02 item pack 6
Type: Story
As a: PMP subject-matter reviewer
I want: review a 30-item mock content pack
So that: candidates can practice original questions with defensible rationales
Priority: 1
Size: 5
Value area: Business
Tags: pmp-quest; R5; F-30
Refs: C-5, C-7
Depends: S-4, S-21, S-34

### Acceptance criteria
- AC1: Given 30 newly authored items assigned to MOCK-02 pack 6 When the SME reviews Then each has stable IDs, one domain, one approach, answer key, rationale and source locator
- AC2: Given an item duplicates a mission, checkpoint, diagnostic or another mock item When the content check runs Then the duplicate is rejected from the unique-item count
- AC3: Given a flawed answer or missing reference When review is completed Then the item remains draft and the pack cannot be published

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Pack IDs MOCK-02-P6. Target 30 original items; allocate domain/approach cells before authoring to satisfy the assembled form margins.

## S-240: Assemble MOCK-02 reviewed assessment
Type: Story
As a: PMP candidate studying on a phone
I want: take MOCK-02 with its reviewed curriculum coverage
So that: I can assess the intended learning outcomes against a stable form
Priority: 1
Size: 3
Value area: Business
Tags: pmp-quest; R5; F-30; MOCK-02
Refs: C-5, C-7
Depends: S-4, S-16, S-234, S-235, S-236, S-237, S-238, S-239, S-20, S-34

### Acceptance criteria
- AC1: Given the reviewed MOCK-02 form When I start Then exactly 180 unique items are offered for 240 minutes
- AC2: Given the form manifest When coverage is validated Then domain counts People/Process/Business Environment are 59/74/47 and approach counts predictive/adaptive/hybrid are 72/54/54
- AC3: Given a duplicate, unapproved item, missing answer or unsatisfied quota When the form is activated Then publication is blocked with the offending item IDs or counts
- AC4: Given the form is submitted When results are calculated Then the configured scoring rule handles unanswered items and reveals rationales without a certification or pass guarantee

### Notes
- Release: R5. Proposed estimate only; team must estimate after the listed decisions.
- Source: pmp_quest_assessment_blueprint.csv:MOCK-02
- Assemble from 6 separately reviewed 30-item packs; no new authoring in this assembly story. Domain and approach counts are separate margins; validate both on the same items.
