# Specification

## Summary
**Goal:** Fix raw translation key rendering in ExportCargoSection, SocialMediaSection, and ContactSection so all keys resolve to human-readable text in English, Hindi, and Marathi.

**Planned changes:**
- In `ExportCargoSection.tsx`, ensure all nine translation keys (`exportCargo.sectionLabel`, `exportCargo.heading`, `exportCargo.subheading`, `exportCargo.highlight1Title`, `exportCargo.highlight1Desc`, `exportCargo.highlight2Title`, `exportCargo.highlight2Desc`, `exportCargo.highlight3Title`, `exportCargo.highlight3Desc`) use the correct camelCase key names when calling `t()`
- In `SocialMediaSection.tsx`, ensure `social.sectionLabel` and `social.heading` use the correct camelCase key names when calling `t()`
- In `ContactSection.tsx`, ensure `contact.heading`, `contact.subheading`, `contact.info.heading`, `contact.form.heading`, and `contact.form.submit` use the correct camelCase key names when calling `t()`
- In `translations.ts`, add or correct all of the above keys with human-readable string values for `en`, `hi`, and `mr` language codes

**User-visible outcome:** All three sections (ExportCargoSection, SocialMediaSection, ContactSection) display proper human-readable text instead of raw key strings in all three language modes (English, Hindi, Marathi).
