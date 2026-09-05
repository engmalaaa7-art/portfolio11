import React, { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const CinematicHeroStage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { mouseX, mouseY, prefersReducedMotion } = usePointerParallax();
  const { isArabic } = useLanguage();

  // Gentle atmospheric parallax for the master brand artwork
  const artX = useTransform(mouseX, [-1, 1], prefersReducedMotion ? [0, 0] : [-8, 8]);
  const artY = useTransform(mouseY, [-1, 1], prefersReducedMotion ? [0, 0] : [-6, 6]);
  const glowX = useTransform(mouseX, [-1, 1], prefersReducedMotion ? [0, 0] : [-16, 16]);
  const glowY = useTransform(mouseY, [-1, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);

  return (
    <section
      ref={containerRef}
      id="hero-stage"
      aria-label="Ahmed Al Malah — Personal Brand Stage"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        backgroundColor: '#070A10',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(5.5rem, 11vh, 7.5rem) clamp(1rem, 3vw, 3rem) clamp(2rem, 4vh, 3.5rem)',
        boxSizing: 'border-box',
      }}
    >
      {/* ── 1. ATMOSPHERIC LIGHTING & COBALT STAGE GLOW ── */}
      {/* Volumetric Bottom Cobalt Floor Glow extending the artwork lighting */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          position: 'absolute',
          bottom: '-18%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(1300px, 130vw)',
          height: 'min(700px, 75vh)',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse 90% 55% at 50% 100%, rgba(29, 78, 216, 0.45) 0%, rgba(20, 33, 75, 0.28) 45%, rgba(7, 10, 16, 0.95) 80%, #070A10 100%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Top Ambient Cobalt Tint */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '400px',
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(29, 78, 216, 0.12) 0%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── 2. MASTER BRAND ARTWORK (PORTUPDATE0.1.png) ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1360px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          flex: '1 0 auto',
        }}
      >
        <motion.div
          style={{
            x: artX,
            y: artY,
            position: 'relative',
            width: '100%',
            maxWidth: '1280px',
            maxHeight: 'min(72vh, 750px)',
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow:
              '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(29, 78, 216, 0.25), 0 0 30px rgba(245, 138, 7, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#070A10',
          }}
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Master Image */}
          <img
            src="/assets/images/hero-brand-master.png"
            alt="Ahmed Al Malah — Personal Brand Master"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: 'min(72vh, 750px)',
              objectFit: 'contain',
              display: 'block',
              filter: 'contrast(102%) brightness(1.02)',
            }}
          />

          {/* Vignette Edge Shading to merge flawlessly into the Obsidian canvas */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(ellipse 95% 95% at 50% 50%, transparent 70%, rgba(7, 10, 16, 0.35) 90%, rgba(7, 10, 16, 0.85) 100%)',
            }}
          />
        </motion.div>
      </div>

      {/* ── 3. LOWER ACTION & SUB-TAG ROW ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-3)',
          position: 'relative',
          zIndex: 20,
          marginTop: 'var(--space-4)',
        }}
      >
        {/* Editorial Role Tag */}
        <div
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '1.05rem' : 'var(--text-xs)',
            letterSpacing: isArabic ? '0.04em' : '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            fontWeight: 600,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'var(--color-solar-amber)' }}>●</span>
          <span>{isArabic ? 'هندسة برمجيات' : 'SOFTWARE ENGINEERING'}</span>
          <span style={{ opacity: 0.35 }}>|</span>
          <span>{isArabic ? 'توجيه إبداعي' : 'CREATIVE DIRECTION'}</span>
          <span style={{ opacity: 0.35 }}>|</span>
          <span>{isArabic ? 'أنظمة الذكاء الاصطناعي' : 'APPLIED AI SYSTEMS'}</span>
        </div>

        {/* Dual Call to Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Primary CTA: Solar Amber */}
          <a
            href="#oss-product"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--color-solar-amber)',
              color: '#070A10',
              padding: '12px 28px',
              borderRadius: 'var(--border-radius-full)',
              fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
              fontSize: isArabic ? '1.1rem' : '0.95rem',
              fontWeight: 800,
              letterSpacing: isArabic ? '0.02em' : '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-solar)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(245, 138, 7, 0.45)';
              e.currentTarget.style.backgroundColor = '#FFA938';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-solar)';
              e.currentTarget.style.backgroundColor = 'var(--color-solar-amber)';
            }}
          >
            <ArrowDown size={16} />
            <span>{isArabic ? 'استكشف الأعمال' : 'EXPLORE WORK'}</span>
          </a>

          {/* Secondary CTA: Glass Card */}
          <a
            href="#about-identity"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--color-text-primary)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              padding: '12px 28px',
              borderRadius: 'var(--border-radius-full)',
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '1rem' : '0.92rem',
              fontWeight: 600,
              letterSpacing: isArabic ? '0.02em' : '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-electric-cyan)';
              e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <Send size={15} color="var(--color-electric-cyan)" />
            <span>{isArabic ? 'عن المهندس' : 'ABOUT AHMED'}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicHeroStage;
