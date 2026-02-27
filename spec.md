# Specification

## Summary
**Goal:** Fix two NavBar bugs: a 'Get In Touch' nav item rendering as raw text, and the mobile hamburger menu dropdown having an inconsistent/transparent background.

**Planned changes:**
- Fix the 'Get In Touch' / 'Contact Us' nav link in the NavBar so it renders as proper human-readable text (not a raw translation key or template literal artifact) in both desktop and mobile views, across all three language modes (English, Hindi, Marathi).
- Fix the mobile hamburger menu dropdown background to always be solid white (#FFFFFF), regardless of scroll position or the navbar's scroll state.

**User-visible outcome:** The navbar 'Get In Touch' link displays correctly as readable text in all languages and on all screen sizes, and the mobile hamburger menu always opens with a consistent solid white background even when the user scrolls the page behind it.
