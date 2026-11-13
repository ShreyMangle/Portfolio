import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRibbon from './components/StatsRibbon';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import EducationAndCerts from './components/EducationAndCerts';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import InteractiveCli from './components/InteractiveCli';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  // Global Ctrl+K / Cmd+K shortcut for the terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fcfaff] dark:bg-[#0d0b18] text-slate-900 dark:text-violet-100 transition-colors duration-300 relative selection:bg-violet-500 selection:text-white">
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 bg-violet-dots pointer-events-none opacity-40 z-0"></div>

      {/* Main Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />

        <StatsRibbon />

        <ExperienceSection />

        <ProjectsSection />

        <SkillsMatrix />

        <EducationAndCerts />

        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownload={() => showToast('Resume download started!')}
      />

      <InteractiveCli
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
        onShowToast={showToast}
      />

      {/* Floating CLI Pill trigger for quick discovery */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 dark:bg-[#191336]/90 border border-violet-200 dark:border-violet-700/60 shadow-lg hover:shadow-violet-500/20 text-xs font-semibold text-slate-700 dark:text-violet-200 hover:text-violet-600 transition-all hover:scale-105 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></span>
          <span>CLI Terminal</span>
          <kbd className="px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-900/60 text-[10px] text-violet-700 dark:text-violet-300 font-mono">
            Ctrl+K
          </kbd>
        </button>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
}
