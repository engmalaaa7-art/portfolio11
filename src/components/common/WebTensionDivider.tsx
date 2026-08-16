import React from 'react';
import { motion } from 'framer-motion';

interface WebTensionDividerProps {
  opacity?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const WebTensionDivider: React.FC<WebTensionDividerProps> = ({
  opacity = 0.2,
  color = 'var(--color-cinematic-red)',
  style,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '60px',
        overflow: 'hidden',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 60"
        fill="none"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        {/* Radial Web Anchor Trajectory Lines */}
        <motion.path
          d="M 0 30 Q 600 0 1200 30"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <circle cx="600" cy="15" r="3" fill={color} />
      </svg>
    </div>
  );
};
