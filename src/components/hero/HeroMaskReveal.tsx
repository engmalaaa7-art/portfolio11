import React from 'react';
import { motion } from 'framer-motion';

export interface HeroMaskRevealProps {
  progress: number; // 0.0 (Full Spider-Man) to 1.0 (Full Ahmed)
  cursorEyeProximity?: number; // 0 to 1
  prefersReducedMotion?: boolean;
}

export const HeroMaskReveal: React.FC<HeroMaskRevealProps> = ({
  progress,
  cursorEyeProximity = 0,
  prefersReducedMotion = false,
}) => {
  // Normalize reveal progress
  const revealProgress = Math.min(Math.max(progress, 0), 1);

  // Progressive radius curve from 0% to 125%
  const baseRadius = prefersReducedMotion
    ? revealProgress * 100
    : Math.pow(revealProgress, 1.2) * 125;

  // Eye proximity expansion factor when hovering near eyes early on
  const effectiveRadius = Math.max(baseRadius, cursorEyeProximity > 0.2 && revealProgress < 0.25 ? 18 : 0);

  // Precise organic polygon centered on eye and face anchor (50% 40%)
  const clipPolygon = prefersReducedMotion
    ? `circle(${effectiveRadius}% at 50% 40%)`
    : `polygon(
        calc(50% - ${effectiveRadius * 0.92}%) calc(40% - ${effectiveRadius * 1.05}%),
        calc(50% + ${effectiveRadius * 0.96}%) calc(40% - ${effectiveRadius * 0.92}%),
        calc(50% + ${effectiveRadius * 1.12}%) calc(40% + ${effectiveRadius * 0.78}%),
        calc(50% + ${effectiveRadius * 0.28}%) calc(40% + ${effectiveRadius * 1.18}%),
        calc(50% - ${effectiveRadius * 1.08}%) calc(40% + ${effectiveRadius * 0.82}%)
      )`;

  // Masked Image Style — Locked to absolute container (Zero vertical translation)
  const maskStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center 40%',
    filter: `drop-shadow(0 25px 50px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 35px rgba(230, 74, 36, ${revealProgress * 0.45}))`,
    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
    clipPath: clipPolygon,
    WebkitClipPath: clipPolygon,
    opacity: effectiveRadius > 4 ? Math.min(effectiveRadius * 0.04 + revealProgress * 1.2, 1) : 0,
    transition: 'clip-path 0.06s linear, opacity 0.08s linear',
    zIndex: 4,
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 4,
      }}
    >
      {/* Ahmed Face Portrait Layer — Spatially anchored 1:1 with Spider-Man */}
      <img
        src="/assets/images/ahmed-profile.png"
        alt="Ahmed Al Malah — AI Applied & Software Engineer Identity Unmasked"
        style={maskStyle}
      />

      {/* Atmospheric Rim Light Glow over Ahmed Face */}
      {revealProgress > 0.08 && (
        <motion.div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(520px, 75vw)',
            height: 'min(520px, 75vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(230, 74, 36, 0.25) 0%, rgba(184, 32, 36, 0.12) 50%, transparent 80%)',
            filter: 'blur(35px)',
            pointerEvents: 'none',
            opacity: Math.min(revealProgress * 1.4, 0.85),
            zIndex: 5,
          }}
        />
      )}

      {/* Tension Fracture SVG Web Contour line during transition */}
      {revealProgress > 0.12 && revealProgress < 0.94 && (
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 6,
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Tension Perimeter Loop */}
          <polygon
            points={`
              ${50 - effectiveRadius * 0.44},${40 - effectiveRadius * 0.5}
              ${50 + effectiveRadius * 0.46},${40 - effectiveRadius * 0.44}
              ${50 + effectiveRadius * 0.54},${40 + effectiveRadius * 0.38}
              ${50 + effectiveRadius * 0.14},${40 + effectiveRadius * 0.56}
              ${50 - effectiveRadius * 0.52},${40 + effectiveRadius * 0.4}
            `}
            fill="none"
            stroke="#E64A24"
            strokeWidth="0.35"
            strokeDasharray="1.5 2.5"
            opacity={Math.sin(revealProgress * Math.PI) * 0.75}
          />
          {/* Radiating Tension Filaments */}
          <line
            x1="50"
            y1="40"
            x2={50 - effectiveRadius * 0.58}
            y2={40 - effectiveRadius * 0.65}
            stroke="#F27A32"
            strokeWidth="0.2"
            strokeDasharray="1 3"
            opacity={Math.sin(revealProgress * Math.PI) * 0.6}
          />
          <line
            x1="50"
            y1="40"
            x2={50 + effectiveRadius * 0.62}
            y2={40 + effectiveRadius * 0.5}
            stroke="#F27A32"
            strokeWidth="0.2"
            strokeDasharray="1 3"
            opacity={Math.sin(revealProgress * Math.PI) * 0.6}
          />
        </svg>
      )}
    </div>
  );
};

export default HeroMaskReveal;
