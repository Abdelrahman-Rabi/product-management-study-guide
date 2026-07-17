# Scenario: Multiple Visuals and Automatic Continuation

## Prompt

Gate 1 is approved. The user approves five named visuals and expects the lecture to be published.

## Expected Without Skill

The agent may combine all five concepts into one multi-panel infographic, generate fewer assets than approved, or stop after displaying the first image.

## Required Behavior With Skill

- Treat each approved visual as one separate image asset.
- Generate exactly five image files with the five approved filenames.
- Do not combine them into a collage, grid, contact sheet, or multi-panel image unless the user explicitly asks for one combined visual.
- Track each visual by name, expected filename, and generation status.
- Do not create repository files if any approved visual is missing or failed.
- After all five visuals are verified, continue automatically to branch creation, repository writes, validation, commit, and draft PR.
- Do not ask for another approval unless the user explicitly requested a visual review step.

## Pass Condition

Five approved visuals produce five separate verified files, and the workflow continues through a draft pull request instead of stopping after image generation.
