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

Lecture files must remain in their original course section.

Conceptual relationships should be created through:

Related-concept links
Glossary references
Section mind maps
Part mind maps
The course concept map

Do not move lectures into different folders only because they relate to another
Product Management topic.

Required Reading

Before creating or editing a lecture, read:

docs/study-guide-rules.md
docs/repository-structure.md
templates/lecture-template.md
The relevant section README.md, when available
At least one completed lecture in the same section, when available
docs/visual-style-guide.md when creating or editing visuals
docs/quality-checklist.md before marking work complete

Before completing a section, also read:

templates/section-summary-template.md
templates/section-mind-map-template.md
All completed lecture files in the section

Before completing a course part, also read:

templates/part-summary-template.md
templates/part-mind-map-template.md
All section summaries within the part
Instruction Priority

Apply instructions in this order:

Explicit current user request
ChatGPT Project Instructions
This AGENTS.md
Files under docs/
Files under templates/
Existing repository examples and conventions
Reasonable inference

If two instructions conflict and the correct interpretation is unclear, report
the conflict instead of silently choosing one.

Lecture Workflow

For a new lecture:

Read the lecture title and transcript.
Identify its original course part and section.
Determine the appropriate material level.
Review related existing repository content.
Create the study guide using the lecture template.
Add valid YAML front matter.
Add meaningful related-concept links.
Add previous, section, part, next, and course-index navigation where known.
Recommend the appropriate visual illustrations.
Generate visuals only after the user explicitly requests them.
Embed each completed visual near the concept it explains.
Update indexes, glossary, navigation, and visual references when requested.
Run the quality checklist before marking the lecture complete.
Section Workflow

When all lectures in a course section are complete:

Review every lecture in the section.
Create section-summary.md.
Create section-mind-map.md.
Update the section README.md.
Review terminology consistency.
Update the glossary.
Update the visual index.
Review cross-links between lectures.
Run the section quality checklist.
Part Workflow

When all sections in a course part are complete:

Review every section summary in the part.
Create part-summary.md.
Create part-mind-map.md.
Update the part README.md.
Review links between sections.
Update the course concept map when needed.
Run the part quality checklist.
Visual Placement

Visual illustrations must be embedded directly inside the lecture Markdown file
near the concept they explain.

Use this preferred sequence:

Introduce the concept briefly.
Embed the relevant visual.
Explain how to interpret it and why it matters.

Do not place all illustrations only at the end of the lecture.

Use descriptive alt text.

Example:

![Comparison between output roadmaps and outcome roadmaps](./visuals/11-output-vs-outcome-roadmap.png)

A short italic caption may be added when it provides useful interpretation.

Never
Copy the raw transcript into the final study guide.
Follow transcript chronology when a clearer structure is available.
Add quizzes, flashcards, reflection questions, or assignments unless requested.
Invent sources, files, links, lecture titles, or completed content.
Present an instructor's rhetorical claim as a verified statistic.
Duplicate large explanations across lecture, section, and part summaries.
Generate visuals before the user requests them.
Place all visuals only at the end of a lecture.
Mark repository work complete without checking links and required files.