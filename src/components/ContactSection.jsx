import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, Terminal, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSound('access');
    setIsSubmitted(true);

    // Launch celebratory cyber confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#8B5CF6', '#3B82F6', '#A855F7', '#60A5FA'],
    });

    // Reset after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    playSound('click');
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-neonPurple tracking-widest uppercase">
            06 // ESTABLISH CONNECTION
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-purple to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
          LET'S BUILD <span className="text-gradient-cyber">SOMETHING MEANINGFUL.</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          Open for Software Developer roles, SDE internships, and engineering collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Transmission Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Direct Communication Channels
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Feel free to reach out directly via email or connect with me across professional networks.
            </p>

            {/* Email Card with Copy Button */}
            <div className="p-4 rounded-2xl bg-void-900 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-neonPurple shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-mono text-[10px] text-zinc-500">PRIMARY EMAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="block font-mono text-xs sm:text-sm text-white hover:text-cyber-neonPurple truncate transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => playSound('hover')}
                title="Copy email to clipboard"
                className="p-2.5 rounded-xl bg-void-800 hover:bg-void-700 text-zinc-300 hover:text-white transition-all shrink-0 border border-white/5"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card with Copy & Call Button */}
            <div className="p-4 rounded-2xl bg-void-900 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-neonBlue shrink-0">
                  <span className="text-sm font-mono font-bold">📞</span>
                </div>
                <div className="overflow-hidden">
                  <span className="block font-mono text-[10px] text-zinc-500">CONTACT NUMBER</span>
                  <a href={`tel:${personalInfo.phone}`} className="block font-mono text-xs sm:text-sm text-white hover:text-cyber-neonBlue truncate transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${personalInfo.phone}`}
                onClick={() => playSound('click')}
                title="Call phone"
                className="px-3 py-1.5 rounded-xl bg-void-800 hover:bg-void-700 text-cyber-neonBlue text-xs font-mono transition-all shrink-0 border border-white/5"
              >
                CALL
              </a>
            </div>

            {/* Location & Status */}
            <div className="space-y-3 font-mono text-xs text-zinc-400 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyber-neonBlue" />
                <span>Base Location: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Availability: Ready for Full-Time &amp; Internship SDE Roles</span>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div className="pt-4 border-t border-white/10 flex gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                onMouseEnter={() => playSound('hover')}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-void-900 border border-white/10 hover:border-cyber-purple/50 text-white font-mono text-xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                onMouseEnter={() => playSound('hover')}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-void-900 border border-white/10 hover:border-cyber-blue/50 text-white font-mono text-xs transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyber-neonBlue" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Cyber Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/25 relative"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-neonPurple" />
              <span>SEND ENCRYPTED TRANSMISSION</span>
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3.5 rounded-xl bg-void-900/90 border border-white/10 focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple text-white font-mono text-sm placeholder-zinc-600 transition-all focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-void-900/90 border border-white/10 focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple text-white font-mono text-sm placeholder-zinc-600 transition-all focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  YOUR MESSAGE / PROJECT INQUIRY
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, role opportunities, or project requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-void-900/90 border border-white/10 focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple text-white font-mono text-sm placeholder-zinc-600 transition-all focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => playSound('hover')}
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-emerald-500 text-white shadow-[0_0_20px_#10B981]'
                    : 'bg-gradient-to-r from-cyber-purple via-cyber-neonPurple to-cyber-blue text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-[1.01]'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>TRANSMISSION RECEIVED // THANK YOU</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
