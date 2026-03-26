import { Instagram, Play, Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function SocialMediaSection() {
  const { t } = useLanguage();

  const videos = [
    {
      titleKey: "social.video1Title",
      descKey: "social.video1Desc",
    },
    {
      titleKey: "social.video2Title",
      descKey: "social.video2Desc",
    },
    {
      titleKey: "social.video3Title",
      descKey: "social.video3Desc",
    },
  ];

  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-softGold">
            {t("social.sectionLabel")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deepEmerald text-center mb-4">
          {t("social.heading")}
        </h2>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-0.5 bg-softGold" />
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {videos.map((video) => (
            <div
              key={video.titleKey}
              className="bg-backgroundLight border border-cream-200 overflow-hidden group"
            >
              {/* Placeholder Video Thumbnail */}
              <div className="relative h-48 bg-deepEmerald flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-softGold/20 border-2 border-softGold flex items-center justify-center group-hover:bg-softGold/30 transition-colors duration-300">
                  <Play className="text-softGold ml-1" size={28} />
                </div>
                <span className="absolute top-3 right-3 font-poppins text-xs font-semibold text-softGold bg-deepEmerald/80 px-2 py-1">
                  {t("social.comingSoon")}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-playfair text-lg font-bold text-deepEmerald mb-2">
                  {t(video.titleKey as any)}
                </h3>
                <p className="font-poppins text-textDark text-sm leading-relaxed">
                  {t(video.descKey as any)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-deepEmerald flex items-center justify-center text-softGold hover:bg-softGold hover:text-deepEmerald transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-deepEmerald flex items-center justify-center text-softGold hover:bg-softGold hover:text-deepEmerald transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube size={22} />
          </a>
        </div>

        {/* Bottom Note */}
        <p className="font-poppins text-textDark text-center text-sm opacity-70">
          {t("social.bottomNote")}
        </p>
      </div>
    </section>
  );
}
