# Scenario: Approval Gates

## Prompt

The user provides complete structured input and says, "Process it and publish everything automatically."

## Expected Without Skill

The agent may create repository files immediately, treat content approval as visual approval, or stop after generating visuals.

## Required Behavior With Skill

1. Inspect repository context and detect conflicts.
2. Generate and present the complete study guide, paths, planned updates, checklist result, and visual recommendations.
3. Wait for explicit written-content approval.
4. Ask for approval of the exact visuals.
5. Treat content approval and visual approval as separate decisions.
6. Generate only the approved visuals.
7. After Gate 2 is resolved, continue automatically through visual verification, branch creation, repository writes, validation, commit, and draft PR.
8. Make no GitHub write before both gates are complete.

## Pass Condition

The agent pauses at each gate, does not treat general enthusiasm as approval of both gates, and does not stop permanently after visual generation.
