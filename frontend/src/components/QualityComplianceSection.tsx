import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function QualityComplianceSection() {
  const { t } = useLanguage();

  const docs = [
    t('quality.doc1'),
    t('quality.doc2'),
    t('quality.doc3'),
    t('quality.doc4'),
    t('quality.doc5'),
    t('quality.doc6'),
  ];

  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quality" className="py-20 bg-deepEmerald">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-softGold">
            {t('quality.sectionLabel')}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {t('quality.heading')}
        </h2>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-0.5 bg-softGold" />
        </div>

        {/* Intro */}
        <p className="font-poppins text-cream-100 text-center text-base mb-10 max-w-2xl mx-auto opacity-90">
          {t('quality.intro')}
        </p>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {docs.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white/10 border border-softGold/30 p-5 hover:bg-white/15 transition-colors duration-300"
            >
              <ShieldCheck className="text-softGold flex-shrink-0 mt-0.5" size={20} />
              <span className="font-poppins text-white text-sm font-medium leading-relaxed">
                {doc}
              </span>
            </div>
          ))}
        </div>

        {/* Supporting Copy */}
        <p className="font-poppins text-cream-200 text-center text-sm mb-10 max-w-xl mx-auto italic opacity-80">
          {t('quality.supportingCopy')}
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleGetQuote}
            className="inline-flex items-center gap-2 px-10 py-4 bg-softGold text-deepEmerald font-poppins font-bold text-base hover:bg-gold-400 transition-colors duration-300 shadow-gold"
          >
            {t('quality.ctaQuote')}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
