'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';
import logo from '../img/e1cd77fa-4af0-412f-8ab7-f8635cbad038_removalai_preview.png';

const navLinks = [
  { id: 'home', label: 'الرئيسية', type: 'scroll' },
  { id: 'about', label: 'من نحن', type: 'scroll' },
  { id: 'services', label: 'الخدمات الأساسية', type: 'scroll' },
  { id: 'sectors', label: 'القطاعات المستهدفة', type: 'scroll' },
  { id: 'portfolio', label: 'الأعمال السابقة', type: 'link' },
  { id: 'workflow', label: 'طريقة العمل', type: 'scroll' },
  { id: 'team', label: 'فريق العمل', type: 'scroll' },
  { id: 'why', label: 'لماذا نحن', type: 'scroll' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
      } else {
        gsap.to(menuRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
        });
      }
    }
  }, [isOpen]);

  const handleNavClick = (id: string, type: string) => {
    if (type === 'link') {
      router.push(`/${id}`);
      setIsOpen(false);
    } else {
      // If we're on a different page (not home), navigate to home first
      if (pathname !== '/') {
        // Navigate to home with hash
        router.push(`/#${id}`);
        setIsOpen(false);
      } else {
        // We're on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
          isScrolled ? 'bg-black/60 backdrop-blur-[20px]' : 'bg-black/40 backdrop-blur-[15px]'
        }`}
        style={{
          borderBottom: '0.5px solid rgba(255, 0, 0, 0.3)',
          boxShadow: isScrolled ? '0 1px 20px rgba(255, 0, 0, 0.2)' : '0 1px 10px rgba(255, 0, 0, 0.1)',
          zIndex: 10000,
          maxWidth: '100vw'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="flex items-center group"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home', 'scroll');
                }}
              >
                <Image
                  src={logo}
                  alt="CODEX Logo"
                  width={140}
                  height={56}
                  className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain transition-all duration-300 ease-in-out logo-image"
                  style={{ 
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.1) contrast(1.2)'
                  }}
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.type)}
                  className="nav-link px-3 py-2 text-[13px] font-medium text-gray-300 hover:text-red-500 transition-all duration-300 relative group"
                >
                  {/* Corner Brackets */}
                  <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 group-hover:-left-2 transition-all duration-300">[</span>
                  <span className="absolute -right-1 top-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 group-hover:-right-2 transition-all duration-300">]</span>
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNavClick('contact', 'scroll')}
                className="cta-button px-5 py-2 text-[13px] font-semibold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-black transition-all duration-300 relative overflow-hidden group font-orbitron"
              >
                <span className="relative z-10">تواصل معنا</span>
                <span className="absolute inset-0 bg-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Scanning line animation */}
                <span className="scan-line absolute top-0 left-0 w-full h-full opacity-60"></span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 text-gray-300 hover:text-red-500 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              <div className="absolute w-6 left-2 top-1/2 transform -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full sm:w-80 bg-black/95 backdrop-blur-xl lg:hidden transform translate-x-full opacity-0"
        style={{ direction: 'rtl', zIndex: 99999 }}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6">
          <div className="flex-1 space-y-2 overflow-y-auto">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.type)}
                className="block w-full text-right px-4 py-3 text-base font-medium text-gray-300 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 border-b border-gray-800/50"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('contact', 'scroll')}
            className="mt-6 w-full px-6 py-3 text-base font-semibold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-black transition-all duration-300"
          >
            تواصل معنا
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 lg:hidden backdrop-blur-sm"
          style={{ zIndex: 99998 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
          font-family: 'Orbitron', sans-serif;
        }
        .nav-link:hover {
          text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
        }
        .cta-button {
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
        }
        .cta-button:hover {
          box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
        }
        .scan-line {
          background: linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.8) 50%, transparent 100%);
          animation: scanning 3s linear infinite;
          pointer-events: none;
        }
        @keyframes scanning {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
