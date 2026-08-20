import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Sparkles, Shield, Smartphone, Users } from 'lucide-react';
import { usePointerParallax } from '@/hooks/usePointerParallax';
import { useLanguage } from '@/context/LanguageContext';

interface ExperienceEntry {
  id: string;
  number: string;
  status: string;
  companyEn: string;
  companyAr: string;
  roleEn: string;
  roleAr: string;
  typeEn: string;
  typeAr: string;
  scopeEn: string;
  scopeAr: string;
  impactEn: string;
  impactAr: string;
  isCurrent?: boolean;
  icon: React.ReactNode;
}

const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'al-qalaa',
    number: '01',
    status: 'CURRENT',
    companyEn: 'AL QALAA',
    companyAr: 'القلعة',
    roleEn: 'Art Direction · UI/UX',
    roleAr: 'التوجيه الفني · تصميم الواجهات وتجربة المستخدم',
    typeEn: 'ART DIRECTION & CREATIVE SYSTEMS',
    typeAr: 'توجيه فني وأنظمة بصرية متكاملة',
    scopeEn: 'Leading art direction, brand identity, user interface design, and visual experience systems.',
    scopeAr: 'قيادة التوجيه الفني، الهوية البصرية، تصميم واجهات المستخدم، وتجارب التصميم المعقدة.',
    impactEn: 'Delivered unified design systems and elevated brand perception across digital platforms.',
    impactAr: 'تقديم أنظمة تصميم موحدة ورفع جودة الواجهات البصرية للمنتجات الرقمية.',
    isCurrent: true,
    icon: <Sparkles size={16} />,
  },
  {
    id: 'vodafone',
    number: '02',
    status: 'EXPERIENCE',
    companyEn: 'VODAFONE EGYPT',
    companyAr: 'فودافون مصر',
    roleEn: 'Software Development · Graphic Design',
    roleAr: 'تطوير البرمجيات · التصميم الجرافيكي',
    typeEn: 'SOFTWARE DEVELOPMENT & DESIGN',
    typeAr: 'تطوير البرمجيات والتصميم الجرافيكي',
    scopeEn: 'Engineered frontend features, mobile interfaces, and key promotional design assets for telecom products.',
    scopeAr: 'تطوير واجهات البرمجيات وتطبيقات الهاتف، وتصميم المواد الجرافيكية لخدمات الاتصالات.',
    impactEn: 'Built responsive components and brand campaign assets serving millions of active users.',
    impactAr: 'بناء مكونات برمجية متجاوبة وتصاميم دعاية موجهة لجمهور واسع.',
    icon: <Smartphone size={16} />,
  },
  {
    id: 'zain',
    number: '03',
    status: 'EXPERIENCE',
    companyEn: 'ZAIN KUWAIT',
    companyAr: 'زين الكويت',
    roleEn: 'Technology · Software',
    roleAr: 'التكنولوجيا · البرمجيات',
    typeEn: 'TECHNOLOGY & SOFTWARE SOLUTIONS',
    typeAr: 'الحلول التقنية والبرمجيات',
    scopeEn: 'Collaborated on digital software initiatives, system integration, and mobile application experiences.',
    scopeAr: 'التعاون في مبادرات البرمجيات الرقمية، وتكامل الأنظمة، وتجارب تطبيقات الهواتف.',
    impactEn: 'Strengthened digital service architecture and user engagement channels.',
    impactAr: 'تعزيز بنية الخدمات الرقمية وقنوات التفاعل مع المستخدمين.',
    icon: <Briefcase size={16} />,
  },
  {
    id: 'ooredoo',
    number: '04',
    status: 'EXPERIENCE',
    companyEn: 'OOREDOO QATAR',
    companyAr: 'أوريدو قطر',
    roleEn: 'Social Media · Content Creation',
    roleAr: 'التواصل الاجتماعي · صناعة المحتوى',
    typeEn: 'DIGITAL CONTENT & SOCIAL MEDIA',
    typeAr: 'المحتوى الرقمي والتواصل الاجتماعي',
    scopeEn: 'Crafted strategic content campaigns, social media graphics, and digital audience engagement media.',
    scopeAr: 'صناعة حملات المحتوى الاستراتيجي، والتصاميم الرقمية، وإدارة المحتوى الإعلامي.',
    impactEn: 'Boosted brand presence and digital reach across regional social media ecosystems.',
    impactAr: 'توسيع التواجد الرقمي والوصول الإعلامي عبر المنصات الاجتماعية الإقليمية.',
    icon: <Shield size={16} />,
  },
  {
    id: 'al-ahly',
    number: '05',
    status: 'EXPERIENCE',
    companyEn: 'AL AHLY SC',
    companyAr: 'النادي الأهلي',
    roleEn: 'Graphic Design · Content Creation',
    roleAr: 'التصميم الجرافيكي · صناعة المحتوى',
    typeEn: 'CREATIVE MEDIA & GRAPHIC DESIGN',
    typeAr: 'التصميم الجرافيكي وصناعة المحتوى',
    scopeEn: 'Designed high-impact visual media, match graphics, and official social content.',
    scopeAr: 'تصميم المواد البصرية عالية التأثير، والتصاميم الرياضية، والمحتوى الإعلامي الرسمي.',
    impactEn: 'Created iconic digital graphics driving massive engagement across official channels.',
    impactAr: 'ابتكار تصاميم بصرية مميزة حققت تفاعلاً واسعاً عبر القنوات الرسمية.',
    icon: <Users size={16} />,
  },
];

