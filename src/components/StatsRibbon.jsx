import React from 'react';
import { Database, TrendingUp, Landmark, Briefcase } from 'lucide-react';
import { keyStats } from '../data/portfolioData';

export default function StatsRibbon() {
  const icons = [Database, TrendingUp, Landmark, Briefcase];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyStats.map((stat, idx) => {
            const IconComponent = icons[idx] || Database;
            return (
              <div
                key={stat.label}
                className="group p-5 rounded-2xl bg-white/70 dark:bg-[#15112d]/70 backdrop-blur-md border border-violet-200/80 dark:border-violet-800/40 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-900/40 px-2 py-0.5 rounded-md">
                    Verified
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  <span className="violet-gradient-text">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-violet-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-violet-400/80 mt-0.5 line-clamp-1">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

