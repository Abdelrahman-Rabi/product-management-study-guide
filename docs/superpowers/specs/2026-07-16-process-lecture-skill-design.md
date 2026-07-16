# Process Lecture Skill Design

## Purpose

Create one reusable ChatGPT Project workflow file at `skills/process-lecture/SKILL.md` that automates processing a single lecture into a validated GitHub draft pull request while preserving repository rules and preventing invented content.

## Trigger

Use the workflow whenever the user asks to process a lecture for the Product Management Study Guide repository and provides the required structured input.

## Required Input

Each run must include:

- Part number
- Part title
- Section number
- Section title
- Lecture number
- Lecture title
- Full transcript

The workflow must stop if any required field is missing. It must not infer missing course location, numbering, titles, or transcript content.

## Repository Inspection

Before generating content, the workflow must read:

- `AGENTS.md`
- `docs/study-guide-rules.md`
- `docs/repository-structure.md`
- `docs/visual-style-guide.md`
- `docs/quality-checklist.md`
- `templates/lecture-template.md`
- Relevant part and section folders
- Relevant part and section README files when available
- Completed lectures in the same section when available
- `COURSE-INDEX.md`
- `GLOSSARY.md`
- `VISUAL-INDEX.md`

The workflow must compare the supplied metadata with repository state before creating a branch or modifying files.

## Blocking Conflicts

The workflow must stop before any GitHub write when it finds ambiguity or conflict, including:

- The lecture number already exists under another title
- The section number maps to a different section title
- The proposed filename conflicts with an existing file
- Required templates or rules are missing
- Current instructions conflict with repository rules and the correct interpretation is unclear
- Course order, navigation, or a safe relative path cannot be established
- The intended branch already exists unexpectedly

It must explain the blocker and the exact correction or decision required.

## Content Generation

The workflow must:

1. Select Level 1, 2, or 3 automatically and briefly justify the selection.
2. Use only the supplied transcript as the lecture-content source.
3. Preserve the instructor’s meaning while removing filler, repetition, and transcript noise.
4. Create the complete standalone study guide using `templates/lecture-template.md`.
5. Add relevant clarification and one practical example for Level 2 or Level 3.
6. Add a Mermaid or text visual summary when useful.
7. Recommend useful visuals without generating them.
8. Propose the lecture filename, lecture path, transcript path, and repository updates.
9. Mark unknown previous, next, or related links as unavailable instead of inventing them.
10. Run the lecture-content portion of `docs/quality-checklist.md`.

The original transcript must be preserved exactly as supplied inside the separate transcript source file. Only minimal metadata and a heading may be added around it.

## Approval Gates

### Gate 1: Written Content

Before any GitHub write, present:

- Selected material level and rationale
- Complete study guide
- Proposed paths
- Planned repository updates
- Quality-check result
- Recommended visuals

Wait for explicit approval of the written study guide.

### Gate 2: Visual Selection

After written-content approval, ask the user to approve the exact visuals to generate.

The user may approve all, approve selected visuals, request changes, or reject all visuals.

Only approved visuals may be generated.

If no visuals are approved, continue with `visuals: 0` and `status: content-complete`.

## Branch Strategy

After both approval gates, create a dedicated branch using:

`lecture-<two-digit-number>-<lecture-slug>`

Example:

`lecture-03-what-does-a-pm-do`

Never write directly to `main`.

If the branch already exists, stop and report the conflict.

## Minimum Missing Structure

The workflow may create only the minimum missing structure required for the lecture:

- `<part-folder>/README.md`
- `<part-folder>/<section-folder>/README.md`
- `<part-folder>/<section-folder>/visuals/`
- `sources/<part-folder>/<section-folder>/`

It must not automatically create:

- Future lecture files
- Section summaries
- Section mind maps
- Part summaries
- Part mind maps
- Empty placeholder files
- Invented navigation targets

## Repository Writes

Typical created files:

- `<part>/<section>/<lecture-file>.md`
- `sources/<part>/<section>/<lecture-file>-transcript.md`
- Approved visual files under the section `visuals/` folder

Typical updated files:

- `COURSE-INDEX.md`
- Part README
- Section README
- `GLOSSARY.md`
- `VISUAL-INDEX.md` only when visuals exist

Update `COURSE-CONCEPT-MAP.md` only when the lecture introduces a major course-level relationship.

Do not create section or part summaries during a lecture run.

## Metadata Rules

Without visuals:

```yaml
status: content-complete
visuals: 0
```

With approved visuals generated and embedded, calculate `visuals` from the actual generated files.

Use `complete` only when content, visuals, links, indexes, metadata, and repository validation all match the real state.

## Validation Before Commit

Validate:

- YAML syntax and metadata accuracy
- Correct part, section, and lecture numbers
- Lowercase kebab-case paths with correct two-digit prefixes
- Exact transcript preservation
- Separation of raw transcript and polished study guide
- No placeholder links
- No invented previous or next links
- No links to missing files
- Correct relative paths
- Valid Mermaid syntax when Mermaid is used
- Correct visual filenames, locations, embeddings, and counts
- No unfinished file marked complete
- Lecture-content checklist
- Metadata checklist
- File and folder checklist
- Navigation checklist
- Repository-update checklist
- Visual recommendation and generated-visual checklists when applicable

If validation fails, stop before committing.

## Commit and Draft Pull Request

After validation:

1. Commit only files related to the lecture.
2. Push the dedicated branch.
3. Open a draft pull request targeting `main`.

Commit pattern:

`Add lecture <number> <title>`

Draft PR title pattern:

`Add Lecture <number>: <title>`

The draft PR body must contain:

- Summary
- Files created
- Files updated
- Visuals included
- Validation completed
- Intentionally not included
- Remaining review items

## Failure Behavior

Stop before modifying GitHub when:

- Required structured input is incomplete
- Repository metadata conflicts with the request
- A required rule or template is unavailable
- A filename or branch already exists unexpectedly
- A safe link cannot be determined
- The requested action would require invented content
- Validation fails
- Approved visual generation fails

No partial branch or partial pull request should be created after a blocking conflict is detected.

## End-to-End Flow

```text
Structured lecture input
        ↓
Read repository rules and context
        ↓
Detect conflicts
        ↓
Generate study guide and visual recommendations
        ↓
Run lecture-content checklist
        ↓
Approval 1: written content
        ↓
Approval 2: exact visuals
        ↓
Generate approved visuals
        ↓
Create dedicated branch
        ↓
Create minimum required structure
        ↓
Write and update validated files
        ↓
Run repository validation
        ↓
Commit and push
        ↓
Open draft pull request
```

## Success Criteria

The workflow is successful when it consistently:

- Produces a standalone lecture guide faithful to the supplied transcript
- Respects repository hierarchy, templates, links, and metadata
- Requires both approval gates before GitHub writes
- Creates only the minimum required files
- Generates only explicitly approved visuals
- Never writes directly to `main`
- Stops safely on ambiguity or conflict
- Opens a validated draft pull request for review
