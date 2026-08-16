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
    status: 'NOW',
    companyEn: 'AL QALAA EL HAMRA',
    companyAr: 'القلعة الحمراء',
    roleEn: 'AI Technical Coordinator',
    roleAr: 'منسق تقني للذكاء الاصطناعي',
    typeEn: 'APPLIED AI & TECHNICAL COORDINATION',
    typeAr: 'ذكاء اصطناعي تطبيقي وتنسيق تقني',
    scopeEn: 'Coordinates technical pipelines, manages applied AI integrations, and oversees intelligent automation workflows across internal operations.',
    scopeAr: 'تنسيق خطوط الإنتاج التقنية، وإدارة تكامل الذكاء الاصطناعي التطبيقي، والإشراف على مسارات الأتمتة الذكية.',
    impactEn: 'Translates machine learning capabilities into operational pipelines that streamline engineering cycles and reduce manual overhead.',
    impactAr: 'تحويل قدرات تعلم الآلة إلى مسارات عمل فعلية تختصر الدورات الهندسية وتزيد من كفاءة الأداء.',
    isCurrent: true,
    icon: <Sparkles size={16} />,
  },
  {
    id: 'higgsfield',
    number: '02',
    status: 'NOW',
    companyEn: 'HIGGSFIELD AI',
    companyAr: 'هيجزفيلد للذكاء الاصطناعي',
    roleEn: 'Strategic Partner',
    roleAr: 'شريك استراتيجي',
    typeEn: 'GENERATIVE AI & STRATEGIC ALLIANCE',
    typeAr: 'ذكاء اصطناعي توليدي وشراكة استراتيجية',
    scopeEn: 'Collaborates on generative video workflows, creative intelligence systems, and regional community developer engagement.',
    scopeAr: 'التعاون في مسارات الفيديو التوليدي، وأنظمة الذكاء الإبداعي، وتوسيع مجتمع المطورين التقني.',
    impactEn: 'Bridges neural video synthesis models with production creator pipelines and developer integrations.',
    impactAr: 'ربط نماذج توليد الفيديو العصبية بمسارات الإنتاج التقنية للمطورين والمبدعين.',
    isCurrent: true,
    icon: <Briefcase size={16} />,
  },
  {
    id: 'vodafone',
    number: '03',
    status: 'EXPERIENCE',
    companyEn: 'VODAFONE EGYPT',
    companyAr: 'فودافون مصر',
    roleEn: 'App Developer & Designer',
    roleAr: 'مطور ومصمم تطبيقات',
    typeEn: 'MOBILE SOFTWARE & UX ENGINEERING',
    typeAr: 'تطوير تطبيقات الهاتف وتجربة المستخدم',
    scopeEn: 'Engineered responsive mobile application screens, designed intuitive user flows, and built frontend components for telecom services.',
    scopeAr: 'تطوير واجهات تطبيقات هاتفية متجاوبة، وتصميم مسارات مستخدم انسيابية لخدمات الاتصالات.',
    impactEn: 'Delivered polished mobile experiences tested against stringent usability standards.',
    impactAr: 'تقديم تجارب هاتفية عالية الجودة والدقة خضعت لمعايير الاستخدام الصارمة.',
    icon: <Smartphone size={16} />,
  },
  {
    id: 'ooredoo',
    number: '04',
    status: 'EXPERIENCE',
    companyEn: 'OOREDOO QATAR',
    companyAr: 'أوريدو قطر',
    roleEn: 'Software Testing',
    roleAr: 'اختبار وجودة البرمجيات',
    typeEn: 'QA & SYSTEM VALIDATION',
    typeAr: 'ضمان الجودة والتحقق البرمجي',
    scopeEn: 'Conducted software test suites, regression validations, edge-case analysis, and quality assurance for telecommunication systems.',
    scopeAr: 'تنفيذ مجموعات اختبارات برمجية شاملة، وتحليل الحالات الحدية، وضمان جودة أنظمة الاتصالات.',
    impactEn: 'Maintained system reliability, preventing regressions and validating test coverage across releases.',
    impactAr: 'الحفاظ على موثوقية الأنظمة ومنع حدوث أي أخطاء تراجعية وضمان التغطية الاختبارية الكاملة.',
    icon: <Shield size={16} />,
  },
  {
    id: 'yly',
    number: '05',
    status: 'SEASON 6+',
    companyEn: 'YLY / YOUTH LEADING YOUTH',
    companyAr: 'شباب يدير شباب / وزارة الشباب والرياضة',
    roleEn: 'Team Leader · Head of Social Media · Facebook Central Leader',
    roleAr: 'قائد فريق · مسؤول التواصل الاجتماعي · قائد مركزي لمنصة فيسبوك',
    typeEn: 'VOLUNTEER LEADERSHIP & IMPACT',
    typeAr: 'قيادة تطوعية وتدريب تقني',
    scopeEn: 'Progressed through leadership roles as Team Leader, Head of Social Media, and Facebook Central Leader. Delivered educational sessions covering Artificial Intelligence, Graphic Design, and Programming Fundamentals.',
    scopeAr: 'تدرج قيادي كقائد فريق، ومسؤول التواصل الاجتماعي، وقائد مركزي لمنصة فيسبوك. تقديم جلسات تعليمية في الذكاء الاصطناعي، والتصميم الجرافيكي، وأساسيات البرمجة.',
    impactEn: 'Reached approximately 5,000+ learners through AI and Graphic Design sessions, contributing to a broader ecosystem impact of 13,000+ youth across Egypt.',
    impactAr: 'تدريب نحو ٥,٠٠٠+ مستفيد في ورش الذكاء الاصطناعي والتصميم، والمساهمة في أثر مجتمعي واسع تخطى ١٣ ألف شاب في مصر.',
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
              fontSize: isArabic ? 'clamp(3.2rem, 7.5vw, 6.5rem)' : 'clamp(3.5rem, 8vw, 7.5rem)',
              lineHeight: isArabic ? 1.15 : 0.9,
              letterSpacing: isArabic ? '0.02em' : '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
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
