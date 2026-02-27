import { Badge } from '@/components/ui/badge';
import { Leaf, Package, Apple } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Moringa Powder',
    category: 'Non-Perishable',
    image: '/assets/generated/moringa-powder.dim_800x800.png',
    alt: 'Vibrant green moringa powder in a wooden bowl with scattered moringa leaves',
    description:
      'Premium-grade moringa leaf powder, cold-processed to preserve maximum nutrients. Rich in vitamins, minerals, and antioxidants — nature\'s superfood in its purest form.',
    tags: ['Superfood', 'Organic', 'Nutrient-Rich'],
    icon: Leaf,
  },
  {
    id: 2,
    name: 'Moringa Leaves',
    category: 'Perishable',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
    alt: 'Fresh moringa leaves arranged on a rustic wooden surface with soft natural light',
    description:
      'Freshly harvested moringa leaves, hand-picked at peak freshness. Packed with essential amino acids and micronutrients, perfect for culinary and wellness use.',
    tags: ['Fresh', 'Hand-Picked', 'Seasonal'],
    icon: Leaf,
  },
  {
    id: 3,
    name: 'Dried Moringa Leaves',
    category: 'Non-Perishable',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
    alt: 'Dried moringa leaves for long-term storage and use',
    description:
      'Sun-dried moringa leaves retaining their full nutritional profile. Ideal for teas, soups, and herbal preparations with an extended shelf life.',
    tags: ['Dried', 'Long Shelf Life', 'Versatile'],
    icon: Package,
  },
  {
    id: 4,
    name: 'Moringa Tea',
    category: 'Non-Perishable',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
    alt: 'Moringa herbal tea blend in a natural packaging',
    description:
      'Aromatic moringa herbal tea crafted from the finest dried leaves. A soothing, nutrient-dense beverage for daily wellness rituals.',
    tags: ['Herbal', 'Caffeine-Free', 'Wellness'],
    icon: Apple,
  },
  {
    id: 5,
    name: 'Moringa Capsules',
    category: 'Non-Perishable',
    image: '/assets/generated/moringa-powder.dim_800x800.png',
    alt: 'Moringa supplement capsules in a natural bottle',
    description:
      'Concentrated moringa powder encapsulated for convenient daily supplementation. Each capsule delivers a potent dose of nature\'s most nutritious plant.',
    tags: ['Supplement', 'Convenient', 'Potent'],
    icon: Package,
  },
];

const categoryColors: Record<string, string> = {
  Perishable: 'bg-amber/20 text-amber-dark border-amber/30',
  'Non-Perishable': 'bg-moss/15 text-moss border-moss/30',
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-moss" />
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              Our Offerings
            </span>
            <span className="h-px w-10 bg-moss" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            Nature's Finest Products
          </h2>
          <p className="text-forest/65 text-lg max-w-2xl mx-auto leading-relaxed">
            From fresh perishables to shelf-stable non-perishables, every product we offer
            is sourced with care and processed to preserve its natural integrity.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-cream rounded-3xl overflow-hidden border border-sage/20 hover:border-moss/40 hover:shadow-product transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-sage/10">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryColors[product.category]}`}
                  >
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-forest mb-2">
                  {product.name}
                </h3>
                <p className="text-forest/65 text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs text-moss border-moss/30 bg-moss/5 hover:bg-moss/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-forest text-cream text-sm font-medium rounded-xl hover:bg-moss transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
