# Quality Checklist

Use this checklist before marking any lecture, section, part, or visual as
complete.

The checklist is intended to catch:

- Weak explanations
- Missing repository updates
- Broken navigation
- Incorrect metadata
- Inconsistent visuals
- Unnecessary duplication
- Content that does not match the original lecture

---

# 1. Lecture Content Checklist

## Source Understanding

- [ ] The lecture title matches the original course title
- [ ] The transcript has been fully reviewed
- [ ] The central argument has been identified correctly
- [ ] Important supporting ideas have been captured
- [ ] Spoken repetition and filler have been removed
- [ ] Obvious transcript errors have been corrected
- [ ] Missing presentation context has not been invented
- [ ] The instructor’s original meaning has been preserved

## Material Level

- [ ] The selected material level fits the lecture
- [ ] Level 2 was used by default unless another level is clearly justified
- [ ] The material-level note briefly explains the decision
- [ ] A short lecture has not been expanded unnecessarily
- [ ] A foundational lecture has not been oversimplified

## Mission, Scaffolding, and Dependencies

- [ ] The lecture advances a relevant success criterion from `LEARNING-MISSION.md`
- [ ] Concept complexity and learner familiarity were assessed separately
- [ ] Existing lecture coverage was treated as exposure rather than proof of mastery
- [ ] Scaffolding uses documented learner context and does not assume unsupported knowledge
- [ ] Technical analogies clarify Product Management reasoning and state where the analogy stops
- [ ] Required prerequisites are explained before they are used
- [ ] Prerequisite, application, and extension links point only to verified existing targets
- [ ] No missing dependency caused a placeholder, invented link, or invented course order
- [ ] Reusable teaching patterns organize transcript-supported relationships without importing external content

## Structure

- [ ] The lecture overview explains what the lecture covers
- [ ] The central argument or core idea is explicit
- [ ] The content is reorganized logically
- [ ] Section headings are descriptive
- [ ] Each section focuses on one main idea
- [ ] The guide does not follow transcript chronology when a clearer structure exists
- [ ] Paragraphs are reasonably short
- [ ] Bullets are used only where they improve clarity
- [ ] Important comparisons use a table or clear side-by-side explanation
- [ ] The lecture can be understood without watching the original video

## Explanation Quality

- [ ] Key concepts are explained clearly
- [ ] Product Management terminology is accurate
- [ ] Added explanations remain aligned with the lecture
- [ ] Unrelated frameworks have not been introduced
- [ ] Important nuance has been preserved
- [ ] Broad claims are attributed or qualified where needed
- [ ] Instructor opinions are not presented as verified industry facts
- [ ] Rhetorical percentages are not strengthened into factual statistics
- [ ] Technical context supports the PM lesson rather than replacing it

## Practical Application

- [ ] A practical example is included for Level 2 or Level 3
- [ ] The example directly supports the concept
- [ ] The example is realistic
- [ ] The example is not longer than the lesson it explains
- [ ] SaaS, AI, technical-product, or software examples are used only when relevant
- [ ] Product Manager implications are explained where useful

## Common Misunderstandings

- [ ] The section is included only when genuinely useful
- [ ] Each misunderstanding is relevant to the lecture
- [ ] The clarification does not introduce a new unrelated lesson
- [ ] The instructor’s argument is not distorted

## Key Concepts and Definitions

- [ ] Only important terms are included
- [ ] Definitions are concise
- [ ] Definitions are accurate
- [ ] Definitions are understandable without extra context
- [ ] Terms are consistent with the root glossary
- [ ] New important terms are identified for addition to `GLOSSARY.md`

## Key Takeaways

- [ ] Takeaways are distinct
- [ ] Takeaways capture the most important lessons
- [ ] Takeaways do not merely repeat section titles
- [ ] The number of takeaways fits the material level
- [ ] No new concepts are introduced in this section

## Visual Summary

