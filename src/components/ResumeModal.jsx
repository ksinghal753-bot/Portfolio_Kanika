import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, X, ZoomIn, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl glass-panel border border-purple-500/40 bg-void-950/95 text-white z-10 my-auto shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.3)] overflow-hidden"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-void-900/80 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyber-purple/15 text-cyber-neonPurple border border-cyber-purple/30">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white">
                  Kanika Singhal — Official Resume
                </h3>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified • 3rd Year B.Tech CSE • Sharda University Agra
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="/assets/resume/kanika_resume.png"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                title="Open full image in new tab"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-void-800 hover:bg-void-700 text-zinc-300 hover:text-white font-mono text-xs border border-white/10 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>OPEN FULL</span>
              </a>

              <a
                href="/assets/resume/kanika_resume.png"
                download="Kanika_Singhal_Resume.png"
                onClick={() => playSound('click')}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-mono text-xs font-bold shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD</span>
              </a>

              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                }}
                className="p-2 rounded-xl bg-void-800 hover:bg-void-700 text-zinc-400 hover:text-white transition-all ml-2"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: High Resolution Resume Image Display */}
          <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-void-950/80">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 max-w-2xl w-full bg-white">
              <img
                src="/assets/resume/kanika_resume.png"
                alt="Kanika Singhal Resume"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 border-t border-white/10 bg-void-900/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-zinc-400 shrink-0">
            <div className="flex items-center gap-4">
              <span>Email: <strong className="text-zinc-200">{personalInfo.email}</strong></span>
              <span>Phone: <strong className="text-zinc-200">{personalInfo.phone}</strong></span>
            </div>
            <span className="text-cyber-neonPurple">KANIKA.SYS // RESUME_VIEWER</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
