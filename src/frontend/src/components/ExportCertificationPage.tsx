import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const certifications = [
  {
    nameKey: "exportCert.apeda.name",
    descKey: "exportCert.apeda.desc",
    icon: "🏛️",
  },
  {
    nameKey: "exportCert.fssai.name",
    descKey: "exportCert.fssai.desc",
    icon: "🍃",
  },
  {
    nameKey: "exportCert.organic.name",
    descKey: "exportCert.organic.desc",
    icon: "🌿",
  },
  {
    nameKey: "exportCert.phyto.name",
    descKey: "exportCert.phyto.desc",
    icon: "🌱",
  },
  {
    nameKey: "exportCert.origin.name",
    descKey: "exportCert.origin.desc",
    icon: "📜",
  },
  {
    nameKey: "exportCert.lab.name",
    descKey: "exportCert.lab.desc",
    icon: "🔬",
  },
];

const qcSteps = [
  { titleKey: "exportCert.qc1.title", descKey: "exportCert.qc1.desc" },
  { titleKey: "exportCert.qc2.title", descKey: "exportCert.qc2.desc" },
  { titleKey: "exportCert.qc3.title", descKey: "exportCert.qc3.desc" },
  { titleKey: "exportCert.qc4.title", descKey: "exportCert.qc4.desc" },
  { titleKey: "exportCert.qc5.title", descKey: "exportCert.qc5.desc" },
  { titleKey: "exportCert.qc6.title", descKey: "exportCert.qc6.desc" },
];

const products = [
  {
    titleKey: "exportCert.moringa.title",
    packagingKey: "exportCert.moringa.packaging",
    docsKey: "exportCert.moringa.docs",
    image: "/assets/generated/moringa-powder.dim_800x800.png",
  },
  {
    titleKey: "exportCert.curry.title",
    packagingKey: "exportCert.curry.packaging",
    docsKey: "exportCert.curry.docs",
    image: "/assets/generated/curry-leaves-farm.dim_800x500.png",
  },
  {
    titleKey: "exportCert.vegetables.title",
    packagingKey: "exportCert.vegetables.packaging",
    docsKey: "exportCert.vegetables.docs",
    image: "/assets/generated/okra-farm.dim_800x500.png",
  },
];

export default function ExportCertificationPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-moss hover:text-forest text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>

        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
            {t("exportCert.pageTitle")}
          </h1>
          <p className="text-forest/70 max-w-2xl mx-auto text-base leading-relaxed">
            {t("exportCert.pageSubtitle")}
          </p>
        </div>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-playfair font-bold text-forest mb-8 text-center">
            {t("exportCert.certSection")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.nameKey}
                className="bg-cream border border-moss/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-base font-bold text-forest mb-2">
                  {t(cert.nameKey)}
                </h3>
                <p className="text-forest/65 text-sm leading-relaxed">
                  {t(cert.descKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Control */}
        <section className="mb-16">
          <h2 className="text-2xl font-playfair font-bold text-forest mb-8 text-center">
            {t("exportCert.qcSection")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {qcSteps.map((step, index) => (
              <div
                key={step.titleKey}
                className="bg-cream border border-moss/20 rounded-2xl p-6 shadow-sm flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-forest mb-1">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-forest/65 text-sm leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Specifications */}
        <section id="product-specifications" className="mb-16">
          <h2 className="text-2xl font-playfair font-bold text-forest mb-8 text-center">
            {t("exportCert.specsSection")}
          </h2>
          <div className="space-y-6">
            {products.map((product) => (
              <div
                key={product.titleKey}
                className="bg-cream border border-moss/20 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={product.image}
                    alt={t(product.titleKey)}
                    className="w-full sm:w-48 h-40 sm:h-auto object-cover flex-shrink-0"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-playfair font-bold text-forest mb-4">
                      {t(product.titleKey)}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-moss">
                          {t("exportCert.packagingLabel")}
                        </span>
                        <p className="text-forest/70 text-sm mt-1 leading-relaxed">
                          {t(product.packagingKey)}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-moss">
                          {t("exportCert.docsLabel")}
                        </span>
                        <p className="text-forest/70 text-sm mt-1 leading-relaxed">
                          {t(product.docsKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="bg-forest text-cream rounded-2xl p-8 text-center">
          <p className="text-cream/90 mb-4 text-base">
            {t("exportCert.contactCta")}
          </p>
          <Link
            to="/"
            hash="contact"
            className="inline-block bg-gold text-forest font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            {t("exportCert.contactBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
