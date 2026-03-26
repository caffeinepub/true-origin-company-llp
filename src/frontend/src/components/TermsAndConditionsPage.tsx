import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const sections = [
  { titleKey: "terms.section1Title", contentKey: "terms.section1Content" },
  { titleKey: "terms.section2Title", contentKey: "terms.section2Content" },
  { titleKey: "terms.section3Title", contentKey: "terms.section3Content" },
  { titleKey: "terms.section4Title", contentKey: "terms.section4Content" },
  { titleKey: "terms.section5Title", contentKey: "terms.section5Content" },
  { titleKey: "terms.section6Title", contentKey: "terms.section6Content" },
  { titleKey: "terms.section7Title", contentKey: "terms.section7Content" },
  { titleKey: "terms.section8Title", contentKey: "terms.section8Content" },
];

export default function TermsAndConditionsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-moss hover:text-forest text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-playfair font-bold text-forest mb-3">
            {t("terms.pageTitle")}
          </h1>
          <p className="text-forest/50 text-sm">{t("terms.lastUpdated")}</p>
          <p className="mt-4 text-forest/70 leading-relaxed">
            {t("terms.intro")}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map(({ titleKey, contentKey }, index) => (
            <div
              key={titleKey}
              className="bg-cream rounded-2xl p-6 border border-moss/15 shadow-sm"
            >
              <h2 className="text-xl font-playfair font-bold text-forest mb-3">
                {index + 1}. {t(titleKey)}
              </h2>
              <p className="text-forest/70 leading-relaxed">{t(contentKey)}</p>
            </div>
          ))}
        </div>

        {/* Contact callout */}
        <div className="mt-12 bg-forest text-cream rounded-2xl p-8 text-center">
          <p className="text-cream/90 mb-2">{t("terms.contactCta")}</p>
          <a
            href="mailto:info@pureoriginexports.com"
            className="text-gold font-semibold hover:underline"
          >
            info@pureoriginexports.com
          </a>
        </div>
      </div>
    </div>
  );
}
