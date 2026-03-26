import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const handleContactSales = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1600x900.png)",
          border: "none",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,61,46,0.88) 0%, rgba(15,61,46,0.70) 50%, rgba(15,61,46,0.55) 100%)",
          border: "none",
        }}
      />

      {/* Content — pt-20 on mobile to clear fixed navbar */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 md:pt-0">
        {/* Headline */}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {t("hero.headline")}
        </h1>

        {/* Subheadline */}
        <p className="font-poppins text-lg md:text-xl text-cream-100 opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t("hero.subheadline")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/export-certification"
            className="inline-flex items-center gap-2 px-8 py-4 font-poppins font-semibold text-deepEmerald bg-softGold rounded-none hover:bg-gold-400 transition-all duration-300 shadow-gold text-base"
            style={{ border: "none" }}
          >
            {t("hero.ctaRequestSpecs")}
            <ArrowRight size={18} />
          </Link>

          <button
            type="button"
            onClick={handleContactSales}
            className="inline-flex items-center gap-2 px-8 py-4 font-poppins font-semibold text-white border-2 border-softGold rounded-none hover:bg-softGold hover:text-deepEmerald transition-all duration-300 text-base"
          >
            {t("hero.ctaContactSales")}
          </button>
        </div>

        {/* Tagline */}
        <p className="font-playfair italic text-softGold text-base md:text-lg mt-10 opacity-80">
          "{t("hero.tagline")}"
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-softGold opacity-70 hover:opacity-100 transition-opacity animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
