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
