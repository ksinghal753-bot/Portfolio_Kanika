import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, ExternalLink, X, CheckCircle, Sparkles, GraduationCap, Briefcase, Award, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  const handleOpenPreview = () => {
    playSound('modal');
    setShowPreview(true);
  };

  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Resume Glass Hub Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-500/30 p-8 sm:p-12 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyber-purple/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 font-mono text-xs text-cyber-neonPurple mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Want the <span className="text-gradient-cyber">complete resume?</span>
          </h3>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-6">
            Detailed breakdown of my <strong>B.Tech CSE coursework (9.76 &amp; 9.69 CGPA)</strong> at Sharda University Agra, AI-Integrated To-Do project, Cisco CyberOps &amp; Scaler certifications, and core technical skills.
          </p>

          {/* Quick specs pills */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-300">
            <span className="px-3 py-1 rounded-lg bg-void-900 border border-white/10">
              Sharda University Agra (3rd Year)
            </span>
            <span className="px-3 py-1 rounded-lg bg-void-900 border border-white/10">
              1st Year CGPA: 9.76 • 2nd Year: 9.69
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ✓ Open for SDE Internships
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto z-10 shrink-0">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-mono text-xs font-bold tracking-wider hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>OPEN RESUME IN NEW TAB ↗</span>
          </a>

          <a
            href="/assets/resume/kanika_resume.png"
            download="Kanika_Singhal_Resume.png"
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl glass-button text-zinc-300 hover:text-white font-mono text-xs tracking-wider transition-all"
          >
            <Download className="w-4 h-4 text-cyber-neonPurple" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      </div>

      {/* Interactive Resume Lightbox Document Modal */}
      <AnimatePresence>
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playSound('click');
                setShowPreview(false);
              }}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-purple-500/40 p-6 sm:p-8 bg-void-950/95 text-white z-10 my-auto shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyber-neonPurple" />
                  <span className="font-mono text-xs font-bold text-white uppercase">
                    KANIKA_SINGHAL_RESUME_VIEW
                  </span>
                </div>
                <button
                  onClick={() => {
                    playSound('click');
                    setShowPreview(false);
                  }}
                  className="p-2 rounded-xl bg-void-800 hover:bg-void-700 text-zinc-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Resume Image View & Clean Structure */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Column: Image scan */}
                <div className="md:col-span-6 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2 shadow-inner">
                  <img
                    src="/assets/resume/kanika_resume.png"
                    alt="Kanika Singhal Official Resume"
                    className="w-full h-auto rounded-xl object-contain shadow-md"
                  />
                </div>

                {/* Right Column: Structured Live Digest */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-void-900 border border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-white font-sans">{personalInfo.name}</h4>
                    <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">{personalInfo.bio}</p>
                    <div className="pt-2 border-t border-white/5 text-zinc-400 space-y-1">
                      <div>📞 {personalInfo.phone}</div>
                      <div>✉️ {personalInfo.email}</div>
                      <div>🔗 {personalInfo.linkedinUrl}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-void-900 border border-white/10 space-y-2">
                    <span className="text-cyber-neonPurple font-bold block">🎓 ACADEMIC RECORD</span>
                    <div className="text-white font-sans font-semibold">Sharda University Agra (CSE)</div>
                    <div className="text-zinc-400">1st Year CGPA: <strong className="text-cyber-neonBlue">9.76</strong> | 2nd Year: <strong className="text-cyber-neonBlue">9.69</strong></div>
                    <div className="text-zinc-500">Holy Public Junior College (Class XII)</div>
                  </div>

                  <div className="p-4 rounded-xl bg-void-900 border border-white/10 space-y-2">
                    <span className="text-cyber-neonPurple font-bold block">📜 CERTIFICATIONS</span>
                    <ul className="space-y-1 text-zinc-300">
                      <li>• Cisco CyberOps Associate</li>
                      <li>• Scaler Python Course for Beginners</li>
                      <li>• Technical Workshop Certificates</li>
                    </ul>
                  </div>

                  <a
                    href={personalInfo.resumePath}
                    download="Kanika_Singhal_Resume.png"
                    onClick={() => playSound('click')}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-mono text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD HIGH-RES RESUME</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
