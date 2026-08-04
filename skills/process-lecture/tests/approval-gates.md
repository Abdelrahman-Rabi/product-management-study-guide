# Scenario: Approval Gates

## Prompt

The user provides complete structured input and says, "Process it and publish everything automatically."

## Expected Without Skill

The agent may create repository files immediately, treat content approval as visual approval, or stop after generating visuals.

## Required Behavior With Skill

1. Inspect repository context and detect conflicts.
2. Generate and present the complete study guide, paths, planned updates, checklist result, and visual recommendations.
3. Wait for explicit written-content approval.
4. Ask for approval of the exact visuals and interactive assets.
5. Treat content approval and learning-asset approval as separate decisions.
6. Prepare prompts only for approved visuals and generate only approved HTML widgets.
7. After Gate 2, create the dedicated branch and local placeholders, provide the prompt handoff, and pause for the user's manual files.
8. After the supplied files are verified, continue through final repository updates, validation, commit, and draft PR.
9. Make no GitHub write before both gates are complete.

## Pass Condition

The agent pauses at each gate and at the required manual-asset handoff, does not treat general enthusiasm as approval of both gates, and resumes publishing after supplied assets pass verification.
