import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        borderTop: 'var(--border-subtle)',
        padding: 'var(--space-8) var(--space-8)',
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
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
            fontSize: isArabic ? '1.3rem' : 'var(--text-lg)',
            letterSpacing: isArabic ? '0.02em' : '0.05em',
            color: 'var(--color-cream-white)',
            fontWeight: isArabic ? 700 : 'normal',
          }}
        >
          {isArabic ? 'أحمد الملاح' : 'AHMED AL MALAH'}
        </span>
        <span
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
            color: 'var(--color-muted-beige)',
          }}
        >
          {isArabic ? 'مهندس برمجيات وذكاء اصطناعي وبيانات' : 'AI · Software · Data & Business Systems'}
        </span>
      </div>

      <div
        style={{
          fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
          fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
          color: 'var(--color-muted-beige)',
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
