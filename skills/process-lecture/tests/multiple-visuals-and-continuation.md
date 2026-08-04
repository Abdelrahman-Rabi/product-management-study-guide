# Scenario: Multiple Visuals and Manual Handoff

## Prompt

Gate 1 is approved. The user approves five named visuals and expects the lecture to be published.

## Expected Without Skill

The agent may call an image-generation tool, combine all five concepts into one infographic, provide vague prompts, or publish before the manually supplied files exist.

## Required Behavior With Skill

- Treat each approved visual as one separate image asset.
- Create a manifest with five exact filenames and section-level destinations.
- Provide five separate, self-contained professional prompts with exact on-image text, composition, style, negative constraints, and export specifications.
- Do not combine them into a collage, grid, contact sheet, or multi-panel image unless the user explicitly asks for one combined visual.
- Create the branch and approved HTML placeholders after Gate 2, then pause for the user to add the five files.
- Do not add missing-image Markdown embeds, commit, push, or open a pull request while any approved visual is absent or invalid.
- Verify all five supplied files individually.
- After all five visuals are verified, finalize repository updates and continue automatically through validation, commit, and draft PR.

## Pass Condition

Five approved visuals produce five professional prompts, five exact placeholders, and five separately verified user-supplied files before the workflow continues through a draft pull request.
