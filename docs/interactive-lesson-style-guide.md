# Interactive Lesson Style Guide

## Purpose

Interactive HTML lessons are optional companions to canonical Markdown lectures. Use them when interaction makes a mental model, decision, comparison, sequence, or misconception meaningfully easier to understand or practice.

Do not create an HTML companion merely to duplicate the lecture in another format.

## Architecture

- Store a lecture companion at `<part>/<section>/interactive/<two-digit-lecture-number>-<lecture-slug>.html`.
- Reuse `assets/interactive/pm-study-guide.css` and `assets/interactive/pm-study-guide.js`.
- Start from `templates/interactive-lesson-template.html`.
- Keep the companion functional from the local filesystem without a server, build step, package manager, CDN, external font, analytics, or network request.
- Link from the companion to its canonical Markdown lecture and from the lecture to the companion.
- Treat Markdown as the source of truth. The companion may compress, sequence, reveal, or test approved lecture content but must not become the only place where a required explanation exists.
- For each approved manual visual, point a resilient `<figure data-visual-placeholder>` to the final `../visuals/<approved-filename>.png` path. Show fallback content while the file is absent; the shared runtime must display the image automatically after the correctly named file is added and the page reloads.

## Learning Design

Give each companion one primary learning outcome and one tangible interaction goal. Prefer one to three purposeful widgets over a dashboard of activities.

Available patterns:

- **Reveal:** expose an explanation after the learner predicts or considers an answer.
- **Choice with feedback:** test a decision or distinction and explain why the selected answer fits or fails.
- **Tabs:** compare a small number of parallel perspectives without overwhelming the page.
- **Scenario walkthrough:** compose reveals and choices to move from situation to decision, reasoning, consequence, and transferable lesson.

Quizzes, exercises, reflection prompts, and assignments remain opt-in. Generate only the exact interaction types approved by the user.

## Visual System

Follow the repository visual identity:

- Soft off-white background
- Dark navy primary text
- Blue for neutral structure
- Teal for learning, outcomes, and correct states
- Muted orange for warnings, risks, and reconsideration
- Light gray borders
- Modern system sans-serif typography
- Rounded cards, clear hierarchy, generous whitespace, and limited shadow

Use responsive layouts and keep the main reading column near 72 characters. Make lessons printable without controls obscuring the content.

## Accessibility

- Use semantic landmarks: `header`, `main`, `section`, `nav`, and `footer`.
- Keep one `h1` and a logical heading order.
- Use native buttons for actions and native links for navigation.
- Ensure every control is reachable and operable by keyboard.
- Preserve visible focus indicators.
- Connect controls and panels with `aria-controls`, `aria-expanded`, `aria-selected`, or `aria-live` as appropriate.
- Never encode meaning with color alone.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast and minimum comfortable touch targets.

## Content and Security

- Populate the companion only from the approved study guide and supplied transcript.
- Escape user- or transcript-derived text before inserting it into HTML.
- Do not insert raw transcript HTML, executable transcript text, inline event handlers, `eval`, remote scripts, tracking, forms that transmit data, or third-party embeds.
- Do not persist sensitive content. Local progress storage may use only the companion path and completion state.

## Validation

Before publishing, verify:

- The HTML has a title, language, viewport, one `h1`, main landmark, and back-link to the Markdown lecture.
- Shared CSS and JavaScript paths resolve from the companion location.
- Every approved widget exists exactly once unless multiple instances were explicitly approved.
- Buttons have explicit `type="button"`.
- IDs are unique and ARIA references resolve.
- Correct-answer markers and feedback match the approved lecture content.
- The lesson works with JavaScript disabled as readable content wherever practical.
- The lesson works at narrow mobile width and in print.
- No network dependency or unapproved interaction exists.
- No template placeholder remains.
- Every approved visual placeholder uses the exact manifest filename, descriptive alt text, learning purpose, and correct relative path.
