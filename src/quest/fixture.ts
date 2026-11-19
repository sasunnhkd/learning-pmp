// Original development content based on CH01-M01's objective. Not SME-approved.
// A published package must replace this fixture with independently reviewed content.
import type { QuestItem } from './model';
export type { QuestItem } from './model';
export const phoenix = {
  id: 'CH01-M01', version: 'phoenix-fixture-1', title: 'The New Project Brief',
  task: 'PRO01', status: 'development_fixture',
  objective: 'Select a tailored hybrid delivery and governance model from project constraints',
  briefing: 'Six weeks before launch, NovaTech appoints you to rescue Phoenix, an analytics product for Northstar. Maya, the sponsor, wants a credible launch plan. Priya, the product lead, expects dashboard priorities to change after customer feedback. Alex, the engineering lead, needs a stable integration plan. Your first task is to agree how this project will be delivered and who can authorize changes.',
  evidence: [
    { id: 'PHX-CHARTER-1', title: 'Project charter', kind: 'Mandate & constraints', text: 'The six-week target supports Northstar’s pilot. Contracted data integration and security acceptance are controlled commitments. Deployment needs security sign-off and sponsor authorization. The project manager coordinates delivery; this role does not grant unilateral authority to waive acceptance criteria.' },
    { id: 'PHX-DISCOVERY-1', title: 'Discovery notes', kind: 'Customer & delivery evidence', text: 'Dashboard usability and priorities are uncertain. Northstar can review working increments every week. The integration vendor has fixed milestones. The product lead can reorder dashboard backlog items within the agreed scope; changes to cost, contractual scope, or the launch commitment need impact analysis and the designated approval route.' },
  ],
  prompt: 'Which delivery and governance proposal best fits the evidence?',
  choices: [
    { id: 'predictive', title: 'Baseline every detail now', text: 'Freeze dashboard requirements and all integration work for the entire six weeks. Accept customer feedback after launch.',
      quality: 'Needs revision', rationale: 'Stable integration milestones benefit from planning, but freezing uncertain dashboard details postpones valuable feedback. The charter does not require all work to use the same delivery method.',
      metrics: 'Predictability improves for integration; dashboard rework risk increases.', authorized: false,
      criteria: ['Plans the fixed vendor milestones', 'Misses weekly customer feedback', 'Does not explain how release approvals will be verified'] },
    { id: 'adaptive', title: 'Let every commitment change', text: 'Run the whole project as an open backlog. Let the team change contract scope and deploy whenever a sprint looks successful.',
      quality: 'Mandatory constraint violated', rationale: 'Iteration supports learning, but it cannot remove contractual decision rights or required security and sponsor authorization. A successful sprint is not release approval.',
      metrics: 'Short-term flexibility increases; contractual and release exposure increases.', authorized: false,
      criteria: ['Uses short feedback cycles', 'Bypasses controlled external commitments', 'Bypasses mandatory release authorization'] },
    { id: 'hybrid', title: 'Tailor delivery and preserve decision rights', text: 'Plan vendor integration milestones; iterate dashboards with weekly customer reviews. Keep backlog reprioritization within delegated authority and route commitment changes through impact analysis and approval.',
      quality: 'Defensible in this context', rationale: 'The evidence combines stable external commitments with uncertain product needs. A tailored hybrid approach uses each where it helps. Backlog ordering remains delegated; controlled changes and release approval retain their explicit gates.',
      metrics: 'Feedback arrives earlier; coordinating integration milestones still takes effort.', authorized: false,
      criteria: ['Plans the fixed vendor milestones', 'Uses weekly customer feedback', 'Preserves controlled changes and mandatory release authorization'] },
  ],
  lesson: [
    { title: 'Tailor to the work', text: 'Select delivery methods from uncertainty, dependencies and constraints. A hybrid label alone does not explain which work is iterative or how it joins the planned work.' },
    { title: 'Separate prioritization from authorization', text: 'A product lead may reorder an authorized backlog. That authority does not automatically cover contract, funding or launch commitment changes. Assess the impact and use the agreed decision rights.' },
    { title: 'Keep release gates explicit', text: 'A promising increment, a high stakeholder score or a preferred delivery approach cannot replace required security evidence and deployment authorization. This planning decision does not authorize a release.' },
  ],
  items: [
    { id: 'PHX-M01-Q01', task: 'PRO01', q: 'Which evidence most strongly supports iterative dashboard delivery?', options: ['The vendor has fixed integration milestones', 'Customer priorities are uncertain and weekly feedback is available', 'Security sign-off is mandatory', 'The project manager has been appointed'], correct: 1, rationale: 'Uncertain needs and frequent feedback support learning through increments. The other facts constrain governance or integration, rather than explaining dashboard iteration.' },
    { id: 'PHX-M01-Q02', task: 'PRO01', q: 'What should remain planned around the vendor’s fixed commitments?', options: ['Every future dashboard detail', 'Only the retrospective', 'Integration milestones and dependencies', 'Nothing; hybrid means there are no baselines'], correct: 2, rationale: 'Integration milestones and dependencies need coordination with the vendor. Tailoring does not mean either freezing all product details or abandoning planning.' },
    { id: 'PHX-M01-Q03', task: 'PRO01', q: 'Northstar asks for a dashboard feature that changes contractual scope. What is the appropriate next step?', options: ['Promise delivery to keep the customer happy', 'Silently add it to the sprint', 'Reject every request after planning', 'Assess impacts and follow the designated approval route'], correct: 3, rationale: 'Controlled scope commitments need impact analysis and the agreed decision authority. Neither an immediate promise nor blanket rejection evaluates the request.' },
    { id: 'PHX-M01-Q04', task: 'PRO01', q: 'The product lead reorders dashboard backlog items within delegated scope and budget. Which response fits the charter?', options: ['Allow reprioritization within that authority', 'Require contract approval for every ordering change', 'Prevent feedback until the project closes', 'Treat the reorder as deployment authorization'], correct: 0, rationale: 'Delegation permits local prioritization within explicit limits. It does not grant release authorization or require external approval for every local ordering decision.' },
    { id: 'PHX-M01-Q05', task: 'PRO01', q: 'A weekly increment impresses the sponsor, but security sign-off is missing. Is deployment authorized?', options: ['Yes, stakeholder satisfaction replaces the gate', 'Yes, hybrid projects have no release gates', 'No; required evidence and authorization are still needed', 'Only if the team votes unanimously'], correct: 2, rationale: 'Mandatory security evidence and authorization remain required regardless of stakeholder enthusiasm or delivery approach.' },
    { id: 'PHX-M01-Q06', task: 'PRO01', q: 'Which statement best explains the chosen hybrid proposal?', options: ['Hybrid guarantees the six-week launch date', 'Plan stable integration work, iterate uncertain dashboards and coordinate through explicit governance', 'Use whichever method produces the highest stakeholder score', 'Combine method names without defining responsibilities'], correct: 1, rationale: 'A defensible proposal links methods and decision rights to specific evidence. It cannot guarantee outcomes, and simulation rewards do not establish correctness.' },
  ] satisfies QuestItem[],
};
