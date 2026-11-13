import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Download,
  Copy,
  Check,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Code2,
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  Database,
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [puneTime, setPuneTime] = useState('');

  // Update Pune, India IST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setPuneTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast('Email copied to clipboard: ' + personalInfo.email);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#7c3aed', '#6366f1', '#a855f7'],
    });
    onShowToast('Downloading Shrey Mangle Resume (PDF)...');
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient Violet Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-violet-400/20 via-purple-300/15 to-indigo-300/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-violet-400/15 dark:bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-64 -right-20 w-80 h-80 bg-fuchsia-400/15 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-800 dark:text-violet-300 text-xs font-semibold shadow-2xs mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for AI &amp; Software Engineering Roles (2026)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Hi, I'm <span className="violet-gradient-text">Shrey Mangle</span>.
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-violet-100">
                Architecting Production AI &amp; Scalable Backends.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-violet-200/80 leading-relaxed max-w-2xl">
              Computer Engineering undergraduate &amp; AI Developer Intern at{' '}
              <strong className="text-violet-700 dark:text-violet-300 font-semibold">
                ATG World / Banao Technologies
              </strong>{' '}
              (Dubai Techno Park, Remote) and previously at{' '}
              <strong className="text-violet-700 dark:text-violet-300 font-semibold">
                Springers Capital
              </strong>{' '}
              (Chicago Metropolitan Area, Remote). Creator of{' '}
              <strong className="text-violet-700 dark:text-violet-300 font-semibold">
                First-Fly
              </strong>{' '}
              (processing 246K+ admission records with predictive ML ranking). Passionate about
              building deterministic LLM pipelines, high-throughput REST APIs with FastAPI, and
              scalable full-stack platforms.
            </p>

            {/* Location & Time Indicators */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-violet-300/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                Pune, Maharashtra, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                Local Time: <span className="font-mono text-violet-700 dark:text-violet-300">{puneTime || 'IST'}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="violet-glow-button flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="Shrey_Mangle_Resume.pdf"
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-violet-800 dark:text-violet-100 bg-violet-100/90 dark:bg-violet-900/40 hover:bg-violet-200/90 dark:hover:bg-violet-800/60 border border-violet-300/80 dark:border-violet-700/60 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Resume (PDF)</span>
              </a>

              {/* View Resume in modal */}
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-violet-300 bg-white/80 dark:bg-violet-950/40 hover:bg-violet-50 dark:hover:bg-violet-900/40 border border-violet-200 dark:border-violet-800/70 transition-all"
                title="Preview Resume"
              >
                <ExternalLink className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Preview</span>
              </button>

              {/* Quick Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-violet-300 bg-white/80 dark:bg-violet-950/40 hover:bg-violet-50 dark:hover:bg-violet-900/40 border border-violet-200 dark:border-violet-800/70 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 pt-6 border-t border-violet-200/60 dark:border-violet-900/40 flex items-center gap-4 w-full">
              <span className="text-xs font-semibold text-slate-500 dark:text-violet-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-violet-200 bg-violet-50 dark:bg-violet-950/50 hover:bg-violet-100 dark:hover:bg-violet-900/60 border border-violet-200 dark:border-violet-800 transition-all hover:scale-105"
              >
                <Github className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-violet-200 bg-violet-50 dark:bg-violet-950/50 hover:bg-violet-100 dark:hover:bg-violet-900/60 border border-violet-200 dark:border-violet-800 transition-all hover:scale-105"
              >
                <Linkedin className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-violet-200 bg-violet-50 dark:bg-violet-950/50 hover:bg-violet-100 dark:hover:bg-violet-900/60 border border-violet-200 dark:border-violet-800 transition-all hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>shreymangle346@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Floating Architecture Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square">
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600 via-purple-500 to-indigo-600 p-[3px] shadow-2xl shadow-violet-500/30">
                <div className="w-full h-full rounded-[22px] bg-white dark:bg-[#130f26] p-3 flex flex-col items-center justify-center overflow-hidden relative">
                  {/* Avatar image */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-inner border border-violet-200 dark:border-violet-800">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://github.com/ShreyMangle.png';
                      }}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/60 via-transparent to-transparent opacity-40"></div>
                  </div>

                  {/* Profile caption card */}
                  <div className="mt-3 text-center">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Shrey Vilas Mangle
                    </h3>
                    <p className="text-xs text-violet-600 dark:text-violet-300 font-medium">
                      AI Developer Intern • B.E. Comp Engg
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: FastAPI & Backend */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#1a1435]/95 shadow-xl border border-violet-200 dark:border-violet-700/60 flex items-center gap-2.5 animate-float backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-violet-300 uppercase font-semibold">
                    Backend Core
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    FastAPI &amp; REST APIs
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: LLMs & LangGraph */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#1a1435]/95 shadow-xl border border-violet-200 dark:border-violet-700/60 flex items-center gap-2.5 animate-float-delayed backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center text-violet-600">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-violet-300 uppercase font-semibold">
                    AI Systems
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    LangGraph &amp; LLMs
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: First-Fly 246K records */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#1a1435]/95 shadow-xl border border-violet-200 dark:border-violet-700/60 flex items-center gap-2.5 animate-float backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-violet-300 uppercase font-semibold">
                    First-Fly Engine
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    246,000+ Records
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
