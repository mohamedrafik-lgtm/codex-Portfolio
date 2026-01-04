'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const stages = [
  {
    id: 1,
    titleEn: 'Discovery',
    titleAr: 'الاكتشاف',
    descEn: 'Understand the vision, blueprint the plan.',
    descAr: 'نفهم الرؤية، ونرسم المخطط.',
    code: 'STAGE_01',
    status: 'SYNCING',
  },
  {
    id: 2,
    titleEn: 'Design',
    titleAr: 'التصميم',
    descEn: 'Formulate logic, sculpt the form.',
    descAr: 'نصيغ المنطق، ونبدع الشكل.',
    code: 'STAGE_02',
    status: 'PROCESSING',
  },
  {
    id: 3,
    titleEn: 'Engineering',
    titleAr: 'الهندسة',
    descEn: 'Build the code, establish the system.',
    descAr: 'نبني الكود، ونؤسس النظام.',
    code: 'STAGE_03',
    status: 'COMPILING',
  },
  {
    id: 4,
    titleEn: 'Quality Assurance',
    titleAr: 'ضمان الجودة',
    descEn: 'Test security, ensure quality.',
    descAr: 'نختبر الأمان، ونتأكد من الجودة.',
    code: 'STAGE_04',
    status: 'VALIDATING',
  },
  {
    id: 5,
    titleEn: 'Launch',
    titleAr: 'الانطلاق',
    descEn: 'Launch the project, initiate growth.',
    descAr: 'نطلق المشروع، ونبدأ النمو.',
    code: 'STAGE_05',
    status: 'DEPLOYED',
  },
];

