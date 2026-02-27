import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    { title: t('privacy.s1.title'), body: t('privacy.s1.body') },
    { title: t('privacy.s2.title'), body: t('privacy.s2.body') },
    { title: t('privacy.s3.title'), body: t('privacy.s3.body') },
    { title: t('privacy.s4.title'), body: t('privacy.s4.body') },
    { title: t('privacy.s5.title'), body: t('privacy.s5.body') },
    { title: t('privacy.s6.title'), body: t('privacy.s6.body') },
    { title: t('privacy.s7.title'), body: t('privacy.s7.body') },
  ];

  return (
    <main className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-forest/60 hover:text-forest text-sm font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-forest" />
            </div>
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              True Origin Company LLP
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            {t('privacy.heading')}
          </h1>
          <p className="text-forest/60 text-sm">{t('privacy.effectiveDate')}</p>
        </div>

        {/* Intro */}
        <div className="bg-parchment border border-sage/30 rounded-2xl p-6 mb-8">
          <p className="text-forest/80 leading-relaxed">{t('privacy.intro')}</p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="border-b border-sage/20 pb-8 last:border-0">
              <h2 className="font-display text-xl font-semibold text-forest mb-3">
                {section.title}
              </h2>
              <p className="text-forest/75 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Contact callout */}
        <div className="mt-10 bg-forest rounded-2xl p-6 text-center">
          <p className="text-cream/80 text-sm mb-3">
            Questions about this policy? Contact us at:
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
