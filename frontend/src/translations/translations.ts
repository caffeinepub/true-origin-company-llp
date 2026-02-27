export type TranslationKeys =
  // Nav
  | 'nav.home'
  | 'nav.about'
  | 'nav.products'
  | 'nav.exports'
  | 'nav.contact'
  | 'nav.getInTouch'
  // Hero
  | 'hero.badge'
  | 'hero.tagline'
  | 'hero.cta.products'
  | 'hero.cta.about'
  // About
  | 'about.label'
  | 'about.heading1'
  | 'about.heading2'
  | 'about.para1'
  | 'about.para2'
  | 'about.stat.natural'
  | 'about.stat.products'
  | 'about.stat.reach'
  | 'about.value1.title'
  | 'about.value1.desc'
  | 'about.value2.title'
  | 'about.value2.desc'
  | 'about.value3.title'
  | 'about.value3.desc'
  // Products
  | 'products.label'
  | 'products.heading'
  | 'products.subheading'
  | 'products.enquire'
  | 'products.category.perishable'
  | 'products.category.nonPerishable'
  | 'products.p1.name'
  | 'products.p1.desc'
  | 'products.p1.tag1'
  | 'products.p1.tag2'
  | 'products.p1.tag3'
  | 'products.p2.name'
  | 'products.p2.desc'
  | 'products.p2.tag1'
  | 'products.p2.tag2'
  | 'products.p2.tag3'
  | 'products.p3.name'
  | 'products.p3.desc'
  | 'products.p3.tag1'
  | 'products.p3.tag2'
  | 'products.p3.tag3'
  | 'products.p4.name'
  | 'products.p4.desc'
  | 'products.p4.tag1'
  | 'products.p4.tag2'
  | 'products.p4.tag3'
  | 'products.p5.name'
  | 'products.p5.desc'
  | 'products.p5.tag1'
  | 'products.p5.tag2'
  | 'products.p5.tag3'
  // Farm Images
  | 'products.farm.heading'
  | 'products.farm.subheading'
  | 'products.farm.moringa.alt'
  | 'products.farm.moringa.label'
  | 'products.farm.curry.alt'
  | 'products.farm.curry.label'
  | 'products.farm.okra.alt'
  | 'products.farm.okra.label'
  // Export
  | 'export.label'
  | 'export.heading1'
  | 'export.heading2'
  | 'export.subheading'
  | 'export.img1.title'
  | 'export.img1.sub'
  | 'export.img2.title'
  | 'export.img2.sub'
  | 'export.h1.title'
  | 'export.h1.desc'
  | 'export.h2.title'
  | 'export.h2.desc'
  | 'export.h3.title'
  | 'export.h3.desc'
  | 'export.h4.title'
  | 'export.h4.desc'
  // Social
  | 'social.label'
  | 'social.heading'
  | 'social.subheading'
  | 'social.comingSoon'
  | 'social.bottomNote'
  | 'social.v1.title'
  | 'social.v1.desc'
  | 'social.v2.title'
  | 'social.v2.desc'
  | 'social.v3.title'
  | 'social.v3.desc'
  // Contact
  | 'contact.label'
  | 'contact.heading'
  | 'contact.subheading'
  | 'contact.info.heading'
  | 'contact.address.label'
  | 'contact.address.value'
  | 'contact.phone.label'
  | 'contact.email.label'
  | 'contact.website'
  | 'contact.hours.label'
  | 'contact.hours.value'
  | 'contact.form.heading'
  | 'contact.form.name.label'
  | 'contact.form.name.placeholder'
  | 'contact.form.phone.label'
  | 'contact.form.email.label'
  | 'contact.form.message.label'
  | 'contact.form.message.placeholder'
  | 'contact.form.submit'
  | 'contact.success.heading'
  | 'contact.success.message'
  // Footer
  | 'footer.tagline'
  | 'footer.quickLinks'
  | 'footer.ourProducts'
  | 'footer.nav.home'
  | 'footer.nav.about'
  | 'footer.nav.exports'
  | 'footer.nav.products'
  | 'footer.nav.contact'
  | 'footer.website'
  | 'footer.copyright'
  | 'footer.legal'
  | 'footer.privacyPolicy'
  | 'footer.termsConditions'
  | 'footer.exportCertification'
  // Privacy Policy
  | 'privacy.title'
  | 'privacy.heading'
  | 'privacy.intro'
  | 'privacy.s1.title'
  | 'privacy.s1.body'
  | 'privacy.s2.title'
  | 'privacy.s2.body'
  | 'privacy.s3.title'
  | 'privacy.s3.body'
  | 'privacy.s4.title'
  | 'privacy.s4.body'
  | 'privacy.s5.title'
  | 'privacy.s5.body'
  | 'privacy.s6.title'
  | 'privacy.s6.body'
  | 'privacy.s7.title'
  | 'privacy.s7.body'
  | 'privacy.effectiveDate'
  // Terms & Conditions
  | 'terms.title'
  | 'terms.heading'
  | 'terms.intro'
  | 'terms.s1.title'
  | 'terms.s1.body'
  | 'terms.s2.title'
  | 'terms.s2.body'
  | 'terms.s3.title'
  | 'terms.s3.body'
  | 'terms.s4.title'
  | 'terms.s4.body'
  | 'terms.s5.title'
  | 'terms.s5.body'
  | 'terms.s6.title'
  | 'terms.s6.body'
  | 'terms.s7.title'
  | 'terms.s7.body'
  | 'terms.s8.title'
  | 'terms.s8.body'
  | 'terms.effectiveDate'
  // Export Certification
  | 'cert.title'
  | 'cert.heading'
  | 'cert.intro'
  | 'cert.s1.title'
  | 'cert.s1.intro'
  | 'cert.apeda.name'
  | 'cert.apeda.desc'
  | 'cert.fssai.name'
  | 'cert.fssai.desc'
  | 'cert.phyto.name'
  | 'cert.phyto.desc'
  | 'cert.coo.name'
  | 'cert.coo.desc'
  | 'cert.haccp.name'
  | 'cert.haccp.desc'
  | 'cert.s2.title'
  | 'cert.s2.intro'
  | 'cert.qc1.title'
  | 'cert.qc1.desc'
  | 'cert.qc2.title'
  | 'cert.qc2.desc'
  | 'cert.qc3.title'
  | 'cert.qc3.desc'
  | 'cert.qc4.title'
  | 'cert.qc4.desc'
  | 'cert.s3.title'
  | 'cert.s3.intro'
  | 'cert.spec.scientificName'
  | 'cert.spec.form'
  | 'cert.spec.color'
  | 'cert.spec.moisture'
  | 'cert.spec.packaging'
  | 'cert.spec.shelfLife'
  | 'cert.spec.grade'
  | 'cert.p1.name'
  | 'cert.p1.scientificName'
  | 'cert.p1.form'
  | 'cert.p1.color'
  | 'cert.p1.moisture'
  | 'cert.p1.packaging'
  | 'cert.p1.shelfLife'
  | 'cert.p1.grade'
  | 'cert.p2.name'
  | 'cert.p2.scientificName'
  | 'cert.p2.form'
  | 'cert.p2.color'
  | 'cert.p2.moisture'
  | 'cert.p2.packaging'
  | 'cert.p2.shelfLife'
  | 'cert.p2.grade'
  | 'cert.p3.name'
  | 'cert.p3.scientificName'
  | 'cert.p3.form'
  | 'cert.p3.color'
  | 'cert.p3.moisture'
  | 'cert.p3.packaging'
  | 'cert.p3.shelfLife'
  | 'cert.p3.grade'
  | 'cert.p4.name'
  | 'cert.p4.scientificName'
  | 'cert.p4.form'
  | 'cert.p4.color'
  | 'cert.p4.moisture'
  | 'cert.p4.packaging'
  | 'cert.p4.shelfLife'
  | 'cert.p4.grade';

type TranslationMap = Record<TranslationKeys, string>;

