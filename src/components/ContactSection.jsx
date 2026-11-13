import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast('Email copied to clipboard!');
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#8b5cf6', '#a78bfa'],
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    onShowToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in your name, email, and message.', 'info');
      return;
    }

    setIsSubmitting(true);

    // Formatted mailto link
    const mailSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Shrey,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#7c3aed', '#8b5cf6', '#6366f1', '#10b981'],
    });

    onShowToast('Launching email client with your message...');

    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something <span className="violet-gradient-text">Exceptional</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-violet-200/80">
            Open to full-time roles, software engineering internships, AI research partnerships, and technical consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:border-violet-400 dark:hover:border-violet-600 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                  <Mail className="w-5 h-5" />
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-white transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-semibold text-slate-400 dark:text-violet-400 uppercase tracking-wider">
                Direct Email
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors mt-0.5 block break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:border-violet-400 dark:hover:border-violet-600 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                  <Phone className="w-5 h-5" />
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-white transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-semibold text-slate-400 dark:text-violet-400 uppercase tracking-wider">
                Phone &amp; WhatsApp
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors mt-0.5 block"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:border-violet-400 dark:hover:border-violet-600 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-4">
                  <div className="text-xs text-slate-400 dark:text-violet-400 uppercase font-semibold">
                    Professional
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    LinkedIn Profile
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:border-violet-400 dark:hover:border-violet-600 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                    <Github className="w-4 h-4" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-4">
                  <div className="text-xs text-slate-400 dark:text-violet-400 uppercase font-semibold">
                    Codebase
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    GitHub Profile
                  </div>
                </div>
              </a>
            </div>

            {/* Location Banner */}
            <div className="p-4 rounded-2xl bg-violet-50/80 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 flex items-center gap-3 text-xs text-slate-700 dark:text-violet-300">
              <MapPin className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
              <span>
                Based in <strong className="font-semibold text-slate-900 dark:text-white">Pune, Maharashtra, India</strong>. Ready for relocation &amp; remote global teams.
              </span>
            </div>
          </div>

          {/* Right Column: Direct Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-xl shadow-violet-500/5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-violet-300/80 mb-6">
                Fill this out and it will launch directly in your default email client with zero friction.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-violet-300 mb-1.5">
                      Your Name <span className="text-violet-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800/70 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-violet-300 mb-1.5">
                      Your Email <span className="text-violet-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800/70 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-violet-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800/70 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-violet-300 mb-1.5">
                    Message <span className="text-violet-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Shrey, I was impressed by your First-Fly architecture and ATG World experience..."
                    className="w-full px-4 py-2.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800/70 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="violet-glow-button w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white shadow-md shadow-violet-500/30 transition-all disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message to Shrey'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
