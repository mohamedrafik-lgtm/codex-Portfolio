'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    id: 1,
    value: 130,
    label: 'عملاء سعداء',
    labelEn: 'Happy Clients',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: '#ef4444',
    suffix: '+'
  },
  {
    id: 2,
    value: 35,
    label: 'موظف محترف',
    labelEn: 'Professional Staff',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: '#f59e0b',
    suffix: '+'
  },
  {
    id: 3,
    value: 311,
    label: 'مشروع منجز',
    labelEn: 'Completed Projects',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: '#10b981',
    suffix: '+'
  },
];

export default function StatsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMounted, hasAnimated]);

  const animateCounters = () => {
    counterRefs.current.forEach((counter, index) => {
      if (!counter) return;
      
      const targetValue = stats[index].value;
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      const startValue = 0;

      const updateCounter = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutExpo)
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);

        counter.textContent = currentValue.toString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = targetValue.toString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden"
      suppressHydrationWarning
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 40px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs text-red-500 mb-3 font-mono tracking-[0.3em] uppercase">
            OUR ACHIEVEMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-cairo">
            <span className="text-red-500">إنجازاتنا</span> بالأرقام
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-cairo max-w-2xl mx-auto">
            أرقام حقيقية تعكس خبرتنا وثقة عملائنا
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute -inset-1 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: stat.color }}
              />
              
              {/* Card */}
              <div className="relative bg-black/80 backdrop-blur-xl border-2 border-gray-800 rounded-xl p-6 sm:p-8 md:p-10 transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-2xl group-hover:shadow-red-500/20">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />

                {/* Icon */}
                <div 
                  className="flex justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </div>

                {/* Number with Counter Animation */}
                <div className="text-center mb-3 sm:mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      ref={(el) => { counterRefs.current[index] = el; }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-orbitron tabular-nums"
                      style={{
                        textShadow: `0 0 20px ${stat.color}40`,
                      }}
                      suppressHydrationWarning
                    >
                      0
                    </span>
                    <span 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 font-orbitron"
                      style={{
                        textShadow: `0 0 20px ${stat.color}40`,
                      }}
                    >
                      {stat.suffix}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-3 sm:mb-4" />

                {/* Labels */}
                <div className="text-center space-y-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-cairo">
                    {stat.label}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 font-orbitron uppercase tracking-wider">
                    {stat.labelEn}
                  </p>
                </div>

                {/* Tech Line */}
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs text-red-500/50 font-mono">
                  <span>{'<'}</span>
                  <div className="w-12 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />
                  <span>{`STAT_0${stat.id}`}</span>
                  <div className="w-12 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />
                  <span>{'>'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Indicator */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4 text-xs text-red-500/50 font-mono">
          <span>{'<DATA_VERIFIED/>'}</span>
          <div className="w-20 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />
          <span className="animate-pulse">{'<LIVE>'}</span>
          <div className="w-20 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />
          <span>{'</DATA_VERIFIED>'}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
