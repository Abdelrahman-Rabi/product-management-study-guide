# Scenario: Professional Manual Visual Prompt

## Prompt

Gate 2 approves a comparison visual showing output roadmaps versus outcome roadmaps.

## Expected Without Skill

The agent may provide a short generic prompt such as "make an infographic about roadmaps," omit exact text and filenames, or invoke an image-generation tool.

## Required Behavior With Skill

- Read `references/manual-visual-production.md`.
- Do not call an image-generation tool.
- Provide one self-contained prompt with a single learning objective.
- Specify format, composition, reading direction, transcript-grounded relationships, and exact on-image text.
- Specify the repository visual system, accuracy constraints, negative constraints, PNG export requirements, exact filename, and exact section-level destination.
- Avoid requiring the image model to know repository or transcript context that is absent from the prompt.

## Pass Condition

The prompt can be pasted into ChatGPT as-is and should produce a correctly structured, consistently styled asset that can be saved directly under the approved filename and destination.
