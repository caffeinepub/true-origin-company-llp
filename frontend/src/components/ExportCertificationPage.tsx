import { useLanguage } from '../contexts/LanguageContext';
import { Link } from '@tanstack/react-router';
import { Award, CheckCircle, FileText, ArrowLeft, Package, Leaf } from 'lucide-react';

const certifications = [
  {
    name: 'APEDA Registration',
    body: 'Agricultural & Processed Food Products Export Development Authority',
    scope: 'All agricultural exports from India',
    validity: 'Annual renewal',
    icon: '🏛️',
  },
  {
    name: 'FSSAI License',
    body: 'Food Safety and Standards Authority of India',
    scope: 'Food processing and export operations',
    validity: 'Annual renewal',
    icon: '🛡️',
  },
  {
    name: 'Organic Certification',
    body: 'NPOP / NOP Accredited Certification Body',
    scope: 'Moringa powder, moringa leaf, curry leaves',
    validity: 'Annual audit',
    icon: '🌿',
  },
  {
    name: 'Phytosanitary Certificate',
    body: 'National Plant Protection Organisation (NPPO), India',
    scope: 'All plant-based exports',
    validity: 'Per shipment',
    icon: '📋',
  },
  {
    name: 'ISO 22000',
    body: 'Food Safety Management System',
    scope: 'Processing facility and supply chain',
    validity: '3-year cycle with annual surveillance',
    icon: '✅',
  },
  {
    name: 'Spices Board Certificate',
    body: 'Spices Board of India',
    scope: 'Curry leaves and spice-related products',
    validity: 'Annual renewal',
    icon: '🌶️',
  },
];

const qcSteps = [
  {
    step: 1,
    title: 'Farm-Level Inspection',
    description: 'Our agronomists visit partner farms to verify organic practices, soil health, and absence of prohibited pesticides before harvest.',
  },
  {
    step: 2,
    title: 'Harvest & Primary Sorting',
    description: 'Produce is harvested at optimal maturity. Initial sorting removes damaged, undersized, or discoloured material at the farm gate.',
  },
  {
    step: 3,
    title: 'Laboratory Testing',
    description: 'Samples are sent to NABL-accredited labs for pesticide residue analysis, heavy metal screening, microbial testing, and nutritional profiling.',
  },
  {
    step: 4,
    title: 'Processing & Grading',
    description: 'Produce is cleaned, dried (where applicable), milled or cut to specification, and graded by size, colour, and moisture content.',
  },
  {
    step: 5,
    title: 'Packaging & Labelling',
    description: 'Products are packed in food-grade, export-compliant packaging with full traceability codes, batch numbers, and destination-country labelling.',
  },
  {
    step: 6,
    title: 'Pre-Shipment Inspection',
    description: 'A third-party inspection agency verifies quantity, quality, and packaging before the container is sealed and the phytosanitary certificate is issued.',
  },
];

const productSpecs = [
  {
    name: 'Moringa Powder',
    icon: '🌿',
    specs: [
      { label: 'Moisture', value: '≤ 8%' },
      { label: 'Protein', value: '≥ 25%' },
      { label: 'Ash Content', value: '≤ 10%' },
      { label: 'Particle Size', value: '80–120 mesh' },
      { label: 'Colour', value: 'Bright green' },
      { label: 'Pesticide Residue', value: 'EU MRL compliant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    packaging: ['25 kg kraft paper bags (inner PE liner)', '1 kg / 500 g retail pouches', 'Custom OEM packaging available'],
    docs: ['Certificate of Analysis (CoA)', 'Organic Certificate', 'Phytosanitary Certificate', 'MSDS Sheet'],
  },
  {
    name: 'Moringa Leaf (Dried)',
    icon: '🍃',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Protein', value: '≥ 20%' },
      { label: 'Colour', value: 'Dark green' },
      { label: 'Form', value: 'Whole / cut & sifted' },
      { label: 'Foreign Matter', value: '≤ 0.5%' },
      { label: 'Pesticide Residue', value: 'EU MRL compliant' },
      { label: 'Shelf Life', value: '18 months' },
    ],
    packaging: ['10 kg / 20 kg cartons', 'Vacuum-sealed retail packs', 'Bulk loose in food-grade bags'],
    docs: ['Certificate of Analysis (CoA)', 'Organic Certificate', 'Phytosanitary Certificate'],
  },
  {
    name: 'Curry Leaves (Dried)',
    icon: '🌱',
    specs: [
      { label: 'Moisture', value: '≤ 12%' },
      { label: 'Colour', value: 'Olive to dark green' },
      { label: 'Aroma', value: 'Characteristic, strong' },
      { label: 'Form', value: 'Whole dried leaves' },
      { label: 'Foreign Matter', value: '≤ 1%' },
      { label: 'Pesticide Residue', value: 'EU MRL compliant' },
      { label: 'Shelf Life', value: '12 months' },
    ],
    packaging: ['5 kg / 10 kg cartons', '100 g / 200 g retail packs', 'Bulk bags on request'],
    docs: ['Certificate of Analysis (CoA)', 'Spices Board Certificate', 'Phytosanitary Certificate'],
  },
  {
    name: 'Okra (Dried / Chips)',
    icon: '🥬',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Colour', value: 'Light green to yellow-green' },
      { label: 'Form', value: 'Sliced chips / whole pods' },
      { label: 'Pod Length', value: '4–8 cm (whole)' },
      { label: 'Foreign Matter', value: '≤ 0.5%' },
      { label: 'Pesticide Residue', value: 'EU MRL compliant' },
      { label: 'Shelf Life', value: '12 months' },
    ],
    packaging: ['10 kg / 20 kg cartons', '250 g / 500 g retail packs', 'Custom packaging available'],
    docs: ['Certificate of Analysis (CoA)', 'Phytosanitary Certificate', 'FSSAI Certificate'],
  },
];

