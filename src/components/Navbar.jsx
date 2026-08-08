import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Terminal, Cpu } from 'lucide-react';
import { playSound, toggleSound, isSoundEnabled } from '../utils/sound';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    setSoundActive(isSoundEnabled());

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    playSound('click');
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAudioToggle = () => {
    const newState = toggleSound();
    setSoundActive(newState);
    if (newState) {
      playSound('click');
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between`}
      >
        {/* Floating Glass Dock */}
        <div
          className={`w-full flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-400 ${
            scrolled
              ? 'bg-void-900/85 backdrop-blur-xl border border-purple-500/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.6),0_0_20px_rgba(139,92,246,0.15)]'
              : 'bg-void-900/50 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-blue p-[1px] shadow-[0_0_12px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300">
              <div className="w-full h-full bg-void-950 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white">
                KS
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-sans text-sm sm:text-base font-bold tracking-wide text-white group-hover:text-cyber-accent transition-colors">
                Kanika <span className="text-gradient-purple">Singhal</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  onMouseEnter={() => playSound('hover')}
                  className={`relative px-3.5 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-lg bg-cyber-purple/20 border border-cyber-purple/50 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Sound Toggle & Mobile Trigger */}
          <div className="flex items-center gap-3">
            {/* Audio Feedback Switch */}
            <button
              onClick={handleAudioToggle}
              title={soundActive ? 'Mute System Audio' : 'Unmute System Audio'}
              onMouseEnter={() => playSound('hover')}
              className="p-2 rounded-xl bg-void-800/80 border border-white/10 hover:border-cyber-purple/50 text-zinc-400 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Toggle Sound"
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-cyber-neonPurple animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-500" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                playSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl bg-void-800/80 border border-white/10 hover:border-cyber-purple/50 text-white transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void-950/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-10"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-mono text-xs text-cyber-purple uppercase tracking-widest">
                // COMMAND NAVIGATION
              </span>
              <span className="font-mono text-[10px] text-zinc-500">SYS_V3.8</span>
            </div>

            <div className="flex flex-col gap-3 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-void-900 border border-white/5 hover:border-cyber-purple/50 hover:bg-cyber-purple/10 text-white font-mono text-sm tracking-wider transition-all"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-zinc-600 font-mono">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 text-center font-mono text-xs text-zinc-500">
              KANIKA SINGHAL — SOFTWARE DEVELOPER
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
