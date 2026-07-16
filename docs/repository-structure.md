# Repository Structure and Linking Rules

## Repository Goal

This repository is a connected Product Management knowledge base created from
video-course transcripts.

It must support:

1. Sequential study following the original course order
2. Topic-based review through conceptual links
3. Visual learning inside lecture notes
4. Section-level revision
5. Part-level revision
6. Long-term maintenance and expansion

The repository must not become a collection of isolated lecture summaries.

## Course Hierarchy

The repository follows the original course structure:

```text
Course
  └── Part
        └── Section
              └── Lecture

The eight main course parts are:

01-introduction
02-strategy
03-discovery
04-design
05-development
06-measurement
07-career
08-technology

Lecture files must remain inside their original course part and section.

Do not move lectures into different folders only because they relate to another
Product Management topic.

Conceptual organization should be created through:

Related-concept links
Glossary references
Section mind maps
Part mind maps
The course concept map
Repository Structure

The expected structure is:

PM-Study-Guide/
│
├── AGENTS.md
├── README.md
├── COURSE-INDEX.md
├── GLOSSARY.md
├── COURSE-CONCEPT-MAP.md
├── VISUAL-INDEX.md
│
├── docs/
│   ├── study-guide-rules.md
│   ├── repository-structure.md
│   ├── visual-style-guide.md
│   └── quality-checklist.md
│
├── templates/
│   ├── lecture-template.md
│   ├── part-introduction-template.md
│   ├── section-readme-template.md
│   ├── section-summary-template.md
│   ├── section-mind-map-template.md
│   ├── part-readme-template.md
│   ├── part-summary-template.md
│   └── part-mind-map-template.md
│
├── sources/
│   └── <part-folder>/
│       └── <section-folder>/
│           └── <lecture-name>-transcript.md
│
├── assets/
│   ├── shared-visuals/
│   └── diagrams/
│
├── 01-introduction/
│   ├── README.md
│   └── 01-introduction/
│       ├── README.md
│       ├── 01-lecture-title.md
│       ├── 02-lecture-title.md
│       ├── section-summary.md
│       ├── section-mind-map.md
│       └── visuals/
│
├── 02-strategy/
│   ├── README.md
│   ├── 00-part-introduction.md
│   ├── 03-problem-space/
│   ├── 04-goal-setting/
│   ├── 05-solution-space/
│   ├── part-summary.md
│   └── part-mind-map.md
│
└── remaining course parts...

Do not create all future section folders before they are needed.

Create a section folder when the first lecture from that section is ready to be
processed.

Naming Conventions

Use:

Lowercase filenames
Kebab-case
Two-digit numbering
Descriptive names
Original course sequence

Examples:

01-introduction/
01-introduction/
11-why-product-management-is-broken.md
02-strategy/
03-problem-space/
01-understanding-customer-problems.md

Avoid:

Lecture 1.md
notes.md
new-file.md
image1.png
Part Folders

Each major part folder should eventually contain:

README.md
00-part-introduction.md
<section folders>
part-summary.md
part-mind-map.md

The 00-part-introduction.md file is used only when the course includes a short
video introducing that part.

Part introduction videos normally use Level 1 material.

Section Folders

Each section folder should eventually contain:

README.md
<numbered lecture files>
section-summary.md
section-mind-map.md
visuals/

Example:

02-strategy/
└── 03-problem-space/
    ├── README.md
    ├── 01-lecture-title.md
    ├── 02-lecture-title.md
    ├── section-summary.md
    ├── section-mind-map.md
    └── visuals/

Do not create the final section summary or mind map until enough lectures exist
to provide meaningful synthesis.

Source Transcripts

Store original transcripts separately from polished study-guide files.

Use:

sources/<part-folder>/<section-folder>/<lecture-name>-transcript.md

Example:

sources/
└── 01-introduction/
    └── 01-introduction/
        └── 11-why-product-management-is-broken-transcript.md

The raw transcript should not be copied into the final lecture guide.

A lecture may include a source link at the bottom:

## Source

- [Original lecture transcript](../../sources/01-introduction/01-introduction/11-why-product-management-is-broken-transcript.md)
Lecture Metadata

Every lecture file begins with YAML front matter.

Use:

---
title: "Why Product Management Is Broken"
course: "The Product Management Course"
part: "Introduction"
part_number: 1
section: "Introduction"
section_number: 1
lecture_number: 11
content_type: "lecture"
material_level: 3
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - product discovery
  - agile
  - waterfall
  - outcome roadmaps
  - empowered product teams
---

Use these values for content_type:

lecture
part-introduction
section-summary
section-mind-map
part-summary
part-mind-map

Use these values for status:

draft
content-complete
visuals-pending
complete

For a part introduction:

---
title: "Part 2: Strategy"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section_number: 2
content_type: "part-introduction"
material_level: 1
status: complete
source: "Udemy video transcript"
visuals: 1
related_concepts:
  - problem space
  - goal setting
  - solution space
---
Root Navigation Files
README.md

Provides:

Repository purpose
How to use the guide
Main navigation
Current progress

It should remain concise.

COURSE-INDEX.md

The authoritative table of contents for the complete course.

It should follow the original course order:

Part
  → Section
      → Lecture

Do not add links to files that do not exist.

GLOSSARY.md

Contains shared Product Management definitions and links to relevant lectures.

Important terms may still appear in local lecture definition tables for quick
review.

COURSE-CONCEPT-MAP.md

Shows how the major Product Management domains connect across the course.

It should remain high-level and should not include every lecture.

VISUAL-INDEX.md

Provides a visual gallery organized by course part and section.

Every visual entry should contain:

Visual title
Source lecture
One-sentence purpose
Embedded image
Part README

Each part folder should contain a README.md.

It should include:

Part overview
Why the part matters
Sections included in the part
How the sections connect
Part resources
Part progress

It should not duplicate the part summary.

Section README

Each section folder should contain a README.md.

It should include:

Section overview
Learning goals
Lecture list
Section resources
Related sections
Section progress

It should not duplicate the section summary.

Summary Levels

The repository uses four levels of review.

Lecture level

Every lecture includes a one-minute review.

Purpose:

Rapid recall of one lecture
Quick revision before continuing the course
Section level

Every completed section includes:

section-summary.md
section-mind-map.md

The section summary contains a five-minute review.

Purpose:

Connect all lectures in one course section
Explain the section’s core mental model
Avoid reviewing each lecture separately
Part level

Every completed part includes:

part-summary.md
part-mind-map.md

Purpose:

Connect multiple sections
Show the larger Product Management domain
Explain how the sections work together
Course level

After most or all of the course is complete, create:

COURSE-SUMMARY.md

Purpose:

Summarize the complete learning journey
Connect all major Product Management domains
Support final course review
Lecture Navigation

At the top of each lecture, include links when known:

[← Previous Lecture](...)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](...)

At the bottom, include:

## Continue Learning

- Previous: [Previous Lecture](...)
- Section: [Section Name](./README.md)
- Part: [Part Name](../README.md)
- Next: [Next Lecture](...)
- Course index: [Full Course Index](../../COURSE-INDEX.md)

Do not invent previous or next links when the lecture sequence is unknown.

Related Concepts

At the end of each lecture, include:

## Related Concepts

Add only genuinely useful conceptual links.

Typical count:

Three to five related links

Links may point to:

An earlier prerequisite lecture
A later lecture that expands the idea
A section overview
A glossary term
A related lecture in another course part

Avoid linking every lecture to many unrelated pages.

Inline Concept Links

When a concept has already been explained elsewhere, link the first meaningful
mention.

Example:

This risk can be reduced through
[product discovery](../../03-discovery/README.md), where teams test assumptions
before full delivery.

Do not link every repeated mention of the same concept.

Visual Storage

Store lecture illustrations inside the section-level visuals folder.

Example:

01-introduction/
└── 01-introduction/
    ├── 11-why-product-management-is-broken.md
    └── visuals/
        ├── 11-traditional-product-process.png
        ├── 11-agile-inside-waterfall-system.png
        ├── 11-cost-of-late-validation.png
        ├── 11-output-vs-outcome-roadmap.png
        └── 11-delivery-vs-empowered-product-team.png

Prefix visual filenames with the lecture number to avoid naming conflicts.

Visual Placement Inside Lectures

Visual illustrations must be embedded directly inside the lecture Markdown file
near the context they explain.

Use this sequence:

Introduce the concept briefly.
Embed the visual.
Explain how to interpret it and why it matters.

Example:

## Why This Process Is Still Waterfall

A company does not become Agile simply because development happens in sprints.

![Agile development inside a broader waterfall product process](./visuals/11-agile-inside-waterfall-system.png)

*Most major product decisions are made before iterative development begins.*

The team may use Agile delivery practices while the wider planning process
remains sequential.

Do not place every illustration only at the end of the lecture.

Use descriptive alt text.

Avoid:

![image](./visuals/image1.png)

Prefer:

![Comparison between output roadmaps and outcome roadmaps](./visuals/11-output-vs-outcome-roadmap.png)
Visual Index Rules

The same illustration may be:

Embedded inside the lecture where it supports the explanation
Included in VISUAL-INDEX.md for visual browsing

The lecture is the primary learning location.

The visual index is only a navigation and review layer.

Update Checklist for a New Lecture

When a lecture is completed:

Save the raw transcript
Create the lecture file
Add valid YAML metadata
Add it to COURSE-INDEX.md
Add it to the section README.md
Update previous and next navigation
Add meaningful related-concept links
Add important terms to GLOSSARY.md
Add completed visuals to VISUAL-INDEX.md
Embed visuals near the relevant context
Review whether the section summary needs notes
Review whether the section mind map needs updating
Run the quality checklist
Section Completion

When all lectures in a section are complete:

Review every lecture in the section
Create section-summary.md
Add the five-minute review
Create section-mind-map.md
Update the section README.md
Review terminology consistency
Update the glossary
Update the visual index
Review lecture cross-links
Run the section quality checklist
Part Completion

When all sections in a part are complete:

Review every section summary
Create part-summary.md
Create part-mind-map.md
Update the part README.md
Review links between sections
Update the course concept map when needed
Run the part quality checklist
Duplication Rules

Each file has a distinct purpose.

Lecture file

Detailed explanation of one video lecture.

Section README

Introduction and navigation for one course section.

Section summary

Synthesis of all lectures in one section.

Section mind map

Visual relationships among section concepts.

Part README

Introduction and navigation for one major course part.

Part summary

Synthesis across all sections in a part.

Part mind map

Visual relationship between the part’s main sections.

Glossary

Definitions and links.

Course concept map

High-level relationship across the full course.

Visual index

Gallery of study-guide illustrations.

Use links rather than copying large sections between files.

Repository Integrity

Before marking repository work complete, verify:

File location matches the original course hierarchy
Filename follows conventions
YAML metadata is valid
Navigation links work
Images load correctly
Image alt text is descriptive
Related links are relevant
Indexes are updated
Important terms appear in the glossary
No large content is unnecessarily duplicated