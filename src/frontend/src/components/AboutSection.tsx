import { CheckCircle2, Eye, Target } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const checklist = [
    t("about.checklistQuality"),
    t("about.checklistDocumentation"),
    t("about.checklistShipping"),
  ];

  const operations = [
    t("about.op1"),
    t("about.op2"),
    t("about.op3"),
    t("about.op4"),
    t("about.op5"),
  ];

  return (
    <section id="about" className="py-20 bg-backgroundLight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-softGold">
            {t("about.sectionLabel")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deepEmerald text-center mb-4">
          {t("about.heading")}
        </h2>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-0.5 bg-softGold" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <p className="font-poppins text-textDark text-base leading-relaxed mb-8">
              {t("about.body")}
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-softGold flex-shrink-0"
                    size={20}
                  />
                  <span className="font-poppins font-semibold text-deepEmerald text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Operations */}
            <div className="bg-deepEmerald rounded-none p-6">
              <h3 className="font-playfair text-lg font-bold text-softGold mb-4">
                {t("about.operationsHeading")}
              </h3>
              <ul className="space-y-2">
                {operations.map((op) => (
                  <li
                    key={op}
                    className="flex items-start gap-2 font-poppins text-cream-100 text-sm"
                  >
                    <span className="text-softGold mt-1 flex-shrink-0">•</span>
                    {op}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Vision Card */}
            <div className="border-l-4 border-softGold bg-white p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-deepEmerald flex items-center justify-center">
                  <Eye className="text-softGold" size={20} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-deepEmerald">
                  {t("about.visionHeading")}
                </h3>
              </div>
              <p className="font-poppins text-textDark text-base leading-relaxed">
                {t("about.visionText")}
              </p>
            </div>

            {/* Mission Card */}
            <div className="border-l-4 border-softGold bg-white p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-deepEmerald flex items-center justify-center">
                  <Target className="text-softGold" size={20} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-deepEmerald">
                  {t("about.missionHeading")}
                </h3>
              </div>
              <p className="font-poppins text-textDark text-base leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>

            {/* Closing Statement */}
            <div className="bg-cream-100 border border-softGold p-6">
              <p className="font-playfair italic text-deepEmerald text-base leading-relaxed">
                "{t("about.closingStatement")}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
