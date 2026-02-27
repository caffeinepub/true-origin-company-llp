import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Award, CheckCircle, FlaskConical, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductSpec {
  nameKey: 'cert.p1.name' | 'cert.p2.name' | 'cert.p3.name' | 'cert.p4.name';
  scientificKey: 'cert.p1.scientificName' | 'cert.p2.scientificName' | 'cert.p3.scientificName' | 'cert.p4.scientificName';
  formKey: 'cert.p1.form' | 'cert.p2.form' | 'cert.p3.form' | 'cert.p4.form';
  colorKey: 'cert.p1.color' | 'cert.p2.color' | 'cert.p3.color' | 'cert.p4.color';
  moistureKey: 'cert.p1.moisture' | 'cert.p2.moisture' | 'cert.p3.moisture' | 'cert.p4.moisture';
  packagingKey: 'cert.p1.packaging' | 'cert.p2.packaging' | 'cert.p3.packaging' | 'cert.p4.packaging';
  shelfLifeKey: 'cert.p1.shelfLife' | 'cert.p2.shelfLife' | 'cert.p3.shelfLife' | 'cert.p4.shelfLife';
  gradeKey: 'cert.p1.grade' | 'cert.p2.grade' | 'cert.p3.grade' | 'cert.p4.grade';
  image: string;
}

const products: ProductSpec[] = [
  {
    nameKey: 'cert.p1.name',
    scientificKey: 'cert.p1.scientificName',
    formKey: 'cert.p1.form',
    colorKey: 'cert.p1.color',
    moistureKey: 'cert.p1.moisture',
    packagingKey: 'cert.p1.packaging',
    shelfLifeKey: 'cert.p1.shelfLife',
    gradeKey: 'cert.p1.grade',
    image: '/assets/generated/moringa-powder.dim_800x800.png',
  },
  {
    nameKey: 'cert.p2.name',
    scientificKey: 'cert.p2.scientificName',
    formKey: 'cert.p2.form',
    colorKey: 'cert.p2.color',
    moistureKey: 'cert.p2.moisture',
    packagingKey: 'cert.p2.packaging',
    shelfLifeKey: 'cert.p2.shelfLife',
    gradeKey: 'cert.p2.grade',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
  },
  {
    nameKey: 'cert.p3.name',
    scientificKey: 'cert.p3.scientificName',
    formKey: 'cert.p3.form',
    colorKey: 'cert.p3.color',
    moistureKey: 'cert.p3.moisture',
    packagingKey: 'cert.p3.packaging',
    shelfLifeKey: 'cert.p3.shelfLife',
    gradeKey: 'cert.p3.grade',
    image: '/assets/generated/curry-leaves-farm.dim_800x500.png',
  },
  {
    nameKey: 'cert.p4.name',
    scientificKey: 'cert.p4.scientificName',
    formKey: 'cert.p4.form',
    colorKey: 'cert.p4.color',
    moistureKey: 'cert.p4.moisture',
    packagingKey: 'cert.p4.packaging',
    shelfLifeKey: 'cert.p4.shelfLife',
    gradeKey: 'cert.p4.grade',
    image: '/assets/generated/okra-farm.dim_800x500.png',
  },
];

