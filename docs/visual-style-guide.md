# Visual Style Guide

## Purpose

Visual illustrations are part of the learning material, not decoration.

Each visual should help the learner:

- Understand a concept faster
- See relationships between ideas
- Remember a process or comparison
- Review the lecture without rereading the full explanation

Every illustration should communicate one primary learning idea.

## Default Visual Format

Unless the user explicitly requests another format, use:

- Aspect ratio: `4:5` portrait
- File format: PNG
- Background: soft off-white
- Style: clean educational infographic
- Design direction: modern editorial
- Footer label: `Product Management Study Guide`

Alternative formats may be used when needed:

- `16:9` for presentation slides
- `1:1` for social-media visuals
- A4 portrait for printable study material

## Visual Identity

Use a consistent visual system across the full course.

### Primary colors

- Dark navy: titles and primary text
- Blue: traditional processes, neutral concepts, steps, and structure
- Teal: better approaches, outcomes, learning, and positive concepts
- Muted orange: risks, warnings, uncertainty, and important highlights
- Light gray: borders, dividers, and secondary elements
- Soft off-white: background

Color meaning should remain consistent across illustrations.

For example:

- Do not use teal for a negative risk in one visual and for a positive outcome in another.
- Do not use orange as a neutral structural color when it is already used for warnings.

## Typography

Use modern sans-serif typography.

The visual hierarchy should normally include:

1. Large, clear title
2. Short subtitle
3. Strong section labels
4. Concise diagram text
5. Small footer label

Text must remain readable at normal screen size.

Avoid:

- Decorative fonts
- Very small text
- Long paragraphs
- Excessive capitalization
- Several competing font sizes
- Low-contrast text

## Standard Layout

A visual should normally contain:

1. Main title
2. Optional short subtitle
3. One primary diagram, process, or comparison
4. Supporting labels
5. One concise key-idea box
6. Small footer

Preferred components:

- Rounded cards
- Simple arrows
- Flat vector icons
- Light borders
- Generous whitespace
- Clear alignment
- Balanced spacing
- Subtle visual hierarchy

Avoid:

- Dense dashboards
- Decorative shapes without meaning
- Multiple unrelated diagrams
- Photorealistic imagery
- Complex backgrounds
- Excessive shadows
- Large amounts of text

## Title and Subtitle Rules

The title should clearly name the concept.

Good examples:

