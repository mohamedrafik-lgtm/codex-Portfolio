'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScanlineOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSectionTransition = () => {
      if (!overlayRef.current) return;

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
      className="scanline-overlay"
    >
      <div className="scanline-animation" />
    </div>
  );
}
