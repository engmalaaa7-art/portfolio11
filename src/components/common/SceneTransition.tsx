import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SceneTransitionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SceneTransition
 * Primitive wrapper that enforces visual continuity between portfolio scenes.
 * Provides subtle scroll depth entrance and atmospheric illumination shift.
 */
export const SceneTransition: React.FC<SceneTransitionProps> = ({
  children,
  id,
  className,
  style,
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0.1, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Damped inertia spring momentum
      }}
      style={{
        position: 'relative',
        width: '100%',
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </motion.section>
  );
};
