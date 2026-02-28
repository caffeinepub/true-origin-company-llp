# Specification

## Summary
**Goal:** Add "Why Choose Us", "Privacy Policy", and "Terms & Conditions" links to the mobile hamburger menu in the TrueOrigin Exports app.

**Planned changes:**
- Add a "Why Choose Us" link in the mobile hamburger menu after "About Us" and before "Products", navigating to `/why-choose-us`, closing the menu on tap
- Add a "Privacy Policy" link in the mobile hamburger menu immediately before "Contact Us", navigating to `/privacy-policy`, closing the menu on tap
- Add a "Terms & Conditions" link in the mobile hamburger menu after "Privacy Policy" and before "Contact Us", navigating to `/terms-and-conditions`, closing the menu on tap
- Add translation keys `nav.whyChooseUs`, `nav.privacyPolicy`, and `nav.termsConditions` for English, Hindi, and Marathi in `translations.ts`

**User-visible outcome:** Mobile users opening the hamburger menu will see three new navigation links — "Why Choose Us", "Privacy Policy", and "Terms & Conditions" — in the correct positions, which close the menu and navigate to the appropriate routes when tapped.
