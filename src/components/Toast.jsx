import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#1a1435]/95 backdrop-blur-md shadow-2xl border border-violet-200 dark:border-violet-700/60 text-slate-800 dark:text-violet-100 transition-all transform animate-in fade-in slide-in-from-bottom-4">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-violet-500 shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