export default function ProcessSection() {
  const [mounted, setMounted] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  // ===== CLIENT-ONLY MOUNTING =====
  useEffect(() => {
    setMounted(true);
  }, []);

  // ===== SIDEBAR CLICK HANDLER =====
  const handleSidebarClick = (index: number) => {
    if (typeof window === 'undefined' || !rootRef.current) return;
    
    const sectionStart = rootRef.current.offsetTop;
    // Each stage occupies 100vh of the 500vh total
    const targetScroll = sectionStart + (index * window.innerHeight);
    
    gsap.to(window, {
      scrollTo: { y: targetScroll },
      duration: 1.5,
      ease: 'power2.inOut',
    });
  };

  // ===== GSAP TIMELINE INITIALIZATION =====
  useEffect(() => {
    if (!mounted || typeof window === 'undefined' || !rootRef.current) return;

    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const root = rootRef.current;
    const cards = root.querySelectorAll('.stage-card');
    const dots = root.querySelectorAll('.sidebar-dot');

    // ===== INITIAL STATE: All cards stacked with starting animation position =====
    cards.forEach((card, i) => {
      gsap.set(card, {
        opacity: i === 0 ? 1 : 0,
        visibility: i === 0 ? 'visible' : 'hidden',
        y: i === 0 ? 0 : 40, // Start below for slide-up effect
        scale: i === 0 ? 1 : 0.95, // Start slightly smaller
      });
    });

    // ===== THE TIMELINE: Linked to scroll =====
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8, // Silky smooth scroll - prevents stage skipping
        pinSpacing: true, // Prevents next section overlap
        onUpdate: (self) => {
          const progress = self.progress;
          let current = Math.floor(progress * 5);
          if (current >= 5) current = 4;
          
          setActiveStage(current);

          // Update sidebar dots
          dots.forEach((dot, i) => {
            dot.setAttribute('data-active', (i === current).toString());
            dot.setAttribute('data-completed', (i < current).toString());
          });
        },
      },
    });

    // ===== THE SEQUENCE: Card 1 → Card 2 → Card 3 → Card 4 → Card 5 =====
    // Stage 1 (0-20%): Entry only
    tl.to(cards[0], { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      visibility: 'visible', 
      duration: 1, 
      ease: 'power2.inOut',
      immediateRender: false 
    }, 0)
    // Stage 1: Exit animation
    .to(cards[0], { 
      opacity: 0, 
      y: -40, 
      scale: 0.98, 
      duration: 0.8, 
      ease: 'power2.inOut' 
    }, 0.9)
    
    // Stage 2 (20-40%): Entry
    .to(cards[1], { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      visibility: 'visible', 
      duration: 1, 
      ease: 'power2.inOut',
      immediateRender: false 
    }, 1.0)
    // Stage 2: Exit
    .to(cards[1], { 
      opacity: 0, 
      y: -40, 
      scale: 0.98, 
      duration: 0.8, 
      ease: 'power2.inOut' 
    }, 1.9)
    
    // Stage 3 (40-60%): Entry
    .to(cards[2], { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      visibility: 'visible', 
      duration: 1, 
      ease: 'power2.inOut',
      immediateRender: false 
    }, 2.0)
    // Stage 3: Exit
    .to(cards[2], { 
      opacity: 0, 
      y: -40, 
      scale: 0.98, 
      duration: 0.8, 
      ease: 'power2.inOut' 
    }, 2.9)
    
    // Stage 4 (60-80%): Entry
    .to(cards[3], { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      visibility: 'visible', 
      duration: 1, 
      ease: 'power2.inOut',
      immediateRender: false 
    }, 3.0)
    // Stage 4: Exit
    .to(cards[3], { 
      opacity: 0, 
      y: -40, 
      scale: 0.98, 
      duration: 0.8, 
      ease: 'power2.inOut' 
    }, 3.9)
    
    // Stage 5 (80-100%): Entry only (stays visible)
    .to(cards[4], { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      visibility: 'visible', 
      duration: 1, 
      ease: 'power2.inOut',
      immediateRender: false 
    }, 4.0);

    // Hide completed cards after exit
    cards.forEach((card, i) => {
      if (i < 4) {
        tl.set(card, { visibility: 'hidden' }, `>${i + 1.7}`);
      }
    });

    // ===== REFRESH =====
    ScrollTrigger.refresh();

    // ===== CLEANUP =====
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [mounted]);

  // ===== SSR PLACEHOLDER =====
  if (!mounted) {
    return <section id="workflow" style={{ height: '500vh', backgroundColor: '#000' }} />;
  }

  // ===== CLIENT RENDER =====
  return (
    <section
      ref={rootRef}
      id="workflow"
      className="process-root relative w-full"
      style={{ height: '500vh', backgroundColor: '#000' }}
    >
      {/* ===== THE PINNED WRAPPER (FROZEN FRAME) ===== */}
      <div
        className="pinned-wrapper sticky top-0 w-full h-screen overflow-hidden"
      >
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5" style={{ zIndex: 1 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 50px),
                               repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 50px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* ===== TITLE (FROZEN) ===== */}
        <div className="absolute top-8 left-0 right-0 text-center px-4" style={{ zIndex: 50 }}>
          <p className="text-[9px] text-red-500 mb-2 font-mono tracking-widest uppercase">
            {'<'} PROCESS PIPELINE {'>'}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white font-orbitron">
            From Vision.. To Summit.
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 font-cairo">
            من الفكرة.. إلى القمة
          </h2>
        </div>

        {/* ===== SIDEBAR (FROZEN) ===== */}
        <div 
          className="absolute left-12 md:left-16 top-1/2 -translate-y-1/2 h-[55vh]"
          style={{ zIndex: 999 }}
        >
          {/* Base Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gray-800/40" />
          
          {/* Liquid Progress Line */}
          <div 
            className="liquid-progress absolute left-1/2 -translate-x-1/2 top-0 w-[3px] h-0 bg-gradient-to-b from-red-600 via-red-500 to-red-600 transition-all duration-300 ease-out"
            style={{ 
              height: `${activeStage * 25}%`,
              boxShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.4)',
            }}
          />

          {/* Dots */}
          <div className="relative h-full flex flex-col justify-between">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => handleSidebarClick(index)}
                className="sidebar-dot group relative flex items-center cursor-pointer"
                data-active="false"
                data-completed="false"
                aria-label={`Go to ${stage.titleEn}`}
              >
                {/* Pulse */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-red-500 opacity-0 group-data-[active=true]:opacity-40 group-data-[active=true]:animate-ping" />

                {/* Dot */}
                <div
                  className="relative w-4 h-4 rounded-full transition-all duration-300
                             bg-gray-700 border-2 border-gray-600
                             group-hover:scale-125 group-hover:bg-red-500 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(255,0,0,1)]
                             group-data-[active=true]:scale-[1.6] group-data-[active=true]:bg-red-500 group-data-[active=true]:border-red-400 group-data-[active=true]:shadow-[0_0_30px_rgba(255,0,0,1)]
                             group-data-[completed=true]:bg-red-800 group-data-[completed=true]:border-red-700"
                  style={{
                    filter: index === activeStage ? 'drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 12px #ff0000)' : 'none'
                  }}
                />

                {/* Number */}
                <span 
                  className="absolute -left-11 text-xs font-mono transition-colors
                             text-gray-600 group-hover:text-red-500
                             group-data-[active=true]:text-red-400 group-data-[active=true]:font-bold"
                >
                  0{stage.id}
                </span>

                {/* Active Line */}
                <div 
                  className="absolute left-full ml-2 h-[2px] bg-red-500 transition-all duration-300
                             w-0 opacity-0 group-data-[active=true]:w-8 group-data-[active=true]:opacity-100"
                />

                {/* Tooltip */}
                <span 
                  className="absolute left-full ml-12 text-xs text-red-500 font-mono whitespace-nowrap 
                             opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  {stage.titleEn}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ===== STAGE CARDS (STACKED IN CENTER) ===== */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`stage-card stage-${index + 1} absolute`}
              style={{
                width: '600px',
                maxWidth: '85vw',
                willChange: 'transform, opacity',
              }}
            >
              <div
                className="relative bg-black/80 border border-red-900/80 p-6 md:p-8"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.95), inset 0 0 50px rgba(255, 0, 0, 0.06)',
                }}
              >
                {/* Corners */}
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-red-500" />
                <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-red-500" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-red-500" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-red-500" />

                {/* Status Bar */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-red-900/40">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-500 font-mono font-bold">{stage.code}</span>
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[8px] text-gray-500 font-mono">[{stage.status}]</span>
                  </div>
                  <span className="text-[9px] text-gray-600 font-mono">PHASE_{stage.id}/5</span>
                </div>

                {/* BG Number */}
                <div 
                  className="absolute top-1 right-1 text-[90px] md:text-[110px] font-bold text-red-500/5 leading-none font-orbitron select-none pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  0{stage.id}
                </div>

                {/* Content */}
                <div className="relative space-y-3" style={{ zIndex: 10 }}>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">
                    STAGE {stage.id} OF {stages.length}
                  </p>

                  <h3 
                    className="font-bold text-red-500 font-orbitron title-en"
                    style={{
                      fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                      textShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
                      animation: index === activeStage ? 'blurFadeIn 0.6s ease-out forwards' : 'none',
                      filter: index === activeStage ? 'blur(0px)' : 'blur(2px)',
                      transition: 'filter 0.6s ease-out',
                    }}
                  >
                    {stage.titleEn}
                  </h3>

                  <div className="h-[1px] bg-gradient-to-r from-red-600 via-red-500/50 to-transparent" />

                  <h4 
                    className="font-bold text-white font-cairo title-ar"
                    style={{ 
                      fontSize: 'clamp(1.15rem, 3vw, 1.8rem)',
                      animation: index === activeStage ? 'blurFadeIn 0.6s ease-out 0.2s forwards' : 'none',
                      filter: index === activeStage ? 'blur(0px)' : 'blur(2px)',
                      transition: 'filter 0.6s ease-out 0.2s',
                    }}
                  >
                    {stage.titleAr}
                  </h4>

                  <div className="space-y-2 pt-2">
                    <p 
                      className="text-gray-300 leading-relaxed"
                      style={{ fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)' }}
                    >
                      {stage.descEn}
                    </p>
                    <p 
                      className="text-gray-400 font-cairo leading-relaxed"
                      style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}
                    >
                      {stage.descAr}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-3 mt-3 border-t border-red-900/30">
                    <span className="text-[10px] text-red-500/50 font-mono">{'<ACTIVE>'}</span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500/30 to-transparent" />
                    <span className="text-[8px] text-gray-700 font-mono">
                      ID: PRC_{stage.id}X{(stage.id * 1847).toString().padStart(4, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ zIndex: 50 }}>
          <div className="inline-flex items-center gap-3 bg-black/95 backdrop-blur-md border border-red-900/80 px-6 py-2">
            <span className="text-[9px] text-gray-500 font-mono">PHASE</span>
            <span className="text-2xl text-red-500 font-bold font-orbitron">0{activeStage + 1}</span>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-sm text-gray-500">05</span>
            <div className="w-[1px] h-5 bg-gray-700" />
            <span className="text-[10px] text-gray-600 font-mono uppercase">
              {stages[activeStage].titleEn}
            </span>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-red-900/30" />
        <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-red-900/30" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-red-900/30" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-red-900/30" />
      </div>
    </section>
  );
}
