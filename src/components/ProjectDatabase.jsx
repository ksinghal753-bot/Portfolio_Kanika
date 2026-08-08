import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code, Database, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playSound } from '../utils/sound';

export default function ProjectDatabase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (proj) => {
    playSound('modal');
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-20">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            03 // PROJECTS
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-purple to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
          FEATURED_<span className="text-gradient-cyber">PROJECTS</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          Things I've built. Desktop databases, relational DBMS architectures &amp; web applications.
        </p>
      </div>

      {/* Cinematic Project Cards Showcase */}
      <div className="space-y-20 sm:space-y-28">
        {projectsData.map((project, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Project Preview Frame */}
              <div
                className={`lg:col-span-7 relative group cursor-pointer ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
                onClick={() => handleOpenModal(project)}
                data-cursor="project"
              >
                {/* Glowing Aura on Hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyber-purple/30 to-cyber-blue/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Main Card Media Container */}
                <div className="relative rounded-3xl overflow-hidden glass-card border border-purple-500/25 p-2 sm:p-3 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group-hover:border-cyber-purple transition-all duration-500 bg-void-950/90">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-void-950 flex items-center justify-center p-1 sm:p-1.5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />

                    {/* Top Overlay Badge moved to top-right to avoid covering logo */}
                    <div className="absolute top-3 right-3 font-mono text-[10px] text-white px-3 py-1 rounded-full bg-void-950/85 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-cyber-neonPurple" />
                      <span>{project.number}</span>
                    </div>

                    {/* Hover Inspect CTA Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-5 py-2.5 rounded-full bg-void-950/95 backdrop-blur-xl border border-cyber-purple text-white font-mono text-xs font-bold tracking-wider shadow-[0_0_25px_rgba(168,85,247,0.8)] flex items-center gap-2">
                        <span>OPEN SYSTEM SPECS</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info Column */}
              <div
                className={`lg:col-span-5 flex flex-col items-start ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Project Number */}
                <span className="font-mono text-xs font-bold text-cyber-neonPurple tracking-widest uppercase mb-2">
                  // {project.number}
                </span>

                {/* Title */}
                <h3
                  onClick={() => handleOpenModal(project)}
                  className="text-2xl sm:text-3xl font-extrabold text-white mb-2 hover:text-cyber-accent cursor-pointer transition-colors"
                >
                  {project.title}
                </h3>

                <p className="font-mono text-xs text-cyber-neonBlue mb-4">
                  {project.subtitle}
                </p>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-void-900 border border-white/10 font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenModal(project)}
                    onMouseEnter={() => playSound('hover')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-mono text-xs font-semibold tracking-wider hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playSound('click')}
                      onMouseEnter={() => playSound('hover')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 text-emerald-400 hover:text-emerald-300 font-mono text-xs font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>OPEN PROJECT</span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound('click')}
                    onMouseEnter={() => playSound('hover')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-void-900/80 border border-white/10 hover:border-cyber-purple/50 text-zinc-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB →</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
