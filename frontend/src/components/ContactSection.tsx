import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-medium tracking-widest uppercase text-gold/80">
              {t('contact.label')}
            </span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-cream/65 text-lg max-w-xl mx-auto leading-relaxed">
            {t('contact.subheading')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-cream mb-8">
              {t('contact.info.heading')}
            </h3>
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t('contact.address.label')}
                  </div>
                  <div className="text-cream/85 text-sm leading-relaxed">
                    {t('contact.address.value')}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t('contact.phone.label')}
                  </div>
                  <a
                    href="tel:+919773303026"
                    className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                  >
                    +91 97733 03026
                  </a>
                </div>
              </div>

              {/* Email — two addresses */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t('contact.email.label')}
                  </div>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:info@trueoriginexports.com"
                      className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                    >
                      info@trueoriginexports.com
                    </a>
                    <a
                      href="mailto:sales@trueoriginexports.com"
                      className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                    >
                      sales@trueoriginexports.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t('contact.website')}
                  </div>
                  <a
                    href="https://www.trueoriginintl.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                  >
                    www.trueoriginintl.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t('contact.hours.label')}
                  </div>
                  <div className="text-cream/85 text-sm leading-relaxed">
                    {t('contact.hours.value')}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative farm image */}
            <div className="mt-10 rounded-2xl overflow-hidden opacity-70">
              <img
                src="/assets/generated/moringa-leaf.dim_800x800.png"
                alt="Moringa farm"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-cream/8 backdrop-blur-sm border border-cream/15 rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold text-cream mb-6">
              {t('contact.form.heading')}
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-display text-xl font-semibold text-cream">
                  {t('contact.success.heading')}
                </h4>
                <p className="text-cream/65 text-sm max-w-xs leading-relaxed">
                  {t('contact.success.message')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-cream/70 text-xs uppercase tracking-wide">
                      {t('contact.form.name.label')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.name.placeholder')}
                      className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone" className="text-cream/70 text-xs uppercase tracking-wide">
                      {t('contact.form.phone.label')}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-cream/70 text-xs uppercase tracking-wide">
                    {t('contact.form.email.label')}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message" className="text-cream/70 text-xs uppercase tracking-wide">
                    {t('contact.form.message.label')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t('contact.form.message.placeholder')}
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full py-3 bg-gold text-forest font-semibold text-sm rounded-xl hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
