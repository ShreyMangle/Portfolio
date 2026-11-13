import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onDownload }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-[#15112d] border border-violet-200 dark:border-violet-700/60 shadow-2xl overflow-hidden flex flex-col h-[88vh] max-h-[850px] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 border-b border-violet-100 dark:border-violet-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-600 text-white shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Shrey Vilas Mangle — Resume
              </h3>
              <p className="text-xs text-violet-600 dark:text-violet-300">
                AI Developer Intern &amp; Computer Engineering (2023–2027)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-violet-700 dark:text-violet-200 bg-violet-100/70 dark:bg-violet-900/50 hover:bg-violet-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>
            <a
              href={personalInfo.resumePath}
              download="Shrey_Mangle_Resume.pdf"
              onClick={onDownload}
              className="violet-glow-button flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-violet-100/50 dark:hover:bg-violet-900/40"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Viewer */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-[#0c0919] relative">
          <iframe
            src={`${personalInfo.resumePath}#toolbar=1`}
            title="Shrey Mangle Resume PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-3 bg-violet-50/70 dark:bg-[#120e26] border-t border-violet-100 dark:border-violet-900/40 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-violet-300">
          <span>Need a tailored version or reference? Reach out at shreymangle346@gmail.com</span>
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            +91 9028525745 • Pune, India
          </span>
        </div>
      </div>
    </div>
  );
}

