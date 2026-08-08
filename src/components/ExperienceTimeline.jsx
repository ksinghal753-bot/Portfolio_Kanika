import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, MapPin, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-20">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            03 // EXPERIENCES
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-purple to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
          EXPERI<span className="text-gradient-cyber">ENCES</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          Technical internships, defence laboratory contributions, and engineering project training.
        </p>
      </div>

      {/* Timeline Structure */}
      <div className="relative">
        
        {/* Glowing Center / Left Laser Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-neonPurple -translate-x-1/2 shadow-[0_0_12px_rgba(139,92,246,0.8)] opacity-60" />

        <div className="space-y-16">
          {experienceData.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Pulse Node */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-void-950 border-2 border-cyber-purple flex items-center justify-center shadow-[0_0_15px_#8B5CF6]">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyber-neonBlue animate-ping" />
                  </div>
                </div>

                {/* Content Card (placed on alternating side) */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-12 text-left' : 'md:pl-12 text-left'
                  }`}
                >
                  <div
                    onMouseEnter={() => playSound('hover')}
                    className="glass-card rounded-3xl p-6 sm:p-8 relative border border-white/10 hover:border-cyber-purple/50 group"
                  >
                    {/* Header: Org & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-cyber-neonPurple px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 font-semibold">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyber-accent transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="font-mono text-sm font-semibold text-zinc-300 mb-4 flex items-center gap-2">
                      <Building className="w-4 h-4 text-cyber-neonBlue" />
                      <span>{item.organization}</span>
                    </h4>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Pills */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-void-900 border border-white/5 font-mono text-[11px] text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
