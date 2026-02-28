# Specification

## Summary
**Goal:** Fix the "Contact Sales" CTA button in the HeroSection so it displays human-readable text in all three languages (English, Hindi, Marathi) instead of a raw translation key.

**Planned changes:**
- Update the translation key used in HeroSection's JSX to exactly match the key defined in `translations.ts` for all three language codes (`en`, `hi`, `mr`).
- Ensure the `translations.ts` values for this key are plain human-readable strings in English, Hindi, and Marathi.

**User-visible outcome:** The "Contact Sales" button in the hero section correctly displays the localized label in all three language modes with no raw key strings visible.
