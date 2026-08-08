import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, GitCommit, Terminal, Sparkles, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function GithubSection() {
  const [repos, setRepos] = useState([
    {
      name: 'Address_Management_System_DRDO',
      description: 'Desktop address records management system with offline SQLite/PostgreSQL database and Tkinter GUI developed for DRDO.',
      language: 'Python',
      stars: 12,
      forks: 4,
      updated: 'Recent',
      topics: ['python', 'tkinter', 'database', 'drdo-project'],
      url: 'https://github.com/ksinghal753-bot/Address_Management_System_DRDO'
    },
    {
      name: 'AI-Integrated-To-Do-List',
      description: 'Dynamic task management application with AI-assisted scheduling, progress analytics, and responsive interface.',
      language: 'JavaScript',
      stars: 8,
      forks: 3,
      updated: 'Recent',
      topics: ['javascript', 'ai-integration', 'task-manager', 'productivity'],
      url: 'https://github.com/ksinghal753-bot/AI-Integrated-To-Do-List'
    }
  ]);

  // Generate simulated GitHub contribution heatmap matrix
  const daysInGrid = 52 * 7; // 52 weeks
  const contributionGrid = Array.from({ length: 364 }, (_, i) => {
    const r = Math.random();
    let level = 0;
    if (r > 0.45) level = 1;
    if (r > 0.7) level = 2;
    if (r > 0.88) level = 3;
    if (r > 0.96) level = 4;
    return level;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-purple-950/70 border border-purple-800/40';
      case 2:
        return 'bg-purple-800 border border-purple-600/50';
      case 3:
        return 'bg-purple-600 border border-purple-400/60 shadow-[0_0_6px_rgba(168,85,247,0.4)]';
      case 4:
        return 'bg-cyber-neonPurple border border-white/60 shadow-[0_0_8px_#A855F7]';
      default:
        return 'bg-void-900 border border-white/5';
    }
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            05 // CODE REPOSITORY
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-purple to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
          BUILDING. <span className="text-gradient-cyber">LEARNING.</span> SHIPPING.
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          Source code repositories, continuous contributions, and version-controlled projects.
        </p>
      </div>

      {/* GitHub Activity Dashboard Window */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 mb-10">
        
        {/* Top Activity Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-void-900 border border-white/10 text-white">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base font-mono">
                @{personalInfo.githubUsername}
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                ACTIVE REPOSITORY SYNC // GITHUB_HUB
              </span>
            </div>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)]"
          >
            <span>VIEW GITHUB →</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Heatmap Visualization */}
        <div className="my-8 overflow-x-auto pb-2">
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-3 min-w-[650px]">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyber-neonPurple" />
              <span>YEAR-ROUND ACTIVITY MATRIX</span>
            </span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-zinc-500">Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-void-900 border border-white/5" />
              <span className="w-2.5 h-2.5 rounded-sm bg-purple-950 border border-purple-800" />
              <span className="w-2.5 h-2.5 rounded-sm bg-purple-800 border border-purple-600" />
              <span className="w-2.5 h-2.5 rounded-sm bg-purple-600" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyber-neonPurple shadow-[0_0_4px_#A855F7]" />
              <span className="text-zinc-500">More</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px] p-4 rounded-2xl bg-void-950/80 border border-white/5">
            {contributionGrid.map((level, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-[3px] transition-colors ${getLevelColor(
                  level
                )} hover:scale-125 transition-transform cursor-pointer`}
                title={`Activity index ${i}`}
              />
            ))}
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url || personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playSound('hover')}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyber-purple/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-cyber-neonPurple font-bold">
                    REPO // 0{idx + 1}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyber-accent transition-colors" />
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-2 group-hover:text-cyber-accent transition-colors">
                  {repo.name}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-void-900 border border-white/5 font-mono text-[9px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-cyber-purple" />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-zinc-400" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
