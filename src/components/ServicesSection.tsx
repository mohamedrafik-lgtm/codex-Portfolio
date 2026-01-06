'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  {
    title: 'Training & Education Systems',
    titleAr: 'أنظمة إدارة التدريب والتعليم',
    features: [
      { en: 'Student & Trainee Management', ar: 'إدارة الطلاب والمتدربين' },
      { en: 'Attendance & Scheduling', ar: 'الحضور والجداول' },
      { en: 'Certifications & Reports', ar: 'الشهادات والتقارير' },
      { en: 'Multi-branch Management', ar: 'إدارة الفروع المتعددة' },
    ],
  },
  {
    title: 'CRM & Marketing, Sales',
    titleAr: 'المبيعات والتسويق وإدارة العملاء',
    features: [
      { en: 'Lead & Sales Management', ar: 'إدارة العملاء والمبيعات' },
      { en: 'Incentives & Campaigns', ar: 'العمولات والحملات' },
      { en: 'AI-driven Recommendations', ar: 'توصيات ذكية مدعومة بالذكاء الاصطناعي' },
    ],
  },
  {
    title: 'Web & Mobile Apps',
    titleAr: 'تطوير تطبيقات الويب والموبايل',
    features: [
      { en: 'Android & iOS Apps', ar: 'تطبيقات أندرويد وآي أو إس' },
      { en: 'Web Platforms', ar: 'منصات ويب' },
      { en: 'API Integrations', ar: 'تكامل API' },
      { en: 'AI-powered Features', ar: 'ميزات مدعومة بالذكاء الاصطناعي' },
    ],
  },
  {
    title: 'E-Commerce Systems',
    titleAr: 'أنظمة التجارة الإلكترونية',
    features: [
      { en: 'Products, Sales, Inventory', ar: 'المنتجات والمبيعات والمخازن' },
      { en: 'Payment & Reporting', ar: 'الفواتير والمدفوعات' },
      { en: 'AI Analytics', ar: 'تحليلات ذكية مدعومة بالذكاء الاصطناعي' },
    ],
  },
  {
    title: 'Booking & Reservation',
    titleAr: 'أنظمة الحجز',
    features: [
      { en: 'Hotels, Availability, Payments', ar: 'إدارة الفنادق، التوافر والمدفوعات' },
      { en: 'AI-powered Occupancy Reports', ar: 'تقارير إشغال ذكية مدعومة بالذكاء الاصطناعي' },
    ],
  },
  {
    title: 'HR & Operations',
    titleAr: 'الموارد البشرية والتشغيل',
    features: [
      { en: 'Attendance, Payroll', ar: 'الحضور والانصراف والرواتب' },
      { en: 'KPIs & Roles', ar: 'مؤشرات الأداء والصلاحيات' },
      { en: 'AI-driven Performance Recommendations', ar: 'توصيات أداء ذكية مدعومة بالذكاء الاصطناعي' },
    ],
  },
  {
    title: 'Business Automation & WhatsApp',
    titleAr: 'أتمتة الأعمال وربط WhatsApp',
    features: [
      { en: 'Automated Messages', ar: 'رسائل تلقائية' },
      { en: 'AI Insights', ar: 'تقارير وتحليلات ذكية' },
      { en: 'Notifications', ar: 'إشعارات داخلية' },
    ],
  },
  {
    title: 'Cyber Security Solutions',
    titleAr: 'حلول الأمن السيبراني',
    features: [
      { en: 'Data Protection', ar: 'حماية البيانات' },
      { en: 'Access Control', ar: 'إدارة الصلاحيات' },
      { en: 'AI Threat Monitoring', ar: 'مراقبة التهديدات باستخدام الذكاء الاصطناعي' },
    ],
  },
  {
    title: 'Inventory, Procurement & Contracting',
    titleAr: 'إدارة المخازن والمشتريات والمقاوالت',
    subtitle: '(Under Development)',
    subtitleAr: '(قيد التطوير)',
    features: [],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: '0 10px 40px rgba(255, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        });

        // Emit event for background interaction
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
      id="services"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
          <h1 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-red-500 font-orbitron">
            Core Solutions & Services
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-cairo">
            الخدمات والحلول الأساسية
          </h2>
          <p className="subtext text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            دعم القرارات الاستراتيجية والتسويقية • أتمتة العمليات وتقارير ذكية • حلول مخصصة لكل عميل
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="service-card relative bg-black/60 backdrop-blur-md border border-red-900/70 p-4 sm:p-5 md:p-6 transition-all duration-300"
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

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-2 font-orbitron">
                {service.title}
                {service.subtitle && (
                  <span className="text-xs sm:text-sm text-gray-400 ml-2">{service.subtitle}</span>
                )}
              </h3>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 sm:mb-4 font-cairo">
                {service.titleAr}
                {service.subtitleAr && (
                  <span className="text-sm text-gray-400 mr-2">{service.subtitleAr}</span>
                )}
              </h4>

              {/* Features List */}
              {service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
