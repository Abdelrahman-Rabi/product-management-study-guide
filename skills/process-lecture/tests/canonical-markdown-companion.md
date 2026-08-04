# Scenario: Canonical Markdown and HTML Companion

## Prompt

The user approves a scenario walkthrough companion for a Level 2 lecture.

## Expected Without Skill

The agent may move required explanations out of Markdown, duplicate the full lecture in HTML, omit a back-link, or place the HTML file in a generic root lessons folder.

## Required Behavior With Skill

- Keep the Markdown lecture as the canonical complete explanation.
- Store the companion at the section-level `interactive/<lecture-number>-<lecture-slug>.html` path.
- Transform only the approved learning outcome and scenario into an interactive experience.
- Link the Markdown lecture and HTML companion in both directions.
- Keep all companion claims grounded in the approved guide and supplied transcript.
- Do not create a root-level lesson copy or duplicate the raw transcript.

## Pass Condition

The Markdown lecture remains independently complete, while the section-level HTML companion adds a distinct interactive learning experience with verified two-way navigation.
