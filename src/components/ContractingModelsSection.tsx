'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const models = [
  {
    number: '1️⃣',
    title: 'Cloud Solutions (SaaS Model)',
    titleAr: 'الحلول السحابية (SaaS)',
    features: [
      { en: 'Automatic Updates', ar: 'تحديثات تلقائية' },
      { en: 'Global Access', ar: 'الوصول من أي مكان' },
      { en: 'Flexible Features & Users', ar: 'مرونة في الخصائص وعدد المستخدمين' },
    ],
  },
  {
    number: '2️⃣',
    title: 'Perpetual Licensing',
    titleAr: 'التملك الكامل للرخصة',
    features: [
      { en: 'Full Ownership', ar: 'ملكية كاملة للنظام' },
      { en: 'Complete Privacy', ar: 'خصوصية قصوى للبيانات' },
      { en: 'Optional Maintenance SLA', ar: 'عقود صيانة اختيارية' },
    ],
  },
  {
    number: '3️⃣',
    title: 'Custom-Built Solutions',
    titleAr: 'الحلول المخصصة',
    features: [
      { en: 'Tailored System', ar: 'نظام مخصص بالكامل' },
      { en: 'Full Workflow Integration', ar: 'مطابق لدورة العمل الداخلية' },
      { en: 'Delivered in Milestones', ar: 'تسليم المشروع على مراحل' },
    ],
  },
  {
    number: '4️⃣',
    title: 'Dedicated Team Model',
    titleAr: 'نموذج الشراكة الاستراتيجية',
    features: [
      { en: 'Exclusive Team', ar: 'فريق حصري للمشروع' },
    ],
  },
];

export default function ContractingModelsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: '0 10px 40px rgba(255, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        });

        window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: true } }));
      };

      const handleMouseLeave = () => {
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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading text-4xl md:text-5xl font-bold mb-4 text-red-500 font-orbitron">
            Flexible Contracting Models
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cairo">
            نماذج التعاقد المرنة
          </h2>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Number Badge */}
              <div className="text-3xl mb-4">{model.number}</div>

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
