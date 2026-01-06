'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Prevent scrolling when loading
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';
    
    // Simulate loading progress with variable speed
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            setIsLoading(false);
            // Re-enable scrolling
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            // Ensure we're at the top
            window.scrollTo(0, 0);
          }, 800);
          return 100;
        }
        // Variable speed: faster at start, slower near end
        const increment = prev < 60 ? 8 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      // Cleanup: re-enable scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
        touchAction: 'none'
      }}
      suppressHydrationWarning
    >
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Diagonal animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{
              width: '200%',
              top: `${i * 20}%`,
              left: '-50%',
              animation: `slideLine ${4 + i}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Central radial glow */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 30%, transparent 60%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4">
        
        {/* Logo Container with Hexagon Frame */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 border-2 border-red-500/20 rounded-full"
              style={{
                animation: 'spin 20s linear infinite'
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full" />
            </div>
          </div>

          {/* Inner pulsing glow */}
          <div 
            className="absolute inset-0 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.6) 0%, transparent 70%)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
          
          {/* Logo with scale animation */}
          <div 
            className="relative"
            style={{
              animation: 'scaleIn 1s ease-out forwards'
            }}
          >
            <Image
              src="/img/logo.png"
              alt="CODEX"
              width={220}
              height={88}
              priority
              className="relative z-10 w-40 sm:w-56 md:w-[280px] lg:w-[350px] h-auto"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.9)) brightness(1.1)',
                mixBlendMode: 'screen'
              }}
            />
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-80 sm:w-96 md:w-[450px] max-w-[90vw] space-y-4" suppressHydrationWarning>
          
          {/* Status text above progress */}
          <div className="flex justify-between items-center">
            <span className="text-red-400 font-orbitron text-xs sm:text-sm tracking-[0.2em] uppercase">
              LOADING SYSTEM
            </span>
            <span className="text-red-400 font-orbitron text-xs sm:text-sm font-mono tabular-nums">
              {progress}%
            </span>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="relative">
            {/* Background track */}
            <div className="relative h-1.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-red-500/20">
              
              {/* Animated progress fill */}
              <div 
                className="h-full relative transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #dc2626, #ef4444, #f87171)'
                }}
              >
                {/* Shine effect */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                    animation: 'shimmer 1.5s infinite'
                  }}
                />
              </div>

              {/* Glow trail */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-16 h-4 blur-xl opacity-70 pointer-events-none transition-all duration-300"
                style={{
                  left: `${Math.max(0, progress - 8)}%`,
                  background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)'
                }}
              />
            </div>

            {/* Outer glow */}
            <div 
              className="absolute inset-0 blur-md opacity-40 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent 0%, #ef4444 ${progress}%, transparent ${progress + 5}%)`
              }}
            />
          </div>

          {/* Loading stages text */}
          <div className="text-center">
            <p className="text-gray-500 text-[10px] sm:text-xs font-orbitron tracking-wider uppercase">
              {progress < 30 && 'Initializing...'}
              {progress >= 30 && progress < 60 && 'Loading Resources...'}
              {progress >= 60 && progress < 90 && 'Preparing Interface...'}
              {progress >= 90 && 'Almost Ready...'}
            </p>
          </div>
        </div>

        {/* Bottom tagline with fade in */}
        <div 
          className="text-center space-y-2"
          style={{
            animation: 'fadeIn 1.5s ease-out 0.5s forwards',
            opacity: 0
          }}
        >
          <p className="text-white/70 text-sm sm:text-base font-cairo">
            نُحوّل الأفكار إلى واقع رقمي
          </p>
          <p className="text-red-400/60 text-[10px] sm:text-xs font-orbitron tracking-[0.2em] uppercase">
            Transforming Ideas Into Reality
          </p>
        </div>
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent" style={{ animation: 'expandWidth 1s ease-out' }} />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-red-500 to-transparent" style={{ animation: 'expandHeight 1s ease-out' }} />
        </div>
      </div>
      
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-500 to-transparent" style={{ animation: 'expandWidth 1s ease-out' }} />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-red-500 to-transparent" style={{ animation: 'expandHeight 1s ease-out' }} />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent" style={{ animation: 'expandWidth 1s ease-out' }} />
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-red-500 to-transparent" style={{ animation: 'expandHeight 1s ease-out' }} />
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-500 to-transparent" style={{ animation: 'expandWidth 1s ease-out' }} />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-red-500 to-transparent" style={{ animation: 'expandHeight 1s ease-out' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        @keyframes slideLine {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes expandHeight {
          0% {
            height: 0;
          }
          100% {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
