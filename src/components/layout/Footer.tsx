import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-canvas)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'var(--space-8) clamp(1.5rem, 4vw, 3.5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 'var(--space-4)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        <span
          style={{
            fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
            fontSize: isArabic ? '1.3rem' : 'var(--text-lg)',
            letterSpacing: isArabic ? '0.01em' : '0.04em',
            color: 'var(--color-text-primary)',
            fontWeight: isArabic ? 800 : 700,
            textTransform: 'uppercase',
          }}
        >
          {isArabic ? 'أحمد المـلاح' : 'AHMED AL MALAH'}
        </span>
        <span
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
            color: 'var(--color-text-muted)',
            letterSpacing: isArabic ? '0.02em' : '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {isArabic ? 'هندسة برمجيات · توجيه إبداعي · ذكاء اصطناعي' : 'Software Engineering · Creative Direction · AI'}
        </span>
      </div>

      <div
        style={{
          fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
          fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
          color: 'var(--color-text-muted)',
        }}
      >
        {isArabic
          ? `© ${new Date().getFullYear()} أحمد الملاح. جميع الحقوق محفوظة.`
          : `© ${new Date().getFullYear()} Ahmed Al Malah. All rights reserved.`}
      </div>
    </footer>
  );
};

export default Footer;
