import { Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("privacy.section1Title"),
      content: t("privacy.section1Content"),
    },
    {
      title: t("privacy.section2Title"),
      content: t("privacy.section2Content"),
    },
    {
      title: t("privacy.section3Title"),
      content: t("privacy.section3Content"),
    },
    {
      title: t("privacy.section4Title"),
      content: t("privacy.section4Content"),
    },
    {
      title: t("privacy.section5Title"),
      content: t("privacy.section5Content"),
    },
    {
      title: t("privacy.section6Title"),
      content: t("privacy.section6Content"),
    },
    {
      title: t("privacy.section7Title"),
      content: t("privacy.section7Content"),
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-gold" />
            <h1 className="text-3xl md:text-4xl font-bold font-playfair">
              {t("privacy.title")}
            </h1>
          </div>
          <p className="text-white/70 text-sm">{t("privacy.lastUpdated")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 border border-parchment">
          <p className="text-forest/80 leading-relaxed text-base">
            {t("privacy.intro")}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-parchment"
            >
              <h2 className="text-xl font-bold font-playfair text-forest mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-forest text-white text-sm flex items-center justify-center font-sans font-bold flex-shrink-0">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-forest/75 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Callout */}
        <div className="mt-10 bg-forest/5 border border-forest/20 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold font-playfair text-forest mb-2">
            Questions about our Privacy Policy?
          </h3>
          <p className="text-forest/70 mb-4">
            We're happy to clarify anything. Reach out to us directly.
          </p>
          <a
            href="mailto:info@pureoriginexports.com"
            className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-full font-medium hover:bg-moss transition-colors"
          >
            info@pureoriginexports.com
          </a>
        </div>
      </div>
    </div>
  );
}
