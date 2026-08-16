import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Cpu, Box, Award, MapPin } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const EducationOrigin: React.FC = () => {
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  const areas = [
    {
      num: '01',
      titleEn: 'THEORETICAL FOUNDATIONS',
      titleAr: 'الأساس النظري والحوسبة',
      descEn: 'Algorithms, Data Structures, Discrete Mathematics & Operating Systems',
      descAr: 'الخوارزميات، وهياكل البيانات، والرياضيات المتقطعة، وأنظمة التشغيل',
      icon: <BookOpen size={16} />,
      color: '#B9ADA1',
    },
    {
      num: '02',
      titleEn: 'SYSTEMS ENGINEERING',
      titleAr: 'معمارية وهندسة الأنظمة',
      descEn: 'Software Architecture, Distributed Design & Scalable APIs',
      descAr: 'معمارية البرمجيات، والأنظمة الموزعة، وتصميم واجهات البرمجة القابلة للتوسع',
      icon: <Layers size={16} />,
      color: '#B82024',
    },
    {
      num: '03',
      titleEn: 'APPLIED AI & DATA',
      titleAr: 'الذكاء الاصطناعي والبيانات',
      descEn: 'Machine Learning Pipelines, Agent Workflows & Statistical Analytics',
      descAr: 'مسارات تعلم الآلة، ووكلاء الذكاء الاصطناعي، والتحليلات الإحصائية',
      icon: <Cpu size={16} />,
      color: '#E64A24',
    },
    {
      num: '04',
      titleEn: 'PRODUCT PRODUCTION',
      titleAr: 'بناء وهندسة المنتجات',
      descEn: 'Full-Stack Web Applications, Mobile Software & SaaS Architecture',
      descAr: 'تطبيقات الويب الشاملة، والبرمجيات المتكاملة للهواتف المحمولة، وحلول SaaS',
      icon: <Box size={16} />,
      color: '#F27A32',
    },
  ];

  return (
    <section
      id="origin-education"
      aria-label="Academic Foundation and Education"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 32, 36, 0.2)',
      }}
    >
      {/* Abstract Drafting & Architectural Geometry Background */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.12,
        }}
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <line x1="120" y1="0" x2="120" y2="700" stroke="var(--color-cream-white)" strokeDasharray="2 4" />
        <line x1="880" y1="0" x2="880" y2="700" stroke="var(--color-cream-white)" strokeDasharray="2 4" />
        <circle cx="500" cy="350" r="240" stroke="var(--color-hot-orange)" strokeWidth="0.5" fill="none" />
        <circle cx="500" cy="350" r="340" stroke="var(--color-cinematic-red)" strokeWidth="0.3" strokeDasharray="3 6" fill="none" />
      </svg>

      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vh, 4.5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Eyebrow Header */}
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
            color: 'var(--color-hot-orange)',
          }}
        >
          <span style={{ width: '18px', height: '1px', backgroundColor: 'var(--color-hot-orange)' }} />
          {t('origin_eyebrow')}
        </motion.div>

        {/* Core Degree Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
              fontSize: isArabic ? 'clamp(1.2rem, 2.2vw, 1.6rem)' : 'clamp(1.1rem, 2vw, 1.5rem)',
              letterSpacing: isArabic ? '0.02em' : '0.12em',
              color: 'var(--color-warm-orange)',
              textTransform: 'uppercase',
              fontWeight: isArabic ? 700 : 'normal',
            }}
          >
            {t('origin_university')}
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(3rem, 7.5vw, 6.5rem)' : 'clamp(3.5rem, 8.5vw, 7.5rem)',
              lineHeight: isArabic ? 1.15 : 0.88,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
              fontWeight: isArabic ? 800 : 'normal',
            }}
          >
            {t('origin_degree')}
          </motion.h2>

          {/* Academic Standing & Standing Badges: GPA 3.8 · Grade A+ · Alexandria, Egypt */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-3)',
              marginTop: 'var(--space-2)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                backgroundColor: 'rgba(230, 74, 36, 0.15)',
                border: '1px solid var(--color-hot-orange)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--color-cream-white)',
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <Award size={13} color="var(--color-hot-orange)" />
              <span>{isArabic ? 'المعدل: 3.8 (امتياز مرتفع +A)' : 'GPA 3.8 · GRADE A+'}</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                backgroundColor: 'rgba(243, 237, 227, 0.06)',
                border: '1px solid rgba(243, 237, 227, 0.18)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--color-muted-beige)',
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <MapPin size={13} />
              <span>{isArabic ? 'الإسكندرية، مصر' : 'ALEXANDRIA, EGYPT'}</span>
            </div>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '1.1rem' : 'clamp(0.95rem, 1.3vw, 1.1rem)',
              fontWeight: isArabic ? 400 : 300,
              lineHeight: isArabic ? 1.7 : 1.6,
              color: 'var(--color-muted-beige)',
              maxWidth: '720px',
              margin: 'var(--space-2) 0 0 0',
            }}
          >
            {t('origin_desc')}
          </motion.p>
        </div>

        {/* 4 Academic Vectors */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-4)',
            borderTop: '1px solid rgba(243, 237, 227, 0.1)',
            paddingTop: 'var(--space-6)',
          }}
        >
          {areas.map((area) => (
            <div
              key={area.num}
              style={{
                padding: 'var(--space-5)',
                backgroundColor: 'rgba(14, 12, 16, 0.65)',
                border: `1px solid ${area.color}33`,
                borderRadius: 'var(--border-radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: area.color, fontWeight: 700, letterSpacing: '0.12em' }}>
                  {area.num} //
                </span>
                <span style={{ color: area.color }}>{area.icon}</span>
              </div>
              <h3 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: isArabic ? '1.35rem' : '1.4rem', color: 'var(--color-cream-white)', margin: 0, fontWeight: isArabic ? 700 : 'normal' }}>
                {isArabic ? area.titleAr : area.titleEn}
              </h3>
              <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: isArabic ? '0.95rem' : '0.85rem', color: 'var(--color-muted-beige)', lineHeight: isArabic ? 1.6 : 1.5, margin: 0 }}>
                {isArabic ? area.descAr : area.descEn}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationOrigin;
