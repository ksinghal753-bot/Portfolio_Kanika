import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, Cpu, Sparkles, Code2, BookOpen, Music, Palette, CheckCircle2, MapPin, Building2, UserCheck, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, stats, educationHistory, softSkillsData } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Calendar: Calendar,
    Cpu: Cpu,
    Award: Award,
    Flame: Award,
  };

  const interests = [
    { label: 'Coding & DSA', icon: Code2, color: 'text-cyber-neonPurple' },
    { label: 'Problem Solving', icon: Sparkles, color: 'text-cyber-neonBlue' },
    { label: 'Dancing', icon: Music, color: 'text-pink-400' },
    { label: 'Painting & Arts', icon: Palette, color: 'text-amber-400' },
    { label: 'Continuous Learning', icon: BookOpen, color: 'text-emerald-400' },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            01 // PROFILE &amp; ACADEMICS
          </span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-cyber-purple to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          ABOUT_<span className="text-gradient-cyber">ME</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Developer Identity Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-purple-500/20">
            
            {/* Top Identity Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyber-purple shadow-[0_0_10px_#8B5CF6]" />
                <span className="font-mono text-xs text-zinc-300 font-semibold tracking-wider">
                  IDENTIFIER: KANIKA_SINGHAL
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyber-neonPurple px-2.5 py-0.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/30">
                ACTIVE
              </span>
            </div>

            {/* Photo Avatar Composition */}
            <div className="my-6 relative rounded-2xl overflow-hidden aspect-[4/4.6] bg-void-900 border border-white/10 group">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                style={{ objectPosition: 'center 42%' }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/assets/profile/profile_avatar.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center font-mono text-[10px] text-zinc-300">
                <span className="px-2 py-0.5 rounded bg-void-950/70 border border-white/10">SECTOR: CS_ENGINEERING</span>
                <span className="px-2 py-0.5 rounded bg-void-950/70 border border-white/10 text-emerald-400">STATUS: INTERNSHIP_READY</span>
              </div>
            </div>

            {/* Quick Bio Summary */}
            <p className="font-mono text-xs text-zinc-400 leading-relaxed">
              "{personalInfo.tagline}"
            </p>

            {/* Soft Skills Badges */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="block font-mono text-[11px] text-zinc-500 tracking-wider mb-3">
                // CORE_STRENGTHS &amp; SOFT_SKILLS
              </span>
              <div className="grid grid-cols-2 gap-2">
                {softSkillsData.map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-xl bg-void-900/80 border border-white/5 text-xs font-mono text-zinc-300"
                  >
                    <div className="flex items-center gap-1.5 text-cyber-neonPurple font-bold">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Pursuits */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="block font-mono text-[11px] text-zinc-500 tracking-wider mb-3">
                // PERSONAL_PURSUITS
              </span>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      onMouseEnter={() => playSound('hover')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-void-900/80 border border-white/10 text-xs font-mono text-zinc-300 hover:border-cyber-purple/50 hover:bg-cyber-purple/10 transition-all"
                    >
                      <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                      <span>{item.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* GitHub Profile Direct Link Bar — Highlighted */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                onMouseEnter={() => playSound('hover')}
                className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-void-900 via-purple-950/40 to-blue-950/30 border-2 border-cyber-purple/60 shadow-[0_0_25px_rgba(139,92,246,0.35),inset_0_0_20px_rgba(139,92,246,0.12)] hover:border-cyber-neonPurple hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle animated background shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-blue text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-extrabold text-sm sm:text-base text-white group-hover:text-cyber-accent transition-colors tracking-wide">
                        github.com/{personalInfo.githubUsername}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        ACTIVE
                      </span>
                    </div>
                    <span className="block font-mono text-[11px] text-zinc-300 group-hover:text-white transition-colors mt-0.5">
                      Explore repositories &amp; open-source code ↗
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 text-zinc-300 group-hover:text-white group-hover:bg-cyber-purple/30 group-hover:translate-x-1 transition-all relative z-10">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative, Education Cards & Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Main Statement Box */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Hello, I'm <span className="text-gradient-cyber">{personalInfo.name}</span>.
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Equipped with a solid foundation in <strong>C/C++, Python, JavaScript, HTML/CSS</strong>, and core Computer Science disciplines (<strong>DSA, DBMS, Operating Systems</strong>), I build high-performance desktop and web applications with clean architecture and responsive user interfaces.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 font-mono text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyber-neonPurple" />
                Data Structures &amp; Algorithms
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyber-neonBlue" />
                DBMS &amp; SQL
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                AI Web Apps &amp; Desktop Software
              </span>
            </div>
          </div>

          {/* Education Breakdown Cards */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-cyber-neonPurple" />
              <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                EDUCATION &amp; ACADEMIC RECORD
              </h4>
            </div>

            <div className="space-y-6">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-void-900/90 border border-white/10 hover:border-cyber-purple/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyber-neonBlue" />
                      <span className="text-base font-bold text-white font-sans">{edu.institution}</span>
                    </div>
                    <span className="font-mono text-xs text-cyber-neonPurple bg-cyber-purple/10 px-3 py-1 rounded-full border border-cyber-purple/30 self-start sm:self-auto">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex flex-wrap gap-x-4">
                    <span className="text-zinc-200">{edu.degree}</span>
                    <span>• {edu.location}</span>
                    <span className="text-emerald-400 font-semibold">• {edu.status}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {edu.metrics.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Stats Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon] || Cpu;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => playSound('hover')}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between border border-white/10 hover:border-cyber-purple/50 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-5 h-5 text-cyber-neonPurple group-hover:text-cyber-neonBlue transition-colors" />
                    <span className="font-mono text-[9px] text-zinc-600">0{idx + 1}</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyber-accent transition-colors text-glow-purple">
                      {stat.value}
                    </span>
                    <span className="block font-mono text-xs font-semibold text-zinc-300 tracking-wider mt-1">
                      {stat.label}
                    </span>
                    <span className="block font-mono text-[10px] text-zinc-500 mt-0.5">
                      {stat.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
