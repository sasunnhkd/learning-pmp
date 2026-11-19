import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = new URL('../data/quest/source/', import.meta.url);
const output = new URL('../data/quest/catalog.json', import.meta.url);

// RFC 4180-style quoted fields, including commas, newlines, escaped quotes and UTF-8 BOM.
export function parseCsv(text) {
  const rows = []; let row = [], field = '', quoted = false;
  const input = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '"') {
      if (quoted && input[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (c === ',' && !quoted) { row.push(field); field = ''; }
    else if (c === '\n' && !quoted) { row.push(field); rows.push(row); row = []; field = ''; }
    else field += c;
  }
  if (quoted) throw new Error('Unclosed CSV quote');
  if (field || row.length) { row.push(field); rows.push(row); }
  const headers = rows.shift();
  if (!headers || new Set(headers).size !== headers.length) throw new Error('Invalid CSV header');
  return rows.filter(r => r.some(Boolean)).map((r, i) => {
    if (r.length !== headers.length) throw new Error(`CSV row ${i + 2}: expected ${headers.length} columns, got ${r.length}`);
    return Object.fromEntries(headers.map((h, k) => [h, r[k]]));
  });
}

export function validateCatalog(c) {
  const errors = [];
  const index = (rows, field) => {
    const map = new Map();
    rows.forEach((r, i) => {
      if (!r[field] || map.has(r[field])) errors.push(`${field} row ${i + 2}: missing or duplicate ID ${r[field]}`);
      map.set(r[field], r);
    });
    return map;
  };
  const chapters = index(c.chapters, 'chapter_id');
  const missions = index(c.missions, 'mission_id');
  const tasks = index(c.tasks, 'eco_task_id');
  index(c.seeds, 'scene_id'); index(c.assessments, 'assessment_id');
  const ref = (id, field, value, map) => {
    if (!map.has(value)) errors.push(`${id}.${field}: unresolved ID ${value}`);
  };
  const positive = (id, row, fields) => fields.forEach(f => {
    if (!Number.isInteger(row[f]) || row[f] <= 0) errors.push(`${id}.${f}: expected positive integer`);
  });
  c.chapters.forEach(ch => {
    positive(ch.chapter_id, ch, ['sequence', 'planned_missions']);
    const members = c.missions.filter(m => m.chapter_id === ch.chapter_id);
    if (members.length !== ch.planned_missions) errors.push(`${ch.chapter_id}: mission count mismatch`);
    if (new Set(members.map(m => m.mission_sequence)).size !== members.length) errors.push(`${ch.chapter_id}: duplicate mission sequence`);
  });
  c.missions.forEach(m => {
    ref(m.mission_id, 'chapter_id', m.chapter_id, chapters);
    ref(m.mission_id, 'primary_eco_task_id', m.primary_eco_task_id, tasks);
    m.secondary_eco_task_ids.forEach(t => ref(m.mission_id, 'secondary_eco_task_ids', t, tasks));
    if (m.prerequisite_mission_id) ref(m.mission_id, 'prerequisite_mission_id', m.prerequisite_mission_id, missions);
    positive(m.mission_id, m, ['mission_sequence', 'estimated_minutes', 'practice_question_target']);
    if (!['predictive', 'adaptive', 'hybrid'].includes(m.delivery_approach)) errors.push(`${m.mission_id}.delivery_approach: invalid enum`);
    if (!['People', 'Process', 'Business Environment'].includes(m.eco_domain)) errors.push(`${m.mission_id}.eco_domain: invalid enum`);
    const path = new Set([m.mission_id]); let prev = m.prerequisite_mission_id;
    while (prev && missions.has(prev)) {
      if (path.has(prev)) { errors.push(`${m.mission_id}.prerequisite_mission_id: cycle ${[...path, prev].join(' -> ')}`); break; }
      path.add(prev); prev = missions.get(prev).prerequisite_mission_id;
    }
  });
  c.tasks.forEach(t => {
    if (!c.missions.some(m => m.primary_eco_task_id === t.eco_task_id)) errors.push(`${t.eco_task_id}: no primary mission coverage`);
  });
  c.seeds.forEach(s => ref(s.scene_id, 'mission_id', s.mission_id, missions));
  c.assessments.forEach(a => {
    if (a.chapter_id) ref(a.assessment_id, 'chapter_id', a.chapter_id, chapters);
    positive(a.assessment_id, a, ['item_count_target', 'time_minutes']);
    for (const fields of [['people_items', 'process_items', 'business_environment_items'], ['predictive_items', 'adaptive_items', 'hybrid_items']]) {
      if (fields.some(f => !Number.isInteger(a[f]) || a[f] < 0) || fields.reduce((n, f) => n + a[f], 0) !== a.item_count_target) errors.push(`${a.assessment_id}: ${fields.join('/')} totals mismatch`);
    }
  });
  for (const [key, count] of Object.entries({chapters: 12, missions: 168, tasks: 26, seeds: 6, assessments: 15})) {
    if (c[key].length !== count) errors.push(`${key}: expected ${count}, got ${c[key].length}`);
  }
  return errors;
}

export function importCatalog() {
  const read = name => parseCsv(readFileSync(new URL(`pmp_quest_${name}.csv`, source), 'utf8'));
  const numbers = (rows, fields) => rows.map(r => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, fields.includes(k) ? Number(v) : v])));
  const c = {
    version: 'curriculum-1.0', status: 'draft',
    chapters: numbers(read('chapters'), ['sequence', 'planned_missions', 'estimated_guided_minutes', 'chapter_assessment_minutes', 'chapter_assessment_questions']),
    missions: numbers(read('missions'), ['chapter_sequence', 'mission_sequence', 'estimated_minutes', 'practice_question_target']).map(m => ({...m,
      secondary_eco_task_ids: m.secondary_eco_task_ids.split(';').filter(Boolean),
      pmbok8_principle_tags: m.pmbok8_principle_tags.split(';').filter(Boolean),
    })),
    tasks: read('eco_coverage'), seeds: read('ch1_script_seeds'),
    assessments: numbers(read('assessment_blueprint'), ['item_count_target', 'time_minutes', 'people_items', 'process_items', 'business_environment_items', 'predictive_items', 'adaptive_items', 'hybrid_items']),
  };
  const errors = validateCatalog(c);
  if (errors.length) throw new Error(errors.join('\n'));
  return c;
}

// Ship only journey fields to the browser; retain the complete catalog for traceability.
export function journeyMap(catalog) {
  const pick = (rows, fields) => rows.map(r => Object.fromEntries(fields.map(f => [f, r[f]])));
  return {
    version: catalog.version,
    chapters: pick(catalog.chapters, ['chapter_id', 'sequence', 'chapter_title', 'project_world', 'story_arc', 'planned_missions']),
    missions: pick(catalog.missions, ['mission_id', 'chapter_id', 'mission_title', 'mission_sequence', 'narrative_hook', 'learning_objective', 'prerequisite_mission_id', 'primary_eco_task_id', 'eco_domain', 'delivery_approach', 'story_artifact', 'estimated_minutes']),
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const catalog = importCatalog();
  for (const [path, data] of [[output, catalog], [new URL('../data/quest/map.json', import.meta.url), journeyMap(catalog)]]) {
    const json = JSON.stringify(data, null, 2) + '\n';
    if (process.argv.includes('--write')) writeFileSync(path, json);
    else if (readFileSync(path, 'utf8') !== json) throw new Error('Quest data is stale. Run npm run quest:import.');
  }
  console.log('Quest catalog valid: 12 chapters, 168 missions, 26 tasks, 6 draft seeds, 15 draft assessments.');
}
