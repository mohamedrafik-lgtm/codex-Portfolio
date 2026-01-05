'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: string;
    titleEn: string;
    titleAr: string;
    shortDescEn: string;
    shortDescAr: string;
    technologies: string[];
    icon: React.ReactNode;
    features: string[];
    image?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReversed = index % 2 !== 0;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        boxShadow: '0 0 40px rgba(255, 0, 0, 0.5)',
        duration: 0.3,
        ease: 'power2.out',
      });

      window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: true } }));
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: '0 4px 20px rgba(255, 0, 0, 0.2)',
        duration: 0.3,
        ease: 'power2.out',
      });

      window.dispatchEvent(new CustomEvent('card-hover', { detail: { active: false } }));
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link href={`/portfolio/${project.id}`} className="block">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        className={`grid md:grid-cols-2 gap-6 items-center mb-12 lg:mb-16 cursor-pointer ${isReversed ? 'md:flex-row-reverse' : ''}`}
        suppressHydrationWarning
      >
      {/* Content Side */}
      <div className={`relative ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative bg-black/60 backdrop-blur-md border border-red-900/70 p-4 md:p-6">
          {/* HUD Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-red-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-red-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-red-500"></div>

          {/* Project ID Badge */}
          <div className="absolute -top-3 -right-3 bg-red-500 text-black px-3 py-1 text-xs font-bold font-mono">
            {project.id}
          </div>

          {/* Icon */}
          <div className="mb-4 text-red-500 flex justify-start scale-75 md:scale-90">
            {project.icon}
          </div>

          {/* Titles */}
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-500 mb-2 font-orbitron">
            {project.titleEn}
          </h3>
          <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 font-cairo">
            {project.titleAr}
          </h4>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-2 leading-relaxed">
            {project.shortDescEn}
          </p>
          <p className="text-gray-400 text-xs mb-4 leading-relaxed font-cairo">
            {project.shortDescAr}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] bg-red-500/10 border border-red-500/30 text-red-500 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-1.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5 flex-shrink-0 text-xs">▸</span>
                <span className="text-gray-300 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image/Visual Side */}
      <div className={`relative ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative aspect-video bg-black/40 backdrop-blur-md border border-red-500/30 overflow-hidden group p-4">
          {/* HUD Overlay */}
          <div className="absolute inset-0 border border-red-500/10 pointer-events-none z-10"></div>
          
          {/* Grid Pattern - Only shown when no image */}
          {!project.image && (
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
          )}

          {/* Project Image or Placeholder */}
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.titleEn}
                fill
                className="object-contain"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center scale-75">
                <div className="text-red-500 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="text-red-500/50 text-xs font-mono">[PROJECT_PREVIEW]</div>
                <div className="text-gray-600 text-[10px] font-mono mt-1">COMING_SOON</div>
              </div>
            </div>
          )}

          {/* Scan Line Effect */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 animate-scan z-20"></div>
        </div>

        {/* Status Indicator */}
        <div className="absolute -bottom-3 -left-3 bg-black border border-red-500 px-4 py-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-500 text-xs font-mono">ACTIVE</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
      </motion.div>
    </Link>
  );
}
