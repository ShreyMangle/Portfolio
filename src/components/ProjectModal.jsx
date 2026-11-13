import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, Layers } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#15112d] border border-violet-200 dark:border-violet-700/60 shadow-2xl overflow-hidden my-8 transform animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="relative px-6 py-6 sm:px-8 sm:py-7 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 border-b border-violet-100 dark:border-violet-900/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 mb-2">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-violet-700 dark:text-violet-300 mt-1 font-medium">
                {project.stats}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-white/80 dark:bg-violet-900/40 border border-violet-200 dark:border-violet-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-violet-400 uppercase tracking-wider mb-2">
              System Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-violet-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          {project.features && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 dark:text-violet-400 uppercase tracking-wider mb-3">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-violet-200/90">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-violet-400 uppercase tracking-wider mb-2.5">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-200 border border-violet-200 dark:border-violet-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 bg-violet-50/60 dark:bg-[#100d23] border-t border-violet-100 dark:border-violet-900/40 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-violet-400">
            Open-source architecture by Shrey Mangle
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
            >
              Close
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="violet-glow-button flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-md shadow-violet-500/30"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Code on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