export const translations: Record<'en' | 'hi' | 'mr', TranslationMap> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.exports': 'Exports',
    'nav.contact': 'Contact',
    'nav.getInTouch': 'Get in Touch',
    // Hero
    'hero.badge': 'Natural · Pure · Trusted',
    'hero.tagline':
      "From nature's finest farms to your table — we bring you premium perishable and non-perishable food products rooted in purity and quality.",
    'hero.cta.products': 'Explore Our Products',
    'hero.cta.about': 'Learn About Us',
    // About
    'about.label': 'Who We Are',
    'about.heading1': 'Rooted in Nature,',
    'about.heading2': 'Driven by Quality',
    'about.para1':
      'True Origin Company LLP is a dedicated food products company specialising in both perishable and non-perishable food products. We believe that what you eat should come from the most authentic, natural sources possible.',
    'about.para2':
      "From the lush green fields of moringa farms to carefully processed powders and dried leaves, our products carry the essence of nature's best. We work closely with farmers, maintain strict quality standards, and deliver products that nourish and sustain.",
    'about.stat.natural': 'Natural',
    'about.stat.products': 'Products',
    'about.stat.reach': 'Reach',
    'about.value1.title': 'Farm-Fresh Quality',
    'about.value1.desc':
      'We source directly from trusted farms, ensuring every product retains its natural goodness and nutritional value.',
    'about.value2.title': 'Purity Guaranteed',
    'about.value2.desc':
      'Rigorous quality checks at every stage — from harvest to packaging — so you receive only the finest produce.',
    'about.value3.title': 'Reliable Supply Chain',
    'about.value3.desc':
      'Our robust logistics network ensures timely delivery of both perishable and non-perishable goods, fresh every time.',
    // Products
    'products.label': 'Our Offerings',
    'products.heading': "Nature's Finest Products",
    'products.subheading':
      'From fresh perishables to shelf-stable non-perishables, every product we offer is sourced with care and processed to preserve its natural integrity.',
    'products.enquire': 'Enquire Now',
    'products.category.perishable': 'Perishable',
    'products.category.nonPerishable': 'Non-Perishable',
    'products.p1.name': 'Moringa Powder',
    'products.p1.desc':
      "Premium-grade moringa leaf powder, cold-processed to preserve maximum nutrients. Rich in vitamins, minerals, and antioxidants — nature's superfood in its purest form.",
    'products.p1.tag1': 'Superfood',
    'products.p1.tag2': 'Organic',
    'products.p1.tag3': 'Nutrient-Rich',
    'products.p2.name': 'Moringa Leaves',
    'products.p2.desc':
      'Freshly harvested moringa leaves, hand-picked at peak freshness. Packed with essential amino acids and micronutrients, perfect for culinary and wellness use.',
    'products.p2.tag1': 'Fresh',
    'products.p2.tag2': 'Hand-Picked',
    'products.p2.tag3': 'Seasonal',
    'products.p3.name': 'Dried Moringa Leaves',
    'products.p3.desc':
      'Sun-dried moringa leaves retaining their full nutritional profile. Ideal for teas, soups, and herbal preparations with an extended shelf life.',
    'products.p3.tag1': 'Dried',
    'products.p3.tag2': 'Long Shelf Life',
    'products.p3.tag3': 'Versatile',
    'products.p4.name': 'Moringa Tea',
    'products.p4.desc':
      'Aromatic moringa herbal tea crafted from the finest dried leaves. A soothing, nutrient-dense beverage for daily wellness rituals.',
    'products.p4.tag1': 'Herbal',
    'products.p4.tag2': 'Caffeine-Free',
    'products.p4.tag3': 'Wellness',
    'products.p5.name': 'Moringa Capsules',
    'products.p5.desc':
      "Concentrated moringa powder encapsulated for convenient daily supplementation. Each capsule delivers a potent dose of nature's most nutritious plant.",
    'products.p5.tag1': 'Supplement',
    'products.p5.tag2': 'Convenient',
    'products.p5.tag3': 'Potent',
    // Farm Images
    'products.farm.heading': 'Straight From Our Farms',
    'products.farm.subheading':
      'Every product begins its journey in the rich soils of our partner farms — cultivated with care, harvested at peak quality.',
    'products.farm.moringa.alt': 'Moringa farm with lush green trees in rows',
    'products.farm.moringa.label': 'Moringa Farm',
    'products.farm.curry.alt': 'Curry leaves farm with vibrant green foliage',
    'products.farm.curry.label': 'Curry Leaves Farm',
    'products.farm.okra.alt': 'Okra farm with tall plants and fresh pods',
    'products.farm.okra.label': 'Okra Farm',
    // Export
    'export.label': 'Global Exports',
    'export.heading1': 'Professional Exporters,',
    'export.heading2': 'Trusted Worldwide',
    'export.subheading':
      'True Origin Company LLP is equipped to handle international export orders with precision and professionalism — from farm to foreign shores.',
    'export.img1.title': 'International Shipping',
    'export.img1.sub': 'Sea freight to global destinations',
    'export.img2.title': 'Export-Ready Packaging',
    'export.img2.sub': 'Compliant with international standards',
    'export.h1.title': 'Sea & Air Freight',
    'export.h1.desc':
      'We handle both sea and air freight shipments, ensuring your order reaches its destination safely and on time.',
    'export.h2.title': 'Export-Ready Packaging',
    'export.h2.desc':
      'All products are packed to international standards with proper labelling, documentation, and compliance.',
    'export.h3.title': 'Global Reach',
    'export.h3.desc':
      'We export to markets across Asia, Europe, the Middle East, and beyond — connecting Indian farms to the world.',
    'export.h4.title': 'Quality Certified',
    'export.h4.desc':
      'Our export processes adhere to strict quality and food safety standards, ensuring every shipment meets global requirements.',
    // Social
    'social.label': 'Stay Connected',
    'social.heading': 'Follow Our Journey',
    'social.subheading':
      "We're building our social presence to share farm stories, product updates, and export milestones. Stay tuned — exciting content is coming soon!",
    'social.comingSoon': 'Coming Soon',
    'social.bottomNote': 'Social media links will be activated soon. Check back for updates!',
    'social.v1.title': 'Farm to Export — Our Process',
    'social.v1.desc':
      'A behind-the-scenes look at how we source, process, and pack our moringa products for global export.',
    'social.v2.title': 'Moringa Harvest Season',
    'social.v2.desc':
      'Watch our farmers hand-pick fresh moringa leaves at peak nutritional value from our partner farms.',
    'social.v3.title': 'Quality & Packaging Standards',
    'social.v3.desc':
      'See how we ensure every batch meets international food safety and export compliance standards.',
    // Contact
    'contact.label': 'Get In Touch',
    'contact.heading': "Let's Work Together",
    'contact.subheading':
      "Interested in our products or want to discuss a partnership? We'd love to hear from you.",
    'contact.info.heading': 'Contact Information',
    'contact.address.label': 'Address',
    'contact.address.value': 'True Origin Company LLP, Maharashtra, India',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    'contact.website': 'Website',
    'contact.hours.label': 'Business Hours',
    'contact.hours.value': 'Mon – Sat: 9:00 AM – 6:00 PM IST',
    'contact.form.heading': 'Send an Enquiry',
    'contact.form.name.label': 'Full Name *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.phone.label': 'Phone',
    'contact.form.email.label': 'Email Address *',
    'contact.form.message.label': 'Message *',
    'contact.form.message.placeholder': 'Tell us about your requirements...',
    'contact.form.submit': 'Send Enquiry',
    'contact.success.heading': 'Message Received!',
    'contact.success.message': "Thank you for reaching out. We'll get back to you within 24 hours.",
    // Footer
    'footer.tagline':
      "Delivering nature's finest perishable and non-perishable food products with integrity, quality, and care.",
    'footer.quickLinks': 'Quick Links',
    'footer.ourProducts': 'Our Products',
    'footer.nav.home': 'Home',
    'footer.nav.about': 'About Us',
    'footer.nav.exports': 'Exports',
    'footer.nav.products': 'Products',
    'footer.nav.contact': 'Contact',
    'footer.website': 'Website:',
    'footer.copyright': '© {year} True Origin Company LLP. All rights reserved.',
    'footer.legal': 'Legal & Info',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsConditions': 'Terms & Conditions',
    'footer.exportCertification': 'Export Certification & Specs',
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.heading': 'Privacy Policy',
    'privacy.intro':
      'True Origin Company LLP ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.',
    'privacy.s1.title': '1. Information We Collect',
    'privacy.s1.body':
      'We may collect personal information that you voluntarily provide to us when you fill out our contact or enquiry form. This includes your full name, email address, phone number, and any message or enquiry details you submit. We do not collect sensitive personal data such as financial information or government identification numbers.',
    'privacy.s2.title': '2. How We Use Your Information',
    'privacy.s2.body':
      'We use the information you provide solely to respond to your enquiries, process business communications, and improve our services. We do not sell, trade, or rent your personal information to third parties. Your contact details may be used to follow up on your enquiry or send relevant product information you have requested.',
    'privacy.s3.title': '3. Cookies and Tracking',
    'privacy.s3.body':
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.',
    'privacy.s4.title': '4. Third-Party Services',
    'privacy.s4.body':
      'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party sites you visit. We do not share your personal data with third-party advertisers.',
    'privacy.s5.title': '5. Data Security',
    'privacy.s5.body':
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
    'privacy.s6.title': '6. Your Rights',
    'privacy.s6.body':
      'You have the right to access, correct, or request deletion of your personal information that we hold. To exercise these rights, please contact us at info@trueoriginexports.com. We will respond to your request within a reasonable timeframe in accordance with applicable law.',
    'privacy.s7.title': '7. Contact Us',
    'privacy.s7.body':
      'If you have any questions or concerns about this Privacy Policy, please contact us at: info@trueoriginexports.com or sales@trueoriginexports.com. True Origin Company LLP, Maharashtra, India.',
    'privacy.effectiveDate': 'Effective Date: January 1, 2025',
    // Terms & Conditions
    'terms.title': 'Terms & Conditions',
    'terms.heading': 'Terms & Conditions',
    'terms.intro':
      'Please read these Terms and Conditions carefully before using the True Origin Company LLP website. By accessing or using our website, you agree to be bound by these terms.',
    'terms.s1.title': '1. Acceptance of Terms',
    'terms.s1.body':
      'By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.',
    'terms.s2.title': '2. Use of Website',
    'terms.s2.body':
      'This website is intended for informational and business enquiry purposes only. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not use this website to transmit any unsolicited or unauthorised advertising, promotional material, or spam.',
    'terms.s3.title': '3. Intellectual Property',
    'terms.s3.body':
      'All content on this website, including but not limited to text, images, logos, graphics, and design elements, is the property of True Origin Company LLP and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this website without our prior written consent.',
    'terms.s4.title': '4. Product Information Disclaimer',
    'terms.s4.body':
      'The product descriptions, specifications, and images on this website are provided for informational purposes only. While we strive to ensure accuracy, we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free. Actual product specifications may vary based on availability, season, and export requirements.',
    'terms.s5.title': '5. Limitation of Liability',
    'terms.s5.body':
      'To the fullest extent permitted by law, True Origin Company LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein. Our total liability for any claim shall not exceed the value of the specific transaction in question.',
    'terms.s6.title': '6. Governing Law',
    'terms.s6.body':
      'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of Maharashtra, India.',
    'terms.s7.title': '7. Dispute Resolution',
    'terms.s7.body':
      'In the event of any dispute, both parties agree to first attempt to resolve the matter through good-faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, it shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.',
    'terms.s8.title': '8. Contact Information',
    'terms.s8.body':
      'For any questions regarding these Terms and Conditions, please contact us at: info@trueoriginexports.com or sales@trueoriginexports.com. True Origin Company LLP, Maharashtra, India.',
    'terms.effectiveDate': 'Effective Date: January 1, 2025',
    // Export Certification
    'cert.title': 'Export Certification, Quality Control & Product Specifications',
    'cert.heading': 'Export Certification, Quality Control & Product Specifications',
    'cert.intro':
      'True Origin Company LLP maintains the highest standards of export compliance, quality assurance, and product integrity. Below you will find details of our certifications, quality control processes, and comprehensive product specifications.',
    'cert.s1.title': 'Export Certifications',
    'cert.s1.intro':
      'We hold and operate under the following internationally recognised certifications and compliance frameworks to ensure our products meet global import requirements:',
    'cert.apeda.name': 'APEDA Registration',
    'cert.apeda.desc':
      'Registered with the Agricultural and Processed Food Products Export Development Authority (APEDA), Government of India. This registration authorises us to export scheduled agricultural and processed food products and ensures compliance with Indian export regulations.',
    'cert.fssai.name': 'FSSAI License',
    'cert.fssai.desc':
      'Licensed under the Food Safety and Standards Authority of India (FSSAI). This ensures all our products meet Indian food safety standards for processing, packaging, labelling, and storage before export.',
    'cert.phyto.name': 'Phytosanitary Certificate',
    'cert.phyto.desc':
      'Issued by the Plant Quarantine Authority of India for each shipment of plant-based products. This certificate confirms that our products are free from pests, diseases, and contaminants as required by the importing country.',
    'cert.coo.name': 'Certificate of Origin',
    'cert.coo.desc':
      'Issued by the relevant Chamber of Commerce or Export Promotion Council, certifying that our products originate from India. This document is required by most importing countries for customs clearance and preferential tariff treatment.',
    'cert.haccp.name': 'HACCP Compliance',
    'cert.haccp.desc':
      'Our processing and packaging operations follow Hazard Analysis and Critical Control Points (HACCP) principles to identify and control food safety hazards at every stage of production, ensuring safe and hygienic products for international markets.',
    'cert.s2.title': 'Quality Control',
    'cert.s2.intro':
      'Our quality control process is rigorous and systematic, covering every stage from farm sourcing to final shipment:',
    'cert.qc1.title': 'Farm Sourcing Standards',
    'cert.qc1.desc':
      'We partner exclusively with verified farms that follow Good Agricultural Practices (GAP). All farms are regularly audited for soil health, pesticide usage, irrigation practices, and harvest methods to ensure produce meets our quality benchmarks.',
    'cert.qc2.title': 'Inspection & Testing',
    'cert.qc2.desc':
      'Every batch undergoes multi-stage inspection including visual grading, moisture content testing, microbial analysis, and pesticide residue testing. Products are tested at accredited third-party laboratories before dispatch to ensure compliance with destination country standards.',
    'cert.qc3.title': 'Packaging & Storage',
    'cert.qc3.desc':
      'Products are packed in food-grade, export-compliant packaging materials. Temperature-controlled storage is maintained for perishable products. All packaging includes proper labelling with product name, batch number, net weight, country of origin, and expiry date.',
    'cert.qc4.title': 'Traceability',
    'cert.qc4.desc':
      'We maintain complete traceability from farm to final destination. Each shipment is assigned a unique batch code that allows us to trace the product back to the specific farm, harvest date, and processing batch — enabling rapid response in case of any quality concern.',
    'cert.s3.title': 'Product Specifications',
    'cert.s3.intro':
      'Detailed specifications for our key export products are provided below. Custom specifications and packaging can be arranged upon request.',
    'cert.spec.scientificName': 'Scientific Name',
    'cert.spec.form': 'Form',
    'cert.spec.color': 'Color',
    'cert.spec.moisture': 'Moisture Content',
    'cert.spec.packaging': 'Packaging Options',
    'cert.spec.shelfLife': 'Shelf Life',
    'cert.spec.grade': 'Available Grade',
    'cert.p1.name': 'Moringa Powder',
    'cert.p1.scientificName': 'Moringa oleifera',
    'cert.p1.form': 'Fine powder (80–100 mesh)',
    'cert.p1.color': 'Deep green to olive green',
    'cert.p1.moisture': '≤ 8%',
    'cert.p1.packaging': '100g, 250g, 500g, 1kg retail; 5kg, 10kg, 25kg bulk',
    'cert.p1.shelfLife': '24 months from date of manufacture',
    'cert.p1.grade': 'Food Grade / Export Grade',
    'cert.p2.name': 'Moringa Dried Leaf',
    'cert.p2.scientificName': 'Moringa oleifera',
    'cert.p2.form': 'Whole dried leaf / crushed leaf',
    'cert.p2.color': 'Dark green',
    'cert.p2.moisture': '≤ 10%',
    'cert.p2.packaging': '250g, 500g retail; 5kg, 10kg, 20kg bulk',
    'cert.p2.shelfLife': '18 months from date of manufacture',
    'cert.p2.grade': 'Food Grade / Herbal Grade',
    'cert.p3.name': 'Curry Leaves (Dried)',
    'cert.p3.scientificName': 'Murraya koenigii',
    'cert.p3.form': 'Whole dried leaf',
    'cert.p3.color': 'Olive green to dark green',
    'cert.p3.moisture': '≤ 10%',
    'cert.p3.packaging': '100g, 250g retail; 5kg, 10kg bulk',
    'cert.p3.shelfLife': '12 months from date of manufacture',
    'cert.p3.grade': 'Food Grade / Culinary Grade',
    'cert.p4.name': 'Okra / Lady Finger (Fresh)',
    'cert.p4.scientificName': 'Abelmoschus esculentus',
    'cert.p4.form': 'Fresh whole pods',
    'cert.p4.color': 'Bright green',
    'cert.p4.moisture': 'N/A (fresh produce)',
    'cert.p4.packaging': '500g, 1kg, 5kg cartons; custom bulk',
    'cert.p4.shelfLife': '7–10 days under refrigeration (2–8°C)',
    'cert.p4.grade': 'Grade A / Export Grade',
  },

  hi: {
    // Nav
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.exports': 'निर्यात',
    'nav.contact': 'संपर्क',
    'nav.getInTouch': 'संपर्क करें',
    // Hero
    'hero.badge': 'प्राकृतिक · शुद्ध · विश्वसनीय',
    'hero.tagline':
      'प्रकृति के सर्वश्रेष्ठ खेतों से आपकी मेज तक — हम आपके लिए लाते हैं प्रीमियम खाद्य उत्पाद, शुद्धता और गुणवत्ता में निहित।',
    'hero.cta.products': 'हमारे उत्पाद देखें',
    'hero.cta.about': 'हमारे बारे में जानें',
    // About
    'about.label': 'हम कौन हैं',
    'about.heading1': 'प्रकृति में निहित,',
    'about.heading2': 'गुणवत्ता से प्रेरित',
    'about.para1':
      'True Origin Company LLP एक समर्पित खाद्य उत्पाद कंपनी है जो नाशवान और गैर-नाशवान दोनों प्रकार के खाद्य उत्पादों में विशेषज्ञता रखती है। हम मानते हैं कि आप जो खाते हैं वह सबसे प्रामाणिक, प्राकृतिक स्रोतों से आना चाहिए।',
    'about.para2':
      'मोरिंगा खेतों के हरे-भरे खेतों से लेकर सावधानीपूर्वक प्रसंस्कृत पाउडर और सूखे पत्तों तक, हमारे उत्पाद प्रकृति की सर्वश्रेष्ठता का सार लिए हुए हैं। हम किसानों के साथ मिलकर काम करते हैं, कड़े गुणवत्ता मानकों को बनाए रखते हैं।',
    'about.stat.natural': 'प्राकृतिक',
    'about.stat.products': 'उत्पाद',
    'about.stat.reach': 'पहुंच',
    'about.value1.title': 'खेत-ताज़ा गुणवत्ता',
    'about.value1.desc':
      'हम सीधे विश्वसनीय खेतों से सोर्स करते हैं, यह सुनिश्चित करते हुए कि प्रत्येक उत्पाद अपनी प्राकृतिक अच्छाई और पोषण मूल्य बनाए रखे।',
    'about.value2.title': 'शुद्धता की गारंटी',
    'about.value2.desc':
      'हर चरण में कड़ी गुणवत्ता जांच — फसल से पैकेजिंग तक — ताकि आपको केवल सर्वोत्तम उत्पाद मिले।',
    'about.value3.title': 'विश्वसनीय आपूर्ति श्रृंखला',
    'about.value3.desc':
      'हमारा मजबूत लॉजिस्टिक्स नेटवर्क नाशवान और गैर-नाशवान दोनों वस्तुओं की समय पर डिलीवरी सुनिश्चित करता है।',
    // Products
    'products.label': 'हमारी पेशकश',
    'products.heading': 'प्रकृति के सर्वश्रेष्ठ उत्पाद',
    'products.subheading':
      'ताज़े नाशवान से लेकर शेल्फ-स्थिर गैर-नाशवान तक, हमारे हर उत्पाद को देखभाल के साथ सोर्स किया जाता है।',
    'products.enquire': 'अभी पूछताछ करें',
    'products.category.perishable': 'नाशवान',
    'products.category.nonPerishable': 'गैर-नाशवान',
    'products.p1.name': 'मोरिंगा पाउडर',
    'products.p1.desc':
      'प्रीमियम-ग्रेड मोरिंगा पत्ती पाउडर, अधिकतम पोषक तत्वों को संरक्षित करने के लिए कोल्ड-प्रोसेस्ड।',
    'products.p1.tag1': 'सुपरफूड',
    'products.p1.tag2': 'जैविक',
    'products.p1.tag3': 'पोषक तत्वों से भरपूर',
    'products.p2.name': 'मोरिंगा पत्तियां',
    'products.p2.desc':
      'ताज़ी कटी मोरिंगा पत्तियां, चरम ताज़गी पर हाथ से चुनी गई। आवश्यक अमीनो एसिड और सूक्ष्म पोषक तत्वों से भरपूर।',
    'products.p2.tag1': 'ताज़ा',
    'products.p2.tag2': 'हाथ से चुना',
    'products.p2.tag3': 'मौसमी',
    'products.p3.name': 'सूखी मोरिंगा पत्तियां',
    'products.p3.desc':
      'धूप में सुखाई मोरिंगा पत्तियां जो अपनी पूरी पोषण प्रोफ़ाइल बनाए रखती हैं। चाय, सूप और हर्बल तैयारियों के लिए आदर्श।',
    'products.p3.tag1': 'सूखा',
    'products.p3.tag2': 'लंबी शेल्फ लाइफ',
    'products.p3.tag3': 'बहुमुखी',
    'products.p4.name': 'मोरिंगा चाय',
    'products.p4.desc':
      'सर्वोत्तम सूखी पत्तियों से तैयार सुगंधित मोरिंगा हर्बल चाय। दैनिक स्वास्थ्य अनुष्ठानों के लिए एक सुखदायक पेय।',
    'products.p4.tag1': 'हर्बल',
    'products.p4.tag2': 'कैफीन-मुक्त',
    'products.p4.tag3': 'स्वास्थ्य',
    'products.p5.name': 'मोरिंगा कैप्सूल',
    'products.p5.desc':
      'सुविधाजनक दैनिक पूरकता के लिए कैप्सूल में बंद केंद्रित मोरिंगा पाउडर।',
    'products.p5.tag1': 'सप्लीमेंट',
    'products.p5.tag2': 'सुविधाजनक',
    'products.p5.tag3': 'शक्तिशाली',
    // Farm Images
    'products.farm.heading': 'सीधे हमारे खेतों से',
    'products.farm.subheading':
      'हर उत्पाद की यात्रा हमारे साझेदार खेतों की समृद्ध मिट्टी से शुरू होती है — देखभाल के साथ उगाया, चरम गुणवत्ता पर काटा।',
    'products.farm.moringa.alt': 'पंक्तियों में हरे-भरे पेड़ों के साथ मोरिंगा खेत',
    'products.farm.moringa.label': 'मोरिंगा खेत',
    'products.farm.curry.alt': 'जीवंत हरी पत्तियों के साथ करी पत्ता खेत',
    'products.farm.curry.label': 'करी पत्ता खेत',
    'products.farm.okra.alt': 'लंबे पौधों और ताज़ी फलियों के साथ भिंडी खेत',
    'products.farm.okra.label': 'भिंडी खेत',
    // Export
    'export.label': 'वैश्विक निर्यात',
    'export.heading1': 'पेशेवर निर्यातक,',
    'export.heading2': 'विश्वभर में विश्वसनीय',
    'export.subheading':
      'True Origin Company LLP अंतर्राष्ट्रीय निर्यात आदेशों को सटीकता और व्यावसायिकता के साथ संभालने के लिए सुसज्जित है।',
    'export.img1.title': 'अंतर्राष्ट्रीय शिपिंग',
    'export.img1.sub': 'वैश्विक गंतव्यों के लिए समुद्री माल',
    'export.img2.title': 'निर्यात-तैयार पैकेजिंग',
    'export.img2.sub': 'अंतर्राष्ट्रीय मानकों के अनुरूप',
    'export.h1.title': 'समुद्री और वायु माल',
    'export.h1.desc':
      'हम समुद्री और वायु माल दोनों शिपमेंट संभालते हैं, यह सुनिश्चित करते हुए कि आपका ऑर्डर सुरक्षित और समय पर पहुंचे।',
    'export.h2.title': 'निर्यात-तैयार पैकेजिंग',
    'export.h2.desc':
      'सभी उत्पाद उचित लेबलिंग, दस्तावेज़ीकरण और अनुपालन के साथ अंतर्राष्ट्रीय मानकों के अनुसार पैक किए जाते हैं।',
    'export.h3.title': 'वैश्विक पहुंच',
    'export.h3.desc':
      'हम एशिया, यूरोप, मध्य पूर्व और उससे परे के बाजारों में निर्यात करते हैं।',
    'export.h4.title': 'गुणवत्ता प्रमाणित',
    'export.h4.desc':
      'हमारी निर्यात प्रक्रियाएं कड़े गुणवत्ता और खाद्य सुरक्षा मानकों का पालन करती हैं।',
    // Social
    'social.label': 'जुड़े रहें',
    'social.heading': 'हमारी यात्रा का अनुसरण करें',
    'social.subheading':
      'हम खेत की कहानियां, उत्पाद अपडेट और निर्यात मील के पत्थर साझा करने के लिए अपनी सोशल उपस्थिति बना रहे हैं।',
    'social.comingSoon': 'जल्द आ रहा है',
    'social.bottomNote': 'सोशल मीडिया लिंक जल्द सक्रिय होंगे। अपडेट के लिए वापस देखें!',
    'social.v1.title': 'खेत से निर्यात — हमारी प्रक्रिया',
    'social.v1.desc':
      'हम अपने मोरिंगा उत्पादों को वैश्विक निर्यात के लिए कैसे सोर्स, प्रोसेस और पैक करते हैं, इसकी एक झलक।',
    'social.v2.title': 'मोरिंगा फसल का मौसम',
    'social.v2.desc':
      'हमारे किसानों को हमारे साझेदार खेतों से ताज़ी मोरिंगा पत्तियां हाथ से चुनते देखें।',
    'social.v3.title': 'गुणवत्ता और पैकेजिंग मानक',
    'social.v3.desc':
      'देखें कि हम कैसे सुनिश्चित करते हैं कि प्रत्येक बैच अंतर्राष्ट्रीय खाद्य सुरक्षा मानकों को पूरा करे।',
    // Contact
    'contact.label': 'संपर्क करें',
    'contact.heading': 'मिलकर काम करें',
    'contact.subheading':
      'हमारे उत्पादों में रुचि है या साझेदारी पर चर्चा करना चाहते हैं? हम आपसे सुनना पसंद करेंगे।',
    'contact.info.heading': 'संपर्क जानकारी',
    'contact.address.label': 'पता',
    'contact.address.value': 'True Origin Company LLP, महाराष्ट्र, भारत',
    'contact.phone.label': 'फ़ोन',
    'contact.email.label': 'ईमेल',
    'contact.website': 'वेबसाइट',
    'contact.hours.label': 'व्यापार के घंटे',
    'contact.hours.value': 'सोम – शनि: सुबह 9:00 – शाम 6:00 IST',
    'contact.form.heading': 'पूछताछ भेजें',
    'contact.form.name.label': 'पूरा नाम *',
    'contact.form.name.placeholder': 'आपका नाम',
    'contact.form.phone.label': 'फ़ोन',
    'contact.form.email.label': 'ईमेल पता *',
    'contact.form.message.label': 'संदेश *',
    'contact.form.message.placeholder': 'अपनी आवश्यकताओं के बारे में बताएं...',
    'contact.form.submit': 'पूछताछ भेजें',
    'contact.success.heading': 'संदेश प्राप्त हुआ!',
    'contact.success.message': 'संपर्क करने के लिए धन्यवाद। हम 24 घंटे के भीतर आपसे संपर्क करेंगे।',
    // Footer
    'footer.tagline':
      'ईमानदारी, गुणवत्ता और देखभाल के साथ प्रकृति के सर्वोत्तम नाशवान और गैर-नाशवान खाद्य उत्पाद प्रदान करना।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.ourProducts': 'हमारे उत्पाद',
    'footer.nav.home': 'होम',
    'footer.nav.about': 'हमारे बारे में',
    'footer.nav.exports': 'निर्यात',
    'footer.nav.products': 'उत्पाद',
    'footer.nav.contact': 'संपर्क',
    'footer.website': 'वेबसाइट:',
    'footer.copyright': '© {year} True Origin Company LLP. सर्वाधिकार सुरक्षित।',
    'footer.legal': 'कानूनी और जानकारी',
    'footer.privacyPolicy': 'गोपनीयता नीति',
    'footer.termsConditions': 'नियम और शर्तें',
    'footer.exportCertification': 'निर्यात प्रमाणन और विशिष्टताएं',
    // Privacy Policy
    'privacy.title': 'गोपनीयता नीति',
    'privacy.heading': 'गोपनीयता नीति',
    'privacy.intro':
      'True Origin Company LLP आपकी व्यक्तिगत जानकारी और आपकी गोपनीयता के अधिकार की रक्षा करने के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर जाते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।',
    'privacy.s1.title': '1. हम जो जानकारी एकत्र करते हैं',
    'privacy.s1.body':
      'हम व्यक्तिगत जानकारी एकत्र कर सकते हैं जो आप स्वेच्छा से हमें प्रदान करते हैं जब आप हमारा संपर्क या पूछताछ फ़ॉर्म भरते हैं। इसमें आपका पूरा नाम, ईमेल पता, फ़ोन नंबर और कोई भी संदेश शामिल है।',
    'privacy.s2.title': '2. हम आपकी जानकारी का उपयोग कैसे करते हैं',
    'privacy.s2.body':
      'हम आपकी जानकारी का उपयोग केवल आपकी पूछताछ का जवाब देने, व्यावसायिक संचार संसाधित करने और हमारी सेवाओं को बेहतर बनाने के लिए करते हैं। हम आपकी व्यक्तिगत जानकारी तीसरे पक्ष को नहीं बेचते, व्यापार करते या किराए पर देते हैं।',
    'privacy.s3.title': '3. कुकीज़ और ट्रैकिंग',
    'privacy.s3.body':
      'हमारी वेबसाइट आपके ब्राउज़िंग अनुभव को बेहतर बनाने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग कर सकती है। आप अपने ब्राउज़र को सभी कुकीज़ अस्वीकार करने का निर्देश दे सकते हैं।',
    'privacy.s4.title': '4. तृतीय-पक्ष सेवाएं',
    'privacy.s4.body':
      'हमारी वेबसाइट में तृतीय-पक्ष वेबसाइटों या सेवाओं के लिंक हो सकते हैं। हम उन तृतीय पक्षों की गोपनीयता प्रथाओं के लिए जिम्मेदार नहीं हैं।',
    'privacy.s5.title': '5. डेटा सुरक्षा',
    'privacy.s5.body':
      'हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, परिवर्तन, प्रकटीकरण या विनाश से बचाने के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं।',
    'privacy.s6.title': '6. आपके अधिकार',
    'privacy.s6.body':
      'आपके पास हमारे पास मौजूद अपनी व्यक्तिगत जानकारी तक पहुंचने, सुधारने या हटाने का अनुरोध करने का अधिकार है। इन अधिकारों का उपयोग करने के लिए, कृपया info@trueoriginexports.com पर संपर्क करें।',
    'privacy.s7.title': '7. हमसे संपर्क करें',
    'privacy.s7.body':
      'यदि आपके इस गोपनीयता नीति के बारे में कोई प्रश्न या चिंता है, तो कृपया हमसे संपर्क करें: info@trueoriginexports.com या sales@trueoriginexports.com। True Origin Company LLP, महाराष्ट्र, भारत।',
    'privacy.effectiveDate': 'प्रभावी तिथि: 1 जनवरी 2025',
    // Terms & Conditions
    'terms.title': 'नियम और शर्तें',
    'terms.heading': 'नियम और शर्तें',
    'terms.intro':
      'True Origin Company LLP वेबसाइट का उपयोग करने से पहले कृपया इन नियमों और शर्तों को ध्यान से पढ़ें। हमारी वेबसाइट तक पहुंचकर या उसका उपयोग करके, आप इन शर्तों से बंधे होने के लिए सहमत होते हैं।',
    'terms.s1.title': '1. शर्तों की स्वीकृति',
    'terms.s1.body':
      'इस वेबसाइट तक पहुंचकर और उसका उपयोग करके, आप इन नियमों और शर्तों और हमारी गोपनीयता नीति से बंधे होने के लिए स्वीकार और सहमत होते हैं।',
    'terms.s2.title': '2. वेबसाइट का उपयोग',
    'terms.s2.body':
      'यह वेबसाइट केवल सूचनात्मक और व्यावसायिक पूछताछ उद्देश्यों के लिए है। आप इस वेबसाइट का उपयोग केवल कानूनी उद्देश्यों के लिए करने के लिए सहमत हैं।',
    'terms.s3.title': '3. बौद्धिक संपदा',
    'terms.s3.body':
      'इस वेबसाइट पर सभी सामग्री True Origin Company LLP की संपत्ति है और लागू बौद्धिक संपदा कानूनों द्वारा संरक्षित है।',
    'terms.s4.title': '4. उत्पाद जानकारी अस्वीकरण',
    'terms.s4.body':
      'इस वेबसाइट पर उत्पाद विवरण, विशिष्टताएं और छवियां केवल सूचनात्मक उद्देश्यों के लिए प्रदान की गई हैं। वास्तविक उत्पाद विशिष्टताएं उपलब्धता और मौसम के आधार पर भिन्न हो सकती हैं।',
    'terms.s5.title': '5. दायित्व की सीमा',
    'terms.s5.body':
      'कानून द्वारा अनुमत पूर्ण सीमा तक, True Origin Company LLP इस वेबसाइट के आपके उपयोग से उत्पन्न किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक नुकसान के लिए उत्तरदायी नहीं होगी।',
    'terms.s6.title': '6. शासी कानून',
    'terms.s6.body':
      'ये नियम और शर्तें भारत के कानूनों द्वारा शासित और व्याख्यायित हैं। इन शर्तों से उत्पन्न कोई भी विवाद महाराष्ट्र, भारत की अदालतों के अनन्य क्षेत्राधिकार के अधीन होगा।',
    'terms.s7.title': '7. विवाद समाधान',
    'terms.s7.body':
      'किसी भी विवाद की स्थिति में, दोनों पक्ष पहले सद्भावना वार्ता के माध्यम से मामले को हल करने का प्रयास करने के लिए सहमत हैं।',
    'terms.s8.title': '8. संपर्क जानकारी',
    'terms.s8.body':
      'इन नियमों और शर्तों के बारे में किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करें: info@trueoriginexports.com या sales@trueoriginexports.com।',
    'terms.effectiveDate': 'प्रभावी तिथि: 1 जनवरी 2025',
    // Export Certification
    'cert.title': 'निर्यात प्रमाणन, गुणवत्ता नियंत्रण और उत्पाद विशिष्टताएं',
    'cert.heading': 'निर्यात प्रमाणन, गुणवत्ता नियंत्रण और उत्पाद विशिष्टताएं',
    'cert.intro':
      'True Origin Company LLP निर्यात अनुपालन, गुणवत्ता आश्वासन और उत्पाद अखंडता के उच्चतम मानकों को बनाए रखती है।',
    'cert.s1.title': 'निर्यात प्रमाणन',
    'cert.s1.intro':
      'हम निम्नलिखित अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त प्रमाणपत्रों और अनुपालन ढांचे के तहत काम करते हैं:',
    'cert.apeda.name': 'APEDA पंजीकरण',
    'cert.apeda.desc':
      'कृषि और प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण (APEDA), भारत सरकार के साथ पंजीकृत।',
    'cert.fssai.name': 'FSSAI लाइसेंस',
    'cert.fssai.desc':
      'भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) के तहत लाइसेंस प्राप्त। यह सुनिश्चित करता है कि हमारे सभी उत्पाद भारतीय खाद्य सुरक्षा मानकों को पूरा करते हैं।',
    'cert.phyto.name': 'फाइटोसैनिटरी प्रमाणपत्र',
    'cert.phyto.desc':
      'पौधे-आधारित उत्पादों के प्रत्येक शिपमेंट के लिए भारत के पादप संगरोध प्राधिकरण द्वारा जारी किया गया।',
    'cert.coo.name': 'उत्पत्ति का प्रमाण पत्र',
    'cert.coo.desc':
      'संबंधित चैंबर ऑफ कॉमर्स या निर्यात संवर्धन परिषद द्वारा जारी, यह प्रमाणित करता है कि हमारे उत्पाद भारत से उत्पन्न होते हैं।',
    'cert.haccp.name': 'HACCP अनुपालन',
    'cert.haccp.desc':
      'हमारी प्रसंस्करण और पैकेजिंग संचालन HACCP सिद्धांतों का पालन करती है।',
    'cert.s2.title': 'गुणवत्ता नियंत्रण',
    'cert.s2.intro':
      'हमारी गुणवत्ता नियंत्रण प्रक्रिया कठोर और व्यवस्थित है, जो खेत सोर्सिंग से अंतिम शिपमेंट तक हर चरण को कवर करती है:',
    'cert.qc1.title': 'खेत सोर्सिंग मानक',
    'cert.qc1.desc':
      'हम विशेष रूप से उन सत्यापित खेतों के साथ साझेदारी करते हैं जो अच्छी कृषि प्रथाओं (GAP) का पालन करते हैं।',
    'cert.qc2.title': 'निरीक्षण और परीक्षण',
    'cert.qc2.desc':
      'प्रत्येक बैच दृश्य ग्रेडिंग, नमी सामग्री परीक्षण, माइक्रोबियल विश्लेषण और कीटनाशक अवशेष परीक्षण सहित बहु-चरण निरीक्षण से गुजरता है।',
    'cert.qc3.title': 'पैकेजिंग और भंडारण',
    'cert.qc3.desc':
      'उत्पादों को खाद्य-ग्रेड, निर्यात-अनुपालन पैकेजिंग सामग्री में पैक किया जाता है। नाशवान उत्पादों के लिए तापमान-नियंत्रित भंडारण बनाए रखा जाता है।',
    'cert.qc4.title': 'ट्रेसेबिलिटी',
    'cert.qc4.desc':
      'हम खेत से अंतिम गंतव्य तक पूर्ण ट्रेसेबिलिटी बनाए रखते हैं। प्रत्येक शिपमेंट को एक अद्वितीय बैच कोड सौंपा जाता है।',
    'cert.s3.title': 'उत्पाद विशिष्टताएं',
    'cert.s3.intro':
      'हमारे प्रमुख निर्यात उत्पादों के लिए विस्तृत विशिष्टताएं नीचे दी गई हैं। अनुरोध पर कस्टम विशिष्टताएं और पैकेजिंग की व्यवस्था की जा सकती है।',
    'cert.spec.scientificName': 'वैज्ञानिक नाम',
    'cert.spec.form': 'रूप',
    'cert.spec.color': 'रंग',
    'cert.spec.moisture': 'नमी सामग्री',
    'cert.spec.packaging': 'पैकेजिंग विकल्प',
    'cert.spec.shelfLife': 'शेल्फ लाइफ',
    'cert.spec.grade': 'उपलब्ध ग्रेड',
    'cert.p1.name': 'मोरिंगा पाउडर',
    'cert.p1.scientificName': 'Moringa oleifera',
    'cert.p1.form': 'महीन पाउडर (80–100 मेश)',
    'cert.p1.color': 'गहरा हरा से जैतून हरा',
    'cert.p1.moisture': '≤ 8%',
    'cert.p1.packaging': '100g, 250g, 500g, 1kg खुदरा; 5kg, 10kg, 25kg थोक',
    'cert.p1.shelfLife': 'निर्माण की तारीख से 24 महीने',
    'cert.p1.grade': 'फूड ग्रेड / एक्सपोर्ट ग्रेड',
    'cert.p2.name': 'मोरिंगा सूखी पत्ती',
    'cert.p2.scientificName': 'Moringa oleifera',
    'cert.p2.form': 'पूरी सूखी पत्ती / कुचली पत्ती',
    'cert.p2.color': 'गहरा हरा',
    'cert.p2.moisture': '≤ 10%',
    'cert.p2.packaging': '250g, 500g खुदरा; 5kg, 10kg, 20kg थोक',
    'cert.p2.shelfLife': 'निर्माण की तारीख से 18 महीने',
    'cert.p2.grade': 'फूड ग्रेड / हर्बल ग्रेड',
    'cert.p3.name': 'करी पत्ता (सूखा)',
    'cert.p3.scientificName': 'Murraya koenigii',
    'cert.p3.form': 'पूरी सूखी पत्ती',
    'cert.p3.color': 'जैतून हरा से गहरा हरा',
    'cert.p3.moisture': '≤ 10%',
    'cert.p3.packaging': '100g, 250g खुदरा; 5kg, 10kg थोक',
    'cert.p3.shelfLife': 'निर्माण की तारीख से 12 महीने',
    'cert.p3.grade': 'फूड ग्रेड / पाक ग्रेड',
    'cert.p4.name': 'भिंडी / लेडी फिंगर (ताज़ा)',
    'cert.p4.scientificName': 'Abelmoschus esculentus',
    'cert.p4.form': 'ताज़ी पूरी फलियां',
    'cert.p4.color': 'चमकीला हरा',
    'cert.p4.moisture': 'N/A (ताज़ा उत्पाद)',
    'cert.p4.packaging': '500g, 1kg, 5kg कार्टन; कस्टम थोक',
    'cert.p4.shelfLife': 'प्रशीतन में 7–10 दिन (2–8°C)',
    'cert.p4.grade': 'ग्रेड A / एक्सपोर्ट ग्रेड',
  },

  mr: {
    // Nav
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.products': 'उत्पादने',
    'nav.exports': 'निर्यात',
    'nav.contact': 'संपर्क',
    'nav.getInTouch': 'संपर्क साधा',
    // Hero
    'hero.badge': 'नैसर्गिक · शुद्ध · विश्वासार्ह',
    'hero.tagline':
      'निसर्गाच्या सर्वोत्तम शेतांपासून तुमच्या टेबलापर्यंत — आम्ही तुमच्यासाठी आणतो प्रीमियम खाद्य उत्पादने, शुद्धता आणि गुणवत्तेत रुजलेली।',
    'hero.cta.products': 'आमची उत्पादने पाहा',
    'hero.cta.about': 'आमच्याबद्दल जाणून घ्या',
    // About
    'about.label': 'आम्ही कोण आहोत',
    'about.heading1': 'निसर्गात रुजलेले,',
    'about.heading2': 'गुणवत्तेने प्रेरित',
    'about.para1':
      'True Origin Company LLP ही एक समर्पित खाद्य उत्पादन कंपनी आहे जी नाशवंत आणि अनाशवंत दोन्ही प्रकारच्या खाद्य उत्पादनांमध्ये विशेषज्ञता राखते।',
    'about.para2':
      'मोरिंगा शेतांच्या हिरव्यागार शेतांपासून ते काळजीपूर्वक प्रक्रिया केलेल्या पावडर आणि वाळलेल्या पानांपर्यंत, आमची उत्पादने निसर्गाच्या सर्वोत्तमतेचे सार घेऊन येतात।',
    'about.stat.natural': 'नैसर्गिक',
    'about.stat.products': 'उत्पादने',
    'about.stat.reach': 'पोहोच',
    'about.value1.title': 'शेत-ताजी गुणवत्ता',
    'about.value1.desc':
      'आम्ही थेट विश्वासू शेतांमधून सोर्स करतो, प्रत्येक उत्पादन त्याची नैसर्गिक चांगुलपणा आणि पोषण मूल्य टिकवून ठेवते याची खात्री करतो।',
    'about.value2.title': 'शुद्धतेची हमी',
    'about.value2.desc':
      'प्रत्येक टप्प्यावर कठोर गुणवत्ता तपासणी — कापणीपासून पॅकेजिंगपर्यंत — जेणेकरून तुम्हाला फक्त सर्वोत्तम उत्पादन मिळेल।',
    'about.value3.title': 'विश्वासार्ह पुरवठा साखळी',
    'about.value3.desc':
      'आमचे मजबूत लॉजिस्टिक्स नेटवर्क नाशवंत आणि अनाशवंत दोन्ही वस्तूंची वेळेवर डिलिव्हरी सुनिश्चित करते।',
    // Products
    'products.label': 'आमची ऑफरिंग',
    'products.heading': 'निसर्गाची सर्वोत्तम उत्पादने',
    'products.subheading':
      'ताज्या नाशवंतांपासून शेल्फ-स्थिर अनाशवंतांपर्यंत, आम्ही ऑफर करतो ती प्रत्येक उत्पादन काळजीपूर्वक सोर्स केली जाते।',
    'products.enquire': 'आता चौकशी करा',
    'products.category.perishable': 'नाशवंत',
    'products.category.nonPerishable': 'अनाशवंत',
    'products.p1.name': 'मोरिंगा पावडर',
    'products.p1.desc':
      'प्रीमियम-ग्रेड मोरिंगा पान पावडर, जास्तीत जास्त पोषक तत्वे जपण्यासाठी कोल्ड-प्रोसेस्ड।',
    'products.p1.tag1': 'सुपरफूड',
    'products.p1.tag2': 'सेंद्रिय',
    'products.p1.tag3': 'पोषक-समृद्ध',
    'products.p2.name': 'मोरिंगा पाने',
    'products.p2.desc':
      'ताजी कापलेली मोरिंगा पाने, शिखर ताजेपणावर हाताने निवडलेली। आवश्यक अमिनो ऍसिड आणि सूक्ष्म पोषक तत्वांनी भरलेली।',
    'products.p2.tag1': 'ताजी',
    'products.p2.tag2': 'हाताने निवडलेली',
    'products.p2.tag3': 'हंगामी',
    'products.p3.name': 'वाळलेली मोरिंगा पाने',
    'products.p3.desc':
      'उन्हात वाळलेली मोरिंगा पाने जी त्यांची संपूर्ण पोषण प्रोफाइल टिकवून ठेवतात। चहा, सूप आणि हर्बल तयारींसाठी आदर्श।',
    'products.p3.tag1': 'वाळलेली',
    'products.p3.tag2': 'दीर्घ शेल्फ लाइफ',
    'products.p3.tag3': 'बहुमुखी',
    'products.p4.name': 'मोरिंगा चहा',
    'products.p4.desc':
      'सर्वोत्तम वाळलेल्या पानांपासून तयार केलेला सुगंधी मोरिंगा हर्बल चहा। दैनंदिन आरोग्य विधींसाठी एक सुखदायक पेय।',
    'products.p4.tag1': 'हर्बल',
    'products.p4.tag2': 'कॅफीन-मुक्त',
    'products.p4.tag3': 'आरोग्य',
    'products.p5.name': 'मोरिंगा कॅप्सूल',
    'products.p5.desc':
      'सोयीस्कर दैनंदिन पूरकतेसाठी कॅप्सूलमध्ये बंद केलेली केंद्रित मोरिंगा पावडर।',
    'products.p5.tag1': 'सप्लिमेंट',
    'products.p5.tag2': 'सोयीस्कर',
    'products.p5.tag3': 'शक्तिशाली',
    // Farm Images
    'products.farm.heading': 'थेट आमच्या शेतांमधून',
    'products.farm.subheading':
      'प्रत्येक उत्पादनाचा प्रवास आमच्या भागीदार शेतांच्या समृद्ध मातीत सुरू होतो — काळजीपूर्वक लागवड, शिखर गुणवत्तेवर कापणी।',
    'products.farm.moringa.alt': 'रांगांमध्ये हिरव्यागार झाडांसह मोरिंगा शेत',
    'products.farm.moringa.label': 'मोरिंगा शेत',
    'products.farm.curry.alt': 'दोलायमान हिरव्या पानांसह कढीपत्ता शेत',
    'products.farm.curry.label': 'कढीपत्ता शेत',
    'products.farm.okra.alt': 'उंच झाडे आणि ताज्या शेंगांसह भेंडी शेत',
    'products.farm.okra.label': 'भेंडी शेत',
    // Export
    'export.label': 'जागतिक निर्यात',
    'export.heading1': 'व्यावसायिक निर्यातदार,',
    'export.heading2': 'जगभरात विश्वासार्ह',
    'export.subheading':
      'True Origin Company LLP अचूकता आणि व्यावसायिकतेसह आंतरराष्ट्रीय निर्यात ऑर्डर हाताळण्यासाठी सज्ज आहे।',
    'export.img1.title': 'आंतरराष्ट्रीय शिपिंग',
    'export.img1.sub': 'जागतिक गंतव्यांसाठी समुद्री मालवाहतूक',
    'export.img2.title': 'निर्यात-तयार पॅकेजिंग',
    'export.img2.sub': 'आंतरराष्ट्रीय मानकांनुसार',
    'export.h1.title': 'समुद्री आणि हवाई मालवाहतूक',
    'export.h1.desc':
      'आम्ही समुद्री आणि हवाई मालवाहतूक दोन्ही शिपमेंट हाताळतो, तुमची ऑर्डर सुरक्षितपणे आणि वेळेवर पोहोचेल याची खात्री करतो।',
    'export.h2.title': 'निर्यात-तयार पॅकेजिंग',
    'export.h2.desc':
      'सर्व उत्पादने योग्य लेबलिंग, दस्तऐवजीकरण आणि अनुपालनासह आंतरराष्ट्रीय मानकांनुसार पॅक केली जातात।',
    'export.h3.title': 'जागतिक पोहोच',
    'export.h3.desc':
      'आम्ही आशिया, युरोप, मध्य पूर्व आणि त्यापलीकडे बाजारपेठांमध्ये निर्यात करतो।',
    'export.h4.title': 'गुणवत्ता प्रमाणित',
    'export.h4.desc':
      'आमच्या निर्यात प्रक्रिया कठोर गुणवत्ता आणि अन्न सुरक्षा मानकांचे पालन करतात।',
    // Social
    'social.label': 'जोडलेले राहा',
    'social.heading': 'आमच्या प्रवासाचे अनुसरण करा',
    'social.subheading':
      'आम्ही शेत कथा, उत्पादन अपडेट आणि निर्यात मैलाचे दगड सामायिक करण्यासाठी आमची सोशल उपस्थिती तयार करत आहोत।',
    'social.comingSoon': 'लवकरच येत आहे',
    'social.bottomNote': 'सोशल मीडिया लिंक लवकरच सक्रिय होतील. अपडेटसाठी परत तपासा!',
    'social.v1.title': 'शेतापासून निर्यातापर्यंत — आमची प्रक्रिया',
    'social.v1.desc':
      'आम्ही आमची मोरिंगा उत्पादने जागतिक निर्यातासाठी कशी सोर्स, प्रक्रिया आणि पॅक करतो याची एक झलक।',
    'social.v2.title': 'मोरिंगा कापणीचा हंगाम',
    'social.v2.desc':
      'आमच्या शेतकऱ्यांना आमच्या भागीदार शेतांमधून ताजी मोरिंगा पाने हाताने निवडताना पाहा।',
    'social.v3.title': 'गुणवत्ता आणि पॅकेजिंग मानके',
    'social.v3.desc':
      'आम्ही प्रत्येक बॅच आंतरराष्ट्रीय अन्न सुरक्षा मानकांची पूर्तता करतो याची खात्री कशी करतो ते पाहा।',
    // Contact
    'contact.label': 'संपर्क साधा',
    'contact.heading': 'एकत्र काम करूया',
    'contact.subheading':
      'आमच्या उत्पादनांमध्ये स्वारस्य आहे किंवा भागीदारीवर चर्चा करायची आहे? आम्हाला तुमच्याकडून ऐकायला आवडेल।',
    'contact.info.heading': 'संपर्क माहिती',
    'contact.address.label': 'पत्ता',
    'contact.address.value': 'True Origin Company LLP, महाराष्ट्र, भारत',
    'contact.phone.label': 'फोन',
    'contact.email.label': 'ईमेल',
    'contact.website': 'वेबसाइट',
    'contact.hours.label': 'व्यवसायाचे तास',
    'contact.hours.value': 'सोम – शनि: सकाळी 9:00 – संध्याकाळी 6:00 IST',
    'contact.form.heading': 'चौकशी पाठवा',
    'contact.form.name.label': 'पूर्ण नाव *',
    'contact.form.name.placeholder': 'तुमचे नाव',
    'contact.form.phone.label': 'फोन',
    'contact.form.email.label': 'ईमेल पत्ता *',
    'contact.form.message.label': 'संदेश *',
    'contact.form.message.placeholder': 'तुमच्या आवश्यकतांबद्दल सांगा...',
    'contact.form.submit': 'चौकशी पाठवा',
    'contact.success.heading': 'संदेश मिळाला!',
    'contact.success.message': 'संपर्क केल्याबद्दल धन्यवाद. आम्ही 24 तासांच्या आत तुमच्याशी संपर्क साधू।',
    // Footer
    'footer.tagline':
      'सचोटी, गुणवत्ता आणि काळजीसह निसर्गाची सर्वोत्तम नाशवंत आणि अनाशवंत खाद्य उत्पादने पोहोचवणे।',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.ourProducts': 'आमची उत्पादने',
    'footer.nav.home': 'मुख्यपृष्ठ',
    'footer.nav.about': 'आमच्याबद्दल',
    'footer.nav.exports': 'निर्यात',
    'footer.nav.products': 'उत्पादने',
    'footer.nav.contact': 'संपर्क',
    'footer.website': 'वेबसाइट:',
    'footer.copyright': '© {year} True Origin Company LLP. सर्व हक्क राखीव।',
    'footer.legal': 'कायदेशीर आणि माहिती',
    'footer.privacyPolicy': 'गोपनीयता धोरण',
    'footer.termsConditions': 'अटी आणि शर्ती',
    'footer.exportCertification': 'निर्यात प्रमाणन आणि तपशील',
    // Privacy Policy
    'privacy.title': 'गोपनीयता धोरण',
    'privacy.heading': 'गोपनीयता धोरण',
    'privacy.intro':
      'True Origin Company LLP तुमची वैयक्तिक माहिती आणि तुमच्या गोपनीयतेच्या अधिकाराचे संरक्षण करण्यासाठी वचनबद्ध आहे।',
    'privacy.s1.title': '1. आम्ही गोळा करतो ती माहिती',
    'privacy.s1.body':
      'आम्ही वैयक्तिक माहिती गोळा करू शकतो जी तुम्ही स्वेच्छेने आम्हाला प्रदान करता जेव्हा तुम्ही आमचा संपर्क किंवा चौकशी फॉर्म भरता।',
    'privacy.s2.title': '2. आम्ही तुमची माहिती कशी वापरतो',
    'privacy.s2.body':
      'आम्ही तुमची माहिती केवळ तुमच्या चौकशींना प्रतिसाद देण्यासाठी, व्यावसायिक संप्रेषण प्रक्रिया करण्यासाठी आणि आमच्या सेवा सुधारण्यासाठी वापरतो।',
    'privacy.s3.title': '3. कुकीज आणि ट्रॅकिंग',
    'privacy.s3.body':
      'आमची वेबसाइट तुमचा ब्राउझिंग अनुभव वाढवण्यासाठी कुकीज आणि तत्सम ट्रॅकिंग तंत्रज्ञान वापरू शकते।',
    'privacy.s4.title': '4. तृतीय-पक्ष सेवा',
    'privacy.s4.body':
      'आमच्या वेबसाइटमध्ये तृतीय-पक्ष वेबसाइट किंवा सेवांचे दुवे असू शकतात। आम्ही त्या तृतीय पक्षांच्या गोपनीयता पद्धतींसाठी जबाबदार नाही।',
    'privacy.s5.title': '5. डेटा सुरक्षा',
    'privacy.s5.body':
      'आम्ही तुमची वैयक्तिक माहिती अनधिकृत प्रवेश, बदल, प्रकटीकरण किंवा नाशापासून संरक्षित करण्यासाठी योग्य तांत्रिक आणि संस्थात्मक उपाय लागू करतो।',
    'privacy.s6.title': '6. तुमचे अधिकार',
    'privacy.s6.body':
      'तुम्हाला आमच्याकडे असलेल्या तुमच्या वैयक्तिक माहितीमध्ये प्रवेश करण्याचा, सुधारण्याचा किंवा हटवण्याची विनंती करण्याचा अधिकार आहे। info@trueoriginexports.com वर संपर्क करा।',
    'privacy.s7.title': '7. आमच्याशी संपर्क साधा',
    'privacy.s7.body':
      'या गोपनीयता धोरणाबद्दल कोणतेही प्रश्न असल्यास, कृपया आमच्याशी संपर्क साधा: info@trueoriginexports.com किंवा sales@trueoriginexports.com।',
    'privacy.effectiveDate': 'प्रभावी तारीख: 1 जानेवारी 2025',
    // Terms & Conditions
    'terms.title': 'अटी आणि शर्ती',
    'terms.heading': 'अटी आणि शर्ती',
    'terms.intro':
      'True Origin Company LLP वेबसाइट वापरण्यापूर्वी कृपया या अटी आणि शर्ती काळजीपूर्वक वाचा।',
    'terms.s1.title': '1. अटींची स्वीकृती',
    'terms.s1.body':
      'या वेबसाइटमध्ये प्रवेश करून आणि वापरून, तुम्ही या अटी आणि शर्ती आणि आमच्या गोपनीयता धोरणाने बांधील असण्यास स्वीकार करता।',
    'terms.s2.title': '2. वेबसाइटचा वापर',
    'terms.s2.body':
      'ही वेबसाइट केवळ माहितीपर आणि व्यावसायिक चौकशी उद्देशांसाठी आहे। तुम्ही ही वेबसाइट केवळ कायदेशीर उद्देशांसाठी वापरण्यास सहमत आहात।',
    'terms.s3.title': '3. बौद्धिक संपदा',
    'terms.s3.body':
      'या वेबसाइटवरील सर्व सामग्री True Origin Company LLP ची मालमत्ता आहे आणि लागू बौद्धिक संपदा कायद्यांद्वारे संरक्षित आहे।',
    'terms.s4.title': '4. उत्पादन माहिती अस्वीकरण',
    'terms.s4.body':
      'या वेबसाइटवरील उत्पादन वर्णने, तपशील आणि प्रतिमा केवळ माहितीपर उद्देशांसाठी प्रदान केल्या आहेत।',
    'terms.s5.title': '5. दायित्वाची मर्यादा',
    'terms.s5.body':
      'कायद्याने परवानगी दिलेल्या पूर्ण मर्यादेपर्यंत, True Origin Company LLP या वेबसाइटच्या तुमच्या वापरातून उद्भवणाऱ्या कोणत्याही अप्रत्यक्ष नुकसानासाठी जबाबदार नसेल।',
    'terms.s6.title': '6. शासी कायदा',
    'terms.s6.body':
      'या अटी आणि शर्ती भारताच्या कायद्यांद्वारे शासित आहेत। कोणतेही विवाद महाराष्ट्र, भारतातील न्यायालयांच्या अनन्य अधिकारक्षेत्राच्या अधीन असतील।',
    'terms.s7.title': '7. विवाद निराकरण',
    'terms.s7.body':
      'कोणत्याही विवादाच्या बाबतीत, दोन्ही पक्ष प्रथम सद्भावना वाटाघाटीद्वारे प्रकरण सोडवण्याचा प्रयत्न करण्यास सहमत आहेत।',
    'terms.s8.title': '8. संपर्क माहिती',
    'terms.s8.body':
      'या अटी आणि शर्तींबद्दल कोणत्याही प्रश्नांसाठी, कृपया आमच्याशी संपर्क साधा: info@trueoriginexports.com किंवा sales@trueoriginexports.com।',
    'terms.effectiveDate': 'प्रभावी तारीख: 1 जानेवारी 2025',
    // Export Certification
    'cert.title': 'निर्यात प्रमाणन, गुणवत्ता नियंत्रण आणि उत्पादन तपशील',
    'cert.heading': 'निर्यात प्रमाणन, गुणवत्ता नियंत्रण आणि उत्पादन तपशील',
    'cert.intro':
      'True Origin Company LLP निर्यात अनुपालन, गुणवत्ता आश्वासन आणि उत्पादन अखंडतेचे उच्चतम मानके राखते।',
    'cert.s1.title': 'निर्यात प्रमाणपत्रे',
    'cert.s1.intro':
      'आम्ही खालील आंतरराष्ट्रीय स्तरावर मान्यताप्राप्त प्रमाणपत्रे आणि अनुपालन चौकटींतर्गत काम करतो:',
    'cert.apeda.name': 'APEDA नोंदणी',
    'cert.apeda.desc':
      'कृषी आणि प्रक्रिया केलेल्या अन्न उत्पादन निर्यात विकास प्राधिकरण (APEDA), भारत सरकारकडे नोंदणीकृत।',
    'cert.fssai.name': 'FSSAI परवाना',
    'cert.fssai.desc':
      'भारतीय अन्न सुरक्षा आणि मानक प्राधिकरण (FSSAI) अंतर्गत परवानाधारक। हे सुनिश्चित करते की आमची सर्व उत्पादने भारतीय अन्न सुरक्षा मानकांची पूर्तता करतात।',
    'cert.phyto.name': 'फायटोसॅनिटरी प्रमाणपत्र',
    'cert.phyto.desc':
      'वनस्पती-आधारित उत्पादनांच्या प्रत्येक शिपमेंटसाठी भारताच्या वनस्पती अलग ठेवणे प्राधिकरणाद्वारे जारी केले जाते।',
    'cert.coo.name': 'उत्पत्तीचे प्रमाणपत्र',
    'cert.coo.desc':
      'संबंधित चेंबर ऑफ कॉमर्स किंवा निर्यात प्रोत्साहन परिषदाद्वारे जारी, हे प्रमाणित करते की आमची उत्पादने भारतातून उत्पन्न होतात।',
    'cert.haccp.name': 'HACCP अनुपालन',
    'cert.haccp.desc':
      'आमच्या प्रक्रिया आणि पॅकेजिंग ऑपरेशन्स HACCP तत्त्वांचे पालन करतात।',
    'cert.s2.title': 'गुणवत्ता नियंत्रण',
    'cert.s2.intro':
      'आमची गुणवत्ता नियंत्रण प्रक्रिया कठोर आणि पद्धतशीर आहे, शेत सोर्सिंगपासून अंतिम शिपमेंटपर्यंत प्रत्येक टप्पा समाविष्ट करते:',
    'cert.qc1.title': 'शेत सोर्सिंग मानके',
    'cert.qc1.desc':
      'आम्ही विशेषतः अशा सत्यापित शेतांशी भागीदारी करतो जे चांगल्या कृषी पद्धती (GAP) चे पालन करतात।',
    'cert.qc2.title': 'तपासणी आणि चाचणी',
    'cert.qc2.desc':
      'प्रत्येक बॅच दृश्य ग्रेडिंग, ओलावा सामग्री चाचणी, मायक्रोबियल विश्लेषण आणि कीटकनाशक अवशेष चाचणीसह बहु-टप्पा तपासणीतून जातो।',
    'cert.qc3.title': 'पॅकेजिंग आणि साठवण',
    'cert.qc3.desc':
      'उत्पादने अन्न-दर्जाच्या, निर्यात-अनुपालन पॅकेजिंग सामग्रीमध्ये पॅक केली जातात। नाशवंत उत्पादनांसाठी तापमान-नियंत्रित साठवण राखली जाते।',
    'cert.qc4.title': 'ट्रेसेबिलिटी',
    'cert.qc4.desc':
      'आम्ही शेतापासून अंतिम गंतव्यापर्यंत संपूर्ण ट्रेसेबिलिटी राखतो। प्रत्येक शिपमेंटला एक अद्वितीय बॅच कोड नियुक्त केला जातो।',
    'cert.s3.title': 'उत्पादन तपशील',
    'cert.s3.intro':
      'आमच्या प्रमुख निर्यात उत्पादनांसाठी तपशीलवार तपशील खाली दिले आहेत। विनंतीनुसार सानुकूल तपशील आणि पॅकेजिंगची व्यवस्था केली जाऊ शकते।',
    'cert.spec.scientificName': 'शास्त्रीय नाव',
    'cert.spec.form': 'स्वरूप',
    'cert.spec.color': 'रंग',
    'cert.spec.moisture': 'ओलावा सामग्री',
    'cert.spec.packaging': 'पॅकेजिंग पर्याय',
    'cert.spec.shelfLife': 'शेल्फ लाइफ',
    'cert.spec.grade': 'उपलब्ध दर्जा',
    'cert.p1.name': 'मोरिंगा पावडर',
    'cert.p1.scientificName': 'Moringa oleifera',
    'cert.p1.form': 'बारीक पावडर (80–100 मेश)',
    'cert.p1.color': 'गडद हिरवा ते ऑलिव्ह हिरवा',
    'cert.p1.moisture': '≤ 8%',
    'cert.p1.packaging': '100g, 250g, 500g, 1kg किरकोळ; 5kg, 10kg, 25kg थोक',
    'cert.p1.shelfLife': 'उत्पादन तारखेपासून 24 महिने',
    'cert.p1.grade': 'फूड ग्रेड / एक्सपोर्ट ग्रेड',
    'cert.p2.name': 'मोरिंगा वाळलेले पान',
    'cert.p2.scientificName': 'Moringa oleifera',
    'cert.p2.form': 'संपूर्ण वाळलेले पान / चुरलेले पान',
    'cert.p2.color': 'गडद हिरवा',
    'cert.p2.moisture': '≤ 10%',
    'cert.p2.packaging': '250g, 500g किरकोळ; 5kg, 10kg, 20kg थोक',
    'cert.p2.shelfLife': 'उत्पादन तारखेपासून 18 महिने',
    'cert.p2.grade': 'फूड ग्रेड / हर्बल ग्रेड',
    'cert.p3.name': 'कढीपत्ता (वाळलेला)',
    'cert.p3.scientificName': 'Murraya koenigii',
    'cert.p3.form': 'संपूर्ण वाळलेले पान',
    'cert.p3.color': 'ऑलिव्ह हिरवा ते गडद हिरवा',
    'cert.p3.moisture': '≤ 10%',
    'cert.p3.packaging': '100g, 250g किरकोळ; 5kg, 10kg थोक',
    'cert.p3.shelfLife': 'उत्पादन तारखेपासून 12 महिने',
    'cert.p3.grade': 'फूड ग्रेड / पाककला दर्जा',
    'cert.p4.name': 'भेंडी / लेडी फिंगर (ताजी)',
    'cert.p4.scientificName': 'Abelmoschus esculentus',
    'cert.p4.form': 'ताज्या संपूर्ण शेंगा',
    'cert.p4.color': 'चमकदार हिरवा',
    'cert.p4.moisture': 'N/A (ताजे उत्पादन)',
    'cert.p4.packaging': '500g, 1kg, 5kg कार्टन; सानुकूल थोक',
    'cert.p4.shelfLife': 'प्रशीतनात 7–10 दिवस (2–8°C)',
    'cert.p4.grade': 'ग्रेड A / एक्सपोर्ट ग्रेड',
  },
};
