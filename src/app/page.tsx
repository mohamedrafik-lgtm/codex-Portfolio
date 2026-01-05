'use client';

import dynamic from 'next/dynamic';
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import ContractingModelsSection from "@/components/ContractingModelsSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

// Dynamic imports for client-only components
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const ScrollAnimations = dynamic(() => import("@/components/ScrollAnimations"), { ssr: false });
const ScanlineOverlay = dynamic(() => import("@/components/ScanlineOverlay"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
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
        
        
        <section id="team" className="min-h-screen flex items-center justify-center pointer-events-auto">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">فريق العمل</h1>
            <p className="subtext text-xl text-gray-400 max-w-2xl mx-auto">
              خبراء متخصصون في مجالاتهم
            </p>
          </div>
        </section>
        
        <section id="why" className="min-h-screen flex items-center justify-center pointer-events-auto">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">لماذا نحن</h1>
            <p className="subtext text-xl text-gray-400 max-w-2xl mx-auto">
              الجودة والإبداع في كل مشروع
            </p>
          </div>
        </section>
        
        <div className="pointer-events-auto">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
