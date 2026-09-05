import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Smartphone, Server, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

interface DomainItem {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  accent: string;
  icon: React.ReactNode;
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
    accent: '#F58A07',
    icon: <Palette size={20} />,
    capabilitiesEn: [
      'Art Direction & Visual Systems',
      'UI/UX & Web Design',
      'Interactive Design Prototypes',
      'Creative Direction & Branding',
      'Figma, Photoshop, Illustrator',
    ],
    capabilitiesAr: [
      'التوجيه الفني وبناء الأنظمة البصرية',
      'واجهات وتجربة المستخدم (UI/UX)',
      'نماذج التصميم التفاعلية',
      'التوجيه الإبداعي والهوية البصرية',
      'Figma · Photoshop · Illustrator · Canva',
    ],
  },
  {
    id: 'frontend',
    number: '02',
    titleEn: 'FRONTEND ARCHITECTURE',
    titleAr: 'تطوير الواجهات الأمامية',
    subtitleEn: 'React · Next.js · TypeScript · Tailwind CSS',
    subtitleAr: 'React · Next.js · TypeScript · Tailwind CSS',
    accent: '#38BDF8',
    icon: <Code2 size={20} />,
    capabilitiesEn: [
      'React & Next.js Ecosystems',
      'TypeScript Architecture',
      'Tailwind CSS & Modern Styling',
      'High-Performance Web Animation',
      'Accessible & Responsive Interfaces',
    ],
    capabilitiesAr: [
      'منظومة React & Next.js المتقدمة',
      'معمارية كود عالية الدقة بـ TypeScript',
      'تصميم الواجهات الحديث بـ Tailwind CSS',
      'حركات وتأثيرات ويب عالية الأداء',
      'واجهات متجاوبة ومتاحة لجميع المستخدمين',
    ],
  },
  {
    id: 'mobile',
    number: '03',
    titleEn: 'MOBILE DEVELOPMENT',
    titleAr: 'تطوير تطبيقات الهاتف',
    subtitleEn: 'Flutter · Dart',
    subtitleAr: 'Flutter · Dart',
    accent: '#1D4ED8',
    icon: <Smartphone size={20} />,
    capabilitiesEn: [
      'Cross-Platform Flutter Apps',
      'Dart State Management & Architecture',
      'Mobile UI/UX Implementation',
      'Native Device API Integration',
      'Performance Optimization for iOS/Android',
    ],
    capabilitiesAr: [
      'تطبيقات متعددة المنصات بـ Flutter',
      'معمارية إدارة الحالة بـ Dart',
      'تنفيذ واجهات وتجارب الهاتف المتقنة',
      'الربط مع ميزات الأجهزة والأنظمة',
      'تحسين الأداء لنظامي iOS و Android',
    ],
  },
  {
    id: 'backend',
    number: '04',
    titleEn: 'BACKEND & CLOUD SYSTEMS',
    titleAr: 'الخوادم والبنية التحتية',
    subtitleEn: 'Node.js · Python · FastAPI',
    subtitleAr: 'Node.js · Python · FastAPI',
    accent: '#94A3B8',
    icon: <Server size={20} />,
    capabilitiesEn: [
      'Node.js & Express Microservices',
      'Python Data & Logic Pipelines',
      'High-Performance FastAPI Endpoints',
      'RESTful & GraphQL API Architecture',
      'Database Schema & Caching Strategies',
    ],
    capabilitiesAr: [
      'خدمات الخوادم المصغرة بـ Node.js',
      'مسارات البيانات والمنطق البرمجي بـ Python',
      'واجهات برمجية فائقة السرعة بـ FastAPI',
      'تصميم معمارية RESTful & GraphQL',
      'إدارة قواعد البيانات واستراتيجيات التخزين المؤقت',
    ],
  },
  {
    id: 'ai',
    number: '05',
    titleEn: 'APPLIED ARTIFICIAL INTELLIGENCE',
    titleAr: 'الذكاء الاصطناعي والأتمتة الذكية',
    subtitleEn: 'LLMs · Autonomous Agents · AI Workflows',
    subtitleAr: 'النماذج اللغوية · الوكلاء الذكيون · مسارات العمل التوليدية',
    accent: '#00C2FF',
    icon: <Sparkles size={20} />,
    capabilitiesEn: [
      'Full-Cycle AI Product Development',
      'LLM Integrations & Autonomous Agents',
      'Intelligent Automation Workflows',
      'Custom Generative AI Tools',
      'AI-Powered Code & Media Systems',
    ],
    capabilitiesAr: [
      'تطوير منتجات الذكاء الاصطناعي متكاملة',
      'دمج النماذج اللغوية (LLMs) والوكلاء المستقلين',
      'أتمتة مسارات العمل الذكية',
      'أدوات الذكاء الاصطناعي التوليدي المخصصة',
      'أنظمة الذكاء الاصطناعي للكود والوسائط',
    ],
    quoteEn: 'I BELIEVE GOOD WORK STARTS WITH GOOD THINKING.',
    quoteAr: 'أؤمن أن العمل الجيد يبدأ بالتفكير السليم.',
  },
];

