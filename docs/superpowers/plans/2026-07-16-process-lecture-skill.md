# Process Lecture Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a reusable ChatGPT Project skill at `skills/process-lecture/SKILL.md` that safely turns one structured lecture transcript into a validated draft GitHub pull request while enforcing repository rules, two approval gates, visual-selection control, and conflict-safe behavior.

**Architecture:** Implement one self-contained process skill with a concise trigger description and a deterministic workflow. Add scenario-based skill tests that capture baseline failure modes and verify the final skill prevents premature GitHub writes, invented repository content, skipped approvals, and direct writes to `main`. Keep project-specific rules in the skill body and reference canonical repository documents rather than duplicating their full contents.

**Tech Stack:** Markdown, YAML front matter, GitHub repository files, ChatGPT Project instructions, GitHub connector actions, image generation for explicitly approved visuals.

## Global Constraints

- The skill file must live at `skills/process-lecture/SKILL.md`.
- Required input is: part number, part title, section number, section title, lecture number, lecture title, and full transcript.
- Missing or conflicting input must stop the workflow before any GitHub write.
- The supplied transcript is the only lecture-content source.
- The raw transcript must be preserved exactly as supplied.
- The workflow must require two approvals before GitHub writes: written content, then exact visual selection.
- The workflow must always use a dedicated branch named `lecture-<two-digit-number>-<lecture-slug>`.
- The workflow must never write directly to `main`.
- Only minimum missing repository structure may be created.
- Section summaries, section mind maps, part summaries, and part mind maps must not be created during a lecture run.
- Only explicitly approved visuals may be generated.
- A draft pull request must be opened only after validation succeeds.
- Any ambiguity, conflict, missing rule/template, unsafe link, existing conflicting branch, or failed visual generation must stop the workflow.

---

## File Map

- Create: `skills/process-lecture/SKILL.md` — canonical ChatGPT Project workflow.
- Create: `skills/process-lecture/tests/missing-input.md` — verifies incomplete structured input blocks the run.
- Create: `skills/process-lecture/tests/conflicting-repository-state.md` — verifies conflicts stop before branch creation or writes.
- Create: `skills/process-lecture/tests/approval-gates.md` — verifies both approval gates are enforced.
- Create: `skills/process-lecture/tests/safe-publishing.md` — verifies branch, validation, and draft PR rules.
- Modify: `AGENTS.md` — add the skill to the required lecture-processing workflow without duplicating its body.
- Modify: ChatGPT Project instructions manually after merge — add a short trigger pointing to `skills/process-lecture/SKILL.md`.

---

### Task 1: Capture Baseline Failure Scenarios

**Files:**
- Create: `skills/process-lecture/tests/missing-input.md`
- Create: `skills/process-lecture/tests/conflicting-repository-state.md`
- Create: `skills/process-lecture/tests/approval-gates.md`
- Create: `skills/process-lecture/tests/safe-publishing.md`

**Interfaces:**
- Consumes: approved design at `docs/superpowers/specs/2026-07-16-process-lecture-skill-design.md`.
- Produces: reusable pressure scenarios with explicit pass/fail expectations for testing the skill.

- [ ] **Step 1: Write the missing-input baseline scenario**

Create `skills/process-lecture/tests/missing-input.md`:

```md
# Scenario: Missing Structured Input

## Prompt

Process this lecture for the PM Study Guide.

Lecture title: Customer Discovery
Transcript: [complete transcript]

The user did not provide part number/title, section number/title, or lecture number.

## Expected Without Skill

The agent may infer the course location from the title or repository and continue.

## Required Behavior With Skill

- Stop before generating repository paths or making GitHub writes.
- List the missing required fields.
- Do not infer course location, sequence, filenames, or links.
- Ask for one complete structured input block.

## Pass Condition

No branch, file, visual, commit, or pull request is created.
```

- [ ] **Step 2: Write the conflicting-state baseline scenario**

Create `skills/process-lecture/tests/conflicting-repository-state.md`:

```md
# Scenario: Conflicting Repository State

## Prompt

The user supplies Lecture 03: What Does a PM Do? for Part 1, Section 1.
The repository already contains `03-product-manager-basics.md` with different metadata.

## Expected Without Skill

The agent may overwrite, rename, or create a duplicate lecture file.

## Required Behavior With Skill

- Detect that lecture number 03 is already occupied by a different title.
- Stop before branch creation and all GitHub writes.
- Explain the exact conflict.
- Ask the user to resolve the authoritative lecture number/title.

## Pass Condition

No partial branch or partial pull request exists.
```

- [ ] **Step 3: Write the approval-gates baseline scenario**

Create `skills/process-lecture/tests/approval-gates.md`:

