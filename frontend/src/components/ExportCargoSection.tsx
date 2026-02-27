import { useLanguage } from '../contexts/LanguageContext';
import { FileCheck, Package, Globe } from 'lucide-react';

export default function ExportCargoSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <FileCheck size={24} />,
      titleKey: 'exportCargo.highlight1Title',
      descKey: 'exportCargo.highlight1Desc',
    },
    {
      icon: <Package size={24} />,
      titleKey: 'exportCargo.highlight2Title',
      descKey: 'exportCargo.highlight2Desc',
    },
    {
      icon: <Globe size={24} />,
      titleKey: 'exportCargo.highlight3Title',
      descKey: 'exportCargo.highlight3Desc',
    },
  ];

  return (
    <section id="logistics" className="py-20 bg-backgroundLight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-softGold">
            {t('exportCargo.sectionLabel')}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deepEmerald text-center mb-4">
          {t('exportCargo.heading')}
        </h2>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-0.5 bg-softGold" />
        </div>

        <p className="font-poppins text-textDark text-center text-base mb-12 max-w-2xl mx-auto">
          {t('exportCargo.subheading')}
        </p>

        {/* Cargo Image */}
        <div className="relative h-64 md:h-80 overflow-hidden mb-12">
          <img
            src="/assets/generated/cargo-ship.dim_1200x600.png"
            alt={t('exportCargo.imageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepEmerald/60 to-transparent" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-t-4 border-softGold p-6 shadow-card hover:shadow-gold transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-deepEmerald flex items-center justify-center mb-4 text-softGold">
                {item.icon}
              </div>
              <h3 className="font-playfair text-lg font-bold text-deepEmerald mb-2">
                {t(item.titleKey as any)}
              </h3>
              <p className="font-poppins text-textDark text-sm leading-relaxed">
                {t(item.descKey as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
