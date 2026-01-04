'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const techStack = {
  backend: [
    { name: '.NET', icon: '⚡', scramble: '.N3T' },
    { name: 'Laravel', icon: '🔶', scramble: 'L4r4v3l' },
    { name: 'NestJS', icon: '🦅', scramble: 'N35tJ5' },
  ],
  frontend: [
    { name: 'React', icon: '⚛️', scramble: 'R34ct' },
    { name: 'Next.js', icon: '▲', scramble: 'N3xt.j5' },
    { name: 'Angular', icon: '🅰️', scramble: '4ngu14r' },
  ],
  mobile: [
    { name: 'Flutter', icon: '💙', scramble: 'F1utt3r' },
  ],
  specialized: [
    { name: 'AI & Analytics', icon: '🧠', scramble: '41 & 4n4lyt1cs' },
    { name: 'Cloud', icon: '☁️', scramble: 'C10ud' },
    { name: 'Cyber Security', icon: '🔒', scramble: 'Cyb3r S3cur1ty' },
    { name: 'Automation', icon: '⚙️', scramble: '4ut0m4t10n' },
  ],
};

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw connections between tech cards
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const section = sectionRef.current;
      if (!section) return;

      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
      drawConnections();
    };

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get positions of backend, frontend, and mobile cards
      const backendCards = cardsRef.current.slice(0, 3);
      const frontendCards = cardsRef.current.slice(3, 6);
      const mobileCards = cardsRef.current.slice(6, 7);

      ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.lineWidth = 0.5;
      ctx.setLineDash([5, 5]);

      // Connect backend to frontend
      backendCards.forEach((backend) => {
        if (!backend) return;
        const backendRect = backend.getBoundingClientRect();
        const sectionRect = sectionRef.current?.getBoundingClientRect();
        if (!sectionRect) return;

        const backendX = backendRect.left - sectionRect.left + backendRect.width / 2;
        const backendY = backendRect.top - sectionRect.top + backendRect.height / 2;

        frontendCards.forEach((frontend) => {
          if (!frontend) return;
          const frontendRect = frontend.getBoundingClientRect();
          const frontendX = frontendRect.left - sectionRect.left + frontendRect.width / 2;
          const frontendY = frontendRect.top - sectionRect.top + frontendRect.height / 2;

          ctx.beginPath();
          ctx.moveTo(backendX, backendY);
          ctx.lineTo(frontendX, frontendY);
          ctx.stroke();
        });

        // Connect backend to mobile
        mobileCards.forEach((mobile) => {
          if (!mobile) return;
          const mobileRect = mobile.getBoundingClientRect();
          const mobileX = mobileRect.left - sectionRect.left + mobileRect.width / 2;
          const mobileY = mobileRect.top - sectionRect.top + mobileRect.height / 2;

          ctx.beginPath();
          ctx.moveTo(backendX, backendY);
          ctx.lineTo(mobileX, mobileY);
          ctx.stroke();
        });
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Card interactions
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const nameEl = card.querySelector('.tech-name');
      if (!nameEl) return;

      const techData = [
        ...techStack.backend,
        ...techStack.frontend,
        ...techStack.mobile,
        ...techStack.specialized,
      ][index];

      if (!techData) return;

      const originalName = techData.name;
      const scrambledName = techData.scramble;

      const handleMouseEnter = () => {
        // Scale and glow card
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 0 25px rgba(255, 0, 0, 0.5)',
          duration: 0.3,
          ease: 'power2.out',
        });

        // Text scramble effect
        gsap.to(nameEl, {
          duration: 0.2,
          text: scrambledName,
          ease: 'none',
          onComplete: () => {
            gsap.to(nameEl, {
              duration: 0.2,
              text: originalName,
              ease: 'none',
            });
          },
        });

        // Emit event for background
        window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: true } }));
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 4px 15px rgba(255, 0, 0, 0.2)',
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

  const allTechs = [
    ...techStack.backend,
    ...techStack.frontend,
    ...techStack.mobile,
    ...techStack.specialized,
  ];

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Connection Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="max-w-[1100px] mx-auto px-4 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading text-4xl md:text-5xl font-bold mb-4 text-red-500 font-orbitron">
            Technology Stack
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cairo">
            التقنيات المستخدمة
          </h2>
          <p className="subtext text-sm text-gray-400 max-w-3xl mx-auto font-jetbrains">
            {'<'} CUTTING-EDGE INFRASTRUCTURE {'>'} • {'<'} AI-POWERED SOLUTIONS {'>'} • {'<'} ENTERPRISE-GRADE SECURITY {'>'}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="space-y-12">
          {/* Backend Core */}
          <div>
            <h3 className="text-xs text-red-500 mb-4 tracking-wider font-jetbrains">
              {'>'} BACKEND_CORE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techStack.backend.map((tech, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className="tech-card relative bg-black/70 backdrop-blur-sm border border-red-900/60 p-4 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
                    borderWidth: '1px',
                  }}
                >
                  {/* HUD Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-500/80" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-500/80" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-500/80" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-500/80" />

                  <div className="flex items-center gap-3">
                    <div className="text-2xl icon-drop-shadow">
                      {tech.icon}
                    </div>
                    <div className="tech-name text-sm font-semibold text-gray-200 font-jetbrains">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Web */}
          <div>
            <h3 className="text-xs text-red-500 mb-4 tracking-wider font-jetbrains">
              {'>'} FRONTEND_WEB
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techStack.frontend.map((tech, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    cardsRef.current[3 + idx] = el;
                  }}
                  className="tech-card relative bg-black/70 backdrop-blur-sm border border-red-900/60 p-4 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
                    borderWidth: '1px',
                  }}
                >
                  {/* HUD Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-500/80" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-500/80" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-500/80" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-500/80" />

                  <div className="flex items-center gap-3">
                    <div className="text-2xl icon-drop-shadow">
                      {tech.icon}
                    </div>
                    <div className="tech-name text-sm font-semibold text-gray-200 font-jetbrains">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Development */}
          <div>
            <h3 className="text-xs text-red-500 mb-4 tracking-wider font-jetbrains">
              {'>'} MOBILE_DEVELOPMENT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techStack.mobile.map((tech, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    cardsRef.current[6 + idx] = el;
                  }}
                  className="tech-card relative bg-black/70 backdrop-blur-sm border border-red-900/60 p-4 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
                    borderWidth: '1px',
                  }}
                >
                  {/* HUD Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-500/80" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-500/80" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-500/80" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-500/80" />

                  <div className="flex items-center gap-3">
                    <div className="text-2xl icon-drop-shadow">
                      {tech.icon}
                    </div>
                    <div className="tech-name text-sm font-semibold text-gray-200 font-jetbrains">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Hubs */}
          <div>
            <h3 className="text-xs text-red-500 mb-4 tracking-wider font-jetbrains">
              {'>'} SPECIALIZED_HUBS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {techStack.specialized.map((tech, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    cardsRef.current[7 + idx] = el;
                  }}
                  className="tech-card relative bg-black/70 backdrop-blur-sm border border-red-900/60 p-4 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
                    borderWidth: '1px',
                  }}
                >
                  {/* HUD Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-500/80" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-500/80" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-500/80" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-500/80" />

                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="text-2xl icon-drop-shadow">
                      {tech.icon}
                    </div>
                    <div className="tech-name text-xs font-semibold text-gray-200 font-jetbrains">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
