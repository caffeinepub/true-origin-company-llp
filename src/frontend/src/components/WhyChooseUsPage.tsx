import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  FileCheck,
  FlaskConical,
  Handshake,
  Settings,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "./Footer";

const cardIcons = [
  FileCheck,
  FlaskConical,
  ShieldCheck,
  Truck,
  Eye,
  Handshake,
  Sprout,
  Settings,
];

const cardKeys = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
];

export default function WhyChooseUsPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate({ to: "/" }).then(() => {
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Header */}
      <div
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: "#0F3D2E" }}
      >
        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C6A75E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C6A75E 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("whyChooseUs.backHome")}
          </Link>

          <div className="mb-4">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(198,167,94,0.2)",
                color: "#C6A75E",
              }}
            >
              {t("whyChooseUs.pageLabel")}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-6 leading-tight">
            {t("whyChooseUs.heading")}
          </h1>

          <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-3xl">
            {t("whyChooseUs.intro")}
          </p>
        </div>
      </div>

      {/* Key Differentiator Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardKeys.map((key, index) => {
            const Icon = cardIcons[index];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl p-6 shadow-sm border border-parchment hover:shadow-md transition-shadow group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: "rgba(15,61,46,0.08)" }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors"
                    style={{ color: "#0F3D2E" }}
                  />
                </div>
                <h3
                  className="text-base font-bold font-playfair mb-2 leading-snug"
                  style={{ color: "#0F3D2E" }}
                >
                  {t(`whyChooseUs.${key}Title`)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(15,61,46,0.7)" }}
                >
                  {t(`whyChooseUs.${key}Desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="py-12" style={{ backgroundColor: "#C6A75E" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100%", label: "Export Compliant" },
              { value: "APEDA", label: "Registered" },
              { value: "FSSAI", label: "Certified" },
              { value: "3rd Party", label: "Lab Verified" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl md:text-3xl font-bold font-playfair mb-1"
                  style={{ color: "#0F3D2E" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "rgba(15,61,46,0.75)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            backgroundColor: "rgba(15,61,46,0.05)",
            border: "1px solid rgba(15,61,46,0.12)",
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              style={{ backgroundColor: "#0F3D2E" }}
            >
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold font-playfair leading-tight"
              style={{ color: "#0F3D2E" }}
            >
              {t("whyChooseUs.commitmentHeading")}
            </h2>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(15,61,46,0.75)" }}
          >
            {t("whyChooseUs.commitmentText")}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: "#0F3D2E" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C6A75E" }}
          >
            {t("whyChooseUs.ctaSubtext")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-8">
            {t("whyChooseUs.heading")}
          </h2>
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#C6A75E", color: "#0F3D2E" }}
          >
            {t("whyChooseUs.ctaButton")}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
