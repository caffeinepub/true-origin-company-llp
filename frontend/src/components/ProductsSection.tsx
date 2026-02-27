import { Badge } from '@/components/ui/badge';
import { Leaf, Package, Apple, Sprout } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { TranslationKeys } from '../translations/translations';

type ProductDef = {
  id: number;
  nameKey: TranslationKeys;
  categoryKey: TranslationKeys;
  image: string;
  descKey: TranslationKeys;
  tagKeys: [TranslationKeys, TranslationKeys, TranslationKeys];
  icon: typeof Leaf;
};

const productDefs: ProductDef[] = [
  {
    id: 1,
    nameKey: 'products.p1.name',
    categoryKey: 'products.category.nonPerishable',
    image: '/assets/generated/moringa-powder.dim_800x800.png',
    descKey: 'products.p1.desc',
    tagKeys: ['products.p1.tag1', 'products.p1.tag2', 'products.p1.tag3'],
    icon: Leaf,
  },
  {
    id: 2,
    nameKey: 'products.p2.name',
    categoryKey: 'products.category.perishable',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
    descKey: 'products.p2.desc',
    tagKeys: ['products.p2.tag1', 'products.p2.tag2', 'products.p2.tag3'],
    icon: Leaf,
  },
  {
    id: 3,
    nameKey: 'products.p3.name',
    categoryKey: 'products.category.nonPerishable',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
    descKey: 'products.p3.desc',
    tagKeys: ['products.p3.tag1', 'products.p3.tag2', 'products.p3.tag3'],
    icon: Package,
  },
  {
    id: 4,
    nameKey: 'products.p4.name',
    categoryKey: 'products.category.nonPerishable',
    image: '/assets/generated/moringa-leaf.dim_800x800.png',
    descKey: 'products.p4.desc',
    tagKeys: ['products.p4.tag1', 'products.p4.tag2', 'products.p4.tag3'],
    icon: Apple,
  },
  {
    id: 5,
    nameKey: 'products.p5.name',
    categoryKey: 'products.category.nonPerishable',
    image: '/assets/generated/moringa-powder.dim_800x800.png',
    descKey: 'products.p5.desc',
    tagKeys: ['products.p5.tag1', 'products.p5.tag2', 'products.p5.tag3'],
    icon: Package,
  },
];

type FarmImageDef = {
  src: string;
  altKey: TranslationKeys;
  labelKey: TranslationKeys;
};

const farmImages: FarmImageDef[] = [
  {
    src: '/assets/generated/moringa-farm.dim_800x500.png',
    altKey: 'products.farm.moringa.alt',
    labelKey: 'products.farm.moringa.label',
  },
  {
    src: '/assets/generated/curry-leaves-farm.dim_800x500.png',
    altKey: 'products.farm.curry.alt',
    labelKey: 'products.farm.curry.label',
  },
  {
    src: '/assets/generated/okra-farm.dim_800x500.png',
    altKey: 'products.farm.okra.alt',
    labelKey: 'products.farm.okra.label',
  },
];

export default function ProductsSection() {
  const { t } = useLanguage();

  const getCategoryStyle = (categoryKey: TranslationKeys) => {
    if (categoryKey === 'products.category.perishable') {
      return 'bg-amber/20 text-amber-dark border-amber/30';
    }
    return 'bg-moss/15 text-moss border-moss/30';
  };

  return (
    <section id="products" className="py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-moss" />
            <span className="text-xs font-medium tracking-widest uppercase text-moss">
              {t('products.label')}
            </span>
            <span className="h-px w-10 bg-moss" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            {t('products.heading')}
          </h2>
          <p className="text-forest/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('products.subheading')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productDefs.map((product) => (
            <article
              key={product.id}
              className="group bg-cream rounded-3xl overflow-hidden border border-sage/20 hover:border-moss/40 hover:shadow-product transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-sage/10">
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getCategoryStyle(product.categoryKey)}`}
                  >
                    {t(product.categoryKey)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-forest mb-2">
                  {t(product.nameKey)}
                </h3>
                <p className="text-forest/65 text-sm leading-relaxed mb-4 flex-1">
                  {t(product.descKey)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tagKeys.map((tagKey) => (
                    <Badge
                      key={tagKey}
                      variant="outline"
                      className="text-xs text-moss border-moss/30 bg-moss/5 hover:bg-moss/10"
                    >
                      {t(tagKey)}
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
                  {t('products.enquire')}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Farm Imagery Subsection */}
        <div className="mt-24">
          {/* Farm Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-sage" />
              <Sprout className="w-4 h-4 text-moss" />
              <span className="h-px w-10 bg-sage" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-forest mb-3">
              {t('products.farm.heading')}
            </h3>
            <p className="text-forest/60 text-base max-w-xl mx-auto leading-relaxed">
              {t('products.farm.subheading')}
            </p>
          </div>

          {/* Farm Images Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmImages.map((farm) => (
              <div
                key={farm.src}
                className="group relative overflow-hidden rounded-2xl border border-sage/25 shadow-sm hover:shadow-product transition-all duration-300"
              >
                <div className="aspect-[8/5] overflow-hidden bg-sage/10">
                  <img
                    src={farm.src}
                    alt={t(farm.altKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/80 via-forest/40 to-transparent px-5 py-4">
                  <span className="text-cream font-display font-semibold text-base tracking-wide drop-shadow">
                    {t(farm.labelKey)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
