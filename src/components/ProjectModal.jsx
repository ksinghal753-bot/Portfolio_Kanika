import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Code2, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playSound } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSound('click');
        onClose();
      }
      if (project?.screenshots?.length > 1) {
        if (e.key === 'ArrowRight') {
          playSound('click');
          setActiveImageIndex((prev) => (prev + 1) % project.screenshots.length);
        } else if (e.key === 'ArrowLeft') {
          playSound('click');
          setActiveImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project]);

  if (!project) return null;

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const currentImage = hasScreenshots
    ? project.screenshots[activeImageIndex]
    : { url: project.image, title: project.title, desc: project.subtitle };

  const handleNext = () => {
    playSound('click');
    setActiveImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const handlePrev = () => {
    playSound('click');
    setActiveImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-purple-500/40 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(139,92,246,0.3)] bg-void-950/95 text-white z-10 my-auto custom-scrollbar"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-void-900/95 border-b border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyber-neonPurple font-bold">
                {project.number}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="font-mono text-xs text-zinc-300 font-semibold uppercase tracking-wider">
                {project.title}
              </span>
            </div>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              onMouseEnter={() => playSound('hover')}
              className="p-2 rounded-xl bg-void-800 hover:bg-void-700 text-zinc-400 hover:text-white transition-all border border-white/5 hover:border-cyber-purple/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-8 space-y-8">
            
            {/* Interactive Image Gallery Showcase */}
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-void-950 border border-purple-500/30 shadow-2xl group">
                <div className="relative w-full h-[280px] sm:h-[380px] md:h-[450px] bg-void-950 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage.url}
                      src={currentImage.url}
                      alt={currentImage.title || project.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-contain filter drop-shadow-xl"
                    />
                  </AnimatePresence>

                  {/* Prev / Next Controls if multiple screenshots */}
                  {hasScreenshots && project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        aria-label="Previous screenshot"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-void-950/90 hover:bg-cyber-purple text-white border border-white/20 hover:border-cyber-neonPurple transition-all shadow-xl backdrop-blur-md z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={handleNext}
                        aria-label="Next screenshot"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-void-950/90 hover:bg-cyber-purple text-white border border-white/20 hover:border-cyber-neonPurple transition-all shadow-xl backdrop-blur-md z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-void-950/90 backdrop-blur-md border border-white/20 font-mono text-xs text-cyber-neonPurple font-semibold shadow-md z-10">
                        {activeImageIndex + 1} / {project.screenshots.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Screenshot Caption Bar */}
                {hasScreenshots && (
                  <div className="p-3.5 bg-void-900/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-cyber-neonPurple shrink-0" />
                      <span className="font-bold text-white font-mono">{currentImage.title}</span>
                      <span className="hidden sm:inline text-zinc-500">—</span>
                      <span className="text-zinc-300 font-light">{currentImage.desc}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {hasScreenshots && project.screenshots.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1">
                  {project.screenshots.map((s, idx) => {
                    const isActive = idx === activeImageIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          playSound('click');
                          setActiveImageIndex(idx);
                        }}
                        onMouseEnter={() => playSound('hover')}
                        className={`relative shrink-0 w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          isActive
                            ? 'border-cyber-neonPurple shadow-[0_0_15px_rgba(168,85,247,0.7)] scale-105'
                            : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                        }`}
                      >
                        <img
                          src={s.url}
                          alt={s.title}
                          className="w-full h-full object-cover"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-cyber-purple/20 pointer-events-none" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-cyber-accent font-mono text-sm mb-4">
                {project.subtitle}
              </p>
              <p className="text-zinc-300 text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyber-neonPurple" />
                <span>TECHNOLOGIES USED</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-cyber-purple/15 border border-cyber-purple/35 font-mono text-xs text-cyber-neonPurple font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="p-6 rounded-2xl bg-void-900/80 border border-white/10">
                <h4 className="font-mono text-xs text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>KEY CAPABILITIES &amp; ARCHITECTURE</span>
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture / Developer Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-void-900 border border-white/5">
                <span className="font-mono text-[11px] text-zinc-500 uppercase block mb-1">
                  SYSTEM ARCHITECTURE
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {project.architecture}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-void-900 border border-white/5">
                <span className="font-mono text-[11px] text-zinc-500 uppercase block mb-1">
                  MY ROLE &amp; CONTRIBUTION
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {project.role}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-mono text-xs font-bold tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW REPOSITORY →</span>
              </a>

              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                }}
                className="px-6 py-3 rounded-xl bg-void-800 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
