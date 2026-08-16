import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollUnmaskIndicator: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 'clamp(0.8rem, 1.8vh, 1.4rem)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 85,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'auto',
        cursor: 'pointer',
      }}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight * 0.8,
          behavior: 'smooth',
        });
      }}
      aria-label="Scroll to unmask"
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-hot-orange)',
          opacity: 0.8,
        }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </div>
  );
};
