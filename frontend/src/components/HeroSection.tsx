import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/farm.png')" }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(30,50,20,0.62) 0%, rgba(20,40,15,0.72) 60%, rgba(15,30,10,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 border border-cream/30 text-cream/90 text-xs font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          Natural · Pure · Trusted
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
          True Origin
          <br />
          <span className="text-gold">Company LLP</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed mb-10">
          From nature's finest farms to your table — we bring you premium perishable and
          non-perishable food products rooted in purity and quality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('#products')}
            className="px-8 py-3.5 bg-gold text-forest font-semibold rounded-full hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            Explore Our Products
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="px-8 py-3.5 bg-cream/15 text-cream font-medium rounded-full border border-cream/40 hover:bg-cream/25 transition-all backdrop-blur-sm text-sm"
          >
            Learn About Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
