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
    en: 'Ahmed Al Malah — Software Engineer & Creative Technologist',
    ar: 'أحمد الملاح — مهندس برمجيات ومبتكر تقني',
  },
  site_desc: {
    en: 'Portfolio of Ahmed Al Malah — Software Engineering, Creative Direction, UI/UX & Applied AI Systems.',
    ar: 'المعرض الشخصي لأحمد الملاح — هندسة البرمجيات، التوجيه الإبداعي، وتطوير أنظمة الذكاء الاصطناعي.',
  },
  engineer_tag: {
    en: 'SOFTWARE ENGINEER · CREATIVE DIRECTION · AI',
    ar: 'هندسة برمجيات · توجيه إبداعي · ذكاء اصطناعي',
  },
  nav_identity: { en: 'ABOUT', ar: 'عن أحمد' },
  nav_oss: { en: 'OSS // ENGINE', ar: 'أُسّ // المحرك' },
  nav_journey: { en: 'EXPERIENCE', ar: 'الخبرات' },
  nav_profile: { en: 'CAPABILITIES', ar: 'القدرات والمهارات' },
  nav_contact: { en: 'CONTACT', ar: 'تواصل' },

  // Intro Prologue
  intro_eyebrow: {
    en: 'PROLOGUE // THE ARCHITECTURE OF CREATION',
    ar: 'المقدمة // معمارية الابتكار',
  },
  intro_statement_1: {
    en: 'EVERY MEANINGFUL BUILD BEGINS WITH A BOLD VISION.',
    ar: 'كل عمل ذي معنى يبدأ برؤية استثنائية.',
  },
  intro_statement_2: {
    en: 'IMAGINE IT... AND I WILL BUILD IT.',
    ar: 'تخيّلها... وأنا أبنيها.',
  },
  intro_skip: {
    en: 'CLICK OR ESC TO ENTER',
    ar: 'اضغط للمتابعة أو زر الهروب',
  },

  // World 01: Hero (Cover)
  hero_badge: { en: 'PORTFOLIO', ar: 'بورتفوليو' },
  hero_eyebrow_mask: { en: '01 // ARCHITECTURAL IDENTITY', ar: '٠١ // معمارية الهوية' },
  hero_eyebrow_unmasking: { en: 'CREATIVE DIRECTION × ENGINEERING', ar: 'التوجيه الإبداعي × الهندسة البرمجية' },
  hero_eyebrow_unmasked: { en: '01 // AHMED AL MALAH', ar: '٠١ // أحمد المـلاح' },
  hero_heading_mask: { en: 'AHMED AL MALAH', ar: 'أحمد المـلاح' },
  hero_heading_unmasked: { en: 'AHMED AL MALAH', ar: 'أحمد المـلاح' },
  hero_signature_tagline: { en: 'Imagine it... and I build it.', ar: 'تخيّلها.. وأنا أبنيها.' },
  hero_script_role: { en: 'software engineer', ar: 'software engineer' },
  hero_sub_mask: { en: 'SOFTWARE ENGINEER · CREATIVE DIRECTION · APPLIED AI', ar: 'مهندس برمجيات · توجيه إبداعي · ذكاء اصطناعي تطبيقي' },
  hero_sub_unmasking: { en: 'IMAGINE IT... AND I BUILD IT.', ar: 'تخيّلها... وأنا أبنيها.' },
  hero_sub_unmasked: { en: 'SOFTWARE ENGINEER · CREATIVE DIRECTION · APPLIED AI', ar: 'مهندس برمجيات · توجيه إبداعي · ذكاء اصطناعي تطبيقي' },
  hero_portfolio_year: { en: 'PORTFOLIO — 2026', ar: 'المعرض الشخصي — ٢٠٢٦' },

  // World 02: About Me & Currently
  person_eyebrow: { en: '02 // ABOUT ME', ar: '٠٢ // عن أحمد' },
  person_greeting: { en: "HELLO, I'M AHMED.", ar: 'أهلًا، أنا أحمد.' },
  person_name: { en: 'AHMED AL MALAH', ar: 'أحمد الملاح' },
  person_role: { en: 'Designer · Developer · AI', ar: 'مصمم ومطور مهتم بالتصميم والتكنولوجيا والذكاء الاصطناعي' },
  person_p1: {
    en: "I work in the space where Creative Thinking meets Technical Execution, always striving to turn ideas into clear, impactful solutions.",
    ar: 'أعمل في المساحة التي تجمع بين التفكير الإبداعي والتنفيذ التقني، وأسعى دائماً لتحويل الأفكار إلى حلول واضحة ومؤثرة.',
  },
  person_p2: {
    en: 'Currently expanding my expertise in AI & Product Development, building solutions that bridge design aesthetics with technical execution.',
    ar: 'أعمل حالياً على تعزيز خبرتي في تطوير منتجات الذكاء الاصطناعي، وبناء حلول تجمع بين جمالية التصميم وقوة التنفيذ البرمجي.',
  },
  person_currently_tag: { en: 'CURRENTLY // DESIGN × CODE × AI', ar: 'حالياً // تصميم × برمجة × ذكاء اصطناعي' },
  person_location: { en: ' / ALEXANDRIA, EGYPT', ar: ' / الإسكندرية، مصر' },

  // Section 03: By The Numbers
  numbers_eyebrow: { en: '03 // BY THE NUMBERS', ar: '٠٣ // بالأرقام' },
  num_years: { en: 'YEARS OF EXPERIENCE', ar: 'سنوات من الخبرة' },
  num_projects: { en: 'PROJECTS DELIVERED', ar: 'مشروعاً منجزاً' },
  num_teams: { en: 'TEAMS & ORGANIZATIONS', ar: 'فرق عمل ومؤسسات' },
  num_markets: { en: 'GLOBAL MARKETS', ar: 'أسواق مختلفة' },
  num_disciplines: { en: 'CORE DISCIPLINES', ar: 'مجالات رئيسية' },

  // Section 04: What I Do
  what_eyebrow: { en: '04 // WHAT I DO', ar: '٠٤ // ماذا أقدم' },
  what_title: { en: 'CORE DISCIPLINES', ar: 'المجالات الرئيسية' },
  what_art_dir_title: { en: 'ART DIRECTION', ar: 'التوجيه الفني والتصميم' },
  what_art_dir_desc: { en: 'Creative Direction · Visual Systems · Branding', ar: 'توجيه إبداعي · أنظمة بصرية · هوية بصرية' },
  what_digital_title: { en: 'DIGITAL DESIGN', ar: 'التصميم الرقمي والواجهات' },
  what_digital_desc: { en: 'UI/UX · Web Design · Digital Experiences', ar: 'واجهات وتجربة المستخدم · تصميم الويب · تجارب رقمية' },
  what_dev_title: { en: 'DEVELOPMENT', ar: 'تطوير البرمجيات' },
  what_dev_desc: { en: 'Frontend · Mobile · Backend', ar: 'واجهات أمامية · تطبيقات الهاتف · خوادم وبنية خلفية' },
  what_ai_title: { en: 'ARTIFICIAL INTELLIGENCE', ar: 'الذكاء الاصطناعي' },
  what_ai_desc: { en: 'AI Products · Automation · AI Workflows', ar: 'منتجات الذكاء الاصطناعي · الأتمتة الذكية · مسارات العمل' },

  // Section 05: Experience
  journey_eyebrow: { en: '05 // EXPERIENCE', ar: '٠٥ // الخبرات المهنية' },
  journey_title: { en: 'CAREER ARCHIVE', ar: 'المسيرة المهنية' },
  journey_sub: {
    en: 'Proven record of creative direction, software engineering, UI/UX, and marketing technology across top brands and institutions.',
    ar: 'سجل حافل من التوجيه الإبداعي، وهندسة البرمجيات، وتصميم الواجهات عبر كبرى المؤسسات والعلامات التجارية.',
  },

  // Section 06: My Skills & Profile
  skills_eyebrow: { en: '06 // MY SKILLS', ar: '٠٦ // المهارات والتقنيات' },
  skills_title: { en: 'TECHNICAL & CREATIVE TOOLKIT', ar: 'الأدوات والتقنيات' },
  system_eyebrow: { en: '05 // ENGINEERING PROFILE', ar: '٠٥ // القدرات والمهارات' },
  system_title: { en: 'CAPABILITIES & SCALE', ar: 'القدرات وحجم الأعمال' },
  scale_web: { en: 'WEB APPLICATIONS', ar: 'تطبيقات ومواقع ويب' },
  scale_mobile: { en: 'MOBILE APPS', ar: 'تطبيقات هاتف' },
  scale_ai: { en: 'AI PRODUCTS & BUILDS', ar: 'منتجات وأنظمة ذكاء اصطناعي' },
  scale_projects: { en: 'PROJECTS DELIVERED', ar: 'مشروعاً منجزاً' },
  scale_products: { en: 'SYSTEMS & BUILDS', ar: 'أنظمة ومنتجات' },
  system_intersection: { en: 'DESIGN × CODE × AI × SCALE', ar: 'تصميم × برمجة × ذكاء اصطناعي × أثر' },

  // Section 06: Impact & Community
  impact_eyebrow: { en: '06 // IMPACT & REACH', ar: '٠٦ // الأثر والمجتمع' },
  impact_heading: { en: 'PEOPLE REACHED', ar: 'مستفيد ومشارك' },
  impact_sub_badge: { en: '5,000+ LEARNERS IN AI & GRAPHIC DESIGN', ar: '٥,٠٠٠+ متدرب في ورش الذكاء الاصطناعي والتصميم' },
  impact_desc: {
    en: 'Led educational sessions, technical workshops, and digital content initiatives across multiple Egyptian governorates, empowering thousands of youth with skills in Artificial Intelligence and Design.',
    ar: 'قيادة ورش عمل وجلسات تدريبية ومبادرات محتوى رقمي شملت محافظات متعددة، لتمكين آلاف الشباب من مهارات الذكاء الاصطناعي والتصميم.',
  },

  // Section 07: My Approach & Education
  origin_university: { en: 'FACULTY OF ARTS // GEOGRAPHY', ar: 'كلية الآداب // قسم الجغرافيا' },
  origin_desc: {
    en: 'Combining analytical discipline with visual direction and software architecture to build memorable digital solutions.',
    ar: 'الجمع بين الدقة التحليلية والتوجيه البصري وهندسة البرمجيات لبناء حلول رقمية مؤثرة.',
  },
  approach_eyebrow: { en: '07 // MY APPROACH', ar: '٠٧ // منهجية العمل' },
  approach_title: { en: 'HOW I THINK & BUILD', ar: 'كيف أفكر وأبني' },
  approach_01_title: { en: '01 — UNDERSTAND', ar: '٠١ — الفهم والتحليل' },
  approach_01_desc: { en: 'Understand the problem before starting the solution.', ar: 'فهم المشكلة بعمق قبل البدء في وضع الحلول.' },
  approach_02_title: { en: '02 — THINK', ar: '٠٢ — التفكير والتوجيه' },
  approach_02_desc: { en: 'Transform the problem into a clear direction.', ar: 'تحويل المشكلة إلى رؤية واتجاه استراتيجي واضح.' },
  approach_03_title: { en: '03 — BUILD', ar: '٠٣ — البناء والتنفيذ' },
  approach_03_desc: { en: 'Design meets Technology.', ar: 'التصميم يلتقي بالتكنولوجيا والبرمجة.' },
  approach_04_title: { en: '04 — REFINE', ar: '٠٤ — الإتقان والتطوير' },
  approach_04_desc: { en: 'Small details make the big difference.', ar: 'التفاصيل الدقيقة تصنع الفارق الكبير.' },

  // Section 08: Areas of Interest
  interests_eyebrow: { en: '08 // AREAS OF INTEREST', ar: '٠٨ // مجالات الاهتمام' },

  // World 03: OSS Product Showcase
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
    ar: 'أؤمن أن العمل المتقن يبدأ بالتفكير السليم.',
  },
  quote_sub: {
    en: "My goal isn't just to make something that looks good. My goal is to create something clear, useful, and meaningful.",
    ar: 'ليس هدفي صنع شيء جميل المظهر فحسب، بل بناء تجارب واضحة ومفيدة وذات معنى وقيمة حقيقية.',
  },

  // Section 11: Final Contact Scene
  final_eyebrow: { en: '11 // CONTACT', ar: '١١ // التواصل' },
  final_heading: { en: "LET'S CREATE SOMETHING WORTH REMEMBERING.", ar: 'فلنبنِ شيئاً يستحق أن يُذكر.' },
  final_sub: {
    en: 'OPEN FOR ART DIRECTION, UI/UX, FRONTEND & AI PRODUCT COLLABORATION',
    ar: 'متاح للتوجيه الفني، تصميم الواجهات، تطوير البرمجيات، ومشاريع الذكاء الاصطناعي',
  },
  contact_connect_cta: { en: "LET'S CONNECT", ar: 'تواصل معي' },
  contact_email: { en: 'EMAIL', ar: 'البريد الإلكتروني' },
  contact_linkedin: { en: 'LINKEDIN', ar: 'لينكد إن' },
  contact_behance: { en: 'BEHANCE', ar: 'بيهانس' },
  contact_github: { en: 'GITHUB', ar: 'جيت هاب' },
  contact_location: { en: 'LOCATION', ar: 'الموقع الجغرافي' },
  location_val: { en: ' / ALEXANDRIA, EGYPT', ar: ' / الإسكندرية، مصر' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang] = useState<Language>('ar');
  const isArabic = true;

  const setLang = () => {
    // Permanent Arabic mode
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ahmed_portfolio_lang', 'ar');
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      document.title = translations.site_title.ar || 'أحمد المـلاح — مهندس برمجيات ومبتكر تقني';
    }
  }, []);

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry.ar || entry.en;
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
