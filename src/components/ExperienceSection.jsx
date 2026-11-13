import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career &amp; Engineering Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="violet-gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-violet-200/80">
            Real-world industry work building AI pipelines, enterprise APIs, and production backend integrations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 hidden sm:block opacity-40"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[#130f26] border-2 border-violet-600 shadow-md shadow-violet-500/30 z-10">
                    <div className="w-3 h-3 rounded-full bg-violet-600 animate-pulse"></div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-0 sm:pl-8 md:pl-0">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/90 dark:border-violet-800/50 shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 ${
                        isEven ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            exp.badge === 'Current Role'
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {exp.badge}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>

                      {/* Date & Location */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-violet-300/80 mt-1.5 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-violet-600" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-violet-600" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5 text-sm text-slate-600 dark:text-violet-200/90 mb-5">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="pt-4 border-t border-violet-100 dark:border-violet-900/40 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-800/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
