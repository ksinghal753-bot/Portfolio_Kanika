import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Terminal, Code2, Database, GitBranch, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function Hero({ onOpenResume }) {

  const handleScrollTo = (id) => {
    playSound('click');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Typography & Story */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-void-900/90 border border-cyber-purple/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
            <span className="font-mono text-xs font-medium text-zinc-300 tracking-wider uppercase">
              WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>

          {/* Large Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              <span className="block font-sans text-white">KANIKA</span>
              <span className="block text-gradient-cyber font-sans">SINGHAL</span>
            </h1>
          </motion.div>

          {/* Subtitles & Engineering Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 font-mono text-sm sm:text-base text-zinc-300"
          >
            <span className="px-3 py-1 rounded-lg bg-cyber-purple/15 text-cyber-accent border border-cyber-purple/30">
              Computer Science Engineer
            </span>
            <span className="text-zinc-600">•</span>
            <span className="px-3 py-1 rounded-lg bg-cyber-blue/15 text-cyber-neonBlue border border-cyber-blue/30">
              Software Developer
            </span>
          </motion.div>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Explore Work Button */}
            <button
              onClick={() => handleScrollTo('#projects')}
              onMouseEnter={() => playSound('hover')}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wider text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-cyber-purple to-cyber-blue shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* View / Download High-Definition Resume in Another Tab */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('hover')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-medium tracking-wider text-zinc-200 glass-button hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-cyber-neonPurple" />
              <span>VIEW RESUME ↗</span>
            </a>

            {/* GitHub Profile */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('hover')}
              title="GitHub Profile"
              className="inline-flex items-center justify-center p-3.5 rounded-xl glass-button text-zinc-300 hover:text-white hover:border-cyber-purple/50 transition-all hover:scale-[1.05] active:scale-[0.95]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* LinkedIn Profile */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('hover')}
              title="LinkedIn Profile"
              className="inline-flex items-center justify-center p-3.5 rounded-xl glass-button text-zinc-300 hover:text-cyber-neonBlue hover:border-cyber-blue/50 transition-all hover:scale-[1.05] active:scale-[0.95]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 pt-6 border-t border-white/10 flex items-center gap-6 sm:gap-10 font-mono text-xs text-zinc-400"
          >
            <div>
              <span className="block text-white font-bold text-lg text-glow-purple">09.69</span>
              <span className="text-zinc-500 text-[11px]">CGPA // ACADEMIC</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <span className="block text-white font-bold text-lg text-glow-blue">DRDO</span>
              <span className="text-zinc-500 text-[11px]">INTERNSHIP ALUMNI</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <span className="block text-white font-bold text-lg text-cyber-accent">3+</span>
              <span className="text-zinc-500 text-[11px]">KEY SYSTEMS BUILT</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual Frame & Floating Badges */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Glowing Ambient Halo behind frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/25 via-cyber-blue/20 to-transparent rounded-3xl blur-[70px] pointer-events-none transform -rotate-3" />

          {/* Central Glass Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.25)] group"
          >
            {/* Outer Rim Light Overlay */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-cyber-purple/40 via-transparent to-cyber-blue/40 pointer-events-none" />

            {/* Inner Photo Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-void-900 flex items-center justify-center border border-white/10">
              
              {/* Photo Image or SVG graphic */}
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/assets/profile/profile_avatar.svg';
                }}
              />

              {/* High-tech HUD Status on Frame */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-void-950/80 border border-white/10 font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ONLINE
              </div>

              {/* Bottom Hologram Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-void-950 via-void-950/90 to-transparent backdrop-blur-sm flex justify-between items-end">
                <div>
                  <h2 className="text-white font-sans font-bold text-base leading-tight">
                    {personalInfo.name}
                  </h2>
                  <p className="font-mono text-[11px] text-cyber-accent">
                    {personalInfo.education}
                  </p>
                </div>
                <div className="font-mono text-[10px] text-zinc-500">
                  {personalInfo.location}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase">
          SCROLL TO EXPLORE ↓
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-cyber-neonPurple" />
        </motion.div>
      </motion.div>
    </section>
  );
}
