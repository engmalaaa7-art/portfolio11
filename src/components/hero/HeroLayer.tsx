import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { HeroLayerConfig } from '@/types/hero';

interface HeroLayerProps extends MotionProps {
  config: HeroLayerConfig;
  className?: string;
  children?: React.ReactNode;
}

export const HeroLayer: React.FC<HeroLayerProps> = ({
  config,
  className = '',
  children,
  ...motionProps
}) => {
  if (!config.enabled) return null;

  return (
    <motion.div
      data-layer-id={config.id}
      data-layer-name={config.name}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: config.zIndex,
        pointerEvents: config.interactive ? 'auto' : 'none',
        willChange: 'transform, opacity',
      }}
      initial={{ opacity: config.initialOpacity ?? 1 }}
      className={`hero-layer ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
