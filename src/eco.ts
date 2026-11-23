// Editorial question mappings use the July 2026 ECO, independently of study topics.
// Source: https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf
export type Domain = 'People' | 'Process' | 'Business';

export const ECO_TASKS = {
  PEO01: 'People', PEO02: 'People', PEO03: 'People', PEO04: 'People',
  PEO05: 'People', PEO06: 'People', PEO07: 'People', PEO08: 'People',
  PRO01: 'Process', PRO02: 'Process', PRO03: 'Process', PRO04: 'Process', PRO05: 'Process',
  PRO06: 'Process', PRO07: 'Process', PRO08: 'Process', PRO09: 'Process', PRO10: 'Process',
  BUS01: 'Business', BUS02: 'Business', BUS03: 'Business', BUS04: 'Business',
  BUS05: 'Business', BUS06: 'Business', BUS07: 'Business', BUS08: 'Business',
} as const satisfies Record<string, Domain>;

export type EcoTaskId = keyof typeof ECO_TASKS;

export function isEcoTask(value: unknown): value is EcoTaskId {
  return typeof value === 'string' && Object.hasOwn(ECO_TASKS, value);
}

export function domainOf(question: { ecoTask?: string | null }): Domain | null {
  return isEcoTask(question.ecoTask) ? ECO_TASKS[question.ecoTask] : null;
}