export const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('design');
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  const currentDomain = DOMAINS.find((d) => d.id === activeTab) || DOMAINS[0];

  return (
    <section
      id="capabilities"
      aria-label="Engineering Profile — Capabilities and Scale"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#070A10',
        color: 'var(--color-text-primary)',
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1rem, 4vw, 3.5rem)',
        borderTop: '1px solid rgba(29, 78, 216, 0.25)',
        overflow: 'hidden',
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 95vw)',
          height: 'min(600px, 60vh)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.16) 0%, rgba(7, 10, 16, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vh, 4.5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-solar-amber)',
            }}
          >
            <span style={{ width: '18px', height: '1px', backgroundColor: 'var(--color-solar-amber)' }} />
            {t('system_eyebrow')}
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.6rem, 6.5vw, 5.2rem)' : 'clamp(3rem, 7vw, 5.8rem)',
              lineHeight: isArabic ? 1.15 : 0.9,
              letterSpacing: isArabic ? '0.01em' : '0.03em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: 0,
              fontWeight: isArabic ? 900 : 800,
            }}
          >
            {t('system_title')}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '1.05rem' : '1rem',
              color: 'var(--color-text-secondary)',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            {isArabic
              ? 'تكامل متوازن بين الدقة الهندسية للبرمجيات والتوجيه البصري الإبداعي، مدعوماً بأنظمة الذكاء الاصطناعي.'
              : 'A balanced intersection of high-precision software engineering, visual direction, and applied AI systems.'}
          </motion.p>
        </div>

        {/* ── INTERACTIVE CAPABILITIES BENTO ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'stretch',
          }}
        >
          {/* Domain Selector Navigation Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {DOMAINS.map((domain) => {
              const isSelected = domain.id === activeTab;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveTab(domain.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-4) var(--space-5)',
                    borderRadius: 'var(--border-radius-md)',
                    backgroundColor: isSelected ? 'rgba(29, 78, 216, 0.15)' : 'var(--color-surface-card)',
                    border: isSelected ? `1px solid ${domain.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isSelected ? `0 0 25px ${domain.accent}30` : 'none',
                    textAlign: isArabic ? 'right' : 'left',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        color: isSelected ? domain.accent : 'var(--color-text-muted)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {domain.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span
                        style={{
                          fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: domain.accent,
                          textTransform: 'uppercase',
                        }}
                      >
                        {isArabic ? `٠${domain.number.replace('0', '')}` : domain.number} // {isArabic ? domain.subtitleAr : domain.subtitleEn}
                      </span>
                      <span
                        style={{
                          fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
                          fontSize: isArabic ? '1.25rem' : '1.15rem',
                          fontWeight: 800,
                          color: isSelected ? '#FFFFFF' : 'var(--color-text-secondary)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {isArabic ? domain.titleAr : domain.titleEn}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      color: isSelected ? domain.accent : 'rgba(255, 255, 255, 0.2)',
                      transform: isArabic ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Domain Deep-Dive Panel */}
          <motion.div
            key={currentDomain.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              backgroundColor: 'var(--color-surface-card)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${currentDomain.accent}50`,
              borderRadius: 'var(--border-radius-lg)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--space-6)',
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.7), 0 0 40px ${currentDomain.accent}20`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Glow Accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: isArabic ? 'auto' : 0,
                left: isArabic ? 0 : 'auto',
                width: '180px',
                height: '180px',
                background: `radial-gradient(circle at top, ${currentDomain.accent}25 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: currentDomain.accent,
                    boxShadow: `0 0 10px ${currentDomain.accent}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: currentDomain.accent,
                    textTransform: 'uppercase',
                  }}
                >
                  {isArabic ? currentDomain.subtitleAr : currentDomain.subtitleEn}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
                  fontSize: isArabic ? 'clamp(1.8rem, 4vw, 2.6rem)' : 'clamp(2rem, 4vw, 2.8rem)',
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                  margin: 0,
                  fontWeight: 800,
                }}
              >
                {isArabic ? currentDomain.titleAr : currentDomain.titleEn}
              </h3>

              {currentDomain.quoteEn && (
                <p
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.45rem',
                    color: 'var(--color-electric-cyan)',
                    margin: 0,
                    textShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
                  }}
                >
                  "{isArabic ? currentDomain.quoteAr : currentDomain.quoteEn}"
                </p>
              )}

              {/* Capabilities Bulleted List */}
              <ul
                style={{
                  listStyle: 'none',
                  margin: 'var(--space-2) 0 0 0',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                {(isArabic ? currentDomain.capabilitiesAr : currentDomain.capabilitiesEn).map((cap) => (
                  <li
                    key={cap}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: isArabic ? '1.1rem' : '1rem',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle size={16} color={currentDomain.accent} style={{ flexShrink: 0 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Scale Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-3)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: 'var(--space-4)',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>
                  25–30
                </span>
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                  {t('scale_web')}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>
                  4–5
                </span>
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                  {t('scale_mobile')}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>
                  ~5
                </span>
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                  {t('scale_ai')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
