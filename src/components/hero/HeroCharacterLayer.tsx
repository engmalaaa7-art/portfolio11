import React, { useState, useEffect } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { HeroMaskReveal } from './HeroMaskReveal';
import { WebFragmentParticles } from './WebFragmentParticles';

interface HeroCharacterLayerProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollProgress?: number; // 0 to 1
  prefersReducedMotion?: boolean;
}

export const HeroCharacterLayer: React.FC<HeroCharacterLayerProps> = ({
  mouseX,
  mouseY,
  scrollProgress = 0,
  prefersReducedMotion = false,
}) => {
  // Cursor proximity & eye-region beam tracking (for subtle interactive eye glow)
  const [cursorProximity, setCursorProximity] = useState(0);
  const [cursorEyeBeam, setCursorEyeBeam] = useState({ x: 50, y: 38, active: false });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = mouseX.on('change', () => {
      const xVal = mouseX.get(); // -1 to 1
      const yVal = mouseY.get(); // -1 to 1

      // Eye center anchor in normalized coordinate space (-0.02, -0.18)
      const distToEyes = Math.sqrt(Math.pow(xVal + 0.02, 2) + Math.pow(yVal + 0.18, 2));
      const proximity = Math.max(0, 1 - distToEyes / 0.65);
      setCursorProximity(proximity);

      // Map mouse to percentage within character frame
      setCursorEyeBeam({
        x: 50 + xVal * 18,
        y: 40 + yVal * 12,
        active: proximity > 0.1,
      });
    });

    return () => {
      unsubscribe();
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  // Normalized transition progress (scroll is PRIMARY, cursor proximity is secondary micro-discovery)
  const effectiveProgress = Math.min(Math.max(scrollProgress + cursorProximity * 0.06, 0), 1);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        pointerEvents: 'none',
      }}
    >
      {/* Intense Orange/Red Rim Light Glow behind the character pose */}
      <div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1050px, 95vw)',
          height: 'min(1050px, 95vw)',
          borderRadius: '50%',
          background: `radial-gradient(circle at center, rgba(242, 122, 50, ${0.36 + effectiveProgress * 0.2}) 0%, rgba(184, 32, 36, 0.25) 45%, rgba(122, 16, 20, 0.08) 75%, transparent 100%)`,
          filter: 'blur(75px)',
          zIndex: 1,
        }}
      />

      {/* FIXED COORDINATE ANCHOR CONTAINER:
          Both Spider-Man base and Ahmed portrait share this exact container,
          guaranteeing ZERO upward translation or spatial drift during unmasking */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'min(96vh, 1020px)',
          width: 'min(98vw, 1320px)',
          maxWidth: '98vw',
          maxHeight: '96vh',
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* FINAL 4K PRODUCTION SPIDER-MAN HERO ARTWORK */}
        <img
          src="/assets/images/spiderman-production.jpeg"
          alt="Spider-Man Mask Stage Anchor — Ahmed Al Malah"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center 40%',
            filter: `drop-shadow(0 30px 60px rgba(0, 0, 0, 0.98)) drop-shadow(0 0 50px rgba(184, 32, 36, ${0.5 - effectiveProgress * 0.3}))`,
            maskImage: 'radial-gradient(circle at 50% 40%, black 72%, rgba(0, 0, 0, 0.6) 90%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 72%, rgba(0, 0, 0, 0.6) 90%, transparent 100%)',
            opacity: Math.max(0, 1 - Math.pow(effectiveProgress, 1.35) * 1.15),
            transition: 'opacity 0.08s linear',
            zIndex: 2,
          }}
        />

        {/* Cursor Eye-Region Interactive Translucency Spotlight (Discovery Mechanism) */}
        {cursorEyeBeam.active && effectiveProgress < 0.85 && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 3,
              background: `radial-gradient(circle 95px at ${cursorEyeBeam.x}% ${cursorEyeBeam.y}%, rgba(242, 122, 50, 0.45) 0%, rgba(184, 32, 36, 0.2) 50%, transparent 80%)`,
              mixBlendMode: 'screen',
              filter: 'blur(8px)',
              opacity: cursorProximity,
              transition: 'opacity 0.15s ease',
            }}
          />
        )}

        {/* Ahmed Unmasked Portrait Layer — Exact Shared Coordinate System */}
        <HeroMaskReveal
          progress={effectiveProgress}
          cursorEyeProximity={cursorProximity}
          prefersReducedMotion={prefersReducedMotion}
        />

        {/* Emitter Web Particles during unmask fragment burst */}
        <WebFragmentParticles
          progress={effectiveProgress}
          prefersReducedMotion={prefersReducedMotion}
        />
      </motion.div>
    </div>
  );
};

export default HeroCharacterLayer;