```text
The Traditional Product Process
The Cost of Late Validation
Output Roadmap vs Outcome Roadmap
Delivery Team vs Empowered Product Team

The subtitle should clarify the visual purpose.

Examples:

How most companies still build products
Why learning after launch is expensive
Features delivered vs results achieved
Execution only vs collaborative discovery

Keep subtitles brief.

Key-Idea Box

Most visuals should contain a concise insight box near the bottom.

Use:

Key idea: [one memorable conclusion]

Examples:

Key idea: Validation should happen before major investment.
Key idea: Using sprints does not make the full product process Agile.
Key idea: Outcomes describe the change created, not only what was shipped.

The key idea should:

Summarize the visual
Be understandable without reading the full lecture
Contain one main message
Avoid long explanations
Icon Style

Use simple flat vector icons.

Icons should:

Support recognition
Use consistent line weight
Match the visual color system
Remain secondary to the content

Examples:

Lightbulb for ideas
Document for a business case
Map for a roadmap
Clipboard for requirements
Wireframe for design
Code brackets for development
Magnifying glass or bug for testing
Rocket for release
Target for validation or outcomes

Do not mix unrelated icon styles such as:

Photorealistic icons
Hand-drawn illustrations
3D icons
Flat vector icons

inside the same visual series.

Diagram Types

Choose the diagram type based on the learning need.

Process flow

Use for:

Sequential stages
Product lifecycle
Discovery steps
Delivery process
Cause-and-effect sequences

Example:

Idea → Validation → Investment → Build → Release
Side-by-side comparison

Use for:

Output vs outcome
Agile vs waterfall
Problem space vs solution space
Delivery team vs empowered team
Traditional vs better approach
Hierarchy

Use for:

Course structure
Product decomposition
Goal hierarchy
Metrics hierarchy
Team responsibility layers
Cycle

Use for:

Build–measure–learn
Continuous discovery
Product learning loops
Iterative improvement
Mind map

Use for:

Section summaries
Part summaries
Relationships among several concepts
Ecosystem map

Use for:

Stakeholder relationships
Product platforms
Interconnected services
Multi-product environments

Do not choose a complex diagram when a simple comparison would communicate the
idea more clearly.

Visual Count Guidelines

Recommend visuals based on the lecture’s complexity.

Typical ranges:

Level 1: 1–2 visuals
Level 2: 3–5 visuals
Level 3: 5–8 visuals

These are guidelines, not quotas.

Every recommended visual must have a distinct learning purpose.

Do not create several visuals that communicate essentially the same message.

Visual Recommendation Format

Before visual approval, recommend:

## Illustration 1: Visual Title

**Concept:** What the visual explains.

**Purpose:** Why it improves understanding or recall.

**Suggested structure:** The main components and relationships to show.

End the recommendation section with:

Recommended total: X illustrations

After exact approval, provide one professional manual-generation prompt per visual. Do not call an image-generation tool. Fix the expected filename and section-level destination before providing the prompt.

## Manual Production Handoff

The learner generates approved visuals manually in ChatGPT or another image interface. For each approved visual, provide:

- One self-contained professional prompt
- The single learning objective
- Exact composition and reading direction
- Exact on-image text
- The course visual system
- Accuracy and negative constraints
- PNG export requirements
- Exact filename
- Exact section-level `visuals/` destination

When an approved HTML companion exists, create a resilient placeholder pointing to the final filename. The placeholder must display a clear awaiting-asset state when the file is missing and show the image automatically after the learner places the correctly named file and reloads the page.

Pause after the prompt handoff. Verify manually supplied files before adding Markdown embeds, updating `VISUAL-INDEX.md`, committing, pushing, or opening a pull request.

Visual Placement Inside Lecture Notes

Every illustration must be embedded directly inside the lecture Markdown file
near the concept it explains.

Use this preferred sequence:

Introduce the concept
Display the illustration
Explain the visual and its implications

Example:

## Why This Process Is Still Waterfall

A company does not become Agile simply because engineering works in sprints.

![Agile development inside a broader waterfall product process](./visuals/11-agile-inside-waterfall-system.png)

*The organization uses iterative delivery only after most product decisions
have already been made.*

The earlier planning stages remain sequential, so learning still begins too
late.

Do not place all illustrations only at the end of the lecture.

Image Captions

Captions are optional.

Use a caption only when it adds interpretation that is not already obvious.

A caption should:

Be one short sentence
Explain why the visual matters
Avoid repeating the title
Avoid repeating all text inside the image

Example:

*Validation occurs after substantial time, money, and effort have already been
invested.*
Image Alt Text

Always use descriptive alt text.

Good:

![Comparison between output roadmaps and outcome roadmaps](./visuals/11-output-vs-outcome-roadmap.png)

Bad:

![image](./visuals/image1.png)

Alt text should describe the educational meaning, not only the visual
appearance.

File Naming

Use descriptive lowercase kebab-case filenames.

Prefix lecture visuals with the lecture number.

Example:

11-traditional-product-process.png
11-agile-inside-waterfall-system.png
11-cost-of-late-validation.png
11-output-vs-outcome-roadmap.png
11-delivery-vs-empowered-product-team.png

Avoid:

image1.png
final-image.png
new-design.png
visual-latest.png
Visual Storage

Store lecture visuals in the section-level visuals folder.

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

Shared visuals that apply across several lectures may be stored in:

assets/shared-visuals/

General diagrams or repository-level maps may be stored in:

assets/diagrams/

Do not store lecture-specific visuals in the root asset folders.

Visual Index

Every completed illustration should also appear in VISUAL-INDEX.md.

The visual index entry should contain:

Visual title
Course part and section
Source lecture
One-sentence purpose
Embedded image

Example:

### The Cost of Late Validation

**Source lecture:**  
[Why Product Management Is Broken](./01-introduction/01-introduction/11-why-product-management-is-broken.md)

**Purpose:** Compares learning after launch with validating before major
investment.

![Traditional and discovery-oriented validation approaches](./01-introduction/01-introduction/visuals/11-cost-of-late-validation.png)

The lecture remains the primary learning location.

The visual index is a browsing and revision layer.

Text Accuracy

Before finalizing any illustration, verify:

Title spelling
Subtitle spelling
Product Management terminology
Process order
Arrow direction
Labels
Percentages
Key-idea wording
Footer text

Do not accept a visually attractive illustration with incorrect or unreadable
text.

Consistency Across a Lecture Series

All visuals created for the same lecture should feel like one connected set.

Keep consistent:

Background
Typography
Border radius
Icon style
Card design
Spacing
Color meaning
Footer
Key-idea box
Overall density

When writing a prompt for a new visual, use a previously approved visual from the same course as the style reference when available.

Mermaid Diagrams

Use Mermaid inside Markdown for diagrams that benefit from:

Editability
Git-based version control
Simple process flows
Section mind maps
Part mind maps
Course-level concept maps

Use manually generated PNG illustrations when:

A polished visual study card is valuable
Icons improve recognition
The diagram contains a strong comparison
The visual is intended for repeated review
The concept benefits from an editorial infographic design

Mermaid diagrams and manually supplied visuals may coexist when they serve different
purposes.

Avoid generating a polished image that merely duplicates an adequate Mermaid
diagram without adding learning value.

Final Visual Quality Checklist

Before accepting a visual, confirm:

 It communicates one primary idea
 The title is clear
 The subtitle adds useful context
 All text is readable
 All wording is correct
 The visual hierarchy is clear
 The diagram structure is accurate
 Color meaning is consistent
 The style matches earlier course visuals
 The key-idea box is concise
 The footer is included
 The filename follows conventions
 The image is stored in the correct folder
 The lecture embeds it near the relevant context
 The visual index is updated
