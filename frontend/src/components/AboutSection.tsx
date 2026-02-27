import { ShieldCheck, Sprout, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Sprout,
      titleKey: 'about.value1.title' as const,
      descKey: 'about.value1.desc' as const,
    },
    {
      icon: ShieldCheck,
      titleKey: 'about.value2.title' as const,
      descKey: 'about.value2.desc' as const,
    },
    {
      icon: Truck,
      titleKey: 'about.value3.title' as const,
      descKey: 'about.value3.desc' as const,
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-moss" />
          <span className="text-xs font-medium tracking-widest uppercase text-moss">
            {t('about.label')}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
              {t('about.heading1')}
              <br />
              <span className="text-moss">{t('about.heading2')}</span>
            </h2>
            <p className="text-forest/70 text-lg leading-relaxed mb-5">
              {t('about.para1')}
            </p>
            <p className="text-forest/70 leading-relaxed mb-8">
              {t('about.para2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sage/30">
              {[
                { value: '100%', labelKey: 'about.stat.natural' as const },
                { value: '5+', labelKey: 'about.stat.products' as const },
                { value: '🌍', labelKey: 'about.stat.reach' as const },
              ].map((stat) => (
                <div key={stat.labelKey} className="text-center">
                  <div className="font-display text-3xl font-bold text-forest mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-moss font-medium tracking-wide uppercase">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="flex flex-col gap-5">
            {values.map((val) => (
              <div
                key={val.titleKey}
                className="flex gap-5 p-6 bg-parchment rounded-2xl border border-sage/20 hover:border-moss/40 hover:shadow-card transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center group-hover:bg-forest/15 transition-colors">
                  <val.icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest mb-1.5">
                    {t(val.titleKey)}
                  </h3>
                  <p className="text-forest/65 text-sm leading-relaxed">{t(val.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