- [ ] The Mermaid or text diagram reflects the lecture accurately
- [ ] The process order is correct
- [ ] Relationships and arrows are correct
- [ ] The diagram is simple enough to review quickly
- [ ] The visual summary does not unnecessarily duplicate a verified visual asset
- [ ] Mermaid syntax is valid when Mermaid is used

## One-Minute Review

- [ ] The review restates the central argument
- [ ] It includes the most important distinctions
- [ ] It introduces no new concepts
- [ ] It can stand alone as quick revision
- [ ] It can be read in approximately one minute
- [ ] It avoids repetitive wording

## Excluded Content

Confirm that none of the following were added unless explicitly requested:

- [ ] Reflection questions
- [ ] Knowledge-check questions
- [ ] Quizzes
- [ ] Multiple-choice questions
- [ ] Flashcards
- [ ] Homework
- [ ] Assignments
- [ ] Exercises
- [ ] Discussion questions

---

# 2. Lecture Metadata Checklist

- [ ] YAML front matter is present
- [ ] YAML syntax is valid
- [ ] `title` matches the lecture title
- [ ] `course` is correct
- [ ] `part` is correct
- [ ] `part_number` is correct
- [ ] `section` is correct
- [ ] `section_number` is correct
- [ ] `lecture_number` matches the original course order
- [ ] `content_type` is correct
- [ ] `material_level` matches the guide
- [ ] `status` reflects the real completion state
- [ ] `source` is accurate
- [ ] `visuals` matches the number of completed visuals
- [ ] `related_concepts` contains only relevant concepts
- [ ] No metadata field contains invented information

Allowed lecture statuses:

```text
draft
content-complete
visuals-pending
complete

A lecture should use:

draft while the guide is incomplete
content-complete when the written guide is complete but visuals have not been reviewed
visuals-pending when visual recommendations exist but requested visuals are unfinished
complete only when the lecture, visuals, links, and repository updates are complete
3. File and Folder Checklist
 The lecture is stored in its original course part
 The lecture is stored in its original course section
 The filename uses lowercase kebab-case
 The filename begins with the correct two-digit lecture number
 The filename is descriptive
 The raw transcript is stored under sources/
 The polished lecture does not contain the full raw transcript
 Lecture visuals are stored in the section-level visuals/ folder
 Visual filenames begin with the lecture number
 No unnecessary duplicate files were created
 No empty placeholder files are linked as completed resources

Example lecture path:

01-introduction/01-introduction/11-why-product-management-is-broken.md

Example transcript path:

sources/01-introduction/01-introduction/11-why-product-management-is-broken-transcript.md
4. Navigation and Linking Checklist
Lecture Navigation
 Previous lecture link is included when known
 Previous lecture link points to the correct file
 Section overview link is included
 Part overview link is included
 Next lecture link is included when known
 Next lecture link points to the correct file
 Course index link is included
 Unknown links were omitted rather than invented
Related Concepts
 Related links are genuinely useful
 The links help explain prerequisites, extensions, or connected ideas
 Three to five related links are used when enough content exists
 The same concept is not linked repeatedly throughout the lecture
 The first meaningful mention is linked when useful
 Relative paths are correct
 Links do not point to files that do not exist
Source Link
 The original transcript is linked when stored in the repository
 The relative source path is correct
5. Repository Update Checklist

After completing a lecture:

 The lecture was added to COURSE-INDEX.md
 The lecture was added to the section README.md
 Previous and next navigation were updated
 Important new terms were added to GLOSSARY.md
 Completed visuals were added to VISUAL-INDEX.md
 Relevant conceptual links were added
 Section progress was updated
 Part progress was updated when appropriate
 The course concept map was reviewed
 The course concept map was changed only when a major relationship was introduced
 No root file was updated unnecessarily
6. Visual Recommendation Checklist

Before preparing final visual prompts:

 The recommended visual count matches the lecture complexity
 Every visual has a distinct learning purpose
 No two visuals communicate essentially the same idea
 Each recommendation includes a title
 Each recommendation explains the concept
 Each recommendation explains the purpose
 Each recommendation proposes a clear structure
 The visuals align with the lecture sections
 Final production prompts were not prepared before exact visual approval

Manual Prompt Package

- [ ] The manifest lists every approved visual, exact filename, exact destination, and awaiting-user status
- [ ] One self-contained prompt exists for each approved visual
- [ ] Each prompt states one learning objective
- [ ] Each prompt specifies composition, hierarchy, and reading direction
- [ ] Every visible title, label, step, caption, and key-idea sentence is listed verbatim
- [ ] The course visual system is specified consistently
- [ ] Accuracy constraints prevent unsupported relationships or claims
- [ ] Negative constraints prohibit clutter, tiny text, logos, watermarks, and unintended combined panels
- [ ] Export instructions require PNG, the approved aspect ratio and resolution, and the exact filename
- [ ] The prompt does not require unstated repository or transcript context
- [ ] No image-generation tool was called

Typical ranges:

Level 1: 1–2 visuals
Level 2: 3–5 visuals
Level 3: 5–8 visuals

These ranges are guidance, not quotas.

7. Manually Supplied Visual Asset Checklist
Learning Value
 The illustration communicates one primary idea
 The concept matches the lecture
 The visual adds value beyond the written text
 The layout supports fast review
 The visual is not merely decorative
 The visual does not duplicate another illustration unnecessarily
Content Accuracy
 The title is correct
 The subtitle is correct
 All labels are spelled correctly
 Product Management terminology is accurate
 Process steps are in the correct order
 Arrow directions are correct
 Comparisons are balanced and accurate
 Percentages and numbers are correct
 The key-idea statement matches the lesson
 The footer reads Product Management Study Guide
Design Consistency
 The format is 4:5 portrait unless another format was requested
 The background is soft off-white
 Titles use dark navy
 Blue is used for neutral or traditional structures
 Teal is used for better approaches, outcomes, or learning
 Muted orange is used for warnings or emphasis
 Icons use one consistent style
 Cards and borders match the existing visual system
 Whitespace is sufficient
 Text remains readable at normal size
 The design matches previously approved visuals
Storage and Embedding
 The file has a valid PNG signature, readable dimensions, and non-zero size
 The manually supplied file count equals the approved visual count
 The filename uses descriptive lowercase kebab-case
 The filename begins with the lecture number
 The file is stored in the correct section visuals/ folder
 The visual is embedded near the concept it explains
 The visual is not placed only at the end of the lecture
 Alt text describes the educational meaning
 An optional caption adds interpretation rather than repetition
 The visual appears in VISUAL-INDEX.md
7A. Interactive HTML Companion Checklist

Use only when an interactive companion was explicitly approved.

Learning Value

- [ ] The companion has one primary learning outcome
- [ ] Every widget serves a distinct teaching purpose
- [ ] The HTML teaches the complete approved lecture at the same substantive depth as Markdown
- [ ] Every substantive Markdown heading maps to a working HTML section ID
- [ ] All approved claims, distinctions, reasoning, caveats, and examples remain present
- [ ] Comparison rows, definitions, misconceptions, takeaways, and worked-example stages match Markdown counts
- [ ] The complete visual-summary meaning and one-minute review are present
- [ ] Interactive practice follows and reinforces complete explanations rather than replacing them
- [ ] Quiz, exercise, reflection, or assignment widgets match the exact approved interaction types
- [ ] Feedback explains the relevant Product Management reasoning

Architecture and Content

- [ ] The file is stored under the section-level `interactive/` folder
- [ ] Its filename starts with the two-digit lecture number and uses lowercase kebab-case
- [ ] The Markdown lecture links to the companion and the companion links back
- [ ] Shared CSS and JavaScript paths resolve to `assets/interactive/`
- [ ] Markdown and HTML are each independently complete, with no required explanation exclusive to either format
- [ ] All claims are grounded in the supplied transcript and approved study guide
- [ ] Transcript-derived text is safely escaped for HTML
- [ ] No remote script, CDN, external font, analytics, form submission, or third-party embed exists

Accessibility and Behavior

- [ ] The document has `lang`, charset, viewport, title, one `h1`, and a `main` landmark
- [ ] Heading order is logical
- [ ] All controls use native buttons or links and work by keyboard
- [ ] Buttons declare `type="button"`
- [ ] Focus indicators remain visible
- [ ] IDs are unique and ARIA references resolve
- [ ] Dynamic feedback uses an appropriate live region
- [ ] Meaning is not communicated by color alone
- [ ] Reduced-motion preferences are respected
- [ ] The page remains readable on narrow screens and in print
- [ ] Approved widgets and expected widget counts match the generated HTML
- [ ] No template placeholder remains
- [ ] Every approved manual visual has one resilient HTML placeholder when a companion exists
- [ ] Each placeholder references the exact approved filename under the section-level `visuals/` folder
- [ ] Missing files show fallback content and correctly named files display automatically after reload

8. Section Completion Checklist

Use after all lectures in one course section are complete.

Lecture Coverage
 Every planned lecture has been processed
 Every lecture file is in the correct order
 Every lecture has valid metadata
 Every lecture has a one-minute review
 Every lecture has appropriate visual recommendations
 Requested visuals are complete and embedded
 Lecture navigation works across the section
Section README
 The section overview is current
 Learning goals reflect the completed lectures
 All lectures are listed
 Lecture order matches the course
 Section resources are linked
 Related sections are accurate
 Progress checklist is current
Section Summary
 section-summary.md exists
 It synthesizes rather than repeats the lectures
 It explains how the lectures connect
 It identifies the section’s central mental model
 It includes key comparisons
 It explains practical PM implications
 It includes a five-minute review
 It links to all lectures in the section
Section Mind Map
 section-mind-map.md exists
 It uses an appropriate Mermaid diagram
 It accurately connects the section concepts
 It is readable
 It does not include unnecessary detail
 Mermaid syntax is valid
 It links to the section summary and overview
Section Integration
 Glossary entries are consistent
 Visual index contains all completed visuals
 Cross-links between lectures were reviewed
 The part README reflects section completion
 No large sections are duplicated unnecessarily
9. Part Completion Checklist

Use after all sections inside one major course part are complete.

Part README
 The part overview is current
 All sections are listed
 Section order matches the course
 The relationship between sections is explained
 Part resources are linked
 Part progress is current
Part Summary
 part-summary.md exists
 It synthesizes all section summaries
 It explains the complete Product Management domain
 It shows how the sections build on each other
 It avoids repeating entire section summaries
 It explains practical PM implications
 It includes a concise part-level review
Part Mind Map
 part-mind-map.md exists
 It connects the major sections
 It highlights important relationships
 It remains high-level
 Mermaid syntax is valid
 It links to the part summary and section resources
Part Integration
 Links between sections were reviewed
 Glossary entries were reviewed
 Visual index was reviewed
 COURSE-INDEX.md reflects completion
 COURSE-CONCEPT-MAP.md was updated when needed
 No section or lecture was moved away from its original course location
10. Final Repository Integrity Checklist

Before a major commit or release:

 Repository structure follows the documented hierarchy
 No broken relative links remain
 No missing image files remain
 No generic filenames remain
 No accidental duplicate folders remain
 No completed file contains placeholder text
 No unfinished file is marked complete
 Mermaid diagrams render correctly
 Course order is accurate
 Terminology is consistent across lectures
 Visual style is consistent across sections
 Root indexes reflect the actual repository state
 Files that do not exist are not linked
 Raw transcripts remain separated from polished notes
 Large content blocks are not duplicated across summary layers