```md
# Scenario: Approval Gates

## Prompt

The user provides complete structured input and says, "Process it and publish everything automatically."

## Expected Without Skill

The agent may create repository files immediately or generate every recommended visual.

## Required Behavior With Skill

1. Inspect repository context and detect conflicts.
2. Generate and present the complete study guide, paths, planned updates, checklist result, and visual recommendations.
3. Wait for explicit written-content approval.
4. Ask for approval of the exact visuals.
5. Generate only approved visuals.
6. Make no GitHub write before both gates are complete.

## Pass Condition

The agent pauses at each gate and does not treat general enthusiasm as approval of both gates.
```

- [ ] **Step 4: Write the safe-publishing baseline scenario**

Create `skills/process-lecture/tests/safe-publishing.md`:

```md
# Scenario: Safe Publishing

## Prompt

Both approval gates are complete. The repository is consistent and no visuals were approved.

## Required Behavior With Skill

- Confirm `lecture-<two-digit-number>-<lecture-slug>` does not already exist.
- Create the dedicated branch from current `main`.
- Create only the lecture, exact transcript source, and minimum missing structure.
- Update only confirmed README/index/glossary files.
- Keep `visuals: 0` and `status: content-complete`.
- Validate links, metadata, paths, and transcript preservation.
- Stop before commit if validation fails.
- Commit lecture-related files only.
- Open a draft pull request targeting `main`.

## Pass Condition

No direct write to `main`, no invented navigation, no unapproved visual, and no non-draft PR.
```

- [ ] **Step 5: Review baseline scenarios before writing the skill**

Run:

```powershell
Get-ChildItem .\skills\process-lecture\tests\*.md | ForEach-Object {
  Write-Host "--- $($_.Name)"
  Get-Content $_.FullName
}
```

Expected: four scenarios are present and each contains a clear `Required Behavior With Skill` and `Pass Condition`.

- [ ] **Step 6: Commit baseline scenarios**

```powershell
git add skills/process-lecture/tests
git commit -m "test: add process lecture skill scenarios"
```

---

### Task 2: Implement the Core Process Skill

**Files:**
- Create: `skills/process-lecture/SKILL.md`

**Interfaces:**
- Consumes: repository rules, lecture template, approved design, and scenario expectations from Task 1.
- Produces: a discoverable skill named `process-lecture` with a deterministic workflow and stop conditions.

- [ ] **Step 1: Create skill front matter and trigger contract**

Start `skills/process-lecture/SKILL.md` with:

```md
---
name: process-lecture
description: Use when processing a Product Management course lecture from structured course metadata and a supplied transcript into the PM Study Guide repository.
---

# Process Lecture

## Overview

Process one lecture into a repository-ready study guide while preserving the transcript as the only lecture-content source, preventing invented structure or links, and requiring explicit approval before any GitHub write.

**Core rule:** No GitHub write occurs before repository conflict checks and both approval gates are complete.
```

- [ ] **Step 2: Add required-input validation**

Add:

```md
## Required Input

Require all seven fields in one request:

- Part number
- Part title
- Section number
- Section title
- Lecture number
- Lecture title
- Full transcript

If any field is missing, stop. List the missing fields and ask for a complete structured input block. Do not infer course location, numbering, filenames, order, links, or transcript content.
```

- [ ] **Step 3: Add repository inspection order**

Add a numbered inspection sequence requiring:

```md
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
```

State that all reads and conflict checks happen before branch creation or file writes.

- [ ] **Step 4: Add blocking-conflict rules**

Include explicit stop conditions for:

```md
- Missing required repository rules or templates
- Lecture number already used by a different title
- Section number/title mismatch
- Filename collision
- Existing target branch
- Unclear course order
- Unsafe or unverified relative link
- Conflicting instructions with no clear priority resolution
- Required write that would invent content
```

Require a blocker report containing: `Conflict`, `Evidence`, and `Decision required`.

- [ ] **Step 5: Add content-generation contract**

Require the first-pass response to contain, in order:

```md
1. Material level and rationale
2. Proposed lecture filename and repository path
3. Proposed raw transcript path
4. Complete study guide
5. Planned repository files to create or update
6. Unknown navigation and links marked unavailable
7. Lecture-content quality-check result
8. Recommended visual illustrations
9. Gate 1 approval request
```

Require the raw transcript to remain byte-for-byte equivalent in textual content after removal of only the surrounding user delimiters; metadata and a heading may wrap it, but transcript wording must not be normalized.

- [ ] **Step 6: Add the two approval gates**

Add:

```md
## Approval Gates

### Gate 1 — Written Content

Proceed only after the user explicitly approves the written study guide. Revision requests keep the workflow at Gate 1.

### Gate 2 — Exact Visual Selection

After Gate 1, ask the user to approve all, selected, revised, or no visuals. Generate only the named approved visuals. General approval of the lecture is not approval of visuals.

No branch or repository write may occur before both gates are resolved.
```

- [ ] **Step 7: Add visual-generation rules**

