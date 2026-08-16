import React from 'react';
import { motion } from 'framer-motion';

export const HeroWebLines: React.FC = () => {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'visible',
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="webGradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B82024" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#E64A24" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#09080A" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="webGradientOrange" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F27A32" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7A1014" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E64A24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E64A24" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Main Structural Radial Web Lines radiating from center behind hero */}
      <g opacity="0.45">
        {/* Radial rays */}
        <motion.path
          d="M 720 380 L 0 0"
          stroke="url(#webGradientRed)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.path
          d="M 720 380 L 1440 0"
          stroke="url(#webGradientOrange)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
        />
        <motion.path
          d="M 720 380 L 0 900"
          stroke="url(#webGradientOrange)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
        />
        <motion.path
          d="M 720 380 L 1440 900"
          stroke="url(#webGradientRed)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
        />

        {/* Diagonal Cross Weaves */}
        <path
          d="M 200 100 Q 720 250 1240 100"
          fill="none"
          stroke="rgba(184, 32, 36, 0.15)"
          strokeWidth="1"
        />
        <path
          d="M 300 300 Q 720 420 1140 300"
          fill="none"
          stroke="rgba(242, 122, 50, 0.15)"
          strokeWidth="1"
        />
        <path
          d="M 150 600 Q 720 500 1290 600"
          fill="none"
          stroke="rgba(184, 32, 36, 0.12)"
          strokeWidth="1"
        />
      </g>

      {/* Intersecting Node Points */}
      <circle cx="300" cy="300" r="3" fill="#E64A24" opacity="0.6" />
      <circle cx="1140" cy="300" r="3" fill="#F27A32" opacity="0.6" />
      <circle cx="450" cy="180" r="2" fill="#B82024" opacity="0.5" />
      <circle cx="990" cy="180" r="2" fill="#E64A24" opacity="0.5" />
    </svg>
  );
};
