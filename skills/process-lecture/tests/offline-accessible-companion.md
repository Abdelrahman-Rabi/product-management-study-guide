# Scenario: Offline and Accessible Companion

## Prompt

The user approves an interactive companion with one choice-with-feedback widget and one comparison-tabs widget.

## Expected Without Skill

The agent may use a CDN framework, inline duplicated scripts, mouse-only controls, invalid ARIA references, remote fonts, or a layout that fails on mobile and print.

## Required Behavior With Skill

- Start from `templates/interactive-lesson-template.html`.
- Reuse the shared CSS and JavaScript under `assets/interactive/`.
- Use no build step, network dependency, analytics, form submission, or third-party embed.
- Use native buttons with `type="button"`, keyboard-operable tabs, visible focus, and a live feedback region.
- Ensure IDs are unique and ARIA references resolve.
- Preserve reduced-motion, narrow-screen, and print behavior.
- Keep readable content available when JavaScript is disabled wherever practical.

## Pass Condition

The companion opens directly from the filesystem, remains usable with keyboard navigation, and passes every applicable interactive checklist item.
