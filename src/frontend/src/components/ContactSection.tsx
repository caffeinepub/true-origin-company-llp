import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919773300381";
    const text = `New Enquiry from Pure Origin LLP Website%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Phone:* ${encodeURIComponent(form.phone || "Not provided")}%0A*Message:* ${encodeURIComponent(form.message)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
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
              {t("contact.label")}
            </span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            {t("contact.heading")}
          </h2>
          <p className="text-cream/65 text-lg max-w-xl mx-auto leading-relaxed">
            {t("contact.subheading")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-cream mb-8">
              {t("contact.info.heading")}
            </h3>
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t("contact.address.label")}
                  </div>
                  <div className="text-cream/85 text-sm leading-relaxed">
                    {t("contact.address.value")}
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
                    {t("contact.phone.label")}
                  </div>
                  <a
                    href="tel:+919773300381"
                    className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                  >
                    +91 97733 00381
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
                    {t("contact.email.label")}
                  </div>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:info@pureoriginexports.com"
                      className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                    >
                      info@pureoriginexports.com
                    </a>
                    <a
                      href="mailto:sales@pureoriginexports.com"
                      className="text-cream/85 text-sm leading-relaxed hover:text-gold transition-colors"
                    >
                      sales@pureoriginexports.com
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
                    {t("contact.website")}
                  </div>
                  <div className="text-cream/85 text-sm leading-relaxed">
                    {t("contact.info.website")}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide uppercase text-cream/50 mb-0.5">
                    {t("contact.hours.label")}
                  </div>
                  <div className="text-cream/85 text-sm leading-relaxed">
                    {t("contact.hours.value")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream/5 border border-cream/10 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-semibold text-cream mb-6">
              {t("contact.form.heading")}
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-cream font-semibold text-xl mb-2">
                  {t("contact.success.title")}
                </h4>
                <p className="text-cream/65 text-sm">
                  {t("contact.success.desc")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-cream/70 text-xs font-medium tracking-wide uppercase mb-1.5 block"
                  >
                    {t("contact.form.name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 rounded-xl"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-cream/70 text-xs font-medium tracking-wide uppercase mb-1.5 block"
                  >
                    {t("contact.form.email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 rounded-xl"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-cream/70 text-xs font-medium tracking-wide uppercase mb-1.5 block"
                  >
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 rounded-xl"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-cream/70 text-xs font-medium tracking-wide uppercase mb-1.5 block"
                  >
                    {t("contact.form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                    rows={5}
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-forest font-semibold py-3 px-6 rounded-xl hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
