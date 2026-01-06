'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Wait for LoadingScreen to finish (2000ms for progress + 500ms fade out)
    setTimeout(() => {
      setShowHero(true);
    }, 2500);
  }, []);

  useEffect(() => {
    if (!isMounted || !showHero) return;

    // Vanilla JS animations to avoid hydration errors
    const animateElements = () => {
      if (logoRef.current && textRef.current) {
        // Set initial state
        logoRef.current.style.opacity = '0';
        logoRef.current.style.transform = 'scale(0.5) translateY(-50px)';
        textRef.current.style.opacity = '0';
        textRef.current.style.transform = 'translateY(30px)';

        // Animate logo
        setTimeout(() => {
          if (logoRef.current) {
            logoRef.current.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            logoRef.current.style.opacity = '1';
            logoRef.current.style.transform = 'scale(1) translateY(0)';
          }
        }, 300);

        // Animate text
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            textRef.current.style.opacity = '1';
            textRef.current.style.transform = 'translateY(0)';
          }
        }, 800);
      }
    };

    animateElements();
  }, [isMounted, showHero]);

  if (!showHero) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      suppressHydrationWarning
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 40px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Radial Glow */}
      {isMounted && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
          }}
          suppressHydrationWarning
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4" suppressHydrationWarning>
        {/* Logo Container */}
        <div ref={logoRef} className="mb-4" suppressHydrationWarning>
          <div className="relative inline-block">
            {/* Glow Effect */}
            {isMounted && (
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #ef4444, #dc2626)' }}
                suppressHydrationWarning
              />
            )}

            {/* Logo */}
            <div className="relative">
              <Image
                src="/img/logo.png"
                alt="CODEX Logo"
                width={300}
                height={120}
                className="object-contain"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.2) contrast(1.3) drop-shadow(0 0 30px rgba(239, 68, 68, 0.5))',
                }}
                priority
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div ref={textRef} className="space-y-3" suppressHydrationWarning>
          {/* Arabic Tagline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-cairo leading-tight">
            نُحوّل <span className="text-red-500">الأفكار</span> إلى واقع رقمي
          </h1>

          {/* English Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-orbitron uppercase tracking-wider">
            Transforming Ideas Into Digital Reality
          </p>

          {/* Divider */}
          {isMounted && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              <span className="text-xs text-red-500 font-mono">{'<CODE/>'}</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            </div>
          )}

          {/* Scroll Indicator */}
          {isMounted && (
            <div className="mt-12 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-red-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              <p className="text-xs text-gray-600 mt-2 font-mono">SCROLL DOWN</p>
            </div>
          )}
        </div>
      </div>

      {/* Corner Accents */}
      {isMounted && (
        <>
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-red-500/30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-red-500/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-red-500/30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-red-500/30" />
        </>
      )}
    </section>
  );
}
