'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const stages = [
  {
    id: 1,
    titleAr: 'التحليل',
    titleEn: 'Analysis',
    descAr: 'نحلل احتياجاتك ونفهم رؤيتك بدقة لنضع أساساً قوياً للمشروع',
    descEn: 'We analyze your needs and understand your vision precisely',
  },
  {
    id: 2,
    titleAr: 'التصميم',
    titleEn: 'Design',
    descAr: 'نصمم واجهات مبتكرة تجمع بين الجمال والوظيفة',
    descEn: 'We design innovative interfaces combining beauty and function',
  },
  {
    id: 3,
    titleAr: 'التطوير',
    titleEn: 'Development',
    descAr: 'نبني حلول برمجية قوية وقابلة للتوسع بأحدث التقنيات',
    descEn: 'We build robust and scalable software solutions',
  },
  {
    id: 4,
    titleAr: 'الاختبار',
    titleEn: 'Testing',
    descAr: 'نختبر كل تفصيل لضمان الجودة والأمان والأداء الأمثل',
    descEn: 'We test every detail to ensure quality and security',
  },
  {
    id: 5,
    titleAr: 'الإطلاق',
    titleEn: 'Launch',
    descAr: 'نطلق مشروعك ونواصل الدعم والتطوير المستمر',
    descEn: 'We launch your project and continue support and development',
  },
];

export default function ProcessSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const cards = sectionRef.current.querySelectorAll('.stage-card');
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
      const trigger = ScrollTrigger.create({
        trigger: card as HTMLElement,
        start: 'top center+=100',
        end: 'bottom center-=100',
        onEnter: () => setActiveStage(index),
        onEnterBack: () => setActiveStage(index),
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [isMounted]);

  const scrollToStage = (index: number) => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.stage-card');
    const targetCard = cards[index] as HTMLElement;
    
    if (targetCard) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: targetCard, offsetY: -100 },
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="relative bg-black text-white py-20 overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background Grid */}
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
        <div className="text-center mb-20">
          <p className="text-xs text-red-500 mb-3 font-mono tracking-[0.3em] uppercase">
            WORK PROCESS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-cairo">
            مراحل <span className="text-red-500">العمل</span>
          </h2>
          <p className="text-lg text-gray-400 font-cairo max-w-2xl mx-auto">
            من الفكرة إلى التنفيذ.. نسير معك خطوة بخطوة
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="space-y-3">
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => scrollToStage(index)}
                    className={`
                      group w-full text-right flex items-center gap-4 p-4 rounded-lg
                      transition-all duration-300 border-2
                      ${index === activeStage
                        ? 'bg-red-500/10 border-red-500'
                        : index < activeStage
                        ? 'bg-red-500/5 border-red-500/30'
                        : 'bg-transparent border-gray-800 hover:border-gray-700'
                      }
                    `}
                  >
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                      font-bold text-lg transition-all duration-300
                      ${index === activeStage
                        ? 'bg-red-500 text-white scale-110'
                        : index < activeStage
                        ? 'bg-red-500/50 text-white'
                        : 'bg-gray-800 text-gray-500 group-hover:bg-gray-700'
                      }
                    `}>
                      {stage.id}
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className={`
                        font-cairo font-bold text-lg transition-colors
                        ${index === activeStage
                          ? 'text-red-500'
                          : index < activeStage
                          ? 'text-red-400'
                          : 'text-gray-300 group-hover:text-white'
                        }
                      `}>
                        {stage.titleAr}
                      </h3>
                      <p className="text-xs text-gray-500 font-orbitron uppercase">
                        {stage.titleEn}
                      </p>
                    </div>
                    {index === activeStage && (
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Cards */}
          <div className="lg:col-span-8 space-y-24">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="stage-card scroll-mt-32"
              >
                <div className="relative group">
                  {/* Card Background with Glow */}
                  <div className={`
                    absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500
                    ${index === activeStage ? 'opacity-20' : ''}
                  `} style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }} />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/[0.02] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-500 shadow-2xl">
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500/50" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-500/50" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-red-500/50" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500/50" />

                    {/* Stage Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                      <span className="text-red-500 font-mono text-sm font-bold">
                        STAGE {stage.id.toString().padStart(2, '0')}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="text-gray-400 font-mono text-xs">
                        / 05
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Title */}
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-2 font-cairo leading-tight">
                          {stage.titleAr}
                        </h3>
                        <p className="text-xl md:text-2xl font-semibold text-gray-400 font-orbitron">
                          {stage.titleEn}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent" />

                      {/* Description */}
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-cairo">
                        {stage.descAr}
                      </p>
                      <p className="text-base text-gray-500 leading-relaxed">
                        {stage.descEn}
                      </p>
                    </div>

                    {/* Large Background Number */}
                    <div className="absolute -bottom-4 -right-4 text-[150px] md:text-[200px] font-bold text-red-500/[0.02] leading-none font-orbitron select-none pointer-events-none">
                      {stage.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <span className="text-xs text-gray-600 font-mono">PROGRESS</span>
          <div className="flex gap-2">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => scrollToStage(index)}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${index === activeStage
                    ? 'w-16 bg-red-500'
                    : index < activeStage
                    ? 'w-8 bg-red-500/60'
                    : 'w-8 bg-gray-800 hover:bg-gray-700'
                  }
                `}
                aria-label={`Go to stage ${stage.id}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 font-mono">
            {activeStage + 1}/5
          </span>
        </div>
      </div>
    </section>
  );
}
