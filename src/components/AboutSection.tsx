'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hover animations for each card
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          boxShadow: '0 0 30px rgba(255, 0, 0, 0.6), inset 0 0 20px rgba(255, 0, 0, 0.1)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
        
        // Emit event for background to pulse faster
        window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: true } }));
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
        
        // Emit event to restore background
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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Heading */}
        <div className="text-center mb-12 relative">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 hover-glitch relative z-10 font-cairo">
              <span className="text-red-500">عن كودكس</span>
              <span className="text-white mx-3">|</span>
              <span className="text-red-500">About Codex</span>
            </h1>
            {/* Status Indicator */}
            <div className="absolute -top-3 -right-3 flex items-center gap-1.5">
              <span className="text-[10px] text-red-500 font-mono">STATUS</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500 font-mono tracking-widest">
            {'<'} COMMAND_CENTER {'/>'}
          </div>
        </div>

        {/* Three Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Who We Are */}
          <div
            ref={addToRefs}
            className="about-card card group relative overflow-hidden backdrop-blur-md md:mt-8 max-w-[350px] mx-auto w-full"
          >
            {/* HUD Corner Brackets - Ultra-thin */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-red-500 border-thin"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-red-500 border-thin"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-red-500 border-thin"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-red-500 border-thin"></div>

            {/* Decorative Numbers */}
            <div className="absolute top-1.5 right-1.5 text-[9px] text-red-500/30 font-mono">01</div>

            <div className="p-6 relative z-10">
              {/* Icon - Smaller */}
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300 icon-glow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>

              {/* Arabic Title */}
              <h3 className="text-lg font-bold text-red-500 mb-1.5 text-center font-cairo">من نحن</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-3"></div>
              {/* English Title */}
              <h4 className="text-sm font-semibold text-white/80 mb-3 text-center">Who We Are</h4>

              {/* Content - Technical Documentation Style */}
              <p className="text-gray-300 text-xs leading-relaxed text-center tech-text">
                نحن فريق متخصص في تطوير الحلول البرمجية المتكاملة والذكاء الاصطناعي، نجمع بين الابتكار والتكنولوجيا المتقدمة لتقديم حلول استثنائية.
              </p>
              <p className="text-gray-400 text-[10px] leading-relaxed text-center mt-2 italic tech-subtext">
                We specialize in integrated software & AI solutions, combining innovation with cutting-edge technology.
              </p>
            </div>
          </div>

          {/* Card 2: Target Sectors */}
          <div
            ref={addToRefs}
            className="about-card card group relative overflow-hidden backdrop-blur-md max-w-[350px] mx-auto w-full"
          >
            {/* HUD Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-red-500" style={{ borderWidth: '0.5px' }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-red-500" style={{ borderWidth: '0.5px' }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-red-500" style={{ borderWidth: '0.5px' }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-red-500" style={{ borderWidth: '0.5px' }}></div>

            <div className="absolute top-1.5 right-1.5 text-[9px] text-red-500/30 font-mono">02</div>

            <div className="p-6 relative z-10">
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300 icon-glow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-red-500 mb-1.5 text-center font-cairo">قطاعاتنا</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-3"></div>
              <h4 className="text-sm font-semibold text-white/80 mb-3 text-center">Our Reach</h4>

              <p className="text-gray-300 text-xs leading-relaxed text-center tech-text">
                نخدم قطاعات متنوعة: التعليم، التجارة الإلكترونية، الصحة، الصناعة، والخدمات المالية بحلول مخصصة ومبتكرة.
              </p>
              <p className="text-gray-400 text-[10px] leading-relaxed text-center mt-2 italic tech-subtext">
                Serving education, e-commerce, healthcare, industry, and financial sectors with tailored innovative solutions.
              </p>
            </div>
          </div>

          {/* Card 3: The Impact */}
          <div
            ref={addToRefs}
            className="about-card card group relative overflow-hidden backdrop-blur-md md:mt-8 max-w-[350px] mx-auto w-full"
          >
            {/* HUD Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-red-500" style={{ borderWidth: '0.5px' }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-red-500" style={{ borderWidth: '0.5px' }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-red-500" style={{ borderWidth: '0.5px' }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-red-500" style={{ borderWidth: '0.5px' }}></div>

            <div className="absolute top-1.5 right-1.5 text-[9px] text-red-500/30 font-mono">03</div>

            <div className="p-6 relative z-10">
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300 icon-glow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-red-500 mb-1.5 text-center font-cairo">التأثير</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-3"></div>
              <h4 className="text-sm font-semibold text-white/80 mb-3 text-center">The Impact</h4>

              <p className="text-gray-300 text-xs leading-relaxed text-center tech-text">
                نساعد الشركات على الوصول للبيانات بسرعة، اتخاذ قرارات استراتيجية، وتحقيق نمو مستدام من خلال التحول الرقمي الشامل.
              </p>
              <p className="text-gray-400 text-[10px] leading-relaxed text-center mt-2 italic tech-subtext">
                Enabling rapid data access, strategic decision-making, and sustainable growth through comprehensive digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tech Line */}
        <div className="mt-12 flex items-center justify-center gap-4 text-xs text-red-500/50 font-mono">
          <span>{'<SECTOR_01/>'}</span>
          <div className="w-20 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <span>{'<ACTIVE>'}</span>
          <div className="w-20 h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <span>{'</SECTOR_01>'}</span>
        </div>
      </div>

      {/* Glitch Effect CSS */}
      <style jsx>{`
        .hover-glitch {
          position: relative;
        }
        .hover-glitch:hover::before,
        .hover-glitch:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hover-glitch:hover::before {
          animation: glitch-1 0.3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.8;
        }
        .hover-glitch:hover::after {
          animation: glitch-2 0.3s infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.8;
        }
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }
      `}</style>
    </section>
  );
}
