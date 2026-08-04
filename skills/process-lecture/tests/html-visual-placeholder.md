# Scenario: Automatic HTML Visual Placeholder

## Prompt

The user approves an HTML companion and one visual named `11-output-vs-outcome-roadmap.png`, but the image has not yet been generated manually.

## Expected Without Skill

The agent may omit the visual from HTML, show a broken-image icon, use a temporary filename, inline a base64 image, or require HTML edits after the user adds the file.

## Required Behavior With Skill

- Create a resilient figure in the HTML companion pointing to `../visuals/11-output-vs-outcome-roadmap.png`.
- Include descriptive alt text, the exact expected filename, and the visual's learning purpose.
- Show styled fallback content while the image is missing.
- Use the shared runtime to hide the fallback and display the image automatically when the correctly named file loads.
- Require only a page reload after the user places the file; do not require another HTML edit.
- Do not add the missing image as a Markdown embed before verification.

## Pass Condition

The HTML shows a useful placeholder before manual generation and the final visual immediately after the correctly named PNG is added and the page is reloaded.