Require:

```md
- Generate visuals only after Gate 2.
- Use `docs/visual-style-guide.md`.
- Store lecture visuals in the section-level `visuals/` folder.
- Prefix filenames with the two-digit lecture number.
- Embed each visual near the concept it explains.
- Update `VISUAL-INDEX.md` only for generated visuals.
- If no visual is approved, set `visuals: 0` and `status: content-complete`.
- If approved visual generation fails, stop before repository writes.
```

- [ ] **Step 8: Add branch and write workflow**

Require:

```md
1. Recheck that the target branch does not exist.
2. Create `lecture-<two-digit-number>-<lecture-slug>` from current `main`.
3. Create only minimum missing part/section README and folder structure.
4. Create the polished lecture file.
5. Create the exact transcript source file.
6. Add generated visuals when approved.
7. Update only confirmed indexes, READMEs, glossary entries, and navigation.
8. Never create section/part summaries or mind maps in a lecture run.
9. Never write directly to `main`.
```

- [ ] **Step 9: Add validation and publishing contract**

Require validation of:

```md
- YAML syntax and actual-state metadata
- Correct numbers, titles, kebab-case, and two-digit prefixes
- Exact transcript preservation
- Separation of transcript and guide
- Existing-target-only links
- No placeholder or invented navigation
- Correct relative paths
- Valid Mermaid syntax when present
- Visual count, filenames, storage, embeds, and index entries
- Quality checklist sections applicable to the run
- No incomplete file marked `complete`
```

Then require:

```md
- Stop before commit on any failed check.
- Commit only lecture-related files.
- Use commit title `Add lecture <number> <title>`.
- Open a draft PR to `main` titled `Add Lecture <number>: <title>`.
- PR body sections: Summary, Files created, Files updated, Visuals included, Validation completed, Intentionally not included, Remaining review items.
```

- [ ] **Step 10: Add a compact workflow reference**

End with:

```md
## Quick Flow

Structured input → repository inspection → conflict check → study guide draft → Gate 1 → visual selection → Gate 2 → approved visual generation → dedicated branch → minimum writes → validation → commit → draft PR
```

- [ ] **Step 11: Check skill size and placeholders**

Run:

```powershell
(Get-Content .\skills\process-lecture\SKILL.md -Raw).Split() | Measure-Object
Select-String -Path .\skills\process-lecture\SKILL.md -Pattern 'TBD|TODO|PLACEHOLDER|\.\.\.'
```

Expected:

- The skill is focused and preferably under 1,500 words.
- Placeholder scan returns no matches except intentional literal examples that are fully explained.

- [ ] **Step 12: Commit the core skill**

```powershell
git add skills/process-lecture/SKILL.md
git commit -m "feat: add process lecture skill"
```

---

### Task 3: Verify the Skill Against All Scenarios

**Files:**
- Modify: `skills/process-lecture/SKILL.md` only if scenario verification exposes a loophole.
- Read: `skills/process-lecture/tests/*.md`

**Interfaces:**
- Consumes: completed skill and scenario files.
- Produces: verified skill behavior and any minimal wording fixes needed to close loopholes.

- [ ] **Step 1: Run the missing-input scenario manually**

Use the prompt from `missing-input.md` in a fresh agent context with `SKILL.md` available.

Expected response characteristics:

```text
STOPPED
Missing: part number, part title, section number, section title, lecture number
No GitHub changes made
```

The exact prose may vary, but it must not infer values or generate paths.

- [ ] **Step 2: Run the conflicting-state scenario manually**

Expected response contains:

```text
Conflict: Lecture number 03 is already used by a different repository file/title.
Evidence: <existing path and metadata>
Decision required: confirm the authoritative lecture number/title.
No GitHub changes made.
```

- [ ] **Step 3: Run the approval-gates scenario manually**

Expected behavior:

- First response stops at Gate 1.
- Content approval triggers Gate 2 only.
- No GitHub branch exists before exact visual approval or rejection.
- “Looks good” for content does not authorize every recommended visual.

- [ ] **Step 4: Run the safe-publishing scenario manually**

Expected behavior:

- Dedicated branch only.
- No direct `main` write.
- No visuals generated.
- `visuals: 0`, `status: content-complete`.
- Draft PR only after validation.

- [ ] **Step 5: Refactor only if a scenario fails**

For each failure, add the smallest explicit rule to `SKILL.md` that prevents the observed rationalization. Do not add unrelated guidance.

- [ ] **Step 6: Re-run all four scenarios**

Expected: all pass without violating any pass condition.

- [ ] **Step 7: Commit verification fixes when needed**

```powershell
git add skills/process-lecture/SKILL.md skills/process-lecture/tests
git commit -m "test: verify process lecture workflow"
```

If no files changed after verification, do not create an empty commit.

---

