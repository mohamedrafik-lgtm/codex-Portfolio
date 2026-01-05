'use client';

import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData';

// Dynamic imports for client-only components
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { 
  ssr: false,
  loading: () => <div className="h-16 w-full fixed top-0 left-0 right-0 z-50 bg-black/40" />
});
const ScanlineOverlay = dynamic(() => import("@/components/ScanlineOverlay"), { ssr: false });

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  // Find project by ID
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen relative text-white flex items-center justify-center">
        <ThreeBackground />
        <Navbar />
        <ScanlineOverlay />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4 font-cairo">المشروع غير موجود</h1>
          <p className="text-gray-400 mb-8">PROJECT NOT FOUND</p>
          <Link 
            href="/portfolio"
            className="inline-block px-6 py-3 text-sm font-semibold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-black transition-all duration-300 font-cairo"
          >
            ← العودة للبرتفوليو
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative text-white" suppressHydrationWarning>
      <ThreeBackground />
      <Navbar />
      <ScanlineOverlay />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-[4rem] pb-8 md:pb-12"
      >
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors duration-300 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-cairo">العودة للبرتفوليو</span>
          </Link>
        </div>

        {/* Project Hero */}
        <div className="max-w-7xl mx-auto px-4 mt-6 md:mt-8">
          {/* Project Image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] mb-8 rounded-lg overflow-hidden border border-red-500/20 bg-black/60"
              suppressHydrationWarning
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
              <Image
                src={project.image}
                alt={project.titleAr}
                fill
                className="object-contain"
                priority
                suppressHydrationWarning
              />
              {/* HUD Corners */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-red-500 z-20"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-red-500 z-20"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-red-500 z-20"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-red-500 z-20"></div>
            </motion.div>
          )}

          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-red-500 font-mono border border-red-500/30 px-3 py-1 rounded bg-red-500/10">
                {project.id}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-3 font-cairo tracking-wider">
              {project.titleAr}
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-cairo">
              {project.shortDescAr}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="relative z-10 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 space-y-12 md:space-y-16">
          
          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-red-500/20 rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <circle cx="12" cy="12" r="6" strokeWidth={2} />
                <circle cx="12" cy="12" r="2" strokeWidth={2} />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-red-500 font-cairo">
                نظرة عامة على المشروع
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-cairo">
                {project.fullDetailsAr}
              </p>
            </div>
          </motion.div>

          {/* Challenges Solved Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-red-500/20 rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-red-500 font-cairo">
                التحديات التي تم حلها
              </h3>
            </div>
            <div>
              <ul className="space-y-3">
                {project.challengesSolved.ar.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 font-cairo p-3 border-r-2 border-red-500/50 bg-red-500/5 rounded">
                    <span className="text-red-500 mt-1 flex-shrink-0">◂</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-red-500/20 rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-red-500 font-cairo">
                التقنيات المستخدمة
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-red-500/30 rounded-lg p-4 bg-black/60 backdrop-blur-sm text-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-red-500/20 rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-red-500 font-cairo">
                الإنجازات الرئيسية
              </h3>
            </div>
            <div>
              <ul className="space-y-3">
                {project.achievements.ar.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300 font-cairo p-3 border-r-2 border-red-500/50 bg-red-500/5 rounded"
                  >
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-red-500/20 rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6 font-cairo">
              الميزات الرئيسية
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 border border-red-500/20 rounded bg-black/40 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm md:text-base font-semibold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-black transition-all duration-300 relative overflow-hidden group font-orbitron rounded"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="relative z-10 font-cairo">العودة للبرتفوليو</span>
              <span className="absolute inset-0 bg-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
