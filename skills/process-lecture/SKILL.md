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
2. `docs/study-guide-rules.md`
3. `docs/repository-structure.md`
4. `docs/visual-style-guide.md`
5. `docs/quality-checklist.md`
6. `templates/lecture-template.md`
7. Relevant part and section folders
8. Relevant part and section README files when they exist
9. Completed lectures in the same section when they exist
10. `COURSE-INDEX.md`
11. `GLOSSARY.md`
12. `VISUAL-INDEX.md`
13. Any authoritative course-structure source available in the repository or supplied by the user, such as a course syllabus, course slides, or an approved course map

Compare the supplied part, section, lecture number, and lecture title against all authoritative course-structure sources before drafting the study guide.

Use existing repository content only to establish conventions, file existence, navigation, and conflicts. Do not use it to invent missing lecture content.

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

Use only the supplied transcript as the lecture-content source. Preserve the instructor’s meaning, remove spoken repetition and noise, and follow `templates/lecture-template.md`.

Present the first pass in this order:

1. Material level and brief rationale
2. Proposed lecture filename and repository path
3. Proposed raw transcript path
4. Complete study guide
5. Repository files proposed for creation or update
6. Unknown navigation and related links marked unavailable
7. Lecture-content quality-check result
8. Recommended visual illustrations
9. Gate 1 approval request

For Level 2 and Level 3, include a directly relevant practical Product Management example. Add a Mermaid or text visual summary when useful. Recommend visuals but do not generate them yet.

The transcript source file must preserve the transcript wording exactly as supplied after removing only surrounding user delimiters. Minimal metadata and a heading may wrap it. Do not normalize punctuation, wording, or line breaks intentionally.

## Approval Gates

### Gate 1 — Written Content

Proceed only after the user explicitly approves the written study guide. Revision requests keep the workflow at Gate 1.

General instructions such as “publish automatically” do not bypass this gate.

### Gate 2 — Exact Visual Selection

After Gate 1, ask the user to approve all recommended visuals, selected visuals, revised visuals, or no visuals.

Generate only the specifically approved visuals. Approval of the lecture content is not approval of the visuals.

No branch or repository write may occur before both gates are resolved.

Gate 2 approval authorizes the remaining workflow as one continuous sequence:

```text
approved visual generation → visual verification → dedicated branch → repository writes → validation → commit → draft pull request
```

Do not ask for another approval after Gate 2 unless the user explicitly requested a visual-review checkpoint.

## Visual Rules

- Generate visuals only after Gate 2.
- Follow `docs/visual-style-guide.md`.
- Store lecture visuals in the section-level `visuals/` folder.
- Prefix visual filenames with the two-digit lecture number.
- Embed each visual near the concept it explains.
- Update `VISUAL-INDEX.md` only for visuals that were actually generated.
- If no visual is approved, use `visuals: 0` and `status: content-complete`, then continue directly to branch creation and publishing.
- If approved visual generation fails, stop before repository writes and report the failed visual.

### Multiple Approved Visuals

When the user approves more than one visual:

- Treat each approved visual as one separate image asset.
- Generate exactly one image file per approved visual.
- Approval of five visuals means five separate image files.
- Never combine multiple approved visuals into one infographic, collage, grid, contact sheet, or multi-panel image unless the user explicitly requests one combined visual.
- Use the approved filename for each image.
- Track each visual individually with:
  - Visual name
  - Expected filename
  - Generated successfully: yes or no
- Verify that the generated file count exactly matches the approved visual count.
- Do not continue to repository writes while any approved visual is missing, combined incorrectly, or failed.
- If generation stops before all approved visuals are complete, resume the remaining visuals rather than ending the workflow.

### Continue After Visual Generation

After the final approved visual is generated successfully:

1. Verify the approved count, filenames, and separate image assets.
2. Do not end the response after displaying generated images.
3. Immediately continue to the branch and repository-write workflow.
4. Pause only for a blocker, failed validation, or an explicitly requested visual-review checkpoint.

## Branch and Repository Writes

After both gates are resolved and any approved visuals are verified:

1. Recheck that the target branch does not exist.
2. Create `lecture-<two-digit-number>-<lecture-slug>` from current `main`.
3. Create only the minimum missing part/section README and folder structure required by the lecture.
4. Create the polished lecture file.
5. Create the exact transcript source file.
6. Add only approved generated visuals.
7. Embed each visual near its relevant concept.
8. Update only confirmed indexes, READMEs, glossary entries, navigation, and visual references.
9. Update `COURSE-CONCEPT-MAP.md` only for a major course-level relationship supported by the lecture.
10. Never create section summaries, section mind maps, part summaries, part mind maps, future lecture files, or empty placeholders during a lecture run.
11. Never write directly to `main`.

## Validation Before Commit

Validate all applicable checks in `docs/quality-checklist.md`, including:

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
- Approved visual count equals generated file count
- One separate image file exists for each approved visual
- Actual visual filenames, storage, embeddings, and visual-index entries match
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
- Validation completed
- Intentionally not included
- Remaining review items

Do not mark the pull request ready or merge it automatically.

## Quick Flow

Structured input → metadata validation → repository inspection → conflict check → study guide draft → Gate 1 → visual selection → Gate 2 → separate approved visual generation → visual verification → dedicated branch → minimum writes → validation → commit → draft PR
