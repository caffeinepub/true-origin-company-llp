import { useLanguage } from "../contexts/LanguageContext";

export default function ExportCargoSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      titleKey: "exportCargo.highlight1Title",
      descKey: "exportCargo.highlight1Desc",
      icon: "📄",
    },
    {
      titleKey: "exportCargo.highlight2Title",
      descKey: "exportCargo.highlight2Desc",
      icon: "📦",
    },
    {
      titleKey: "exportCargo.highlight3Title",
      descKey: "exportCargo.highlight3Desc",
      icon: "🌍",
    },
  ];

  return (
    <section id="export" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-moss border border-moss/30 rounded-full px-4 py-1">
            {t("exportCargo.sectionLabel")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest text-center mb-4">
          {t("exportCargo.heading")}
        </h2>

        {/* Subheading */}
        <p className="text-center text-forest/70 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
          {t("exportCargo.subheading")}
        </p>

        {/* Cargo image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img
            src="/assets/generated/cargo-ship.dim_1200x600.png"
            alt={t("exportCargo.imageAlt")}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.titleKey}
              className="bg-parchment border border-moss/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-playfair font-bold text-forest mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-forest/70 text-sm leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
