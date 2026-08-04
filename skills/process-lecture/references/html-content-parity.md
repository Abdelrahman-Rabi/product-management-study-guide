# HTML Content Parity

Use this reference whenever an interactive HTML lesson is approved. The HTML must be a complete, standalone rendering of the approved Markdown lecture plus the approved interactions.

## Core Principle

Treat Markdown as the content authority, not as the only complete artifact. A learner who reads only the HTML must receive the same substantive teaching depth, nuance, examples, and review value as a learner who reads only the Markdown.

Semantic parity does not require copying Markdown sentence for sentence. Reformat for the browser, but do not compress away claims, reasoning, qualifications, examples, distinctions, or review material.

## Required Coverage Map

Before writing HTML, create an internal coverage map from every substantive Markdown section to one or more HTML section IDs.

| Markdown content | Required HTML treatment |
|---|---|
| Lecture Overview | Outcome-oriented overview with all approved objectives |
| Central Argument or Core Idea | Prominent standalone section |
| Every numbered concept section | Full explanation preserving claims, reasoning, and nuance |
| Meaningful comparison | Equivalent accessible table, aligned cards, or tabs with all comparison dimensions |
| Practical PM example | Complete situation, decision, reasoning, consequence, and transferable lesson |
| Common Misunderstandings | Every approved misconception and its full repair |
| Key Concepts and Definitions | Every approved term and definition |
| Key Takeaways | Every approved takeaway, without silent merging |
| Visual Summary | Equivalent accessible text, HTML structure, or image with explanatory text |
| One-Minute Review | Full standalone review |
| Approved visuals | Image or resilient placeholder at the concept it explains |
| Related Concepts | Working links to every approved existing target |
| Source and continuation | Source, section, part, next/previous when valid, and course-index navigation |

Production-only material may be represented differently:

- Do not reproduce YAML frontmatter as lesson prose.
- Replace visual recommendation specifications with the approved visual or placeholder when the visual is selected.
- Do not repeat a separate visual inventory when the same assets are already placed contextually.
- Omit unavailable navigation rather than rendering invented links.

## Depth Rules

- Preserve every approved factual or instructional claim.
- Preserve causal reasoning, decision criteria, caveats, and boundaries—not only conclusions.
- Preserve all rows and dimensions of meaningful comparison tables.
- Preserve the complete worked example; do not reduce it to a quiz prompt.
- Keep misconception repair visible outside interactive feedback so it remains readable without JavaScript.
- Keep definitions and takeaways directly readable; interactions may reinforce them but must not hide them permanently.
- Place each visual beside the complete concept explanation it supports.
- Use progressive disclosure to manage length, not omission. Native `details` elements may collapse secondary depth while keeping it accessible and printable.
- Do not use widgets as substitutes for explanations. Practice follows teaching.

## Browser Structure

For long lessons:

1. Add a table of contents linking to stable section IDs.
2. Use one readable main column and descriptive headings.
3. Group related subsections into cards without turning every paragraph into a card.
4. Place interactive practice after the complete explanation it reinforces.
5. Preserve a complete linear reading path when JavaScript is disabled.
6. Make all collapsed content visible in print.

## Parity Validation

Before commit:

1. Extract every Markdown `##` and `###` heading.
2. Classify it as substantive learning content, production-only metadata, or navigation.
3. Map every substantive heading to an HTML ID.
4. Compare lists, table rows, definitions, misconceptions, example stages, and takeaway counts.
5. Confirm that no Markdown-only claim or qualification is absent from HTML.
6. Confirm that no HTML-only lecture claim lacks support in the approved Markdown or transcript.
7. Read the HTML linearly without using a widget and verify that it still teaches the complete lecture.

Report parity as:

```text
Markdown substantive sections: <count>
Mapped HTML sections: <count>
Unmapped substantive sections: <none or list>
Comparison rows: Markdown <count> / HTML <count>
Definitions: Markdown <count> / HTML <count>
Misconceptions: Markdown <count> / HTML <count>
Takeaways: Markdown <count> / HTML <count>
Worked-example stages: Markdown <count> / HTML <count>
Parity result: pass | fail
```

Stop before commit when any substantive section, claim, example stage, comparison dimension, definition, misconception, or takeaway is missing.
