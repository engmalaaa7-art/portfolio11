import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const CinematicImpactMoment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  // Track scroll progress through the 200vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Motion mapping for the 13,000+ visual convergence
  const opacityProgress = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.15, 1, 1, 0.25]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const letterSpacingProgress = useTransform(scrollYProgress, [0, 0.5, 1], ['0.14em', '0.04em', '0.08em']);

  if (prefersReducedMotion) {
    return (
      <section
        ref={containerRef}
        id="impact-moment"
        aria-label="Impact Moment — 13,000+ People Reached and 5,000+ Learners in AI and Design"
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-canvas)',
          padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderTop: '1px solid rgba(29, 78, 216, 0.25)',
        }}
      >
        <span
          style={{
            color: 'var(--color-solar-amber)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
            letterSpacing: isArabic ? '0.04em' : '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: 'var(--space-4)',
          }}
        >
          {t('impact_eyebrow')}
        </span>

        <h2
          style={{
            fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
            fontSize: 'clamp(5rem, 15vw, 11rem)',
            lineHeight: 0.85,
            letterSpacing: '0.04em',
            color: 'var(--color-text-primary)',
            margin: 0,
            fontWeight: isArabic ? 900 : 800,
          }}
        >
          {isArabic ? '+١٣,٠٠٠' : '13,000+'}
        </h2>

        <div
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '1.4rem' : 'clamp(1.1rem, 2.2vw, 1.6rem)',
            fontWeight: 700,
            letterSpacing: isArabic ? '0.02em' : '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-electric-cyan)',
            marginTop: 'var(--space-2)',
          }}
        >
          {t('impact_heading')}
        </div>

        {/* Sub-Metric Callout for 5,000+ in AI & Graphic Design */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: 'var(--space-3)',
            padding: '4px 16px',
            backgroundColor: 'rgba(245, 138, 7, 0.12)',
            border: '1px solid rgba(245, 138, 7, 0.4)',
            borderRadius: 'var(--border-radius-full)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--color-solar-amber)',
            letterSpacing: isArabic ? '0.02em' : '0.14em',
            textTransform: 'uppercase',
          }}
        >
          <span>{t('impact_sub_badge')}</span>
        </div>

        <p
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '1.1rem' : 'clamp(1rem, 1.6vw, 1.25rem)',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--color-text-secondary)',
            maxWidth: '680px',
            marginTop: 'var(--space-4)',
          }}
        >
          {t('impact_desc')}
        </p>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="impact-moment"
      aria-label="Impact Moment — 13,000+ People Reached and 5,000+ Learners in AI and Design"
      style={{
        position: 'relative',
        width: '100%',
        height: '200vh',
        backgroundColor: 'var(--color-canvas)',
        borderTop: '1px solid rgba(29, 78, 216, 0.25)',
      }}
    >
      {/* Sticky Cinematic Viewport Stage */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100svh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 var(--space-6)',
        }}
      >
        {/* Converging Signal Lines Background Field */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.18,
          }}
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="500" y2="300" stroke="var(--color-electric-cyan)" strokeDasharray="4 6" />
          <line x1="1000" y1="0" x2="500" y2="300" stroke="var(--color-electric-cyan)" strokeDasharray="4 6" />
          <line x1="0" y1="600" x2="500" y2="300" stroke="var(--color-cobalt-light)" strokeDasharray="4 6" />
          <line x1="1000" y1="600" x2="500" y2="300" stroke="var(--color-cobalt-light)" strokeDasharray="4 6" />
          <circle cx="500" cy="300" r="180" stroke="var(--color-cobalt-light)" strokeWidth="0.5" fill="none" />
          <circle cx="500" cy="300" r="280" stroke="var(--color-solar-amber)" strokeWidth="0.3" strokeDasharray="2 4" fill="none" />
        </svg>

        {/* Ambient Center Radial Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(700px, 90vw)',
            height: 'min(500px, 60vh)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.22) 0%, rgba(245, 138, 7, 0.12) 50%, transparent 80%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        {/* Eyebrow Label */}
        <motion.div
          style={{
            opacity: opacityProgress,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: isArabic ? '0.04em' : '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-solar-amber)',
            marginBottom: 'var(--space-2)',
            zIndex: 10,
          }}
        >
          <span style={{ width: '16px', height: '1px', backgroundColor: 'var(--color-solar-amber)' }} />
          {t('impact_eyebrow')}
        </motion.div>

        {/* Hero Number — 13,000+ */}
        <motion.h2
          style={{
            opacity: opacityProgress,
            scale: scaleProgress,
            letterSpacing: letterSpacingProgress,
            fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
            fontSize: 'clamp(5.5rem, 16vw, 13.5rem)',
            lineHeight: 0.85,
            textTransform: 'uppercase',
            color: 'var(--color-text-primary)',
            margin: 0,
            textShadow: '0 20px 60px rgba(0,0,0,0.95), 0 0 50px rgba(29, 78, 216, 0.45)',
            zIndex: 10,
            fontWeight: isArabic ? 900 : 800,
            willChange: 'transform, opacity, letter-spacing',
          }}
        >
          {isArabic ? '+١٣,٠٠٠' : '13,000+'}
        </motion.h2>

        {/* Heading: PEOPLE REACHED */}
        <motion.div
          style={{
            opacity: opacityProgress,
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '1.5rem' : 'clamp(1.1rem, 2.2vw, 1.6rem)',
            fontWeight: 700,
            letterSpacing: isArabic ? '0.02em' : '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-electric-cyan)',
            marginTop: 'var(--space-2)',
            zIndex: 10,
          }}
        >
          {t('impact_heading')}
        </motion.div>

        {/* Sub-Metric Pill (5,000+ Learners in AI & Design Sessions) */}
        <motion.div
          style={{
            opacity: opacityProgress,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: 'var(--space-3)',
            padding: '4px 18px',
            backgroundColor: 'rgba(245, 138, 7, 0.12)',
            border: '1px solid rgba(245, 138, 7, 0.45)',
            borderRadius: 'var(--border-radius-full)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--color-solar-amber)',
            letterSpacing: isArabic ? '0.02em' : '0.14em',
            textTransform: 'uppercase',
            zIndex: 10,
          }}
        >
          <span>{t('impact_sub_badge')}</span>
        </motion.div>

        {/* Verified Context Statement */}
        <motion.p
          style={{
            opacity: opacityProgress,
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '1.15rem' : 'clamp(1rem, 1.6vw, 1.25rem)',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--color-text-secondary)',
            maxWidth: '680px',
            margin: 'var(--space-3) 0 0 0',
            zIndex: 10,
          }}
        >
          {t('impact_desc')}
        </motion.p>
      </div>
    </section>
  );
};

export default CinematicImpactMoment;
