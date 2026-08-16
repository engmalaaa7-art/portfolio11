import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

interface CinematicIntroOverlayProps {
  onComplete: () => void;
}

export const CinematicIntroOverlay: React.FC<CinematicIntroOverlayProps> = ({ onComplete }) => {
  // Sequence phases:
  // 1. 'tension': 0 – 700ms (Black + Web lines draw inward + Radial rings pulse)
  // 2. 'reveal': 700ms – 1500ms (Spider-Man silhouette / comic flash + glitch impact)
  // 3. 'statement': 1500ms – 2800ms (Progressive cinematic typography reveal)
  // 4. 'exit': 2800ms+ (Smooth lens-flare / fade transition into pinned Hero)
  const [phase, setPhase] = useState<'tension' | 'reveal' | 'statement' | 'exit'>('tension');
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase('reveal'), 700);
    const t2 = setTimeout(() => setPhase('statement'), 1500);
    const t3 = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 550);
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
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          onClick={onComplete}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#09080A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            padding: 'var(--space-6)',
          }}
          aria-label="Cinematic Opening Sequence — Click or press Escape to enter"
        >
          {/* Layer 1: Ambient Crimson & Orange Atmospheric Pulses */}
          <motion.div
            animate={{
              scale: phase === 'reveal' ? [1, 1.3, 1.1] : [1, 1.15, 1],
              opacity: phase === 'reveal' ? [0.2, 0.45, 0.25] : [0.15, 0.28, 0.15],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(850px, 95vw)',
              height: 'min(850px, 95vw)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, rgba(230, 74, 36, 0.28) 0%, rgba(184, 32, 36, 0.18) 45%, rgba(9, 8, 10, 0) 75%)',
              filter: 'blur(75px)',
              pointerEvents: 'none',
            }}
          />

          {/* Layer 2: Dynamic Animated Multi-Line SVG Web & Radial Web Grid */}
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
            {/* Corner Converging Web Lines */}
            <motion.line
              x1="0"
              y1="0"
              x2="600"
              y2="400"
              stroke="var(--color-hot-orange)"
              strokeWidth="0.8"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <motion.line
              x1="1200"
              y1="0"
              x2="600"
              y2="400"
              stroke="var(--color-hot-orange)"
              strokeWidth="0.8"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <motion.line
              x1="0"
              y1="800"
              x2="600"
              y2="400"
              stroke="var(--color-cinematic-red)"
              strokeWidth="0.8"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <motion.line
              x1="1200"
              y1="800"
              x2="600"
              y2="400"
              stroke="var(--color-cinematic-red)"
              strokeWidth="0.8"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            {/* Cross Strands */}
            <motion.line
              x1="600"
              y1="0"
              x2="600"
              y2="800"
              stroke="rgba(243, 237, 227, 0.15)"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />
            <motion.line
              x1="0"
              y1="400"
              x2="1200"
              y2="400"
              stroke="rgba(243, 237, 227, 0.15)"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />

            {/* Radial Web Concentric Rings */}
            <motion.circle
              cx="600"
              cy="400"
              r="90"
              stroke="var(--color-hot-orange)"
              strokeWidth="0.75"
              strokeDasharray="3 5"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />
            <motion.circle
              cx="600"
              cy="400"
              r="220"
              stroke="var(--color-cinematic-red)"
              strokeWidth="0.6"
              strokeDasharray="4 8"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.circle
              cx="600"
              cy="400"
              r="380"
              stroke="rgba(230, 74, 36, 0.3)"
              strokeWidth="0.5"
              strokeDasharray="5 10"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Center Nexus Orb */}
            <motion.circle
              cx="600"
              cy="400"
              r="8"
              fill="var(--color-hot-orange)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.8, 1] }}
              transition={{ duration: 0.5, delay: 0.35 }}
            />
          </svg>

          {/* Layer 3: Spider-Man Silhouette / Comic Flash Impact */}
          {phase === 'reveal' && (
            <motion.div
              initial={{ opacity: 0, scale: 1.18, filter: 'contrast(180%) brightness(1.2)' }}
              animate={{ opacity: 0.32, scale: 1.02, filter: 'contrast(140%) brightness(0.9)' }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(700px, 88vw)',
                height: 'min(700px, 88vw)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            >
              <img
                src="/assets/images/spiderman-production.jpeg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'grayscale(60%)',
                }}
              />
            </motion.div>
          )}

          {/* Layer 4: Progressive Cinematic Typography Choreography */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '1000px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-4)',
              padding: '0 var(--space-4)',
            }}
          >
            {/* Eyebrow Chapter Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: isArabic ? '0.04em' : '0.28em',
                textTransform: 'uppercase',
                color: 'var(--color-hot-orange)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <span style={{ width: '12px', height: '1px', backgroundColor: 'var(--color-hot-orange)' }} />
              {t('intro_eyebrow')}
              <span style={{ width: '12px', height: '1px', backgroundColor: 'var(--color-hot-orange)' }} />
            </motion.div>

            {/* Statement Line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: isArabic ? 'clamp(2.2rem, 5.5vw, 4.6rem)' : 'clamp(2.4rem, 6vw, 5.2rem)',
                lineHeight: isArabic ? 1.3 : 1.05,
                letterSpacing: isArabic ? '0.02em' : '0.04em',
                textTransform: 'uppercase',
                color: 'var(--color-cream-white)',
                margin: 0,
                fontWeight: isArabic ? 800 : 'normal',
                textShadow: '0 10px 40px rgba(0,0,0,0.9)',
              }}
            >
              {t('intro_statement_1')}
            </motion.h1>

            {/* Statement Line 2 (Highlighted with Expressive Display Accent) */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                fontSize: isArabic ? 'clamp(1.8rem, 4.2vw, 3.4rem)' : 'clamp(2rem, 4.8vw, 3.8rem)',
                lineHeight: isArabic ? 1.3 : 1.1,
                letterSpacing: isArabic ? '0.02em' : '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-orange)',
                fontWeight: isArabic ? 700 : 'normal',
                textShadow: '0 0 25px rgba(242, 122, 50, 0.45)',
              }}
            >
              {t('intro_statement_2')}
            </motion.div>
          </div>

          {/* Layer 5: Clean Skip Pill at Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
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
              color: 'var(--color-muted-beige)',
              border: '1px solid rgba(243, 237, 227, 0.18)',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(14, 12, 16, 0.75)',
              backdropFilter: 'blur(8px)',
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
