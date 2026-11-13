import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-violet-200/60 dark:border-violet-900/40 bg-white/40 dark:bg-[#0c0919]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-violet-100 dark:border-violet-900/40">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                SM
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                Shrey Vilas Mangle
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-violet-300/80 max-w-sm">
              AI Developer Intern &amp; Computer Engineering undergraduate architecting high-throughput backends and production LLM integrations.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-violet-300">
            <a href="#about" className="hover:text-violet-600 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-violet-600 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-violet-600 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-violet-600 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-violet-600 dark:hover:text-white transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-violet-600 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 hover:bg-violet-200 text-violet-700 dark:text-violet-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 hover:bg-violet-200 text-violet-700 dark:text-violet-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 hover:bg-violet-200 text-violet-700 dark:text-violet-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20 transition-all hover:scale-105 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-violet-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Shrey Vilas Mangle. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed in Violet Luxe with React 19 &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
