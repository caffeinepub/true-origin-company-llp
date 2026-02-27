import { Globe, Package, Ship, Award } from 'lucide-react';

const exportHighlights = [
  {
    icon: Ship,
    title: 'Sea & Air Freight',
    description: 'We handle both sea and air freight shipments, ensuring your order reaches its destination safely and on time.',
  },
  {
    icon: Package,
    title: 'Export-Ready Packaging',
    description: 'All products are packed to international standards with proper labelling, documentation, and compliance.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We export to markets across Asia, Europe, the Middle East, and beyond — connecting Indian farms to the world.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'Our export processes adhere to strict quality and food safety standards, ensuring every shipment meets global requirements.',
  },
];

export default function ExportCargoSection() {
  return (
    <section id="exports" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-moss" />
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              Global Exports
            </span>
            <span className="h-px w-10 bg-moss" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            Professional Exporters,
            <br />
            <span className="text-moss">Trusted Worldwide</span>
          </h2>
          <p className="text-forest/65 text-lg max-w-2xl mx-auto leading-relaxed">
            True Origin Company LLP is equipped to handle international export orders with
            precision and professionalism — from farm to foreign shores.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="relative rounded-3xl overflow-hidden shadow-card group">
            <img
              src="/assets/generated/cargo-ship.dim_1200x600.png"
              alt="Large cargo ship loaded with export containers at sea"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-cream font-display text-lg font-semibold drop-shadow">
                International Shipping
              </span>
              <p className="text-cream/80 text-sm mt-0.5">Sea freight to global destinations</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card group">
            <img
              src="/assets/generated/export-boxes.dim_800x600.png"
              alt="Stacked export cartons and packaging ready for international shipment"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-cream font-display text-lg font-semibold drop-shadow">
                Export-Ready Packaging
              </span>
              <p className="text-cream/80 text-sm mt-0.5">Compliant with international standards</p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exportHighlights.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-parchment rounded-2xl border border-sage/20 hover:border-moss/40 hover:shadow-card transition-all group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-forest/15 transition-colors">
                <item.icon className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-display text-base font-semibold text-forest mb-2">
                {item.title}
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
