import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';
import { BrandMonogram } from '@/components/common/BrandMonogram';

interface CinematicIntroOverlayProps {
  onComplete: () => void;
}

export const CinematicIntroOverlay: React.FC<CinematicIntroOverlayProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'pulse' | 'brand' | 'statement' | 'exit'>('pulse');
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase('brand'), 600);
    const t2 = setTimeout(() => setPhase('statement'), 1400);
    const t3 = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 500);
    }, 3100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={onComplete}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#070A10',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            padding: 'var(--space-6)',
          }}
          aria-label="Cinematic Opening — Click or press Escape to enter"
        >
          {/* Volumetric Radial Atmosphere */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.38, 0.2],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(900px, 95vw)',
              height: 'min(900px, 95vw)',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at center, rgba(29, 78, 216, 0.35) 0%, rgba(245, 138, 7, 0.16) 45%, rgba(7, 10, 16, 0) 75%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          {/* Architectural Laser Coordinate Grid */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            {/* Converging Geometric Lines */}
            <motion.line
              x1="0"
              y1="0"
              x2="600"
              y2="400"
              stroke="var(--color-electric-cyan)"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.line
              x1="1200"
              y1="0"
              x2="600"
              y2="400"
              stroke="var(--color-electric-cyan)"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.line
              x1="0"
              y1="800"
              x2="600"
              y2="400"
              stroke="var(--color-cobalt-light)"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.line
              x1="1200"
              y1="800"
              x2="600"
              y2="400"
              stroke="var(--color-cobalt-light)"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Concentric Rings */}
            <motion.circle
              cx="600"
              cy="400"
              r="120"
              stroke="var(--color-electric-cyan)"
              strokeWidth="0.75"
              strokeDasharray="3 6"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <motion.circle
              cx="600"
              cy="400"
              r="260"
              stroke="rgba(245, 138, 7, 0.3)"
              strokeWidth="0.6"
              strokeDasharray="4 10"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            />
          </svg>

          {/* Central Monogram Beacon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              zIndex: 15,
              marginBottom: 'var(--space-6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                backdropFilter: 'blur(16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(29, 78, 216, 0.4), 0 0 70px rgba(56, 189, 248, 0.2)',
              }}
            >
              <BrandMonogram size={42} color="#FFFFFF" />
            </div>
          </motion.div>

          {/* Progressive Cinematic Typography Choreography */}
          <div
            style={{
              position: 'relative',
              zIndex: 20,
              maxWidth: '960px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-3)',
              padding: '0 var(--space-4)',
            }}
          >
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: isArabic ? '0.04em' : '0.28em',
                textTransform: 'uppercase',
                color: 'var(--color-solar-amber)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <span style={{ width: '14px', height: '1px', backgroundColor: 'var(--color-solar-amber)' }} />
              {t('intro_eyebrow')}
              <span style={{ width: '14px', height: '1px', backgroundColor: 'var(--color-solar-amber)' }} />
            </motion.div>

            {/* Statement Line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
                fontSize: isArabic ? 'clamp(2rem, 5vw, 4.2rem)' : 'clamp(2.2rem, 5.5vw, 4.8rem)',
                lineHeight: isArabic ? 1.25 : 1.05,
                letterSpacing: isArabic ? '0.02em' : '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                margin: 0,
                fontWeight: isArabic ? 900 : 800,
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.95)',
              }}
            >
              {t('intro_statement_1')}
            </motion.h1>

            {/* Core Signature Declaration */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: 'var(--color-electric-cyan)',
                fontWeight: 700,
                textShadow: '0 0 30px rgba(56, 189, 248, 0.6), 0 0 60px rgba(56, 189, 248, 0.3)',
                marginTop: 'var(--space-2)',
              }}
            >
              "تخيّلها… وأنا أبنيها."
            </motion.div>
          </div>

          {/* Skip Pill Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            style={{
              position: 'absolute',
              bottom: 'clamp(2rem, 5vh, 3.5rem)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: isArabic ? '0.04em' : '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '6px 18px',
              borderRadius: '20px',
              backgroundColor: 'rgba(13, 19, 34, 0.75)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span>{t('intro_skip')}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntroOverlay;
