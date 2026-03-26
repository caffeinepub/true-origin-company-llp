import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExportCargoSection from "./components/ExportCargoSection";
import ExportCertificationPage from "./components/ExportCertificationPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LanguageSelector from "./components/LanguageSelector";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import ProductsSection from "./components/ProductsSection";
import SocialMediaSection from "./components/SocialMediaSection";
import TermsAndConditionsPage from "./components/TermsAndConditionsPage";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

function WhyChooseUsRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/" });
  }, [navigate]);
  return null;
}

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const isSubPage = currentPath !== "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) el2.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    }
  };

  const navLinks = [
    { label: t("nav.home"), action: () => scrollToSection("hero") },
    { label: t("nav.about"), action: () => scrollToSection("about") },
    { label: t("nav.products"), action: () => scrollToSection("products") },
    { label: t("nav.exports"), action: () => scrollToSection("exports") },
    { label: t("nav.contact"), action: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back arrow + Home label — always visible */}
          <button
            type="button"
            onClick={() =>
              isSubPage ? navigate({ to: "/" }) : scrollToSection("hero")
            }
            className="flex items-center gap-2 focus:outline-none"
          >
            <ArrowLeft
              className={`w-5 h-5 ${isScrolled ? "text-forest" : "text-softGold"}`}
            />
            <span
              className={`font-poppins font-semibold text-sm ${
                isScrolled ? "text-forest" : "text-white"
              }`}
            >
              {t("nav.home")}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={link.action}
                className={`text-sm font-medium transition-colors hover:text-moss ${
                  isScrolled ? "text-forest" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <LanguageSelector isScrolled={isScrolled} />
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-forest text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-moss transition-colors"
            >
              {t("nav.getInTouch")}
            </button>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector isScrolled={isScrolled} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-forest hover:bg-forest/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden absolute left-0 right-0 top-16 shadow-lg border-t border-parchment z-50"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="px-4 py-3 space-y-1">
              {/* Home */}
              <button
                type="button"
                onClick={() => scrollToSection("hero")}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.home")}
              </button>

              {/* About Us */}
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.aboutUs")}
              </button>

              {/* Why Choose Us */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: "/why-choose-us" });
                }}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.whyChooseUs")}
              </button>

              {/* Products */}
              <button
                type="button"
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.products")}
              </button>

              {/* Exports */}
              <button
                type="button"
                onClick={() => scrollToSection("exports")}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.exports")}
              </button>

              {/* Export Certification */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: "/export-certification" });
                }}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.exportCertification")}
              </button>

              {/* Product Specifications */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: "/export-certification" }).then(() => {
                    setTimeout(() => {
                      const el = document.getElementById(
                        "product-specifications",
                      );
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 150);
                  });
                }}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.productSpecifications")}
              </button>

              {/* Privacy Policy */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: "/privacy-policy" });
                }}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.privacyPolicy")}
              </button>

              {/* Terms & Conditions */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: "/terms-and-conditions" });
                }}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.termsConditions")}
              </button>

              {/* Contact */}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full text-left px-4 py-3 text-forest font-medium rounded-lg hover:bg-cream transition-colors"
              >
                {t("nav.contact")}
              </button>

              <div className="pt-2 pb-1">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-forest text-white font-semibold px-4 py-3 rounded-full hover:bg-moss transition-colors"
                >
                  {t("nav.getInTouch")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="products">
        <ProductsSection />
      </section>
      <section id="exports">
        <ExportCargoSection />
      </section>
      <SocialMediaSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms-and-conditions",
  component: TermsAndConditionsPage,
});

const exportCertRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/export-certification",
  component: ExportCertificationPage,
});

const whyChooseUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why-choose-us",
  component: WhyChooseUsRedirect,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  privacyRoute,
  termsRoute,
  exportCertRoute,
  whyChooseUsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
