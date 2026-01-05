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
  },
  {
    id: 2,
    titleAr: 'الفرونت اند',
    titleEn: 'Frontend',
    count: 3,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500',
  },
  {
    id: 3,
    titleAr: 'الموبايل',
    titleEn: 'Mobile Developer',
    count: 6,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-500',
  },
  {
    id: 4,
    titleAr: 'الاختبار',
    titleEn: 'Software Tester',
    count: 2,
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                relative bg-white/[0.02] backdrop-blur-xl border-2 rounded-2xl p-8
                transition-all duration-300 shadow-2xl h-full
                ${hoveredId === team.id 
                  ? `${team.borderColor} shadow-${team.bgColor}/20 scale-[1.02]` 
                  : 'border-white/10'
                }
              `}>
                {/* Glass shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                {/* Geometric Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    relative w-20 h-20 transition-transform duration-300
                    ${hoveredId === team.id ? 'scale-110 rotate-12' : 'scale-100'}
                  `}>
                    {/* Background circle */}
                    <div className={`
                      absolute inset-0 rounded-full bg-gradient-to-br ${team.color} opacity-20
                    `} />
                    {/* Inner shape */}
                    <div className={`
                      absolute inset-2 rounded-full border-2 ${team.borderColor}
                      flex items-center justify-center
                    `}>
                      <div className={`
                        w-8 h-8 ${team.bgColor} opacity-60
                        ${team.id === 1 ? 'rounded-lg rotate-45' : ''}
                        ${team.id === 2 ? 'rounded-full' : ''}
                        ${team.id === 3 ? 'rounded-sm' : ''}
                        ${team.id === 4 ? 'rounded-lg' : ''}
                      `} />
                    </div>
                    {/* Corner dots */}
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${team.bgColor}`} />
                    <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full ${team.bgColor} opacity-50`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 font-cairo text-center">
                  {team.titleAr}
                </h3>
                <p className="text-sm text-gray-400 font-orbitron uppercase mb-6 text-center">
                  {team.titleEn}
                </p>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r ${team.color} opacity-30 mb-6`} />

                {/* Count */}
                <div className="text-center">
                  <div className={`
                    inline-flex items-center justify-center w-20 h-20 rounded-full
                    ${team.bgColor} text-white font-bold text-3xl
                    transition-transform duration-300
                    ${hoveredId === team.id ? 'scale-110' : 'scale-100'}
                  `}>
                    {team.count}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 font-mono">
                    موظفين
                  </p>
                </div>

                {/* Background Number */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-white/[0.02] leading-none font-orbitron select-none pointer-events-none">
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
