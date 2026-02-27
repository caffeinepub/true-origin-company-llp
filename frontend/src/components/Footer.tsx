import { Heart } from 'lucide-react';
import { useNavigate, useRouterState, Link } from '@tanstack/react-router';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === '/';
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'true-origin-company'
  );

  const copyright = t('footer.copyright').replace('{year}', String(year));

  const handleNavClick = (href: string) => {
    if (!isHome) {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-dark border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
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
              {t('footer.tagline')}
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <a
                href="tel:+919773303026"
                className="text-cream/50 hover:text-gold text-sm transition-colors"
              >
                +91 97733 03026
              </a>
              <a
                href="mailto:info@trueoriginexports.com"
                className="text-cream/50 hover:text-gold text-sm transition-colors"
              >
                info@trueoriginexports.com
              </a>
              <a
                href="mailto:sales@trueoriginexports.com"
                className="text-cream/50 hover:text-gold text-sm transition-colors"
              >
                sales@trueoriginexports.com
              </a>
              <span className="text-cream/50 text-sm flex items-center gap-1.5">
                <span className="text-cream/40">{t('footer.website')}</span>
                <a
                  href="https://www.trueoriginintl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  www.trueoriginintl.com
                </a>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream/80 uppercase tracking-widest mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { labelKey: 'footer.nav.home' as const, href: '#home' },
                { labelKey: 'footer.nav.about' as const, href: '#about' },
                { labelKey: 'footer.nav.exports' as const, href: '#exports' },
                { labelKey: 'footer.nav.products' as const, href: '#products' },
                { labelKey: 'footer.nav.contact' as const, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/55 hover:text-gold text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream/80 uppercase tracking-widest mb-4">
              {t('footer.ourProducts')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {(
                [
                  'products.p1.name',
                  'products.p2.name',
                  'products.p3.name',
                  'products.p4.name',
                  'products.p5.name',
                ] as const
              ).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-cream/55 hover:text-gold text-sm transition-colors text-left"
                  >
                    {t(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream/80 uppercase tracking-widest mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-cream/55 hover:text-gold text-sm transition-colors"
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-cream/55 hover:text-gold text-sm transition-colors"
                >
                  {t('footer.termsConditions')}
                </Link>
              </li>
              <li>
                <Link
                  to="/export-certification"
                  className="text-cream/55 hover:text-gold text-sm transition-colors"
                >
                  {t('footer.exportCertification')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">{copyright}</p>
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
