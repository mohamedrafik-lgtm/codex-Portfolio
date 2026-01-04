'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function ScrollAnimations() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Wait for full page load including Three.js
    const initAnimations = () => {
      // Kill all existing triggers to prevent duplicates
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Custom smooth scroll implementation
      let scrollVelocity = 0;
      let currentScroll = window.scrollY;
      let targetScroll = window.scrollY;
      
      const smoothScroll = () => {
        targetScroll = window.scrollY;
        currentScroll += (targetScroll - currentScroll) * 0.1;
        scrollVelocity = targetScroll - currentScroll;
        
        if (Math.abs(scrollVelocity) > 0.1) {
          requestAnimationFrame(smoothScroll);
        }
      };

      let scrollTimeout: NodeJS.Timeout;
      const handleWheel = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(smoothScroll, 10);
      };
      
      window.addEventListener('wheel', handleWheel, { passive: true });

      // ===== ABOUT CARDS - Clip-path reveal with unique identifiers =====
      const aboutCards = gsap.utils.toArray<HTMLElement>('.about-card');
      console.log(`[GSAP] Found ${aboutCards.length} about cards`);
      
      aboutCards.forEach((card, index) => {
        // Add unique identifier
        card.classList.add(`card-${index}`);
        card.setAttribute('data-card-index', String(index));
        console.log(`[GSAP] Initializing about card ${index}`, card);
        
        // Force initial state
        gsap.set(card, {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          opacity: 0,
          visibility: 'visible',
        });
        
        gsap.to(card, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: card,
            start: index === aboutCards.length - 1 ? 'top 90%' : 'top 85%', // Last card more sensitive
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true,
          },
          delay: index * 0.2,
        });
      });

      // ===== SAFETY CHECK: Force visibility fallback after 2s =====
      setTimeout(() => {
        aboutCards.forEach((card) => {
          const currentOpacity = window.getComputedStyle(card).opacity;
          if (parseFloat(currentOpacity) < 0.5) {
            console.warn('Ghost card detected, forcing visibility:', card);
            gsap.to(card, {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        });
      }, 2000);

      // ===== SERVICE, TECH & SECTOR CARDS - Fade + Scale with unique identifiers =====
      const allCards = gsap.utils.toArray<HTMLElement>('.service-card, .tech-card, .sector-card');
      console.log(`[GSAP] Found ${allCards.length} service/tech/sector cards`);
      
      allCards.forEach((card, index) => {
        // Add unique identifier
        card.classList.add(`card-${index}`);
        card.setAttribute('data-card-index', String(index));
        
        // Check if already in viewport
        const rect = card.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.9; // More sensitive
        
        console.log(`[GSAP] Card ${index} - inViewport: ${isInViewport}, top: ${rect.top}px`);
        
        // Force initial state
        gsap.set(card, {
          opacity: isInViewport ? 1 : 0,
          y: isInViewport ? 0 : 40,
          scale: isInViewport ? 1 : 0.95,
          visibility: 'visible',
        });
        
        if (!isInViewport) {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: index === allCards.length - 1 ? 'top 90%' : 'top 85%', // Last card more sensitive
              toggleActions: 'play none none none',
              once: true,
              invalidateOnRefresh: true,
            },
            delay: index * 0.05,
          });
        }
      });

      // ===== SAFETY CHECK: Force visibility for service/tech cards =====
      setTimeout(() => {
        allCards.forEach((card) => {
          const currentOpacity = window.getComputedStyle(card).opacity;
          if (parseFloat(currentOpacity) < 0.5) {
            console.warn('Ghost card detected in service/tech, forcing visibility:', card);
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        });
      }, 2500);

      // ===== SECTION REVEALS =====
      const sections = gsap.utils.toArray<HTMLElement>('section[id]');
      
      sections.forEach((section, index) => {
        // Section fade in
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none',
            once: true,
          },
        });

        // ===== HEADING TEXT DECODING =====
        const heading = section.querySelector('h1, h2');
        if (heading) {
          const originalText = heading.textContent || '';
          const glitchChars = '01XZ{}<>/';
          
          ScrollTrigger.create({
            trigger: section,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              const scrambledText = originalText
                .split('')
                .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
                .join('');
              
              heading.textContent = scrambledText;
              
              gsap.to(heading, {
                duration: 0.8,
                text: {
                  value: originalText,
                  delimiter: '',
                },
                ease: 'power2.out',
              });
            },
          });

          gsap.from(heading, {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          });
        }

        // Subtext animation
        const subtext = section.querySelector('p, .subtext');
        if (subtext) {
          gsap.from(subtext, {
            opacity: 0,
            y: 50,
            skewX: 5,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          });
        }

        // Cards/Content with slide-in
        const cards = section.querySelectorAll('.card, .stat-card, button:not(.nav-link)');
        if (cards.length > 0) {
          gsap.from(cards, {
            opacity: 0,
            y: 50,
            skewX: 5,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          });
        }

        // Parallax for alternating sections
        if (index % 2 === 0) {
          gsap.to(section, {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        // Section transition events
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => {
            window.dispatchEvent(
              new CustomEvent('section-transition', {
                detail: { section: section.id, direction: 'down' },
              })
            );
          },
          onEnterBack: () => {
            window.dispatchEvent(
              new CustomEvent('section-transition', {
                detail: { section: section.id, direction: 'up' },
              })
            );
          },
        });
      });

      // ===== BACKGROUND PARALLAX =====
      const handleBackgroundParallax = () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollY / maxScroll;

        window.dispatchEvent(
          new CustomEvent('scroll-progress', {
            detail: { progress: scrollProgress, scrollY },
          })
        );
      };

      window.addEventListener('scroll', handleBackgroundParallax, { passive: true });

      // ===== SCROLL PROGRESS BAR =====
      gsap.to('.scroll-progress-bar', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // ===== SIDE SCROLL INDICATOR =====
      gsap.to('.scroll-indicator-side', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // ===== CRITICAL: Refresh ScrollTrigger =====
      ScrollTrigger.refresh();

      // Cleanup
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleBackgroundParallax);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    // Wait for window load (Three.js + all assets)
    if (document.readyState === 'complete') {
      const cleanup = initAnimations();
      return cleanup;
    } else {
      const handleLoad = () => {
        const cleanup = initAnimations();
        window.removeEventListener('load', handleLoad);
        return cleanup;
      };
      window.addEventListener('load', handleLoad);
      
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, [isMounted]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
        <div
          className="scroll-progress-bar h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 origin-left scale-x-0"
          style={{
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.8)',
          }}
        />
      </div>

      {/* Side Scroll Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] hidden lg:block pointer-events-none">
        <div className="h-32 w-0.5 bg-gray-800/50 relative overflow-hidden">
          <div
            className="scroll-indicator-side absolute top-0 left-0 w-full bg-red-500 origin-top scale-y-0"
            style={{
              boxShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .scroll-indicator-side {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