export default function ExportCertificationPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-gold" />
            <h1 className="text-3xl md:text-4xl font-bold font-playfair">
              Export Certification & Quality Control
            </h1>
          </div>
          <p className="text-white/70 max-w-2xl">
            Every shipment from True Origin Exports is backed by internationally recognised certifications and a rigorous multi-stage quality control process.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Certifications */}
        <section>
          <div className="text-center mb-10">
            <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Credentials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-forest">
              Certifications & Registrations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-parchment hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-forest text-lg mb-1">{cert.name}</h3>
                <p className="text-forest/60 text-sm mb-3">{cert.body}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex gap-2">
                    <span className="text-forest/50 font-medium w-16 flex-shrink-0">Scope:</span>
                    <span className="text-forest/75">{cert.scope}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-forest/50 font-medium w-16 flex-shrink-0">Validity:</span>
                    <span className="text-forest/75">{cert.validity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Control */}
        <section>
          <div className="text-center mb-10">
            <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Process
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-forest">
              Quality Control Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm border border-parchment">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-forest text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-forest">{step.title}</h3>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Specifications */}
        <section id="product-specifications">
          <div className="text-center mb-10">
            <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Technical Data
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-forest">
              Product Specifications
            </h2>
            <p className="text-forest/60 mt-2 max-w-xl mx-auto text-sm">
              Detailed quality parameters, packaging options, and documentation for each product.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productSpecs.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-parchment overflow-hidden">
                {/* Product Header */}
                <div className="bg-forest/5 px-6 py-4 border-b border-parchment flex items-center gap-3">
                  <span className="text-2xl">{product.icon}</span>
                  <h3 className="font-bold text-forest text-lg font-playfair">{product.name}</h3>
                </div>

                <div className="p-6 space-y-5">
                  {/* Spec Table */}
                  <div>
                    <h4 className="text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> Specifications
                    </h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((spec, j) => (
                          <tr key={j} className={j % 2 === 0 ? 'bg-cream/50' : ''}>
                            <td className="py-1.5 px-2 text-forest/60 font-medium w-2/5">{spec.label}</td>
                            <td className="py-1.5 px-2 text-forest font-semibold">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Packaging */}
                  <div>
                    <h4 className="text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5" /> Packaging Options
                    </h4>
                    <ul className="space-y-1">
                      {product.packaging.map((pkg, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-forest/75">
                          <CheckCircle className="w-3.5 h-3.5 text-moss mt-0.5 flex-shrink-0" />
                          {pkg}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documentation */}
                  <div>
                    <h4 className="text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5" /> Documentation Provided
                    </h4>
                    <ul className="space-y-1">
                      {product.docs.map((doc, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-forest/75">
                          <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={`mailto:info@trueoriginexports.com?subject=Specification Sheet Request – ${product.name}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest border border-forest/30 rounded-full px-4 py-2 hover:bg-forest hover:text-white transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Request Specification Sheet
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
