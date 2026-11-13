import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Layers,
  Database,
  ArrowRight,
  TrendingUp,
  Filter,
  CheckCircle,
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack & AI', 'AI & Speech', 'AI Agents', 'Machine Learning'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const flagshipProject = projects.find((p) => p.id === 'first-fly');

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Platforms &amp; Autonomous Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="violet-gradient-text">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-violet-200/80">
            From large-scale admission ETL engines and voice AI architectures to multi-agent debate systems.
          </p>
        </div>

        {/* FLAGSHIP SPOTLIGHT: First-Fly */}
        {flagshipProject && (
          <div className="mb-16 rounded-3xl bg-gradient-to-br from-violet-600/10 via-purple-500/5 to-indigo-600/10 border-2 border-violet-300/80 dark:border-violet-700/60 p-6 sm:p-10 shadow-xl shadow-violet-500/5 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-44 h-44 bg-violet-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-600 text-white shadow-xs">
                    ⭐ Flagship Platform
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300">
                    246,000+ Real Records
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    Production Deployed
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {flagshipProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-violet-200/90 leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3">
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-[#1b1538]/80 border border-violet-200 dark:border-violet-800">
                    <div className="text-xl font-extrabold text-violet-700 dark:text-violet-300">
                      246K+
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-violet-400 font-medium">
                      Cutoff Records
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-[#1b1538]/80 border border-violet-200 dark:border-violet-800">
                    <div className="text-xl font-extrabold text-violet-700 dark:text-violet-300">
                      408
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-violet-400 font-medium">
                      Engg Colleges
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-[#1b1538]/80 border border-violet-200 dark:border-violet-800">
                    <div className="text-xl font-extrabold text-violet-700 dark:text-violet-300">
                      117
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-violet-400 font-medium">
                      Branches Mapped
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-[#1b1538]/80 border border-violet-200 dark:border-violet-800">
                    <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      120K+
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-violet-400 font-medium">
                      Forecast Projections
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flagshipProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-violet-100/70 dark:bg-violet-900/40 text-violet-800 dark:text-violet-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="violet-glow-button flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-md shadow-violet-500/30"
                  >
                    <span>View Architecture Deep Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={flagshipProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-violet-200 bg-white dark:bg-violet-900/40 hover:bg-violet-50 dark:hover:bg-violet-800/60 border border-violet-200 dark:border-violet-700 transition-colors"
                  >
                    <Github className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Architecture Blueprint Card */}
              <div className="lg:col-span-5">
                <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#120e26] border border-violet-200 dark:border-violet-800/80 shadow-lg space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-violet-100 dark:border-violet-900/50 text-[11px] text-slate-400 dark:text-violet-400">
                    <span>first_fly_pipeline.py</span>
                    <span className="text-emerald-500 flex items-center gap-1 font-sans font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Active Engine
                    </span>
                  </div>

                  <div className="space-y-2 text-slate-700 dark:text-violet-200">
                    <div className="p-2.5 rounded-lg bg-violet-50 dark:bg-violet-950/60 border border-violet-200/60 dark:border-violet-800/40">
                      <div className="font-semibold text-violet-700 dark:text-violet-300 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> 1. Ingestion &amp; ETL Engine
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-violet-400 mt-1">
                        PDF extraction → Regex cleaning → 95+ reservation categories normalized
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-violet-50 dark:bg-violet-950/60 border border-violet-200/60 dark:border-violet-800/40">
                      <div className="font-semibold text-violet-700 dark:text-violet-300 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5" /> 2. Fast Storage &amp; Forecast Model
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-violet-400 mt-1">
                        SQLite + SQLAlchemy ORM → Scikit-learn trend regressor
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-violet-50 dark:bg-violet-950/60 border border-violet-200/60 dark:border-violet-800/40">
                      <div className="font-semibold text-violet-700 dark:text-violet-300 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" /> 3. Tier Recommendation Matrix
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-violet-400 mt-1">
                        Rankings categorized into:
                        <div className="flex gap-2 mt-1">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                            SAFE
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-bold">
                            MODERATE
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold">
                            DREAM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25 scale-105'
                  : 'bg-white/80 dark:bg-[#16122a] text-slate-600 dark:text-violet-300 hover:bg-violet-100/70 dark:hover:bg-violet-900/40 border border-violet-200 dark:border-violet-800/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div>
                {/* Card Top: Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-violet-400 uppercase tracking-wide">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="mt-2 text-xs font-medium text-violet-700 dark:text-violet-300">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 dark:text-violet-200/80 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & Links */}
              <div className="mt-6 pt-4 border-t border-violet-100 dark:border-violet-900/40">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-400 dark:text-violet-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200 flex items-center gap-1 transition-colors"
                  >
                    <span>Deep Dive Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-violet-100/70 dark:bg-violet-900/50 hover:bg-violet-200 text-violet-700 dark:text-violet-300 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
