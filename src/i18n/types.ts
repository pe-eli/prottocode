export interface Translations {
  header: {
    brandSubtitle: string;
    services: string;
    contact: string;
    portfolio: string;
  };
  hero: {
    badge: string;
    badgeLink: string;
    headlinePrimary: string;
    headlineAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaGhost: string;
    solutionsTitle: string;
    products: {
      title: string;
      description: string;
      badge: string;
      cta: string;
    }[];
  };
  whatWeDo: {
    title: string;
    lead: string;
    paragraphs: string[];
    ctaText: string;
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  howItWorks: {
    title: string;
    lead: string;
    steps: {
      title: string;
      description: string;
      icon: string;
    }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  differentiators: {
    title: string;
    lead: string;
    tableHeaders: { aspect: string; others: string; prottocode: string };
    comparisons: {
      category: string;
      others: string;
      prottocode: string;
    }[];
    cards: {
      title: string;
      description: string;
      items: string[];
    }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  finalCta: {
    title: string;
    titleAccent: string;
    lead: string;
    highlight: string;
    btnPrimary: string;
    btnSecondary: string;
    footer: string;
    signals: string[];
  };
  faq: {
    title: string;
    lead: string;
    items: { question: string; answer: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  services: {
    title: string;
    subtitle: string;
    before: string;
    after: string;
    benefits: {
      icon: string;
      title: string;
      situation: string;
      result: string;
    }[];
    ctaText: string;
    ctaButton: string;
  };
  socialProof: {
    statsTitle: string;
    stats: {
      number: string;
      label: string;
      description: string;
    }[];
    testimonialsTitle: string;
    testimonials: {
      quote: string;
      author: string;
      role: string;
      company: string;
    }[];
    logosTitle: string;
  };
  testimonials: {
    title: string;
    items: {
      titulo: string;
      descricao: string;
    }[];
  };
  contact: {
    title: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    submitButton: string;
    directText: string;
    successTitle: string;
    successText: string;
    errorText: string;
  };
  team: {
    title: string;
    subtitle: string;
    members: {
      name: string;
      role: string;
      bio: string;
    }[];
  };
  footer: {
    brandSubtitle: string;
    description: string;
    solutionsTitle: string;
    companyTitle: string;
    contactTitle: string;
    links: {
      services: string;
      requestProposal: string;
      contact: string;
      home: string;
      whyProttocode: string;
      privacyPolicy: string;
    };
    responseTime: string;
    copyright: string;
    badges: { secure: string; lgpd: string; dataProtected: string };
  };
  themeToggle: {
    lightLabel: string;
    darkLabel: string;
  };
  servicosPage: {
    heroTitle: string;
    heroAccent: string;
    heroLead: string;
    heroButton: string;
    featuresIncluded: string;
    requestProposal: string;
    serviceDetails: {
      title: string;
      tagline: string;
      description: string;
      features: { name: string; ai?: boolean }[];
    }[];
    faqTitle: string;
    faqSubtitle: string;
    faqs: { question: string; answer: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaBtnPrimary: string;
    ctaBtnGhost: string;
  };
  contatoPage: {
    heroTitle: string;
    heroAccent: string;
    heroLead: string;
    formTitle: string;
    formSubtitle: string;
    labels: {
      name: string;
      email: string;
      whatsapp: string;
      company: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      whatsapp: string;
      company: string;
      message: string;
    };
    sending: string;
    submitButton: string;
    infoWhatsapp: string;
    infoWhatsappDesc: string;
    infoInstagram: string;
    infoInstagramDesc: string;
    infoEmail: string;
    infoEmailDesc: string;
    infoResponseTime: string;
    infoResponseTimeDesc: string;
    infoResponseBadge: string;
    faqTitle: string;
    faqs: { question: string; answer: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    successTitle: string;
    successText: string;
    errorText: string;
    notInformed: string;
  };
  portfolioPage: {
    badge: string;
    title: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    cards: { icon: string; title: string; description: string }[];
    ctaText: string;
    ctaButton: string;
  };
  privacidadePage: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    date: string;
    sections: {
      title: string;
      content: string;
      list?: string[];
    }[];
  };
  orcamentoPage: {
    stepLabels: string[];
    step1Title: string;
    step1Subtitle: string;
    step1StartingAt: string;
    next: string;
    back: string;
    step2Title: string;
    step2Subtitle: string;
    packageNames: { starter: string; pro: string; premium: string };
    discountExtras: string;
    included: string;
    step3Title: string;
    step3Subtitle: string;
    aiTag: string;
    includedTag: string;
    baseService: string;
    extras: string;
    packageDiscount: string;
    oneTimePayment: string;
    monthly: string;
    step4Title: string;
    step4Subtitle: string;
    serviceLabel: string;
    packageLabel: string;
    extrasLabel: string;
    includedInPackage: string;
    financialSummary: string;
    totalExtras: string;
    discount: string;
    yourData: string;
    nameLabel: string;
    whatsappLabel: string;
    namePlaceholder: string;
    whatsappPlaceholder: string;
    disclaimer: string;
    downloadPdf: string;
    requestProposal: string;
    errorService: string;
    errorPackage: string;
    errorFields: string;
    errorPdfFields: string;
    sendingProposal: string;
    successProposal: string;
    errorProposal: string;
    pdfLabels: {
      title: string;
      dateLabel: string;
      clientData: string;
      nameLabel: string;
      whatsappLabel: string;
      serviceTitle: string;
      packageTitle: string;
      extrasTitle: string;
      includedInPackage: string;
      financialSummary: string;
      baseService: string;
      totalExtras: string;
      packageDiscount: string;
      oneTimePayment: string;
      monthly: string;
      disclaimer: string;
    };
    locale: string;
  };
}
