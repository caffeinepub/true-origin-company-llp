import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Award, CheckCircle, FlaskConical, Package, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SpecRow {
  label: string;
  value: string;
}

interface PackagingOption {
  text: string;
}

interface DocItem {
  text: string;
}

interface ProductSpecData {
  name: string;
  scientificName: string;
  image: string;
  specs: SpecRow[];
  packaging: PackagingOption[];
  docs: DocItem[];
}

export default function ExportCertificationPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const certifications = [
    {
      badge: 'APEDA',
      name: 'APEDA Registration',
      desc: 'Registered with the Agricultural and Processed Food Products Export Development Authority of India, enabling compliant export of agricultural products.',
    },
    {
      badge: 'FSSAI',
      name: 'FSSAI License',
      desc: 'Licensed under the Food Safety and Standards Authority of India, ensuring all products meet domestic and international food safety standards.',
    },
    {
      badge: 'PHYTO',
      name: 'Phytosanitary Certificate',
      desc: 'Official government-issued certificate confirming products are free from pests, diseases, and comply with the importing country\'s plant health requirements.',
    },
    {
      badge: 'COO',
      name: 'Certificate of Origin',
      desc: 'Authenticated document certifying the country of origin of the exported goods, required for customs clearance and preferential tariff treatment.',
    },
    {
      badge: 'HACCP',
      name: 'HACCP Compliance',
      desc: 'Hazard Analysis and Critical Control Points compliance ensuring systematic preventive approach to food safety throughout the production process.',
    },
  ];

  const qcItems = [
    {
      title: 'Pre-Harvest Assessment',
      desc: 'Soil testing, crop monitoring, and farm-level quality checks are conducted before harvest to ensure produce meets export-grade standards.',
    },
    {
      title: 'Laboratory Testing',
      desc: 'Every batch undergoes rigorous lab testing for microbial limits, heavy metals, pesticide residues, and moisture content before dispatch.',
    },
    {
      title: 'Processing & Hygiene',
      desc: 'Post-harvest processing is carried out in hygienic, food-safe facilities with trained personnel following strict GMP guidelines.',
    },
    {
      title: 'Pre-Shipment Inspection',
      desc: 'Final inspection of packaging integrity, labelling accuracy, and documentation completeness is performed before every shipment.',
    },
  ];

  const products: ProductSpecData[] = [
    {
      name: 'Moringa Leaf Powder',
      scientificName: 'Moringa oleifera',
      image: '/assets/generated/moringa-powder.dim_800x800.png',
      specs: [
        { label: 'Form', value: 'Fine Powder' },
        { label: 'Color', value: 'Natural Green' },
        { label: 'Odor', value: 'Characteristic' },
        { label: 'Moisture', value: '< 7%' },
        { label: 'Mesh Size', value: '80–100 mesh' },
        { label: 'Microbial Limits', value: 'As per international standards' },
        { label: 'Heavy Metals', value: 'Within permissible limits' },
        { label: 'Pesticide Residue', value: 'As per EU / USFDA norms' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Storage', value: 'Cool, dry place away from direct sunlight' },
      ],
      packaging: [
        { text: '1 kg / 5 kg / 25 kg bags' },
        { text: 'Food-grade inner lining' },
        { text: 'Export-ready outer cartons' },
      ],
      docs: [
        { text: 'Certificate of Analysis (COA)' },
        { text: 'Lab Test Report' },
        { text: 'Phytosanitary Certificate' },
        { text: 'Invoice & Packing List' },
      ],
    },
    {
      name: 'Moringa Dried Leaf',
      scientificName: 'Moringa oleifera',
      image: '/assets/generated/moringa-leaf.dim_800x800.png',
      specs: [
        { label: 'Form', value: 'Dried Whole or Crushed Leaves' },
        { label: 'Color', value: 'Dark Green' },
        { label: 'Odor', value: 'Characteristic' },
        { label: 'Moisture', value: '< 10%' },
        { label: 'Microbial Limits', value: 'As per international standards' },
        { label: 'Heavy Metals', value: 'Within permissible limits' },
        { label: 'Pesticide Residue', value: 'As per EU / USFDA norms' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Storage', value: 'Cool, dry place away from direct sunlight' },
      ],
      packaging: [
        { text: '500 g / 1 kg / 10 kg bags' },
        { text: 'Food-grade inner lining' },
        { text: 'Export-ready outer cartons' },
      ],
      docs: [
        { text: 'Certificate of Analysis (COA)' },
        { text: 'Lab Test Report' },
        { text: 'Phytosanitary Certificate' },
        { text: 'Invoice & Packing List' },
      ],
    },
    {
      name: 'Curry Leaves',
      scientificName: 'Murraya koenigii',
      image: '/assets/generated/curry-leaves-farm.dim_800x500.png',
      specs: [
        { label: 'Form', value: 'Fresh or Dried' },
        { label: 'Color', value: 'Deep Green' },
        { label: 'Odor', value: 'Strong, Characteristic Aroma' },
        { label: 'Moisture (Dried)', value: '< 12%' },
        { label: 'Grade', value: 'Export Grade A' },
        { label: 'Pesticide Residue', value: 'Pesticide-free, tested per EU norms' },
        { label: 'Shelf Life (Dried)', value: '12 months' },
        { label: 'Storage', value: 'Cool, dry place; refrigerate if fresh' },
      ],
      packaging: [
        { text: '250 g / 500 g / 5 kg packs' },
        { text: 'Food-grade sealed pouches' },
        { text: 'Export-ready cartons' },
      ],
      docs: [
        { text: 'Certificate of Analysis (COA)' },
        { text: 'Pesticide Residue Test Report' },
        { text: 'Phytosanitary Certificate' },
        { text: 'Invoice & Packing List' },
      ],
    },
    {
      name: 'Okra (Lady Finger)',
      scientificName: 'Abelmoschus esculentus',
      image: '/assets/generated/okra-farm.dim_800x500.png',
      specs: [
        { label: 'Form', value: 'Fresh, Grade A' },
        { label: 'Color', value: 'Bright Green' },
        { label: 'Size', value: '6–12 cm' },
        { label: 'Moisture', value: 'Natural (fresh produce)' },
        { label: 'Grade', value: 'Export Grade A' },
        { label: 'Pesticide Residue', value: 'Tested per EU / USFDA norms' },
        { label: 'Shelf Life', value: '7–10 days (refrigerated)' },
        { label: 'Storage', value: 'Refrigerate at 7–10°C' },
      ],
      packaging: [
        { text: '2 kg / 5 kg / 10 kg cartons' },
        { text: 'Ventilated export-grade cartons' },
        { text: 'Pre-cooling before dispatch' },
      ],
      docs: [
        { text: 'Certificate of Analysis (COA)' },
        { text: 'Pesticide Residue Test Report' },
        { text: 'Phytosanitary Certificate' },
        { text: 'Invoice & Packing List' },
      ],
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-forest/60 hover:text-forest text-sm font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-forest" />
            </div>
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              True Origin Company LLP
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-4 leading-tight">
            Export Certification & Quality Control
          </h1>
          <p className="text-forest/70 leading-relaxed max-w-2xl">
            Complete documentation, rigorous quality assurance, and detailed product specifications for international buyers.
          </p>
        </div>

        {/* ── Section 1: Export Certifications ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-moss" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
              Our Export Certifications
            </h2>
          </div>
          <p className="text-forest/65 mb-8 ml-9">
            All our products are exported with full regulatory compliance and internationally recognised certifications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.badge}
                className="bg-parchment border border-sage/30 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-forest text-cream text-xs font-bold tracking-wide flex-shrink-0">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-base font-semibold text-forest leading-snug">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Quality Control ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical className="w-6 h-6 text-moss" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
              Quality Control Process
            </h2>
          </div>
          <p className="text-forest/65 mb-8 ml-9">
            Every batch goes through a multi-stage quality control process before it leaves our facility.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {qcItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-sage/20 rounded-2xl p-5 flex gap-4"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-moss" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-forest mb-2">
                    {item.title}
                  </h3>
                  <p className="text-forest/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Product Specifications ── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-6 h-6 text-moss" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
              Product Specifications
            </h2>
          </div>
          <p className="text-forest/65 mb-8 ml-9">
            Detailed technical specifications for each of our export products, tested and verified to international standards.
          </p>

          <div className="flex flex-col gap-10">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-parchment border border-sage/30 rounded-2xl overflow-hidden"
              >
                {/* Product header */}
                <div className="flex items-center gap-4 p-5 border-b border-sage/20 bg-forest/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest">
                      {product.name}
                    </h3>
                    <p className="text-forest/55 text-sm italic">
                      {product.scientificName}
                    </p>
                  </div>
                </div>

                {/* Spec table */}
                <div className="divide-y divide-sage/15">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-5 py-3"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-forest/50 sm:col-span-1">
                        {spec.label}
                      </span>
                      <span className="text-sm text-forest/80 sm:col-span-2">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Packaging & Docs */}
                <div className="grid sm:grid-cols-2 gap-0 border-t border-sage/20">
                  {/* Packaging Options */}
                  <div className="p-5 sm:border-r border-sage/20">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-forest/50 mb-3">
                      Packaging Options
                    </h4>
                    <ul className="space-y-1.5">
                      {product.packaging.map((pkg, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-forest/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-moss flex-shrink-0" />
                          {pkg.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documentation Provided */}
                  <div className="p-5 border-t sm:border-t-0 border-sage/20">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-forest/50 mb-3">
                      Documentation Provided
                    </h4>
                    <ul className="space-y-1.5">
                      {product.docs.map((doc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-forest/80">
                          <CheckCircle className="mt-0.5 w-4 h-4 text-moss flex-shrink-0" />
                          {doc.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 py-4 border-t border-sage/20 bg-forest/3">
                  <a
                    href="mailto:sales@trueoriginexports.com?subject=Specification Sheet Request – {product.name}"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-moss transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Request Specification Sheet
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact callout */}
        <div className="mt-12 bg-forest rounded-2xl p-6 text-center">
          <p className="text-cream/80 text-sm mb-1 font-medium">
            Need custom specifications or have export enquiries?
          </p>
          <p className="text-cream/60 text-sm mb-4">
            Contact our export team for tailored solutions.
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
