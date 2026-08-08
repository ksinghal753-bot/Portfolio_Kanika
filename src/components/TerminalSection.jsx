import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Play, CornerDownLeft, RefreshCw } from 'lucide-react';
import { terminalCommands, personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export default function TerminalSection() {
  const [typedLines, setTypedLines] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [interactiveHistory, setInteractiveHistory] = useState([]);
  const terminalRef = useRef(null);

  const script = [
    { cmd: '$ Who am I ?', res: terminalCommands.whoami.output },
    { cmd: '$ Role', res: terminalCommands.role.output },
    { cmd: '$ Interests', res: terminalCommands.interests.output },
    { cmd: '$ Currently_Learning', res: terminalCommands.currently_learning.output },
    { cmd: '$ Status', res: terminalCommands.status.output },
  ];

  // Run typing simulation when in viewport
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          runTypingSequence();
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const runTypingSequence = async () => {
    for (let i = 0; i < script.length; i++) {
      const item = script[i];

      // Simulate typing command
      let currentCmd = '';
      for (let c = 0; c < item.cmd.length; c++) {
        currentCmd += item.cmd[c];
        setTypedLines((prev) => {
          const next = [...prev];
          next[i] = { cmd: currentCmd, res: '', isTyping: true };
          return next;
        });
        playSound('keypress');
        await new Promise((r) => setTimeout(r, 28));
      }

      await new Promise((r) => setTimeout(r, 120));

      // Show response
      setTypedLines((prev) => {
        const next = [...prev];
        next[i] = { cmd: item.cmd, res: item.res, isTyping: false };
        return next;
      });

      await new Promise((r) => setTimeout(r, 220));
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    playSound('click');
    const cleanCmd = inputVal.trim().toLowerCase();
    let responseText = '';

    switch (cleanCmd) {
      case 'help':
        responseText = 'Available commands: who am i, role, interests, currently_learning, status, skills, projects, contact, resume, clear';
        break;
      case 'whoami':
      case 'who am i':
      case 'who am i ?':
        responseText = terminalCommands.whoami.output;
        break;
      case 'role':
        responseText = terminalCommands.role.output;
        break;
      case 'interests':
        responseText = terminalCommands.interests.output;
        break;
      case 'currently_learning':
      case 'learning':
        responseText = terminalCommands.currently_learning.output;
        break;
      case 'status':
        responseText = terminalCommands.status.output;
        break;
      case 'skills':
        responseText = 'C/C++, Python, JavaScript, SQL, DBMS, HTML/CSS, Git, Problem Solving';
        break;
      case 'projects':
        responseText = '1. Address Management System | 2. Store Management System | 3. EasyDo Tasks';
        break;
      case 'contact':
        responseText = `Email: ${personalInfo.email} | GitHub: ${personalInfo.githubUrl}`;
        break;
      case 'resume':
        responseText = 'Opening resume in new tab...';
        window.open(personalInfo.resumePath, '_blank');
        break;
      case 'sudo':
        responseText = 'Permission granted: Welcome root administrator.';
        break;
      case 'clear':
        setTypedLines([]);
        setInteractiveHistory([]);
        setInputVal('');
        return;
      default:
        responseText = `Command not recognized: "${cleanCmd}". Type "help" for available commands.`;
        break;
    }

    setInteractiveHistory((prev) => [
      ...prev,
      { cmd: `$ ${inputVal}`, res: responseText },
    ]);
    setInputVal('');
  };

  const handleReplay = () => {
    playSound('click');
    setTypedLines([]);
    setInteractiveHistory([]);
    runTypingSequence();
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div ref={terminalRef} className="relative">
        
        {/* Terminal Ambient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple/30 via-cyber-blue/30 to-cyber-neonPurple/20 rounded-3xl blur-2xl opacity-60" />

        {/* Terminal Window Container */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-void-900/90 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <TerminalIcon className="w-3.5 h-3.5 text-cyber-neonPurple" />
              <span className="font-semibold text-white">KANIKA_TERMINAL</span>
              <span className="text-zinc-600">// tty1</span>
            </div>

            <button
              onClick={handleReplay}
              title="Re-run terminal boot"
              className="p-1.5 rounded-lg bg-void-800 hover:bg-void-700 text-zinc-400 hover:text-white transition-all text-xs flex items-center gap-1 font-mono"
            >
              <RefreshCw className="w-3 h-3" />
              <span className="hidden sm:inline">REPLAY</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm bg-void-950/90 min-h-[380px] flex flex-col justify-between text-left select-text">
            
            <div className="space-y-4">
              <div className="text-zinc-500 text-[11px] pb-2 border-b border-white/5 flex justify-between">
                <span>KANIKA.SYS TERMINAL ENGINE [Version 3.8.2]</span>
                <span>TYPE "help" BELOW</span>
              </div>

              {/* Automated Sequence Lines */}
              {typedLines.map((line, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyber-neonPurple font-semibold">
                    <span>{line.cmd}</span>
                    {line.isTyping && (
                      <span className="inline-block w-2 h-4 bg-cyber-purple animate-pulse" />
                    )}
                  </div>
                  {line.res && (
                    <div className="pl-4 text-zinc-300 font-normal leading-relaxed border-l border-cyber-purple/30">
                      {line.res}
                    </div>
                  )}
                </div>
              ))}

              {/* User Interactive History Lines */}
              {interactiveHistory.map((item, idx) => (
                <div key={`hist-${idx}`} className="space-y-1 pt-1">
                  <div className="text-cyber-neonBlue font-semibold">{item.cmd}</div>
                  <div className="pl-4 text-zinc-300 border-l border-cyber-blue/30 leading-relaxed">
                    {item.res}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Prompt Input */}
            <form onSubmit={handleCommandSubmit} className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
              <span className="text-cyber-accent font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g., help, skills, projects, resume)..."
                className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-zinc-600"
              />
              <button
                type="submit"
                className="px-2.5 py-1 rounded bg-cyber-purple/20 border border-cyber-purple/40 text-cyber-accent hover:bg-cyber-purple/30 text-xs flex items-center gap-1 font-mono transition-colors"
              >
                <span>RUN</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