export default function ExportCertificationPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const certifications = [
    { nameKey: 'cert.apeda.name' as const, descKey: 'cert.apeda.desc' as const, badge: 'APEDA' },
    { nameKey: 'cert.fssai.name' as const, descKey: 'cert.fssai.desc' as const, badge: 'FSSAI' },
    { nameKey: 'cert.phyto.name' as const, descKey: 'cert.phyto.desc' as const, badge: 'PHYTO' },
    { nameKey: 'cert.coo.name' as const, descKey: 'cert.coo.desc' as const, badge: 'COO' },
    { nameKey: 'cert.haccp.name' as const, descKey: 'cert.haccp.desc' as const, badge: 'HACCP' },
  ];

  const qcItems = [
    { titleKey: 'cert.qc1.title' as const, descKey: 'cert.qc1.desc' as const },
    { titleKey: 'cert.qc2.title' as const, descKey: 'cert.qc2.desc' as const },
    { titleKey: 'cert.qc3.title' as const, descKey: 'cert.qc3.desc' as const },
    { titleKey: 'cert.qc4.title' as const, descKey: 'cert.qc4.desc' as const },
  ];

  const specLabels = [
    { key: 'cert.spec.scientificName' as const, field: 'scientificKey' as const },
    { key: 'cert.spec.form' as const, field: 'formKey' as const },
    { key: 'cert.spec.color' as const, field: 'colorKey' as const },
    { key: 'cert.spec.moisture' as const, field: 'moistureKey' as const },
    { key: 'cert.spec.packaging' as const, field: 'packagingKey' as const },
    { key: 'cert.spec.shelfLife' as const, field: 'shelfLifeKey' as const },
    { key: 'cert.spec.grade' as const, field: 'gradeKey' as const },
  ];

  return (
    <main className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-forest/60 hover:text-forest text-sm font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-forest" />
            </div>
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              True Origin Company LLP
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-4 leading-tight">
            {t('cert.heading')}
          </h1>
          <p className="text-forest/70 leading-relaxed max-w-2xl">{t('cert.intro')}</p>
        </div>

        {/* ── Section 1: Export Certifications ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-moss" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
              {t('cert.s1.title')}
            </h2>
          </div>
          <p className="text-forest/65 mb-8 ml-9">{t('cert.s1.intro')}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.badge}
                className="bg-parchment border border-sage/30 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-forest text-cream text-xs font-bold tracking-wide flex-shrink-0">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-base font-semibold text-forest leading-snug">
                    {t(cert.nameKey)}
                  </h3>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{t(cert.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Quality Control ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical className="w-6 h-6 text-moss" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
              {t('cert.s2.title')}
            </h2>
          </div>
          <p className="text-forest/65 mb-8 ml-9">{t('cert.s2.intro')}</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {qcItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-sage/20 rounded-2xl p-5 flex gap-4"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-moss" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-forest mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-forest/70 text-sm leading-relaxed">{t(item.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Product Specifications ── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-6 h-6 text-moss" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
              {t('cert.s3.title')}
            </h2>
          </div>
          <p className="text-forest/65 mb-8 ml-9">{t('cert.s3.intro')}</p>

          <div className="flex flex-col gap-8">
            {products.map((product) => (
              <div
                key={product.nameKey}
                className="bg-parchment border border-sage/30 rounded-2xl overflow-hidden"
              >
                {/* Product header */}
                <div className="flex items-center gap-4 p-5 border-b border-sage/20 bg-forest/5">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest">
                      {t(product.nameKey)}
                    </h3>
                    <p className="text-forest/55 text-sm italic">
                      {t(product.scientificKey)}
                    </p>
                  </div>
                </div>

                {/* Spec table */}
                <div className="divide-y divide-sage/15">
                  {specLabels.slice(1).map((spec) => (
                    <div
                      key={spec.key}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-5 py-3"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-forest/50 sm:col-span-1">
                        {t(spec.key)}
                      </span>
                      <span className="text-sm text-forest/80 sm:col-span-2">
                        {t(product[spec.field])}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact callout */}
        <div className="mt-12 bg-forest rounded-2xl p-6 text-center">
          <p className="text-cream/80 text-sm mb-1 font-medium">
            Need custom specifications or have export enquiries?
          </p>
          <p className="text-cream/60 text-sm mb-4">
            Contact our export team for tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:info@trueoriginexports.com"
              className="text-gold hover:text-gold/80 text-sm font-medium transition-colors"
            >
              info@trueoriginexports.com
            </a>
            <span className="hidden sm:block text-cream/30">·</span>
            <a
              href="mailto:sales@trueoriginexports.com"
              className="text-gold hover:text-gold/80 text-sm font-medium transition-colors"
            >
              sales@trueoriginexports.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
