import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const AboutIdentity: React.FC = () => {
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  return (
    <section
      id="about-identity"
      aria-label="About Ahmed Al Malah — Identity and Engineering Philosophy"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#070A10',
        color: 'var(--color-text-primary)',
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1rem, 4vw, 3.5rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(29, 78, 216, 0.25)',
      }}
    >
      {/* Volumetric Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: isArabic ? '25%' : '75%',
          width: 'min(750px, 85vw)',
          height: 'min(500px, 60vh)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(29, 78, 216, 0.18) 0%, rgba(7, 10, 16, 0) 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vh, 5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-solar-amber)',
            }}
          >
            <span style={{ width: '18px', height: '1px', backgroundColor: 'var(--color-solar-amber)' }} />
            {t('person_eyebrow')}
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.8rem, 6.5vw, 5.5rem)' : 'clamp(3.2rem, 7vw, 6rem)',
              lineHeight: isArabic ? 1.15 : 0.92,
              letterSpacing: isArabic ? '0.01em' : '0.03em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: 0,
              fontWeight: isArabic ? 900 : 800,
            }}
          >
            {t('person_greeting')}
          </motion.h2>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? 'clamp(1.2rem, 2.2vw, 1.6rem)' : 'clamp(1.1rem, 2vw, 1.45rem)',
              letterSpacing: isArabic ? '0.02em' : '0.06em',
              color: 'var(--color-electric-cyan)',
              fontWeight: 600,
            }}
          >
            {t('person_role')}
          </motion.div>
        </div>

        {/* 2-Column Editorial Grid: Portrait Frame & Manifesto */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Architectural Portrait Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid rgba(29, 78, 216, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(29, 78, 216, 0.2)',
            }}
          >
            {/* Ambient Corner Light */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle at top right, rgba(245, 138, 7, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />

            {/* Portrait Image */}
            <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
              <img
                src="/assets/images/ahmed-profile.png"
                alt="Ahmed Al Malah portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  filter: 'contrast(105%) brightness(0.95)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #070A10 0%, rgba(7, 10, 16, 0.2) 60%, transparent 100%)',
                }}
              />
            </div>

            {/* Overlay Info Strip */}
            <div
              style={{
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
                backgroundColor: 'rgba(7, 10, 16, 0.9)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-solar-amber)',
                  }}
                >
                  {t('person_currently_tag')}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-muted)' }}>
                  <MapPin size={12} color="var(--color-solar-amber)" />
                  <span style={{ fontSize: '11px', fontWeight: 600 }}>{t('person_location')}</span>
                </div>
              </div>

              <div
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
                  fontSize: isArabic ? '1.4rem' : '1.35rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                }}
              >
                {t('person_name')}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Manifesto & Signature Quote Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
            >
              <p
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? 'clamp(1.2rem, 1.8vw, 1.45rem)' : 'clamp(1.1rem, 1.6vw, 1.35rem)',
                  fontWeight: 400,
                  lineHeight: isArabic ? 1.8 : 1.7,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                {t('person_p1')}
              </p>

              <p
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? 'clamp(1.05rem, 1.4vw, 1.25rem)' : 'clamp(0.95rem, 1.25vw, 1.1rem)',
                  fontWeight: 400,
                  lineHeight: isArabic ? 1.8 : 1.7,
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                }}
              >
                {t('person_p2')}
              </p>
            </motion.div>

            {/* Signature Pull Quote Box */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderLeft: isArabic ? '1px solid rgba(255, 255, 255, 0.09)' : '3px solid var(--color-solar-amber)',
                borderRight: isArabic ? '3px solid var(--color-solar-amber)' : '1px solid rgba(255, 255, 255, 0.09)',
                padding: 'clamp(1.5rem, 3vw, 2.2rem)',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  color: 'var(--color-electric-cyan)',
                  textShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                "تخيّلها… وأنا أبنيها."
              </div>
              <span
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? '1.05rem' : '0.95rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {t('quote_sub')}
              </span>
            </motion.div>

            {/* Core Competencies Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {[
                { label: 'Full-Stack Architecture', icon: <Terminal size={13} /> },
                { label: 'AI Product Strategy', icon: <Sparkles size={13} /> },
                { label: 'Creative Direction & UI/UX', icon: <Award size={13} /> },
                { label: 'Applied Machine Learning', icon: <CheckCircle2 size={13} /> },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    backgroundColor: 'rgba(29, 78, 216, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    borderRadius: '20px',
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <span style={{ color: 'var(--color-electric-cyan)' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIdentity;
