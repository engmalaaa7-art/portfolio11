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
        backgroundColor: 'var(--color-deep-black)',
        padding: 'clamp(4rem, 8vh, 6rem) var(--space-8)',
        color: 'var(--color-cream-white)',
        borderTop: '1px solid rgba(184, 32, 36, 0.2)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
        }}
      >
        {/* Eyebrow & Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <div
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-hot-orange)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}
          >
            <Sparkles size={14} color="var(--color-hot-orange)" />
            <span>{t('oss_eyebrow')}</span>
          </div>

          <h2
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(2.5rem, 5.5vw, 4.2rem)' : 'clamp(2.5rem, 5.5vw, 4.5rem)',
              lineHeight: isArabic ? 1.15 : 0.95,
              color: 'var(--color-cream-white)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            OSS <span style={{ color: 'var(--color-warm-orange)', fontSize: '0.85em' }}>// أُسّ</span>
          </h2>
        </div>

        {/* Product Brief Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundColor: 'rgba(14, 12, 16, 0.85)',
            border: '1px solid rgba(230, 74, 36, 0.25)',
            borderRadius: 'var(--border-radius-md)',
            padding: 'clamp(1.8rem, 4vw, 2.8rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h3
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                fontSize: isArabic ? 'clamp(1.3rem, 2.4vw, 1.8rem)' : 'clamp(1.2rem, 2.2vw, 1.6rem)',
                color: 'var(--color-warm-orange)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {t('oss_title')}
            </h3>

            <p
              style={{
                fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: isArabic ? '1.05rem' : '1rem',
                color: 'var(--color-muted-beige)',
                lineHeight: isArabic ? 1.7 : 1.6,
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
                backgroundColor: 'rgba(230, 74, 36, 0.08)',
                border: '1px solid rgba(230, 74, 36, 0.2)',
                padding: 'var(--space-3)',
                borderRadius: 'var(--border-radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <Terminal size={16} color="var(--color-hot-orange)" />
              <span
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--color-cream-white)',
                }}
              >
                {isArabic ? 'إدخال طبيعي' : 'Natural Language Input'}
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(230, 74, 36, 0.08)',
                border: '1px solid rgba(230, 74, 36, 0.2)',
                padding: 'var(--space-3)',
                borderRadius: 'var(--border-radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <Code2 size={16} color="var(--color-warm-orange)" />
              <span
                style={{
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--color-cream-white)',
                }}
              >
                {isArabic ? 'كود برمي إنتاجي' : 'Production-Grade Code'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OssProductShowcase;
