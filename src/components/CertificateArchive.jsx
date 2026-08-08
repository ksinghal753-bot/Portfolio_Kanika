import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, X, ZoomIn, Calendar, Building, Sparkles } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function CertificateArchive() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSound('click');
        setActiveCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpen = (cert) => {
    playSound('modal');
    setActiveCert(cert);
  };

  return (
    <section id="certificates" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            04 // CERTIFICATIONS
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-purple to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
          CERTIFI<span className="text-gradient-cyber">CATIONS</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          Internship accreditations, defence project recognitions, and technical specializations.
        </p>
      </div>

      {/* Certificate Glass Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onMouseEnter={() => playSound('hover')}
            onClick={() => handleOpen(cert)}
            className="glass-card rounded-3xl p-5 border border-white/10 hover:border-cyber-purple/60 cursor-pointer group flex flex-col justify-between"
          >
            {/* Certificate Preview Frame */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-void-900 mb-5 border border-white/10">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

              {/* Hover Inspect Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 rounded-full bg-void-950/80 backdrop-blur-md border border-cyber-purple text-white shadow-[0_0_20px_#8B5CF6]">
                  <ZoomIn className="w-5 h-5 text-cyber-accent" />
                </div>
              </div>

              {/* Category Tag */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-void-950/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-cyber-neonPurple">
                {cert.category}
              </div>
            </div>

            {/* Certificate Meta */}
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL VERIFICATION</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyber-accent transition-colors leading-snug">
                {cert.title}
              </h3>

              <p className="font-mono text-xs text-zinc-400 mb-4">
                {cert.issuer}
              </p>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-md bg-void-900 border border-white/5 font-mono text-[10px] text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playSound('click');
                setActiveCert(null);
              }}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl rounded-3xl glass-panel border border-purple-500/40 p-6 sm:p-8 bg-void-950/95 text-white z-10 my-auto shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(139,92,246,0.3)]"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyber-neonPurple" />
                  <span className="font-mono text-xs text-zinc-300 font-bold uppercase">
                    CREDENTIAL VIEWER // {activeCert.category}
                  </span>
                </div>

                <button
                  onClick={() => {
                    playSound('click');
                    setActiveCert(null);
                  }}
                  className="p-2 rounded-xl bg-void-800 hover:bg-void-700 text-zinc-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Certificate Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-void-900 border border-white/15 mb-6 shadow-2xl">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-full object-contain bg-black/40"
                />
              </div>

              {/* Details info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeCert.title}
                  </h3>
                  <p className="font-mono text-sm text-cyber-neonBlue">
                    {activeCert.issuer}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {activeCert.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="font-mono text-xs text-zinc-500 mr-2">VERIFIED SKILLS:</span>
                  {activeCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg bg-cyber-purple/15 border border-cyber-purple/30 font-mono text-xs text-cyber-neonPurple font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
