import React, { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { DEFAULT_HERO_LAYERS } from './HeroLayersConfig';
import { HeroLayer } from './HeroLayer';
import { HeroLayerId } from '@/types/hero';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useHeroScrollProgress } from '@/hooks/useHeroScrollProgress';
import { HeroParticles } from './HeroParticles';
import { HeroWebLines } from './HeroWebLines';
import { HeroCharacterLayer } from './HeroCharacterLayer';
import { HeroTypographyLayer } from './HeroTypographyLayer';
import { ScrollUnmaskIndicator } from './ScrollUnmaskIndicator';

export const HeroContainer: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { rawProgress } = useHeroScrollProgress(trackRef);
  const { mouseX, mouseY, prefersReducedMotion } = usePointerParallax();

  // Background Atmosphere parallax translation (slowest)
  const bgX = useTransform(mouseX, [-1, 1], prefersReducedMotion ? [0, 0] : [-5, 5]);
  const bgY = useTransform(mouseY, [-1, 1], prefersReducedMotion ? [0, 0] : [-5, 5]);

  // Environment layer parallax translation (slow)
  const envX = useTransform(mouseX, [-1, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);
  const envY = useTransform(mouseY, [-1, 1], prefersReducedMotion ? [0, 0] : [-8, 8]);

  return (
    <div
      ref={trackRef}
      style={{
        position: 'relative',
        width: '100%',
        height: prefersReducedMotion ? '100vh' : '280vh',
      }}
    >
      <section
        id="hero-stage"
        aria-label="Cinematic Spider-Man Hero Stage"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100svh',
          minHeight: '650px',
          backgroundColor: 'var(--color-deep-black)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Layer 1: Background Atmosphere */}
        <HeroLayer config={DEFAULT_HERO_LAYERS[HeroLayerId.Layer1Atmosphere]}>
          <motion.div
            style={{
              x: bgX,
              y: bgY,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(ellipse at 50% 45%, rgba(184, 32, 36, 0.28) 0%, rgba(122, 16, 20, 0.2) 35%, rgba(9, 8, 10, 0.95) 75%, #09080A 100%)',
            }}
          />
        </HeroLayer>

        {/* Layer 2: Environment Haze & Web Grid */}
        <HeroLayer config={DEFAULT_HERO_LAYERS[HeroLayerId.Layer2Environment]}>
          <motion.div
            className="bg-web-grid"
            style={{
              x: envX,
              y: envY,
              width: '100%',
              height: '100%',
              opacity: 0.35,
            }}
          />
        </HeroLayer>

        {/* Layer 3 & 7: Spider-Man Character + Ahmed Unmasked Face Layer */}
        <HeroLayer config={DEFAULT_HERO_LAYERS[HeroLayerId.Layer3HeroCharacter]}>
          <HeroCharacterLayer
            mouseX={mouseX}
            mouseY={mouseY}
            scrollProgress={rawProgress}
            prefersReducedMotion={prefersReducedMotion}
          />
        </HeroLayer>

        {/* Layer 4: Oversized Editorial Typography & Technical Callouts */}
        <HeroLayer config={DEFAULT_HERO_LAYERS[HeroLayerId.Layer4LargeTypography]}>
          <HeroTypographyLayer
            mouseX={mouseX}
            mouseY={mouseY}
            scrollProgress={rawProgress}
            prefersReducedMotion={prefersReducedMotion}
          />
        </HeroLayer>

        {/* Layer 5: Web Lines & Atmospheric Canvas Dust Embers */}
        <HeroLayer config={DEFAULT_HERO_LAYERS[HeroLayerId.Layer5ParticlesWeb]}>
          <HeroWebLines />
          <HeroParticles count={40} />
        </HeroLayer>

        {/* Layer 8: Foreground Effects, Vignette, and Hover Reveal Indicator */}
        <HeroLayer config={DEFAULT_HERO_LAYERS[HeroLayerId.Layer8ForegroundEffects]}>
          <div className="bg-vignette" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />
          {rawProgress < 0.9 && <ScrollUnmaskIndicator />}
        </HeroLayer>
      </section>
    </div>
  );
};
