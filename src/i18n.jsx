import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  fr: {
    // Navbar
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_portfolio: 'Réalisations',
    nav_about: 'À Propos',
    nav_process: 'Processus',
    nav_testimonials: 'Témoignages',
    nav_contact: 'Contact',
    nav_cta: 'Devis Gratuit',

    // Hero
    hero_badge: 'Basé à Yaoundé, Cameroun • Depuis 2020',
    hero_line1: 'Votre Partenaire',
    hero_line2: 'Technologique',
    hero_line3: 'de Confiance.',
    hero_desc: "Développement d'applications web & mobile, automatisation des systèmes d'information, conception d'architectures réseaux, assistance technique et formation professionnelle.",
    hero_desc_bold: ' Le futur, c\'est ici.',
    hero_cta1: 'Découvrir Nos Services',
    hero_cta2: 'Contactez-Nous',
    hero_stat1: "Années d'Expérience",
    hero_stat2: 'Projets Livrés',
    hero_stat3: 'Clients Satisfaits',
    hero_stat4: 'Taux de Satisfaction',
    hero_scroll: 'Défiler',

    // Marquee
    marquee: ['Développement Web', 'Applications Mobiles', 'Automatisation', 'Réseaux', "Systèmes d'Information", 'Formation', 'Conseil', 'Publicité Digitale', 'Assistance Technique', 'Cloud Solutions'],

    // Services
    svc_label: 'Ce Que Nous Faisons',
    svc_title_1: 'Des Solutions',
    svc_title_red: 'Complètes',
    svc_title_2: 'Pour Chaque Défi Technologique',
    svc_subtitle: 'De la conception à la maintenance, nous couvrons l\'ensemble de vos besoins numériques avec expertise et passion.',
    svc: [
      { title: 'Développement Web & Mobile', desc: "Applications web et mobiles performantes avec les technologies les plus récentes. Sites vitrines, e-commerce, applications métier, PWA et applications natives iOS/Android.", features: ['Sites Web Modernes', 'E-Commerce', 'Applications Métier', 'Progressive Web Apps'] },
      { title: "Automatisation & Systèmes d'Information", desc: "Conception et automatisation complète de vos systèmes d'information. Optimisez vos processus métier, réduisez les tâches manuelles et gagnez en productivité.", features: ['ERP & CRM', 'Workflows Automatisés', 'Bases de Données', 'Tableaux de Bord'] },
      { title: 'Architecture & Réseaux', desc: "Configuration et élaboration d'architectures réseaux robustes, sécurisées et évolutives. Installation, maintenance et monitoring de vos infrastructures.", features: ['Infrastructure Réseau', 'Sécurité Informatique', 'VPN & Firewall', 'Monitoring 24/7'] },
      { title: 'Gadgets & Communication Visuelle', desc: "Conception créative de gadgets publicitaires et supports de communication visuelle pour renforcer votre image de marque et votre visibilité.", features: ['Identité Visuelle', 'Supports Imprimés', 'Signalétique', 'Objets Publicitaires'] },
      { title: 'Assistance & Conseil', desc: "Accompagnement technique personnalisé, audit de vos systèmes existants et conseil stratégique pour vos projets de transformation digitale.", features: ['Audit Technique', 'Conseil Stratégique', 'Support Dédié', 'Migration Cloud'] },
      { title: 'Formation Professionnelle', desc: "Programmes de formation sur mesure en technologies de l'information, développement web, administration réseau et outils numériques.", features: ['Dev Web/Mobile', 'Admin Réseau', 'Bureautique Avancée', 'Certifications IT'] },
    ],

    // Portfolio
    port_label: 'Nos Réalisations',
    port_title_1: 'Projets Qui Font',
    port_title_red: 'La Différence',
    port: [
      { title: 'Plateforme E-Commerce', category: 'Développement Web', desc: "Solution e-commerce complète avec gestion des stocks, paiements en ligne et livraison intégrée pour le marché camerounais." },
      { title: 'Application de Gestion RH', category: "Système d'Information", desc: "Application de gestion des ressources humaines avec paie automatisée, congés et suivi des performances." },
      { title: 'Infrastructure Réseau Entreprise', category: 'Réseaux', desc: "Déploiement complet d'infrastructure réseau pour un groupe de 200+ employés avec VPN et monitoring." },
      { title: 'Système de Facturation', category: 'Automatisation', desc: "Système de facturation et comptabilité automatisé conforme aux normes OHADA avec génération de rapports." },
      { title: 'Application Mobile Santé', category: 'App Mobile', desc: "Application mobile de prise de rendez-vous et suivi médical pour un réseau de cliniques." },
    ],

    // About
    about_label: 'À Propos de Nous',
    about_title_1: 'Une Entreprise Camerounaise Au Service de',
    about_title_red: 'Votre Transformation Digitale',
    about_p1: "est une entreprise de services numériques basée à Yaoundé. Depuis 2020, nous accompagnons les entreprises, institutions et particuliers dans leur transformation digitale avec des solutions innovantes, fiables et adaptées au contexte africain.",
    about_p2_1: 'Notre siège est situé à',
    about_p2_addr: 'NGOUSSO, Descente Eleveur',
    about_p2_2: ", au cœur de Yaoundé. Notre équipe pluridisciplinaire d'ingénieurs, développeurs et consultants travaille avec passion pour faire de chaque projet un succès.",
    about_founded: 'Fondée en',
    about_hq: 'Siège Social',
    about_hq_val: 'Yaoundé, Cameroun',
    about_team: 'Équipe',
    about_team_val: '15+ Experts',
    about_values: [
      { title: 'Fiabilité', desc: 'Solutions robustes testées pour le marché africain' },
      { title: 'Innovation', desc: 'Technologies de pointe adaptées à vos besoins' },
      { title: 'Proximité', desc: 'Équipe locale, accompagnement personnalisé' },
      { title: 'Excellence', desc: 'Standards internationaux, exécution locale' },
      { title: 'Vision', desc: "Connecter l'Afrique au monde digital" },
      { title: 'Réactivité', desc: 'Support rapide et délais respectés' },
    ],

    // Process
    proc_label: 'Notre Processus',
    proc_title_1: 'Comment Nous',
    proc_title_red: 'Travaillons',
    proc_subtitle: 'Un processus éprouvé en 6 étapes pour garantir le succès de chaque projet.',
    proc_step: 'ÉTAPE',
    proc: [
      { title: 'Analyse & Consultation', desc: 'Nous échangeons sur vos besoins, objectifs et contraintes pour définir la meilleure stratégie.' },
      { title: 'Conception & Maquettage', desc: "Nous élaborons l'architecture technique et créons des maquettes pour valider la direction." },
      { title: 'Développement', desc: 'Nos développeurs codent votre solution avec les technologies les plus adaptées à votre projet.' },
      { title: 'Tests & Optimisation', desc: 'Tests rigoureux de fonctionnalité, performance et sécurité avant chaque mise en production.' },
      { title: 'Déploiement & Formation', desc: 'Mise en production et formation de vos équipes pour une prise en main autonome.' },
      { title: 'Support & Évolution', desc: 'Maintenance continue, mises à jour et évolutions pour que votre solution reste performante.' },
    ],

    // TechStack
    tech_label: 'Technologies',
    tech_title: 'Les Outils Que Nous Maîtrisons',

    // Testimonials
    test_label: 'Témoignages',
    test_title_1: 'Ce Que Disent',
    test_title_red: 'Nos Clients',
    test: [
      { name: 'Jean-Pierre Nkoulou', role: 'Directeur Général', company: 'Groupe Nkoulou & Fils', text: "UniverSatellites a transformé notre gestion interne avec un système sur mesure. Leur équipe est réactive, professionnelle et toujours à l'écoute. Un vrai partenaire technologique." },
      { name: 'Marie-Claire Essomba', role: 'Fondatrice', company: 'MC Fashion Boutique', text: "Grâce à leur solution e-commerce, nos ventes en ligne ont augmenté de 300% en 6 mois. L'application est belle, rapide et nos clients adorent l'expérience." },
      { name: 'Dr. Paul Fotso', role: 'Directeur Médical', company: 'Clinique Santé Plus', text: "L'application de gestion des rendez-vous a révolutionné notre organisation. Plus de files d'attente interminables, tout est optimisé. Merci UniS@t !" },
      { name: 'Alphonse Tchounga', role: 'DSI', company: 'Cameroon Agri-Business', text: "Le déploiement réseau réalisé par UniverSatellites est impeccable. Nos 5 sites sont maintenant interconnectés avec une fiabilité de 99.9%. Service exceptionnel." },
    ],

    // WhyUs
    why_label: 'Pourquoi Nous',
    why_title_1: 'Pourquoi Choisir',
    why_title_red: 'UniS@t',
    why: [
      { title: 'Expertise Locale', desc: 'Nous connaissons le marché camerounais et africain — nos solutions sont adaptées à votre réalité terrain.' },
      { title: 'Réactivité', desc: 'Délais respectés, support rapide et communication transparente tout au long de votre projet.' },
      { title: 'Rapport Qualité-Prix', desc: 'Des solutions professionnelles accessibles, sans compromis sur la qualité ni les fonctionnalités.' },
      { title: 'Suivi & Maintenance', desc: 'Nous ne vous abandonnons jamais. Assistance, évolutions et maintenance après livraison.' },
    ],
    why_cta_title: 'Prêt à Transformer Votre Business ?',
    why_cta_desc: 'Discutons de votre projet et trouvons la solution parfaite ensemble.',
    why_cta_btn: 'Commencer Maintenant',

    // Contact
    ct_label: 'Contact',
    ct_title_1: 'Parlons de',
    ct_title_red: 'Votre Projet',
    ct_intro: "N'hésitez pas à nous contacter pour discuter de vos besoins. Notre équipe est prête à vous accompagner dans la réalisation de vos ambitions digitales.",
    ct_phone: 'Téléphone',
    ct_mobile: 'Mobile',
    ct_whatsapp: 'WhatsApp',
    ct_email: 'Email',
    ct_web: 'Site Web',
    ct_address: 'Adresse',
    ct_form_title: 'Envoyez-Nous un Message',
    ct_name: 'Votre Nom',
    ct_email_input: 'Votre Email',
    ct_phone_input: 'Votre Téléphone',
    ct_message: 'Décrivez votre projet...',
    ct_send: 'Envoyer via WhatsApp',
    ct_sent: 'Message Envoyé !',
    ct_wa_header: '*--- Nouveau Message ---*',
    ct_wa_source: '*UniverSatellites - Site Web*',
    ct_wa_name: '*Nom :*',
    ct_wa_email: '*Email :*',
    ct_wa_phone: '*Tel :*',
    ct_wa_msg: '*Message :*',
    ct_wa_footer: '_Envoy\u00e9 depuis universsatellite.com_',

    // Footer
    ft_desc: 'Votre partenaire technologique de confiance au Cameroun. Solutions digitales innovantes pour entreprises et institutions.',
    ft_nav: 'Navigation',
    ft_services: 'Services',
    ft_svc_list: ['Développement Web', 'Applications Mobiles', 'Automatisation SI', 'Réseaux & Sécurité', 'Formation', 'Conseil & Audit'],
    ft_contact: 'Contact',
    ft_rights: 'Tous droits réservés.',
    ft_by: 'Conçu avec passion par',
  },

  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_portfolio: 'Projects',
    nav_about: 'About',
    nav_process: 'Process',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    nav_cta: 'Free Quote',

    hero_badge: 'Based in Yaoundé, Cameroon • Since 2020',
    hero_line1: 'Your Trusted',
    hero_line2: 'Technology',
    hero_line3: 'Partner.',
    hero_desc: 'Web & mobile application development, information systems automation, network architecture design, technical assistance and professional training.',
    hero_desc_bold: ' The future is here.',
    hero_cta1: 'Discover Our Services',
    hero_cta2: 'Contact Us',
    hero_stat1: 'Years of Experience',
    hero_stat2: 'Projects Delivered',
    hero_stat3: 'Satisfied Clients',
    hero_stat4: 'Satisfaction Rate',
    hero_scroll: 'Scroll',

    marquee: ['Web Development', 'Mobile Apps', 'Automation', 'Networking', 'Information Systems', 'Training', 'Consulting', 'Digital Advertising', 'Technical Support', 'Cloud Solutions'],

    svc_label: 'What We Do',
    svc_title_1: '',
    svc_title_red: 'Complete',
    svc_title_2: 'Solutions For Every Tech Challenge',
    svc_subtitle: 'From design to maintenance, we cover all your digital needs with expertise and passion.',
    svc: [
      { title: 'Web & Mobile Development', desc: 'High-performance web and mobile applications with cutting-edge technologies. Showcase sites, e-commerce, business apps, PWAs and native iOS/Android apps.', features: ['Modern Websites', 'E-Commerce', 'Business Apps', 'Progressive Web Apps'] },
      { title: 'Automation & Information Systems', desc: 'Complete design and automation of your information systems. Optimize your business processes, reduce manual tasks and boost productivity.', features: ['ERP & CRM', 'Automated Workflows', 'Databases', 'Dashboards'] },
      { title: 'Network Architecture', desc: 'Configuration and design of robust, secure and scalable network architectures. Installation, maintenance and monitoring of your infrastructure.', features: ['Network Infrastructure', 'IT Security', 'VPN & Firewall', '24/7 Monitoring'] },
      { title: 'Branding & Visual Communication', desc: 'Creative design of promotional items and visual communication materials to strengthen your brand image and visibility.', features: ['Visual Identity', 'Print Media', 'Signage', 'Promotional Items'] },
      { title: 'Support & Consulting', desc: 'Personalized technical support, audit of existing systems and strategic consulting for your digital transformation projects.', features: ['Technical Audit', 'Strategic Consulting', 'Dedicated Support', 'Cloud Migration'] },
      { title: 'Professional Training', desc: 'Customized training programs in information technology, web development, network administration and digital tools.', features: ['Web/Mobile Dev', 'Network Admin', 'Advanced Office', 'IT Certifications'] },
    ],

    port_label: 'Our Projects',
    port_title_1: 'Projects That Make',
    port_title_red: 'The Difference',
    port: [
      { title: 'E-Commerce Platform', category: 'Web Development', desc: 'Complete e-commerce solution with inventory management, online payments and integrated delivery for the Cameroonian market.' },
      { title: 'HR Management App', category: 'Information System', desc: 'Human resources management application with automated payroll, leave tracking and performance monitoring.' },
      { title: 'Enterprise Network Infrastructure', category: 'Networking', desc: 'Complete network infrastructure deployment for a group of 200+ employees with VPN and monitoring.' },
      { title: 'Billing System', category: 'Automation', desc: 'Automated billing and accounting system compliant with OHADA standards with report generation.' },
      { title: 'Healthcare Mobile App', category: 'Mobile App', desc: 'Mobile appointment booking and medical follow-up application for a network of clinics.' },
    ],

    about_label: 'About Us',
    about_title_1: 'A Cameroonian Company Dedicated to',
    about_title_red: 'Your Digital Transformation',
    about_p1: 'is a digital services company based in Yaoundé. Since 2020, we have been supporting businesses, institutions and individuals in their digital transformation with innovative, reliable and Africa-adapted solutions.',
    about_p2_1: 'Our headquarters is located at',
    about_p2_addr: 'NGOUSSO, Descente Eleveur',
    about_p2_2: ', in the heart of Yaoundé. Our multidisciplinary team of engineers, developers and consultants works passionately to make every project a success.',
    about_founded: 'Founded',
    about_hq: 'Headquarters',
    about_hq_val: 'Yaoundé, Cameroon',
    about_team: 'Team',
    about_team_val: '15+ Experts',
    about_values: [
      { title: 'Reliability', desc: 'Robust solutions tested for the African market' },
      { title: 'Innovation', desc: 'Cutting-edge technologies adapted to your needs' },
      { title: 'Proximity', desc: 'Local team, personalized support' },
      { title: 'Excellence', desc: 'International standards, local execution' },
      { title: 'Vision', desc: 'Connecting Africa to the digital world' },
      { title: 'Responsiveness', desc: 'Fast support and respected deadlines' },
    ],

    proc_label: 'Our Process',
    proc_title_1: 'How We',
    proc_title_red: 'Work',
    proc_subtitle: 'A proven 6-step process to ensure the success of every project.',
    proc_step: 'STEP',
    proc: [
      { title: 'Analysis & Consultation', desc: 'We discuss your needs, goals and constraints to define the best strategy.' },
      { title: 'Design & Wireframing', desc: 'We develop the technical architecture and create mockups to validate the direction.' },
      { title: 'Development', desc: 'Our developers build your solution with the most suitable technologies for your project.' },
      { title: 'Testing & Optimization', desc: 'Rigorous functionality, performance and security testing before every production release.' },
      { title: 'Deployment & Training', desc: 'Production launch and team training for autonomous operation.' },
      { title: 'Support & Evolution', desc: 'Ongoing maintenance, updates and enhancements to keep your solution performing.' },
    ],

    tech_label: 'Technologies',
    tech_title: 'The Tools We Master',

    test_label: 'Testimonials',
    test_title_1: 'What Our',
    test_title_red: 'Clients Say',
    test: [
      { name: 'Jean-Pierre Nkoulou', role: 'CEO', company: 'Groupe Nkoulou & Fils', text: 'UniverSatellites transformed our internal management with a custom-built system. Their team is responsive, professional and always attentive. A true technology partner.' },
      { name: 'Marie-Claire Essomba', role: 'Founder', company: 'MC Fashion Boutique', text: 'Thanks to their e-commerce solution, our online sales increased by 300% in 6 months. The app is beautiful, fast and our customers love the experience.' },
      { name: 'Dr. Paul Fotso', role: 'Medical Director', company: 'Clinique Santé Plus', text: 'The appointment management app revolutionized our organization. No more endless queues, everything is optimized. Thank you UniS@t!' },
      { name: 'Alphonse Tchounga', role: 'CTO', company: 'Cameroon Agri-Business', text: 'The network deployment by UniverSatellites is flawless. Our 5 sites are now interconnected with 99.9% reliability. Exceptional service.' },
    ],

    why_label: 'Why Us',
    why_title_1: 'Why Choose',
    why_title_red: 'UniS@t',
    why: [
      { title: 'Local Expertise', desc: 'We know the Cameroonian and African market — our solutions are adapted to your ground reality.' },
      { title: 'Responsiveness', desc: 'Respected deadlines, fast support and transparent communication throughout your project.' },
      { title: 'Value for Money', desc: 'Accessible professional solutions without compromising on quality or features.' },
      { title: 'Ongoing Support', desc: 'We never leave you behind. Assistance, upgrades and maintenance after delivery.' },
    ],
    why_cta_title: 'Ready to Transform Your Business?',
    why_cta_desc: "Let's discuss your project and find the perfect solution together.",
    why_cta_btn: 'Get Started Now',

    ct_label: 'Contact',
    ct_title_1: "Let's Talk About",
    ct_title_red: 'Your Project',
    ct_intro: "Don't hesitate to contact us to discuss your needs. Our team is ready to support you in achieving your digital ambitions.",
    ct_phone: 'Phone',
    ct_mobile: 'Mobile',
    ct_whatsapp: 'WhatsApp',
    ct_email: 'Email',
    ct_web: 'Website',
    ct_address: 'Address',
    ct_form_title: 'Send Us a Message',
    ct_name: 'Your Name',
    ct_email_input: 'Your Email',
    ct_phone_input: 'Your Phone',
    ct_message: 'Describe your project...',
    ct_send: 'Send via WhatsApp',
    ct_sent: 'Message Sent!',
    ct_wa_header: '*--- New Message ---*',
    ct_wa_source: '*UniverSatellites - Website*',
    ct_wa_name: '*Name:*',
    ct_wa_email: '*Email:*',
    ct_wa_phone: '*Phone:*',
    ct_wa_msg: '*Message:*',
    ct_wa_footer: '_Sent from universsatellite.com_',

    ft_desc: 'Your trusted technology partner in Cameroon. Innovative digital solutions for businesses and institutions.',
    ft_nav: 'Navigation',
    ft_services: 'Services',
    ft_svc_list: ['Web Development', 'Mobile Apps', 'IS Automation', 'Networks & Security', 'Training', 'Consulting & Audit'],
    ft_contact: 'Contact',
    ft_rights: 'All rights reserved.',
    ft_by: 'Crafted with passion by',
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('fr');
  const t = useCallback((key) => translations[lang]?.[key] ?? translations.fr[key] ?? key, [lang]);
  const toggle = useCallback(() => setLang(l => l === 'fr' ? 'en' : 'fr'), []);
  return (
    <I18nContext.Provider value={{ lang, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
