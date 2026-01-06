'use client';

import { useState } from 'react';

const teamData = [
  {
    id: 1,
    titleAr: 'الباك اند',
    titleEn: 'Backend',
    count: 10,
    color: 'from-red-500 to-red-600',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-500',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    titleAr: 'الفرونت اند',
    titleEn: 'Frontend',
    count: 3,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    titleAr: 'الموبايل',
    titleEn: 'Mobile Developer',
    count: 6,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-500',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    titleAr: 'الاختبار',
    titleEn: 'Software Tester',
    count: 2,
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    titleAr: 'محلل الأعمال',
    titleEn: 'Business Analyst',
    count: 2,
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-500',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 6,
    titleAr: 'DevOps',
    titleEn: 'DevOps Engineer',
    count: 1,
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-500',
    bgColor: 'bg-cyan-500',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="relative bg-black text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 40px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs text-red-500 mb-3 font-mono tracking-[0.3em] uppercase">
            OUR TEAM
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-cairo">
            فريق <span className="text-red-500">العمل</span>
          </h2>
          <p className="text-lg text-gray-400 font-cairo max-w-2xl mx-auto">
            فريق متخصص ومتكامل من المطورين والخبراء
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((team) => (
            <div
              key={team.id}
              onMouseEnter={() => setHoveredId(team.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`
                absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500
                ${hoveredId === team.id ? 'opacity-20' : 'opacity-0'}
                bg-gradient-to-r ${team.color}
              `} />
              
              {/* Card */}
              <div className={`
                relative bg-black/60 backdrop-blur-xl border-2 rounded-xl p-6
                transition-all duration-300 shadow-2xl h-full
                ${hoveredId === team.id 
                  ? `${team.borderColor} shadow-lg scale-[1.03]` 
                  : 'border-gray-800'
                }
              `}>
                {/* HUD Corner Brackets */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${team.borderColor}`} />
                <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 ${team.borderColor}`} />
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 ${team.borderColor}`} />
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 ${team.borderColor}`} />

                {/* Glass shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                {/* Icon with Tech Style */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    relative transition-all duration-300
                    ${hoveredId === team.id ? 'scale-110' : 'scale-100'}
                  `}>
                    {/* Icon Container */}
                    <div className={`
                      relative w-20 h-20 rounded-xl border-2 ${team.borderColor}
                      flex items-center justify-center
                      transition-all duration-300
                      ${hoveredId === team.id ? `${team.bgColor} bg-opacity-20 shadow-lg` : 'bg-black/40'}
                    `}>
                      <div className={`
                        transition-colors duration-300
                        ${hoveredId === team.id ? 'text-white' : `text-${team.bgColor.replace('bg-', '')}`}
                      `}>
                        {team.icon}
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className={`
                      absolute -top-1 -right-1 w-3 h-3 rounded-full ${team.bgColor}
                      ${hoveredId === team.id ? 'animate-pulse' : ''}
                      shadow-lg
                    `} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 font-cairo text-center">
                  {team.titleAr}
                </h3>
                <p className="text-xs text-gray-400 font-orbitron uppercase mb-4 text-center">
                  {team.titleEn}
                </p>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r from-transparent via-${team.bgColor.replace('bg-', '')}-500 to-transparent mb-4`} />

                {/* Count */}
                <div className="text-center">
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-lg
                    border-2 ${team.borderColor} text-white font-bold text-2xl
                    transition-all duration-300 relative
                    ${hoveredId === team.id ? `${team.bgColor} scale-110 shadow-lg` : 'bg-black/40'}
                  `}>
                    <span className="relative z-10">{team.count}</span>
                    {/* Animated background */}
                    {hoveredId === team.id && (
                      <div className={`absolute inset-0 rounded-lg ${team.bgColor} opacity-50 animate-pulse`} />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-mono">
                    موظفين
                  </p>
                </div>

                {/* Code Tag Style */}
                <div className={`
                  absolute top-2 right-2 text-[10px] font-mono px-2 py-1 rounded
                  ${hoveredId === team.id ? `${team.bgColor} bg-opacity-20 text-white` : 'bg-gray-800 text-gray-500'}
                  transition-all duration-300
                `}>
                  {'<DEV/>'}
                </div>

                {/* Background Number */}
                <div className={`
                  absolute -bottom-2 -right-2 text-[80px] font-bold leading-none font-orbitron select-none pointer-events-none
                  ${hoveredId === team.id ? 'text-white/[0.05]' : 'text-white/[0.02]'}
                  transition-all duration-300
                `}>
                  {team.count.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Count */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/[0.02] backdrop-blur-xl border-2 border-red-500/30 rounded-full">
            <span className="text-sm text-gray-400 font-mono uppercase">TOTAL TEAM</span>
            <div className="w-px h-6 bg-red-500/30" />
            <span className="text-3xl font-bold text-red-500 font-orbitron">
              {teamData.reduce((acc, team) => acc + team.count, 0)}
            </span>
            <span className="text-sm text-gray-500 font-mono">MEMBERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
