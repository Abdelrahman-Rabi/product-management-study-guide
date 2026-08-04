---
name: process-lecture
description: Use when processing a Product Management course lecture from structured course metadata and a supplied transcript into the PM Study Guide repository.
---

# Process Lecture

## Overview

Process one lecture into a repository-ready study guide while preserving the supplied transcript as the only lecture-content source, preventing invented structure or links, and requiring explicit approval before any GitHub write.

**Core rule:** No GitHub write occurs before repository conflict checks and both approval gates are complete.

## Required Input

Require all seven fields in one request:

- Part number
- Part title
- Section number
- Section title
- Lecture number
- Lecture title
- Full transcript

If any field is missing, stop. List the missing fields and ask for one complete structured input block.

When required input is incomplete:

- Do not search the repository, course slides, uploaded files, or external sources to propose, confirm, or suggest missing metadata.
- Do not infer course location, numbering, filenames, course order, links, or transcript content.
- Do not generate proposed paths, visuals, branches, commits, or pull requests.

## Repository Inspection

Complete all reads and conflict checks before content generation, branch creation, or file writes:

1. `AGENTS.md`
2. `LEARNING-MISSION.md`
3. `docs/study-guide-rules.md`
4. `docs/repository-structure.md`
5. `docs/visual-style-guide.md`
6. `docs/interactive-lesson-style-guide.md`
7. `docs/quality-checklist.md`
8. `templates/lecture-template.md`
9. `templates/interactive-lesson-template.html`
10. Relevant part and section folders
11. Relevant part and section README files when they exist
12. Completed lectures in the same section when they exist
13. `COURSE-INDEX.md`
14. `GLOSSARY.md`
15. `VISUAL-INDEX.md`
16. `COURSE-CONCEPT-MAP.md`
17. Existing shared files under `assets/interactive/`
18. Any authoritative course-structure source available in the repository or supplied by the user, such as a course syllabus, course slides, or an approved course map

Compare the supplied part, section, lecture number, and lecture title against all authoritative course-structure sources before drafting the study guide.

Use existing repository content only to establish conventions, file existence, navigation, and conflicts. Do not use it to invent missing lecture content.

Use `LEARNING-MISSION.md` only to calibrate teaching purpose, learner context, examples, and scaffolding. Never use it as evidence for a lecture-content claim.

## Blocking Conflicts

Stop before content generation, branch creation, and every GitHub write when any of these occurs:

- A required rule or template is missing
- The supplied lecture title exists under a different lecture number in an authoritative source
- The supplied lecture number exists under a different title in an authoritative source
- The lecture number is already used by a different repository file or title
- The section number and title disagree with repository or authoritative course structure
- The proposed filename collides with an existing file
- The target branch already exists
- Course order is unclear
- A relative link cannot be verified against an existing target
- Instructions conflict and priority does not resolve them clearly
- A required change would invent content, files, navigation, or completion state

Do not resolve a metadata conflict by silently trusting the user input or by selecting another source yourself.

Return a blocker report with:

```text
Conflict: <what disagrees>
Evidence: <authoritative source, existing path, metadata, or instruction>
Decision required: <the exact user decision or correction needed>
No GitHub changes made.
```

Do not generate a study guide, proposed paths, visual recommendations, partial branch, or partial pull request after detecting a blocker.

## First-Pass Content Contract

### Mission and Scaffolding Calibration

Before the Pedagogical Design Pass:

1. Connect the lecture to one relevant success criterion in `LEARNING-MISSION.md`.
2. Assess concept complexity from the transcript as low, medium, or high.
3. Assess learner familiarity as established, adjacent, or unfamiliar using only explicit learner context, user statements, and demonstrated learning evidence when available.
4. Treat existing lecture coverage as exposure, not proof of mastery.
5. Choose the minimum scaffolding needed:
   - Established: bridge quickly to the new Product Management implication; do not reteach familiar foundations.
   - Adjacent: connect the new concept to a documented familiar idea, then state where the analogy stops.
   - Unfamiliar: define the minimum prerequisite knowledge before introducing the new mental model.
