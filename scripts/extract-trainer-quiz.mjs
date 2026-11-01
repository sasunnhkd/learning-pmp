#!/usr/bin/env node
// Copies the Mindset Trainer's QUIZ array (public/PMP_Mindset_Trainer.html) into
// data/practice-bank.json, which the Daily Practice feature imports (src/state.ts).
// The Trainer page stays the source of truth: edit QUIZ there, then run
//   node scripts/extract-trainer-quiz.mjs
// tests/practice.test.ts fails if the JSON and the Trainer drift apart.
//
// The literal mixes quote styles and has // comments, so it is evaluated with node:vm
// instead of parsed with a regex. That is safe only because the input is this repo's own file.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const TRAINER_PATH = join(root, 'public', 'PMP_Mindset_Trainer.html');
export const BANK_PATH = join(root, 'data', 'practice-bank.json');

// Returns [{topic, q, options, correct, explain}] in Trainer order.
export function extractTrainerQuiz(html) {
  const start = html.indexOf('const QUIZ = [');
  if (start < 0) throw new Error('const QUIZ = [ not found in Trainer page');
  const end = html.indexOf('\n];', start);
  if (end < 0) throw new Error('closing ]; of QUIZ not found');
  const literal = html.slice(start + 'const QUIZ = '.length, end + 2);
  const rows = vm.runInNewContext(`(${literal})`, Object.create(null), { timeout: 1000 });
  return rows.map((r, i) => {
    const [topic, q, options, correct, explain] = r;
    if (typeof topic !== 'string' || typeof q !== 'string' || !Array.isArray(options) || options.length !== 4
      || !Number.isInteger(correct) || correct < 0 || correct > 3 || typeof explain !== 'string') {
      throw new Error(`QUIZ entry ${i + 1} has the wrong shape`);
    }
    return { topic, q, options: [...options], correct, explain };
  });
}

export function renderBank(rows) {
  return JSON.stringify(rows, null, 2) + '\n';
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const rows = extractTrainerQuiz(readFileSync(TRAINER_PATH, 'utf8'));
  writeFileSync(BANK_PATH, renderBank(rows));
  console.log(`Wrote ${rows.length} questions to ${BANK_PATH}`);
}
