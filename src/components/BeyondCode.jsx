import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Music, Compass, Code2 } from 'lucide-react';
import { beyondCode } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function BeyondCode() {
  const iconMap = {
    Code2: Code2,
    Sparkles: Sparkles,
    Palette: Palette,
    Compass: Compass,
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          BEYOND_<span className="text-gradient-cyber">THE_CODE</span>
        </h2>
        
        {/* Kinetic Animated Pillars */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 font-mono text-sm sm:text-base font-bold tracking-widest text-zinc-400">
          {beyondCode.pillars.map((word, idx) => (
            <React.Fragment key={word}>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => playSound('hover')}
                className="text-white hover:text-cyber-accent hover:scale-110 transition-all cursor-default text-glow-purple"
              >
                {word}
              </motion.span>
              {idx < beyondCode.pillars.length - 1 && (
                <span className="text-cyber-purple/50 font-light">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {beyondCode.interests.map((item, idx) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => playSound('hover')}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-cyber-purple/50 group flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-void-900 border border-white/10 flex items-center justify-center text-cyber-neonPurple group-hover:text-cyber-accent group-hover:border-cyber-purple/50 group-hover:scale-110 transition-all duration-300 mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                <span>PASSION // 0{idx + 1}</span>
                <span className="text-cyber-neonPurple">ACTIVE</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
