// Original, unreviewed Phoenix development scenarios. Source objectives: data/quest/source.
import type { QuestMission } from './model';
import { phoenix } from './fixture.ts';

const authored: QuestMission[] = [
  {
    "id": "CH01-M02",
    "version": "phoenix-m02-preview-1",
    "title": "Promises and Vision",
    "task": "PEO01",
    "status": "development_fixture",
    "objective": "Reconcile customer value and team objectives into a shared mission statement",
    "artifact": "vision canvas",
    "speaker": "Priya",
    "quote": "A launch date is not a shared definition of success.",
    "briefing": "Maya calls success “launching on time.” Priya wants Northstar to use Phoenix to make better operating decisions. Alex worries that another vague promise will become an unbounded commitment. Bring the three perspectives into one measurable vision before planning the next increment.",
    "prompt": "Which shared vision should you take back to the team?",
    "choices": [
      {
        "id": "balanced",
        "title": "Agree a measurable pilot vision",
        "text": "Align the sponsor, customer and delivery team on a safe pilot, bottleneck-analysis outcomes, agreed measures and explicit constraints.",
        "quality": "Defensible in this context",
        "rationale": "A shared purpose connects the commercial objective to customer outcomes and feasible work. Measures still need customer agreement; the project manager should not invent targets or promise unlimited scope.",
        "metrics": "Alignment takes a conversation now; the team gains a common basis for prioritizing work.",
        "criteria": [
          "Connects business and customer outcomes",
          "Defines how success will be measured",
          "Retains feasible scope and security constraints"
        ],
        "authorized": false
      },
      {
        "id": "date",
        "title": "Use the date as the vision",
        "text": "Declare the launch successful if anything is online in six weeks.",
        "quality": "Needs revision",
        "rationale": "A date is a constraint or milestone, not sufficient evidence of value. Publishing something that customers cannot use safely does not reconcile these perspectives.",
        "metrics": "The message is simple, but disagreements about value persist.",
        "criteria": [
          "Keeps the target date visible",
          "Omits customer outcomes and acceptance conditions"
        ],
        "authorized": false
      },
      {
        "id": "everything",
        "title": "Promise every stakeholder their own vision",
        "text": "Tell Maya the date is certain, Priya every dashboard is included and Alex scope will never change.",
        "quality": "Needs revision",
        "rationale": "Conflicting guarantees postpone the disagreement rather than creating shared purpose. They also create commitments unsupported by the evidence.",
        "metrics": "Immediate approval may rise; later trust and feasibility suffer.",
        "criteria": [
          "Avoids the alignment conversation",
          "Creates incompatible commitments"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Start with purpose",
        "text": "Ask what change the project is intended to create for the customer and organization. Deliverables support that change; completing a deliverable alone does not prove the outcome."
      },
      {
        "title": "Make the vision usable",
        "text": "Agree measures, owners, constraints and a feedback cadence. Use them to explain trade-offs and revisit assumptions when evidence changes."
      }
    ],
    "items": [
      {
        "id": "PHX-M02-Q01",
        "task": "PEO01",
        "q": "Which Phoenix statement describes an outcome rather than an output?",
        "options": [
          "A dashboard is deployed",
          "Three charts are added",
          "A release note is written",
          "Analysts identify operational bottlenecks faster"
        ],
        "correct": 3,
        "rationale": "An outcome describes the change experienced by users. Dashboards, charts and documents are outputs that may support it."
      },
      {
        "id": "PHX-M02-Q02",
        "task": "PEO01",
        "q": "Who should shape the shared Phoenix vision?",
        "options": [
          "Sponsor, affected customer representatives and the delivery team",
          "Only the sponsor",
          "Only the project manager",
          "Only the integration vendor"
        ],
        "correct": 0,
        "rationale": "Shared purpose requires affected perspectives and feasible delivery input, rather than a unilateral statement."
      },
      {
        "id": "PHX-M02-Q03",
        "task": "PEO01",
        "q": "What should happen before publishing a numeric pilot target?",
        "options": [
          "Choose an impressive number",
          "Agree a baseline, target and measurement method with accountable stakeholders",
          "Copy a competitor’s target without context",
          "Treat the date as every performance measure"
        ],
        "correct": 1,
        "rationale": "Targets require context and agreement. An invented metric is not evidence of stakeholder alignment."
      },
      {
        "id": "PHX-M02-Q04",
        "task": "PEO01",
        "q": "Two stakeholders define launch success differently. What should you do first?",
        "options": [
          "Promise both definitions independently",
          "Ignore the customer because the sponsor funds the work",
          "Surface their intended outcomes and negotiate shared criteria",
          "Wait until launch to discuss it"
        ],
        "correct": 2,
        "rationale": "Making the disagreement explicit allows a shared definition of value and constraints to emerge."
      },
      {
        "id": "PHX-M02-Q05",
        "task": "PEO01",
        "q": "What role does the six-week date play in the vision?",
        "options": [
          "Proof that all benefits will be achieved",
          "Permission to waive security review",
          "A replacement for acceptance criteria",
          "A delivery constraint considered alongside value and safety"
        ],
        "correct": 3,
        "rationale": "The date constrains planning; it does not independently establish benefits or override mandatory gates."
      },
      {
        "id": "PHX-M02-Q06",
        "task": "PEO01",
        "q": "When should the team revisit its shared vision?",
        "options": [
          "When new evidence materially changes value assumptions or constraints",
          "Never after kickoff",
          "Only after the project has closed",
          "Whenever one person wants to add a feature"
        ],
        "correct": 0,
        "rationale": "A shared vision guides learning and can be revisited through agreed governance when evidence changes."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M02-E1",
        "title": "Sponsor brief",
        "kind": "Business intent",
        "text": "Maya needs a credible pilot in six weeks to test a commercial opportunity. A public launch date alone will not demonstrate value. Funding supports the agreed pilot scope, not every requested feature."
      },
      {
        "id": "PHX-M02-E2",
        "title": "Customer discovery",
        "kind": "Outcome evidence",
        "text": "Northstar wants analysts to identify daily bottlenecks faster. The pilot can measure time to identify a bottleneck and observe actual usage. The team needs feasible acceptance criteria, security gates and a feedback cadence. Baselines and target values must be agreed with the customer rather than invented."
      }
    ]
  },
  {
    "id": "CH01-M03",
    "version": "phoenix-m03-preview-1",
    "title": "The Unexpected Request",
    "task": "BUS03",
    "status": "development_fixture",
    "objective": "Evaluate a late dashboard request through the agreed decision rights",
    "artifact": "change request",
    "speaker": "Maya",
    "quote": "Northstar wants a live dashboard before launch; can you promise it?",
    "briefing": "Northstar asks for a live dashboard outside the approved release. Maya wants an answer today. The request may improve adoption, but Engineering has not estimated integration, testing or support work. Decide how to respond without confusing customer engagement with authority to promise a controlled change.",
    "prompt": "What response should be recorded in the change request?",
    "choices": [
      {
        "id": "promise",
        "title": "Promise now",
        "text": "Commit to the dashboard today and work out the consequences later.",
        "quality": "Needs revision",
        "rationale": "The customer’s interest establishes a reason to assess the change, not evidence of capacity or delegated authority. A promise now creates an unsupported commitment.",
        "metrics": "Customer enthusiasm may rise briefly; the release forecast becomes less credible.",
        "criteria": [
          "Recognizes customer demand",
          "Skips impact assessment and authorization"
        ],
        "authorized": false
      },
      {
        "id": "balanced",
        "title": "Assess value, impacts and approval",
        "text": "Acknowledge the request, assess benefits and scope/cost/schedule/security impacts, compare options and seek the designated decision.",
        "quality": "Defensible in this context",
        "rationale": "The request crosses controlled scope. Evidence-based assessment and the agreed authority support a decision; this does not mean every local backlog reorder needs an external change board.",
        "metrics": "The answer takes analysis; an agreed decision can preserve trust and feasible commitments.",
        "criteria": [
          "Clarifies intended value",
          "Assesses delivery and security impacts",
          "Uses the correct decision rights"
        ],
        "authorized": false
      },
      {
        "id": "reject",
        "title": "Reject without analysis",
        "text": "Tell Northstar that no request can ever be accepted after planning.",
        "quality": "Needs revision",
        "rationale": "Blanket rejection ignores possible value and feasible alternatives. Controlled change evaluates requests rather than forbidding learning.",
        "metrics": "The baseline stays simple, but the project may miss worthwhile value.",
        "criteria": [
          "Avoids immediate scope growth",
          "Does not evaluate the business need"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Request is not approval",
        "text": "Capture the problem, intended value and change boundary before discussing a delivery promise. Assess alternatives such as an experiment or a later increment."
      },
      {
        "title": "Match the approval to the boundary",
        "text": "Use delegated authority for local decisions. Route controlled commitments to the agreed decision maker and update affected records after a decision."
      }
    ],
    "items": [
      {
        "id": "PHX-M03-Q01",
        "task": "BUS03",
        "q": "Why does this request require the designated approval route?",
        "options": [
          "It changes approved release scope",
          "It mentions a dashboard",
          "Every backlog reorder requires sponsor approval",
          "The customer is important"
        ],
        "correct": 0,
        "rationale": "The relevant trigger is the controlled commitment, not the feature name or customer influence."
      },
      {
        "id": "PHX-M03-Q02",
        "task": "BUS03",
        "q": "What is missing before Maya can make a credible promise?",
        "options": [
          "A more enthusiastic presentation",
          "Impact and value analysis with an authorized decision",
          "A new team slogan",
          "A promise from the project manager alone"
        ],
        "correct": 1,
        "rationale": "The evidence lacks estimates and security implications, and authority remains constrained."
      },
      {
        "id": "PHX-M03-Q03",
        "task": "BUS03",
        "q": "Which request can Priya handle within her stated delegation?",
        "options": [
          "Waiving contractual scope limits",
          "Removing a mandatory security criterion",
          "Reordering existing backlog work within approved scope and budget",
          "Changing the committed launch date alone"
        ],
        "correct": 2,
        "rationale": "The register delegates local prioritization but reserves controlled commitments and gates."
      },
      {
        "id": "PHX-M03-Q04",
        "task": "BUS03",
        "q": "How should you initially acknowledge Northstar’s request?",
        "options": [
          "Guarantee it before analysis",
          "Reject it because all changes are wrong",
          "Silently add it to the sprint",
          "Confirm the need and explain the assessment and decision process"
        ],
        "correct": 3,
        "rationale": "Acknowledgment can be prompt without pretending assessment or approval has already happened."
      },
      {
        "id": "PHX-M03-Q05",
        "task": "BUS03",
        "q": "A change is approved. What should happen next?",
        "options": [
          "Update affected plans, scope records and communications before coordinating execution",
          "Keep using the old baseline silently",
          "Assume approval completes the implementation",
          "Hide the decision from QA"
        ],
        "correct": 0,
        "rationale": "Approved changes need integration into the records and work that govern delivery."
      },
      {
        "id": "PHX-M03-Q06",
        "task": "BUS03",
        "q": "Why compare a limited experiment or later increment?",
        "options": [
          "They automatically bypass governance",
          "They may deliver learning or value with different impacts",
          "They guarantee no testing is needed",
          "They make customer consultation unnecessary"
        ],
        "correct": 1,
        "rationale": "Alternatives expose trade-offs; they still need appropriate authority and acceptance evidence."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M03-E1",
        "title": "Change request",
        "kind": "Requested value",
        "text": "Northstar proposes a real-time dashboard for the pilot. Expected value is faster intervention, but the request changes approved release scope. No estimate, security impact review or benefit validation is attached."
      },
      {
        "id": "PHX-M03-E2",
        "title": "Decision-rights register",
        "kind": "Authority boundary",
        "text": "Priya can reorder work within approved scope and budget. Contractual scope, cost and milestone changes require documented impact analysis and the designated change authority. The project manager can coordinate assessment, not unilaterally approve new commitments."
      }
    ]
  },
  {
    "id": "CH01-M04",
    "version": "phoenix-m04-preview-1",
    "title": "Sponsor Expectations",
    "task": "PEO04",
    "status": "development_fixture",
    "objective": "Map interested parties and tailor a sponsor conversation",
    "artifact": "stakeholder register",
    "speaker": "Maya",
    "quote": "I need a promise I can explain to the steering committee.",
    "briefing": "Maya wants a clear launch message. Alex has unresolved integration dependencies, Jordan owns quality evidence, and Northstar analysts will experience the workflow changes. Map their information needs before deciding how to talk to the sponsor.",
    "prompt": "How should you tailor the sponsor conversation?",
    "choices": [
      {
        "id": "balanced",
        "title": "Map needs and communicate a conditional forecast",
        "text": "Give Maya a concise evidence-based outlook, open decisions and escalation requests. Engage technical owners on detail and analysts on adoption.",
        "quality": "Defensible in this context",
        "rationale": "Engagement depends on impact, influence and information needs. A conditional forecast can be clear without inventing certainty or excluding affected users.",
        "metrics": "Targeted conversations take coordination; decisions and feedback become more useful.",
        "criteria": [
          "Includes affected users",
          "Tailors detail to the audience",
          "Explains uncertainty and decision ownership"
        ],
        "authorized": false
      },
      {
        "id": "uniform",
        "title": "Send everyone the same technical dump",
        "text": "Forward the full technical log to every stakeholder and assume they will infer the decision.",
        "quality": "Needs revision",
        "rationale": "Access to data is not the same as usable communication. Audiences need different detail, channels and opportunities for feedback.",
        "metrics": "Distribution is easy; important decisions may remain buried.",
        "criteria": [
          "Shares technical detail",
          "Does not tailor the message"
        ],
        "authorized": false
      },
      {
        "id": "promise",
        "title": "Promise green status to the sponsor",
        "text": "Tell Maya the date is certain and exclude analysts because they have no approval authority.",
        "quality": "Needs revision",
        "rationale": "A sponsor’s influence does not justify unsupported certainty. Users with little formal authority may still be highly affected and essential to value realization.",
        "metrics": "The meeting may be comfortable; adoption and trust are exposed.",
        "criteria": [
          "Prioritizes sponsor reassurance",
          "Omits affected users and uncertainty"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Influence and impact are different",
        "text": "Map decision authority as well as who experiences the change. Revisit the register as circumstances change."
      },
      {
        "title": "Close the feedback loop",
        "text": "Choose channels and detail for the audience, confirm understanding and record decisions or unresolved questions."
      }
    ],
    "items": [
      {
        "id": "PHX-M04-Q01",
        "task": "PEO04",
        "q": "Which stakeholder needs a concise decision-oriented forecast?",
        "options": [
          "Only the integration vendor",
          "Maya, the sponsor",
          "No stakeholder until the date is certain",
          "Only the project manager"
        ],
        "correct": 1,
        "rationale": "The sponsor needs forecast uncertainty, decisions and escalation requests to act."
      },
      {
        "id": "PHX-M04-Q02",
        "task": "PEO04",
        "q": "Why include Northstar analysts in engagement planning?",
        "options": [
          "They automatically approve funding",
          "Their feedback replaces all security testing",
          "They are affected users and provide adoption evidence",
          "They can authorize every scope change"
        ],
        "correct": 2,
        "rationale": "Stakeholder impact and useful knowledge matter even without formal approval authority."
      },
      {
        "id": "PHX-M04-Q03",
        "task": "PEO04",
        "q": "Which information best fits Jordan’s working discussion?",
        "options": [
          "Only the investor headline",
          "A guarantee with no test data",
          "An unrelated procurement list",
          "Detailed quality criteria and release evidence"
        ],
        "correct": 3,
        "rationale": "Jordan’s role needs evidence sufficient to evaluate quality and mandatory conditions."
      },
      {
        "id": "PHX-M04-Q04",
        "task": "PEO04",
        "q": "How can a sponsor forecast be clear while uncertain?",
        "options": [
          "State the current outlook, assumptions, exposure and decisions needed",
          "Remove all uncertainty from the slide",
          "Use green status regardless of evidence",
          "Provide every log entry without explanation"
        ],
        "correct": 0,
        "rationale": "Clarity means explaining evidence and action, not pretending the outcome is guaranteed."
      },
      {
        "id": "PHX-M04-Q05",
        "task": "PEO04",
        "q": "What confirms that communication worked?",
        "options": [
          "The email was sent",
          "Stakeholder understanding and feedback are checked",
          "The attachment was large",
          "Every audience received identical slides"
        ],
        "correct": 1,
        "rationale": "Communication includes receipt and understanding, not only transmission."
      },
      {
        "id": "PHX-M04-Q06",
        "task": "PEO04",
        "q": "When should the stakeholder register be revisited?",
        "options": [
          "Only at closure",
          "Never after kickoff",
          "When impact, influence or information needs change",
          "Only if a stakeholder complains publicly"
        ],
        "correct": 2,
        "rationale": "Stakeholder relationships and needs evolve throughout delivery."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M04-E1",
        "title": "Stakeholder register",
        "kind": "Roles and influence",
        "text": "Maya funds the pilot and leads escalation. Alex coordinates technical dependencies. Jordan validates release quality and security evidence. Northstar analysts use the product and can reveal adoption barriers. Low formal authority does not mean low impact."
      },
      {
        "id": "PHX-M04-E2",
        "title": "Communication brief",
        "kind": "Decision needs",
        "text": "Maya needs a concise forecast with uncertainty, decisions and owners. Alex and Jordan need detailed dependency and evidence discussions. Analysts need accessible demonstrations, feedback channels and notice of changes. No one has verified an unconditional launch promise."
      }
    ],
    "activities": [
      {
        "id": "sponsor-message",
        "prompt": "Maya’s primary communication need",
        "options": [
          "Detailed test traces only",
          "Forecast, decisions and escalation requests",
          "No update until all uncertainty disappears"
        ],
        "correct": 1,
        "rationale": "A sponsor needs enough evidence to make or escalate decisions."
      },
      {
        "id": "user-engagement",
        "prompt": "Northstar analysts’ engagement",
        "options": [
          "Ignore: low formal authority",
          "Use demonstrations and accessible feedback channels",
          "Ask them to approve security waivers"
        ],
        "correct": 1,
        "rationale": "Affected users contribute adoption and workflow evidence even without approval authority."
      }
    ]
  },
  {
    "id": "CH01-M05",
    "version": "phoenix-m05-preview-1",
    "title": "The Hidden Dependency",
    "task": "PRO08",
    "status": "development_fixture",
    "objective": "Calculate float and test schedule recovery options with vendor dependency",
    "artifact": "dependency network",
    "speaker": "Alex",
    "quote": "The authentication package may arrive late. What does the network actually say?",
    "briefing": "A vendor forecasts an authentication handoff later than planned. Before adding people, inspect the dependency network. Compare two paths to the release milestone, calculate float and consider whether a recovery option changes the controlling path.",
    "prompt": "Which recovery recommendation follows from the network?",
    "choices": [
      {
        "id": "dashboard",
        "title": "Accelerate dashboard work",
        "text": "Spend the recovery budget shortening dashboard build by two days.",
        "quality": "Needs revision",
        "rationale": "Path B was already shorter. Shortening it does not reduce the delayed authentication path, so the release still forecasts day 14.",
        "metrics": "More money is spent without recovering the controlling path.",
        "criteria": [
          "Shortens non-controlling work",
          "Does not address the vendor dependency"
        ],
        "authorized": false
      },
      {
        "id": "balanced",
        "title": "Verify float and target the controlling path",
        "text": "Show the day-14 forecast, assess a feasible two-day authentication recovery and its cost, then seek authorization without cutting security tests.",
        "quality": "Defensible in this context",
        "rationale": "Path A is 12 days originally and 14 after the delay; Path B is 9. Original float on B is 3 days. Recovery must address the controlling path or an approved target change.",
        "metrics": "A feasible vendor recovery could restore day 12; it is not yet guaranteed or authorized.",
        "criteria": [
          "Calculates both paths and float",
          "Targets the controlling dependency",
          "Protects mandatory testing and approval"
        ],
        "authorized": false
      },
      {
        "id": "wait",
        "title": "Wait for the milestone to fail",
        "text": "Keep the day-12 promise and investigate only if the vendor actually misses it.",
        "quality": "Needs revision",
        "rationale": "A credible forecast already exposes the schedule. Waiting hides the need to evaluate recovery and communicate uncertainty.",
        "metrics": "Immediate effort is deferred; useful recovery time is lost.",
        "criteria": [
          "Avoids immediate analysis",
          "Ignores current forecast evidence"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Calculate paths before acting",
        "text": "For this simple network, path duration is the sum of dependent durations. The longest path controls the finish. Float on the shorter path is the difference when both feed the same milestone."
      },
      {
        "title": "A recovery idea is not a revised baseline",
        "text": "Validate feasibility, resource and cost effects, quality constraints and approval. Distinguish the current forecast from an approved baseline change."
      }
    ],
    "items": [
      {
        "id": "PHX-M05-Q01",
        "task": "PRO08",
        "q": "What is the original duration of Path A?",
        "options": [
          "9 working days",
          "5 working days",
          "12 working days",
          "14 working days"
        ],
        "correct": 2,
        "rationale": "Authentication 5 + integration 4 + security 3 = 12 days."
      },
      {
        "id": "PHX-M05-Q02",
        "task": "PRO08",
        "q": "What is Path B’s original float against the day-12 release?",
        "options": [
          "0 working days",
          "6 working days",
          "12 working days",
          "3 working days"
        ],
        "correct": 3,
        "rationale": "Path B takes 6 + 3 = 9 days, leaving 12 − 9 = 3 days in this network."
      },
      {
        "id": "PHX-M05-Q03",
        "task": "PRO08",
        "q": "What finish does the two-day authentication delay forecast without recovery?",
        "options": [
          "Day 14",
          "Day 10",
          "Day 12",
          "Day 9"
        ],
        "correct": 0,
        "rationale": "The controlling path becomes 7 + 4 + 3 = 14 days."
      },
      {
        "id": "PHX-M05-Q04",
        "task": "PRO08",
        "q": "Why does shortening dashboard build by two days fail to recover release?",
        "options": [
          "Shorter activities always delay delivery",
          "It does not shorten the controlling authentication path",
          "The dashboard becomes the controlling path",
          "All acceleration is forbidden"
        ],
        "correct": 1,
        "rationale": "Changing a non-controlling path does not reduce the longest path in this exercise."
      },
      {
        "id": "PHX-M05-Q05",
        "task": "PRO08",
        "q": "What must be checked before accepting vendor acceleration?",
        "options": [
          "Only whether Maya likes it",
          "Whether security tests can be silently removed",
          "Feasibility, costs, quality impacts and the appropriate authorization",
          "Whether the old baseline can be relabelled as a forecast"
        ],
        "correct": 2,
        "rationale": "Recovery needs evidence and authority; a proposed option is not an approved commitment."
      },
      {
        "id": "PHX-M05-Q06",
        "task": "PRO08",
        "q": "How should day 14 be described before a recovery is approved?",
        "options": [
          "An automatically approved baseline change",
          "Proof that the day-12 target was never agreed",
          "A certainty regardless of future evidence",
          "The current forecast, distinct from the baseline and target"
        ],
        "correct": 3,
        "rationale": "A forecast reports current expectations. Changes to commitments follow the agreed governance."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M05-E1",
        "title": "Dependency network",
        "kind": "Working-day exercise",
        "text": "Both paths start on day 0 and must finish before release. Path A: authentication 5 days → integration 4 days → security testing 3 days. Path B: dashboard build 6 days → usability testing 3 days. Activities have no additional resource constraints in this simplified exercise. The release target is day 12."
      },
      {
        "id": "PHX-M05-E2",
        "title": "Vendor forecast and recovery options",
        "kind": "Schedule evidence",
        "text": "Authentication is now forecast to take 7 days, adding 2 days to Path A. Reducing dashboard build by 2 days costs extra but does not shorten Path A. A 2-day acceleration of authentication might restore the target, but needs vendor feasibility, cost approval and preserved security testing."
      }
    ],
    "activities": [
      {
        "id": "path-a",
        "prompt": "Original Path A: 5 + 4 + 3 days",
        "options": [
          "9 days",
          "12 days",
          "14 days"
        ],
        "correct": 1,
        "rationale": "Adding the sequential durations gives 12 working days."
      },
      {
        "id": "float-b",
        "prompt": "Original Path B float against day 12",
        "options": [
          "0 days",
          "2 days",
          "3 days"
        ],
        "correct": 2,
        "rationale": "Path B is 9 days; 12 − 9 = 3 days of float."
      },
      {
        "id": "forecast",
        "prompt": "Delayed authentication path: 7 + 4 + 3 days",
        "options": [
          "12 days",
          "14 days",
          "16 days"
        ],
        "correct": 1,
        "rationale": "The delayed controlling path forecasts release on day 14."
      }
    ]
  },
  {
    "id": "CH01-M06",
    "version": "phoenix-m06-preview-1",
    "title": "An Issue or a Risk?",
    "task": "BUS05",
    "status": "development_fixture",
    "objective": "Classify uncertainties and select risk owners and triggers",
    "artifact": "risk register",
    "speaker": "Sam",
    "quote": "One vendor warning is uncertain. Another dependency has already failed.",
    "briefing": "The team uses “risk” for every uncomfortable fact. Separate uncertain future events from active problems, then assign accountable owners and actionable triggers. A list without a response plan will not help Phoenix adapt.",
    "prompt": "How should you update the risk register and linked issue log?",
    "choices": [
      {
        "id": "balanced",
        "title": "Separate the records and define owners and triggers",
        "text": "Record possible vendor delay as a risk with Alex, a Wednesday trigger and response options. Track the unavailable environment as an active issue and investigate the rumor.",
        "quality": "Defensible in this context",
        "rationale": "Risks concern uncertainty; the environment outage already exists. Naming owners and observable triggers makes follow-up actionable without treating unverified information as fact.",
        "metrics": "The team gains targeted action and earlier warnings; uncertainty is not eliminated.",
        "criteria": [
          "Distinguishes risk from active issue",
          "Assigns accountable owners",
          "Uses observable triggers and investigates assumptions"
        ],
        "authorized": false
      },
      {
        "id": "all-risks",
        "title": "Label everything a future risk",
        "text": "Put the outage, vendor warning and rumor in one risk list with no owners.",
        "quality": "Needs revision",
        "rationale": "The environment is already blocking work and needs issue resolution. Ownerless risks and rumors treated as facts do not support response.",
        "metrics": "The register grows, but current blocked work remains unresolved.",
        "criteria": [
          "Captures concerns",
          "Misses timing, ownership and action"
        ],
        "authorized": false
      },
      {
        "id": "certain",
        "title": "Guarantee the vendor date",
        "text": "Delete the warning because the handoff has not failed yet.",
        "quality": "Needs revision",
        "rationale": "An uncertain event can still warrant risk assessment and planning. Lack of occurrence is not a reason to ignore a credible threat.",
        "metrics": "The report looks cleaner; the team loses preparation time.",
        "criteria": [
          "Removes visible uncertainty",
          "Does not prepare a response"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Classify by whether it has happened",
        "text": "A possible future event is a risk. A condition affecting work now is an issue. Link them when a risk materializes."
      },
      {
        "title": "Make response operational",
        "text": "Record an owner, response options, an observable trigger and review timing. Reassess exposure and residual risk as evidence changes."
      }
    ],
    "items": [
      {
        "id": "PHX-M06-Q01",
        "task": "BUS05",
        "q": "How should the possible future vendor slip be classified?",
        "options": [
          "An already missed handoff",
          "A verified regulatory violation",
          "A completed response",
          "A risk to assess"
        ],
        "correct": 3,
        "rationale": "The committed date has not been missed; the delay remains uncertain."
      },
      {
        "id": "PHX-M06-Q02",
        "task": "BUS05",
        "q": "How should the currently unavailable test environment be classified?",
        "options": [
          "An active issue requiring resolution",
          "Only a future risk",
          "A benefit already achieved",
          "An approved scope change"
        ],
        "correct": 0,
        "rationale": "The blockage exists now, so it needs an issue owner and action."
      },
      {
        "id": "PHX-M06-Q03",
        "task": "BUS05",
        "q": "Which is an observable risk trigger?",
        "options": [
          "The team feels uneasy",
          "No vendor evidence build by Wednesday",
          "The sponsor wants good news",
          "A general desire to be careful"
        ],
        "correct": 1,
        "rationale": "A trigger should be observable and connected to a planned response."
      },
      {
        "id": "PHX-M06-Q04",
        "task": "BUS05",
        "q": "What is the best treatment of the restriction rumor?",
        "options": [
          "Treat it immediately as established law",
          "Ignore all external information",
          "Investigate with an owner and record the assumption",
          "Publish a compliance guarantee"
        ],
        "correct": 2,
        "rationale": "Unverified information needs investigation rather than certainty in either direction."
      },
      {
        "id": "PHX-M06-Q05",
        "task": "BUS05",
        "q": "Who should own vendor risk coordination in this scenario?",
        "options": [
          "Nobody until the date is missed",
          "Every stakeholder equally with no accountable person",
          "The software automatically",
          "Alex, with clear follow-up responsibility"
        ],
        "correct": 3,
        "rationale": "The evidence gives Alex the coordination role; the record needs an accountable owner."
      },
      {
        "id": "PHX-M06-Q06",
        "task": "BUS05",
        "q": "What happens if the vendor delay actually occurs?",
        "options": [
          "Open or update the linked issue and execute the agreed response",
          "Keep describing it only as a future possibility",
          "Erase its history",
          "Assume a risk entry resolves it"
        ],
        "correct": 0,
        "rationale": "Materialization changes the action needed; preserving the link supports learning and accountability."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M06-E1",
        "title": "Risk and issue notes",
        "kind": "Classification evidence",
        "text": "A vendor says a future authentication handoff might slip by two days; it has not missed the committed date. Separately, the test environment is unavailable now and testers are blocked. There is also an unverified rumor of a future data-export restriction."
      },
      {
        "id": "PHX-M06-E2",
        "title": "Response planning notes",
        "kind": "Owners and triggers",
        "text": "Alex can coordinate vendor schedule responses; the environment lead can restore the blocked test environment. A risk trigger must be observable, such as no vendor evidence build by Wednesday. Rumors require investigation and a named follow-up owner, not automatic treatment as established facts."
      }
    ],
    "activities": [
      {
        "id": "vendor",
        "prompt": "Vendor says a future handoff might slip",
        "options": [
          "Risk",
          "Active issue",
          "Verified fact of a missed date"
        ],
        "correct": 0,
        "rationale": "The future event has not happened yet."
      },
      {
        "id": "environment",
        "prompt": "Testing is blocked by an unavailable environment now",
        "options": [
          "Risk only",
          "Active issue",
          "Completed work"
        ],
        "correct": 1,
        "rationale": "The condition already affects delivery."
      },
      {
        "id": "trigger",
        "prompt": "Choose the actionable vendor trigger",
        "options": [
          "Someone feels worried",
          "No evidence build by Wednesday",
          "Hope the vendor finishes"
        ],
        "correct": 1,
        "rationale": "An observable trigger supports timely response."
      }
    ]
  },
  {
    "id": "CH01-M07",
    "version": "phoenix-m07-preview-1",
    "title": "The Team Fracture",
    "task": "PEO02",
    "status": "development_fixture",
    "objective": "Facilitate a conflict resolution using evidence and shared ground rules",
    "artifact": "team agreement",
    "speaker": "Jordan",
    "quote": "Engineering wants to reduce critical test coverage. We cannot accept that risk.",
    "briefing": "Alex proposes reducing testing to recover time. Jordan sees unresolved exposure, and the discussion has become personal. Facilitate a decision that addresses the disagreement without taking sides or treating mandatory checks as bargaining chips.",
    "prompt": "How should you facilitate the next conversation?",
    "choices": [
      {
        "id": "side",
        "title": "Take Engineering’s side",
        "text": "Tell QA to accept the cut because schedule pressure is more important.",
        "quality": "Mandatory constraint violated",
        "rationale": "This ignores the distinction between adaptable checks and mandatory release criteria. Taking a side before examining evidence can deepen the conflict and bypass required controls.",
        "metrics": "The discussion ends quickly; safety and trust deteriorate.",
        "criteria": [
          "Makes a quick decision",
          "Does not examine the underlying disagreement"
        ],
        "authorized": false
      },
      {
        "id": "balanced",
        "title": "Facilitate a fact-based agreement",
        "text": "Restate the shared objective, hear both concerns, separate mandatory checks from adaptable testing and agree owners for options and unresolved decisions.",
        "quality": "Defensible in this context",
        "rationale": "The team can negotiate test strategy within constraints. Facilitating direct discussion addresses the cause while keeping mandatory criteria outside unsupported trade-offs.",
        "metrics": "A workable agreement may take time, but it reduces rework and preserves professional trust.",
        "criteria": [
          "Uses shared ground rules",
          "Distinguishes mandatory and adaptable work",
          "Escalates only unresolved authority or constraints"
        ],
        "authorized": false
      },
      {
        "id": "escalate",
        "title": "Escalate every disagreement immediately",
        "text": "Send the conflict to the sponsor without hearing either technical view.",
        "quality": "Needs revision",
        "rationale": "Escalation may be needed for decisions outside team authority, but using it as the first response to every disagreement prevents constructive diagnosis and ownership.",
        "metrics": "The sponsor inherits a dispute without the evidence needed to decide.",
        "criteria": [
          "Recognizes an escalation path",
          "Skips direct diagnosis and facilitation"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Diagnose before choosing a technique",
        "text": "Clarify the issue, interests, evidence and constraints. A disagreement over facts may need different help from a dispute over authority or behavior."
      },
      {
        "title": "Facilitate within boundaries",
        "text": "Use respectful ground rules and shared objectives. Resolve what the team can decide; escalate unresolved decisions with evidence and clear requests."
      }
    ],
    "items": [
      {
        "id": "PHX-M07-Q01",
        "task": "PEO02",
        "q": "What should happen before choosing a side in this conflict?",
        "options": [
          "Hear the concerns and clarify evidence and constraints",
          "Tell the louder group to proceed",
          "Promise the date will be met",
          "Ignore the disagreement"
        ],
        "correct": 0,
        "rationale": "Diagnosis reveals that mandatory security checks and adaptable exploratory checks are being conflated."
      },
      {
        "id": "PHX-M07-Q02",
        "task": "PEO02",
        "q": "Which ground rule supports constructive discussion?",
        "options": [
          "Avoid all disagreement",
          "Challenge ideas and evidence rather than people",
          "Let seniority decide every technical fact",
          "Allow personal criticism when the deadline is close"
        ],
        "correct": 1,
        "rationale": "Respectful discussion makes it easier to investigate causes and alternatives."
      },
      {
        "id": "PHX-M07-Q03",
        "task": "PEO02",
        "q": "Which testing decision cannot be negotiated away solely to recover time?",
        "options": [
          "Reprioritizing optional usability exploration with analysis",
          "Changing a meeting time",
          "Removing mandatory cross-customer access acceptance checks",
          "Using a different evidence review format"
        ],
        "correct": 2,
        "rationale": "Mandatory release criteria remain constraints; they are not ordinary schedule trade-offs."
      },
      {
        "id": "PHX-M07-Q04",
        "task": "PEO02",
        "q": "When is escalation appropriate?",
        "options": [
          "For every difference of opinion before discussion",
          "Only after deployment",
          "Never under any circumstance",
          "When an unresolved decision exceeds team authority or concerns a mandatory constraint"
        ],
        "correct": 3,
        "rationale": "Escalate a defined decision with evidence, rather than outsourcing every conversation."
      },
      {
        "id": "PHX-M07-Q05",
        "task": "PEO02",
        "q": "What should a useful team agreement retain?",
        "options": [
          "The decision, rationale, owners and follow-up",
          "Only who won the argument",
          "A promise nobody will ever disagree",
          "A private instruction with no record"
        ],
        "correct": 0,
        "rationale": "An agreement is actionable when responsibilities and follow-up are explicit."
      },
      {
        "id": "PHX-M07-Q06",
        "task": "PEO02",
        "q": "Why begin with a shared objective?",
        "options": [
          "It makes evidence unnecessary",
          "It gives both groups a common basis for evaluating alternatives",
          "It guarantees everyone will prefer the same technique",
          "It transfers release authority to the facilitator"
        ],
        "correct": 1,
        "rationale": "Shared purpose helps collaboration while evidence and authority still determine valid options."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M07-E1",
        "title": "Team agreement",
        "kind": "Working norms",
        "text": "The team agreed to discuss evidence, listen without interruption and challenge ideas rather than people. Technical disagreements should first be addressed with the people involved. Unresolved authority questions or mandatory safety constraints need the designated escalation route."
      },
      {
        "id": "PHX-M07-E2",
        "title": "Testing disagreement",
        "kind": "Facts to examine",
        "text": "Engineering estimates that exploratory usability checks could be reprioritized. Jordan identifies cross-customer access checks as mandatory release criteria. The two categories have been discussed as though they were interchangeable. No one has yet compared their actual risk or acceptance obligations."
      }
    ]
  },
  {
    "id": "CH01-M08",
    "version": "phoenix-m08-preview-1",
    "title": "The Status Nobody Wants",
    "task": "PRO09",
    "status": "development_fixture",
    "objective": "Build an honest evidence-based project status update",
    "artifact": "status report",
    "speaker": "Maya",
    "quote": "Is Phoenix green, amber or red—and what do you need me to decide?",
    "briefing": "The summary slide is green because most tasks have started. The detailed records show a threatened date and incomplete security evidence. Reconcile the measures and construct a status update that helps leadership act.",
    "prompt": "Which status report should you send?",
    "choices": [
      {
        "id": "balanced",
        "title": "Report red with evidence and decisions",
        "text": "Show 55 of 100 items complete, a day-14 forecast against day 12, incomplete security evidence, recovery options and the decisions and owners needed.",
        "quality": "Defensible in this context",
        "rationale": "The agreed threshold is met for red. The report distinguishes work started from accepted completion and identifies action without pretending the baseline has already changed.",
        "metrics": "Leadership sees an uncomfortable outlook but has a basis to authorize recovery or revise commitments.",
        "criteria": [
          "Uses the agreed RAG definition",
          "Reconciles completion and forecast",
          "States decisions, owners and uncertainty"
        ],
        "authorized": false
      },
      {
        "id": "green",
        "title": "Report green because 80 items started",
        "text": "Use 80% complete and omit the security gap to avoid confusion.",
        "quality": "Needs revision",
        "rationale": "Started work is not accepted completion. Omitting the forecast and security evidence hides the reasons leadership needs to act.",
        "metrics": "The headline is reassuring; the decision is poorly informed.",
        "criteria": [
          "Uses a visible activity count",
          "Misstates completion and hides exposure"
        ],
        "authorized": false
      },
      {
        "id": "dump",
        "title": "Send raw data without an outlook",
        "text": "Attach all logs and say leadership should decide what status means.",
        "quality": "Needs revision",
        "rationale": "The rules already define the reporting threshold. Providing evidence without interpretation and decision requests makes the report less useful.",
        "metrics": "Data is available, but accountability and action remain unclear.",
        "criteria": [
          "Provides raw records",
          "Does not reconcile them against the rules"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Define what a measure means",
        "text": "Started, finished and accepted are different states. Use consistent denominators and explicit completion criteria."
      },
      {
        "title": "A status report supports action",
        "text": "Compare baseline and forecast, explain exposure and confidence, and identify decisions, response owners and review dates."
      }
    ],
    "items": [
      {
        "id": "PHX-M08-Q01",
        "task": "PRO09",
        "q": "What percentage of the 100 items meets completion criteria?",
        "options": [
          "80%",
          "55%",
          "100%",
          "25%"
        ],
        "correct": 1,
        "rationale": "Only 55 items meet the stated completion criteria; started work is a different measure."
      },
      {
        "id": "PHX-M08-Q02",
        "task": "PRO09",
        "q": "What RAG status follows the agreed rule?",
        "options": [
          "Green because most tasks started",
          "Amber merely because the team prefers it",
          "Red: target missed in the forecast without approved recovery",
          "No status can ever be assigned"
        ],
        "correct": 2,
        "rationale": "The current forecast is day 14 against a day-12 target with no approved recovery."
      },
      {
        "id": "PHX-M08-Q03",
        "task": "PRO09",
        "q": "How should the date difference be reported?",
        "options": [
          "Replace the target silently with day 14",
          "Call the forecast a completed baseline approval",
          "Hide the forecast until the vendor fails",
          "Day-12 target and day-14 forecast, with recovery decisions needed"
        ],
        "correct": 3,
        "rationale": "The target and forecast serve different purposes; both are relevant to the decision."
      },
      {
        "id": "PHX-M08-Q04",
        "task": "PRO09",
        "q": "What makes a recovery recommendation useful to leadership?",
        "options": [
          "Options, impacts, owners and the authorization requested",
          "An assurance that everything is under control",
          "Only the number of meetings held",
          "A blame list"
        ],
        "correct": 0,
        "rationale": "A decision-oriented report clarifies what leadership can do and the consequences."
      },
      {
        "id": "PHX-M08-Q05",
        "task": "PRO09",
        "q": "How should incomplete security testing appear?",
        "options": [
          "As zero risk because testing is underway",
          "As an explicit unresolved acceptance condition",
          "Only in a private developer note",
          "As automatically approved"
        ],
        "correct": 1,
        "rationale": "Incomplete evidence cannot establish that a mandatory criterion is satisfied."
      },
      {
        "id": "PHX-M08-Q06",
        "task": "PRO09",
        "q": "A red status should primarily trigger what?",
        "options": [
          "Punishment for whoever reported it",
          "Automatic cancellation without analysis",
          "Transparent action, ownership and follow-up",
          "A different color to protect morale"
        ],
        "correct": 2,
        "rationale": "RAG is a signal to support decisions and recovery, not a substitute for analysis or a reason to suppress facts."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M08-E1",
        "title": "Delivery dashboard",
        "kind": "Reporting facts",
        "text": "80 of 100 planned work items are marked started; only 55 meet completion criteria. The approved release target is day 12, while the current dependency forecast is day 14 before any approved recovery. Security testing is incomplete."
      },
      {
        "id": "PHX-M08-E2",
        "title": "Status reporting rules",
        "kind": "Agreed thresholds",
        "text": "For this exercise, red means the release target is forecast to be missed without an approved recovery. Amber means a credible threat remains within target with an owned response. Green means the agreed date and acceptance conditions are supported by evidence. Report completed work separately from started work."
      }
    ],
    "activities": [
      {
        "id": "complete-percent",
        "prompt": "Accepted work: 55 of 100 items",
        "options": [
          "80% complete",
          "55% complete",
          "100% complete"
        ],
        "correct": 1,
        "rationale": "Started work must not be counted as accepted completion."
      },
      {
        "id": "rag",
        "prompt": "Choose the status under the supplied threshold",
        "options": [
          "Green",
          "Amber",
          "Red"
        ],
        "correct": 2,
        "rationale": "The forecast misses the target and recovery has not been approved."
      }
    ]
  },
  {
    "id": "CH01-M09",
    "version": "phoenix-m09-preview-1",
    "title": "The Vendor Warning",
    "task": "BUS04",
    "status": "development_fixture",
    "objective": "Resolve an actual impediment without confusing it with future risk",
    "artifact": "issue log",
    "speaker": "Sam",
    "quote": "The vendor missed a handoff and no recovery owner is listed.",
    "briefing": "The authentication handoff has now been missed. Integration testers cannot proceed. Treat this as an active impediment, coordinate a recovery and keep contractual decisions within their proper authority.",
    "prompt": "What should be entered in the issue log now?",
    "choices": [
      {
        "id": "wait",
        "title": "Wait until next week",
        "text": "Leave the risk entry unchanged and avoid interrupting the vendor.",
        "quality": "Needs revision",
        "rationale": "The event has happened and is blocking work now. A future-risk label and delayed follow-up do not resolve the active impediment.",
        "metrics": "Coordination effort is deferred; the schedule blockage continues.",
        "criteria": [
          "Avoids a difficult call",
          "Fails to own the active issue"
        ],
        "authorized": false
      },
      {
        "id": "balanced",
        "title": "Assign an issue owner and coordinate recovery",
        "text": "Give Alex accountable coordination, confirm impact, agree vendor actions and dates, link the old risk and escalate decisions beyond delegated authority.",
        "quality": "Defensible in this context",
        "rationale": "An issue needs an owner, action and follow-up. Parallel work can be assessed safely, but substitutes must not be misrepresented as required authentication evidence.",
        "metrics": "Recovery becomes actionable; the original date is not automatically restored.",
        "criteria": [
          "Records the actual impact",
          "Assigns owner, actions and dates",
          "Uses the correct contractual escalation"
        ],
        "authorized": false
      },
      {
        "id": "replace",
        "title": "Replace the vendor secretly",
        "text": "Find a different supplier and conceal the change until the package arrives.",
        "quality": "Mandatory constraint violated",
        "rationale": "Secret replacement ignores contract, procurement and integration consequences. Urgency does not create authority that the role does not have.",
        "metrics": "Activity increases; legal and technical exposure can increase too.",
        "criteria": [
          "Seeks an alternative supply",
          "Bypasses contract review and transparency"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "A materialized risk needs issue action",
        "text": "Retain the original risk history but manage the existing blockage with an accountable owner and current impact."
      },
      {
        "title": "Remove impediments without hiding constraints",
        "text": "Coordinate people, dependencies and decisions. Safe parallel work can reduce disruption, but it does not replace mandatory evidence or contractual authority."
      }
    ],
    "items": [
      {
        "id": "PHX-M09-Q01",
        "task": "BUS04",
        "q": "What distinguishes this handoff situation from the earlier vendor warning?",
        "options": [
          "The vendor’s name changed",
          "Only the team’s feelings changed",
          "The committed handoff has actually been missed",
          "No project work is affected"
        ],
        "correct": 2,
        "rationale": "The delay is now an observed issue rather than only a future possibility."
      },
      {
        "id": "PHX-M09-Q02",
        "task": "BUS04",
        "q": "What is the first useful issue-log update?",
        "options": [
          "Delete the old risk and do nothing else",
          "Change every status to green",
          "Record only that the vendor is at fault",
          "Record impact, an accountable owner, actions and follow-up"
        ],
        "correct": 3,
        "rationale": "An issue record should support action, not merely blame or concern."
      },
      {
        "id": "PHX-M09-Q03",
        "task": "BUS04",
        "q": "Why link the old risk to the issue?",
        "options": [
          "Preserve the trigger and response history for tracking and learning",
          "Make the issue look less serious",
          "Avoid assigning an owner",
          "Prove the response was completed"
        ],
        "correct": 0,
        "rationale": "The link shows how uncertainty materialized and what response was planned or missed."
      },
      {
        "id": "PHX-M09-Q04",
        "task": "BUS04",
        "q": "Can temporary test data prove real authentication acceptance?",
        "options": [
          "Yes, any passing test is equivalent",
          "No; it can support limited work but not substitute for required evidence",
          "Yes, if the schedule is late",
          "Only if the project manager changes the label"
        ],
        "correct": 1,
        "rationale": "Alternative test support must have explicit limits; it does not establish the missing integration evidence."
      },
      {
        "id": "PHX-M09-Q05",
        "task": "BUS04",
        "q": "When should supplier replacement be considered?",
        "options": [
          "Secretly whenever a deadline slips",
          "Only after hiding the issue",
          "Through procurement and contractual review with impact analysis",
          "Never, regardless of evidence"
        ],
        "correct": 2,
        "rationale": "Replacement can be an option, but it needs proper authority and an assessment of consequences."
      },
      {
        "id": "PHX-M09-Q06",
        "task": "BUS04",
        "q": "What should happen after the recovery call?",
        "options": [
          "Assume a call means the blockage is resolved",
          "Erase the issue immediately",
          "Stop communicating until launch",
          "Track agreed actions and dates and reassess the forecast"
        ],
        "correct": 3,
        "rationale": "Follow-through and evidence of resolution matter; a meeting alone is not recovery."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M09-E1",
        "title": "Issue log",
        "kind": "Observed impact",
        "text": "The authentication package due yesterday has not arrived. Integration testing is blocked today. The previous risk entry warned of delay but has no current recovery owner. Alex has access to the vendor and integration team."
      },
      {
        "id": "PHX-M09-E2",
        "title": "Recovery and contract notes",
        "kind": "Available actions",
        "text": "The vendor can join a recovery call today. The integration team can assess safe temporary test data for unaffected checks, but real authentication evidence remains required. Supplier replacement requires procurement and contractual review; the project manager cannot secretly switch vendors."
      }
    ],
    "activities": [
      {
        "id": "issue-owner",
        "prompt": "Who is the named coordination owner available in the evidence?",
        "options": [
          "No owner until next week",
          "Alex",
          "The customer with no supplier access"
        ],
        "correct": 1,
        "rationale": "Alex can coordinate both the vendor and the integration team."
      },
      {
        "id": "issue-action",
        "prompt": "How should the missed handoff be tracked?",
        "options": [
          "Future risk only",
          "Active issue linked to the earlier risk",
          "Completed milestone"
        ],
        "correct": 1,
        "rationale": "A missed commitment affecting work needs current issue management."
      }
    ]
  },
  {
    "id": "CH01-M10",
    "version": "phoenix-m10-preview-1",
    "title": "The Procurement Choice",
    "task": "PRO06",
    "status": "development_fixture",
    "objective": "Compare spending decisions and implications for remaining contingency",
    "artifact": "cost forecast",
    "speaker": "Maya",
    "quote": "What will the acceleration fee do to the money we still need?",
    "briefing": "A vendor offers acceleration for $6,000. The proposal competes with the funds needed to complete testing. Compare the forecast, remaining contingency and approval limits rather than choosing the option with the most reassuring headline.",
    "prompt": "Which recommendation best balances the cost and remaining exposure?",
    "choices": [
      {
        "id": "balanced",
        "title": "Compare the revised forecast and seek approval",
        "text": "Show the $94,000 forecast and $6,000 remaining funding, validate schedule benefit and residual exposure, preserve testing and seek sponsor authorization.",
        "quality": "Defensible in this context",
        "rationale": "The arithmetic supports a trade-off, not an automatic purchase. The remaining amount falls from $12,000 to $6,000; adequacy depends on residual risk and the authorized decision.",
        "metrics": "Potential schedule recovery costs $6,000 and reduces available contingency; the benefit is not guaranteed.",
        "criteria": [
          "Reconciles actuals and remaining work",
          "Shows the new forecast and remaining funds",
          "Preserves testing and approval"
        ],
        "authorized": false
      },
      {
        "id": "double-count",
        "title": "Report $156,000 as the acceleration forecast",
        "text": "Add the $62,000 actuals to the full $88,000 forecast again, then add the $6,000 fee and call the option unaffordable.",
        "quality": "Needs revision",
        "rationale": "The $88,000 forecast already contains the $62,000 actuals. Adding them again double-counts costs and distorts the decision.",
        "metrics": "An apparently cautious report rejects an option using incorrect arithmetic.",
        "criteria": [
          "Attempts to compare costs",
          "Double-counts actual expenditure"
        ],
        "authorized": false
      },
      {
        "id": "cut-tests",
        "title": "Fund acceleration by removing mandatory tests",
        "text": "Approve the fee yourself and cancel release testing to protect the contingency balance.",
        "quality": "Mandatory constraint violated",
        "rationale": "Mandatory tests remain in scope, and sponsor approval is required for this use of funds. Apparent savings cannot establish valid release readiness.",
        "metrics": "The report may look affordable; mandatory controls and authority are bypassed.",
        "criteria": [
          "Seeks budget headroom",
          "Removes required testing and approval"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Forecast totals consistently",
        "text": "In this exercise, total forecast is actual cost plus remaining forecast cost. Do not add actuals twice or confuse remaining funding with realized savings."
      },
      {
        "title": "Contingency is a decision, not spare cash",
        "text": "Show what funds remain, what risks they support and who may authorize their use. Cost and schedule effects should be assessed together."
      }
    ],
    "items": [
      {
        "id": "PHX-M10-Q01",
        "task": "PRO06",
        "q": "What is the base forecast total cost?",
        "options": [
          "$26,000",
          "$62,000",
          "$150,000",
          "$88,000"
        ],
        "correct": 3,
        "rationale": "Actuals $62,000 plus forecast remaining $26,000 equals $88,000."
      },
      {
        "id": "PHX-M10-Q02",
        "task": "PRO06",
        "q": "What total cost is forecast if the $6,000 acceleration fee is added?",
        "options": [
          "$94,000",
          "$120,000",
          "$82,000",
          "$100,000"
        ],
        "correct": 0,
        "rationale": "The fee adds to the existing total forecast: $88,000 + $6,000 = $94,000."
      },
      {
        "id": "PHX-M10-Q03",
        "task": "PRO06",
        "q": "How much funding remains against the $100,000 limit after acceleration?",
        "options": [
          "$12,000",
          "$6,000",
          "$26,000",
          "$94,000"
        ],
        "correct": 1,
        "rationale": "The remaining funding is $100,000 − $94,000 = $6,000."
      },
      {
        "id": "PHX-M10-Q04",
        "task": "PRO06",
        "q": "Why is $6,000 within the funding limit not automatic approval to spend it?",
        "options": [
          "Every amount below a limit is forbidden",
          "Testing becomes free",
          "Residual exposure and delegated spending authority still matter",
          "The vendor controls sponsor approval"
        ],
        "correct": 2,
        "rationale": "A numerical balance does not establish either authorization or contingency adequacy."
      },
      {
        "id": "PHX-M10-Q05",
        "task": "PRO06",
        "q": "Which cost calculation double-counts actuals?",
        "options": [
          "Adding the $6,000 fee to the $88,000 forecast",
          "Subtracting $94,000 from $100,000 funding",
          "Adding $62,000 actuals and $26,000 remaining work",
          "Adding $62,000 actuals to the $88,000 total forecast again"
        ],
        "correct": 3,
        "rationale": "The total forecast already includes actual expenditure."
      },
      {
        "id": "PHX-M10-Q06",
        "task": "PRO06",
        "q": "What else must be confirmed before recommending acceleration?",
        "options": [
          "Credible schedule benefit, residual risk and sponsor authorization",
          "Only that the supplier sent an invoice",
          "That mandatory testing can be deleted",
          "That a fee guarantees the launch date"
        ],
        "correct": 0,
        "rationale": "The proposed spend must support a credible integrated decision, not just an arithmetical one."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M10-E1",
        "title": "Cost forecast",
        "kind": "Exercise amounts",
        "text": "Approved funding is $100,000. Actual costs to date are $62,000. Forecast remaining base work is $26,000, including all mandatory testing. The current forecast total is therefore $88,000, leaving $12,000 within funding. There are no other committed charges in this simplified exercise."
      },
      {
        "id": "PHX-M10-E2",
        "title": "Acceleration offer and authority",
        "kind": "Decision constraints",
        "text": "The vendor’s additional $6,000 may recover two days if feasibility is confirmed; it does not guarantee launch. Accepting it would not remove the testing requirement. The sponsor must approve use of the remaining funds for acceleration. Identified residual risks may still need contingency."
      }
    ],
    "activities": [
      {
        "id": "forecast",
        "prompt": "Forecast including the additional $6,000 fee",
        "options": [
          "$88,000",
          "$94,000",
          "$120,000"
        ],
        "correct": 1,
        "rationale": "$62,000 + $26,000 + $6,000 = $94,000."
      },
      {
        "id": "remaining",
        "prompt": "Remaining funding after acceleration",
        "options": [
          "$12,000",
          "$0",
          "$6,000"
        ],
        "correct": 2,
        "rationale": "$100,000 − $94,000 = $6,000 remains for exposure or other approved uses."
      }
    ]
  },
  {
    "id": "CH01-M11",
    "version": "phoenix-m11-preview-1",
    "title": "The Quality Dilemma",
    "task": "PRO07",
    "status": "development_fixture",
    "objective": "Protect mandatory release criteria while evaluating phased options",
    "artifact": "quality checklist",
    "speaker": "Jordan",
    "quote": "We detected possible cross-customer export exposure during security testing.",
    "briefing": "A test suggests that export data may cross customer boundaries. Maya asks whether a feature flag can keep the pilot moving. Evaluate safe alternatives while protecting mandatory quality criteria and making unresolved evidence visible.",
    "prompt": "What recommendation should go into the quality checklist?",
    "choices": [
      {
        "id": "ship",
        "title": "Ship now and patch later",
        "text": "Release exports because the customer needs them and schedule delay is costly.",
        "quality": "Mandatory constraint violated",
        "rationale": "Known potential cross-customer exposure violates the stated mandatory criterion. Customer pressure and schedule cost cannot replace correction or validated isolation.",
        "metrics": "The date may be protected briefly; customer data is exposed to unresolved harm.",
        "criteria": [
          "Prioritizes the date",
          "Bypasses a mandatory acceptance criterion"
        ],
        "authorized": false,
        "requestedRelease": "full"
      },
      {
        "id": "balanced",
        "title": "Verify correction or isolation before seeking approval",
        "text": "Hold affected scope, verify a fix or complete isolation, retest remaining workflows, then evaluate a specifically authorized phased release if it still delivers value.",
        "quality": "Defensible in this context",
        "rationale": "The feature flag is a proposal, not evidence of isolation. Both the safety of released scope and its business value must be demonstrated before an authorized release decision.",
        "metrics": "A smaller safe pilot might become feasible after validation; it is not yet ready.",
        "criteria": [
          "Protects mandatory data boundaries",
          "Requires retest or validated isolation",
          "Checks value and explicit authorization"
        ],
        "authorized": false
      },
      {
        "id": "remove",
        "title": "Silently remove exports and declare readiness",
        "text": "Hide the feature and tell the customer the full scope is ready.",
        "quality": "Mandatory constraint violated",
        "rationale": "A hidden UI does not prove backend isolation, and silent scope removal misrepresents readiness and commitments.",
        "metrics": "The headline looks better; technical exposure and expectation gaps remain.",
        "criteria": [
          "Attempts to reduce scope",
          "Lacks isolation evidence and transparent authorization"
        ],
        "authorized": false,
        "requestedRelease": "phased"
      }
    ],
    "lesson": [
      {
        "title": "Quality criteria constrain release",
        "text": "A high delivery score cannot cancel a mandatory acceptance condition. Evidence must show that the released scope satisfies its requirements."
      },
      {
        "title": "A safe phase is a complete decision",
        "text": "A phase needs validated boundaries, accepted scope, useful value and the correct authorization. A feature flag alone proves none of these."
      }
    ],
    "items": [
      {
        "id": "PHX-M11-Q01",
        "task": "PRO07",
        "q": "What does the failed export test establish?",
        "options": [
          "The mandatory customer-data boundary has unresolved evidence",
          "A full release is safe if the sponsor is happy",
          "All other tests are irrelevant forever",
          "A feature flag is already validated"
        ],
        "correct": 0,
        "rationale": "The failed test identifies a release-blocking condition that needs correction or valid isolation."
      },
      {
        "id": "PHX-M11-Q02",
        "task": "PRO07",
        "q": "Does hiding the export button prove isolation?",
        "options": [
          "Yes, hidden means unreachable",
          "No; alternate APIs and background paths also need validation",
          "Yes, if a developer says it should work",
          "Only if the release date is close"
        ],
        "correct": 1,
        "rationale": "A visual control may leave other access paths. Isolation needs evidence across the affected boundary."
      },
      {
        "id": "PHX-M11-Q03",
        "task": "PRO07",
        "q": "What can make a phased pilot a defensible option?",
        "options": [
          "Only a feature flag name",
          "A high stakeholder satisfaction score",
          "Validated safe scope, useful value, customer acceptance and proper authorization",
          "A verbal promise to fix any later problem"
        ],
        "correct": 2,
        "rationale": "A phase must satisfy safety, value and governance conditions together."
      },
      {
        "id": "PHX-M11-Q04",
        "task": "PRO07",
        "q": "What must happen after a proposed correction?",
        "options": [
          "Assume a code change means the defect is closed",
          "Remove the failed test from the report",
          "Call the issue a future risk only",
          "Retest the affected criterion and relevant regressions"
        ],
        "correct": 3,
        "rationale": "Correction claims require verification; editing code is not sufficient acceptance evidence."
      },
      {
        "id": "PHX-M11-Q05",
        "task": "PRO07",
        "q": "Who can replace a mandatory criterion with schedule pressure?",
        "options": [
          "No one under the stated case conditions",
          "The project manager acting alone",
          "Any customer representative",
          "The developer who owns the flag"
        ],
        "correct": 0,
        "rationale": "This case provides no authorized waiver; schedule preference cannot bypass the criterion."
      },
      {
        "id": "PHX-M11-Q06",
        "task": "PRO07",
        "q": "How should unresolved quality evidence appear in the release discussion?",
        "options": [
          "Only after launch",
          "Explicitly, with owners, conditions and decision consequences",
          "Hidden in an unshared appendix",
          "As a completed test"
        ],
        "correct": 1,
        "rationale": "Transparent conditions let decision makers distinguish a proposal from established readiness."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M11-E1",
        "title": "Quality checklist",
        "kind": "Mandatory acceptance",
        "text": "No released workflow may expose one customer’s data to another. The export test has failed. A correction must be retested, or any isolation of the affected scope must be validated against all released access paths. No waiver has been authorized."
      },
      {
        "id": "PHX-M11-E2",
        "title": "Phased-release proposal",
        "kind": "Unverified alternative",
        "text": "Engineering proposes disabling exports behind a flag. The idea has not been tested for API, background job or alternate access paths. Core pilot value might be available without exports, but customer acceptance and explicit scope authorization are still needed."
      }
    ]
  },
  {
    "id": "CH01-M12",
    "version": "phoenix-m12-preview-1",
    "title": "The Security Gate",
    "task": "BUS02",
    "status": "development_fixture",
    "objective": "Verify compliance evidence before proposing deployment authorization",
    "artifact": "security evidence pack",
    "speaker": "Alex",
    "quote": "The flag is configured. We still need to prove what it isolates.",
    "briefing": "The team has configured a feature flag for exports. Compliance wants evidence tied to each obligation, not a list of settings. Review the evidence pack before proposing that any deployment be authorized.",
    "prompt": "How should you complete the compliance review?",
    "choices": [
      {
        "id": "screenshot",
        "title": "Accept the screenshot as compliance",
        "text": "Treat the configured flag as proof and mark every security requirement satisfied.",
        "quality": "Mandatory constraint violated",
        "rationale": "Configuration shows an intended control, not that the required boundary works on every path. Missing test results and authorization remain unresolved.",
        "metrics": "Review appears fast; untested paths may remain exposed.",
        "criteria": [
          "Confirms configuration exists",
          "Does not establish the requirement across access paths"
        ],
        "authorized": false,
        "requestedRelease": "phased"
      },
      {
        "id": "balanced",
        "title": "Map obligations to verified evidence and owners",
        "text": "Mark uncovered paths as gaps, assign validation work, retain versioned results and request security review followed by scope-specific sponsor authorization.",
        "quality": "Defensible in this context",
        "rationale": "Each obligation needs relevant evidence and an accountable review. Missing paths must remain open; neither stakeholder enthusiasm nor a screenshot substitutes for tests and signatures.",
        "metrics": "The review identifies work still needed before a release recommendation can be authorized.",
        "criteria": [
          "Maps every obligation to evidence",
          "Leaves unverified paths open",
          "Separates security verification from deployment authorization"
        ],
        "authorized": false
      },
      {
        "id": "assume",
        "title": "Treat silence as approval",
        "text": "Email the pack and deploy if no one responds by evening.",
        "quality": "Mandatory constraint violated",
        "rationale": "The checklist requires explicit verification and authorization. Silence cannot be interpreted as the specified approvals.",
        "metrics": "The date is preserved only by bypassing the documented gate.",
        "criteria": [
          "Sends information",
          "Substitutes silence for required approval"
        ],
        "authorized": false,
        "requestedRelease": "full"
      }
    ],
    "lesson": [
      {
        "title": "Trace evidence to obligations",
        "text": "For each requirement, identify relevant tests, scope, version, result and reviewer. Coverage gaps stay visible until verified."
      },
      {
        "title": "Verification and authorization differ",
        "text": "An engineer’s control configuration, a security owner’s verification and a sponsor’s deployment authorization are separate events with different responsibilities."
      }
    ],
    "items": [
      {
        "id": "PHX-M12-Q01",
        "task": "BUS02",
        "q": "Which released path lacks evidence in the pack?",
        "options": [
          "The staging dashboard control only",
          "The API route and background worker",
          "Every path already has signed results",
          "None, because a flag exists"
        ],
        "correct": 1,
        "rationale": "The pack contains no API, worker or tenant-boundary regression results."
      },
      {
        "id": "PHX-M12-Q02",
        "task": "BUS02",
        "q": "What is the strongest evidence of a control’s effectiveness?",
        "options": [
          "Only the configuration screenshot",
          "A confident prediction",
          "Relevant current-version test results covering the obligation",
          "An unanswered email"
        ],
        "correct": 2,
        "rationale": "Effective compliance evidence demonstrates the required behavior within the actual release scope and version."
      },
      {
        "id": "PHX-M12-Q03",
        "task": "BUS02",
        "q": "What should an uncovered requirement be marked as?",
        "options": [
          "Automatically passed",
          "Not applicable without analysis",
          "Completed because another test passed",
          "An open evidence gap with an owner and follow-up"
        ],
        "correct": 3,
        "rationale": "An uncovered requirement remains unresolved rather than inheriting another test’s result."
      },
      {
        "id": "PHX-M12-Q04",
        "task": "BUS02",
        "q": "Does security verification alone authorize deployment in this case?",
        "options": [
          "No; the sponsor must also authorize the specific scope",
          "Yes, every technical review grants deployment authority",
          "Only if the team is late",
          "Yes, unless someone complains"
        ],
        "correct": 0,
        "rationale": "The checklist deliberately separates verification from the deployment decision."
      },
      {
        "id": "PHX-M12-Q05",
        "task": "BUS02",
        "q": "Why retain the tested build or version with the evidence?",
        "options": [
          "To predict a guaranteed exam result",
          "To know whether the result applies to the proposed release",
          "To avoid any future retesting",
          "To replace the reviewer identity"
        ],
        "correct": 1,
        "rationale": "Evidence needs traceability to the scope and version it actually supports."
      },
      {
        "id": "PHX-M12-Q06",
        "task": "BUS02",
        "q": "What does no response to the approval email mean here?",
        "options": [
          "Automatic approval after a few hours",
          "A signed security exception",
          "Required explicit authorization is still missing",
          "Permission for full release"
        ],
        "correct": 2,
        "rationale": "Silence does not meet this case’s explicit verification and authorization requirements."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M12-E1",
        "title": "Security evidence pack",
        "kind": "Evidence coverage",
        "text": "The flag blocks the dashboard export control in a staging test. The API route, background export worker and tenant-boundary regression tests have no attached results. The release requirement covers all access paths, not just the visible control."
      },
      {
        "id": "PHX-M12-E2",
        "title": "Authorization checklist",
        "kind": "Required signatures",
        "text": "The security owner must verify current-version evidence for each released path. The sponsor must authorize the specific deployment scope after that review. No signatures are recorded. A configuration screenshot alone does not satisfy the evidence requirement."
      }
    ],
    "activities": [
      {
        "id": "ui-evidence",
        "prompt": "Dashboard flag test result",
        "options": [
          "Evidence for the tested UI path only",
          "Proof of all backend paths",
          "Sponsor authorization"
        ],
        "correct": 0,
        "rationale": "The result supports its tested path, not untested API or worker behavior."
      },
      {
        "id": "api-gap",
        "prompt": "API and worker test results are absent",
        "options": [
          "Mark passed",
          "Keep an open evidence gap",
          "Call them signed off"
        ],
        "correct": 1,
        "rationale": "Missing evidence cannot demonstrate compliance."
      },
      {
        "id": "approval",
        "prompt": "No sponsor signature is recorded",
        "options": [
          "Deploy after silence",
          "Required authorization is missing",
          "The flag grants approval"
        ],
        "correct": 1,
        "rationale": "Deployment needs the explicit scope-specific decision described in the checklist."
      }
    ]
  },
  {
    "id": "CH01-M13",
    "version": "phoenix-m13-preview-1",
    "title": "Launch Day",
    "task": "PRO03",
    "status": "development_fixture",
    "objective": "Recommend a viable release strategy based on validated business value",
    "artifact": "value and release case",
    "speaker": "Elena",
    "quote": "Given verified scope, costs, risk and security evidence, what launch strategy do you recommend?",
    "briefing": "The steering committee needs a recommendation grounded in today’s readiness evidence and customer value. This exercise offers three evidence cases. A full launch, a phased launch or postponement can each be appropriate; the conditions, not the option number, determine what is releasable.",
    "prompt": "Which launch recommendation is supported by this evidence case?",
    "choices": [
      {
        "id": "full",
        "title": "Recommend full launch",
        "text": "Include core workflows and exports in the launch.",
        "quality": "Mandatory constraint violated",
        "rationale": "The full scope lacks verified export correction and full-release authorization. Safe core isolation does not authorize the excluded capability.",
        "metrics": "More features would ship, but the full-release gate is unmet.",
        "criteria": [
          "Checks full-scope value",
          "Fails the full-scope evidence and authorization gate"
        ],
        "authorized": false,
        "requestedRelease": "full"
      },
      {
        "id": "phased",
        "title": "Recommend a scoped phased release",
        "text": "Release only the verified and authorized core pilot; communicate the excluded exports and continue their recovery work.",
        "quality": "Defensible in this context",
        "rationale": "The core-only scope has verified isolation, accepted value, operational readiness and explicit authorization. The phase is defensible because each required condition is evidenced.",
        "metrics": "Core value can begin while export value is deferred; residual risk still needs monitoring.",
        "criteria": [
          "Matches verified safe scope",
          "Retains accepted customer value",
          "Uses scope-specific authorization"
        ],
        "authorized": false,
        "requestedRelease": "phased"
      },
      {
        "id": "postpone",
        "title": "Postpone this release",
        "text": "Hold the pilot and seek a revised value and readiness decision.",
        "quality": "Needs revision",
        "rationale": "Postponement does not violate the gate, but this case already supports a safe, useful and authorized core phase. Explain the additional benefit and delay cost before preferring a hold.",
        "metrics": "Delivery exposure is avoided for now; available core value is delayed.",
        "criteria": [
          "Does not bypass a mandatory gate",
          "Needs a business reason to delay the authorized phase"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Evaluate safety, authority and value together",
        "text": "A technically safe release can lack authorization or useful value. A desired benefit cannot override an unmet mandatory condition."
      },
      {
        "title": "Choose from the current context",
        "text": "Full release needs full-scope evidence. A phase needs safe separation and explicit scoped approval. If neither is supported, postpone and state the conditions needed to reconsider."
      }
    ],
    "items": [
      {
        "id": "PHX-M13-Q01",
        "task": "PRO03",
        "q": "What is required to recommend a full release?",
        "options": [
          "Only the highest stakeholder score",
          "A core-only approval regardless of exports",
          "Verified full-scope readiness, useful value and full-scope authorization",
          "A successful feature demonstration"
        ],
        "correct": 2,
        "rationale": "Full release must satisfy its own scope’s mandatory conditions and decision authority."
      },
      {
        "id": "PHX-M13-Q02",
        "task": "PRO03",
        "q": "What makes an authorized core-only phase distinct from a full launch?",
        "options": [
          "It uses a different presentation color",
          "It automatically approves exports too",
          "It requires no support plan",
          "Its verified and approved scope explicitly excludes unresolved capabilities"
        ],
        "correct": 3,
        "rationale": "Scoped authorization and validated isolation define the boundary of the phase."
      },
      {
        "id": "PHX-M13-Q03",
        "task": "PRO03",
        "q": "What should happen when neither full nor phased readiness is verified?",
        "options": [
          "Postpone and identify the unmet conditions and recovery decisions",
          "Choose the most popular option",
          "Deploy and collect evidence afterward",
          "Assume no news means approval"
        ],
        "correct": 0,
        "rationale": "An unmet mandatory gate cannot be overridden by an attractive outcome."
      },
      {
        "id": "PHX-M13-Q04",
        "task": "PRO03",
        "q": "Why is customer acceptance of core-only value relevant?",
        "options": [
          "Customer acceptance replaces security verification",
          "A safe phase still needs to deliver a useful accepted outcome",
          "It removes all residual risks",
          "It grants contractual authority automatically"
        ],
        "correct": 1,
        "rationale": "Value is a separate condition alongside safety, operations and authorization."
      },
      {
        "id": "PHX-M13-Q05",
        "task": "PRO03",
        "q": "What must be communicated when exports are excluded?",
        "options": [
          "That the full scope has shipped",
          "Only the original launch promise",
          "The actual released scope, deferred value, residual risks and follow-up",
          "Nothing if the flag is invisible"
        ],
        "correct": 2,
        "rationale": "Transparent communication prevents a technically scoped phase from becoming a misleading full-release claim."
      },
      {
        "id": "PHX-M13-Q06",
        "task": "PRO03",
        "q": "Which rule should determine the debrief for Launch Day?",
        "options": [
          "Option two is always correct",
          "Full launch is always correct",
          "Postponement is always wrong",
          "The evidence and authorization for the selected readiness case"
        ],
        "correct": 3,
        "rationale": "The seed’s undefined choice zero is replaced by explicit case-specific conditions; no option is universally right."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M13-E1",
        "title": "Readiness review",
        "kind": "Phased case snapshot",
        "text": "Subsequent validation has established safe isolation of exports across UI, API and worker paths. Core pilot workflows pass their required checks; export correction remains unverified. Security verification and sponsor authorization explicitly cover the core-only phase, not a full release."
      },
      {
        "id": "PHX-M13-E2",
        "title": "Value and release case",
        "kind": "Business and operational evidence",
        "text": "Northstar accepts a core-only pilot that supports bottleneck analysis. Support has the core scope and rollback plan. Full export value is deferred and must be communicated. The approved phased forecast is within the stated funding limit; residual risk has named owners."
      }
    ],
    "releaseGate": {
      "full": false,
      "phased": true,
      "note": "Only the verified core-only pilot is authorized. Exports remain excluded."
    },
    "cases": [
      {
        "id": "phased",
        "title": "Core-only phase verified",
        "evidence": [
          {
            "id": "PHX-M13-E1",
            "title": "Readiness review",
            "kind": "Phased case snapshot",
            "text": "Subsequent validation has established safe isolation of exports across UI, API and worker paths. Core pilot workflows pass their required checks; export correction remains unverified. Security verification and sponsor authorization explicitly cover the core-only phase, not a full release."
          },
          {
            "id": "PHX-M13-E2",
            "title": "Value and release case",
            "kind": "Business and operational evidence",
            "text": "Northstar accepts a core-only pilot that supports bottleneck analysis. Support has the core scope and rollback plan. Full export value is deferred and must be communicated. The approved phased forecast is within the stated funding limit; residual risk has named owners."
          }
        ],
        "choices": [
          {
            "id": "full",
            "title": "Recommend full launch",
            "text": "Include core workflows and exports in the launch.",
            "quality": "Mandatory constraint violated",
            "rationale": "The full scope lacks verified export correction and full-release authorization. Safe core isolation does not authorize the excluded capability.",
            "metrics": "More features would ship, but the full-release gate is unmet.",
            "criteria": [
              "Checks full-scope value",
              "Fails the full-scope evidence and authorization gate"
            ],
            "authorized": false,
            "requestedRelease": "full"
          },
          {
            "id": "phased",
            "title": "Recommend a scoped phased release",
            "text": "Release only the verified and authorized core pilot; communicate the excluded exports and continue their recovery work.",
            "quality": "Defensible in this context",
            "rationale": "The core-only scope has verified isolation, accepted value, operational readiness and explicit authorization. The phase is defensible because each required condition is evidenced.",
            "metrics": "Core value can begin while export value is deferred; residual risk still needs monitoring.",
            "criteria": [
              "Matches verified safe scope",
              "Retains accepted customer value",
              "Uses scope-specific authorization"
            ],
            "authorized": false,
            "requestedRelease": "phased"
          },
          {
            "id": "postpone",
            "title": "Postpone this release",
            "text": "Hold the pilot and seek a revised value and readiness decision.",
            "quality": "Needs revision",
            "rationale": "Postponement does not violate the gate, but this case already supports a safe, useful and authorized core phase. Explain the additional benefit and delay cost before preferring a hold.",
            "metrics": "Delivery exposure is avoided for now; available core value is delayed.",
            "criteria": [
              "Does not bypass a mandatory gate",
              "Needs a business reason to delay the authorized phase"
            ],
            "authorized": false
          }
        ],
        "releaseGate": {
          "full": false,
          "phased": true,
          "note": "Only the verified core-only pilot is authorized. Exports remain excluded."
        }
      },
      {
        "id": "full",
        "title": "Full scope verified",
        "evidence": [
          {
            "id": "PHX-M13-FULL-E1",
            "title": "Full readiness review",
            "kind": "Full case snapshot",
            "text": "The export correction and all core workflows passed current-version tests, including tenant-boundary regressions. The security owner verified all proposed scope and the sponsor explicitly authorized full deployment. There are no unresolved mandatory release conditions in this exercise."
          },
          {
            "id": "PHX-M13-FULL-E2",
            "title": "Full value and operations case",
            "kind": "Accepted business evidence",
            "text": "Northstar accepts the full pilot and its measured value hypothesis. Support owners, handover, monitoring and rollback plans are confirmed. The forecast is within the approved funding limit, and residual risks have accountable owners."
          }
        ],
        "choices": [
          {
            "id": "full",
            "title": "Recommend full launch",
            "text": "Release the verified full pilot under its documented authorization.",
            "quality": "Defensible in this context",
            "rationale": "This case supports the full scope: required tests, security verification, sponsor authorization, accepted value and operations are all evidenced. Continue monitoring rather than claiming zero risk.",
            "metrics": "The accepted pilot value becomes available; residual risks still need ownership.",
            "criteria": [
              "Verifies full scope",
              "Confirms explicit authorization",
              "Confirms value and operational readiness"
            ],
            "authorized": false,
            "requestedRelease": "full"
          },
          {
            "id": "phased",
            "title": "Recommend a scoped phased release",
            "text": "Release only the core scope and defer exports.",
            "quality": "Needs revision",
            "rationale": "A smaller subset is within the verified scope and may be considered, but this case provides no new reason to defer the accepted full pilot. Explain the lost value and obtain alignment if deliberately reducing the planned deployment.",
            "metrics": "Less scope is exposed; accepted export value is delayed.",
            "criteria": [
              "Stays within verified scope",
              "Needs a value justification for reducing deployment"
            ],
            "authorized": false,
            "requestedRelease": "phased"
          },
          {
            "id": "postpone",
            "title": "Postpone this release",
            "text": "Delay the pilot despite complete required evidence.",
            "quality": "Needs revision",
            "rationale": "Holding the release is safe from a gate perspective, but would delay accepted value without a stated unmet condition. Further delay should have an evidence-based business reason.",
            "metrics": "Exposure is deferred along with the available benefits.",
            "criteria": [
              "Does not bypass a gate",
              "Provides no evidenced reason for delay"
            ],
            "authorized": false
          }
        ],
        "releaseGate": {
          "full": true,
          "phased": true,
          "note": "The full proposed pilot scope is verified and explicitly authorized; a smaller subset remains within that boundary."
        }
      },
      {
        "id": "blocked",
        "title": "Mandatory evidence missing",
        "evidence": [
          {
            "id": "PHX-M13-BLOCKED-E1",
            "title": "Unresolved readiness review",
            "kind": "Blocked case snapshot",
            "text": "Cross-customer export exposure remains uncorrected. Isolation across alternate API and worker paths has not been validated. Neither full scope nor a core-only phase has security verification or sponsor deployment authorization."
          },
          {
            "id": "PHX-M13-BLOCKED-E2",
            "title": "Business pressure",
            "kind": "Value does not establish readiness",
            "text": "Northstar wants the benefits urgently and Maya reports high stakeholder enthusiasm. A core-only phase might provide value, but no safe and authorized boundary is established. The team needs owners for correction, validation and a new decision date."
          }
        ],
        "choices": [
          {
            "id": "full",
            "title": "Recommend full launch",
            "text": "Release every feature to realize the expected value.",
            "quality": "Mandatory constraint violated",
            "rationale": "Known unresolved exposure and missing authorization block full release. Stakeholder enthusiasm cannot satisfy those mandatory conditions.",
            "metrics": "Potential early value would come with unresolved customer-data exposure.",
            "criteria": [
              "Recognizes desired value",
              "Bypasses unresolved safety and approval"
            ],
            "authorized": false,
            "requestedRelease": "full"
          },
          {
            "id": "phased",
            "title": "Recommend a scoped phased release",
            "text": "Turn off exports and assume the remaining scope is safe.",
            "quality": "Mandatory constraint violated",
            "rationale": "This case has no validated isolation and no scoped authorization. Calling the deployment a phase does not establish safe separation.",
            "metrics": "A smaller release still has an unproven boundary and missing approval.",
            "criteria": [
              "Attempts to limit scope",
              "Lacks validated isolation and authorization"
            ],
            "authorized": false,
            "requestedRelease": "phased"
          },
          {
            "id": "postpone",
            "title": "Postpone and define recovery conditions",
            "text": "Hold release, assign correction and isolation validation, obtain required reviews and schedule a new readiness decision.",
            "quality": "Defensible in this context",
            "rationale": "Neither release option meets the mandatory conditions. Postponement with explicit owners and recovery evidence protects the boundary while keeping the value decision actionable.",
            "metrics": "Benefits are delayed; the team has a defined path to reconsider release.",
            "criteria": [
              "Respects missing mandatory evidence",
              "Assigns recovery and review work",
              "Revisits value after conditions are met"
            ],
            "authorized": false
          }
        ],
        "releaseGate": {
          "full": false,
          "phased": false,
          "note": "Neither full release nor a phase is verified or authorized. Postpone until the required conditions are satisfied."
        }
      }
    ]
  },
  {
    "id": "CH01-M14",
    "version": "phoenix-m14-preview-1",
    "title": "Phoenix Retrospective",
    "task": "PRO10",
    "status": "development_fixture",
    "objective": "Complete transition and capture actionable lessons learned",
    "artifact": "closure handover",
    "speaker": "Sam",
    "quote": "Launch was a milestone. Who owns the service on Monday?",
    "briefing": "The pilot outcome creates work for operations, support and the delivery team. Regardless of whether the previous exercise recommended release or delay, use this handover snapshot: the agreed safe scope is transitioning, while deferred exports remain a tracked obligation. Close the phase without losing accountability or the lessons Phoenix exposed.",
    "prompt": "Which closure and improvement package should you recommend?",
    "choices": [
      {
        "id": "balanced",
        "title": "Verify handover and make learning actionable",
        "text": "Confirm operations acceptance, transfer runbooks and responsibilities, retain deferred-work owners and record a measurable dependency-review experiment with a follow-up date.",
        "quality": "Defensible in this context",
        "rationale": "Phase closure requires an accepted transition, not just a launch message. Open obligations need clear ownership, and lessons should change an owned practice with a way to evaluate it.",
        "metrics": "Transition takes coordination now; support and future projects gain a usable operating record.",
        "criteria": [
          "Confirms accountable operational acceptance",
          "Retains ownership of deferred scope",
          "Defines an owned and measurable improvement"
        ],
        "authorized": false
      },
      {
        "id": "archive",
        "title": "Archive the project after the launch email",
        "text": "Close every issue, release all owners and leave the runbook in the project folder.",
        "quality": "Needs revision",
        "rationale": "A launch message does not demonstrate operations acceptance. Archiving unresolved obligations can strand users and erase responsibility for deferred work.",
        "metrics": "Administrative closure is quick; service support and unfinished work lose ownership.",
        "criteria": [
          "Marks a milestone",
          "Does not verify transition or retain obligations"
        ],
        "authorized": false
      },
      {
        "id": "blame",
        "title": "Create a list of people to blame",
        "text": "Publish mistakes without actions, owners or a follow-up review.",
        "quality": "Needs revision",
        "rationale": "Retrospective learning should investigate contributing conditions and produce usable improvements. A blame list does not define a change or demonstrate that anything improved.",
        "metrics": "Frustration is recorded; learning and psychological safety are undermined.",
        "criteria": [
          "Captures dissatisfaction",
          "Lacks an actionable improvement loop"
        ],
        "authorized": false
      }
    ],
    "lesson": [
      {
        "title": "Transition is an acceptance event",
        "text": "Confirm who accepts operational responsibility and the information they need. Distinguish closure of this phase from completion of every future product obligation."
      },
      {
        "title": "Turn lessons into experiments",
        "text": "Name the change, owner, review date and outcome measure. Share reusable learning and evaluate whether the new practice helps."
      }
    ],
    "items": [
      {
        "id": "PHX-M14-Q01",
        "task": "PRO10",
        "q": "What is missing before operational transition can be considered accepted?",
        "options": [
          "Another launch slogan",
          "A higher stakeholder score",
          "A deleted issue log",
          "Acknowledged ownership by the operations lead"
        ],
        "correct": 3,
        "rationale": "The receiving owner must acknowledge responsibilities and readiness; handing over files alone is insufficient."
      },
      {
        "id": "PHX-M14-Q02",
        "task": "PRO10",
        "q": "How should deferred export work be handled at phase closure?",
        "options": [
          "Retain an owner, scope boundary and next review in the transition record",
          "Mark it complete because the phase ends",
          "Erase it to avoid confusing support",
          "Assume operations will discover it"
        ],
        "correct": 0,
        "rationale": "Closing a phase does not remove unfinished obligations or accountability."
      },
      {
        "id": "PHX-M14-Q03",
        "task": "PRO10",
        "q": "Which retrospective action is measurable?",
        "options": [
          "Communicate better someday",
          "Twice-weekly vendor evidence reviews owned by Alex, evaluated against blocked testing days",
          "Never have a vendor delay again",
          "Ask everyone to be more careful"
        ],
        "correct": 1,
        "rationale": "A concrete practice, owner and outcome measure support evaluation and adaptation."
      },
      {
        "id": "PHX-M14-Q04",
        "task": "PRO10",
        "q": "Which information belongs in the support handover?",
        "options": [
          "Only the project’s slide deck",
          "Private developer messages alone",
          "Released configuration, runbook, incident path, monitoring and rollback authority",
          "The unapproved full scope as if released"
        ],
        "correct": 2,
        "rationale": "Support needs an accurate operating model and explicit response authority."
      },
      {
        "id": "PHX-M14-Q05",
        "task": "PRO10",
        "q": "Why distinguish project phase closure from product operations?",
        "options": [
          "Closure guarantees no more incidents",
          "Support must stop when the phase closes",
          "All deferred scope disappears",
          "Operational ownership and continuing obligations outlive the phase"
        ],
        "correct": 3,
        "rationale": "The service and its obligations continue after this phase’s administrative work ends."
      },
      {
        "id": "PHX-M14-Q06",
        "task": "PRO10",
        "q": "What should happen at the improvement follow-up?",
        "options": [
          "Review evidence of effects and adjust the practice if needed",
          "Assume the new meeting proves improvement",
          "Assign blame if the measure is imperfect",
          "Discard the result to preserve the plan"
        ],
        "correct": 0,
        "rationale": "Learning closes the loop by examining whether the change produced the intended outcome."
      }
    ],
    "evidence": [
      {
        "id": "PHX-M14-E1",
        "title": "Closure and handover record",
        "kind": "Transition evidence",
        "text": "The agreed core pilot is accepted for operational transition. Support needs the released configuration, runbook, incident path, monitoring thresholds and rollback authority. The operations lead has not yet acknowledged ownership. Export work remains open with an engineering owner and target review date."
      },
      {
        "id": "PHX-M14-E2",
        "title": "Retrospective notes",
        "kind": "Learning evidence",
        "text": "Late dependency signals, unclear issue ownership and started-versus-complete reporting caused avoidable rework. The team proposes an improvement to review vendor evidence builds twice weekly with Alex accountable. A future review should examine whether blocked testing days actually decrease."
      }
    ],
    "activities": [
      {
        "id": "handover",
        "prompt": "Operations lead has not accepted ownership",
        "options": [
          "Transition fully accepted",
          "Acceptance is still required",
          "Release removes the need for support"
        ],
        "correct": 1,
        "rationale": "The receiving operational owner must acknowledge responsibility."
      },
      {
        "id": "deferred",
        "prompt": "Where should unfinished export work go?",
        "options": [
          "Delete it",
          "Carry it with an accountable owner and review date",
          "Mark complete at phase close"
        ],
        "correct": 1,
        "rationale": "Phase closure does not erase deferred obligations."
      },
      {
        "id": "improvement",
        "prompt": "Choose an actionable improvement",
        "options": [
          "Be better at dependencies",
          "Review evidence builds twice weekly; Alex owns it; review blocked days",
          "Avoid all future uncertainty"
        ],
        "correct": 1,
        "rationale": "An owned practice and observable measure support a learning loop."
      }
    ]
  }
];

export const phoenixMissions: QuestMission[] = [phoenix, ...authored];
export function getMission(id: string, caseId?: string): QuestMission | undefined {
  const mission = phoenixMissions.find(m => m.id === id);
  if (!mission) return undefined;
  if (!mission.cases) return caseId ? undefined : mission;
  const scenario = mission.cases.find(c => c.id === (caseId ?? mission.cases![0]!.id));
  return scenario ? { ...mission, evidence: scenario.evidence, choices: scenario.choices, releaseGate: scenario.releaseGate } : undefined;
}