6. Keep material level and scaffolding separate. Select material level from lecture importance and complexity; select scaffolding from learner distance.

Do not ask the user to choose a material level or familiarity label. When evidence is insufficient, use unfamiliar and provide concise scaffolding rather than claiming knowledge the learner has not demonstrated.

### Concept Dependencies

Identify only dependencies supported by the transcript and verified repository context:

- Prerequisite: needed to understand this lecture
- Application: a place where this lecture's idea is used
- Extension: a later or deeper concept that builds on it

Use these roles to choose explanations and Related Concepts links. Link only to existing targets. If a required prerequisite has no existing target, explain the minimum transcript-supported context locally and mark the link unavailable; do not create a placeholder or invent course order.

Read [references/pedagogical-patterns.md](references/pedagogical-patterns.md) when a Level 2 or Level 3 lecture, a meaningful comparison, a causal or decision model, a process, a feedback loop, a misconception, or a visual recommendation needs a reusable teaching structure. Load only this directly linked reference and use only the patterns relevant to the transcript.

### Pedagogical Design Pass

Before writing the study guide, transform the transcript into a teaching plan:

1. State one primary, observable learning outcome using a verb such as distinguish, explain, diagnose, choose, map, evaluate, or apply.
2. Extract the instructor's central claim and the minimum supporting claims needed to understand it.
3. Separate prerequisite ideas, new ideas, meaningful distinctions, and causal relationships.
4. Identify the smallest accurate mental model that organizes the lecture.
5. Identify likely misconceptions only when the transcript supports a plausible source of confusion.
6. Select one practical application that makes the lecture's reasoning visible when an example is required.
7. Remove any section, example, definition, takeaway, or visual recommendation that does not support the learning outcome.
8. Verify that every lecture-content claim remains grounded in the supplied transcript.

Use the outcome as a drafting constraint, not as a mandatory new template heading. Reflect it concisely in the Lecture Overview so the learner knows what they should be able to understand or do by the end.

### Cognitive-Load Budget

Optimize for one coherent mental model rather than maximum coverage:

- Center the lecture on one primary learning outcome.
- Use the fewest major conceptual sections that preserve the instructor's meaning; usually three to five are enough, but do not force this range.
- Give each section one main teaching job.
- Prefer one strong practical example over several interchangeable examples.
- Include only definitions required to understand or apply the lecture.
- Keep primary takeaways distinct and memorable; group secondary implications instead of presenting a long flat list.
- Give every recommended visual one unique learning purpose.
- Preserve necessary nuance in foundational material; concision must not create distortion.

Do not add quizzes, reflection questions, exercises, assignments, or other retrieval-practice content unless the user explicitly requests them.

### Practical Example Contract

For each required practical Product Management example, make the reasoning transferable:

```text
Situation -> Decision -> Reasoning -> Consequence -> Transferable lesson
```

The example must demonstrate a specific lecture concept, not merely mention a preferred product domain. Keep it shorter than the lesson it supports. Revise or replace a decorative example whose connection to the learning outcome cannot be stated clearly; do not omit a required Level 2 or Level 3 example.

### Misconception-Repair Contract

When a Common Misunderstandings section is useful, explain:

1. The misconception
2. Why it can appear plausible
3. The correct mental model
4. The Product Management decision or behavior it changes

Do not invent misconceptions solely to fill the template.

Use only the supplied transcript as the lecture-content source. Preserve the instructor’s meaning, remove spoken repetition and noise, and follow `templates/lecture-template.md`.

Present the first pass in this order:

1. Material level, scaffolding choice, and brief rationale
2. Proposed lecture filename and repository path
3. Proposed raw transcript path
4. Complete study guide
5. Repository files proposed for creation or update
6. Unknown navigation and related links marked unavailable
7. Lecture-content and pedagogical quality-check result
8. Recommended learning assets: visual illustrations and an interactive HTML companion only when each adds distinct educational value
9. Gate 1 approval request

For Level 2 and Level 3, include a directly relevant practical Product Management example that satisfies the Practical Example Contract. Add a Mermaid or text visual summary when useful. Recommend visuals but do not prepare final production prompts until Gate 2.

