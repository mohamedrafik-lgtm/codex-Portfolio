'use client';

import dynamic from 'next/dynamic';
import Link from "next/link";
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectsData';
import Footer from '@/components/Footer';

// Dynamic imports for client-only components
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { 
  ssr: false,
  loading: () => <div className="h-16 w-full fixed top-0 left-0 right-0 z-50 bg-black/40" />
});
const ScanlineOverlay = dynamic(() => import("@/components/ScanlineOverlay"), { ssr: false });

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative text-white" suppressHydrationWarning>
      <ThreeBackground />
      <Navbar />
      <ScanlineOverlay />
      
      {/* Hero Section - Starting right after navbar */}
      <div className="relative z-10 pt-[4rem] md:pt-24 pb-2 md:pb-10 px-4">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            suppressHydrationWarning
          >
            {/* Tech Ornament Top */}
            <div className="hidden md:flex items-center justify-center gap-2 mb-6">
              <span className="text-xs text-red-500/60 font-mono">{'<COMMAND_CENTER/>'}</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              <span className="text-[10px] md:text-xs text-red-500 font-mono flex items-center gap-1.5">
                <span>STATUS:</span>
                <span className="text-green-500">ACTIVE</span>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,0,0.8)]"></div>
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            </div>

            <div className="inline-block relative mb-0.5 md:mb-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-500 font-orbitron mb-0 tracking-wider">
                OUR PORTFOLIO
              </h1>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-6 font-cairo text-white">
              مشاريعنا المتميزة
            </h2>
            
            <p className="hidden md:block text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-2">
              Cutting-edge software solutions delivering measurable results across industries
            </p>
            <p className="hidden md:block text-sm lg:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed font-cairo mb-6">
              حلول برمجية متطورة تقدم نتائج قابلة للقياس عبر مختلف الصناعات
            </p>
            
            {/* Stats Bar */}
            <div className="flex items-center justify-center gap-4 md:gap-6 text-[10px] md:text-xs text-red-500/70 font-mono border border-red-500/20 bg-black/40 backdrop-blur-sm py-2 px-4 md:px-6 rounded inline-flex">
              <span>{'<'}</span>
              <span className="flex items-center gap-1.5">
                <span className="text-red-500">SYSTEMS_DEPLOYED:</span>
                <span className="text-white font-bold">10</span>
              </span>
              <div className="w-px h-4 bg-red-500/30"></div>
              <span className="flex items-center gap-1.5">
                <span className="text-red-500">CLIENTS_SATISFIED:</span>
                <span className="text-white font-bold">100%</span>
              </span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <span>{'>'}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 pb-12 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto w-full">

          {/* Projects Grid */}
          <div className="space-y-0">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 lg:mt-16"
          >
            <Link
              href="/"
              className="inline-block px-6 py-3 text-xs md:text-sm font-semibold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-black transition-all duration-300 relative overflow-hidden group font-orbitron"
            >
              <span className="relative z-10">← BACK TO HOME / العودة للرئيسية</span>
              <span className="absolute inset-0 bg-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
