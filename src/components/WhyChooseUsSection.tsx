'use client';

import { useState } from 'react';

const pillars = [
  {
    id: 1,
    titleAr: 'التميز الهندسي',
    titleEn: 'Engineering Excellence',
    descAr: 'لا نكتب الكود فقط، بل نبني معماريات قابلة للتوسع وعالية الأداء باستخدام أحدث التقنيات',
    descEn: "We don't just write code; we build scalable, high-performance architectures",
    techLabel: '<NEXT_GEN_ARCH/>',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 2,
    titleAr: 'الأمن السيبراني أولاً',
    titleEn: 'Cyber-Security First',
    descAr: 'في عالم رقمي، الأمان غير قابل للتفاوض. كل نظام نبنيه محصّن ضد التهديدات بالتصميم',
    descEn: 'Security is non-negotiable. Every system we build is hardened against threats by design',
    techLabel: '[ENCRYPTED_LOGIC]',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    id: 3,
    titleAr: 'ابتكار يركز على المستخدم',
    titleEn: 'User-Centric Innovation',
    descAr: 'نربط بين المنطق الخلفي المعقد وتجارب المستخدم السلسة والبديهية',
    descEn: 'We bridge complex backend logic and seamless, intuitive user experiences',
    techLabel: '<UX_OPTIMIZED/>',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    id: 4,
    titleAr: 'شراكة استراتيجية',
    titleEn: 'Strategic Partnership',
    descAr: 'نعمل كشريك تقني لك، نحلل تحديات عملك لتقديم حلول مخصصة تحقق عائد استثمار',
    descEn: 'We act as your technical co-founder, providing custom solutions that drive ROI',
    techLabel: '[DECODING_SUCCESS]',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="why"
      className="relative bg-black text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Animated Network Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #ef4444 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #ef4444 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, #dc2626 0%, transparent 50%)
          `,
        }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 40px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          <p className="text-xs text-red-500 mb-3 font-mono tracking-[0.3em] uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-cairo">
            لماذا <span className="text-red-500">نحن</span>
          </h2>
          <p className="text-lg text-gray-400 font-cairo max-w-2xl mx-auto">
            نجمع بين التميز التقني والابتكار لنقدم حلولاً استثنائية
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`
                absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500
                ${hoveredId === pillar.id ? 'opacity-20' : 'opacity-0'}
                bg-gradient-to-br from-red-500 to-red-600
              `} />
              
              {/* Card */}
              <div className={`
                relative bg-white/[0.02] backdrop-blur-xl border-2 rounded-xl lg:rounded-2xl p-6 sm:p-8
                transition-all duration-300 shadow-2xl h-full
                ${hoveredId === pillar.id 
                  ? 'border-red-500 shadow-red-500/20 scale-[1.02]' 
                  : 'border-white/10'
                }
              `}>
                {/* Glass shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                {/* Tech Label */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-red-500/60">
                    {pillar.techLabel}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                  </div>
                </div>

                {/* Icon */}
                <div className={`
                  text-red-500 mb-6 transition-transform duration-300
                  w-10 h-10 sm:w-12 sm:h-12
                  ${hoveredId === pillar.id ? 'scale-110 rotate-3' : 'scale-100'}
                `}>
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 font-cairo">
                  {pillar.titleAr}
                </h3>
                <p className="text-sm text-red-400 font-orbitron uppercase mb-4">
                  {pillar.titleEn}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-red-500 via-red-500/20 to-transparent mb-6" />

                {/* Description */}
                <p className="text-gray-300 leading-relaxed font-cairo mb-3">
                  {pillar.descAr}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {pillar.descEn}
                </p>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-red-500/30" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-red-500/30" />

                {/* Background Number */}
                <div className="absolute -bottom-2 -right-2 text-[120px] font-bold text-red-500/[0.02] leading-none font-orbitron select-none pointer-events-none">
                  {pillar.id.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Bar */}
        <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
          <div className="px-4 py-2 bg-white/[0.02] border border-red-500/20 rounded-full">
            <span className="text-xs font-mono text-gray-500">NEXT.JS 16</span>
          </div>
          <div className="px-4 py-2 bg-white/[0.02] border border-red-500/20 rounded-full">
            <span className="text-xs font-mono text-gray-500">AWS CLOUD</span>
          </div>
          <div className="px-4 py-2 bg-white/[0.02] border border-red-500/20 rounded-full">
            <span className="text-xs font-mono text-gray-500">AI INTEGRATION</span>
          </div>
          <div className="px-4 py-2 bg-white/[0.02] border border-red-500/20 rounded-full">
            <span className="text-xs font-mono text-gray-500">ZERO DOWNTIME</span>
          </div>
        </div>
      </div>
    </section>
  );
}
