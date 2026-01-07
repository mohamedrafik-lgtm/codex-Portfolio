'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const techStack = {
  backend: [
    { 
      name: '.NET', 
      icon: (
        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
          .NET
        </div>
      ),
      scramble: '.N3T' 
    },
    { 
      name: 'Laravel', 
      icon: (
        <svg viewBox="0 0 50 52" fill="#FF2D20" className="w-8 h-8">
          <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.016-.062-.023-.05-.017-.096-.033-.14-.058L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.008-.013.01-.03.019-.042l9.212-5.303a.802.802 0 0 1 .8 0l9.212 5.303c.008.012.01.029.019.042.018.024.04.045.055.071.021.039.036.082.051.124.008.023.022.044.028.068.019.068.029.138.029.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302v10.509c0 .286.152.55.4.694l8.812 5.077c.248.143.55.143.798 0l8.812-5.077c.248-.143.4-.408.4-.694V16.778c0-.286-.152-.55-.4-.694l-9.209-5.302V.271a.801.801 0 0 1 .402-.694L29.621.051a.802.802 0 0 1 .8 0l9.212 5.303c.008.012.01.029.019.042.018.024.04.045.055.071.021.039.036.082.051.124.008.023.022.044.028.068.019.068.029.138.029.209v21.943a.8.8 0 0 1-.402.694l-9.209 5.302v10.509c0 .286.152.55.4.694l9.212 5.302 9.212-5.302c.248-.143.4-.408.4-.694V11.973a.801.801 0 0 1-.029-.21z"/>
        </svg>
      ),
      scramble: 'L4r4v3l' 
    },
    { 
      name: 'NestJS', 
      icon: (
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-2xl">
          🦅
        </div>
      ),
      scramble: 'N35tJ5' 
    },
  ],
  frontend: [
    { 
      name: 'React', 
      icon: (
        <svg viewBox="0 0 32 32" fill="#61DAFB" className="w-8 h-8">
          <circle cx="16" cy="16" r="2.5"/>
          <ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(60 16 16)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(120 16 16)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      scramble: 'R34ct' 
    },
    { 
      name: 'Next.js', 
      icon: (
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-white">
          <div className="text-white text-xl font-bold">▲</div>
        </div>
      ),
      scramble: 'N3xt.j5' 
    },
    { 
      name: 'Angular', 
      icon: (
        <svg viewBox="0 0 32 32" fill="#DD0031" className="w-8 h-8">
          <path d="M16 2L3 7l2 17.5L16 30l11-5.5L29 7z"/>
          <path fill="#C3002F" d="M16 2v28l11-5.5L29 7z"/>
          <path fill="white" d="M16 6.5l-7.5 16.5h3l1.5-3.5h6l1.5 3.5h3L16 6.5zm-2 11l2-4.5 2 4.5h-4z"/>
        </svg>
      ),
      scramble: '4ngu14r' 
    },
  ],
  mobile: [
    { 
      name: 'Flutter', 
      icon: (
        <svg viewBox="0 0 24 24" fill="#02569B" className="w-8 h-8">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
        </svg>
      ),
      scramble: 'F1utt3r' 
    },
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
      className="relative py-16 sm:py-20"
    >
      {/* Connection Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="max-w-[1100px] mx-auto px-4 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h1 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-red-500 font-orbitron">
            Technology Stack
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-cairo">
            التقنيات المستخدمة
          </h2>
          <p className="subtext text-xs sm:text-sm text-gray-400 max-w-3xl mx-auto font-jetbrains">
            {'<'} CUTTING-EDGE INFRASTRUCTURE {'>'} • {'<'} AI-POWERED SOLUTIONS {'>'} • {'<'} ENTERPRISE-GRADE SECURITY {'>'}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Backend Core */}
          <div>
            <h3 className="text-xs text-red-500 mb-3 sm:mb-4 tracking-wider font-jetbrains px-2">
              {'>'} BACKEND_CORE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                    <div className="icon-drop-shadow flex items-center justify-center text-white">
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
            <h3 className="text-xs text-red-500 mb-3 sm:mb-4 tracking-wider font-jetbrains px-2">
              {'>'} FRONTEND_WEB
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                    <div className="icon-drop-shadow flex items-center justify-center">
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
            <h3 className="text-xs text-red-500 mb-3 sm:mb-4 tracking-wider font-jetbrains px-2">
              {'>'} MOBILE_DEVELOPMENT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                    <div className="icon-drop-shadow flex items-center justify-center">
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
            <h3 className="text-xs text-red-500 mb-3 sm:mb-4 tracking-wider font-jetbrains px-2">
              {'>'} SPECIALIZED_HUBS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
