import { useState, useEffect } from 'react';
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useRouterState,
  Link,
} from '@tanstack/react-router';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExportCargoSection from './components/ExportCargoSection';
import ProductsSection from './components/ProductsSection';
import SocialMediaSection from './components/SocialMediaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import ExportCertificationPage from './components/ExportCertificationPage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, always show scrolled style
  const showScrolled = scrolled || !isHome;

  const navLinks = [
    { key: 'nav.home' as const, href: '#home' },
    { key: 'nav.about' as const, href: '#about' },
    { key: 'nav.products' as const, href: '#products' },
    { key: 'nav.exports' as const, href: '#exports' },
    { key: 'nav.contact' as const, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-nav border-b border-sage/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center group"
            aria-label="True Origin Exports – scroll to top"
          >
            <img
              src="/assets/generated/logo.dim_400x300.png"
              alt="True Origin Exports"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors relative group ${
                  showScrolled
                    ? 'text-forest/80 hover:text-forest'
                    : 'text-cream/90 hover:text-cream'
                }`}
              >
                {t(link.key)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-moss group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors shadow-sm ${
                showScrolled
                  ? 'bg-forest text-cream hover:bg-moss'
                  : 'bg-cream/20 text-cream border border-cream/40 hover:bg-cream/30'
              }`}
            >
              {t('nav.getInTouch')}
            </button>
            <LanguageSelector isScrolled={showScrolled} />
          </nav>

          {/* Mobile: Language Selector + Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector isScrolled={showScrolled} />
            <button
              className={`p-2 transition-colors ${showScrolled ? 'text-forest' : 'text-cream'}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — always solid white, unaffected by scroll state */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-sage/20 px-6 py-4 flex flex-col gap-1 shadow-lg"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Home */}
          <button
            onClick={() => handleNavClick('#home')}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.home')}
          </button>
          {/* About */}
          <button
            onClick={() => handleNavClick('#about')}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.about')}
          </button>
          {/* Products */}
          <button
            onClick={() => handleNavClick('#products')}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.products')}
          </button>
          {/* Product Specifications — after Products */}
          <Link
            to="/export-certification"
            onClick={() => setMenuOpen(false)}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.productSpecifications')}
          </Link>
          {/* Export Certification — after Product Specifications */}
          <Link
            to="/export-certification"
            onClick={() => setMenuOpen(false)}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.exportCertification')}
          </Link>
          {/* Exports */}
          <button
            onClick={() => handleNavClick('#exports')}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.exports')}
          </button>
          {/* Privacy Policy — before Contact */}
          <Link
            to="/privacy-policy"
            onClick={() => setMenuOpen(false)}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.privacyPolicy')}
          </Link>
          {/* Contact */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="text-left text-base font-medium text-forest/80 hover:text-forest py-2 transition-colors"
          >
            {t('nav.contact')}
          </button>
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-moss transition-colors text-center"
          >
            {t('nav.getInTouch')}
          </button>
        </div>
      )}
    </header>
  );
}

function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream font-body text-forest">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExportCargoSection />
      <ProductsSection />
      <SocialMediaSection />
      <ContactSection />
    </main>
  );
}

// Routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-and-conditions',
  component: TermsAndConditionsPage,
});

const exportCertRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/export-certification',
  component: ExportCertificationPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  privacyRoute,
  termsRoute,
  exportCertRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
