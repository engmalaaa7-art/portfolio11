import React from 'react';
import { motion } from 'framer-motion';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const UnmaskedIntro: React.FC = () => {
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  return (
    <section
      id="unmasked-intro"
      aria-label="World 02 — About Me & Identity"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        padding: 'clamp(4rem, 8vh, 7rem) var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 32, 36, 0.25)',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(800px, 90vw)',
          height: 'min(500px, 60vh)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(184, 32, 36, 0.08) 0%, rgba(9, 8, 10, 0) 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(2.5rem, 5vh, 4rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Header Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {/* Eyebrow */}
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
            {t('person_eyebrow')}
          </motion.div>

          {/* Greeting & Name */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.8rem, 6.5vw, 5.5rem)' : 'clamp(3.2rem, 7vw, 6rem)',
              lineHeight: isArabic ? 1.15 : 0.95,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
              whiteSpace: 'nowrap',
              fontWeight: isArabic ? 800 : 'normal',
            }}
          >
            {t('person_greeting')}
          </motion.h1>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
              fontSize: isArabic ? 'clamp(1.2rem, 2.2vw, 1.7rem)' : 'clamp(1.1rem, 2vw, 1.5rem)',
              letterSpacing: isArabic ? '0.02em' : '0.08em',
              color: 'var(--color-warm-orange)',
              fontWeight: isArabic ? 700 : 'normal',
            }}
          >
            {t('person_role')}
          </motion.div>
        </div>

        {/* Story Body */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
          style={{
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
          }}
        >
          <p
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? 'clamp(1.2rem, 1.8vw, 1.45rem)' : 'clamp(1.1rem, 1.6vw, 1.35rem)',
              fontWeight: isArabic ? 500 : 300,
              lineHeight: isArabic ? 1.75 : 1.65,
              color: 'var(--color-cream-white)',
              margin: 0,
            }}
          >
            {t('person_p1')}
          </p>

          <p
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? 'clamp(1.05rem, 1.4vw, 1.25rem)' : 'clamp(0.95rem, 1.25vw, 1.1rem)',
              fontWeight: isArabic ? 400 : 300,
              lineHeight: isArabic ? 1.75 : 1.65,
              color: 'var(--color-muted-beige)',
              margin: 0,
            }}
          >
            {t('person_p2')}
          </p>
        </motion.div>

        {/* Personal Statement Quote Box (010 Personal Statement) */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' }}
          style={{
            backgroundColor: 'rgba(184, 32, 36, 0.08)',
            borderLeft: isArabic ? 'none' : '3px solid var(--color-hot-orange)',
            borderRight: isArabic ? '3px solid var(--color-hot-orange)' : 'none',
            padding: 'clamp(1.5rem, 3vw, 2.2rem)',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            maxWidth: '900px',
          }}
        >
          <span
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(1.3rem, 2.2vw, 1.8rem)' : 'clamp(1.2rem, 2vw, 1.6rem)',
              color: 'var(--color-cream-white)',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            {t('quote_main')}
          </span>
          <span
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '1.05rem' : '0.95rem',
              color: 'var(--color-muted-beige)',
              lineHeight: 1.6,
            }}
          >
            {t('quote_sub')}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default UnmaskedIntro;
