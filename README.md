# PMP 28-Day Path

A static PWA for PMP exam study, built with Vite and TypeScript and with no runtime dependencies. It has two parts:

- **28-day path** (`index.html` → `src/`): one lesson and one practice quiz per day, plus a 10-question **Daily Practice** with topic choice and progress stats.
- **Mindset Trainer** (`public/PMP_Mindset_Trainer.html`): a standalone page with study notes, flashcards, a scenario quiz and a cheat sheet. Vite copies it into `dist/` as-is.

## Where content lives

| Content | File | Shape |
|---|---|---|
| Daily lessons | `data/curriculum.json` | 28 entries `{day, week, title, domain, lesson, keyTerms}`. Keep days 1–28 and weeks 1–4: `src/views/all.ts` and `getCurrentDay()` in `src/state.ts` depend on them. `lesson` uses the light markup in [Lesson markup](#lesson-markup) below; it is parsed by `formatLesson()` in `src/lessonFormat.ts` and rendered by `renderLesson()` in `src/views/lesson.ts`. |
| Daily quizzes | `data/questions.json` | Keys `"1"`–`"28"`, each an array of `{q, options[4], correct (0–3), explain}`. The `as QuestionBank` cast means `tsc` does **not** check this shape. |
| Trainer study notes | `STUDY` in the Trainer page | Section `id`s are keys in each user's saved "read" progress (`state.studyRead`), so never rename an existing id. Add new sections with new ids. |
| Trainer flashcards | `FLASH` | `[topic, front, back]` |
| Trainer scenario quiz | `QUIZ` | `[topic, stem, [4 options], correctIndex, explanation]`. The topic dropdown is built from the distinct topics, so reuse existing topic labels exactly as spelled. Entries 21–200 come from a third-party PMP exam question deck; their topic tags were assigned by hand. **Daily Practice also uses these:** after editing `QUIZ`, run `node scripts/extract-trainer-quiz.mjs` to refresh `data/practice-bank.json`, and map any new topic label in `TRAINER_TOPIC` (`src/practice.ts`). `npm test` fails until both are done. |
| Daily Practice bank | `data/practice-bank.json` | Generated copy of the Trainer `QUIZ` as `[{topic, q, options[4], correct, explain}]`. Never edit by hand. |
| Trainer cheat sheet | `CHEAT` | `{t, items[]}` |

## Lesson markup

Each `lesson` string in `data/curriculum.json` is plain text plus a few markers, one construct per line (`\n` in JSON):

| Write | Renders as |
|---|---|
| blank line | new paragraph (the first paragraph is styled as a larger lead) |
| `## Key ideas` | small section label |
| `- item` | bullet list |
| `1. step` | numbered list (a list can start at another number, e.g. `4.`) |
| `> text` | highlighted takeaway |
| `**term**` | bold term, used for emphasis instead of ALL CAPS |
| `` `CPI = EV/AC` `` | formula, shown verbatim |

- **Safety:** `formatLesson()` HTML-escapes the text before it applies any markup, so lesson text can't inject tags. A lesson with no markers renders as one paragraph.
- **Dashboard preview:** `previewText()` (same file) strips the markers and shortens at a word boundary; `renderDashboard()` uses it for the Today card.
- **Checks:** `tests/lessonFormat.test.ts` tests the formatter and lints every lesson: balanced `**` and backticks, no more than one blank line in a row, and no ALL-CAPS emphasis. Acronyms such as PMBOK, CPI and WBS are allowed through the `ACRONYMS` list in that test; add a new acronym there if the lint flags a real one.
- **Styling:** `.lesson-text` rules in `src/styles.css`.

## Daily pacing (no locked lessons)

The 28 days are a suggested pace, not a gate. Learners can open any lesson and quiz at any time, including days after today.

- **"Today"** is `getCurrentDay()` in `src/state.ts`: days since `startDate`, clamped to 1–28. It only picks the dashboard's Today card and the "Today" highlight in the day grid and curriculum list. It never blocks anything.
- **Entry points:** every row in `renderAll()` (`src/views/all.ts`) and every `.day-cell` button in the dashboard day grid (`renderDashboard()` in `src/views/dashboard.ts`) calls `navigate('lesson', day)`. `renderLesson()` (`src/views/lesson.ts`) and `startQuiz()` (`src/actions.ts`) have no day check of their own, so if a lock is ever wanted again it belongs in those two functions.
- **Streak:** `bumpStreak()` in `src/actions.ts` adds at most 1 to the streak per calendar date (`lastStudyDate === today()` leaves it unchanged). It is called by `completeLesson()` and when a Daily Practice session finishes. Doing several lessons or sessions in one day does not inflate the streak.

## Daily Practice (v0.5.0)

A 10-question session the learner can run every day, separate from the 28 day quizzes. The dashboard card (`renderPracticeCard()` in `src/views/dashboard.ts`) opens the picker (`view: 'practice'`, `renderPracticePicker()` in `src/views/practice.ts`). The stats screen is `view: 'stats'` (`renderPracticeStats()`, same file). Sessions run through the same quiz screen as day quizzes, with `QuizState.kind === 'practice'`.

- **Pool:** `practicePool` in `src/state.ts` = every day-quiz question (`data/questions.json`) + every Trainer `QUIZ` question (`data/practice-bank.json`), built by `buildPool()` in `src/practice.ts`. Duplicate stems are kept once.
- **Topics:** one table, `TOPICS` in `src/practice.ts` (id, label, exam domain). Day questions get their topic from `DAY_TOPIC` (per day, not per curriculum domain, because "Planning" spans four topics). Trainer questions get theirs from `TRAINER_TOPIC`; tiny labels are folded in (Role and Resources into Team, Change into Integration). Topic ids are stored in saved sessions, so never rename an id; labels are free to change. Foundations counts as Process and Exam Mindset as Business Environment; neither is an official ECO domain.
- **Modes** (`selectSession()`): 
  - *Exam mix* picks `EXAM_MIX` = 3 People / 4 Process / 3 Business (the ECO 33/41/26 weights over 10). If a domain runs short it tops up from the others. The 40/60 predictive/agile split is **not** applied: questions are not tagged by approach.
  - *Choose topics*: any set of topics. If they hold fewer than 10 questions the session is shorter, and the start button shows the real count.
  - *Retry my mistakes*: up to 10 questions whose **last** answer was wrong, most recent first.
  - Inside each pool the order is: never seen, then last answered wrong, then longest ago, with random ties. Question order is shuffled; options are not (`correct` is an index).
- **Saved data:** `AppData.practice` (`PracticeData` in `src/types.ts`): `questions[id]` = `{seen, correct, lastCorrect, lastAt}`, `sessions` (capped at `MAX_SESSIONS` = 100) and `lastDate`. `id` is `questionId()`, an FNV-1a hash of the stem, so reordering a bank keeps stats but **editing a stem resets that question's stats**. Data saved before v0.5.0 has no `practice`; `loadOrInit()` merges defaults on load.
- **When things are written:** `submitAnswer()` records the per-question stat immediately, for day quizzes too, so leaving mid-session keeps it and day-quiz answers count toward topic coverage and mistakes. Finishing a practice session (`nextQuestion()`) appends the session, adds to `totalCorrect` / `totalAnswered`, and bumps the streak via `bumpStreak()` (at most once per date, shared with lessons). Practice never writes `quizScores` or `completedDays`.
- **Stats rules** (`computeStats()`, `topicStatus()`): *not covered* = 0 answers in the topic. *Needs work* = accuracy below `WEAK_ACCURACY` (70%) after at least `MIN_ATTEMPTS` (3) answers. Coverage = unique questions seen ÷ topic pool size. Answers to questions no longer in the pool are ignored.
- **To change:** session size → `SESSION_SIZE`; exam split → `EXAM_MIX`; weak threshold → `WEAK_ACCURACY` / `MIN_ATTEMPTS`; add a topic → `TOPICS` plus a mapping in `DAY_TOPIC` / `TRAINER_TOPIC`. Logic in `src/practice.ts` stays free of runtime imports so `tests/practice.test.ts` runs it under plain Node.
- **Design preview:** `../design-preview/daily-practice.html`.

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

## Brand and app icon

The logo is a typographic lockup: "pmp" in Fraunces (weight 900, SOFT 100, optical size 144) over a four-marker route (one marker per week, the last one amber for exam day) and the tagline "28-DAYS PATH" in Outfit 600. Everything is outlined to paths, so the SVGs need no fonts.

| File | Use |
|---|---|
| `public/icon.svg` | Favicon and all manifest icons (`index.html`, `public/manifest.webmanifest`). Full-bleed ink with a cream "p" and the amber marker, so it survives the `maskable` crop. |
| `public/apple-touch-icon.png` | iOS home-screen icon (180×180), since iOS ignores SVG there. Rasterised from `icon.svg` with `qlmanage -t -s 180 -o <dir> public/icon.svg` on macOS; regenerate it whenever `icon.svg` changes. |
| `public/brand/pmp-path-logo.svg` | Lockup for light backgrounds (ink text, transparent). |
| `public/brand/pmp-path-logo-dark.svg` | Lockup for dark backgrounds (cream text, transparent). |
| `public/brand/pmp-path-logo-tile.svg` | Square ink tile with the full lockup (social, README, store listing). |

To change the mark, edit `design-tools/compose.py` (layout, colours) or `design-tools/outline.py` (fonts, axes, text, tracking), re-run both as described in their headers, copy the output over the files above, and re-rasterise `apple-touch-icon.png`. The scripts need fonttools and the full Fraunces/Outfit variable TTFs from the Google Fonts repository; the bundled woff2 files only cover weights 400–600. The header `<h1>` in `src/views/dashboard.ts` does not use the logo yet.

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
