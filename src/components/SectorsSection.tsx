'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

const sectors = [
  {
    code: 'SEC_01',
    titleEn: 'Construction & Contracting',
    titleAr: 'قطاع المقاولات',
    focus: 'Project Management & Field Data',
    focusAr: 'إدارة المشاريع وبيانات الميدان',
    features: [
      { en: 'Site Progress Tracking', ar: 'تتبع تقدم المواقع' },
      { en: 'Material Management', ar: 'إدارة المواد' },
      { en: 'Workforce Allocation', ar: 'توزيع القوى العاملة' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    code: 'SEC_02',
    titleEn: 'Accounting & Finance',
    titleAr: 'المحاسبة والإدارة المالية',
    focus: 'Precision & AI Analytics',
    focusAr: 'الدقة والتحليلات الذكية',
    features: [
      { en: 'Real-time Financial Reports', ar: 'تقارير مالية فورية' },
      { en: 'AI-powered Forecasting', ar: 'توقعات ذكية بالذكاء الاصطناعي' },
      { en: 'Audit Trail Systems', ar: 'أنظمة تتبع المراجعة' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    code: 'SEC_03',
    titleEn: 'Manufacturing & Warehousing',
    titleAr: 'التصنيع والتخزين',
    focus: 'Automation & Supply Chain',
    focusAr: 'الأتمتة وسلسلة التوريد',
    features: [
      { en: 'Inventory Optimization', ar: 'تحسين المخزون' },
      { en: 'Production Scheduling', ar: 'جدولة الإنتاج' },
      { en: 'Quality Control Systems', ar: 'أنظمة مراقبة الجودة' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    code: 'SEC_04',
    titleEn: 'HR & Resource Management',
    titleAr: 'إدارة الموارد البشرية',
    focus: 'People & Productivity',
    focusAr: 'الأفراد والإنتاجية',
    features: [
      { en: 'Performance Analytics', ar: 'تحليلات الأداء' },
      { en: 'Automated Payroll', ar: 'رواتب تلقائية' },
      { en: 'Skill Development Tracking', ar: 'تتبع تطوير المهارات' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    code: 'SEC_05',
    titleEn: 'Booking & Hospitality',
    titleAr: 'أنظمة الحجوزات',
    focus: 'Seamless User Experience',
    focusAr: 'تجربة مستخدم سلسة',
    features: [
      { en: 'Real-time Availability', ar: 'التوفر الفوري' },
      { en: 'Multi-channel Booking', ar: 'حجز متعدد القنوات' },
      { en: 'Smart Pricing Engine', ar: 'محرك تسعير ذكي' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    code: 'SEC_06',
    titleEn: 'Healthcare Sector',
    titleAr: 'قطاع الصحة',
    focus: 'Data Security & Smart Systems',
    focusAr: 'أمان البيانات والأنظمة الذكية',
    features: [
      { en: 'Patient Record Management', ar: 'إدارة سجلات المرضى' },
      { en: 'HIPAA Compliance', ar: 'الامتثال للمعايير الصحية' },
      { en: 'Appointment Automation', ar: 'أتمتة المواعيد' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    code: 'SEC_07',
    titleEn: 'Education & Training',
    titleAr: 'التعليم والتدريب',
    focus: 'Knowledge Management',
    focusAr: 'إدارة المعرفة',
    features: [
      { en: 'Learning Management System', ar: 'نظام إدارة التعلم' },
      { en: 'Progress Tracking', ar: 'تتبع التقدم' },
      { en: 'Certification Management', ar: 'إدارة الشهادات' },
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function SectorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const icon = card.querySelector('.sector-icon');
      const features = card.querySelector('.sector-features');
      const titleEn = card.querySelector('.title-en');

      const handleMouseEnter = () => {
        setHoveredIndex(index);

        // Icon animation - pulse and glow
        if (icon) {
          gsap.to(icon, {
            scale: 1.2,
            filter: 'drop-shadow(0 0 12px rgba(255, 0, 0, 0.8))',
            duration: 0.5,
            ease: 'back.out(1.7)',
          });
        }

        // Card glow and lift
        gsap.to(card, {
          boxShadow: '0 10px 60px rgba(255, 0, 0, 0.6), inset 0 0 40px rgba(255, 0, 0, 0.15)',
          scale: 1.05,
          y: -8,
          duration: 0.4,
          ease: 'power3.out',
        });

        // Show features with smooth slide
        if (features) {
          gsap.to(features, {
            opacity: 1,
            height: 'auto',
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          });
        }

        // Title glow effect
        if (titleEn) {
          gsap.to(titleEn, {
            textShadow: '0 0 15px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.4)',
            duration: 0.3,
          });
        }

        window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: true } }));
      };

      const handleMouseLeave = () => {
        setHoveredIndex(null);

        // Icon reset
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            filter: 'drop-shadow(0 0 0px rgba(255, 0, 0, 0))',
            duration: 0.4,
            ease: 'power2.out',
          });
        }

        // Card reset
        gsap.to(card, {
          boxShadow: '0 4px 20px rgba(255, 0, 0, 0.25)',
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        });

        // Hide features
        if (features) {
          gsap.to(features, {
            opacity: 0,
            height: 0,
            y: -10,
            duration: 0.3,
            ease: 'power3.in',
          });
        }

        // Title reset
        if (titleEn) {
          gsap.to(titleEn, {
            textShadow: '0 0 0px rgba(255, 0, 0, 0)',
            duration: 0.3,
          });
        }

        window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: false } }));
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h1 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-red-500 font-orbitron">
            Targeted Sectors
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-cairo">
            القطاعات المستهدفة
          </h2>
          <p className="subtext text-xs sm:text-sm text-gray-400 max-w-3xl mx-auto font-jetbrains">
            {'<'} MULTI-INDUSTRY SOLUTIONS {'>'} • {'<'} 7 STRATEGIC SECTORS {'>'} • {'<'} ENTERPRISE READY {'>'}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="sector-card relative bg-black/60 backdrop-blur-md border border-red-900/70 p-6 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(255, 0, 0, 0.25)',
                borderWidth: '1px',
              }}
            >
              {/* HUD Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-500/80" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-500/80" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-500/80" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-500/80" />

              {/* Status Indicator */}
              <div className="absolute top-2 right-2 flex items-center gap-1.5">
                <span className="text-[9px] text-red-500 font-mono">{sector.code}</span>
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
              </div>

              {/* Icon */}
              <div className="sector-icon mb-4 text-red-500 flex justify-center">
                {sector.icon}
              </div>

              {/* Titles */}
              <h3 className="title-en text-lg font-semibold text-red-500 mb-1 text-center font-orbitron">
                {sector.titleEn}
              </h3>
              <h4 className="text-base font-bold text-white mb-3 text-center font-cairo">
                {sector.titleAr}
              </h4>

              {/* Focus */}
              <div className="mb-4">
                <p className="text-xs text-gray-400 text-center italic">{sector.focus}</p>
                <p className="text-xs text-gray-500 text-center font-cairo">{sector.focusAr}</p>
              </div>

              {/* Features (Hidden by default, shown on hover) */}
              <div
                className="sector-features opacity-0 overflow-hidden"
                style={{ height: 0 }}
              >
                <div className="border-t border-red-900/50 pt-3 mt-2">
                  <ul className="space-y-1.5">
                    {sector.features.map((feature, idx) => (
                      <li key={idx} className="text-xs flex items-start gap-2">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">▸</span>
                        <div>
                          <div className="text-gray-300">{feature.en}</div>
                          <div className="text-gray-500 text-[10px] font-cairo">{feature.ar}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom Tech Line */}
        <div className="mt-12 flex items-center justify-center gap-4 text-xs text-red-500/50 font-mono">
          <span>{'<SECTORS_ONLINE/>'}</span>
          <div className="w-20 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <span>{'<7_ACTIVE>'}</span>
          <div className="w-20 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <span>{'</SECTORS_ONLINE>'}</span>
        </div>
      </div>
    </section>
  );
}
