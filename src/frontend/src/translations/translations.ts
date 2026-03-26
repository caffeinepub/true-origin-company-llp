export type Language = "en" | "hi" | "mr";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.aboutUs": "About Us",
    "nav.whyChooseUs": "Why Choose Us",
    "nav.products": "Products",
    "nav.exports": "Exports",
    "nav.exportCertification": "Export Certification",
    "nav.productSpecifications": "Product Specifications",
    "nav.contact": "Contact",
    "nav.exportCargo": "Export Cargo",
    "nav.social": "Social",
    "nav.getInTouch": "Get In Touch",
    "nav.privacyPolicy": "Privacy Policy",
    "nav.termsConditions": "Terms & Conditions",

    // Hero
    "hero.badge": "Premium Agricultural Exports",
    "hero.heading": "Pure Origin LLP",
    "hero.headline":
      "Premium Agricultural Exports From India to Global Markets",
    "hero.subheadline":
      "TrueOrigin Exports delivers high-quality, responsibly sourced natural food products with complete compliance, transparency, and reliable international logistics support.",
    "hero.tagline":
      "Bringing the finest Indian agricultural products to the world — with integrity, quality, and care.",
    "hero.ctaPrimary": "Explore Our Products",
    "hero.ctaSecondary": "Contact Us",
    "hero.ctaRequestSpecs": "Request Product Specifications",
    "hero.ctaContactSales": "Contact Sales",

    // About
    "about.sectionLabel": "Our Story",
    "about.heading": "Rooted in Tradition, Growing for the World",
    "about.body":
      "Pure Origin LLP is a professionally managed agricultural export company based in India. We specialize in sourcing, processing, and exporting premium quality moringa, curry leaves, fresh vegetables, and other natural food products to international markets. Our team combines deep agricultural expertise with rigorous quality standards to ensure every shipment meets the expectations of our global partners.",
    "about.paragraph1":
      "Pure Origin LLP was founded with a singular vision: to bring the authentic flavors and nutritional richness of Indian agriculture to global markets. Based in India, we work directly with local farmers to source the finest moringa, curry leaves, and fresh vegetables.",
    "about.paragraph2":
      "Our commitment to quality begins at the farm and extends through every step of processing, packaging, and export. We believe that the best products come from the best practices — sustainable farming, fair trade, and meticulous quality control.",
    "about.operationsHeading": "Our Operations",
    "about.op1":
      "Direct farm sourcing from verified agricultural partners across India",
    "about.op2":
      "In-house processing, cleaning, and grading to international export standards",
    "about.op3":
      "Comprehensive quality testing and third-party lab certification",
    "about.op4":
      "Export-grade packaging with full documentation and compliance support",
    "about.op5": "End-to-end logistics coordination for timely global delivery",
    "about.checklistQuality": "✔ Quality Assured",
    "about.checklistDocumentation": "✔ Export Documentation Ready",
    "about.checklistShipping": "✔ Global Shipping Support",
    "about.visionHeading": "Our Vision",
    "about.visionText":
      "To become a globally trusted supplier of premium Indian agricultural products.",
    "about.missionHeading": "Our Mission",
    "about.missionText":
      "To deliver safe, high-quality, and compliant products while creating long-term value for our international partners.",
    "about.closingStatement":
      "From the farms of India to tables around the world — quality you can trust.",
    "about.stat1Label": "Years of Experience",
    "about.stat2Label": "Export Countries",
    "about.stat3Label": "Farmer Partners",
    "about.stat4Label": "Quality Certified",
    "about.value1Title": "Farm to Export",
    "about.value1Desc":
      "Direct sourcing from verified farms ensures freshness and traceability at every step.",
    "about.value2Title": "Quality Assured",
    "about.value2Desc":
      "Rigorous testing and certification processes guarantee international standards.",
    "about.value3Title": "Sustainable Practices",
    "about.value3Desc":
      "Environmentally responsible farming and packaging for a better tomorrow.",
    "about.value4Title": "Global Reach",
    "about.value4Desc":
      "Established export networks connecting Indian farms to international markets.",

    // Products
    "products.sectionLabel": "Our Products",
    "products.heading": "Premium Agricultural Products",
    "products.subheading":
      "Sourced directly from India's finest farms, our products meet the highest international quality standards.",
    "products.supportingLine":
      "Each product is processed, tested, and packed according to international export standards.",
    "products.moringaTitle": "Moringa Leaf Powder",
    "products.moringaDesc":
      "Premium quality moringa leaf powder, rich in nutrients and carefully processed to preserve natural goodness. Available in export-grade packaging.",
    "products.curryLeavesTitle": "Curry Leaves",
    "products.curryLeavesDesc":
      "Fresh and dried curry leaves with intense aroma, sourced from dedicated farms in India. Vacuum-sealed for maximum freshness.",
    "products.freshVegetablesTitle": "Fresh Vegetables",
    "products.freshVegetablesDesc":
      "Seasonal fresh vegetables including okra, bitter gourd, and more — export-ready and quality certified for international markets.",
    "products.customSourcingTitle": "Custom Sourcing",
    "products.customSourcingDesc":
      "Tailored agricultural sourcing solutions for buyers with specific product, volume, or certification requirements. Contact us to discuss your needs.",
    "products.ctaViewSpecs": "View Product Specifications",
    "products.farmSubheading": "From Our Farms",
    "products.moringaFarmLabel": "Moringa Farm",
    "products.curryLeavesFarmLabel": "Curry Leaves Farm",
    "products.okraFarmLabel": "Okra Farm",
    "products.moringa.name": "Moringa Leaf Powder",
    "products.moringa.desc":
      "Premium quality moringa leaf powder, rich in nutrients and carefully processed to preserve natural goodness.",
    "products.moringa.badge": "Export Grade",
    "products.curry.name": "Curry Leaves",
    "products.curry.desc":
      "Fresh and dried curry leaves with intense aroma, sourced from dedicated farms in India.",
    "products.curry.badge": "Fresh & Dried",
    "products.vegetables.name": "Fresh Vegetables",
    "products.vegetables.desc":
      "Seasonal fresh vegetables including okra, bitter gourd, and more, export-ready and quality certified.",
    "products.vegetables.badge": "Seasonal",
    "products.farms.heading": "Straight From Our Farms",
    "products.farms.moringa.alt": "Moringa farm in India",
    "products.farms.moringa.label": "Moringa Farm",
    "products.farms.curry.alt": "Curry leaves farm in India",
    "products.farms.curry.label": "Curry Leaves Farm",
    "products.farms.okra.alt": "Okra farm in India",
    "products.farms.okra.label": "Okra Farm",
    "products.moringaFarmAlt": "Moringa farm in India",
    "products.curryLeavesFarmAlt": "Curry leaves farm in India",
    "products.okraFarmAlt": "Okra farm in India",

    // Export Cargo
    "exportCargo.sectionLabel": "Export Operations",
    "exportCargo.heading": "Global Export Cargo",
    "exportCargo.subheading":
      "Reliable, certified, and timely delivery of premium agricultural products to markets worldwide.",
    "exportCargo.imageAlt": "Export cargo ship",
    "exportCargo.highlight1Title": "Export Documentation",
    "exportCargo.highlight1Desc":
      "Complete and compliant export documentation including certificates of origin, phytosanitary certificates, and lab test reports for every shipment.",
    "exportCargo.highlight2Title": "Secure Packaging",
    "exportCargo.highlight2Desc":
      "Export-grade packaging with food-safe materials, tamper-evident sealing, and proper labeling to meet international transit and import requirements.",
    "exportCargo.highlight3Title": "Global Reach",
    "exportCargo.highlight3Desc":
      "Established shipping routes and logistics partnerships connecting our indian farms to buyers across Asia, Europe, the Middle East, and beyond.",
    "exportCargo.highlight1.title": "Certified Packaging",
    "exportCargo.highlight1.desc":
      "Export-grade packaging meeting international standards for safe transit.",
    "exportCargo.highlight2.title": "Timely Delivery",
    "exportCargo.highlight2.desc":
      "Reliable logistics ensuring your orders arrive on schedule.",
    "exportCargo.highlight3.title": "Global Network",
    "exportCargo.highlight3.desc":
      "Established shipping routes to major markets across the globe.",

    // Export Certification
    "exportCert.pageTitle":
      "Export Certification, Quality Control & Product Specifications",
    "exportCert.pageSubtitle": "Certified Excellence in Agricultural Exports",
    "exportCert.certSection": "Export Certifications",
    "exportCert.apeda.name": "APEDA Registration",
    "exportCert.apeda.desc":
      "Registered with the Agricultural and Processed Food Products Export Development Authority, ensuring compliance with Indian agricultural export standards and regulations.",
    "exportCert.fssai.name": "FSSAI Certification",
    "exportCert.fssai.desc":
      "Food Safety and Standards Authority of India certified, guaranteeing adherence to food safety and quality standards for domestic and international markets.",
    "exportCert.organic.name": "Organic Certification",
    "exportCert.organic.desc":
      "Certified organic by recognized certification bodies, ensuring our products meet international organic farming and processing standards.",
    "exportCert.phyto.name": "Phytosanitary Certificate",
    "exportCert.phyto.desc":
      "Plant health certificates issued by authorized agencies, certifying that plant products are free from quarantine pests and meet importing country requirements.",
    "exportCert.origin.name": "Certificate of Origin",
    "exportCert.origin.desc":
      "Official trade documents confirming the country of origin of our products, facilitating customs clearance and compliance with trade agreements.",
    "exportCert.lab.name": "Lab Test Reports",
    "exportCert.lab.desc":
      "Comprehensive laboratory analysis reports from accredited facilities, verifying product quality, safety parameters, and nutritional content.",
    "exportCert.qcSection": "Quality Control",
    "exportCert.qc1.title": "Sourcing Standards",
    "exportCert.qc1.desc":
      "We source only from verified farms that meet our strict quality and safety criteria.",
    "exportCert.qc2.title": "Incoming Inspection",
    "exportCert.qc2.desc":
      "Every batch undergoes thorough inspection upon arrival at our facility.",
    "exportCert.qc3.title": "Lab Testing",
    "exportCert.qc3.desc":
      "Comprehensive testing for contaminants, moisture, and quality parameters.",
    "exportCert.qc4.title": "Packaging Protocols",
    "exportCert.qc4.desc":
      "Food-grade materials and tamper-evident sealing for maximum product integrity.",
    "exportCert.qc5.title": "Storage Standards",
    "exportCert.qc5.desc":
      "Climate-controlled facilities maintaining optimal conditions for each product.",
    "exportCert.qc6.title": "Traceability",
    "exportCert.qc6.desc":
      "Complete batch traceability from farm to final shipment.",
    "exportCert.specsSection": "Product Specifications",
    "exportCert.moringa.title": "Moringa Leaf Powder – Export Grade",
    "exportCert.moringa.packaging":
      "1 kg / 5 kg / 25 kg, food-grade inner lining, export-ready cartons",
    "exportCert.moringa.docs":
      "COA, Lab Test Report, Phytosanitary Certificate, Invoice & Packing List",
    "exportCert.curry.title": "Curry Leaves – Dried Export Grade",
    "exportCert.curry.packaging":
      "500 g / 1 kg / 5 kg, vacuum-sealed pouches, cartons for export",
    "exportCert.curry.docs":
      "COA, Lab Test Report, Phytosanitary Certificate, Invoice & Packing List",
    "exportCert.vegetables.title": "Fresh Vegetables – Export Grade",
    "exportCert.vegetables.packaging":
      "Variety-specific packaging, ventilated cartons, cold-chain ready",
    "exportCert.vegetables.docs":
      "COA, Lab Test Report, Phytosanitary Certificate, Invoice & Packing List",
    "exportCert.packagingLabel": "Packaging Options",
    "exportCert.docsLabel": "Documentation Provided",
    "exportCert.contactCta": "Need detailed specifications for your order?",
    "exportCert.contactBtn": "Request Specification Sheet",

    // Social Media
    "social.sectionLabel": "Follow Us",
    "social.heading": "Stay Connected",
    "social.video1Title": "Coming Soon",
    "social.video1Desc": "Our latest updates will be available here soon.",
    "social.video2Title": "Coming Soon",
    "social.video2Desc": "Stay tuned for our product highlights.",
    "social.video3Title": "Coming Soon",
    "social.video3Desc": "Follow us for farm and export updates.",
    "social.video1.title": "Farm to Export",
    "social.video1.desc": "Watch our journey from farm to export.",
    "social.video2.title": "Quality Process",
    "social.video2.desc": "See our quality control in action.",
    "social.comingSoon": "Coming Soon",
    "social.bottomNote": "Follow us on social media for the latest updates.",

    // Contact
    "contact.label": "Get In Touch",
    "contact.heading": "Contact Us",
    "contact.subheading":
      "Reach out to us for export inquiries, product information, or partnership opportunities.",
    "contact.info.heading": "Contact Information",
    "contact.info.address": "India",
    "contact.info.phone": "+91 97733 03026",
    "contact.info.email": "info@pureoriginexports.com",
    "contact.info.website": "www.pureoriginexports.com",
    "contact.info.hours": "Mon–Sat: 9:00 AM – 6:00 PM IST",
    "contact.address.label": "Address",
    "contact.address.value": "India",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.website": "Website",
    "contact.hours.label": "Business Hours",
    "contact.hours.value": "Monday – Saturday, 9:00 AM – 6:00 PM IST",
    "contact.form.heading": "Send an Enquiry",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.company": "Company Name",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.emailPlaceholder": "Enter your email",
    "contact.form.companyPlaceholder": "Enter your company name",
    "contact.form.messagePlaceholder": "Tell us about your requirements...",
    "contact.success.title": "Message Sent!",
    "contact.success.desc":
      "Thank you for reaching out. We will get back to you shortly.",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated: January 2025",
    "privacy.intro":
      "Pure Origin LLP is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.",
    "privacy.section1Title": "Information We Collect",
    "privacy.section1Content":
      "We collect information you provide directly to us, such as when you fill out our contact form, request product specifications, or communicate with us via email or phone. This may include your name, email address, company name, phone number, and any other information you choose to provide.",
    "privacy.section2Title": "How We Use Your Information",
    "privacy.section2Content":
      "We use the information we collect to respond to your inquiries, provide product information and export documentation, process business transactions, improve our services, and comply with legal obligations.",
    "privacy.section3Title": "Information Sharing",
    "privacy.section3Content":
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to fulfill business transactions you have requested.",
    "privacy.section4Title": "Data Security",
    "privacy.section4Content":
      "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    "privacy.section5Title": "Cookies",
    "privacy.section5Content":
      "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.",
    "privacy.section6Title": "Your Rights",
    "privacy.section6Content":
      "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@pureoriginexports.com.",
    "privacy.section7Title": "Contact Us",
    "privacy.section7Content":
      "If you have questions about this Privacy Policy, please contact us at info@pureoriginexports.com or write to us at our registered address in India.",

    // Terms & Conditions
    "terms.title": "Terms & Conditions",
    "terms.pageTitle": "Terms & Conditions",
    "terms.lastUpdated": "Last Updated: January 2025",
    "terms.intro":
      "By accessing and using the Pure Origin LLP website, you accept and agree to be bound by the following terms and conditions.",
    "terms.section1Title": "Acceptance of Terms",
    "terms.section1Content":
      "By using this website, you confirm that you are at least 18 years of age and agree to comply with all applicable laws and regulations.",
    "terms.section2Title": "Products and Services",
    "terms.section2Content":
      "Pure Origin LLP provides agricultural export products and related services. All product descriptions, specifications, and pricing are subject to change without notice.",
    "terms.section3Title": "Export Compliance",
    "terms.section3Content":
      "All exports are conducted in compliance with Indian export regulations and the import regulations of the destination country. Buyers are responsible for ensuring compliance with their local import laws.",
    "terms.section4Title": "Intellectual Property",
    "terms.section4Content":
      "All content on this website, including text, images, logos, and graphics, is the property of Pure Origin LLP and is protected by applicable intellectual property laws.",
    "terms.section5Title": "Limitation of Liability",
    "terms.section5Content":
      "Pure Origin LLP shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the value of the transaction.",
    "terms.section6Title": "Governing Law",
    "terms.section6Content":
      "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.",
    "terms.section7Title": "Changes to Terms",
    "terms.section7Content":
      "We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.",
    "terms.section8Title": "Contact",
    "terms.section8Content":
      "For questions about these Terms & Conditions, please contact us at info@pureoriginexports.com.",
  },

  hi: {
    // Nav
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.aboutUs": "हमारे बारे में",
    "nav.whyChooseUs": "हमें क्यों चुनें",
    "nav.products": "उत्पाद",
    "nav.exports": "निर्यात",
    "nav.exportCertification": "निर्यात प्रमाणन",
    "nav.productSpecifications": "उत्पाद विशिष्टताएं",
    "nav.contact": "संपर्क",
    "nav.exportCargo": "निर्यात कार्गो",
    "nav.social": "सोशल",
    "nav.getInTouch": "संपर्क करें",
    "nav.privacyPolicy": "गोपनीयता नीति",
    "nav.termsConditions": "नियम और शर्तें",

    // Hero
    "hero.badge": "प्रीमियम कृषि निर्यात",
    "hero.heading": "ट्रू ओरिजिन कंपनी एलएलपी",
    "hero.headline": "भारत से वैश्विक बाजारों तक प्रीमियम कृषि निर्यात",
    "hero.subheadline":
      "ट्रूओरिजिन एक्सपोर्ट्स उच्च गुणवत्ता, जिम्मेदारी से प्राप्त प्राकृतिक खाद्य उत्पाद प्रदान करता है।",
    "hero.tagline":
      "भारत के सर्वश्रेष्ठ कृषि उत्पादों को दुनिया तक पहुंचाना — ईमानदारी, गुणवत्ता और देखभाल के साथ।",
    "hero.ctaPrimary": "हमारे उत्पाद देखें",
    "hero.ctaSecondary": "संपर्क करें",
    "hero.ctaRequestSpecs": "उत्पाद विशिष्टताएं अनुरोध करें",
    "hero.ctaContactSales": "बिक्री से संपर्क करें",

    // About
    "about.sectionLabel": "हमारी कहानी",
    "about.heading": "परंपरा में जड़ें, दुनिया के लिए बढ़ते हुए",
    "about.body":
      "ट्रू ओरिजिन कंपनी एलएलपी महाराष्ट्र, भारत में स्थित एक पेशेवर रूप से प्रबंधित कृषि निर्यात कंपनी है।",
    "about.paragraph1":
      "ट्रू ओरिजिन कंपनी एलएलपी की स्थापना एक विशेष दृष्टि के साथ की गई थी: भारतीय कृषि के प्रामाणिक स्वाद और पोषण संपदा को वैश्विक बाजारों तक पहुंचाना।",
    "about.paragraph2":
      "गुणवत्ता के प्रति हमारी प्रतिबद्धता खेत से शुरू होती है और प्रसंस्करण, पैकेजिंग और निर्यात के हर चरण तक फैली हुई है।",
    "about.operationsHeading": "हमारे संचालन",
    "about.op1": "महाराष्ट्र भर में सत्यापित कृषि भागीदारों से सीधी खेत सोर्सिंग",
    "about.op2": "अंतर्राष्ट्रीय निर्यात मानकों के लिए इन-हाउस प्रसंस्करण, सफाई और ग्रेडिंग",
    "about.op3": "व्यापक गुणवत्ता परीक्षण और तृतीय-पक्ष प्रयोगशाला प्रमाणन",
    "about.op4": "पूर्ण दस्तावेज़ीकरण और अनुपालन समर्थन के साथ निर्यात-ग्रेड पैकेजिंग",
    "about.op5": "समय पर वैश्विक डिलीवरी के लिए एंड-टू-एंड लॉजिस्टिक्स समन्वय",
    "about.checklistQuality": "✔ गुणवत्ता सुनिश्चित",
    "about.checklistDocumentation": "✔ निर्यात दस्तावेज़ीकरण तैयार",
    "about.checklistShipping": "✔ वैश्विक शिपिंग समर्थन",
    "about.visionHeading": "हमारी दृष्टि",
    "about.visionText":
      "प्रीमियम भारतीय कृषि उत्पादों का वैश्विक स्तर पर विश्वसनीय आपूर्तिकर्ता बनना।",
    "about.missionHeading": "हमारा मिशन",
    "about.missionText": "सुरक्षित, उच्च गुणवत्ता और अनुपालन उत्पाद प्रदान करना।",
    "about.closingStatement":
      "महाराष्ट्र के खेतों से दुनिया भर की मेजों तक — वह गुणवत्ता जिस पर आप भरोसा कर सकते हैं।",
    "about.stat1Label": "अनुभव के वर्ष",
    "about.stat2Label": "निर्यात देश",
    "about.stat3Label": "किसान भागीदार",
    "about.stat4Label": "गुणवत्ता प्रमाणित",
    "about.value1Title": "खेत से निर्यात",
    "about.value1Desc":
      "सत्यापित खेतों से सीधी सोर्सिंग हर कदम पर ताजगी और ट्रेसेबिलिटी सुनिश्चित करती है।",
    "about.value2Title": "गुणवत्ता सुनिश्चित",
    "about.value2Desc":
      "कठोर परीक्षण और प्रमाणन प्रक्रियाएं अंतर्राष्ट्रीय मानकों की गारंटी देती हैं।",
    "about.value3Title": "टिकाऊ प्रथाएं",
    "about.value3Desc": "बेहतर कल के लिए पर्यावरण के प्रति जिम्मेदार खेती और पैकेजिंग।",
    "about.value4Title": "वैश्विक पहुंच",
    "about.value4Desc":
      "भारतीय खेतों को अंतर्राष्ट्रीय बाजारों से जोड़ने वाले स्थापित निर्यात नेटवर्क।",

    // Products
    "products.sectionLabel": "हमारे उत्पाद",
    "products.heading": "प्रीमियम कृषि उत्पाद",
    "products.subheading":
      "महाराष्ट्र के सर्वश्रेष्ठ खेतों से सीधे प्राप्त, हमारे उत्पाद उच्चतम अंतर्राष्ट्रीय गुणवत्ता मानकों को पूरा करते हैं।",
    "products.supportingLine":
      "प्रत्येक उत्पाद को अंतर्राष्ट्रीय निर्यात मानकों के अनुसार संसाधित, परीक्षण और पैक किया जाता है।",
    "products.moringaTitle": "मोरिंगा पत्ती पाउडर",
    "products.moringaDesc":
      "प्रीमियम गुणवत्ता मोरिंगा पत्ती पाउडर, पोषक तत्वों से भरपूर।",
    "products.curryLeavesTitle": "करी पत्ते",
    "products.curryLeavesDesc": "तीव्र सुगंध के साथ ताजे और सूखे करी पत्ते।",
    "products.freshVegetablesTitle": "ताजी सब्जियां",
    "products.freshVegetablesDesc":
      "मौसमी ताजी सब्जियां जिनमें भिंडी, करेला और अधिक शामिल हैं।",
    "products.customSourcingTitle": "कस्टम सोर्सिंग",
    "products.customSourcingDesc":
      "विशिष्ट उत्पाद, मात्रा या प्रमाणन आवश्यकताओं वाले खरीदारों के लिए अनुकूलित कृषि सोर्सिंग समाधान।",
    "products.ctaViewSpecs": "उत्पाद विशिष्टताएं देखें",
    "products.farmSubheading": "हमारे खेतों से",
    "products.moringaFarmLabel": "मोरिंगा फार्म",
    "products.curryLeavesFarmLabel": "करी पत्ते फार्म",
    "products.okraFarmLabel": "भिंडी फार्म",
    "products.moringa.name": "मोरिंगा पत्ती पाउडर",
    "products.moringa.desc":
      "प्रीमियम गुणवत्ता मोरिंगा पत्ती पाउडर, पोषक तत्वों से भरपूर।",
    "products.moringa.badge": "निर्यात ग्रेड",
    "products.curry.name": "करी पत्ते",
    "products.curry.desc": "तीव्र सुगंध के साथ ताजे और सूखे करी पत्ते।",
    "products.curry.badge": "ताजे और सूखे",
    "products.vegetables.name": "ताजी सब्जियां",
    "products.vegetables.desc":
      "मौसमी ताजी सब्जियां, निर्यात-तैयार और गुणवत्ता प्रमाणित।",
    "products.vegetables.badge": "मौसमी",
    "products.farms.heading": "सीधे हमारे खेतों से",
    "products.farms.moringa.alt": "महाराष्ट्र में मोरिंगा फार्म",
    "products.farms.moringa.label": "मोरिंगा फार्म",
    "products.farms.curry.alt": "महाराष्ट्र में करी पत्ते फार्म",
    "products.farms.curry.label": "करी पत्ते फार्म",
    "products.farms.okra.alt": "महाराष्ट्र में भिंडी फार्म",
    "products.farms.okra.label": "भिंडी फार्म",
    "products.moringaFarmAlt": "महाराष्ट्र में मोरिंगा फार्म",
    "products.curryLeavesFarmAlt": "महाराष्ट्र में करी पत्ते फार्म",
    "products.okraFarmAlt": "महाराष्ट्र में भिंडी फार्म",

    // Export Cargo
    "exportCargo.sectionLabel": "निर्यात संचालन",
    "exportCargo.heading": "वैश्विक निर्यात कार्गो",
    "exportCargo.subheading":
      "दुनिया भर के बाजारों में प्रीमियम कृषि उत्पादों की विश्वसनीय, प्रमाणित और समय पर डिलीवरी।",
    "exportCargo.imageAlt": "निर्यात कार्गो जहाज",
    "exportCargo.highlight1Title": "निर्यात दस्तावेज़ीकरण",
    "exportCargo.highlight1Desc":
      "हर शिपमेंट के लिए पूर्ण और अनुपालन निर्यात दस्तावेज़ीकरण।",
    "exportCargo.highlight2Title": "सुरक्षित पैकेजिंग",
    "exportCargo.highlight2Desc": "खाद्य-सुरक्षित सामग्री के साथ निर्यात-ग्रेड पैकेजिंग।",
    "exportCargo.highlight3Title": "वैश्विक पहुंच",
    "exportCargo.highlight3Desc":
      "एशिया, यूरोप, मध्य पूर्व और उससे परे खरीदारों से जुड़े स्थापित शिपिंग मार्ग।",
    "exportCargo.highlight1.title": "प्रमाणित पैकेजिंग",
    "exportCargo.highlight1.desc":
      "सुरक्षित पारगमन के लिए अंतर्राष्ट्रीय मानकों को पूरा करने वाली निर्यात-ग्रेड पैकेजिंग।",
    "exportCargo.highlight2.title": "समय पर डिलीवरी",
    "exportCargo.highlight2.desc":
      "विश्वसनीय लॉजिस्टिक्स यह सुनिश्चित करता है कि आपके ऑर्डर समय पर पहुंचें।",
    "exportCargo.highlight3.title": "वैश्विक नेटवर्क",
    "exportCargo.highlight3.desc":
      "दुनिया भर के प्रमुख बाजारों तक स्थापित शिपिंग मार्ग।",

    // Export Certification
    "exportCert.pageTitle": "निर्यात प्रमाणन, गुणवत्ता नियंत्रण एवं उत्पाद विशिष्टताएं",
    "exportCert.pageSubtitle": "कृषि निर्यात में प्रमाणित उत्कृष्टता",
    "exportCert.certSection": "निर्यात प्रमाणन",
    "exportCert.apeda.name": "APEDA पंजीकरण",
    "exportCert.apeda.desc":
      "कृषि और प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण के साथ पंजीकृत।",
    "exportCert.fssai.name": "FSSAI प्रमाणन",
    "exportCert.fssai.desc": "भारतीय खाद्य सुरक्षा और मानक प्राधिकरण प्रमाणित।",
    "exportCert.organic.name": "जैविक प्रमाणन",
    "exportCert.organic.desc": "मान्यता प्राप्त प्रमाणन निकायों द्वारा जैविक प्रमाणित।",
    "exportCert.phyto.name": "फाइटोसैनिटरी प्रमाणपत्र",
    "exportCert.phyto.desc": "अधिकृत एजेंसियों द्वारा जारी पौधे स्वास्थ्य प्रमाणपत्र।",
    "exportCert.origin.name": "उत्पत्ति प्रमाणपत्र",
    "exportCert.origin.desc":
      "हमारे उत्पादों के मूल देश की पुष्टि करने वाले आधिकारिक व्यापार दस्तावेज।",
    "exportCert.lab.name": "प्रयोगशाला परीक्षण रिपोर्ट",
    "exportCert.lab.desc":
      "मान्यता प्राप्त सुविधाओं से व्यापक प्रयोगशाला विश्लेषण रिपोर्ट।",
    "exportCert.qcSection": "गुणवत्ता नियंत्रण",
    "exportCert.qc1.title": "सोर्सिंग मानक",
    "exportCert.qc1.desc": "हम केवल सत्यापित खेतों से सोर्स करते हैं।",
    "exportCert.qc2.title": "आने वाला निरीक्षण",
    "exportCert.qc2.desc":
      "प्रत्येक बैच हमारी सुविधा पर आने पर गहन निरीक्षण से गुजरता है।",
    "exportCert.qc3.title": "प्रयोगशाला परीक्षण",
    "exportCert.qc3.desc":
      "दूषित पदार्थों, नमी और गुणवत्ता मापदंडों के लिए व्यापक परीक्षण।",
    "exportCert.qc4.title": "पैकेजिंग प्रोटोकॉल",
    "exportCert.qc4.desc": "अधिकतम उत्पाद अखंडता के लिए खाद्य-ग्रेड सामग्री।",
    "exportCert.qc5.title": "भंडारण मानक",
    "exportCert.qc5.desc":
      "प्रत्येक उत्पाद के लिए इष्टतम स्थिति बनाए रखने वाली जलवायु-नियंत्रित सुविधाएं।",
    "exportCert.qc6.title": "ट्रेसेबिलिटी",
    "exportCert.qc6.desc": "खेत से अंतिम शिपमेंट तक पूर्ण बैच ट्रेसेबिलिटी।",
    "exportCert.specsSection": "उत्पाद विशिष्टताएं",
    "exportCert.moringa.title": "मोरिंगा पत्ती पाउडर – निर्यात ग्रेड",
    "exportCert.moringa.packaging":
      "1 किग्रा / 5 किग्रा / 25 किग्रा, खाद्य-ग्रेड आंतरिक अस्तर, निर्यात-तैयार कार्टन",
    "exportCert.moringa.docs":
      "COA, प्रयोगशाला परीक्षण रिपोर्ट, फाइटोसैनिटरी प्रमाणपत्र, चालान और पैकिंग सूची",
    "exportCert.curry.title": "करी पत्ते – सूखे निर्यात ग्रेड",
    "exportCert.curry.packaging":
      "500 ग्राम / 1 किग्रा / 5 किग्रा, वैक्यूम-सीलबंद पाउच, निर्यात के लिए कार्टन",
    "exportCert.curry.docs":
      "COA, प्रयोगशाला परीक्षण रिपोर्ट, फाइटोसैनिटरी प्रमाणपत्र, चालान और पैकिंग सूची",
    "exportCert.vegetables.title": "ताजी सब्जियां – निर्यात ग्रेड",
    "exportCert.vegetables.packaging":
      "विविधता-विशिष्ट पैकेजिंग, हवादार कार्टन, कोल्ड-चेन तैयार",
    "exportCert.vegetables.docs":
      "COA, प्रयोगशाला परीक्षण रिपोर्ट, फाइटोसैनिटरी प्रमाणपत्र, चालान और पैकिंग सूची",
    "exportCert.packagingLabel": "पैकेजिंग विकल्प",
    "exportCert.docsLabel": "प्रदान किए गए दस्तावेज़",
    "exportCert.contactCta": "आपके ऑर्डर के लिए विस्तृत विशिष्टताएं चाहिए?",
    "exportCert.contactBtn": "विशिष्टता शीट का अनुरोध करें",

    // Social Media
    "social.sectionLabel": "हमें फॉलो करें",
    "social.heading": "जुड़े रहें",
    "social.video1Title": "जल्द आ रहा है",
    "social.video1Desc": "हमारे नवीनतम अपडेट यहां जल्द उपलब्ध होंगे।",
    "social.video2Title": "जल्द आ रहा है",
    "social.video2Desc": "हमारे उत्पाद हाइलाइट्स के लिए बने रहें।",
    "social.video3Title": "जल्द आ रहा है",
    "social.video3Desc": "खेत और निर्यात अपडेट के लिए हमें फॉलो करें।",
    "social.video1.title": "खेत से निर्यात",
    "social.video1.desc": "खेत से निर्यात तक हमारी यात्रा देखें।",
    "social.video2.title": "गुणवत्ता प्रक्रिया",
    "social.video2.desc": "हमारे गुणवत्ता नियंत्रण को कार्य में देखें।",
    "social.comingSoon": "जल्द आ रहा है",
    "social.bottomNote": "नवीनतम अपडेट के लिए सोशल मीडिया पर हमें फॉलो करें।",

    // Contact
    "contact.label": "संपर्क करें",
    "contact.heading": "हमसे संपर्क करें",
    "contact.subheading":
      "निर्यात पूछताछ, उत्पाद जानकारी या साझेदारी के अवसरों के लिए हमसे संपर्क करें।",
    "contact.info.heading": "संपर्क जानकारी",
    "contact.info.address": "महाराष्ट्र, भारत",
    "contact.info.phone": "+91 97733 03026",
    "contact.info.email": "info@pureoriginexports.com",
    "contact.info.website": "www.pureoriginexports.com",
    "contact.info.hours": "सोम–शनि: सुबह 9:00 – शाम 6:00 IST",
    "contact.address.label": "पता",
    "contact.address.value": "महाराष्ट्र, भारत",
    "contact.phone.label": "फोन",
    "contact.email.label": "ईमेल",
    "contact.website": "वेबसाइट",
    "contact.hours.label": "व्यापार के घंटे",
    "contact.hours.value": "सोमवार – शनिवार, सुबह 9:00 – शाम 6:00 IST",
    "contact.form.heading": "पूछताछ भेजें",
    "contact.form.name": "आपका नाम",
    "contact.form.email": "आपका ईमेल",
    "contact.form.company": "कंपनी का नाम",
    "contact.form.message": "आपका संदेश",
    "contact.form.submit": "संदेश भेजें",
    "contact.form.namePlaceholder": "अपना नाम दर्ज करें",
    "contact.form.emailPlaceholder": "अपना ईमेल दर्ज करें",
    "contact.form.companyPlaceholder": "अपनी कंपनी का नाम दर्ज करें",
    "contact.form.messagePlaceholder": "अपनी आवश्यकताओं के बारे में बताएं...",
    "contact.success.title": "संदेश भेजा गया!",
    "contact.success.desc": "संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।",

    // Privacy Policy
    "privacy.title": "गोपनीयता नीति",
    "privacy.lastUpdated": "अंतिम अपडेट: जनवरी 2025",
    "privacy.intro":
      "ट्रू ओरिजिन कंपनी एलएलपी आपकी गोपनीयता की रक्षा करने के लिए प्रतिबद्ध है।",
    "privacy.section1Title": "हम जो जानकारी एकत्र करते हैं",
    "privacy.section1Content":
      "हम वह जानकारी एकत्र करते हैं जो आप सीधे हमें प्रदान करते हैं।",
    "privacy.section2Title": "हम आपकी जानकारी का उपयोग कैसे करते हैं",
    "privacy.section2Content":
      "हम आपकी पूछताछ का जवाब देने के लिए एकत्रित जानकारी का उपयोग करते हैं।",
    "privacy.section3Title": "जानकारी साझा करना",
    "privacy.section3Content":
      "हम आपकी सहमति के बिना आपकी व्यक्तिगत जानकारी तीसरे पक्ष को नहीं बेचते।",
    "privacy.section4Title": "डेटा सुरक्षा",
    "privacy.section4Content":
      "हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं।",
    "privacy.section5Title": "कुकीज़",
    "privacy.section5Content":
      "हमारी वेबसाइट आपके ब्राउज़िंग अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग कर सकती है।",
    "privacy.section6Title": "आपके अधिकार",
    "privacy.section6Content":
      "आपको अपनी व्यक्तिगत जानकारी तक पहुंचने, सुधारने या हटाने का अधिकार है।",
    "privacy.section7Title": "हमसे संपर्क करें",
    "privacy.section7Content":
      "इस गोपनीयता नीति के बारे में प्रश्नों के लिए, कृपया info@pureoriginexports.com पर संपर्क करें।",

    // Terms & Conditions
    "terms.title": "नियम और शर्तें",
    "terms.pageTitle": "नियम और शर्तें",
    "terms.lastUpdated": "अंतिम अपडेट: जनवरी 2025",
    "terms.intro":
      "ट्रू ओरिजिन कंपनी एलएलपी वेबसाइट तक पहुंचकर और उपयोग करके, आप निम्नलिखित नियमों और शर्तों से बंधे होने के लिए सहमत होते हैं।",
    "terms.section1Title": "शर्तों की स्वीकृति",
    "terms.section1Content":
      "इस वेबसाइट का उपयोग करके, आप पुष्टि करते हैं कि आपकी आयु कम से कम 18 वर्ष है।",
    "terms.section2Title": "उत्पाद और सेवाएं",
    "terms.section2Content":
      "ट्रू ओरिजिन कंपनी एलएलपी कृषि निर्यात उत्पाद और संबंधित सेवाएं प्रदान करती है।",
    "terms.section3Title": "निर्यात अनुपालन",
    "terms.section3Content":
      "सभी निर्यात भारतीय निर्यात नियमों के अनुपालन में किए जाते हैं।",
    "terms.section4Title": "बौद्धिक संपदा",
    "terms.section4Content":
      "इस वेबसाइट पर सभी सामग्री ट्रू ओरिजिन कंपनी एलएलपी की संपत्ति है।",
    "terms.section5Title": "दायित्व की सीमा",
    "terms.section5Content":
      "ट्रू ओरिजिन कंपनी एलएलपी किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी नुकसान के लिए उत्तरदायी नहीं होगी।",
    "terms.section6Title": "शासी कानून",
    "terms.section6Content": "ये शर्तें भारत के कानूनों द्वारा शासित हैं।",
    "terms.section7Title": "शर्तों में परिवर्तन",
    "terms.section7Content":
      "हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं।",
    "terms.section8Title": "संपर्क",
    "terms.section8Content":
      "इन नियमों और शर्तों के बारे में प्रश्नों के लिए, कृपया info@pureoriginexports.com पर संपर्क करें।",
  },

  mr: {
    // Nav
    "nav.home": "मुख्यपृष्ठ",
    "nav.about": "आमच्याबद्दल",
    "nav.aboutUs": "आमच्याबद्दल",
    "nav.whyChooseUs": "आम्हाला का निवडा",
    "nav.products": "उत्पादने",
    "nav.exports": "निर्यात",
    "nav.exportCertification": "निर्यात प्रमाणपत्र",
    "nav.productSpecifications": "उत्पाद तपशील",
    "nav.contact": "संपर्क",
    "nav.exportCargo": "निर्यात कार्गो",
    "nav.social": "सोशल",
    "nav.getInTouch": "संपर्क साधा",
    "nav.privacyPolicy": "गोपनीयता धोरण",
    "nav.termsConditions": "अटी व शर्ती",

    // Hero
    "hero.badge": "प्रीमियम कृषी निर्यात",
    "hero.heading": "ट्रू ओरिजिन कंपनी एलएलपी",
    "hero.headline": "भारतातून जागतिक बाजारपेठांपर्यंत प्रीमियम कृषी निर्यात",
    "hero.subheadline":
      "ट्रूओरिजिन एक्सपोर्ट्स उच्च दर्जाचे, जबाबदारीने मिळवलेले नैसर्गिक अन्न उत्पादने पुरवते.",
    "hero.tagline":
      "भारतातील सर्वोत्तम कृषी उत्पादने जगापर्यंत पोहोचवणे — प्रामाणिकपणा, गुणवत्ता आणि काळजीसह.",
    "hero.ctaPrimary": "आमची उत्पादने पहा",
    "hero.ctaSecondary": "संपर्क करा",
    "hero.ctaRequestSpecs": "उत्पाद तपशील विनंती करा",
    "hero.ctaContactSales": "विक्रीशी संपर्क करा",

    // About
    "about.sectionLabel": "आमची कहाणी",
    "about.heading": "परंपरेत रुजलेले, जगासाठी वाढत आहोत",
    "about.body":
      "ट्रू ओरिजिन कंपनी एलएलपी ही महाराष्ट्र, भारतात स्थित एक व्यावसायिकरित्या व्यवस्थापित कृषी निर्यात कंपनी आहे.",
    "about.paragraph1":
      "ट्रू ओरिजिन कंपनी एलएलपीची स्थापना एका विशेष दृष्टीने केली गेली: भारतीय शेतीचे प्रामाणिक स्वाद आणि पोषण संपत्ती जागतिक बाजारपेठांपर्यंत पोहोचवणे.",
    "about.paragraph2":
      "गुणवत्तेप्रती आमची वचनबद्धता शेतापासून सुरू होते आणि प्रक्रिया, पॅकेजिंग आणि निर्यातीच्या प्रत्येक टप्प्यापर्यंत विस्तारते.",
    "about.operationsHeading": "आमचे कार्य",
    "about.op1": "महाराष्ट्रभर सत्यापित कृषी भागीदारांकडून थेट शेत सोर्सिंग",
    "about.op2":
      "आंतरराष्ट्रीय निर्यात मानकांसाठी इन-हाउस प्रक्रिया, स्वच्छता आणि ग्रेडिंग",
    "about.op3": "सर्वसमावेशक गुणवत्ता चाचणी आणि तृतीय-पक्ष प्रयोगशाळा प्रमाणन",
    "about.op4": "पूर्ण दस्तऐवजीकरण आणि अनुपालन समर्थनासह निर्यात-दर्जाची पॅकेजिंग",
    "about.op5": "वेळेवर जागतिक वितरणासाठी एंड-टू-एंड लॉजिस्टिक्स समन्वय",
    "about.checklistQuality": "✔ गुणवत्ता सुनिश्चित",
    "about.checklistDocumentation": "✔ निर्यात दस्तऐवजीकरण तयार",
    "about.checklistShipping": "✔ जागतिक शिपिंग समर्थन",
    "about.visionHeading": "आमची दृष्टी",
    "about.visionText":
      "प्रीमियम भारतीय कृषी उत्पादनांचा जागतिक स्तरावर विश्वासू पुरवठादार बनणे.",
    "about.missionHeading": "आमचे ध्येय",
    "about.missionText": "सुरक्षित, उच्च दर्जाची आणि अनुपालन उत्पादने पुरवणे.",
    "about.closingStatement":
      "महाराष्ट्राच्या शेतांपासून जगभरातील टेबलांपर्यंत — तुम्ही विश्वास ठेवू शकता अशी गुणवत्ता.",
    "about.stat1Label": "अनुभवाची वर्षे",
    "about.stat2Label": "निर्यात देश",
    "about.stat3Label": "शेतकरी भागीदार",
    "about.stat4Label": "गुणवत्ता प्रमाणित",
    "about.value1Title": "शेतापासून निर्यातीपर्यंत",
    "about.value1Desc":
      "सत्यापित शेतांकडून थेट सोर्सिंग प्रत्येक टप्प्यावर ताजेपणा आणि ट्रेसेबिलिटी सुनिश्चित करते.",
    "about.value2Title": "गुणवत्ता सुनिश्चित",
    "about.value2Desc":
      "कठोर चाचणी आणि प्रमाणन प्रक्रिया आंतरराष्ट्रीय मानकांची हमी देतात.",
    "about.value3Title": "शाश्वत पद्धती",
    "about.value3Desc":
      "उद्याच्या चांगल्यासाठी पर्यावरणीयदृष्ट्या जबाबदार शेती आणि पॅकेजिंग.",
    "about.value4Title": "जागतिक पोहोच",
    "about.value4Desc":
      "भारतीय शेतांना आंतरराष्ट्रीय बाजारपेठांशी जोडणारे स्थापित निर्यात नेटवर्क.",

    // Products
    "products.sectionLabel": "आमची उत्पादने",
    "products.heading": "प्रीमियम कृषी उत्पादने",
    "products.subheading":
      "महाराष्ट्राच्या सर्वोत्तम शेतांमधून थेट मिळवलेली, आमची उत्पादने सर्वोच्च आंतरराष्ट्रीय गुणवत्ता मानकांची पूर्तता करतात.",
    "products.supportingLine":
      "प्रत्येक उत्पाद आंतरराष्ट्रीय निर्यात मानकांनुसार प्रक्रिया, चाचणी आणि पॅक केले जाते.",
    "products.moringaTitle": "मोरिंगा पान पावडर",
    "products.moringaDesc":
      "प्रीमियम दर्जाची मोरिंगा पान पावडर, पोषक तत्वांनी समृद्ध.",
    "products.curryLeavesTitle": "कढीपत्ता",
    "products.curryLeavesDesc": "तीव्र सुगंधासह ताजे आणि वाळलेले कढीपत्ता.",
    "products.freshVegetablesTitle": "ताज्या भाज्या",
    "products.freshVegetablesDesc": "भेंडी, कारले आणि इतर मौसमी ताज्या भाज्या.",
    "products.customSourcingTitle": "कस्टम सोर्सिंग",
    "products.customSourcingDesc":
      "विशिष्ट उत्पाद, प्रमाण किंवा प्रमाणन आवश्यकता असलेल्या खरेदीदारांसाठी अनुकूलित कृषी सोर्सिंग उपाय.",
    "products.ctaViewSpecs": "उत्पाद तपशील पहा",
    "products.farmSubheading": "आमच्या शेतांमधून",
    "products.moringaFarmLabel": "मोरिंगा शेत",
    "products.curryLeavesFarmLabel": "कढीपत्ता शेत",
    "products.okraFarmLabel": "भेंडी शेत",
    "products.moringa.name": "मोरिंगा पान पावडर",
    "products.moringa.desc":
      "प्रीमियम दर्जाची मोरिंगा पान पावडर, पोषक तत्वांनी समृद्ध.",
    "products.moringa.badge": "निर्यात दर्जा",
    "products.curry.name": "कढीपत्ता",
    "products.curry.desc": "तीव्र सुगंधासह ताजे आणि वाळलेले कढीपत्ता.",
    "products.curry.badge": "ताजे आणि वाळलेले",
    "products.vegetables.name": "ताज्या भाज्या",
    "products.vegetables.desc":
      "मौसमी ताज्या भाज्या, निर्यात-तयार आणि गुणवत्ता प्रमाणित.",
    "products.vegetables.badge": "मौसमी",
    "products.farms.heading": "थेट आमच्या शेतांमधून",
    "products.farms.moringa.alt": "महाराष्ट्रातील मोरिंगा शेत",
    "products.farms.moringa.label": "मोरिंगा शेत",
    "products.farms.curry.alt": "महाराष्ट्रातील कढीपत्ता शेत",
    "products.farms.curry.label": "कढीपत्ता शेत",
    "products.farms.okra.alt": "महाराष्ट्रातील भेंडी शेत",
    "products.farms.okra.label": "भेंडी शेत",
    "products.moringaFarmAlt": "महाराष्ट्रातील मोरिंगा शेत",
    "products.curryLeavesFarmAlt": "महाराष्ट्रातील कढीपत्ता शेत",
    "products.okraFarmAlt": "महाराष्ट्रातील भेंडी शेत",

    // Export Cargo
    "exportCargo.sectionLabel": "निर्यात कार्य",
    "exportCargo.heading": "जागतिक निर्यात कार्गो",
    "exportCargo.subheading":
      "जगभरातील बाजारपेठांमध्ये प्रीमियम कृषी उत्पादनांची विश्वासार्ह, प्रमाणित आणि वेळेवर वितरण.",
    "exportCargo.imageAlt": "निर्यात कार्गो जहाज",
    "exportCargo.highlight1Title": "निर्यात दस्तऐवजीकरण",
    "exportCargo.highlight1Desc":
      "प्रत्येक शिपमेंटसाठी पूर्ण आणि अनुपालन निर्यात दस्तऐवजीकरण.",
    "exportCargo.highlight2Title": "सुरक्षित पॅकेजिंग",
    "exportCargo.highlight2Desc": "अन्न-सुरक्षित सामग्रीसह निर्यात-दर्जाची पॅकेजिंग.",
    "exportCargo.highlight3Title": "जागतिक पोहोच",
    "exportCargo.highlight3Desc":
      "आशिया, युरोप, मध्य पूर्व आणि त्यापलीकडे खरेदीदारांशी जोडलेले स्थापित शिपिंग मार्ग.",
    "exportCargo.highlight1.title": "प्रमाणित पॅकेजिंग",
    "exportCargo.highlight1.desc":
      "सुरक्षित पारगमनासाठी आंतरराष्ट्रीय मानकांची पूर्तता करणारी निर्यात-दर्जाची पॅकेजिंग.",
    "exportCargo.highlight2.title": "वेळेवर वितरण",
    "exportCargo.highlight2.desc":
      "विश्वासार्ह लॉजिस्टिक्स तुमचे ऑर्डर वेळेवर पोहोचतील याची खात्री करते.",
    "exportCargo.highlight3.title": "जागतिक नेटवर्क",
    "exportCargo.highlight3.desc":
      "जगभरातील प्रमुख बाजारपेठांपर्यंत स्थापित शिपिंग मार्ग.",

    // Export Certification
    "exportCert.pageTitle": "निर्यात प्रमाणपत्र, गुणवत्ता नियंत्रण आणि उत्पाद तपशील",
    "exportCert.pageSubtitle": "कृषी निर्यातीत प्रमाणित उत्कृष्टता",
    "exportCert.certSection": "निर्यात प्रमाणपत्रे",
    "exportCert.apeda.name": "APEDA नोंदणी",
    "exportCert.apeda.desc":
      "कृषी आणि प्रक्रिया केलेल्या अन्न उत्पादन निर्यात विकास प्राधिकरणाकडे नोंदणीकृत.",
    "exportCert.fssai.name": "FSSAI प्रमाणन",
    "exportCert.fssai.desc": "भारतीय अन्न सुरक्षा आणि मानक प्राधिकरण प्रमाणित.",
    "exportCert.organic.name": "सेंद्रिय प्रमाणन",
    "exportCert.organic.desc": "मान्यताप्राप्त प्रमाणन संस्थांद्वारे सेंद्रिय प्रमाणित.",
    "exportCert.phyto.name": "फायटोसॅनिटरी प्रमाणपत्र",
    "exportCert.phyto.desc": "अधिकृत एजन्सींद्वारे जारी केलेली वनस्पती आरोग्य प्रमाणपत्रे.",
    "exportCert.origin.name": "उत्पत्ती प्रमाणपत्र",
    "exportCert.origin.desc":
      "आमच्या उत्पादनांच्या मूळ देशाची पुष्टी करणारे अधिकृत व्यापार दस्तऐवज.",
    "exportCert.lab.name": "प्रयोगशाळा चाचणी अहवाल",
    "exportCert.lab.desc":
      "मान्यताप्राप्त सुविधांमधून सर्वसमावेशक प्रयोगशाळा विश्लेषण अहवाल.",
    "exportCert.qcSection": "गुणवत्ता नियंत्रण",
    "exportCert.qc1.title": "सोर्सिंग मानके",
    "exportCert.qc1.desc": "आम्ही केवळ सत्यापित शेतांमधून सोर्स करतो.",
    "exportCert.qc2.title": "येणारे निरीक्षण",
    "exportCert.qc2.desc": "प्रत्येक बॅच आमच्या सुविधेत आल्यावर सखोल तपासणीतून जातो.",
    "exportCert.qc3.title": "प्रयोगशाळा चाचणी",
    "exportCert.qc3.desc":
      "दूषित पदार्थ, ओलावा आणि गुणवत्ता मापदंडांसाठी सर्वसमावेशक चाचणी.",
    "exportCert.qc4.title": "पॅकेजिंग प्रोटोकॉल",
    "exportCert.qc4.desc": "जास्तीत जास्त उत्पाद अखंडतेसाठी अन्न-दर्जाची सामग्री.",
    "exportCert.qc5.title": "साठवण मानके",
    "exportCert.qc5.desc":
      "प्रत्येक उत्पादासाठी इष्टतम परिस्थिती राखणाऱ्या हवामान-नियंत्रित सुविधा.",
    "exportCert.qc6.title": "ट्रेसेबिलिटी",
    "exportCert.qc6.desc": "शेतापासून अंतिम शिपमेंटपर्यंत पूर्ण बॅच ट्रेसेबिलिटी.",
    "exportCert.specsSection": "उत्पाद तपशील",
    "exportCert.moringa.title": "मोरिंगा पान पावडर – निर्यात दर्जा",
    "exportCert.moringa.packaging":
      "1 किग्रा / 5 किग्रा / 25 किग्रा, अन्न-दर्जाचे आतील अस्तर, निर्यात-तयार कार्टन",
    "exportCert.moringa.docs":
      "COA, प्रयोगशाळा चाचणी अहवाल, फायटोसॅनिटरी प्रमाणपत्र, चलन आणि पॅकिंग यादी",
    "exportCert.curry.title": "कढीपत्ता – वाळलेला निर्यात दर्जा",
    "exportCert.curry.packaging":
      "500 ग्रॅम / 1 किग्रा / 5 किग्रा, व्हॅक्यूम-सीलबंद पाउच, निर्यातीसाठी कार्टन",
    "exportCert.curry.docs":
      "COA, प्रयोगशाळा चाचणी अहवाल, फायटोसॅनिटरी प्रमाणपत्र, चलन आणि पॅकिंग यादी",
    "exportCert.vegetables.title": "ताज्या भाज्या – निर्यात दर्जा",
    "exportCert.vegetables.packaging":
      "विविधता-विशिष्ट पॅकेजिंग, हवेशीर कार्टन, कोल्ड-चेन तयार",
    "exportCert.vegetables.docs":
      "COA, प्रयोगशाळा चाचणी अहवाल, फायटोसॅनिटरी प्रमाणपत्र, चलन आणि पॅकिंग यादी",
    "exportCert.packagingLabel": "पॅकेजिंग पर्याय",
    "exportCert.docsLabel": "प्रदान केलेले दस्तऐवज",
    "exportCert.contactCta": "तुमच्या ऑर्डरसाठी तपशीलवार तपशील हवे आहेत?",
    "exportCert.contactBtn": "तपशील पत्रक विनंती करा",

    // Social Media
    "social.sectionLabel": "आम्हाला फॉलो करा",
    "social.heading": "जोडलेले राहा",
    "social.video1Title": "लवकरच येत आहे",
    "social.video1Desc": "आमचे नवीनतम अपडेट लवकरच येथे उपलब्ध होतील.",
    "social.video2Title": "लवकरच येत आहे",
    "social.video2Desc": "आमच्या उत्पाद हायलाइट्ससाठी थांबा.",
    "social.video3Title": "लवकरच येत आहे",
    "social.video3Desc": "शेत आणि निर्यात अपडेटसाठी आम्हाला फॉलो करा.",
    "social.video1.title": "शेतापासून निर्यातीपर्यंत",
    "social.video1.desc": "शेतापासून निर्यातीपर्यंतचा आमचा प्रवास पहा.",
    "social.video2.title": "गुणवत्ता प्रक्रिया",
    "social.video2.desc": "आमचे गुणवत्ता नियंत्रण कार्यात पहा.",
    "social.comingSoon": "लवकरच येत आहे",
    "social.bottomNote": "नवीनतम अपडेटसाठी सोशल मीडियावर आम्हाला फॉलो करा.",

    // Contact
    "contact.label": "संपर्क साधा",
    "contact.heading": "आमच्याशी संपर्क करा",
    "contact.subheading":
      "निर्यात चौकशी, उत्पाद माहिती किंवा भागीदारीच्या संधींसाठी आमच्याशी संपर्क करा.",
    "contact.info.heading": "संपर्क माहिती",
    "contact.info.address": "महाराष्ट्र, भारत",
    "contact.info.phone": "+91 97733 03026",
    "contact.info.email": "info@pureoriginexports.com",
    "contact.info.website": "www.pureoriginexports.com",
    "contact.info.hours": "सोम–शनि: सकाळी 9:00 – संध्याकाळी 6:00 IST",
    "contact.address.label": "पत्ता",
    "contact.address.value": "महाराष्ट्र, भारत",
    "contact.phone.label": "फोन",
    "contact.email.label": "ईमेल",
    "contact.website": "वेबसाइट",
    "contact.hours.label": "व्यवसायाचे तास",
    "contact.hours.value": "सोमवार – शनिवार, सकाळी 9:00 – संध्याकाळी 6:00 IST",
    "contact.form.heading": "चौकशी पाठवा",
    "contact.form.name": "तुमचे नाव",
    "contact.form.email": "तुमचा ईमेल",
    "contact.form.company": "कंपनीचे नाव",
    "contact.form.message": "तुमचा संदेश",
    "contact.form.submit": "संदेश पाठवा",
    "contact.form.namePlaceholder": "तुमचे नाव प्रविष्ट करा",
    "contact.form.emailPlaceholder": "तुमचा ईमेल प्रविष्ट करा",
    "contact.form.companyPlaceholder": "तुमच्या कंपनीचे नाव प्रविष्ट करा",
    "contact.form.messagePlaceholder": "तुमच्या आवश्यकतांबद्दल सांगा...",
    "contact.success.title": "संदेश पाठवला!",
    "contact.success.desc": "संपर्क केल्याबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क करू.",

    // Privacy Policy
    "privacy.title": "गोपनीयता धोरण",
    "privacy.lastUpdated": "शेवटचे अपडेट: जानेवारी 2025",
    "privacy.intro":
      "ट्रू ओरिजिन कंपनी एलएलपी तुमच्या गोपनीयतेचे संरक्षण करण्यासाठी वचनबद्ध आहे.",
    "privacy.section1Title": "आम्ही जी माहिती गोळा करतो",
    "privacy.section1Content":
      "आम्ही ती माहिती गोळा करतो जी तुम्ही थेट आम्हाला प्रदान करता.",
    "privacy.section2Title": "आम्ही तुमची माहिती कशी वापरतो",
    "privacy.section2Content":
      "आम्ही तुमच्या चौकशींना उत्तर देण्यासाठी गोळा केलेल्या माहितीचा वापर करतो.",
    "privacy.section3Title": "माहिती सामायिक करणे",
    "privacy.section3Content":
      "आम्ही तुमच्या संमतीशिवाय तुमची वैयक्तिक माहिती तृतीय पक्षांना विकत नाही.",
    "privacy.section4Title": "डेटा सुरक्षा",
    "privacy.section4Content":
      "आम्ही तुमच्या वैयक्तिक माहितीचे संरक्षण करण्यासाठी योग्य सुरक्षा उपाय लागू करतो.",
    "privacy.section5Title": "कुकीज",
    "privacy.section5Content":
      "आमची वेबसाइट तुमचा ब्राउझिंग अनुभव सुधारण्यासाठी कुकीज वापरू शकते.",
    "privacy.section6Title": "तुमचे अधिकार",
    "privacy.section6Content":
      "तुम्हाला तुमची वैयक्तिक माहिती ऍक्सेस करण्याचा, दुरुस्त करण्याचा किंवा हटवण्याचा अधिकार आहे.",
    "privacy.section7Title": "आमच्याशी संपर्क करा",
    "privacy.section7Content":
      "या गोपनीयता धोरणाबद्दल प्रश्नांसाठी, कृपया info@pureoriginexports.com वर संपर्क करा.",

    // Terms & Conditions
    "terms.title": "अटी व शर्ती",
    "terms.pageTitle": "अटी व शर्ती",
    "terms.lastUpdated": "शेवटचे अपडेट: जानेवारी 2025",
    "terms.intro":
      "ट्रू ओरिजिन कंपनी एलएलपी वेबसाइट ऍक्सेस करून आणि वापरून, तुम्ही खालील अटी व शर्तींनी बांधले जाण्यास सहमत आहात.",
    "terms.section1Title": "अटींची स्वीकृती",
    "terms.section1Content":
      "ही वेबसाइट वापरून, तुम्ही पुष्टी करता की तुमचे वय किमान 18 वर्षे आहे.",
    "terms.section2Title": "उत्पादने आणि सेवा",
    "terms.section2Content":
      "ट्रू ओरिजिन कंपनी एलएलपी कृषी निर्यात उत्पादने आणि संबंधित सेवा प्रदान करते.",
    "terms.section3Title": "निर्यात अनुपालन",
    "terms.section3Content":
      "सर्व निर्यात भारतीय निर्यात नियमांच्या अनुपालनात केली जाते.",
    "terms.section4Title": "बौद्धिक संपदा",
    "terms.section4Content":
      "या वेबसाइटवरील सर्व सामग्री ट्रू ओरिजिन कंपनी एलएलपीची मालमत्ता आहे.",
    "terms.section5Title": "दायित्वाची मर्यादा",
    "terms.section5Content":
      "ट्रू ओरिजिन कंपनी एलएलपी कोणत्याही अप्रत्यक्ष, आकस्मिक किंवा परिणामी नुकसानासाठी जबाबदार नसेल.",
    "terms.section6Title": "शासी कायदा",
    "terms.section6Content": "या अटी भारताच्या कायद्यांद्वारे शासित आहेत.",
    "terms.section7Title": "अटींमध्ये बदल",
    "terms.section7Content":
      "आम्ही कोणत्याही वेळी या अटी सुधारण्याचा अधिकार राखून ठेवतो.",
    "terms.section8Title": "संपर्क",
    "terms.section8Content":
      "या अटी व शर्तींबद्दल प्रश्नांसाठी, कृपया info@pureoriginexports.com वर संपर्क करा.",
  },
};
