import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function CinematicFooter() {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-void-950/90 to-[#000002] overflow-hidden border-t border-white/5">
      
      {/* Soft Ambient Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyber-purple/15 to-cyber-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Dramatic Three-Phrase Cinematic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-12"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block opacity-60">STILL CURIOUS.</span>
            <span className="block opacity-80 text-gradient-purple">STILL LEARNING.</span>
            <span className="block text-white text-glow-purple">STILL BUILDING.</span>
          </h2>
        </motion.div>

        {/* Brand & Closing Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-mono font-bold tracking-widest text-white mb-2">
            KANIKA SINGHAL
          </h3>
          <p className="text-zinc-400 font-mono text-xs sm:text-sm">
            Thanks for visiting my digital space.
          </p>
        </motion.div>

        {/* Social Link Cluster */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="p-3 rounded-2xl bg-void-900 border border-white/10 hover:border-cyber-purple/50 text-zinc-400 hover:text-white transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="p-3 rounded-2xl bg-void-900 border border-white/10 hover:border-cyber-blue/50 text-zinc-400 hover:text-cyber-neonBlue transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="p-3 rounded-2xl bg-void-900 border border-white/10 hover:border-cyber-neonPurple/50 text-zinc-400 hover:text-cyber-accent transition-all shadow-sm"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => playSound('hover')}
            title="Scroll back to top"
            className="p-3 rounded-2xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-neonPurple hover:bg-cyber-purple/20 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright & System Details */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-600">
          <div>
            KANIKA.SYS {personalInfo.version} // ARCHITECTED WITH PASSION
          </div>
          <div>
            © 2026 Kanika Singhal. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
