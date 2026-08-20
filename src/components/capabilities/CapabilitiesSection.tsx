import React, { useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

/* ─────────────────────────────────────────────────────────────────────────────
   DATA (4 Core Dimensions)
───────────────────────────────────────────────────────────────────────────── */

interface DomainItem {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  accent: string;
  capabilitiesEn: string[];
  capabilitiesAr: string[];
  quoteEn?: string;
  quoteAr?: string;
}

const DOMAINS: DomainItem[] = [
  {
    id: 'design',
    number: '01',
    titleEn: 'ART DIRECTION & DESIGN',
    titleAr: 'التوجيه الفني والتصميم',
    subtitleEn: 'Figma · Photoshop · Illustrator · Canva',
    subtitleAr: 'Figma · Photoshop · Illustrator · Canva',
    accent: '#E64A24',
    capabilitiesEn: [
      'Art Direction & Branding',
      'UI/UX & Web Design',
      'Visual Experience Systems',
      'Creative Direction',
      'Figma, Photoshop, Illustrator',
    ],
    capabilitiesAr: [
      'التوجيه الفني والتصميم',
      'واجهات وتجربة المستخدم (UI/UX)',
      'الأنظمة البصرية والتجارب الرقمية',
      'التوجيه الإبداعي والهوية البصرية',
      'Figma · Photoshop · Illustrator · Canva',
    ],
  },
  {
    id: 'frontend',
    number: '02',
    titleEn: 'FRONTEND DEVELOPMENT',
    titleAr: 'تطوير الواجهات الأمامية',
    subtitleEn: 'React · Next.js · TypeScript · Tailwind CSS',
    subtitleAr: 'React · Next.js · TypeScript · Tailwind CSS',
    accent: '#B82024',
    capabilitiesEn: [
      'React & Next.js Ecosystem',
      'TypeScript Architecture',
      'Tailwind CSS Styling',
      'Interactive Web Experiences',
      'Performance Optimization',
    ],
    capabilitiesAr: [
      'تطوير الواجهات باستخدام React & Next.js',
      'معمارية كود عالية الجودة بـ TypeScript',
      'التصميم المتقدم بـ Tailwind CSS',
      'تجارب ويب تفاعلية متجاوبة',
      'تحسين الأداء وسرعة التحميل',
    ],
  },
  {
    id: 'mobile',
    number: '03',
    titleEn: 'MOBILE DEVELOPMENT',
    titleAr: 'تطوير تطبيقات الهاتف',
    subtitleEn: 'Flutter · Dart',
    subtitleAr: 'Flutter · Dart',
    accent: '#F27A32',
    capabilitiesEn: [
      'Cross-Platform Flutter Apps',
      'Dart Architecture',
      'Mobile UI/UX Implementation',
      'Native Feature Integration',
      'State Management & APIs',
    ],
    capabilitiesAr: [
      'تطبيقات متعددة المنصات بـ Flutter',
      'برمجة متقدمة بلغة Dart',
      'تنفيذ واجهات وتجارب الهاتف',
      'تكامل الميزات والأنظمة البرمجية',
      'إدارة الحالة والربط مع الواجهات البرمجية',
    ],
  },
  {
    id: 'backend',
    number: '04',
    titleEn: 'BACKEND DEVELOPMENT',
    titleAr: 'تطوير الخوادم والبنية الخلفية',
    subtitleEn: 'Node.js · Python · FastAPI',
    subtitleAr: 'Node.js · Python · FastAPI',
    accent: '#B9ADA1',
    capabilitiesEn: [
      'Node.js & Express Services',
      'Python Data & Logic Pipelines',
      'High-Performance FastAPI',
      'REST & GraphQL APIs',
      'Scalable System Architecture',
    ],
    capabilitiesAr: [
      'خدمات الخوادم بـ Node.js',
      'معالجة البيانات والمنطق البرمجي بـ Python',
      'واجهات برمجية سريعة بـ FastAPI',
      'تصميم واجهات RESTful APIs',
      'بناء أنظمة خلفية قابلة للتوسع',
    ],
  },
  {
    id: 'ai',
    number: '05',
    titleEn: 'ARTIFICIAL INTELLIGENCE',
    titleAr: 'الذكاء الاصطناعي والأتمتة',
    subtitleEn: 'LLMs · AI Agents · Automation',
    subtitleAr: 'النماذج اللغوية · الوكلاء الذكيون · الأتمتة',
    accent: '#E64A24',
    capabilitiesEn: [
      'AI Product Development',
      'LLM Integrations & Agents',
      'Intelligent Automation Workflows',
      'Custom AI Solutions',
      'Generative AI Workflows',
    ],
    capabilitiesAr: [
      'تطوير منتجات الذكاء الاصطناعي',
      'دمج النماذج اللغوية (LLMs) والوكلاء',
      'أتمتة مسارات العمل الذكية',
      'حلول البرمجة بمساعدة الذكاء الاصطناعي',
      'تطوير الأدوات التوليدية التفاعلية',
    ],
    quoteEn: 'I BELIEVE GOOD WORK STARTS WITH GOOD THINKING.',
    quoteAr: 'أؤمن أن العمل الجيد يبدأ بالتفكير الجيد.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   STATIC MOBILE / REDUCED MOTION LAYOUT
───────────────────────────────────────────────────────────────────────────── */

const StaticLayout: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <div
      style={{
        padding: 'clamp(4rem, 8vh, 7rem) var(--space-6)',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(3rem, 6vh, 5rem)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: isArabic ? '0.04em' : '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-hot-orange)',
          }}
        >
          <span style={{ width: '16px', height: '1px', backgroundColor: 'var(--color-hot-orange)' }} />
          {t('system_eyebrow')}
        </div>
        <h2
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
            fontSize: isArabic ? 'clamp(2.8rem, 7vw, 5rem)' : 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: isArabic ? 1.2 : 0.9,
            letterSpacing: isArabic ? '0.02em' : '0.04em',
            textTransform: 'uppercase',
            color: 'var(--color-cream-white)',
            margin: 0,
            fontWeight: isArabic ? 800 : 'normal',
          }}
        >
          {t('system_title')}
        </h2>
      </div>

      {/* 4 Domains */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vh, 4rem)' }}>
        {DOMAINS.map((domain) => (
          <div key={domain.id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: domain.accent,
                  boxShadow: `0 0 10px ${domain.accent}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: isArabic ? '0.04em' : '0.2em',
                  color: domain.accent,
                }}
              >
                {domain.number} // {isArabic ? domain.subtitleAr : domain.subtitleEn}
              </span>
            </div>
            <h3
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: isArabic ? 'clamp(1.8rem, 4.5vw, 3rem)' : 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: isArabic ? 1.2 : 0.95,
                letterSpacing: isArabic ? '0.02em' : '0.04em',
                textTransform: 'uppercase',
                color: 'var(--color-cream-white)',
                margin: 0,
                fontWeight: isArabic ? 800 : 'normal',
              }}
            >
              {isArabic ? domain.titleAr : domain.titleEn}
            </h3>

            {domain.quoteEn && (
              <p
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                  fontSize: isArabic ? '1.15rem' : 'clamp(1rem, 1.8vw, 1.35rem)',
                  color: 'var(--color-warm-orange)',
                  fontStyle: 'italic',
                  margin: '4px 0',
                  lineHeight: 1.4,
                }}
              >
                "{isArabic ? domain.quoteAr : domain.quoteEn}"
              </p>
            )}

            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                borderLeft: isArabic ? 'none' : `2px solid ${domain.accent}`,
                borderRight: isArabic ? `2px solid ${domain.accent}` : 'none',
                paddingLeft: isArabic ? 0 : 'var(--space-4)',
                paddingRight: isArabic ? 'var(--space-4)' : 0,
              }}
            >
              {(isArabic ? domain.capabilitiesAr : domain.capabilitiesEn).map((cap) => (
                <li
                  key={cap}
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: isArabic ? '1.05rem' : 'clamp(0.95rem, 1.4vw, 1.1rem)',
                    fontWeight: isArabic ? 500 : 300,
                    color: 'var(--color-cream-white)',
                  }}
                >
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Scale Metrics — Static */}
      <div
        style={{
          borderTop: '1px solid rgba(243, 237, 227, 0.1)',
          paddingTop: 'clamp(2rem, 4vh, 3.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1.5rem, 3vh, 2.5rem)',
        }}
      >
        <div
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: isArabic ? '0.04em' : '0.22em',
            color: 'var(--color-hot-orange)',
            textTransform: 'uppercase',
          }}
        >
          {t('scale_eyebrow')}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 0.9, letterSpacing: '0.04em', color: 'var(--color-cream-white)' }}>
            25–30
          </div>
          <div style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-muted-beige)' }}>
            {t('scale_web')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 0.9, letterSpacing: '0.04em', color: 'var(--color-cream-white)' }}>
            4–5
          </div>
          <div style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-muted-beige)' }}>
            {t('scale_mobile')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 0.9, letterSpacing: '0.04em', color: 'var(--color-cream-white)' }}>
            ~5
          </div>
          <div style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-muted-beige)' }}>
            {t('scale_ai')}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   DOMAIN FRAME (Desktop)
───────────────────────────────────────────────────────────────────────────── */

interface DomainFrameProps {
  domain: DomainItem;
  opacity: MotionValue<number>;
  translateY: MotionValue<number>;
  scale: MotionValue<number>;
}

const DomainFrame: React.FC<DomainFrameProps> = ({
  domain,
  opacity,
  translateY,
  scale,
}) => {
  const { isArabic } = useLanguage();

  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        opacity,
        y: translateY,
        scale,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {/* Domain number + subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: domain.accent,
              boxShadow: `0 0 18px ${domain.accent}`,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '1rem' : 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.22em',
              textTransform: 'uppercase',
              color: domain.accent,
            }}
          >
            {domain.number} // {isArabic ? domain.subtitleAr : domain.subtitleEn}
          </span>
        </div>

        {/* Domain title */}
        <h3
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
            fontSize: isArabic ? 'clamp(2.4rem, 4.8vw, 4.2rem)' : 'clamp(2.8rem, 5.2vw, 4.6rem)',
            lineHeight: isArabic ? 1.2 : 0.9,
            letterSpacing: isArabic ? '0.02em' : '0.04em',
            textTransform: 'uppercase',
            color: 'var(--color-cream-white)',
            margin: 0,
            fontWeight: isArabic ? 800 : 'normal',
          }}
        >
          {isArabic ? domain.titleAr : domain.titleEn}
        </h3>

        {/* Data & Business Statement Callout */}
        {domain.quoteEn && (
          <p
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
              fontSize: isArabic ? '1.25rem' : 'clamp(1.1rem, 2vw, 1.45rem)',
              lineHeight: 1.35,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              color: 'var(--color-warm-orange)',
              fontStyle: 'italic',
              margin: '2px 0',
              textShadow: '0 0 20px rgba(242, 122, 50, 0.35)',
            }}
          >
            "{isArabic ? domain.quoteAr : domain.quoteEn}"
          </p>
        )}

        {/* Thin separator line */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: `${domain.accent}40`,
          }}
        />

        {/* Capabilities list */}
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {(isArabic ? domain.capabilitiesAr : domain.capabilitiesEn).map((cap, i) => (
            <li
              key={cap}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 'var(--space-3)',
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '1.15rem' : 'clamp(0.95rem, 1.5vw, 1.2rem)',
                fontWeight: isArabic ? 500 : 300,
                color: 'var(--color-cream-white)',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: domain.accent,
                  opacity: 0.8,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export const CapabilitiesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { isArabic, t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1. AI domain (0.00 – 0.25)
  const aiOpacity = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0.4, 1, 1, 0]);
  const aiY = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [30, 0, 0, -30]);
  const aiScale = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0.97, 1, 1, 0.97]);

  // 2. Software domain (0.24 – 0.48)
  const swOpacity = useTransform(scrollYProgress, [0.24, 0.3, 0.44, 0.5], [0, 1, 1, 0]);
  const swY = useTransform(scrollYProgress, [0.24, 0.3, 0.44, 0.5], [30, 0, 0, -30]);
  const swScale = useTransform(scrollYProgress, [0.24, 0.3, 0.44, 0.5], [0.97, 1, 1, 0.97]);

  // 3. Data & Business domain (0.46 – 0.70)
  const dbOpacity = useTransform(scrollYProgress, [0.46, 0.52, 0.66, 0.72], [0, 1, 1, 0]);
  const dbY = useTransform(scrollYProgress, [0.46, 0.52, 0.66, 0.72], [30, 0, 0, -30]);
  const dbScale = useTransform(scrollYProgress, [0.46, 0.52, 0.66, 0.72], [0.97, 1, 1, 0.97]);

  // 4. Product domain (0.68 – 0.86)
  const prOpacity = useTransform(scrollYProgress, [0.68, 0.74, 0.84, 0.89], [0, 1, 1, 0]);
  const prY = useTransform(scrollYProgress, [0.68, 0.74, 0.84, 0.89], [30, 0, 0, -30]);
  const prScale = useTransform(scrollYProgress, [0.68, 0.74, 0.84, 0.89], [0.97, 1, 1, 0.97]);

  // 5. Scale moment (0.85 – 1.00)
  const scaleOpacity = useTransform(scrollYProgress, [0.85, 0.91, 1], [0, 1, 1]);
  const scaleY = useTransform(scrollYProgress, [0.85, 0.91], [30, 0]);

  // Header fade
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05, 0.32, 0.38], [0.5, 1, 1, 0]);

  // Trajectory line draw
  const lineScaleY = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  // Stage label
  const stageLabel = useTransform(
    scrollYProgress,
    [0, 0.26, 0.48, 0.7, 0.88],
    isArabic
      ? ['٠١ // هندسة الذكاء الاصطناعي', '٠٢ // هندسة البرمجيات', '٠٣ // البيانات والأعمال', '٠٤ // هندسة المنتجات', 'حجم الأعمال البرمجية']
      : ['01 // AI ENGINEERING', '02 // SOFTWARE ENGINEERING', '03 // DATA & BUSINESS', '04 // PRODUCT ENGINEERING', 'ENGINEERING SCALE']
  );

  if (shouldReduceMotion) {
    return (
      <section
        ref={containerRef}
        id="capabilities"
        aria-label="Engineering Profile — Capabilities and Scale"
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: 'var(--color-deep-black)',
          color: 'var(--color-cream-white)',
          borderTop: '1px solid rgba(184, 32, 36, 0.15)',
          width: '100%',
        }}
      >
        <StaticLayout />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="capabilities"
      aria-label="Engineering Profile — Capabilities and Scale"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        borderTop: '1px solid rgba(184, 32, 36, 0.15)',
        width: '100%',
        height: '440vh',
      }}
    >
      {/* ── Sticky Viewport Pane ─────────────────────────────────────── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100svh',
          overflow: 'hidden',
        }}
      >
        {/* Background atmospheric glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,32,36,0.06) 0%, transparent 75%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Trajectory line ──────────── */}
        <div
          style={{
            position: 'absolute',
            left: isArabic ? 'auto' : 'clamp(2.5rem, 5vw, 4rem)',
            right: isArabic ? 'clamp(2.5rem, 5vw, 4rem)' : 'auto',
            top: '10%',
            bottom: '10%',
            width: '1px',
            backgroundColor: 'rgba(243,237,227,0.08)',
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--color-hot-orange)',
              scaleY: lineScaleY,
              transformOrigin: 'top',
              boxShadow: '0 0 8px rgba(230,74,36,0.6)',
            }}
          />
        </div>

        {/* ── Stage indicator (Top Corner) ─────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(1.5rem, 3vh, 2.5rem)',
            left: isArabic ? 'clamp(2rem, 4vw, 4rem)' : 'auto',
            right: isArabic ? 'auto' : 'clamp(2rem, 4vw, 4rem)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            zIndex: 30,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-hot-orange)',
              boxShadow: '0 0 10px var(--color-hot-orange)',
            }}
          />
          <motion.span
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
            }}
          >
            {stageLabel}
          </motion.span>
        </div>

        {/* ── Persistent section header ─────── */}
        <motion.div
          style={{
            position: 'absolute',
            top: 'clamp(1.5rem, 3vh, 2.5rem)',
            left: isArabic ? 'auto' : 'clamp(4.5rem, 8vw, 7rem)',
            right: isArabic ? 'clamp(4.5rem, 8vw, 7rem)' : 'auto',
            opacity: headerOpacity,
            zIndex: 20,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-hot-orange)',
            }}
          >
            {t('system_eyebrow')}
          </div>
          <h2
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(1.8rem, 3.2vw, 2.6rem)' : 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: isArabic ? 1.2 : 0.9,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
              fontWeight: isArabic ? 800 : 'normal',
            }}
          >
            {t('system_title')}
          </h2>
        </motion.div>

        {/* ── Central content stage ───────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '950px',
            padding: '0 clamp(4rem, 8vw, 7rem)',
            boxSizing: 'border-box',
          }}
        >
          {/* Domain 01: AI Engineering */}
          <DomainFrame
            domain={DOMAINS[0]}
            opacity={aiOpacity}
            translateY={aiY}
            scale={aiScale}
          />

          {/* Domain 02: Software Engineering */}
          <DomainFrame
            domain={DOMAINS[1]}
            opacity={swOpacity}
            translateY={swY}
            scale={swScale}
          />

          {/* Domain 03: Data & Business */}
          <DomainFrame
            domain={DOMAINS[2]}
            opacity={dbOpacity}
            translateY={dbY}
            scale={dbScale}
          />

          {/* Domain 04: Product Engineering */}
          <DomainFrame
            domain={DOMAINS[3]}
            opacity={prOpacity}
            translateY={prY}
            scale={prScale}
          />

          {/* ── Scale Moment ──────────────────────────────────────── */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: scaleOpacity,
              y: scaleY,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1.5rem, 3vh, 2.5rem)',
            }}
          >
            <div
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: isArabic ? '0.04em' : '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-hot-orange)',
              }}
            >
              {t('scale_eyebrow')}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(2rem, 4vw, 4rem)',
                borderTop: '1px solid rgba(243,237,227,0.1)',
                paddingTop: 'clamp(1.5rem, 3vh, 2.5rem)',
              }}
            >
              {/* 25-30 Web Apps */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                    lineHeight: 0.9,
                    letterSpacing: '0.04em',
                    color: 'var(--color-cream-white)',
                  }}
                >
                  25–30
                </div>
                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: isArabic ? '1.05rem' : 'clamp(0.75rem, 1.1vw, 0.95rem)',
                    fontWeight: 700,
                    letterSpacing: isArabic ? '0.02em' : '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-orange)',
                  }}
                >
                  {t('scale_web')}
                </div>
                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-beige)',
                  }}
                >
                  {t('scale_projects')}
                </div>
              </div>

              {/* 4-5 Mobile Apps */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  borderLeft: isArabic ? 'none' : '1px solid rgba(243,237,227,0.1)',
                  borderRight: isArabic ? '1px solid rgba(243,237,227,0.1)' : 'none',
                  paddingLeft: isArabic ? 0 : 'clamp(1.5rem, 3vw, 2.5rem)',
                  paddingRight: isArabic ? 'clamp(1.5rem, 3vw, 2.5rem)' : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                    lineHeight: 0.9,
                    letterSpacing: '0.04em',
                    color: 'var(--color-cream-white)',
                  }}
                >
                  4–5
                </div>
                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: isArabic ? '1.05rem' : 'clamp(0.75rem, 1.1vw, 0.95rem)',
                    fontWeight: 700,
                    letterSpacing: isArabic ? '0.02em' : '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-orange)',
                  }}
                >
                  {t('scale_mobile')}
                </div>
                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-beige)',
                  }}
                >
                  {t('scale_projects')}
                </div>
              </div>

              {/* ~5 AI Software Builds */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  borderLeft: isArabic ? 'none' : '1px solid rgba(243,237,227,0.1)',
                  borderRight: isArabic ? '1px solid rgba(243,237,227,0.1)' : 'none',
                  paddingLeft: isArabic ? 0 : 'clamp(1.5rem, 3vw, 2.5rem)',
                  paddingRight: isArabic ? 'clamp(1.5rem, 3vw, 2.5rem)' : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                    lineHeight: 0.9,
                    letterSpacing: '0.04em',
                    color: 'var(--color-cream-white)',
                  }}
                >
                  ~5
                </div>
                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: isArabic ? '1.05rem' : 'clamp(0.75rem, 1.1vw, 0.95rem)',
                    fontWeight: 700,
                    letterSpacing: isArabic ? '0.02em' : '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-orange)',
                  }}
                >
                  {t('scale_ai')}
                </div>
                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-beige)',
                  }}
                >
                  {t('scale_products')}
                </div>
              </div>
            </div>

            {/* Intersection statement */}
            <div
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                fontSize: isArabic ? '1.4rem' : 'clamp(1.1rem, 2.2vw, 1.8rem)',
                letterSpacing: isArabic ? '0.02em' : '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-cream-white)',
                opacity: 0.5,
                marginTop: 'var(--space-2)',
                fontWeight: isArabic ? 700 : 'normal',
              }}
            >
              {t('system_intersection')}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom progress cue ─────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 3vh, 2.5rem)',
            left: isArabic ? 'clamp(2rem, 4vw, 4rem)' : 'clamp(4.5rem, 8vw, 7rem)',
            right: isArabic ? 'clamp(4.5rem, 8vw, 7rem)' : 'clamp(2rem, 4vw, 4rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.9rem' : 'var(--text-xs)',
            letterSpacing: isArabic ? '0.04em' : '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(185,173,161,0.5)',
          }}
        >
          <span>{t('scroll_to_advance')}</span>
          <motion.span
            style={{
              color: 'var(--color-warm-orange)',
              fontWeight: 700,
            }}
          >
            {stageLabel}
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
