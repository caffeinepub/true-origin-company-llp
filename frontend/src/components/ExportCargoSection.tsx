import { Globe, Package, Ship, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { TranslationKeys } from '../translations/translations';

type HighlightDef = {
  icon: typeof Ship;
  titleKey: TranslationKeys;
  descKey: TranslationKeys;
};

const highlightDefs: HighlightDef[] = [
  { icon: Ship, titleKey: 'export.h1.title', descKey: 'export.h1.desc' },
  { icon: Package, titleKey: 'export.h2.title', descKey: 'export.h2.desc' },
  { icon: Globe, titleKey: 'export.h3.title', descKey: 'export.h3.desc' },
  { icon: Award, titleKey: 'export.h4.title', descKey: 'export.h4.desc' },
];

export default function ExportCargoSection() {
  const { t } = useLanguage();

  return (
    <section id="exports" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-moss" />
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              {t('export.label')}
            </span>
            <span className="h-px w-10 bg-moss" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            {t('export.heading1')}
            <br />
            <span className="text-moss">{t('export.heading2')}</span>
          </h2>
          <p className="text-forest/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('export.subheading')}
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="relative rounded-3xl overflow-hidden shadow-card group">
            <img
              src="/assets/generated/cargo-ship.dim_1200x600.png"
              alt={t('export.img1.title')}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-cream font-display text-lg font-semibold drop-shadow">
                {t('export.img1.title')}
              </span>
              <p className="text-cream/80 text-sm mt-0.5">{t('export.img1.sub')}</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card group">
            <img
              src="/assets/generated/export-boxes.dim_800x600.png"
              alt={t('export.img2.title')}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-cream font-display text-lg font-semibold drop-shadow">
                {t('export.img2.title')}
              </span>
              <p className="text-cream/80 text-sm mt-0.5">{t('export.img2.sub')}</p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightDefs.map((item) => (
            <div
              key={item.titleKey}
              className="p-6 bg-parchment rounded-2xl border border-sage/20 hover:border-moss/40 hover:shadow-card transition-all group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-forest/15 transition-colors">
                <item.icon className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-display text-base font-semibold text-forest mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
