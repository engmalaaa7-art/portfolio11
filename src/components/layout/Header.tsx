import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Header: React.FC = () => {
  const { lang, setLang, isArabic, t } = useLanguage();

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: 'clamp(1rem, 2.5vh, 1.5rem) clamp(1.5rem, 4vw, 3rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, rgba(9, 8, 10, 0.95) 0%, rgba(9, 8, 10, 0) 100%)',
        backdropFilter: 'blur(8px)',
        pointerEvents: 'none',
      }}
    >
      {/* Brand logo & title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', pointerEvents: 'auto' }}>
        <a
          href="#hero-stage"
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
            fontSize: '1.4rem',
            letterSpacing: '0.1em',
            color: 'var(--color-cream-white)',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          {isArabic ? 'أحمد' : 'AM'}
        </a>
        <span
          className="header-tagline"
          style={{
            display: 'inline-block',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-hot-orange)',
            boxShadow: '0 0 8px var(--color-hot-orange)',
          }}
        />
        <span
          className="header-tagline"
          style={{
            fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-muted-beige)',
            fontWeight: 600,
          }}
        >
          {t('engineer_tag')}
        </span>
      </div>

      {/* Navigation & Language Switch */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2.5vw, 2.5rem)', pointerEvents: 'auto' }}>
        <nav
          className="desktop-nav"
        >
          <a
            href="#unmasked-intro"
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
              letterSpacing: isArabic ? '0.04em' : '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-muted-beige)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted-beige)')}
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
              color: 'var(--color-muted-beige)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted-beige)')}
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
              color: 'var(--color-muted-beige)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted-beige)')}
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
              color: 'var(--color-muted-beige)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted-beige)')}
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
              color: 'var(--color-hot-orange)',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-orange)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-hot-orange)')}
          >
            {t('nav_contact')}
          </a>
        </nav>

        {/* Minimal Language Switch (EN | AR) */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(243, 237, 227, 0.06)',
            border: '1px solid rgba(243, 237, 227, 0.15)',
          }}
          aria-label="Language Selector"
        >
          <button
            type="button"
            onClick={() => setLang('en')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: lang === 'en' ? 700 : 500,
              color: lang === 'en' ? 'var(--color-hot-orange)' : 'var(--color-muted-beige)',
              cursor: 'pointer',
              padding: '2px 4px',
              transition: 'color 0.2s ease',
            }}
            aria-current={lang === 'en' ? 'true' : undefined}
          >
            EN
          </button>
          <span style={{ color: 'rgba(243, 237, 227, 0.2)', fontSize: '10px' }}>|</span>
          <button
            type="button"
            onClick={() => setLang('ar')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-arabic)',
              fontSize: '12px',
              fontWeight: lang === 'ar' ? 700 : 500,
              color: lang === 'ar' ? 'var(--color-hot-orange)' : 'var(--color-muted-beige)',
              cursor: 'pointer',
              padding: '2px 4px',
              transition: 'color 0.2s ease',
            }}
            aria-current={lang === 'ar' ? 'true' : undefined}
          >
            عربي
          </button>
        </div>
      </div>
    </header>
  );
};
