import { Play } from 'lucide-react';
import { SiInstagram, SiLinkedin, SiYoutube, SiFacebook } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import type { TranslationKeys } from '../translations/translations';

type VideoDef = {
  id: number;
  titleKey: TranslationKeys;
  descKey: TranslationKeys;
};

const videoDefs: VideoDef[] = [
  { id: 1, titleKey: 'social.v1.title', descKey: 'social.v1.desc' },
  { id: 2, titleKey: 'social.v2.title', descKey: 'social.v2.desc' },
  { id: 3, titleKey: 'social.v3.title', descKey: 'social.v3.desc' },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: SiInstagram,
    color: 'text-pink-400',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    name: 'LinkedIn',
    icon: SiLinkedin,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    name: 'YouTube',
    icon: SiYoutube,
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
  {
    name: 'Facebook',
    icon: SiFacebook,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
];

export default function SocialMediaSection() {
  const { t } = useLanguage();

  return (
    <section id="social" className="py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-moss" />
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              {t('social.label')}
            </span>
            <span className="h-px w-10 bg-moss" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            {t('social.heading')}
          </h2>
          <p className="text-forest/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('social.subheading')}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {socialLinks.map((social) => (
            <div
              key={social.name}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border ${social.bg} ${social.border} opacity-60 cursor-not-allowed select-none`}
              title={`${social.name} — ${t('social.comingSoon')}`}
            >
              <social.icon className={`w-5 h-5 ${social.color}`} />
              <span className="text-sm font-medium text-forest/60">{social.name}</span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-forest/40 bg-forest/10 px-2 py-0.5 rounded-full">
                {t('social.comingSoon')}
              </span>
            </div>
          ))}
        </div>

        {/* Video Placeholder Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {videoDefs.map((video) => (
            <div
              key={video.id}
              className="group bg-cream rounded-3xl overflow-hidden border border-sage/20 hover:border-moss/30 hover:shadow-card transition-all duration-300"
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-forest/10 via-moss/10 to-sage/20 flex items-center justify-center">
                {/* Decorative leaf pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 left-4 w-16 h-16 rounded-full bg-moss" />
                  <div className="absolute bottom-4 right-5 w-10 h-10 rounded-full bg-forest" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-sage" />
                </div>
                {/* Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-forest/20 border-2 border-forest/30 flex items-center justify-center group-hover:bg-forest/30 transition-colors">
                    <Play className="w-6 h-6 text-forest/60 ml-0.5" />
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-forest/40 bg-cream/70 px-3 py-1 rounded-full backdrop-blur-sm">
                    {t('social.comingSoon')}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-forest mb-1.5">
                  {t(video.titleKey)}
                </h3>
                <p className="text-forest/55 text-sm leading-relaxed">{t(video.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-forest/40 text-sm mt-10">
          {t('social.bottomNote')}
        </p>
      </div>
    </section>
  );
}
