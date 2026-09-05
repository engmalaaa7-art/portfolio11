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
      titleEn: '01 — UNDERSTAND',
      titleAr: '٠١ — الفهم والتحليل',
      descEn: 'Understand the problem deeply before architecting the solution.',
      descAr: 'فهم المشكلة بعمق قبل البدء في وضع الحلول.',
      icon: <BookOpen size={16} />,
      color: '#94A3B8',
    },
    {
      num: '02',
      titleEn: '02 — THINK',
      titleAr: '٠٢ — التفكير والتوجيه',
      descEn: 'Transform the problem into a clear strategic direction.',
      descAr: 'تحويل المشكلة إلى رؤية واتجاه استراتيجي واضح.',
      icon: <Layers size={16} />,
      color: '#1D4ED8',
    },
    {
      num: '03',
      titleEn: '03 — BUILD',
      titleAr: '٠٣ — البناء والتنفيذ',
      descEn: 'Where design meets precision engineering.',
      descAr: 'التصميم يلتقي بالتكنولوجيا والبرمجة.',
      icon: <Cpu size={16} />,
      color: '#38BDF8',
    },
    {
      num: '04',
      titleEn: '04 — REFINE',
      titleAr: '٠٤ — الإتقان والتطوير',
      descEn: 'Small details make the monumental difference.',
      descAr: 'التفاصيل الدقيقة تصنع الفارق الكبير.',
      icon: <Box size={16} />,
      color: '#F58A07',
    },
  ];

  return (
    <section
      id="origin-education"
      aria-label="Academic Foundation and Education"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-canvas)',
        color: 'var(--color-text-primary)',
        padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(29, 78, 216, 0.25)',
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
          opacity: 0.08,
        }}
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <line x1="120" y1="0" x2="120" y2="700" stroke="var(--color-text-primary)" strokeDasharray="2 4" />
        <line x1="880" y1="0" x2="880" y2="700" stroke="var(--color-text-primary)" strokeDasharray="2 4" />
        <circle cx="500" cy="350" r="240" stroke="var(--color-solar-amber)" strokeWidth="0.5" fill="none" />
        <circle cx="500" cy="350" r="340" stroke="var(--color-cobalt-light)" strokeWidth="0.3" strokeDasharray="3 6" fill="none" />
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
            color: 'var(--color-solar-amber)',
          }}
        >
          <span style={{ width: '18px', height: '1px', backgroundColor: 'var(--color-solar-amber)' }} />
          {t('approach_eyebrow')}
        </motion.div>

        {/* Core Degree Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? 'clamp(1.2rem, 2.2vw, 1.6rem)' : 'clamp(1.1rem, 2vw, 1.5rem)',
              letterSpacing: isArabic ? '0.02em' : '0.12em',
              color: 'var(--color-electric-cyan)',
              textTransform: 'uppercase',
              fontWeight: 600,
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
              fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.5rem, 6vw, 5.5rem)' : 'clamp(3rem, 7vw, 6rem)',
              lineHeight: isArabic ? 1.15 : 0.88,
              letterSpacing: isArabic ? '0.01em' : '0.03em',
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)',
              margin: 0,
              width: '100%',
              whiteSpace: 'nowrap',
              fontWeight: isArabic ? 900 : 800,
            }}
          >
            {t('approach_title')}
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
                backgroundColor: 'rgba(245, 138, 7, 0.15)',
                border: '1px solid var(--color-solar-amber)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--color-text-primary)',
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <Award size={13} color="var(--color-solar-amber)" />
              <span>{isArabic ? 'المعدل: 3.8 (امتياز مرتفع +A)' : 'GPA 3.8 · GRADE A+'}</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: 'var(--border-subtle)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--color-text-secondary)',
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
              fontWeight: 400,
              lineHeight: isArabic ? 1.75 : 1.65,
              color: 'var(--color-text-secondary)',
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
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-6)',
          }}
        >
          {areas.map((area) => (
            <div
              key={area.num}
              style={{
                padding: 'var(--space-5)',
                backgroundColor: 'var(--color-surface-card)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${area.color}40`,
                borderRadius: 'var(--border-radius-md)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', color: area.color, fontWeight: 700, letterSpacing: '0.12em' }}>
                  {isArabic ? `٠${area.num.replace('0', '')}` : area.num} //
                </span>
                <span style={{ color: area.color }}>{area.icon}</span>
              </div>
              <h3 style={{ fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)', fontSize: isArabic ? '1.35rem' : '1.35rem', color: 'var(--color-text-primary)', margin: 0, fontWeight: 800 }}>
                {isArabic ? area.titleAr : area.titleEn}
              </h3>
              <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: isArabic ? '0.95rem' : '0.88rem', color: 'var(--color-text-secondary)', lineHeight: isArabic ? 1.65 : 1.55, margin: 0 }}>
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
