import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  Mail,
  Moon,
  Sun,
  Terminal,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, setTheme, onOpenResume, onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-[#0d0b18]/85 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(124,58,237,0.12)] border-b border-violet-100 dark:border-violet-900/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 shadow-md shadow-violet-500/25 text-white font-bold text-lg tracking-wider">
            SM
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-[#0d0b18]"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-violet-100 text-base leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Shrey Mangle
            </span>
            <span className="text-[11px] font-medium text-violet-600/80 dark:text-violet-400/80 tracking-wide uppercase">
              AI &amp; Backend Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-violet-50/70 dark:bg-violet-950/40 border border-violet-200/60 dark:border-violet-800/40 shadow-xs backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-violet-200 hover:text-violet-600 dark:hover:text-white hover:bg-white dark:hover:bg-violet-900/60 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* CLI Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            title="Open Interactive Engineer CLI"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-900/40 hover:bg-violet-200/80 dark:hover:bg-violet-800/60 rounded-lg transition-colors border border-violet-200 dark:border-violet-700/50"
          >
            <Terminal className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span className="hidden lg:inline">CLI</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Violet Theme"
            className="p-2 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-white bg-violet-100/70 dark:bg-violet-900/40 hover:bg-violet-200/70 dark:hover:bg-violet-800/50 rounded-lg transition-colors border border-violet-200 dark:border-violet-700/50"
            title={theme === 'light' ? 'Switch to Amethyst Dark' : 'Switch to Lavender Light'}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-violet-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-300" />
            )}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-200 bg-white dark:bg-violet-950/60 hover:bg-violet-50 dark:hover:bg-violet-900/80 border border-violet-300 dark:border-violet-700 rounded-lg shadow-2xs transition-all hover:scale-[1.02]"
          >
            <FileText className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Resume</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-lg shadow-sm shadow-violet-500/30 transition-all hover:shadow-violet-500/50 hover:scale-[1.02]"
          >
            <span>Let's Connect</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-900/50 rounded-lg"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-200 hover:bg-violet-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-white dark:bg-[#120e24] border-b border-violet-200 dark:border-violet-900/60 shadow-xl transition-all">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-violet-200 hover:bg-violet-50 dark:hover:bg-violet-900/40 hover:text-violet-700"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-violet-100 dark:border-violet-900/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-200 border border-violet-200 dark:border-violet-700"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-violet-100 dark:bg-violet-900/60 text-violet-800 dark:text-violet-200"
              >
                <Terminal className="w-4 h-4" />
                <span>Interactive Terminal</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
