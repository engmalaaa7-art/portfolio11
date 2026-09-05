import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const OssProductShowcase: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <section
      id="oss-product"
      aria-label="OSS AI Product Section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas)',
        padding: 'clamp(4.5rem, 9vh, 7rem) var(--space-8)',
        color: 'var(--color-text-primary)',
        borderTop: '1px solid rgba(29, 78, 216, 0.25)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: isArabic ? '25%' : '75%',
          width: 'min(600px, 80vw)',
          height: 'min(500px, 60vh)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.14) 0%, rgba(7, 10, 16, 0) 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Eyebrow & Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <div
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-solar-amber)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}
          >
            <Sparkles size={14} color="var(--color-solar-amber)" />
            <span>{t('oss_eyebrow')}</span>
          </div>

          <h2
            style={{
              fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.5rem, 5.5vw, 4.2rem)' : 'clamp(2.5rem, 5.5vw, 4.5rem)',
              lineHeight: isArabic ? 1.15 : 0.95,
              color: 'var(--color-text-primary)',
              margin: 0,
              whiteSpace: 'nowrap',
              fontWeight: isArabic ? 900 : 800,
            }}
          >
            {isArabic ? (
              <>
                أُسّ <span style={{ color: 'var(--color-electric-cyan)', fontSize: '0.85em' }}>// محرك بناء المواقع</span>
              </>
            ) : (
              <>
                OSS <span style={{ color: 'var(--color-electric-cyan)', fontSize: '0.85em' }}>// AI ENGINE</span>
              </>
            )}
          </h2>
        </div>

        {/* Product Brief Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundColor: 'var(--color-surface-card)',
            backdropFilter: 'blur(16px)',
            border: 'var(--border-card)',
            borderRadius: 'var(--border-radius-md)',
            padding: 'clamp(1.8rem, 4vw, 2.8rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'center',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h3
              style={{
                fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
                fontSize: isArabic ? 'clamp(1.3rem, 2.4vw, 1.8rem)' : 'clamp(1.2rem, 2.2vw, 1.6rem)',
                color: 'var(--color-text-primary)',
                margin: 0,
                lineHeight: 1.3,
                fontWeight: 800,
              }}
            >
              {t('oss_title')}
            </h3>

            <p
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '1.05rem' : '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: isArabic ? 1.75 : 1.65,
                margin: 0,
              }}
            >
              {t('oss_subtitle')}
            </p>
          </div>

          {/* Simple Feature Tags Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-3)',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(29, 78, 216, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--border-radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <Terminal size={18} color="var(--color-electric-cyan)" />
              <span
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                }}
              >
                {isArabic ? 'إدخال طبيعي' : 'Natural Language Input'}
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(245, 138, 7, 0.08)',
                border: '1px solid rgba(245, 138, 7, 0.25)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--border-radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <Code2 size={18} color="var(--color-solar-amber)" />
              <span
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                }}
              >
                {isArabic ? 'كود برمجي إنتاجي' : 'Production-Grade Code'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OssProductShowcase;