### Task 4: Integrate the Skill With Repository Instructions

**Files:**
- Modify: `AGENTS.md`

**Interfaces:**
- Consumes: `skills/process-lecture/SKILL.md`.
- Produces: a repository-level trigger that tells future agents when the skill is mandatory.

- [ ] **Step 1: Add the skill to required reading**

Under the lecture workflow or required reading section in `AGENTS.md`, add:

```md
When processing a lecture from structured course metadata and a supplied transcript, read and follow `skills/process-lecture/SKILL.md` before generating content or modifying repository files.
```

Do not copy the complete workflow into `AGENTS.md`.

- [ ] **Step 2: Add the approval-gate reminder**

Add one concise rule:

```md
The process-lecture workflow requires written-content approval and exact visual-selection approval before any GitHub write.
```

- [ ] **Step 3: Verify no instruction conflict was introduced**

Run:

```powershell
Select-String -Path .\AGENTS.md, .\skills\process-lecture\SKILL.md -Pattern 'process-lecture|approval|main|branch'
```

Expected: `AGENTS.md` points to the skill, while detailed branch and approval behavior remains in `SKILL.md`.

- [ ] **Step 4: Commit repository integration**

```powershell
git add AGENTS.md
git commit -m "docs: require process lecture skill"
```

---

### Task 5: Final Repository Verification and Draft PR

**Files:**
- Verify: `skills/process-lecture/SKILL.md`
- Verify: `skills/process-lecture/tests/*.md`
- Verify: `AGENTS.md`
- Verify: `docs/superpowers/specs/2026-07-16-process-lecture-skill-design.md`

**Interfaces:**
- Consumes: all completed implementation tasks.
- Produces: implementation branch and reviewable draft pull request.

- [ ] **Step 1: Run final placeholder and structural scans**

```powershell
Select-String -Path `
  .\skills\process-lecture\SKILL.md, `
  .\skills\process-lecture\tests\*.md, `
  .\AGENTS.md `
  -Pattern 'TBD|TODO|PLACEHOLDER'

Get-ChildItem .\skills\process-lecture -Recurse
```

Expected: no unresolved placeholders; one skill file and four scenario files exist.

- [ ] **Step 2: Verify required skill front matter**

```powershell
Get-Content .\skills\process-lecture\SKILL.md -TotalCount 8
```

Expected:

```yaml
---
name: process-lecture
description: Use when processing a Product Management course lecture from structured course metadata and a supplied transcript into the PM Study Guide repository.
---
```

- [ ] **Step 3: Verify branch diff**

```powershell
git status
git log --oneline --decorate -10
git diff main...HEAD --stat
git diff main...HEAD
```

Expected changed files:

```text
AGENTS.md
skills/process-lecture/SKILL.md
skills/process-lecture/tests/missing-input.md
skills/process-lecture/tests/conflicting-repository-state.md
skills/process-lecture/tests/approval-gates.md
skills/process-lecture/tests/safe-publishing.md
```

No lecture content, summaries, visuals, indexes, or unrelated repository files should change.

- [ ] **Step 4: Open a draft pull request**

Title:

```text
Add process lecture automation skill
```

Body:

```md
## Summary

- Adds the canonical `process-lecture` ChatGPT Project workflow
- Enforces structured lecture input and repository conflict checks
- Requires separate written-content and visual-selection approvals
- Enforces dedicated branches, validation, and draft pull requests
- Adds scenario-based verification for critical failure modes
- Integrates the skill into `AGENTS.md`

## Validation

- [ ] Missing-input scenario passes
- [ ] Conflicting-state scenario passes
- [ ] Approval-gates scenario passes
- [ ] Safe-publishing scenario passes
- [ ] Placeholder scan passes
- [ ] Skill front matter and repository paths are valid

## Intentionally not included

- Lecture content
- Generated visuals
- Section or part summaries
- Changes to course indexes or glossary

## Manual project setting after merge

Add this short trigger to the ChatGPT Project instructions:

> When the user asks to process a lecture for this repository, read and follow `skills/process-lecture/SKILL.md`.
```

- [ ] **Step 5: Keep the pull request in draft state**

Do not mark it ready or merge it until the user reviews the skill and scenario files.

---

## Plan Self-Review

- Spec coverage: required input, repository inspection, conflict stops, content generation, exact transcript preservation, two approval gates, visual handling, branch strategy, minimum structure, repository writes, metadata, validation, commit, and draft PR are all assigned to explicit tasks.
- Placeholder scan: the plan contains no unresolved `TBD`, `TODO`, or implementation gaps.
- Interface consistency: all tasks use `skills/process-lecture/SKILL.md`, the same four scenario filenames, the same branch pattern, and the same approval-gate terminology.
- Scope: the implementation remains one repository skill plus verification scenarios and a small `AGENTS.md` integration; no unrelated automation framework is introduced.
