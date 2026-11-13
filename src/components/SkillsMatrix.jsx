import React, { useState } from 'react';
import {
  Server,
  Brain,
  Layout,
  Database,
  Cpu,
  Wrench,
  Search,
  Sparkles,
  Check,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsMatrix() {
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Server,
    Brain,
    Layout,
    Database,
    Cpu,
    Wrench,
  };

  const filteredCategories = skillCategories
    .map((category) => {
      const filteredSkills = category.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter((category) => category.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery &amp; Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; <span className="violet-gradient-text">Systems Competence</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-violet-200/80">
            A comprehensive overview of programming languages, machine learning frameworks, databases, and backend toolsets.
          </p>
        </div>

        {/* Live Filter / Search Input */}
        <div className="max-w-md mx-auto mb-14 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-violet-500 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. FastAPI, Python, RAG, React)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/80 dark:bg-[#141029]/80 backdrop-blur-md border border-violet-200 dark:border-violet-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-violet-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Server;
            return (
              <div
                key={cat.title}
                className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#15112d]/80 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/50 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-500/25">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-medium text-violet-600 dark:text-violet-400">
                      {cat.skills.length} core proficiencies
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-violet-50/60 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/40 hover:bg-violet-100/60 dark:hover:bg-violet-900/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-slate-900 dark:text-violet-100">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            skill.level === 'Expert'
                              ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                              : skill.level === 'Advanced'
                              ? 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300'
                              : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-violet-300/80 mt-1 leading-normal">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