export const ExperienceJourney: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { prefersReducedMotion } = usePointerParallax();
  const { isArabic, t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 30%'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-label="Professional Career Archive and Engineering Experience"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-deep-black)',
        color: 'var(--color-cream-white)',
        padding: 'clamp(5rem, 10vh, 8rem) var(--space-8)',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 32, 36, 0.25)',
      }}
    >
      {/* Subtle Atmospheric Backdrop Glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: isArabic ? '75%' : '25%',
          width: 'min(600px, 80vw)',
          height: 'min(600px, 80vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(184, 32, 36, 0.08) 0%, rgba(9, 8, 10, 0) 70%)',
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
          gap: 'clamp(3.5rem, 7vh, 5.5rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
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
            {t('journey_eyebrow')}
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: isArabic ? 'clamp(3.6rem, 8.5vw, 7.2rem)' : 'clamp(3.5rem, 8vw, 7.5rem)',
              lineHeight: isArabic ? 1.15 : 0.9,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
              width: '100%',
              fontWeight: isArabic ? 800 : 'normal',
            }}
          >
            {t('journey_title')}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            style={{
              fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: isArabic ? 'clamp(1.05rem, 1.4vw, 1.25rem)' : 'clamp(0.95rem, 1.4vw, 1.15rem)',
              fontWeight: isArabic ? 400 : 300,
              lineHeight: isArabic ? 1.75 : 1.6,
              color: 'var(--color-muted-beige)',
              margin: 0,
              maxWidth: '750px',
            }}
          >
            {t('journey_sub')}
          </motion.p>
        </div>

        {/* Editorial Career Timeline (The Web of Experience) */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(3.5rem, 6vh, 5rem)',
            paddingLeft: isArabic ? 0 : 'clamp(1.5rem, 3.5vw, 3rem)',
            paddingRight: isArabic ? 'clamp(1.5rem, 3.5vw, 3rem)' : 0,
          }}
        >
          {/* Active SVG Trajectory Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: isArabic ? 'auto' : '0',
              right: isArabic ? '0' : 'auto',
              width: '2px',
              backgroundColor: 'rgba(243, 237, 227, 0.1)',
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-hot-orange)',
                scaleY: pathLength,
                transformOrigin: 'top',
                boxShadow: '0 0 12px var(--color-hot-orange)',
              }}
            />
          </div>

          {/* 5 Career Frames */}
          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={exp.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: isArabic ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                paddingBottom: idx === EXPERIENCES.length - 1 ? 0 : 'clamp(2.5rem, 5vh, 4rem)',
                borderBottom: idx === EXPERIENCES.length - 1 ? 'none' : '1px dashed rgba(243, 237, 227, 0.1)',
              }}
            >
              {/* Timeline Trajectory Node */}
              <div
                style={{
                  position: 'absolute',
                  left: isArabic ? 'auto' : 'calc(-1 * clamp(1.5rem, 3.5vw, 3rem) - 5px)',
                  right: isArabic ? 'calc(-1 * clamp(1.5rem, 3.5vw, 3rem) - 5px)' : 'auto',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: exp.isCurrent ? 'var(--color-hot-orange)' : '#09080A',
                  border: `2px solid ${exp.isCurrent ? 'var(--color-warm-orange)' : 'rgba(243, 237, 227, 0.4)'}`,
                  boxShadow: exp.isCurrent ? '0 0 16px var(--color-hot-orange)' : 'none',
                  zIndex: 4,
                }}
              />

              {/* Meta Header Line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  flexWrap: 'wrap',
                  fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: isArabic ? '0.95rem' : 'var(--text-xs)',
                  letterSpacing: isArabic ? '0.04em' : '0.2em',
                  textTransform: 'uppercase',
                  color: exp.isCurrent ? 'var(--color-hot-orange)' : 'var(--color-muted-beige)',
                  fontWeight: 700,
                }}
              >
                <span>{exp.number} //</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {exp.icon}
                  {isArabic ? exp.typeAr : exp.typeEn}
                </span>
                {exp.isCurrent && (
                  <span
                    style={{
                      padding: '2px 8px',
                      backgroundColor: 'rgba(230, 74, 36, 0.15)',
                      border: '1px solid var(--color-hot-orange)',
                      borderRadius: 'var(--border-radius-sm)',
                      color: 'var(--color-warm-orange)',
                      fontSize: '10px',
                    }}
                  >
                    {isArabic ? 'حالياً // نشط' : 'NOW // ACTIVE'}
                  </span>
                )}
                {exp.status === 'SEASON 6+' && (
                  <span
                    style={{
                      padding: '2px 8px',
                      backgroundColor: 'rgba(242, 122, 50, 0.12)',
                      border: '1px solid rgba(242, 122, 50, 0.4)',
                      borderRadius: 'var(--border-radius-sm)',
                      color: 'var(--color-warm-orange)',
                      fontSize: '10px',
                    }}
                  >
                    {isArabic ? 'الموسم ٦+' : 'SEASON 6+'}
                  </span>
                )}
              </div>

              {/* Company & Role Hierarchy */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display)',
                    fontSize: isArabic ? 'clamp(2rem, 5vw, 3.8rem)' : 'clamp(2.4rem, 5.5vw, 4.4rem)',
                    lineHeight: isArabic ? 1.2 : 0.92,
                    letterSpacing: isArabic ? '0.02em' : '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--color-cream-white)',
                    margin: 0,
                    fontWeight: isArabic ? 800 : 'normal',
                  }}
                >
                  {isArabic ? exp.companyAr : exp.companyEn}
                </h3>

                <div
                  style={{
                    fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-display-alt)',
                    fontSize: isArabic ? 'clamp(1.1rem, 2vw, 1.5rem)' : 'clamp(1rem, 1.8vw, 1.35rem)',
                    letterSpacing: isArabic ? '0.02em' : '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-orange)',
                    marginTop: '2px',
                    fontWeight: isArabic ? 700 : 'normal',
                  }}
                >
                  {isArabic ? exp.roleAr : exp.roleEn}
                </div>
              </div>

              {/* Two-Column Editorial Breakdown: Scope & Impact */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-2)',
                }}
              >
                {/* Scope & Execution */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <span
                    style={{
                      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: isArabic ? '0.9rem' : 'var(--text-xs)',
                      fontWeight: 700,
                      letterSpacing: isArabic ? '0.04em' : '0.16em',
                      color: 'var(--color-hot-orange)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {isArabic ? 'نطاق العمل والتنفيذ' : 'SCOPE & EXECUTION'}
                  </span>
                  <p
                    style={{
                      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: isArabic ? '1rem' : '0.92rem',
                      fontWeight: isArabic ? 400 : 300,
                      lineHeight: isArabic ? 1.7 : 1.6,
                      color: 'var(--color-cream-white)',
                      margin: 0,
                    }}
                  >
                    {isArabic ? exp.scopeAr : exp.scopeEn}
                  </p>
                </div>

                {/* Impact */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-1)',
                    borderLeft: isArabic ? 'none' : '1px solid rgba(243, 237, 227, 0.08)',
                    borderRight: isArabic ? '1px solid rgba(243, 237, 227, 0.08)' : 'none',
                    paddingLeft: isArabic ? 0 : 'clamp(1rem, 2.5vw, 1.5rem)',
                    paddingRight: isArabic ? 'clamp(1rem, 2.5vw, 1.5rem)' : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: isArabic ? '0.9rem' : 'var(--text-xs)',
                      fontWeight: 700,
                      letterSpacing: isArabic ? '0.04em' : '0.16em',
                      color: 'var(--color-muted-beige)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {isArabic ? 'الأثر والنتائج' : 'IMPACT'}
                  </span>
                  <p
                    style={{
                      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: isArabic ? '1rem' : '0.92rem',
                      fontWeight: isArabic ? 400 : 300,
                      lineHeight: isArabic ? 1.7 : 1.6,
                      color: 'var(--color-muted-beige)',
                      margin: 0,
                    }}
                  >
                    {isArabic ? exp.impactAr : exp.impactEn}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourney;
