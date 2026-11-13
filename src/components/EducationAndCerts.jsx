import React from 'react';
import {
  GraduationCap,
  Award,
  Sparkles,
  BookOpen,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function EducationAndCerts() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold w-fit mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Formal <span className="violet-gradient-text">Education</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-violet-200/80">
              Rigorous computer engineering coursework focused on systems, algorithms, and distributed computing.
            </p>

            <div className="space-y-6 mt-6">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-6 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-violet-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-600" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mt-0.5">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-violet-400 mt-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-violet-600" />
                    <span>{edu.location}</span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-violet-400 uppercase tracking-wider block mb-2">
                      Core Subjects &amp; Labs
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-900/40"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold w-fit mb-2">
              <Award className="w-4 h-4" />
              <span>Specialized Credentials</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications &amp; <span className="violet-gradient-text">Bootcamps</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-violet-200/80">
              Targeted industry training in RAG architectures, machine learning, and high-performance database design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                        <Award className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/50 px-2 py-0.5 rounded">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-violet-300/80 mt-2 leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-violet-100 dark:border-violet-900/40 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Verified Completion
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

