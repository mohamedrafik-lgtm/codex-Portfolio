'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stages = [
  {
    id: 1,
    titleAr: 'التحليل',
    titleEn: 'Analysis',
    descAr: 'نحلل احتياجاتك ونفهم رؤيتك بدقة لنضع أساساً قوياً للمشروع',
    descEn: 'We analyze your needs and understand your vision precisely',
    icon: '🔍',
    color: '#ef4444'
  },
  {
    id: 2,
    titleAr: 'التصميم',
    titleEn: 'Design',
    descAr: 'نصمم واجهات مبتكرة تجمع بين الجمال والوظيفة',
    descEn: 'We design innovative interfaces combining beauty and function',
    icon: '✏️',
    color: '#f59e0b'
  },
  {
    id: 3,
    titleAr: 'التطوير',
    titleEn: 'Development',
    descAr: 'نبني حلول برمجية قوية وقابلة للتوسع بأحدث التقنيات',
    descEn: 'We build robust and scalable software solutions',
    icon: '⚙️',
    color: '#10b981'
  },
  {
    id: 4,
    titleAr: 'الاختبار',
    titleEn: 'Testing',
    descAr: 'نختبر كل تفصيل لضمان الجودة والأمان والأداء الأمثل',
    descEn: 'We test every detail to ensure quality and security',
    icon: '🔬',
    color: '#3b82f6'
  },
  {
    id: 5,
    titleAr: 'الإطلاق',
    titleEn: 'Launch',
    descAr: 'نطلق مشروعك ونواصل الدعم والتطوير المستمر',
    descEn: 'We launch your project and continue support and development',
    icon: '🚀',
    color: '#8b5cf6'
  },
];

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    connections: THREE.Line[];
  } | null>(null);

  // Mount detection
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Three.js Scene Setup
  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create particles
    const particleCount = 50;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      
      colors[i * 3] = 1;
      colors[i * 3 + 1] = 0;
      colors[i * 3 + 2] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create connection lines between stages
    const connections: THREE.Line[] = [];
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xff0000, 
      transparent: true, 
      opacity: 0.3 
    });

    for (let i = 0; i < stages.length - 1; i++) {
      const lineGeometry = new THREE.BufferGeometry();
      const points = [
        new THREE.Vector3(-4 + i * 2, 0, 0),
        new THREE.Vector3(-4 + (i + 1) * 2, 0, 0),
      ];
      lineGeometry.setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      connections.push(line);
      scene.add(line);
    }

    sceneRef.current = { scene, camera, renderer, particles, connections };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        // Set initial state without GSAP to avoid hydration mismatch
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) rotateX(0) scale(1)';
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || !sceneRef.current) return;

    const { connections } = sceneRef.current;
    
    // Animate active connection with vanilla JS
    connections.forEach((line, index) => {
      const material = line.material as THREE.LineBasicMaterial;
      const targetOpacity = index < activeStage ? 0.8 : 0.2;
      
      // Simple JS animation
      let startOpacity = material.opacity;
      let startTime: number | null = null;
      const duration = 500; // ms
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        material.opacity = startOpacity + (targetOpacity - startOpacity) * progress;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    });
  }, [activeStage, isMounted]);

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="relative bg-black text-white py-16 sm:py-20 overflow-hidden"
      suppressHydrationWarning
    >
      {/* Three.js Canvas Background */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          suppressHydrationWarning
        />
      )}

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-red-500 mb-3 font-mono tracking-[0.3em] uppercase">
            {'<'} WORK PROCESS {'>'}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-cairo">
            مراحل <span className="text-red-500">العمل</span>
          </h2>
          <p className="text-lg text-gray-400 font-cairo max-w-2xl mx-auto">
            من الفكرة إلى التنفيذ.. نسير معك خطوة بخطوة
          </p>
        </div>

        {/* 3D Pipeline Visualization */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform -translate-y-1/2 hidden lg:block" suppressHydrationWarning>
            {isMounted && (
              <div 
                className="h-full bg-red-500 transition-all duration-1000 ease-out"
                style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
              />
            )}
          </div>

          {/* Stages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="relative"
                style={{ perspective: '1000px' }}
              >
                <div
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`
                    relative group cursor-pointer
                    transition-all duration-500
                    ${index === activeStage ? 'scale-105 z-20' : 'scale-100 z-10'}
                  `}
                  onClick={() => setActiveStage(index)}
                  style={{
                    transformStyle: 'preserve-3d',
                    opacity: isMounted ? 1 : 0,
                  }}
                >
                  {/* Glow Effect */}
                  {isMounted && (
                    <div 
                      className={`
                        absolute -inset-1 rounded-xl blur-xl transition-opacity duration-500
                        ${index === activeStage ? 'opacity-50' : 'opacity-0 group-hover:opacity-20'}
                      `}
                      style={{ background: stage.color }}
                    />
                  )}

                  {/* Card */}
                  <div 
                    className={`
                      relative bg-black/80 backdrop-blur-xl border-2 rounded-lg p-3 sm:p-4
                      transition-all duration-500
                      ${index === activeStage 
                        ? 'border-red-500 shadow-xl shadow-red-500/40' 
                        : index < activeStage
                        ? 'border-red-500/50'
                        : 'border-gray-800 hover:border-gray-700'
                      }
                    `}
                  >
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-500" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-500" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-500" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-500" />

                    {/* Stage Number */}
                    <div 
                      className={`
                        w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center
                        font-bold text-lg sm:text-xl transition-all duration-500
                        ${index === activeStage
                          ? 'bg-red-500 text-white scale-105 shadow-lg shadow-red-500/50'
                          : index < activeStage
                          ? 'bg-red-500/50 text-white'
                          : 'bg-gray-800 text-gray-500 group-hover:bg-gray-700'
                        }
                      `}
                    >
                      {stage.id}
                    </div>

                    {/* Icon */}
                    <div className="text-2xl sm:text-3xl text-center mb-2">
                      {stage.icon}
                    </div>

                    {/* Title */}
                    <h3 
                      className={`
                        text-sm sm:text-base font-bold text-center mb-1 font-cairo transition-colors
                        ${index === activeStage ? 'text-red-500' : 'text-white'}
                      `}
                    >
                      {stage.titleAr}
                    </h3>
                    <p 
                      className={`
                        text-sm text-center font-orbitron uppercase transition-colors
                        ${index === activeStage ? 'text-red-400' : 'text-gray-500'}
                      `}
                    >
                      {stage.titleEn}
                    </p>

                    {/* Status Indicator */}
                    {index === activeStage && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500" />
                    )}
                    {index < activeStage && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full">
                        <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Details */}
        <div className="max-w-3xl mx-auto" suppressHydrationWarning>
          <div 
            className="relative bg-black/60 backdrop-blur-xl border-2 border-red-500/30 rounded-xl p-6 sm:p-8"
            key={activeStage}
            suppressHydrationWarning
          >
            {/* Animated Background */}
            {isMounted && (
              <div 
                className="absolute inset-0 rounded-2xl opacity-10"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${stages[activeStage].color}, transparent 70%)`,
                }}
                suppressHydrationWarning
              />
            )}

            {/* Glass Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                <span className="text-red-500 font-mono text-sm font-bold">
                  STAGE {stages[activeStage].id.toString().padStart(2, '0')}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-gray-400 font-mono text-xs">
                  / 0{stages.length}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2 sm:mb-3 font-cairo">
                {stages[activeStage].titleAr}
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-gray-400 mb-4 sm:mb-6 font-orbitron">
                {stages[activeStage].titleEn}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent mb-4 sm:mb-6" />

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4 font-cairo">
                {stages[activeStage].descAr}
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                {stages[activeStage].descEn}
              </p>
            </div>

            {/* Large Background Number */}
            {isMounted && (
              <div 
                className="absolute -bottom-4 -right-4 text-[100px] sm:text-[150px] font-bold leading-none font-orbitron select-none pointer-events-none opacity-5"
                style={{ color: stages[activeStage].color }}
                suppressHydrationWarning
              >
                {stages[activeStage].id.toString().padStart(2, '0')}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 sm:mt-12 flex items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 font-mono text-xs sm:text-sm hover:bg-red-500/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← PREV
          </button>
          
          <div className="flex gap-1.5 sm:gap-2">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`
                  h-1.5 sm:h-2 rounded-full transition-all duration-300
                  ${index === activeStage
                    ? 'w-8 sm:w-12 bg-red-500'
                    : index < activeStage
                    ? 'w-4 sm:w-6 bg-red-500/60'
                    : 'w-4 sm:w-6 bg-gray-800 hover:bg-gray-700'
                  }
                `}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
            disabled={activeStage === stages.length - 1}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 font-mono text-xs sm:text-sm hover:bg-red-500/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            NEXT →
          </button>
        </div>
      </div>
    </section>
  );
}
