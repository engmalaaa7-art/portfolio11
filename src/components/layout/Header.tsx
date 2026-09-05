import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { BrandMonogram } from '@/components/common/BrandMonogram';

export const Header: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: 'clamp(1rem, 2.5vh, 1.5rem) clamp(1.5rem, 4vw, 3.5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, rgba(7, 10, 16, 0.92) 0%, rgba(7, 10, 16, 0) 100%)',
        backdropFilter: 'blur(10px)',
        pointerEvents: 'none',
      }}
    >
      {/* Brand logo & title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', pointerEvents: 'auto' }}>
        <a
          href="#hero-stage"
          style={{
            fontFamily: isArabic ? 'var(--font-arabic-display)' : 'var(--font-display)',
            fontSize: '1.25rem',
            letterSpacing: isArabic ? '0.02em' : '-0.02em',
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
          aria-label="Ahmed Al Malah Portfolio Home"
        >
          <BrandMonogram size={22} color="#FFFFFF" />
          <span>{isArabic ? 'أحمد المـلاح' : 'AHMED'}</span>
        </a>
        <span
          className="header-tagline"
          style={{
            display: 'inline-block',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-solar-amber)',
            boxShadow: '0 0 10px var(--color-solar-amber)',
          }}
        />
        <span
          className="header-tagline"
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            fontWeight: 600,
          }}
        >
          {t('engineer_tag')}
        </span>
      </div>

      {/* Navigation & Language Switch */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2.5vw, 2.5rem)', pointerEvents: 'auto' }}>
        <nav className="desktop-nav">
          <a
            href="#about-identity"
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            {t('nav_identity')}
          </a>
          <a
            href="#oss-product"
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            {t('nav_oss')}
          </a>
          <a
            href="#experience"
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            {t('nav_journey')}
          </a>
          <a
            href="#capabilities"
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            {t('nav_profile')}
          </a>
          <a
            href="#contact-final"
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-solar-amber)',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'color 0.2s ease, text-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFA938';
              e.currentTarget.style.textShadow = '0 0 12px var(--color-solar-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-solar-amber)';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            {t('nav_contact')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
