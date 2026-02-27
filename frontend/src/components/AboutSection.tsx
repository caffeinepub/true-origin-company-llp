import { ShieldCheck, Sprout, Truck } from 'lucide-react';

const values = [
  {
    icon: Sprout,
    title: 'Farm-Fresh Quality',
    description:
      'We source directly from trusted farms, ensuring every product retains its natural goodness and nutritional value.',
  },
  {
    icon: ShieldCheck,
    title: 'Purity Guaranteed',
    description:
      'Rigorous quality checks at every stage — from harvest to packaging — so you receive only the finest produce.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    description:
      'Our robust logistics network ensures timely delivery of both perishable and non-perishable goods, fresh every time.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-moss" />
          <span className="text-xs font-medium tracking-widest uppercase text-moss">
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
              Rooted in Nature,
              <br />
              <span className="text-moss">Driven by Quality</span>
            </h2>
            <p className="text-forest/70 text-lg leading-relaxed mb-5">
              <strong className="text-forest font-semibold">True Origin Company LLP</strong> is a
              dedicated food products company specialising in both{' '}
              <em>perishable</em> and <em>non-perishable</em> food products. We believe that
              what you eat should come from the most authentic, natural sources possible.
            </p>
            <p className="text-forest/70 leading-relaxed mb-8">
              From the lush green fields of moringa farms to carefully processed powders and
              dried leaves, our products carry the essence of nature's best. We work closely
              with farmers, maintain strict quality standards, and deliver products that
              nourish and sustain.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sage/30">
              {[
                { value: '100%', label: 'Natural' },
                { value: '5+', label: 'Products' },
                { value: 'Global', label: 'Reach' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-forest mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-moss font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="flex flex-col gap-5">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex gap-5 p-6 bg-parchment rounded-2xl border border-sage/20 hover:border-moss/40 hover:shadow-card transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center group-hover:bg-forest/15 transition-colors">
                  <val.icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-forest/65 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
