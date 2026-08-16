import React from 'react';
import { motion } from 'framer-motion';

interface KineticTypographyProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  fontSize?: string;
  color?: string;
  style?: React.CSSProperties;
}

export const KineticTypography: React.FC<KineticTypographyProps> = ({
  text,
  as = 'h2',
  fontSize = 'clamp(3rem, 7vw, 6rem)',
  color = 'var(--color-cream-white)',
  style,
}) => {
  const Component = as;
  const words = text.split(' ');

  return (
    <Component
      style={{
        fontFamily: 'var(--font-display)',
        fontSize,
        lineHeight: 0.9,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.25em',
        userSelect: 'none',
        ...style,
      }}
    >
      {words.map((word, wIdx) => (
        <motion.span
          key={`${word}-${wIdx}`}
          initial={{ opacity: 0, y: 30, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.8,
            delay: wIdx * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};
