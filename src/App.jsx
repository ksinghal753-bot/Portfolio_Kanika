import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackgroundAmbience from './components/BackgroundAmbience';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TerminalSection from './components/TerminalSection';
import SkillsEcosystem from './components/SkillsEcosystem';
import ProjectDatabase from './components/ProjectDatabase';
import ExperienceTimeline from './components/ExperienceTimeline';
import CertificateArchive from './components/CertificateArchive';
import GithubSection from './components/GithubSection';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import BeyondCode from './components/BeyondCode';
import ContactSection from './components/ContactSection';
import CinematicFooter from './components/CinematicFooter';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Scroll spy for active navbar section
    const handleScrollSpy = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'certificates',
        'contact',
      ];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="relative min-h-screen bg-void-950 text-[#F5F5F7] overflow-x-hidden selection:bg-cyber-purple/30 selection:text-cyber-accent">
      
      {/* 1. Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Custom Magnetic Glowing Cursor */}
      <CustomCursor />

      {/* 3. Interactive Starfield & Atmospheric Background */}
      <BackgroundAmbience />

      {/* Global Resume Lightbox Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Main Interface Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Floating Navigation Dock */}
        <Navbar activeSection={activeSection} onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Hero — Cinematic Intro with Resume Trigger */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 4. About Me — 01 / User Profile */}
        <About />

        {/* 5. Developer Terminal Section */}
        <TerminalSection />

        {/* 6. Skills — Interactive Technology Ecosystem */}
        <SkillsEcosystem />

        {/* 7. Project Showcase — 02 / Project Database */}
        <ProjectDatabase />

        {/* 8. Experience / Internship Journey — 03 / Experience Log */}
        <ExperienceTimeline />

        {/* 9. Certificates — 04 / Certification Archive */}
        <CertificateArchive />

        {/* 10. GitHub / Code Repository — 05 / Code Repository */}
        <GithubSection />

        {/* 11. Resume Section */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 12. Beyond The Code / Personal Touch */}
        <BeyondCode />

        {/* 13. Contact — Establish Connection */}
        <ContactSection />

        {/* 14. Final Cinematic Ending Footer */}
        <CinematicFooter />

      </div>
    </div>
  );
}
