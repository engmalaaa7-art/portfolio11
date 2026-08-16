import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const FinalContactScene: React.FC = () => {
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  return (
    <section
      id="contact-final"
      aria-label="Final Scene, Narrative Closure and Direct Contact Channels"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        padding: 'clamp(6rem, 12vh, 10rem) var(--space-8)',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 32, 36, 0.25)',
      }}
    >
      {/* Atmospheric Crimson Glow & Subtle Web Tension Trajectory */}
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

      {/* Dynamic Narrative Callback Tension Line */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.2,
        }}
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 300 Q 500 120 1000 300"
          fill="none"
          stroke="var(--color-hot-orange)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
      </svg>

      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3.5rem, 7vh, 5.5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Cinematic Callback Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
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

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.18em',
              color: 'var(--color-muted-beige)',
              textTransform: 'uppercase',
            }}
          >
            <span>{isArabic ? 'البداية: القناع' : 'OPENING: THE MASK'}</span>
            <span style={{ color: 'var(--color-hot-orange)' }}>{isArabic ? '←' : '→'}</span>
            <span style={{ color: 'var(--color-warm-orange)', fontWeight: 700 }}>
              {isArabic ? 'الخاتمة: الشخص خلف القناع' : 'CLOSURE: THE PERSON BEHIND IT'}
            </span>
          </div>
        </div>

        {/* Primary Closing Statement */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(3.2rem, 9.5vw, 7.8rem)' : 'clamp(3.8rem, 10vw, 8.5rem)',
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
              fontSize: isArabic ? 'clamp(1.2rem, 2.2vw, 1.7rem)' : 'clamp(1.1rem, 2vw, 1.5rem)',
              letterSpacing: isArabic ? '0.02em' : '0.12em',
              color: 'var(--color-warm-orange)',
              textTransform: 'uppercase',
              fontWeight: isArabic ? 700 : 'normal',
            }}
          >
            {t('final_sub')}
          </motion.div>
        </div>

        {/* Editorial Contact Channels (No phone/WhatsApp, Email + Instagram + Facebook + Location) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-8)',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid rgba(243, 237, 227, 0.12)',
          }}
        >
          {/* Email Item */}
          <motion.a
            href="mailto:mala7.eg@gmail.com"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = isArabic ? 'translateX(-6px)' : 'translateX(6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Mail size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: isArabic ? '0.95rem' : 'var(--text-xs)', letterSpacing: isArabic ? '0.04em' : '0.2em', fontWeight: 700 }}>
                  {t('contact_email')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: 'var(--color-cream-white)',
                wordBreak: 'break-all',
                direction: 'ltr',
                textAlign: isArabic ? 'right' : 'left',
              }}
            >
              mala7.eg@gmail.com
            </span>
          </motion.a>

          {/* Instagram Item */}
          <motion.a
            href="https://www.instagram.com/eng_mala7"
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.4, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = isArabic ? 'translateX(-6px)' : 'translateX(6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Instagram size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: isArabic ? '0.95rem' : 'var(--text-xs)', letterSpacing: isArabic ? '0.04em' : '0.2em', fontWeight: 700 }}>
                  {t('contact_instagram')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: 'var(--color-cream-white)',
                direction: 'ltr',
                textAlign: isArabic ? 'right' : 'left',
              }}
            >
              @eng_mala7
            </span>
          </motion.a>

          {/* Facebook Item */}
          <motion.a
            href="https://www.facebook.com/share/1G3q7psqSd/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.45, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = isArabic ? 'translateX(-6px)' : 'translateX(6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                <Facebook size={16} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: isArabic ? '0.95rem' : 'var(--text-xs)', letterSpacing: isArabic ? '0.04em' : '0.2em', fontWeight: 700 }}>
                  {t('contact_facebook')}
                </span>
              </div>
              <ArrowUpRight size={14} color="var(--color-muted-beige)" />
            </div>
            <span
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: 'var(--color-cream-white)',
              }}
            >
              {isArabic ? 'أحمد الملاح' : 'Ahmed Al Malah'}
            </span>
          </motion.a>

          {/* Location / Direct CTA Item */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.5, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-muted-beige)' }}>
              <MapPin size={16} />
              <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: isArabic ? '0.95rem' : 'var(--text-xs)', letterSpacing: isArabic ? '0.04em' : '0.2em', fontWeight: 700 }}>
                {t('contact_location')}
              </span>
            </div>
            <span
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '1.2rem' : 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontWeight: 600,
                letterSpacing: isArabic ? '0.02em' : '0.02em',
                color: 'var(--color-cream-white)',
                opacity: 0.9,
              }}
            >
              {t('location_val')}
            </span>

            {/* Clean Visual CTA Button */}
            <a
              href="mailto:mala7.eg@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: 'var(--space-2)',
                padding: '6px 14px',
                backgroundColor: 'rgba(230, 74, 36, 0.15)',
                border: '1px solid var(--color-hot-orange)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--color-cream-white)',
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: isArabic ? '0.04em' : '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                width: 'fit-content',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-hot-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(230, 74, 36, 0.15)';
              }}
            >
              <MessageSquare size={13} />
              <span>{t('contact_connect_cta')}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalContactScene;
