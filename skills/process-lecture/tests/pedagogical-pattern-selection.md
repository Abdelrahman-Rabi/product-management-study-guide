# Scenario: Reusable Pedagogical Pattern Selection

## Prompt

The user supplies a Level 2 transcript explaining how customer evidence changes a roadmap decision through an iterative learning cycle.

## Expected Without Skill

The agent may use a generic list, force several diagrams into the lecture, or copy facts and wording from another lecture that used a similar structure.

## Required Behavior With Skill

- Read `references/pedagogical-patterns.md` because the lecture contains a decision and feedback loop.
- Select only the decision-model and feedback-loop structures that improve understanding.
- Populate the structures solely with claims supported by the supplied transcript.
- Reuse structure rather than wording or facts from existing lectures.
- Recommend a visual only if it communicates the relationship better than concise prose or a table.

## Pass Condition

The guide exposes the decision logic and learning loop clearly without template inflation, duplicated content, or unsupported claims.