The transcript source file must preserve the transcript wording exactly as supplied after removing only surrounding user delimiters. Minimal metadata and a heading may wrap it. Do not normalize punctuation, wording, or line breaks intentionally.

## Approval Gates

### Gate 1 — Written Content

Proceed only after the user explicitly approves the written study guide. Revision requests keep the workflow at Gate 1.

General instructions such as “publish automatically” do not bypass this gate.

### Gate 2 — Exact Learning Asset Selection

After Gate 1, ask the user to approve the exact learning assets: all, selected, or revised visuals; one HTML companion with named widget types; or no additional assets.

Prepare prompts only for the specifically approved visuals, and generate only the specifically approved interactive companion widgets. Approval of the lecture content is not approval of any additional learning asset.

No branch or repository write may occur before both gates are resolved.

Gate 2 approval authorizes local draft creation and the manual visual handoff:

```text
dedicated branch → local Markdown and HTML draft → visual placeholders → professional prompt package → user adds image files → asset verification → final repository updates → validation → commit → draft pull request
```

The manual asset handoff is a required pause, not an additional approval gate. Do not commit, push, or open a pull request until the user-supplied files are present and verified.

## Manual Visual Production

- Never call an image-generation tool during this workflow.
- After Gate 2, read and follow [references/manual-visual-production.md](references/manual-visual-production.md).
- Create one professional, self-contained generation prompt per approved visual for the user to run manually in ChatGPT or another image interface.
- Fix the filename and section-level destination before writing each prompt.
- Store lecture visuals only in `<part>/<section>/visuals/` and prefix each filename with the two-digit lecture number.
- Treat each approved visual as one separate PNG unless the user explicitly approves one combined asset.
- When an HTML companion is approved, create resilient placeholders that reference the final filenames before the files exist.
- Do not add missing-image embeds to canonical Markdown. Embed visuals near their concepts only after the files are verified.
- Update `VISUAL-INDEX.md` only after the files are verified.
- If no visual is approved, use `visuals: 0` and skip the manual handoff.

### Post-Gate-2 Draft and Handoff

After Gate 2:

1. Recheck that the target branch does not exist and create `lecture-<two-digit-number>-<lecture-slug>` from current `main`.
2. Create the local Markdown lecture and exact transcript draft.
3. Create the approved HTML companion and one placeholder per approved visual when a companion is approved.
4. Add or reuse the shared interactive assets.
5. Produce the visual manifest and professional prompt package with exact filenames and destinations.
6. Ask the user to generate every visual separately, export it under the exact filename, place it in the stated section-level `visuals/` folder, and confirm when complete.
7. Pause. Do not commit, push, open a pull request, mark visuals complete, or add missing-image Markdown embeds.

When the user confirms that files were added, inspect the filesystem and every image. Preserve valid files and report each missing or invalid asset precisely. Continue only after approved count, filenames, locations, dimensions, content, and visual quality are verified.

## Interactive Companion Rules

- Generate at most one HTML companion per lecture and only after Gate 2 explicitly approves it and names the widget types.
- Follow `docs/interactive-lesson-style-guide.md` and start from `templates/interactive-lesson-template.html`.
- Store it at `<part>/<section>/interactive/<two-digit-lecture-number>-<lecture-slug>.html`.
- Keep the Markdown lecture canonical and link the lecture and companion in both directions.
- Populate the companion only from the approved guide and supplied transcript. Escape transcript-derived text before inserting it into HTML.
- Reuse `assets/interactive/pm-study-guide.css` and `assets/interactive/pm-study-guide.js`; do not inline duplicate shared components.
- Keep it offline-first: no build step, CDN, remote script, external font, analytics, form submission, third-party embed, or network dependency.
- Include one primary learning outcome and only the approved widget types. Prefer one to three purposeful widgets.
- Recommend a companion with its title, learning purpose, proposed filename, exact widget types, and why interaction adds value beyond Markdown. Do not recommend one when static content is equally effective.
- Treat approval of a reveal, choice with feedback, tabs, or a scenario walkthrough composed from those widgets as approval only for that named interaction.
- Treat quizzes, exercises, reflection prompts, and assignments as opt-in widgets; never infer their approval from approval of the HTML companion itself.
- Preserve semantic HTML, keyboard operation, visible focus, reduced-motion support, responsive layout, and print readability.
- Do not put a required lecture explanation only in the companion.
- If companion generation or validation fails, stop before repository writes and report the failure.

