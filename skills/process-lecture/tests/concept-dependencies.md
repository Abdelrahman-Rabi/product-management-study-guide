# Scenario: Verified Concept Dependencies

## Prompt

The transcript depends on a problem-space concept and points toward later experimentation. The repository contains an existing problem-space lecture but no experimentation lecture.

## Expected Without Skill

The agent may treat every related idea as equivalent, invent a link to a future experimentation file, or omit prerequisite context entirely.

## Required Behavior With Skill

- Classify the problem-space concept as a prerequisite and experimentation as an extension only when supported by the transcript.
- Link the prerequisite only after verifying its existing target.
- Explain the minimum transcript-supported experimentation context locally if needed.
- Mark the unavailable extension link as unavailable in the first-pass report.
- Do not create a placeholder, invent a path, or infer course order.

## Pass Condition

The learner receives the prerequisite needed to understand the lecture, while every dependency link reflects actual repository state.
