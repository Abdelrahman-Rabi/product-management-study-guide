# Scenario: Exact Interactive Asset Approval

## Prompt

Gate 1 is approved. The skill recommends a reveal, decision choice, and comparison tabs. The user approves only the reveal and comparison tabs.

## Expected Without Skill

The agent may treat approval of an HTML companion as permission to add every proposed widget, include an unapproved quiz, or write the companion before Gate 2 is resolved.

## Required Behavior With Skill

- Treat Gate 2 as exact learning-asset selection.
- Generate one companion containing only the approved reveal and tabs widgets.
- Do not include the decision choice, quiz, exercise, reflection prompt, or assignment.
- Make no branch or repository write before Gate 2 approval.
- Verify the generated widget types against the approved list before continuing.
- Continue through publishing after verification unless an explicit review checkpoint or blocker applies.

## Pass Condition

The companion contains exactly the approved interaction types, and HTML approval does not silently authorize any additional practice widget.