## Finalize Repository Writes

After both gates are resolved and all approved learning assets are verified:

1. Embed each verified visual near its relevant concept in Markdown and HTML.
2. Remove HTML fallback content only if it no longer adds resilience; the image path must remain the approved final path.
3. Set `visuals` and `status` to match actual files.
4. Update only confirmed indexes, READMEs, glossary entries, navigation, and learning-asset references.
5. Update `VISUAL-INDEX.md` for verified visuals only.
6. Update `COURSE-CONCEPT-MAP.md` only for a major course-level relationship supported by the lecture.
7. Never create section summaries, section mind maps, part summaries, part mind maps, future lecture files, or empty placeholders during a lecture run.
8. Never write directly to `main`.

## Validation Before Commit

Validate all applicable checks in `docs/quality-checklist.md`, including:

- The guide advances a relevant success criterion from `LEARNING-MISSION.md`
- Scaffolding reflects documented learner familiarity without treating coverage as mastery
- Material level and scaffolding are assessed independently
- Prerequisites, applications, and extensions are transcript-supported and link only to verified targets
- Reusable pedagogical patterns organize relationships without importing unsupported content
- One observable learning outcome governs the guide and is reflected in the Lecture Overview
- The central claim, supporting ideas, mental model, and teaching structure remain grounded in the supplied transcript
- Every major section supports the learning outcome and has one clear teaching job
- Cognitive load is controlled without removing necessary nuance
- Each required practical example shows situation, decision, reasoning, consequence, and a transferable lesson
- Each included misconception explains why it is plausible, supplies the correct mental model, and identifies the decision consequence
- YAML syntax and metadata matching the actual repository state
- Correct part, section, and lecture numbers and titles
- Supplied metadata matching authoritative course-structure sources
- Lowercase kebab-case paths and correct two-digit prefixes
- Exact transcript preservation
- Separation of transcript and polished guide
- Links only to existing targets
- No placeholder or invented previous/next navigation
- Correct relative paths
- Valid Mermaid syntax when present
- Approved visual count equals manually supplied file count
- One separate image file exists for each approved visual
- Actual visual filenames, storage, embeddings, and visual-index entries match
- Approved companion count and widget types match the generated HTML
- Companion filename, section-level storage, and bidirectional Markdown link match
- Shared CSS and JavaScript paths resolve without a network dependency
- HTML structure, unique IDs, ARIA references, keyboard behavior, responsive layout, and print behavior pass the interactive checklist
- Transcript-derived HTML is escaped and no executable transcript content, inline event handler, remote script, analytics, or form submission exists
- No required explanation exists only in the companion
- No template placeholder remains in the published companion
- No incomplete file marked `complete`
- Only lecture-related files changed

Stop before commit on any failed check. Report the failed check, evidence, and required correction.

## Commit and Draft Pull Request

After validation succeeds:

- Commit only files related to the lecture.
- Use commit title `Add lecture <number> <title>`.
- Push the dedicated branch.
- Open a **draft** pull request targeting `main` titled `Add Lecture <number>: <title>`.

The pull request body must include:

- Summary
- Files created
- Files updated
- Visuals included
- Interactive companion and widgets included
- Validation completed
- Intentionally not included
- Remaining review items

Do not mark the pull request ready or merge it automatically.

## Quick Flow

Structured input → metadata validation → repository inspection → conflict check → mission and scaffolding calibration → dependency mapping → pedagogical design pass → focused study guide draft → Gate 1 → exact learning-asset selection → Gate 2 → dedicated branch and local placeholders → professional prompt handoff → user adds visual files → asset verification → final repository updates → validation → commit → draft PR
