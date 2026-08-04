# AGENTS.md

## Repository Purpose

This repository contains a connected Product Management study guide created
from video-course transcripts.

The final knowledge base contains:

- Structured lecture study guides
- Practical Product Management examples
- Visual illustrations embedded within lecture notes
- Section summaries
- Section mind maps
- Part summaries
- Part mind maps
- A shared glossary
- Cross-linked concepts
- Course navigation indexes

The goal is to let the learner understand and review the course without
rewatching every lecture.

## Course Structure

The repository follows the original course hierarchy:

```text
Course
  └── Part
        └── Section
              └── Lecture
```

Lecture files must remain in their original course section.

Conceptual relationships should be created through:

Related-concept links
Glossary references
Section mind maps
Part mind maps
The course concept map

Do not move lectures into different folders only because they relate to another
Product Management topic.

## Required Reading

Before creating or editing a lecture, read:

- LEARNING-MISSION.md
- docs/study-guide-rules.md
- docs/repository-structure.md
- templates/lecture-template.md
- The relevant section README.md, when available
- At least one completed lecture in the same section, when available
- docs/visual-style-guide.md when creating or editing visuals
- docs/interactive-lesson-style-guide.md when creating or editing interactive HTML companions
- docs/quality-checklist.md before marking work complete

When processing a lecture from structured course metadata and a supplied transcript, read and follow `skills/process-lecture/SKILL.md` before generating content or modifying repository files.

Before completing a section, also read:

- templates/section-summary-template.md
- templates/section-mind-map-template.md
- All completed lecture files in the section

Before completing a course part, also read:

- templates/part-summary-template.md
- templates/part-mind-map-template.md
- All section summaries within the part

## Instruction Priority

Apply instructions in this order:

1. Explicit current user request
2. ChatGPT Project Instructions
3. This AGENTS.md
4. Files under docs/
5. Files under templates/
6. Existing repository examples and conventions
7. Reasonable inference

If two instructions conflict and the correct interpretation is unclear, report
the conflict instead of silently choosing one.

## Lecture Workflow

The process-lecture workflow requires written-content approval and exact learning-asset selection approval before any GitHub write.

For a new lecture:

1. Read the lecture title and transcript.
2. Identify its original course part and section.
3. Determine the appropriate material level.
4. Review related existing repository content.
5. Create the study guide using the lecture template.
6. Add valid YAML front matter.
7. Add meaningful related-concept links.
8. Add previous, section, part, next, and course-index navigation where known.
9. Recommend the appropriate visual illustrations and interactive companion only when they add educational value.
10. Prepare final visual prompts or generate interactive HTML only after the user explicitly approves the exact assets.
11. Embed each completed visual near the concept it explains and link any approved companion from the lecture.
12. Update indexes, glossary, navigation, and learning-asset references when requested.
13. Run the quality checklist before marking the lecture complete.

## Section Workflow

When all lectures in a course section are complete:

1. Review every lecture in the section.
2. Create section-summary.md.
3. Create section-mind-map.md.
4. Update the section README.md.
5. Review terminology consistency.
6. Update the glossary.
7. Update the visual index.
8. Review cross-links between lectures.
9. Run the section quality checklist.

## Part Workflow

When all sections in a course part are complete:

1. Review every section summary in the part.
2. Create part-summary.md.
3. Create part-mind-map.md.
4. Update the part README.md.
5. Review links between sections.
6. Update the course concept map when needed.
7. Run the part quality checklist.

## Visual Placement

Visual illustrations must be embedded directly inside the lecture Markdown file
near the concept they explain.

Use this preferred sequence:

1. Introduce the concept briefly.
2. Embed the relevant visual.
3. Explain how to interpret it and why it matters.

Do not place all illustrations only at the end of the lecture.

Use descriptive alt text.

Example:

![Comparison between output roadmaps and outcome roadmaps](./visuals/11-output-vs-outcome-roadmap.png)

A short italic caption may be added when it provides useful interpretation.

## Never

- Copy the raw transcript into the final study guide.
- Follow transcript chronology when a clearer structure is available.
- Add quizzes, flashcards, reflection questions, or assignments unless requested.
- Invent sources, files, links, lecture titles, or completed content.
- Present an instructor's rhetorical claim as a verified statistic.
- Duplicate large explanations across lecture, section, and part summaries.
- Call an image-generation tool during the process-lecture workflow.
- Prepare final production prompts before the user approves the exact visuals.
- Generate interactive HTML lessons or widgets before the user approves the exact companion and interaction types.
- Place all visuals only at the end of a lecture.
- Mark repository work complete without checking links and required files.
