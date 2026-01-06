'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import ContractingModelsSection from "@/components/ContractingModelsSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Dynamic imports for client-only components
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const ScrollAnimations = dynamic(() => import("@/components/ScrollAnimations"), { ssr: false });
const ScanlineOverlay = dynamic(() => import("@/components/ScanlineOverlay"), { ssr: false });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure page starts at the top
  useEffect(() => {
    // Force scroll to top immediately on mount
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for LoadingScreen to disappear and page to render
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 3000); // Wait for loading screen (2000ms) + 800ms fade + buffer
    } else {
      // No hash - ensure we stay at the top after loading
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 2600);
    }
  }, []);

  // Show content after loading screen finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Force scroll to top when content becomes visible
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }, 2500); // Same timing as LoadingScreen (2000ms loading + 800ms fade - some buffer)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative text-white overflow-x-hidden max-w-[100vw]" suppressHydrationWarning>
      <LoadingScreen />
      
      {/* Content - Hidden until loading completes */}
      <div 
        className={`transition-opacity duration-500 overflow-x-hidden max-w-[100vw] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
      >
        <ThreeBackground />
        <Navbar />
        <ScrollAnimations />
        <ScanlineOverlay />
      
      {/* Sections - Content Wrapper with proper z-index */}
      <div className="relative pointer-events-none overflow-x-hidden max-w-[100vw]" style={{zIndex: 1}} suppressHydrationWarning>
        <div className="pointer-events-auto overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <SectorsSection />
        </div>
        
        <div className="pointer-events-auto overflow-x-hidden">
          <ContractingModelsSection />
        </div>
        
        <div className="pointer-events-auto overflow-x-hidden">
          <TechStackSection />
        </div>
        
        <div className="pointer-events-auto overflow-x-hidden">
          <ProcessSection />
        </div>
      </div>
        
        <div className="pointer-events-auto">
          <TeamSection />
        </div>
        
        <div className="pointer-events-auto">
          <WhyChooseUsSection />
        </div>
        
        <div className="pointer-events-auto">
          <ContactSection />
        </div>
        
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
