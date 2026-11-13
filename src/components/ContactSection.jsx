import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
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
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast?.('Email copied to clipboard: ' + personalInfo.email);
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
    onShowToast?.('Phone number copied to clipboard: ' + personalInfo.phone);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast?.('Please fill out your name, email, and message.', 'info');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/shreymangle346@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent directly to Shrey.');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#7c3aed', '#8b5cf6', '#10b981', '#3b82f6'],
        });
        onShowToast?.('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.includes('Activation')) {
        // First-time FormSubmit activation notice
        setStatus('success');
        setStatusMessage(
          'Your message is being delivered! (Note: If this is the initial submission, check shreymangle346@gmail.com for the 1-click FormSubmit activation link).'
        );
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#8b5cf6', '#10b981'],
        });
        onShowToast?.('Message dispatched!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact Form error:', err);
      setStatus('error');
      setStatusMessage(
        'Could not dispatch directly via server. You can click below to send via your email client.'
      );
      onShowToast?.('Submission issue — fallback available.', 'info');
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Hi Shrey,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
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
          </div>

          {/* Right Column: Direct Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-xl shadow-violet-500/5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-violet-300/80 mb-6">
                Your message is sent directly to Shrey's inbox. No external mail client required.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-200 mt-1 max-w-md mx-auto">
                      {statusMessage}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setStatusMessage('');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
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

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{statusMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="underline font-semibold shrink-0"
                      >
                        Open Mail App
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="violet-glow-button w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white shadow-md shadow-violet-500/30 transition-all disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
