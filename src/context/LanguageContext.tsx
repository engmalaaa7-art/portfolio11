import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isArabic: boolean;
  t: (key: string) => string;
}

export const translations: Record<string, { en: string; ar: string }> = {
  // Navigation & Meta
  site_title: {
    en: 'Ahmed Al Malah — AI × Software × Data × Business × Product',
    ar: 'أحمد الملاح — الذكاء الاصطناعي × البرمجيات × البيانات × الأعمال',
  },
  site_desc: {
    en: 'Cinematic Portfolio of Ahmed Al Malah — Applied AI & Software Engineer, Computer Science at Alexandria University.',
    ar: 'المعرض السينمائي لأحمد الملاح — مهندس برمجيات وذكاء اصطناعي تطبيقي، علوم الحاسوب بجامعة الإسكندرية.',
  },
  engineer_tag: {
    en: 'AI × SOFTWARE × DATA',
    ar: 'ذكاء اصطناعي × برمجيات × بيانات',
  },
  nav_identity: { en: 'IDENTITY', ar: 'الهوية' },
  nav_oss: { en: 'OSS // أُسّ', ar: 'أُسّ' },
  nav_journey: { en: 'JOURNEY', ar: 'المسيرة' },
  nav_profile: { en: 'PROFILE', ar: 'الخبرات' },
  nav_contact: { en: 'CONTACT', ar: 'تواصل' },

  // Intro Prologue
  intro_eyebrow: {
    en: 'PROLOGUE // THE ARCHITECTURE OF IDENTITY',
    ar: 'المقدمة // معمارية الهوية',
  },
  intro_statement_1: {
    en: 'EVERY HERO HAS A STORY BEHIND THE MASK.',
    ar: 'لكل بطل قصة خلف القناع.',
  },
  intro_statement_2: {
    en: 'MINE IS WRITTEN IN CODE.',
    ar: 'وقصتي كُتبت بالكود.',
  },
  intro_skip: {
    en: 'CLICK OR ESC TO ENTER',
    ar: 'اضغط للمتابعة أو ESC',
  },

  // World 01: Hero (The Mask)
  hero_eyebrow_mask: { en: '01 // THE MASK', ar: '٠١ // القناع' },
  hero_eyebrow_unmasking: { en: 'UNMASKING // REVEALING THE ENGINEER', ar: 'كسر القناع // كشف الهوية' },
  hero_eyebrow_unmasked: { en: '01 // THE PERSON', ar: '٠١ // الشخص خلف القناع' },
  hero_heading_mask: { en: 'THE MASK', ar: 'القناع' },
  hero_heading_unmasked: { en: 'AHMED AL MALAH', ar: 'أحمد الملاح' },
  hero_sub_mask: { en: 'SCROLL TO UNMASK THE ENGINEER BEHIND IT', ar: 'مرر للأسفل لكشف المهندس خلف القناع' },
  hero_sub_unmasking: { en: 'IDENTITY BREAKING THROUGH...', ar: 'جاري كشف الهوية الهندسية...' },
  hero_sub_unmasked: { en: 'AI APPLIED & SOFTWARE ENGINEER', ar: 'مهندس برمجيات وذكاء اصطناعي تطبيقي' },

  // World 02: The Person (Identity)
  person_eyebrow: { en: '02 // THE PERSON', ar: '٠٢ // الهوية والشخصية' },
  person_name: { en: 'AHMED AL MALAH', ar: 'أحمد الملاح' },
  person_role: { en: 'AI APPLIED & SOFTWARE ENGINEER', ar: 'مهندس برمجيات وذكاء اصطناعي تطبيقي' },
  person_p1: {
    en: 'An applied software engineer building at the intersection of deep code, intelligent models, data analytics, and real-world business execution.',
    ar: 'مهندس برمجيات تطبيقي يبني عند تقاطع الكود العميق، والنماذج الذكية، وتحليل البيانات، والتنفيذ الفعلي للأعمال.',
  },
  person_p2: {
    en: 'Bridging algorithmic computer science foundations with modern generative pipelines, building resilient products, and translating complex business problems into scalable software solutions.',
    ar: 'أجمع بين الأسس الخوارزمية لعلوم الحاسوب ومسارات الذكاء الاصطناعي الحديثة، لبناء منتجات متينة وتحويل مشاكل الأعمال المعقدة إلى حلول برمجية قابلة للتوسع.',
  },
  person_location: { en: 'ALEXANDRIA, EGYPT', ar: 'الإسكندرية، مصر' },
  person_class: { en: 'CS · CLASS OF 2026 · GPA 3.8 (A+)', ar: 'علوم الحاسوب · دفعة ٢٠٢٦ · معدل 3.8 (+A)' },

  // World 03: OSS Product Showcase
  oss_eyebrow: { en: '03 // FLAGSHIP AI PRODUCT', ar: '٠٣ // المنتج الرئيسي للذكاء الاصطناعي' },
  oss_title: { en: 'AI-POWERED WEBSITE BUILDING', ar: 'بناء مواقع الويب بالذكاء الاصطناعي' },
  oss_subtitle: {
    en: 'Describe your idea in plain words. OSS turns that idea into a complete, beautiful, production-grade website.',
    ar: 'صف فكرتك بالكلمات الطبيعية. يحول نظام أُسّ هذه الفكرة إلى موقع ويب متكامل، جمالي، وجاهز للإنتاج.',
  },
  oss_stage_01: { en: '01. HUMAN IDEA', ar: '٠١. فكرة المستخدم' },
  oss_stage_02: { en: '02. UNDERSTAND', ar: '٠٢. الفهم والتفكيك' },
  oss_stage_03: { en: '03. BUILD', ar: '٠٣. البناء والتشكيل' },
  oss_stage_04: { en: '04. PRODUCT', ar: '٠٤. بنية المنتج' },
  oss_simulated_tag: { en: 'SIMULATED PRODUCT ARCHITECTURE', ar: 'بنية منتج توضيحية ومحاكاة' },

  // World 04: Career Archive
  journey_eyebrow: { en: '04 // CAREER ARCHIVE', ar: '٠٤ // سجل المسيرة المهنية' },
  journey_title: { en: 'THE JOURNEY', ar: 'المسيرة' },
  journey_sub: {
    en: 'Verified roles, institutional coordination, leadership progression, and engineering contributions across industry, startups, and community ecosystems.',
    ar: 'الأدوار المهنية المعتمدة، والتنسيق المؤسسي، والتدرج القيادي، والمساهمات الهندسية عبر الشركات والمنظومات المجتمعية.',
  },

  // World 05: Engineering Profile & Capabilities
  system_eyebrow: { en: '05 // ENGINEERING & BUSINESS PROFILE', ar: '٠٥ // الملف الهندسي وإدارة الأعمال' },
  system_title: { en: 'WHAT I BUILD', ar: 'ماذا أبني' },
  system_intersection: {
    en: 'AI × SOFTWARE × DATA × BUSINESS × PRODUCT',
    ar: 'الذكاء الاصطناعي × البرمجيات × البيانات × الأعمال × المنتجات',
  },
  data_business_quote: {
    en: "I don't only build systems. I understand the data behind them and the business decisions they support.",
    ar: "لا أكتفي ببناء الأنظمة البرمجية؛ بل أفهم البيانات الكامنة خلفها والقرارات الاستراتيجية التي تدعمها.",
  },
  scale_eyebrow: { en: 'APPROXIMATE ENGINEERING SCALE', ar: 'حجم الأعمال البرمجية والمنتجات' },
  scale_web: { en: 'WEB APPLICATIONS DELIVERED', ar: 'تطبيقات ومواقع ويب تم تسليمها' },
  scale_mobile: { en: 'MOBILE APPLICATIONS ENGINEERED', ar: 'تطبيقات هواتف تم تطويرها' },
  scale_ai: { en: 'AI & SOFTWARE SYSTEMS BUILT', ar: 'أنظمة ذكاء اصطناعي وبرمجيات' },
  scale_projects: { en: 'PROJECTS DELIVERED', ar: 'مشاريع منفذة' },
  scale_products: { en: 'SYSTEMS DEVELOPED', ar: 'أنظمة مطورة' },
  scroll_to_advance: { en: 'SCROLL TO ADVANCE SYSTEM ARCHITECTURE', ar: 'مرر لاستعراض البنية الهندسية' },

  // World 06: Impact
  impact_eyebrow: { en: '06 // IMPACT & REACH', ar: '٠٦ // الأثر المجتمعي والتعليمي' },
  impact_heading: { en: '13,000+ PEOPLE REACHED', ar: '+١٣,٠٠٠ مستفيد ومشارك' },
  impact_desc: {
    en: 'Over 5,000+ learners reached through direct AI and Graphic Design educational workshops, contributing to a broader community reach of 13,000+ youth across leadership initiatives and technical sessions in Egypt.',
    ar: 'أكثر من ٥,٠٠٠ مستفيد تم تدريبهم من خلال ورش عمل الذكاء الاصطناعي والتصميم، ضمن أثر مجتمعي واسع تخطى ١٣ ألف شاب ومستفيد عبر المبادرات القيادية والفعاليات التقنية في مصر.',
  },
  impact_sub_badge: {
    en: '5,000+ LEARNERS IN AI & DESIGN SESSIONS',
    ar: '٥,٠٠٠+ متدرب في جلسات الذكاء الاصطناعي والتصميم',
  },

  // World 07: Academic Foundation
  origin_eyebrow: { en: '07 // ACADEMIC FOUNDATION', ar: '٠٧ // الأساس الأكاديمي' },
  origin_degree: { en: 'COMPUTER SCIENCE', ar: 'علوم الحاسوب' },
  origin_university: { en: 'ALEXANDRIA UNIVERSITY · CLASS OF 2026', ar: 'جامعة الإسكندرية · دفعة ٢٠٢٦' },
  origin_academic_standing: { en: 'GPA: 3.8 · GRADE: A+ · ALEXANDRIA, EGYPT', ar: 'المعدل: 3.8 · التقدير: +A · الإسكندرية، مصر' },
  origin_desc: {
    en: 'Rigorous foundations in theoretical computation, discrete mathematics, operating systems, and software architecture, translated directly into applied systems.',
    ar: 'أسس راسخة في الحوسبة النظرية، وهياكل البيانات، والرياضيات المتقطعة، ومعمارية البرمجيات، تُترجم مباشرة إلى أنظمة تطبيقية وإنتاجية.',
  },

  // World 08: Final Scene & Contact
  final_eyebrow: { en: '08 // FINAL SCENE', ar: '٠٨ // المشهد الختامي' },
  final_heading: { en: "LET'S BUILD SOMETHING.", ar: 'فلنبنِ شيئاً عظيماً.' },
  final_sub: {
    en: 'OPEN FOR TECHNICAL ARCHITECTURE, APPLIED AI SYSTEMS & STRATEGIC PRODUCT COLLABORATION',
    ar: 'متاح لهندسة النظم البرمجية، وحلول الذكاء الاصطناعي التطبيقي، وبناء المنتجات الرقمية',
  },
  contact_connect_cta: { en: "LET'S CONNECT", ar: 'تواصل معي' },
  contact_email: { en: 'EMAIL DIRECT', ar: 'البريد الإلكتروني' },
  contact_instagram: { en: 'INSTAGRAM', ar: 'إنستغرام' },
  contact_facebook: { en: 'FACEBOOK', ar: 'فيسبوك' },
  contact_location: { en: 'LOCATION', ar: 'الموقع الجغرافي' },
  location_val: { en: 'ALEXANDRIA, EGYPT', ar: 'الإسكندرية، مصر' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/ar')) return 'ar';
      const stored = localStorage.getItem('ahmed_portfolio_lang');
      if (stored === 'ar' || stored === 'en') return stored;
    }
    return 'en';
  });

  const isArabic = lang === 'ar';

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ahmed_portfolio_lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

      if (newLang === 'ar' && !window.location.pathname.startsWith('/ar')) {
        window.history.pushState(null, '', '/ar');
      } else if (newLang === 'en' && window.location.pathname.startsWith('/ar')) {
        window.history.pushState(null, '', '/');
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.title = translations.site_title[lang] || 'Ahmed Al Malah';
  }, [lang, isArabic]);

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isArabic, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
