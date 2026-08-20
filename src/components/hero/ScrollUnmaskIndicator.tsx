import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

/**
 * ScrollUnmaskIndicator
 *
 * Hints the user to scroll down to unmask the engineer behind Spider-Man.
 */
export const ScrollUnmaskIndicator: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 'clamp(0.8rem, 2vh, 1.6rem)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 85,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      aria-label="Scroll to unmask"
    >
      {/* Animated mouse scroll indicator */}
      <motion.div
        animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-hot-orange)',
        }}
      >
        <div
          style={{
            width: '18px',
            height: '28px',
            borderRadius: '12px',
            border: '1.8px solid var(--color-hot-orange)',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '4px',
            boxShadow: '0 0 10px rgba(230, 74, 36, 0.3)',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '3px',
              height: '5px',
              borderRadius: '2px',
              backgroundColor: 'var(--color-warm-orange)',
            }}
          />
        </div>
      </motion.div>

      {/* Hint label */}
      <span
        style={{
          fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
          fontSize: isArabic ? '0.85rem' : 'clamp(0.6rem, 0.85vw, 0.72rem)',
          fontWeight: 700,
          letterSpacing: isArabic ? '0.04em' : '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-warm-orange)',
          opacity: 0.85,
          whiteSpace: 'nowrap',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
        }}
      >
        {isArabic ? 'مـرر لـلأسـفـل لـكـشـف الـهـويـة' : 'SCROLL TO UNMASK'}
      </span>
    </div>
  );
};

export default ScrollUnmaskIndicator;
