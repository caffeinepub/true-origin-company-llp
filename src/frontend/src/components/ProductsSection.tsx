import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  Settings,
  ShoppingBasket,
  Sprout,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const productIcons = [
  <Leaf key="leaf" size={32} />,
  <Sprout key="sprout" size={32} />,
  <ShoppingBasket key="basket" size={32} />,
  <Settings key="settings" size={32} />,
];

export default function ProductsSection() {
  const { t } = useLanguage();

  const products = [
    {
      titleKey: "products.moringaTitle",
      descKey: "products.moringaDesc",
      image: "/assets/generated/moringa-powder.dim_800x800.png",
      icon: productIcons[0],
    },
    {
      titleKey: "products.curryLeavesTitle",
      descKey: "products.curryLeavesDesc",
      image: "/assets/generated/curry-leaves-farm.dim_800x500.png",
      icon: productIcons[1],
    },
    {
      titleKey: "products.freshVegetablesTitle",
      descKey: "products.freshVegetablesDesc",
      image: "/assets/generated/okra-farm.dim_800x500.png",
      icon: productIcons[2],
    },
    {
      titleKey: "products.customSourcingTitle",
      descKey: "products.customSourcingDesc",
      image: "/assets/generated/export-boxes.dim_800x600.png",
      icon: productIcons[3],
    },
  ];

  const farmImages = [
    {
      src: "/assets/uploads/img_5071-019d2c30-4a32-728a-835f-9ec644eca07a-1.jpeg",
      altKey: "products.moringaFarmAlt",
      labelKey: "products.moringaFarmLabel",
    },
    {
      src: "/assets/generated/curry-leaves-farm.dim_800x500.png",
      altKey: "products.curryLeavesFarmAlt",
      labelKey: "products.curryLeavesFarmLabel",
    },
    {
      src: "/assets/generated/okra-farm.dim_800x500.png",
      altKey: "products.okraFarmAlt",
      labelKey: "products.okraFarmLabel",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-softGold">
            {t("products.sectionLabel")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deepEmerald text-center mb-4">
          {t("products.heading")}
        </h2>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-0.5 bg-softGold" />
        </div>

        {/* Supporting Line */}
        <p className="font-poppins text-textDark text-center text-base mb-12 max-w-2xl mx-auto">
          {t("products.supportingLine")}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.titleKey}
              className="group bg-backgroundLight border border-cream-200 hover:border-softGold transition-all duration-300 overflow-hidden shadow-card hover:shadow-gold"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.titleKey as any)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-deepEmerald opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-softGold">{product.icon}</span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-deepEmerald mb-2">
                  {t(product.titleKey as any)}
                </h3>
                <p className="font-poppins text-textDark text-sm leading-relaxed">
                  {t(product.descKey as any)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link
            to="/export-certification"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deepEmerald text-white font-poppins font-semibold hover:bg-forest-700 transition-colors duration-300 shadow-emerald"
          >
            {t("products.ctaViewSpecs")}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Farm Images Subsection */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-deepEmerald text-center mb-8">
            {t("products.farmSubheading")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {farmImages.map((farm) => (
              <div
                key={farm.src}
                className="relative h-56 overflow-hidden group"
              >
                <img
                  src={farm.src}
                  alt={t(farm.altKey as any)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepEmerald/80 to-transparent" />
                <span className="absolute bottom-4 left-4 font-poppins font-semibold text-white text-sm tracking-wide">
                  {t(farm.labelKey as any)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
