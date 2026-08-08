import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Database, Code, Globe, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function SkillsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ['All', 'Languages', 'Core CS', 'Developer Tools', 'Soft Skills'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            02 // SKILLS &amp; STRENGTHS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          MY_<span className="text-gradient-cyber">SKILLS</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base font-light">
          Comprehensive breakdown of programming languages, core computer science concepts, developer tools, and professional soft skills.
        </p>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-void-900/80 border border-white/10 backdrop-blur-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSound('click');
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => playSound('hover')}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Node Grid with Glass Card Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            onMouseEnter={() => {
              playSound('hover');
              setHoveredSkill(skill);
            }}
            onMouseLeave={() => setHoveredSkill(null)}
            className="glass-card rounded-2xl p-6 relative overflow-hidden group border border-white/10 hover:border-cyber-purple/50 cursor-pointer"
          >
            {/* Ambient hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/10 rounded-full blur-2xl group-hover:bg-cyber-purple/25 transition-all duration-500" />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="font-mono text-[10px] text-cyber-neonPurple px-2.5 py-0.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 uppercase">
                  {skill.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-cyber-accent transition-colors">
                  {skill.name}
                </h3>
              </div>
              <span className="font-mono text-xs text-zinc-500 font-semibold px-2 py-1 rounded bg-void-800 border border-white/5">
                {skill.level}
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              {skill.description}
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyber-neonBlue shrink-0" />
              <span className="font-mono text-[11px] text-zinc-300 leading-tight">
                {skill.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central Ecosystem Telemetry Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-void-900/60 border border-cyber-purple/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-neonPurple">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-white font-sans font-bold text-sm">
              Core Tech Stack &amp; Architectural Focus
            </h4>
            <p className="font-mono text-xs text-zinc-400">
              Python • C++ • PostgreSQL • Modern JavaScript • Desktop &amp; Web Systems
            </p>
          </div>
        </div>

        <div className="font-mono text-xs text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          ✓ PRODUCTION-READY FUNDAMENTALS
        </div>
      </div>
    </section>
  );
}
