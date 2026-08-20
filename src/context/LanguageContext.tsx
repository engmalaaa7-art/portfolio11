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
    en: 'Ahmed Al Malah — Designer · Developer · AI',
    ar: 'أحمد الملاح — مبرمج · مطور · ذكاء اصطناعي',
  },
  site_desc: {
    en: 'Portfolio of Ahmed Al Malah — Designer, Developer & AI Specialist.',
    ar: 'المعرض الشخصي لأحمد الملاح — مبرمج ومطور ومتخصص في الذكاء الاصطناعي.',
  },
  engineer_tag: {
    en: 'DESIGNER · DEVELOPER · AI',
    ar: 'مصمم · مطور · ذكاء اصطناعي',
  },
  nav_identity: { en: 'ABOUT', ar: 'عن أحمد' },
  nav_oss: { en: 'OSS // أُسّ', ar: 'منتج أُسّ' },
  nav_journey: { en: 'EXPERIENCE', ar: 'الخبرات' },
  nav_profile: { en: 'SKILLS & SERVICES', ar: 'المهارات والخدمات' },
  nav_contact: { en: 'CONTACT', ar: 'تواصل' },

  // Intro Prologue
  intro_eyebrow: {
    en: 'PROLOGUE // THE ARCHITECTURE OF IDENTITY',
    ar: 'المقدمة //  الهوية',
  },
  intro_statement_1: {
    en: 'EVERY HERO HAS A STORY BEHIND THE MASK.',
    ar: 'لكل بطل قصة خلف القناع.',
  },
  intro_statement_2: {
    en: 'MINE IS WRITTEN IN CODE & DESIGN.',
    ar: 'وقصتي كُتبت بالتصميم والكود.',
  },
  intro_skip: {
    en: 'CLICK OR ESC TO ENTER',
    ar: 'اضغط للمتابعة أو ESC',
  },

  // World 01: Hero (Cover)
  hero_eyebrow_mask: { en: '01 // THE MASK', ar: '٠١ // القناع' },
  hero_eyebrow_unmasking: { en: 'UNMASKING // REVEALING THE DESIGNER & DEVELOPER', ar: 'كشف الهوية // المصمم والمطور' },
  hero_eyebrow_unmasked: { en: '01 // THE PERSON', ar: '٠١ // الشخص خلف القناع' },
  hero_heading_mask: { en: 'THE MASK', ar: 'القناع' },
  hero_heading_unmasked: { en: 'AHMED AL MALAH', ar: 'أحمد الملاح' },
  hero_sub_mask: { en: 'DESIGNER · DEVELOPER · AI', ar: 'مصمم · مطور · ذكاء اصطناعي' },
  hero_sub_unmasking: { en: 'DESIGN × TECHNOLOGY × AI', ar: 'تصميم × تكنولوجيا × ذكاء اصطناعي' },
  hero_sub_unmasked: { en: 'DESIGNER · DEVELOPER · AI', ar: 'مصمم · مطور · ذكاء اصطناعي' },
  hero_portfolio_year: { en: 'PORTFOLIO — 2026', ar: 'المعرض الشخصي — ٢٠٢٦' },

  // World 02: About Me & Currently
  person_eyebrow: { en: '02 // ABOUT ME', ar: '٠٢ // عن أحمد' },
  person_greeting: { en: "HELLO, I'M AHMED.", ar: 'أهلًا، أنا أحمد.' },
  person_name: { en: 'AHMED AL MALAH', ar: 'أحـــــمد اــــلملاح' },
  person_role: { en: 'Designer · Developer · AI', ar: 'مصمم ومطور مهتم بالـ Design, Technology & AI' },
  person_p1: {
    en: "I work in the space where Creative Thinking meets Technical Execution, always striving to turn ideas into clear, impactful solutions.",
    ar: 'بشتغل في المساحة اللي بتجمع بين Creative Thinking و Technical Execution، وبحاول دائمًا أحوّل الأفكار لحلول واضحة ومؤثرة.',
  },
  person_p2: {
    en: 'Currently expanding my expertise in AI & Product Development, building solutions that bridge design aesthetics with technical execution.',
    ar: 'حاليًا بوسّع خبرتي في الـ AI & Product Development، وبشتغل على بناء حلول تجمع بين الإبداع والتنفيذ التقني.',
  },
  person_currently_tag: { en: 'CURRENTLY // DESIGN × CODE × AI', ar: 'حاليًا // تصميم × كود × ذكاء اصطناعي' },
  person_location: { en: 'CAIRO / ALEXANDRIA, EGYPT', ar: 'القاهرة / الإسكندرية، مصر' },

  // Section 03: By The Numbers
  numbers_eyebrow: { en: '03 // BY THE NUMBERS', ar: '٠٣ // بالأرقام' },
  num_years: { en: 'YEARS OF EXPERIENCE', ar: 'سنوات من الخبرة' },
  num_projects: { en: 'PROJECTS DELIVERED', ar: 'مشروعًا منفذًا' },
  num_teams: { en: 'TEAMS & ORGANIZATIONS', ar: 'فرق عمل ومنظمات' },
  num_markets: { en: 'GLOBAL MARKETS', ar: 'أسواق مختلفة' },
  num_disciplines: { en: 'CORE DISCIPLINES', ar: 'مجالات رئيسية' },

  // Section 04: What I Do
  what_eyebrow: { en: '04 // WHAT I DO', ar: '٠٤ // ماذا أقدم' },
  what_title: { en: 'CORE DISCIPLINES', ar: 'المجالات الرئيسية' },
  what_art_dir_title: { en: 'ART DIRECTION', ar: 'التوجيه الفني والتصميم' },
  what_art_dir_desc: { en: 'Creative Direction · Visual Systems · Branding', ar: 'توجيه إبداعي · أنظمة بصرية · هوية بصرية' },
  what_digital_title: { en: 'DIGITAL DESIGN', ar: 'التصميم الرقمي وتجربة المستخدم' },
  what_digital_desc: { en: 'UI/UX · Web Design · Digital Experiences', ar: 'واجهات وتجربة المستخدم · تصميم الويب · تجارب رقمية' },
  what_dev_title: { en: 'DEVELOPMENT', ar: 'تطوير البرمجيات' },
  what_dev_desc: { en: 'Frontend · Mobile · Backend', ar: 'واجهات الأمامية · تطبيقات الهاتف · البنية الخلفية' },
  what_ai_title: { en: 'ARTIFICIAL INTELLIGENCE', ar: 'الذكاء الاصطناعي' },
  what_ai_desc: { en: 'AI Products · Automation · AI Workflows', ar: 'منتجات الذكاء الاصطناعي · الأتمتة · مسارات العمل الذكية' },

  // Section 05: Experience
  journey_eyebrow: { en: '05 // EXPERIENCE', ar: '٠٥ // الخبرات المهنية' },
  journey_title: { en: 'CAREER ARCHIVE', ar: 'المسيرة المهنية' },
  journey_sub: {
    en: 'Proven record of creative direction, software engineering, UI/UX, and marketing technology across top brands and institutions.',
    ar: 'سجل حافل من التوجيه الإبداعي، وهندسة البرمجيات، وتصميم الواجهات عبر كبرى المؤسسات والعلامات التجارية.',
  },

  // Section 06: My Skills
  skills_eyebrow: { en: '06 // MY SKILLS', ar: '٠٦ // المهارات والتقنيات' },
  skills_title: { en: 'TECHNICAL & CREATIVE TOOLKIT', ar: 'الأدوات والتقنيات' },

  // Section 07: My Approach
  approach_eyebrow: { en: '07 // MY APPROACH', ar: '٠٧ // منهجية العمل' },
  approach_title: { en: 'HOW I THINK & BUILD', ar: 'كيف أفكر وأبني' },
  approach_01_title: { en: '01 — UNDERSTAND', ar: '٠١ — الفهم والتحليل' },
  approach_01_desc: { en: 'Understand the problem before starting the solution.', ar: 'أفهم المشكلة قبل ما أبدأ الحل.' },
  approach_02_title: { en: '02 — THINK', ar: '٠٢ — التفكير والتوجيه' },
  approach_02_desc: { en: 'Transform the problem into a clear direction.', ar: 'أحوّل الـProblem إلى Direction واضح.' },
  approach_03_title: { en: '03 — BUILD', ar: '٠٣ — البناء والتنفيذ' },
  approach_03_desc: { en: 'Design meets Technology.', ar: 'التصميم يلتقي بالتكنولوجيا والبرمجة.' },
  approach_04_title: { en: '04 — REFINE', ar: '٠٤ — الإتقان والتطوير' },
  approach_04_desc: { en: 'Small details make the big difference.', ar: 'التفاصيل الصغيرة بتصنع الفرق.' },

  // Section 08: Areas of Interest
  interests_eyebrow: { en: '08 // AREAS OF INTEREST', ar: '٠٨ // مجالات الاهتمام' },

  // World 03: OSS Product Showcase (Static compact card)
  oss_eyebrow: { en: 'FLAGSHIP AI PRODUCT', ar: 'المنتج الرئيسي' },
  oss_title: { en: 'OSS // AI-POWERED WEBSITE ENGINE', ar: 'أُسّ // محرك بناء المواقع بالذكاء الاصطناعي' },
  oss_subtitle: {
    en: 'Turns natural language ideas into complete, beautiful, production-grade web applications.',
    ar: 'يحول أفكار المستخدم بالكلمات البسيطة إلى مواقع ويب متكاملة، جمالية، وجاهزة للإنتاج.',
  },

  // Section 10: Personal Statement
  quote_eyebrow: { en: '10 // PERSONAL STATEMENT', ar: '١٠ // الفلسفة الشخصية' },
  quote_main: {
    en: 'I BELIEVE GOOD WORK STARTS WITH GOOD THINKING.',
    ar: 'أؤمن أن العمل الجيد يبدأ بالتفكير الجيد.',
  },
  quote_sub: {
    en: "My goal isn't just to make something that looks good. My goal is to create something clear, useful, and meaningful.",
    ar: 'مش هدفي إني أعمل حاجة شكلها حلو بس. هدفي إني أعمل حاجة واضحة، مفيدة، وليها معنى.',
  },

  // Section 11: Final Contact Scene
  final_eyebrow: { en: '11 // CONTACT', ar: '١١ // التواصل' },
  final_heading: { en: "LET'S CREATE SOMETHING WORTH REMEMBERING.", ar: 'فلنبنِ شيئاً يستحق أن يُذكر.' },
  final_sub: {
    en: 'OPEN FOR ART DIRECTION, UI/UX, FRONTEND & AI PRODUCT COLLABORATION',
    ar: 'متاح للتوجيه الفني، تصميم الواجهات، تطوير الويب، ومشاريع الذكاء الاصطناعي',
  },
  contact_connect_cta: { en: "LET'S CONNECT", ar: 'تواصل معي' },
  contact_email: { en: 'EMAIL', ar: 'البريد الإلكتروني' },
  contact_linkedin: { en: 'LINKEDIN', ar: 'لينكد إن' },
  contact_behance: { en: 'BEHANCE', ar: 'بيهانس' },
  contact_github: { en: 'GITHUB', ar: 'جيت هاب' },
  contact_location: { en: 'LOCATION', ar: 'الموقع الجغرافي' },
  location_val: { en: 'CAIRO / ALEXANDRIA, EGYPT', ar: 'القاهرة / الإسكندرية، مصر' },
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
