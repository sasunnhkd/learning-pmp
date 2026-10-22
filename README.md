# PMP 28-Day Path

A static PWA for PMP exam study, built with Vite and TypeScript and with no runtime dependencies. It has two parts:

- **28-day path** (`index.html` → `src/`): one lesson and one practice quiz per day.
- **Mindset Trainer** (`public/PMP_Mindset_Trainer.html`): a standalone page with study notes, flashcards, a scenario quiz and a cheat sheet. Vite copies it into `dist/` as-is.

## Where content lives

| Content | File | Shape |
|---|---|---|
| Daily lessons | `data/curriculum.json` | 28 entries `{day, week, title, domain, lesson, keyTerms}`. Keep days 1–28 and weeks 1–4: `src/views/all.ts` and `getCurrentDay()` in `src/state.ts` depend on them. `lesson` is plain text, escaped on render, with CAPS for emphasis. |
| Daily quizzes | `data/questions.json` | Keys `"1"`–`"28"`, each an array of `{q, options[4], correct (0–3), explain}`. The `as QuestionBank` cast means `tsc` does **not** check this shape. |
| Trainer study notes | `STUDY` in the Trainer page | Section `id`s are keys in each user's saved "read" progress (`state.studyRead`), so never rename an existing id. Add new sections with new ids. |
| Trainer flashcards | `FLASH` | `[topic, front, back]` |
| Trainer scenario quiz | `QUIZ` | `[topic, stem, [4 options], correctIndex, explanation]`. The topic dropdown is built from the distinct topics, so reuse existing topic labels exactly as spelled. Entries 21–200 come from a third-party PMP exam question deck; their topic tags were assigned by hand. |
| Trainer cheat sheet | `CHEAT` | `{t, items[]}` |

## Shipping a change

1. Bump `version` in `package.json` and `package-lock.json` (`npm version <x.y.z> --no-git-tag-version`). The build stamps it into `dist/index.html` as `<meta name="app-version">` (see `vite.config.ts`).
2. Bump `CACHE` in `public/sw.js`. The service worker serves cache-first, so installed clients never see new files otherwise.
3. Run `npm run typecheck && npm run build`, then deploy `dist/`.

## Dependency pins

`package.json` → `overrides` pins nanoid, postcss and source-map-js to reviewed versions that fix the advisories listed in its `"//"` note. Remove the pins when upgrading past vite 5.

## Content sources (as of October 2026)

- **PMI primary source:** *PMP Examination Content Outline – July 2026*. Used for the domain weights (People 33 / Process 41 / Business Environment 26), the 26 tasks, the 40% predictive / 60% agile-and-hybrid split, the exam format (180 questions, 170 scored, 240 minutes, case-study section, item types) and the PMBOK definition of a project.
- **PMI page plus third-party summaries that agree:** PMBOK Guide 8th Edition (November 2025). Used for the 6 principles, the 7 performance domains, the 5 focus areas and the ~40 processes.
- **Deliberately not taught:** PMBOK 8 process-level details (which processes were merged or removed, procurement appendix, where EVM sits). Only single third-party sources reported these, so verify them against the Guide before adding them.
