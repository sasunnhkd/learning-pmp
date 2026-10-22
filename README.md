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

## Daily pacing (no locked lessons)

The 28 days are a suggested pace, not a gate. Learners can open any lesson and quiz at any time, including days after today.

- **"Today"** is `getCurrentDay()` in `src/state.ts`: days since `startDate`, clamped to 1–28. It only picks the dashboard's Today card and the "Today" highlight in the day grid and curriculum list. It never blocks anything.
- **Entry points:** every row in `renderAll()` (`src/views/all.ts`) and every `.day-cell` button in the dashboard day grid (`renderDashboard()` in `src/views/dashboard.ts`) calls `navigate('lesson', day)`. `renderLesson()` (`src/views/lesson.ts`) and `startQuiz()` (`src/actions.ts`) have no day check of their own, so if a lock is ever wanted again it belongs in those two functions.
- **Streak:** `completeLesson()` in `src/actions.ts` adds at most 1 to the streak per calendar date (`lastStudyDate === today()` leaves it unchanged). Doing several lessons in one day marks each one done but does not inflate the streak.

## Shipping a change

1. Bump `version` in `package.json` and `package-lock.json` (`npm version <x.y.z> --no-git-tag-version`). The build stamps it into `dist/index.html` as `<meta name="app-version">` (see `vite.config.ts`).
2. Bump `CACHE` in `public/sw.js`. The service worker serves cache-first, so installed clients never see new files otherwise.
3. Run `npm run typecheck && npm test && npm run build`, then deploy `dist/`. `npm test` needs Node 22.6 or later (`--experimental-strip-types`). Pushing to `main` runs `.github/workflows/deploy.yml` on Node 24: `npm ci`, typecheck, tests and build, then the GitHub Pages deploy. If any step fails, nothing is deployed and the live site stays as it was.

## UI and design system

- **Tokens:** all colours live in `:root` at the top of `src/styles.css`, and dark mode redefines the same tokens under `prefers-color-scheme`. Don't hard-code hex values in CSS or in inline `style=` in `src/views/*`, because they won't switch in dark mode. Add a token instead. The one allowed exception is the decorative sparkle stroke (`#f59e0b`) in `src/icons.ts`, which always sits on the ink card. Every text/background pair is at least 4.5:1 (WCAG AA). `--text-mute` is the lightest text colour allowed, and no label goes below 12px.
- **Fonts:** Fraunces (headings and numbers) and Outfit (body) are self-hosted in `src/assets/fonts/` (latin subset, variable weight 400–600, SIL OFL 1.1 licences next to the files). They are loaded from Google's own servers but bundled with the app because `public/sw.js` only caches same-origin files, so CDN fonts would be missing offline. To swap a font, replace the woff2 file and its `@font-face` rule in `styles.css`.
- **Zoom:** `index.html` must not set `user-scalable=no` or `maximum-scale`. Buttons use `touch-action: manipulation` so double-tap doesn't zoom. The Mindset Trainer page still blocks zoom; that is left for the trainer merge.
- **Quiz results review:** `src/review.ts` `buildReview()` turns `QuizState.questions` and `answers` into rows (your answer, the right answer, the explanation). `renderReview()` in `src/views/quiz.ts` renders them. Keep `review.ts` free of runtime imports so `tests/review.test.ts` can run it under plain Node.
- **Design preview:** mockups for later phases (status report, Gantt schedule, structured lessons, desktop layout) are in `../design-preview/`, outside this repo.

## Dependency pins

`package.json` → `overrides` pins nanoid, postcss and source-map-js to reviewed versions that fix the advisories listed in its `"//"` note. Remove the pins when upgrading past vite 5.

GitHub Actions in `.github/workflows/deploy.yml` are pinned to full commit SHAs, with the release tag in a trailing comment, because a tag can be moved to different code. All of them must run on Node 24; GitHub deprecated Node 20 action runtimes in September 2025. To update one:
1. Read its release notes for breaking changes. For example, `upload-pages-artifact` v4+ leaves out dotfiles unless `include-hidden-files: true` is set.
2. Get the tag's commit with `gh api repos/actions/<name>/commits/<tag> --jq .sha`.
3. Check that the commit is on the action's own history with `gh api repos/actions/<name>/compare/<sha>...main --jq .status`, which should print `ahead` or `identical`.
4. Replace both the SHA and the comment.

The deploy job does not cache npm dependencies (`package-manager-cache: false`), and checkout does not keep the token (`persist-credentials: false`).

## Content sources (as of October 2026)

- **PMI primary source:** *PMP Examination Content Outline – July 2026*. Used for the domain weights (People 33 / Process 41 / Business Environment 26), the 26 tasks, the 40% predictive / 60% agile-and-hybrid split, the exam format (180 questions, 170 scored, 240 minutes, case-study section, item types) and the PMBOK definition of a project.
- **PMI page plus third-party summaries that agree:** PMBOK Guide 8th Edition (November 2025). Used for the 6 principles, the 7 performance domains, the 5 focus areas and the ~40 processes.
- **Deliberately not taught:** PMBOK 8 process-level details (which processes were merged or removed, procurement appendix, where EVM sits). Only single third-party sources reported these, so verify them against the Guide before adding them.
