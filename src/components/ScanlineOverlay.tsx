'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScanlineOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for section transition events
    const handleSectionTransition = () => {
      if (!overlayRef.current) return;

      // Flash the scanline overlay
      gsap.timeline()
        .to(overlayRef.current, {
          opacity: 0.6,
          duration: 0.1,
          ease: 'power2.in',
        })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.1,
          ease: 'power2.out',
        });
    };

    window.addEventListener('section-transition', handleSectionTransition);

    return () => {
      window.removeEventListener('section-transition', handleSectionTransition);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[55] pointer-events-none opacity-0"
      style={{
        background: `
          repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.03),
            rgba(255, 0, 0, 0.03) 1px,
            transparent 1px,
            transparent 2px
          ),
          radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(255, 0, 0, 0.1) 100%
          )
        `,
        mixBlendMode: 'overlay',
      }}
    >
      {/* CRT scanline effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, transparent 1px, transparent 2px, rgba(0, 0, 0, 0.1) 3px)',
          animation: 'scanline 8s linear infinite',
        }}
      />
      
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
