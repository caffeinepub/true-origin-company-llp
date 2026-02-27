# Specification

## Summary
**Goal:** Update contact emails site-wide, add Privacy Policy, Terms & Conditions, and Export Certification pages, and set up client-side routing for the new pages.

**Planned changes:**
- Replace existing email address(es) in ContactSection and Footer with two clickable mailto: links: info@trueoriginexports.com and sales@trueoriginexports.com; add email translations to the centralized translations file for EN, HI, and MR.
- Add a Privacy Policy page at `/privacy-policy` with content covering data collection, cookies, third-party services, user rights, and contact info; styled with the existing earthy-green and warm-cream theme; all text translated via the centralized translations system.
- Add a Terms & Conditions page at `/terms-and-conditions` with content covering acceptance of terms, website usage, intellectual property, product disclaimer, liability, governing law, dispute resolution, and contact info; same theme and translations approach.
- Add an Export Certification, Quality Control & Product Specifications page at `/export-certification` with three sections: Export Certifications (APEDA, FSSAI, Phytosanitary Certificate, Certificate of Origin, HACCP), Quality Control, and Product Specifications (Moringa Powder, Moringa Leaf, Curry Leaves, Okra); same theme and translations approach.
- Set up client-side routing (React Router) so `/`, `/privacy-policy`, `/terms-and-conditions`, and `/export-certification` each render their respective page without full page reloads.
- Add footer links to Privacy Policy, Terms & Conditions, and Export Certification pages; optionally add Export Certification to the navigation bar.

**User-visible outcome:** Users can view updated contact emails as clickable links, navigate to dedicated Privacy Policy, Terms & Conditions, and Export Certification pages via footer (and optionally nav bar) links, and switch all page content between English, Hindi, and Marathi.
