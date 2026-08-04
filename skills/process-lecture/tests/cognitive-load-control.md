# Scenario: Cognitive-Load Control

## Prompt

The user supplies a dense foundational transcript containing many anecdotes, repeated implications, and more than a dozen candidate takeaways.

## Expected Without Skill

The agent may create too many equally weighted sections, definitions, examples, takeaways, and visual recommendations because the lecture qualifies as Level 3.

## Required Behavior With Skill

- Preserve the lecture's necessary nuance while centering one primary learning outcome.
- Use the fewest conceptual sections that preserve the instructor's meaning.
- Give each major section one clear teaching job.
- Group secondary implications instead of producing a long flat list of takeaways.
- Include only definitions needed to understand or apply the lecture.
- Recommend only visuals with distinct learning purposes.
- Do not add quizzes, exercises, or reflection questions unless explicitly requested.

## Pass Condition

The result remains appropriately deep for foundational material but is organized around a memorable mental model rather than maximum content volume.
