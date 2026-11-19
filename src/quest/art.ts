// Match by the illustrated project, not the filename's export number.
// Phoenix shares the collaboration artwork until it has a dedicated illustration.
export const CHAPTER_ART: Record<string, number> = {
  CH01: 5, CH02: 3, CH03: 1, CH04: 4, CH05: 2, CH06: 7,
  CH07: 5, CH08: 6, CH09: 8, CH10: 9, CH11: 11, CH12: 10,
};

export function chapterIllustration(chapterId: string, thumbnail = false): string {
  const art = CHAPTER_ART[chapterId];
  if (!art) return '';
  const base = `${import.meta.env.BASE_URL}illu/web/art-${art}`;
  // Decorative: the adjacent chapter and mission labels carry the accessible meaning.
  return `<picture class="quest-chapter-illustration" aria-hidden="true"><img
    src="${base}-${thumbnail ? 256 : 720}.webp"
    srcset="${base}-256.webp 256w, ${base}-720.webp 720w"
    sizes="${thumbnail ? '150px' : '(max-width: 480px) calc(100vw - 32px), 320px'}"
    width="720" height="900" alt="" loading="${thumbnail ? 'lazy' : 'eager'}" decoding="async"></picture>`;
}
