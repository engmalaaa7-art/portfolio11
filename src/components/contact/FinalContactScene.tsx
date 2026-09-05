import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Globe, Send } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const FinalContactScene: React.FC = () => {
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  return (
    <section
      id="contact-final"
      aria-label="Final Contact Scene"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-canvas)',
        color: 'var(--color-text-primary)',
        padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(29, 78, 216, 0.25)',
      }}
    >
      {/* Radiant Atmospheric Stage Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(850px, 90vw)',
          height: 'min(550px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.28) 0%, rgba(245, 138, 7, 0.12) 48%, rgba(7, 10, 16, 0) 75%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vh, 4.5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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
          {t('final_eyebrow')}
        </motion.div>

        {/* Primary Closing Statement & CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.5rem, 6.5vw, 5.8rem)' : 'clamp(3rem, 7.5vw, 6.5rem)',
              lineHeight: isArabic ? 1.15 : 0.88,
              letterSpacing: isArabic ? '0.01em' : '0.03em',
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)',
              margin: 0,
              fontWeight: isArabic ? 900 : 800,
            }}
          >
            {t('final_heading')}
          </motion.h2>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? 'clamp(1.1rem, 2vw, 1.5rem)' : 'clamp(1rem, 1.8vw, 1.4rem)',
              letterSpacing: isArabic ? '0.02em' : '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-electric-cyan)',
              fontWeight: 600,
            }}
          >
            {t('final_sub')}
          </motion.div>

          {/* Direct CTA Action Button */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
            style={{ marginTop: 'var(--space-2)' }}
          >
            <a
              href="mailto:mala7.eg@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 34px',
                backgroundColor: 'var(--color-solar-amber)',
                color: '#070A10',
                borderRadius: 'var(--border-radius-full)',
                fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
                fontSize: isArabic ? '1.15rem' : '1rem',
                fontWeight: 800,
                letterSpacing: isArabic ? '0.02em' : '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-solar)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(245, 138, 7, 0.45)';
                e.currentTarget.style.backgroundColor = '#FFA938';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-solar)';
                e.currentTarget.style.backgroundColor = 'var(--color-solar-amber)';
              }}
            >
              <Send size={18} />
              <span>{t('contact_connect_cta')}</span>
            </a>
          </motion.div>
        </div>

        {/* Contact Channels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-4)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-6)',
          }}
        >
          {/* Email Item */}
          <motion.a
            href="mailto:mala7.eg@gmail.com"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              padding: 'var(--space-5)',
              backgroundColor: 'var(--color-surface-card)',
              backdropFilter: 'blur(16px)',
              border: 'var(--border-card)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: 'var(--shadow-card)',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-electric-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-electric-cyan)' }}>
                <Mail size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_email')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-text-muted)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
              mala7.eg@gmail.com
            </span>
          </motion.a>

          {/* LinkedIn Item */}
          <motion.a
            href="https://www.linkedin.com/in/eng-mala7"
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.35 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              padding: 'var(--space-5)',
              backgroundColor: 'var(--color-surface-card)',
              backdropFilter: 'blur(16px)',
              border: 'var(--border-card)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: 'var(--shadow-card)',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-solar-amber)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-solar-amber)' }}>
                <Linkedin size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_linkedin')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-text-muted)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
              in/eng-mala7
            </span>
          </motion.a>

          {/* GitHub Item */}
          <motion.a
            href="https://github.com/engmalaaa7"
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              padding: 'var(--space-5)',
              backgroundColor: 'var(--color-surface-card)',
              backdropFilter: 'blur(16px)',
              border: 'var(--border-card)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: 'var(--shadow-card)',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-electric-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-electric-cyan)' }}>
                <Github size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_github')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-text-muted)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
              github.com/engmalaaa7
            </span>
          </motion.a>

          {/* Behance Item */}
          <motion.a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.45 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              padding: 'var(--space-5)',
              backgroundColor: 'var(--color-surface-card)',
              backdropFilter: 'blur(16px)',
              border: 'var(--border-card)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: 'var(--shadow-card)',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-solar-amber)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-solar-amber)' }}>
                <Globe size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_behance')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-text-muted)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
              behance.net/ahmedalmalah
            </span>
          </motion.a>
        </div>

        {/* Location & Copyright Footer Line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-4)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : '0.85rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--color-solar-amber)" />
            <span>{t('location_val')}</span>
          </div>
          <span>
            {isArabic
              ? '© ٢٠٢٦ أحمد الملاح. جميع الحقوق محفوظة.'
              : '© 2026 AHMED AL MALAH. ALL RIGHTS RESERVED.'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalContactScene;
