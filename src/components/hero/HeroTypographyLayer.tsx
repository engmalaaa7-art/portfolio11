import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface HeroTypographyLayerProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollProgress?: number;
  prefersReducedMotion?: boolean;
}

export const HeroTypographyLayer: React.FC<HeroTypographyLayerProps> = ({
  mouseX,
  mouseY,
  scrollProgress = 0,
  prefersReducedMotion = false,
}) => {
  const { isArabic, t } = useLanguage();

  // Gentle parallax translation for typography
  const textX = useTransform(mouseX, [-1, 1], prefersReducedMotion ? [0, 0] : [6, -6]);
  const textY = useTransform(mouseY, [-1, 1], prefersReducedMotion ? [0, 0] : [4, -4]);

  const isUnmasking = scrollProgress > 0.25 && scrollProgress < 0.75;
  const isUnmasked = scrollProgress >= 0.75;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        pointerEvents: 'none',
        padding: '0 var(--space-6) clamp(4.5rem, 9vh, 6rem)',
        boxSizing: 'border-box',
      }}
    >
      {/* Main Editorial Display Block */}
      <motion.div
        style={{
          x: textX,
          y: textY,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow Stage Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            padding: '5px 16px',
            backgroundColor: isUnmasked
              ? 'rgba(184, 32, 36, 0.3)'
              : isUnmasking
              ? 'rgba(230, 74, 36, 0.25)'
              : 'rgba(9, 8, 10, 0.85)',
            border: isUnmasked
              ? '1px solid var(--color-hot-orange)'
              : isUnmasking
              ? '1px solid var(--color-warm-orange)'
              : '1px solid rgba(243, 237, 227, 0.15)',
            borderRadius: 'var(--border-radius-sm)',
            backdropFilter: 'blur(12px)',
            marginBottom: 'var(--space-2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
            transition: 'all 0.4s ease',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isUnmasked
                ? 'var(--color-cream-white)'
                : isUnmasking
                ? 'var(--color-hot-orange)'
                : 'var(--color-cinematic-red)',
              boxShadow: '0 0 10px var(--color-hot-orange)',
            }}
          />
          <span
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'clamp(0.7rem, 1vw, 0.82rem)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.24em',
              textTransform: 'uppercase',
              color: isUnmasked ? 'var(--color-cream-white)' : 'var(--color-warm-orange)',
              transition: 'color 0.4s ease',
            }}
          >
            {isUnmasked
              ? t('hero_eyebrow_unmasked')
              : isUnmasking
              ? t('hero_eyebrow_unmasking')
              : t('hero_eyebrow_mask')}
          </span>
        </div>

        {/* Hero Name Heading — Single line without wrapping */}
        <h1
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
            fontSize: isArabic ? 'clamp(2.8rem, 7.5vw, 6.2rem)' : 'clamp(2.8rem, 7.5vw, 6.4rem)',
            lineHeight: isArabic ? 1.15 : 0.9,
            letterSpacing: isArabic ? '0.02em' : '0.04em',
            textTransform: 'uppercase',
            color: 'var(--color-cream-white)',
            textShadow: '0 15px 50px rgba(0, 0, 0, 0.98), 0 0 40px rgba(0, 0, 0, 0.9)',
            userSelect: 'none',
            margin: 0,
            width: '100%',
            whiteSpace: 'nowrap',
            fontWeight: isArabic ? 800 : 'normal',
            transition: 'text-shadow 0.4s ease',
          }}
        >
          {isUnmasked || isUnmasking
            ? t('hero_heading_unmasked')
            : t('hero_heading_mask')}
        </h1>

        {/* Subtitle / Role Tagline */}
        <div
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '1.1rem' : 'clamp(0.85rem, 1.3vw, 1.1rem)',
            fontWeight: 600,
            letterSpacing: isArabic ? '0.04em' : '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-warm-orange)',
            marginTop: 'var(--space-2)',
            opacity: 0.95,
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.9)',
          }}
        >
          {t('hero_sub_unmasked')}
        </div>
      </motion.div>
    </div>
  );
};
