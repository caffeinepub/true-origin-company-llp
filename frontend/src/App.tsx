import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExportCargoSection from './components/ExportCargoSection';
import ProductsSection from './components/ProductsSection';
import SocialMediaSection from './components/SocialMediaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Exports', href: '#exports' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream font-body text-forest">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
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
                className={`h-12 w-auto object-contain transition-all duration-300 ${
                  scrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    scrolled
                      ? 'text-forest/80 hover:text-forest'
                      : 'text-cream/90 hover:text-cream'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-moss group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors shadow-sm ${
                  scrolled
                    ? 'bg-forest text-cream hover:bg-moss'
                    : 'bg-cream/20 text-cream border border-cream/40 hover:bg-cream/30'
                }`}
              >
                Get in Touch
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 transition-colors ${
                scrolled ? 'text-forest' : 'text-cream'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-sage/20 px-6 py-4 flex flex-col gap-4 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-forest/80 hover:text-forest py-1 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-moss transition-colors text-center"
            >
              Get in Touch
            </button>
          </div>
        )}
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ExportCargoSection />
        <ProductsSection />
        <SocialMediaSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
