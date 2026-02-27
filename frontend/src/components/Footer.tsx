import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'true-origin-company'
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => handleNavClick('#home')}
              className="block mb-5"
              aria-label="True Origin Exports – scroll to top"
            >
              <img
                src="/assets/generated/logo.dim_400x300.png"
                alt="True Origin Exports"
                className="h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </button>
            <p className="text-cream/55 text-sm leading-relaxed max-w-xs">
              Delivering nature's finest perishable and non-perishable food products with
              integrity, quality, and care.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <a
                href="tel:+919773303026"
                className="text-cream/50 hover:text-gold text-sm transition-colors"
              >
                +91 97733 03026
              </a>
              <a
                href="mailto:trueorigin@gmail.com"
                className="text-cream/50 hover:text-gold text-sm transition-colors"
              >
                trueorigin@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream/80 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Exports', href: '#exports' },
                { label: 'Products', href: '#products' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/55 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream/80 uppercase tracking-widest mb-4">
              Our Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Moringa Powder',
                'Moringa Leaves',
                'Dried Moringa Leaves',
                'Moringa Tea',
                'Moringa Capsules',
              ].map((product) => (
                <li key={product}>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-cream/55 hover:text-gold text-sm transition-colors text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {year} True Origin Company LLP. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3 h-3 text-gold fill-gold" aria-label="love" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
