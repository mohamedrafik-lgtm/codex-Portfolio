'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const models = [
  {
    code: 'MDL_01',
    title: 'Cloud Solutions (SaaS Model)',
    titleAr: 'الحلول السحابية (SaaS)',
    features: [
      { en: 'Automatic Updates', ar: 'تحديثات تلقائية' },
      { en: 'Global Access', ar: 'الوصول من أي مكان' },
      { en: 'Flexible Features & Users', ar: 'مرونة في الخصائص وعدد المستخدمين' },
    ],
    icon: (
      <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    code: 'MDL_02',
    title: 'Perpetual Licensing',
    titleAr: 'التملك الكامل للرخصة',
    features: [
      { en: 'Full Ownership', ar: 'ملكية كاملة للنظام' },
      { en: 'Complete Privacy', ar: 'خصوصية قصوى للبيانات' },
      { en: 'Optional Maintenance SLA', ar: 'عقود صيانة اختيارية' },
    ],
    icon: (
      <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    code: 'MDL_03',
    title: 'Custom-Built Solutions',
    titleAr: 'الحلول المخصصة',
    features: [
      { en: 'Tailored System', ar: 'نظام مخصص بالكامل' },
      { en: 'Full Workflow Integration', ar: 'مطابق لدورة العمل الداخلية' },
      { en: 'Delivered in Milestones', ar: 'تسليم المشروع على مراحل' },
    ],
    icon: (
      <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    code: 'MDL_04',
    title: 'Dedicated Team Model',
    titleAr: 'نموذج الشراكة الاستراتيجية',
    features: [
      { en: 'Exclusive Team', ar: 'فريق حصري للمشروع' },
    ],
    icon: (
      <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ContractingModelsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const icon = card.querySelector('.model-icon');

      const handleMouseEnter = () => {
        // Icon animation
        if (icon) {
          gsap.to(icon, {
            rotation: 360,
            scale: 1.2,
            duration: 0.6,
            ease: 'power2.out',
          });
        }

        // Card animation
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          boxShadow: '0 15px 50px rgba(255, 0, 0, 0.4), 0 0 30px rgba(255, 0, 0, 0.2)',
          duration: 0.4,
          ease: 'power2.out',
        });

        window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: true } }));
      };

      const handleMouseLeave = () => {
        // Icon reset
        if (icon) {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        }

        // Card reset
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: '0 4px 15px rgba(255, 0, 0, 0.15)',
          duration: 0.3,
          ease: 'power2.out',
        });

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
      id="models"
      className="relative py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h1 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-red-500 font-orbitron">
            Flexible Contracting Models
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-cairo">
            نماذج التعاقد المرنة
          </h2>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="service-card relative bg-black/60 backdrop-blur-md border border-red-900/70 p-6 transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(255, 0, 0, 0.35)',
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
                <span className="text-[9px] text-red-500 font-mono">{model.code}</span>
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
              </div>

              {/* Icon */}
              <div className="model-icon mb-4 text-red-500 flex justify-center">
                {model.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-red-500 mb-2 font-orbitron">
                {model.title}
              </h3>
              <h4 className="text-lg font-bold text-white mb-4 font-cairo">
                {model.titleAr}
              </h4>

              {/* Features List */}
              <ul className="space-y-2">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <div className="text-gray-300 tech-text">{feature.en}</div>
                        <div className="text-gray-400 text-xs font-cairo tech-subtext">
                          {feature.ar}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
