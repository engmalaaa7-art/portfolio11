import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageSquare, Compass, Layout, Globe, CheckCircle2 } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

export const OssProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  // Track scroll progress across the 260vh stage track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // State 01: HUMAN IDEA (0.00 – 0.28)
  const ideaOpacity = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.29], [0.5, 1, 1, 0]);
  const ideaScale = useTransform(scrollYProgress, [0, 0.26], [1, 0.95]);

  // State 02: UNDERSTAND (0.25 – 0.54)
  const understandOpacity = useTransform(scrollYProgress, [0.25, 0.33, 0.48, 0.56], [0, 1, 1, 0]);
  const understandScale = useTransform(scrollYProgress, [0.25, 0.54], [0.95, 1]);

  // State 03: BUILD (0.50 – 0.78)
  const buildOpacity = useTransform(scrollYProgress, [0.5, 0.58, 0.72, 0.8], [0, 1, 1, 0]);
  const buildScale = useTransform(scrollYProgress, [0.5, 0.78], [0.95, 1]);

  // State 04: PRODUCT (0.75 – 1.00)
  const productOpacity = useTransform(scrollYProgress, [0.75, 0.84, 1], [0, 1, 1]);
  const productScale = useTransform(scrollYProgress, [0.75, 1], [0.95, 1]);

  // Dynamic Stage Indicator Labels
  const stageNumber = useTransform(
    scrollYProgress,
    [0, 0.28, 0.54, 0.78],
    ['01 / 04', '02 / 04', '03 / 04', '04 / 04']
  );
  const stageName = useTransform(
    scrollYProgress,
    [0, 0.28, 0.54, 0.78],
    isArabic
      ? ['٠١ // فكرة المستخدم', '٠٢ // الفهم والتفكيك', '٠٣ // البناء والتشكيل', '٠٤ // بنية المنتج المُولّد']
      : ['01 // HUMAN IDEA', '02 // UNDERSTAND', '03 // BUILD', '04 // COMPLETE PRODUCT']
  );

  if (prefersReducedMotion) {
    return (
      <section
        ref={containerRef}
        id="oss-product"
        aria-label="OSS AI Product Generation Scene"
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-deep-black)',
          padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
          color: 'var(--color-cream-white)',
          borderTop: '1px solid rgba(184, 32, 36, 0.25)',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <div>
            <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', color: 'var(--color-hot-orange)', fontSize: 'var(--text-xs)', letterSpacing: isArabic ? '0.04em' : '0.22em', fontWeight: 700, textTransform: 'uppercase' }}>
              {t('oss_eyebrow')}
            </span>
            <h2 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: 'clamp(3.5rem, 8vw, 7rem)', margin: 0, lineHeight: 0.9 }}>
              OSS <span style={{ fontFamily: 'var(--font-arabic)', color: 'var(--color-warm-orange)', fontSize: '0.8em' }}>// أُسّ</span>
            </h2>
            <div style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)', fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', color: 'var(--color-warm-orange)', marginTop: 'var(--space-2)' }}>
              {t('oss_title')}
            </div>
            <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', color: 'var(--color-muted-beige)', fontSize: '1.2rem', fontWeight: 300, maxWidth: '750px', marginTop: 'var(--space-3)', lineHeight: 1.6 }}>
              {t('oss_subtitle')}
            </p>
          </div>

          {/* Static 4-Stage Vertical Story */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-6)' }}>
            <div style={{ borderLeft: isArabic ? 'none' : '2px solid var(--color-hot-orange)', borderRight: isArabic ? '2px solid var(--color-hot-orange)' : 'none', paddingLeft: isArabic ? 0 : 'var(--space-4)', paddingRight: isArabic ? 'var(--space-4)' : 0 }}>
              <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-hot-orange)', fontWeight: 700 }}>{t('oss_stage_01')}</span>
              <h3 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.2rem', margin: '4px 0 0 0' }}>{isArabic ? 'وصف الاحتياج بالكلمات' : 'DESCRIBE WHAT YOU NEED'}</h3>
              <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted-beige)', marginTop: 'var(--space-2)' }}>
                {isArabic ? '"أحتاج موقع ويب حديث لاستوديو معماري مع معرض أعمال ونموذج حجز واستشارة."' : '"I need a clean, modern website for an architectural studio with a project gallery and booking form."'}
              </p>
            </div>
            <div style={{ borderLeft: isArabic ? 'none' : '2px solid var(--color-warm-orange)', borderRight: isArabic ? '2px solid var(--color-warm-orange)' : 'none', paddingLeft: isArabic ? 0 : 'var(--space-4)', paddingRight: isArabic ? 'var(--space-4)' : 0 }}>
              <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-warm-orange)', fontWeight: 700 }}>{t('oss_stage_02')}</span>
              <h3 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.2rem', margin: '4px 0 0 0' }}>{isArabic ? 'استراتيجية التصميم المعرفية' : 'DESIGN STRATEGY'}</h3>
              <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted-beige)', marginTop: 'var(--space-2)' }}>
                {isArabic ? 'يحلل نظام أُسّ الغرض، وهيكل المحتوى، والاتجاه الجمالي، وتناغم الألوان المطلوب.' : 'OSS analyzes intent, content architecture, aesthetic direction, and harmonious color tokens.'}
              </p>
            </div>
            <div style={{ borderLeft: isArabic ? 'none' : '2px solid var(--color-cinematic-red)', borderRight: isArabic ? '2px solid var(--color-cinematic-red)' : 'none', paddingLeft: isArabic ? 0 : 'var(--space-4)', paddingRight: isArabic ? 'var(--space-4)' : 0 }}>
              <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-cinematic-red)', fontWeight: 700 }}>{t('oss_stage_03')}</span>
              <h3 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.2rem', margin: '4px 0 0 0' }}>{isArabic ? 'بناء وتشكيل الهيكل' : 'LAYOUT CONSTRUCTION'}</h3>
              <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted-beige)', marginTop: 'var(--space-2)' }}>
                {isArabic ? 'تتشكل الأقسام، وشبكات العرض المتجاوبة، والتسلسل البصري في الوقت الفعلي.' : 'Sections, responsive grids, and visual hierarchy take shape in real time.'}
              </p>
            </div>
            <div style={{ borderLeft: isArabic ? 'none' : '2px solid var(--color-cream-white)', borderRight: isArabic ? '2px solid var(--color-cream-white)' : 'none', paddingLeft: isArabic ? 0 : 'var(--space-4)', paddingRight: isArabic ? 'var(--space-4)' : 0 }}>
              <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-cream-white)', fontWeight: 700 }}>{t('oss_stage_04')}</span>
              <h3 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.2rem', margin: '4px 0 0 0' }}>{isArabic ? 'بنية الموقع الرقمي' : 'GENERATED PRODUCT'}</h3>
              <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted-beige)', marginTop: 'var(--space-2)' }}>
                {isArabic ? 'تظهر رؤية المستخدم كبنية موقع ويب متكاملة، نظيفة، وجاهزة للإنتاج.' : "The user's vision emerges as a fully realized, clean website architecture ready for production."}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="oss-product"
      aria-label="OSS AI Product Generation Scene"
      style={{
        position: 'relative',
        width: '100%',
        height: '260vh',
        backgroundColor: 'var(--color-deep-black)',
        borderTop: '1px solid rgba(184, 32, 36, 0.25)',
      }}
    >
      {/* Sticky Cinematic Viewport Pane */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100svh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-6)',
        }}
      >
        {/* Ambient Product Glow Field */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(750px, 90vw)',
            height: 'min(550px, 70vh)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(230, 74, 36, 0.12) 0%, rgba(184, 32, 36, 0.06) 50%, transparent 80%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Persistent Stage Indicator (Top Center) ── */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(1.5rem, 3.5vh, 2.5rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            padding: '6px 18px',
            backgroundColor: 'rgba(14, 12, 16, 0.85)',
            border: '1px solid rgba(243, 237, 227, 0.15)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            zIndex: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-hot-orange)',
                boxShadow: '0 0 10px var(--color-hot-orange)',
              }}
            />
            <motion.span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-hot-orange)',
              }}
            >
              {stageNumber}
            </motion.span>
          </div>
          <span style={{ color: 'rgba(243, 237, 227, 0.2)', fontSize: '10px' }}>|</span>
          <motion.span
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: isArabic ? '0.04em' : '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
            }}
          >
            {stageName}
          </motion.span>
        </div>

        {/* ── Product Branding Header (Top Left) ── */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(1.5rem, 3.5vh, 2.5rem)',
            left: isArabic ? 'auto' : 'clamp(1.5rem, 4vw, 3.5rem)',
            right: isArabic ? 'clamp(1.5rem, 4vw, 3.5rem)' : 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            zIndex: 20,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: isArabic ? '0.04em' : '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-hot-orange)',
            }}
          >
            {t('oss_eyebrow')}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              lineHeight: 0.95,
              letterSpacing: '0.04em',
              color: 'var(--color-cream-white)',
              margin: 0,
            }}
          >
            OSS <span style={{ fontFamily: 'var(--font-arabic)', color: 'var(--color-warm-orange)', fontSize: '0.85em' }}>// أُسّ</span>
          </h2>
        </div>

        {/* ── Main Dynamic Stage Canvas Stage (Centered) ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            height: 'min(580px, 72vh)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* -------------------------------------------------------------
              STAGE 01: HUMAN IDEA (0.00 – 0.28)
              ------------------------------------------------------------- */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: ideaOpacity,
              scale: ideaScale,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '820px',
                backgroundColor: 'rgba(14, 12, 16, 0.9)',
                border: '1px solid rgba(230, 74, 36, 0.35)',
                borderRadius: 'var(--border-radius-md)',
                padding: 'clamp(2rem, 4.5vh, 3rem)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(230, 74, 36, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 237, 227, 0.1)', paddingBottom: 'var(--space-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-hot-orange)' }}>
                  <MessageSquare size={18} />
                  <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: isArabic ? '0.04em' : '0.2em' }}>
                    {t('oss_stage_01')}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ADE80' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'var(--color-muted-beige)', letterSpacing: '0.1em' }}>INPUT READY</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-muted-beige)', letterSpacing: isArabic ? '0.04em' : '0.12em' }}>
                  {isArabic ? 'موجه المستخدم باللغة الطبيعية:' : 'USER NATURAL LANGUAGE PROMPT:'}
                </span>
                <p
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                    fontSize: isArabic ? 'clamp(1.4rem, 2.8vw, 2.2rem)' : 'clamp(1.5rem, 3.2vw, 2.4rem)',
                    lineHeight: isArabic ? 1.4 : 1.25,
                    letterSpacing: isArabic ? '0.02em' : '0.04em',
                    color: 'var(--color-cream-white)',
                    margin: 0,
                  }}
                >
                  {isArabic ? '«أحتاج موقع ويب حديث وبسيط لاستوديو تصميم معماري مع معرض أعمال تفاعلي ونموذج حجز واستشارات.»' : '"I need a clean, modern website for my architectural studio with a project gallery and inquiry booking."'}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-warm-orange)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>
                <Sparkles size={14} />
                <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)' }}>{isArabic ? 'نظام أُسّ يعالج الفكرة المعرفية...' : 'OSS ingesting human intent...'}</span>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------
              STAGE 02: UNDERSTAND (0.25 – 0.54)
              ------------------------------------------------------------- */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: understandOpacity,
              scale: understandScale,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '880px',
                backgroundColor: 'rgba(14, 12, 16, 0.9)',
                border: '1px solid rgba(242, 122, 50, 0.35)',
                borderRadius: 'var(--border-radius-md)',
                padding: 'clamp(1.5rem, 3.5vh, 2.5rem)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(242, 122, 50, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 237, 227, 0.1)', paddingBottom: 'var(--space-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-warm-orange)' }}>
                  <Compass size={18} />
                  <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: isArabic ? '0.04em' : '0.2em' }}>
                    {t('oss_stage_02')}
                  </span>
                </div>
                <span style={{ color: 'var(--color-hot-orange)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>{isArabic ? 'تحليل الأنماط والسمات...' : 'PATTERN SYNTHESIS'}</span>
              </div>

              {/* Cognitive Blueprint Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-3)' }}>
                <div style={{ backgroundColor: 'rgba(242, 122, 50, 0.06)', padding: 'var(--space-3)', borderRadius: '4px', border: '1px solid rgba(242, 122, 50, 0.2)' }}>
                  <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '10px', color: 'var(--color-muted-beige)', letterSpacing: '0.1em' }}>{isArabic ? 'نوع المنتج' : 'INTENT CLUSTER'}</span>
                  <div style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-cream-white)', fontWeight: 600, marginTop: '4px' }}>
                    {isArabic ? 'استوديو معماري وتصميم' : 'Architecture & Studio Portfolio'}
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(242, 122, 50, 0.06)', padding: 'var(--space-3)', borderRadius: '4px', border: '1px solid rgba(242, 122, 50, 0.2)' }}>
                  <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '10px', color: 'var(--color-muted-beige)', letterSpacing: '0.1em' }}>{isArabic ? 'الهيكل المقترح' : 'LAYOUT STRUCTURE'}</span>
                  <div style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-cream-white)', marginTop: '4px', lineHeight: 1.4 }}>
                    {isArabic ? 'معرض رئيسي ← شبكة المشاريع ← الفلسفة ← الحجز' : 'Hero Showcase → Project Grid → Studio Philosophy → Booking Form'}
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(242, 122, 50, 0.06)', padding: 'var(--space-3)', borderRadius: '4px', border: '1px solid rgba(242, 122, 50, 0.2)' }}>
                  <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '10px', color: 'var(--color-muted-beige)', letterSpacing: '0.1em' }}>{isArabic ? 'لوحة الألوان' : 'PALETTE TOKENS'}</span>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '3px', backgroundColor: '#09080A', border: '1px solid rgba(243,237,227,0.2)' }} title="Obsidian" />
                    <div style={{ width: '22px', height: '22px', borderRadius: '3px', backgroundColor: '#E64A24' }} title="Terracotta" />
                    <div style={{ width: '22px', height: '22px', borderRadius: '3px', backgroundColor: '#F3EDE3' }} title="Stone Cream" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------
              STAGE 03: BUILD (0.50 – 0.78)
              ------------------------------------------------------------- */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: buildOpacity,
              scale: buildScale,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '920px',
                backgroundColor: 'rgba(14, 12, 16, 0.9)',
                border: '1px solid rgba(184, 32, 36, 0.35)',
                borderRadius: 'var(--border-radius-md)',
                padding: 'clamp(1.5rem, 3.5vh, 2.5rem)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(184, 32, 36, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(243, 237, 227, 0.1)', paddingBottom: 'var(--space-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-cinematic-red)' }}>
                  <Layout size={18} />
                  <span style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: isArabic ? '0.04em' : '0.2em' }}>
                    {t('oss_stage_03')}
                  </span>
                </div>
                <span style={{ color: 'var(--color-warm-orange)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>{isArabic ? 'تجميع الأقسام...' : 'SECTIONS ASSEMBLING...'}</span>
              </div>

              {/* Wireframe Diagram */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  backgroundColor: 'rgba(9, 8, 10, 0.7)',
                  padding: 'var(--space-4)',
                  borderRadius: '4px',
                  border: '1px dashed rgba(243, 237, 227, 0.15)',
                }}
              >
                {/* Wireframe Nav */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 12px', borderBottom: '1px solid rgba(243, 237, 227, 0.1)' }}>
                  <div style={{ width: '60px', height: '10px', backgroundColor: 'var(--color-cream-white)', opacity: 0.8, borderRadius: '2px' }} />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '40px', height: '6px', backgroundColor: 'var(--color-muted-beige)', opacity: 0.4, borderRadius: '2px' }} />
                    <div style={{ width: '40px', height: '6px', backgroundColor: 'var(--color-muted-beige)', opacity: 0.4, borderRadius: '2px' }} />
                    <div style={{ width: '50px', height: '14px', backgroundColor: 'var(--color-hot-orange)', borderRadius: '2px' }} />
                  </div>
                </div>

                {/* Wireframe Hero */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px', padding: '12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ width: '80%', height: '18px', backgroundColor: 'var(--color-cream-white)', opacity: 0.9, borderRadius: '2px' }} />
                    <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-muted-beige)', opacity: 0.4, borderRadius: '2px' }} />
                    <div style={{ width: '60%', height: '8px', backgroundColor: 'var(--color-muted-beige)', opacity: 0.4, borderRadius: '2px' }} />
                  </div>
                  <div style={{ height: '60px', backgroundColor: 'rgba(243, 237, 227, 0.08)', borderRadius: '3px', border: '1px solid rgba(243, 237, 227, 0.15)' }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------
              STAGE 04: PRODUCT (0.75 – 1.00) (Simulated Architecture Preview)
              ------------------------------------------------------------- */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: productOpacity,
              scale: productScale,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '960px',
                backgroundColor: 'rgba(14, 12, 16, 0.95)',
                border: '1px solid rgba(243, 237, 227, 0.25)',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(242, 122, 50, 0.2)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Browser Window Chrome */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#09080A',
                  padding: '10px 16px',
                  borderBottom: '1px solid rgba(243, 237, 227, 0.1)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                </div>

                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: 'var(--color-muted-beige)',
                    backgroundColor: 'rgba(243, 237, 227, 0.05)',
                    padding: '3px 18px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Globe size={12} color="#4ADE80" />
                  <span>https://oss.engine/preview/generated-architecture</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4ADE80', fontSize: '11px', fontWeight: 600 }}>
                  <CheckCircle2 size={13} />
                  <span>{t('oss_simulated_tag')}</span>
                </div>
              </div>

              {/* Rendered Product Architecture Content Canvas */}
              <div
                style={{
                  padding: 'clamp(1.5rem, 3.5vh, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                  backgroundColor: '#0E0D10',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(243, 237, 227, 0.08)', paddingBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.08em', color: 'var(--color-cream-white)' }}>
                    ARCHITECTURAL STRUCTURE // SIMULATION
                  </span>
                  <span style={{ fontSize: '10px', color: 'var(--color-muted-beige)', letterSpacing: '0.1em' }}>
                    {isArabic ? 'نموذج توضيحي مُولّد بالذكاء الاصطناعي' : 'CONCEPTUAL GENERATED PRODUCT VISUALIZATION'}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-6)', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <h4 style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)', fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: 1.1, color: 'var(--color-cream-white)', margin: 0 }}>
                      {isArabic ? 'بنية مكانية متقنة تترجم الأفكار إلى واقع رقمي' : 'SPATIAL ARCHITECTURE TRANSLATED INTO DIGITAL REALITY'}
                    </h4>
                    <p style={{ fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted-beige)', lineHeight: 1.5, margin: 0 }}>
                      {isArabic ? 'تصميم تجاوبي كامل تم إنشاؤه عبر فهم المقصد الطبيعي وبناء الأقسام بنسق جمالي دقيق.' : 'Full responsive website generated through natural language synthesis, harmonious color mapping, and clean component composition.'}
                    </p>
                  </div>
                  <div style={{ height: '110px', backgroundColor: '#141218', borderRadius: '4px', border: '1px solid rgba(243,237,227,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.14em', color: 'var(--color-hot-orange)' }}>
                      {isArabic ? 'تم التوليد بواسطة أُسّ' : 'COMPOSED BY OSS ENGINE'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OssProductShowcase;
