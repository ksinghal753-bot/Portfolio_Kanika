import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/sound';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState('initializing'); // initializing -> granted -> exit
  const [progress, setProgress] = useState(0);

  const finishBoot = () => {
    setStage('exit');
    onComplete();
  };

  useEffect(() => {
    // 1. Progress tick
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, 35);

    // 2. Absolute safety timeout - guarantee page opens within 1.6s
    const safetyTimer = setTimeout(() => {
      finishBoot();
    }, 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setStage('granted');
      try {
        playSound('access');
      } catch (e) {}

      const timer = setTimeout(() => {
        finishBoot();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Allow instant skip on click or keypress
  useEffect(() => {
    const handleSkip = () => {
      finishBoot();
    };
    window.addEventListener('keydown', handleSkip);
    return () => window.removeEventListener('keydown', handleSkip);
  }, []);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={finishBoot}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-void-950 text-white select-none px-6 cursor-pointer"
        >
          {/* Subtle Ambient Glow behind */}
          <div className="absolute w-96 h-96 rounded-full bg-cyber-purple/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center">
            {/* System Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-cyber-purple animate-ping" />
              <span className="font-mono text-xs text-cyber-neonPurple tracking-[0.3em] uppercase">
                SYSTEM BOOT SEQUENCE
              </span>
            </div>

            {/* Title: KANIKA.SYS */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white font-mono mb-4 text-glow-purple">
              KANIKA<span className="text-cyber-purple">.SYS</span>
            </h1>

            {/* Subtitle / Status */}
            <div className="font-mono text-xs sm:text-sm text-[#A1A1AA] tracking-widest uppercase mb-8 h-6">
              {stage === 'granted' ? (
                <span className="text-emerald-400 font-bold tracking-[0.25em] drop-shadow-[0_0_10px_#10B981]">
                  ✓ ACCESS GRANTED
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1">
                  <span>INITIALIZING PERSONAL DEVELOPER INTERFACE</span>
                  <span className="animate-pulse">...</span>
                </span>
              )}
            </div>

            {/* Thin Purple/Blue Glowing Progress Bar */}
            <div className="w-full h-[3px] bg-void-800 rounded-full overflow-hidden relative shadow-[0_0_12px_rgba(139,92,246,0.3)]">
              <div
                className="h-full bg-gradient-to-r from-cyber-purple via-cyber-neonPurple to-cyber-blue transition-all duration-75 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            {/* Progress Metrics & Skip Prompt */}
            <div className="w-full flex justify-between items-center mt-3 font-mono text-[11px] text-zinc-500">
              <span>CORE://SDE_ENVIRONMENT</span>
              <span className="text-cyber-neonPurple font-bold">{Math.min(progress, 100)}%</span>
            </div>

            <span className="mt-8 font-mono text-[10px] text-zinc-600 tracking-wider">
              [ CLICK ANYWHERE OR PRESS ANY KEY TO SKIP ]
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
