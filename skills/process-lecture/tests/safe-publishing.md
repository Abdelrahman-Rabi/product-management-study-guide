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
