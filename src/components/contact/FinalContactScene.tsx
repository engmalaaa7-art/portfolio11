import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Globe } from 'lucide-react';
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
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 32, 36, 0.25)',
      }}
    >
      {/* Glow Field */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(750px, 85vw)',
          height: 'min(500px, 85vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(184, 32, 36, 0.16) 0%, rgba(9, 8, 10, 0) 70%)',
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
            color: 'var(--color-hot-orange)',
          }}
        >
          <span style={{ width: '18px', height: '1px', backgroundColor: 'var(--color-hot-orange)' }} />
          {t('final_eyebrow')}
        </motion.div>

        {/* Primary Closing Statement */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.5rem, 6.5vw, 5.8rem)' : 'clamp(3rem, 7.5vw, 6.5rem)',
              lineHeight: isArabic ? 1.15 : 0.88,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
              fontWeight: isArabic ? 800 : 'normal',
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
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
              fontSize: isArabic ? 'clamp(1.1rem, 2vw, 1.5rem)' : 'clamp(1rem, 1.8vw, 1.4rem)',
              letterSpacing: isArabic ? '0.02em' : '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-orange)',
              fontWeight: isArabic ? 700 : 'normal',
            }}
          >
            {t('final_sub')}
          </motion.div>
        </div>

        {/* Contact Channels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-6)',
            borderTop: '1px solid rgba(243, 237, 227, 0.1)',
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
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Mail size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_email')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--color-cream-white)', fontWeight: 600 }}>
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
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Linkedin size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_linkedin')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--color-cream-white)', fontWeight: 600 }}>
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
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Github size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_github')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--color-cream-white)', fontWeight: 600 }}>
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
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Globe size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {t('contact_behance')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--color-cream-white)', fontWeight: 600 }}>
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
            borderTop: '1px solid rgba(243, 237, 227, 0.08)',
            paddingTop: 'var(--space-4)',
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : '0.85rem',
            color: 'var(--color-muted-beige)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--color-hot-orange)" />
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
