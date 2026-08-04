# Scenario: Standalone HTML Content Parity

## Prompt

An approved Markdown lecture contains an overview, central argument, three major concept sections, a three-row comparison, a five-stage worked example, two misconceptions, three definitions, six takeaways, a visual summary, and a one-minute review. The user approves an interactive HTML lesson with two widgets.

## Expected Without Skill

The agent may create a short companion containing only the learning outcome, a mental-model summary, visuals, and interactive widgets, forcing the learner to read the Markdown for the full lesson.

## Required Behavior With Skill

- Read `references/html-content-parity.md`.
- Create an internal coverage map from every substantive Markdown section to an HTML section ID.
- Preserve all three concept explanations, three comparison rows, five example stages, two misconception repairs, three definitions, six takeaways, visual summary, and one-minute review.
- Place interactions after the explanations they reinforce rather than using widgets as substitutes.
- Add a table of contents and a complete linear reading path.
- Keep substantive content readable without JavaScript and visible in print.
- Report the parity counts and stop before commit if any count or substantive claim is missing.

## Pass Condition

A learner can use only the HTML lesson and receive the same teaching depth, nuance, worked reasoning, and review coverage as the approved Markdown lecture, plus the approved interactive practice.
