// Run: npm test (Node >= 22.6 for --experimental-strip-types).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { formatLesson, plainLesson, previewText } from '../src/lessonFormat.ts';

test('text without markup stays one paragraph', () => {
  assert.equal(formatLesson('A project is temporary. It is unique.'), '<p>A project is temporary. It is unique.</p>');
  assert.equal(formatLesson(''), '');
  assert.equal(formatLesson('\n\n  \n'), '');
});

test('escapes HTML before applying markup', () => {
  assert.equal(formatLesson('<script>x</script> & "q"'), '<p>&lt;script&gt;x&lt;/script&gt; &amp; &quot;q&quot;</p>');
  assert.equal(formatLesson('**<b>**'), '<p><strong>&lt;b&gt;</strong></p>');
  assert.equal(formatLesson('`<i>`'), '<p><code>&lt;i&gt;</code></p>');
});

test('blank lines split paragraphs; single newlines join', () => {
  assert.equal(formatLesson('One\ntwo.\n\nThree.'), '<p>One two.</p><p>Three.</p>');
});

test('labels, bullet and numbered lists, callout', () => {
  const src = '## Key ideas\n- **Temporary**: has an end.\n- Unique\n\n1. Define\n2. Sequence\n> Measure **outcomes**.';
  assert.equal(formatLesson(src),
    '<h4>Key ideas</h4><ul><li><strong>Temporary</strong>: has an end.</li><li>Unique</li></ul>' +
    '<ol><li>Define</li><li>Sequence</li></ol><blockquote>Measure <strong>outcomes</strong>.</blockquote>');
});

test('a list directly after a paragraph line starts a new block', () => {
  assert.equal(formatLesson('Tasks:\n- a\n- b\nAfter.'), '<p>Tasks:</p><ul><li>a</li><li>b</li></ul><p>After.</p>');
});

test('numbered list keeps a non-1 start number', () => {
  assert.equal(formatLesson('4. Four\n5. Five'), '<ol start="4" style="counter-reset:step 3"><li>Four</li><li>Five</li></ol>');
});

test('code spans are verbatim; unmatched markers stay literal', () => {
  assert.equal(formatLesson('`CPI = EV/AC` and **bold**'), '<p><code>CPI = EV/AC</code> and <strong>bold</strong></p>');
  assert.equal(formatLesson('`a **b** c`'), '<p><code>a **b** c</code></p>');
  assert.equal(formatLesson('2 ** 3 and ` alone'), '<p>2 ** 3 and ` alone</p>');
});

test('a dash or number inside a sentence is not a list', () => {
  assert.equal(formatLesson('CV = EV - AC, see 1. above'), '<p>CV = EV - AC, see 1. above</p>');
});

test('plainLesson strips markup and joins lines', () => {
  assert.equal(plainLesson('## Key\n- **A**: x\n1. `B = C`\n\n> end'), 'Key: A: x B = C end');
  assert.equal(plainLesson('## Done.\ntext'), 'Done. text');
});

test('previewText cuts at a word boundary with an ellipsis only when cut', () => {
  assert.equal(previewText('short text', 200), 'short text');
  assert.equal(previewText('alpha beta gamma delta', 12), 'alpha beta…');
  assert.equal(previewText('**alpha** beta, gamma', 12), 'alpha beta…');
  assert.equal(previewText('abcdefghijkl', 5), 'abcde…');
});

// Content lint for data/curriculum.json, so future lesson edits keep the markup well-formed.
type Lesson = { day: number; lesson: string };
const lessons = JSON.parse(readFileSync(new URL('../data/curriculum.json', import.meta.url), 'utf8')) as Lesson[];
// Acronyms that legitimately stay in capitals (CAPS-as-emphasis should be **bold** instead).
const ACRONYMS = new Set(['PMBOK', 'PMP', 'PMI', 'PMO', 'EVM', 'CPI', 'SPI', 'EAC', 'ETC', 'BAC', 'VAC', 'TCPI', 'WBS', 'RACI', 'MVP', 'WIP', 'SWOT', 'RAID', 'ROI', 'NPV', 'IRR', 'OKR', 'OKRS', 'KPI', 'KPIS', 'RFP', 'RFQ', 'RFI', 'SOW', 'MOSCOW', 'INVEST', 'DSDM', 'SAFE', 'LESS', 'XP', 'TDD', 'BDD', 'DOD', 'DOR', 'ESG', 'AI', 'ECO', 'CCB', 'PERT', 'SLA', 'CFD', 'EMV']);

test('every lesson has well-formed markup', () => {
  assert.equal(lessons.length, 28);
  for (const l of lessons) {
    const where = `day ${l.day}`;
    assert.ok(l.lesson.trim().length > 0, `${where}: empty`);
    assert.equal((l.lesson.match(/\*\*/g) ?? []).length % 2, 0, `${where}: unbalanced **`);
    assert.equal((l.lesson.match(/`/g) ?? []).length % 2, 0, `${where}: unbalanced backtick`);
    assert.ok(!/\n{3,}/.test(l.lesson), `${where}: more than one blank line in a row`);
    assert.ok(!formatLesson(l.lesson).includes('**'), `${where}: ** left in output`);
  }
});

test('lessons use **bold**, not ALL-CAPS words, for emphasis', () => {
  for (const l of lessons) {
    const words = plainLesson(l.lesson.replace(/`[^`]+`/g, '')).match(/\b[A-Z][A-Z-]{3,}\b/g) ?? [];
    const shouting = words.filter(w => !ACRONYMS.has(w.replace(/-/g, '')));
    assert.deepEqual(shouting, [], `day ${l.day}: CAPS emphasis ${shouting.join(', ')}`);
  }
});
