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
      aria-label="World 02 — The Person: Identity and Positioning"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 32, 36, 0.25)',
      }}
    >
      {/* Subtle Web Trajectory Line continuing conceptually from Hero */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '100px',
          pointerEvents: 'none',
          opacity: 0.28,
        }}
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 600 0 L 150 100" stroke="url(#introWebGradL)" strokeWidth="0.75" strokeDasharray="3 6" />
        <path d="M 600 0 L 1050 100" stroke="url(#introWebGradR)" strokeWidth="0.75" strokeDasharray="3 6" />
        <defs>
          <linearGradient id="introWebGradL" x1="600" y1="0" x2="150" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B82024" stopOpacity="0.6" />
            <stop offset="1" stopColor="#09080A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="introWebGradR" x1="600" y1="0" x2="1050" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E64A24" stopOpacity="0.6" />
            <stop offset="1" stopColor="#09080A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Atmospheric Calm Radial Glow */}
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
          gap: 'clamp(3rem, 6vh, 4.5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* =================================================================
            WORLD 02 IDENTITY STATEMENT (The Person)
            ================================================================= */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
          }}
        >
          {/* Eyebrow Chapter Label */}
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

          {/* Name & Primary Professional Positioning */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: isArabic ? 'clamp(3.2rem, 8.5vw, 7rem)' : 'clamp(3.8rem, 8.8vw, 7.8rem)',
                lineHeight: isArabic ? 1.15 : 0.9,
                letterSpacing: isArabic ? '0.02em' : '0.04em',
                textTransform: 'uppercase',
                color: 'var(--color-cream-white)',
                margin: 0,
                fontWeight: isArabic ? 800 : 'normal',
              }}
            >
              {t('person_name')}
            </motion.h1>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                fontSize: isArabic ? 'clamp(1.2rem, 2.4vw, 1.8rem)' : 'clamp(1.1rem, 2.2vw, 1.6rem)',
                letterSpacing: isArabic ? '0.02em' : '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-orange)',
                fontWeight: isArabic ? 700 : 'normal',
              }}
            >
              {t('person_role')}
            </motion.div>
          </div>

          {/* Core Positioning Statement */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
            style={{
              maxWidth: '880px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-2)',
            }}
          >
            <p
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? 'clamp(1.25rem, 2vw, 1.6rem)' : 'clamp(1.2rem, 1.8vw, 1.5rem)',
                fontWeight: isArabic ? 500 : 300,
                lineHeight: isArabic ? 1.7 : 1.6,
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

            {/* Academic badge and location info (No CV UI action button) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                borderTop: '1px solid rgba(243, 237, 227, 0.1)',
                paddingTop: 'var(--space-4)',
                marginTop: 'var(--space-2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                  letterSpacing: isArabic ? '0.04em' : '0.15em',
                  color: 'var(--color-muted-beige)',
                }}
              >
                <span>{t('person_location')}</span>
                <span>•</span>
                <span>{t('person_class')}</span>
              </div>

              {/* Tagline showing multi-disciplinary capability */}
              <div
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: isArabic ? '0.04em' : '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-hot-orange)',
                }}
              >
                {t('system_intersection')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnmaskedIntro;
