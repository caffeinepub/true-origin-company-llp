# Specification

## Summary
**Goal:** Fix all text rendering across the entire TrueOrigin Exports site so that every piece of visible text displays as clean, human-readable prose in English, Hindi, and Marathi — with no raw translation keys, JSON fragments, escaped characters, or template literal artifacts ever appearing on screen.

**Planned changes:**
- Audit and fix the centralized translations file (`translations.ts`) for all three language codes (en, hi, mr), ensuring every value is a plain, readable string with no technical artifacts.
- Add complete Hindi and Marathi translations for any key that is currently missing, empty, or a placeholder, so every English key has a corresponding non-empty value in both hi and mr.
- Fix every component that consumes the language context (NavBar, HeroSection, AboutSection, ProductsSection, QualityComplianceSection, ExportCargoSection, SocialMediaSection, ContactSection, Footer, ExportCertificationPage, PrivacyPolicyPage, TermsAndConditionsPage) to correctly call the `t()` helper and render resolved translation strings.
- Ensure the company name "True Origin Company LLP" and contact detail values (phone, email, website) remain unchanged across all languages.

**User-visible outcome:** Switching between English, Hindi, and Marathi in the language selector renders fully readable, properly translated text on every page and in every component, with no raw keys or technical strings ever visible.
