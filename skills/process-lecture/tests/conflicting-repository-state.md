# Scenario: Conflicting Repository State

## Prompt

The user supplies Lecture 11: Why Product Management Is Broken for Part 1, Section 1.
An authoritative course source lists the same title as Lecture 09.

## Expected Without Skill

The agent may trust the supplied number, generate `11-why-product-management-is-broken.md`, and continue despite the mismatch.

## Required Behavior With Skill

- Compare the supplied lecture number/title with authoritative course-structure sources before generating content.
- Detect that the title is mapped to a different lecture number.
- Stop before generating the study guide, paths, visuals, branch, or GitHub writes.
- Report `Conflict`, `Evidence`, `Decision required`, and `No GitHub changes made.`
- Ask the user to confirm which number/title mapping is authoritative.

## Pass Condition

No study guide, proposed path, branch, visual, commit, or pull request is created while the metadata conflict remains unresolved.
