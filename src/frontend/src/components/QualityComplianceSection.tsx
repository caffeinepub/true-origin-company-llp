import { Link } from "@tanstack/react-router";
import { useLanguage } from "../contexts/LanguageContext";

const docs = [
  "quality.doc1",
  "quality.doc2",
  "quality.doc3",
  "quality.doc4",
  "quality.doc5",
  "quality.doc6",
];

export default function QualityComplianceSection() {
  const { t } = useLanguage();

  return (
    <section id="quality" className="py-20 bg-parchment">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-moss border border-moss/30 rounded-full px-4 py-1">
            {t("quality.sectionLabel")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest text-center mb-4">
          {t("quality.heading")}
        </h2>

        {/* Intro paragraph */}
        <p className="text-center text-forest/70 max-w-2xl mx-auto mb-4 text-base leading-relaxed">
          {t("quality.intro")}
        </p>

        {/* Supporting copy */}
        <p className="text-center text-forest/60 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
          {t("quality.supportingCopy")}
        </p>

        {/* Documentation grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {docs.map((key) => (
            <div
              key={key}
              className="bg-cream border border-moss/20 rounded-xl p-5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-moss flex-shrink-0" />
              <span className="text-forest font-medium text-sm leading-snug">
                {t(key)}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/export-certification"
            className="inline-block bg-forest text-cream font-semibold px-8 py-3 rounded-full hover:bg-moss transition-colors text-sm tracking-wide"
          >
            {t("quality.ctaQuote")}
          </Link>
        </div>
      </div>
    </section>
  );
}
