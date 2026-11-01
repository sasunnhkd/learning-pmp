// Lesson text markup -> HTML (used by views/lesson.ts) and -> plain text (dashboard preview).
// No runtime imports, so tests/lessonFormat.test.ts can run it under plain Node.
//
// Markup, one construct per line (README "Lesson markup" lists the same set):
//   blank line      paragraph break (the first paragraph is styled as the lead)
//   ## Label        small section label
//   - item          bullet list            1. step   numbered list
//   > text          takeaway callout
//   **term**        bold                   `CPI = EV/AC`   formula
// Text is HTML-escaped before any markup is applied, so lesson content can never inject tags.
// Text without markup renders as a single paragraph, exactly like before.

const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (s: string): string => s.replace(/[&<>"']/g, c => ESC[c]!);

// Backtick spans become <code> verbatim (no bold inside); elsewhere **x** becomes <strong>.
// An unmatched ** or ` is left as literal text.
function inline(s: string): string {
  return s.split(/(`[^`]+`)/).map(part =>
    part.length > 2 && part.startsWith('`') && part.endsWith('`')
      ? `<code>${escapeHtml(part.slice(1, -1))}</code>`
      : escapeHtml(part).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  ).join('');
}

type Kind = 'p' | 'ul' | 'ol' | 'quote';
const UL = /^- +/;
const OL = /^\d+\. +/;
const QUOTE = /^> ?/;
const H = /^## +/;

export function formatLesson(src: string): string {
  const out: string[] = [];
  let kind: Kind | null = null;
  let items: string[] = [];
  let olStart = 1;

  const flush = (): void => {
    if (!kind || items.length === 0) { kind = null; items = []; return; }
    if (kind === 'p') out.push(`<p>${inline(items.join(' '))}</p>`);
    else if (kind === 'quote') out.push(`<blockquote>${inline(items.join(' '))}</blockquote>`);
    else {
      // A numbered list may continue from an earlier one ("4. ..."); the CSS counter needs the offset too.
      const open = kind === 'ol' && olStart !== 1 ? `<ol start="${olStart}" style="counter-reset:step ${olStart - 1}">` : `<${kind}>`;
      out.push(`${open}${items.map(i => `<li>${inline(i)}</li>`).join('')}</${kind}>`);
    }
    kind = null;
    items = [];
  };

  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (H.test(line)) { flush(); out.push(`<h4>${inline(line.replace(H, ''))}</h4>`); continue; }
    const next: Kind = UL.test(line) ? 'ul' : OL.test(line) ? 'ol' : QUOTE.test(line) ? 'quote' : 'p';
    if (next !== kind) {
      flush();
      if (next === 'ol') olStart = parseInt(line, 10);
    }
    kind = next;
    items.push(next === 'ul' ? line.replace(UL, '') : next === 'ol' ? line.replace(OL, '') : next === 'quote' ? line.replace(QUOTE, '') : line);
  }
  flush();
  return out.join('');
}

// Markup removed, lines joined with spaces: for previews and word-level comparisons.
// A "## Label" becomes "Label:" so it still reads as a lead-in when flattened.
export function plainLesson(src: string): string {
  return src
    .split('\n')
    .map(l => l.trim())
    .map(l => (H.test(l) ? l.replace(H, '').replace(/([^.:!?])$/, '$1:') : l.replace(UL, '').replace(OL, '').replace(QUOTE, '')))
    .filter(Boolean)
    .join(' ')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

// Shortens at a word boundary (never mid-word) and adds an ellipsis only when something was cut.
export function previewText(src: string, max = 200): string {
  const plain = plainLesson(src);
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.\-–—]+$/, '')}…`;
}
