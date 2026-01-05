'use client';

import dynamic from 'next/dynamic';
import AboutSection from "@/components/AboutSection";
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
  return (
    <main className="min-h-screen relative text-white" suppressHydrationWarning>
      <ThreeBackground />
      <Navbar />
      <ScrollAnimations />
      <ScanlineOverlay />
      
      {/* Sections - Content Wrapper with proper z-index */}
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <AboutSection />
          <ServicesSection />
          <SectorsSection />
        </div>
        
        <div className="pointer-events-auto">
          <ContractingModelsSection />
        </div>
        
        <div className="pointer-events-auto">
          <TechStackSection />
        </div>
        
        <div className="pointer-events-auto">
          <ProcessSection />
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
