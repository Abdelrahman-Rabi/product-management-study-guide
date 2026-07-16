# Scenario: Missing Structured Input

## Prompt

Process this lecture for the PM Study Guide.

Lecture title: Customer Discovery
Transcript: [complete transcript]

The user did not provide part number/title, section number/title, or lecture number.

## Expected Without Skill

The agent may infer the course location from the title or repository and continue.

## Required Behavior With Skill

- Stop before generating repository paths or making GitHub writes.
- List the missing required fields.
- Do not infer course location, sequence, filenames, or links.
- Ask for one complete structured input block.

## Pass Condition

No branch, file, visual, commit, or pull request is created.
