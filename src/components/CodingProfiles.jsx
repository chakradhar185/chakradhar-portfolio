import React from 'react';
import { Code2, Github, Linkedin, Terminal, ExternalLink, CheckCircle2, Flame } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      username: '2500031707',
      stat: '100+ Solved',
      detail: 'Data Structures & Algorithms Problem Solving',
      url: 'https://leetcode.com/u/2500031707/',
      icon: Code2,
      color: 'hover:border-amber-500/50 hover:shadow-amber-500/10 text-amber-400',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
    {
      name: 'GitHub',
      username: 'chakradhar185',
      stat: 'Code Repositories',
      detail: 'Open Source Projects & Academic Codebases',
      url: 'https://github.com/chakradhar185',
      icon: Github,
      color: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10 text-cyan-400',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    },
    {
      name: 'LinkedIn',
      username: 'chakradhar-mandadapu',
      stat: 'Professional Profile',
      detail: 'Student Networking & Project Updates',
      url: 'https://www.linkedin.com/in/chakradhar-mandadapu-639671370',
      icon: Linkedin,
      color: 'hover:border-sky-500/50 hover:shadow-sky-500/10 text-sky-400',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    },
    {
      name: 'HackerRank',
      username: 'h25000317071',
      stat: 'Coding Challenges',
      detail: 'Language Proficiency & Problem Solving',
      url: 'https://www.hackerrank.com/profile/h25000317071',
      icon: Terminal,
      color: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10 text-emerald-400',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
  ];

  return (
    <section id="coding-profiles" className="py-20 relative overflow-hidden bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Competitive Programming</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Problem Solving & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Coding Profiles</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Active problem solving practice on LeetCode and GeeksforGeeks, paired with verified developer accounts.
          </p>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Highlights Banner */}
        <div className="max-w-4xl mx-auto mb-12 glass-card p-6 rounded-2xl border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                100+ LeetCode Problems Solved
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                Regular practice on arrays, strings, dynamic programming, and algorithmic data structures alongside GeeksforGeeks practice.
              </p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/2500031707/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-md transition-all duration-200"
          >
            <span>View LeetCode Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => {
            const IconComponent = profile.icon;
            return (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 ${profile.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-200 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${profile.badgeColor}`}>
                      {profile.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1 group-hover:text-cyan-400 transition-colors">
                    {profile.name}
                  </h3>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3 font-mono">
                    @{profile.username}
                  </p>

                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                    {profile.detail}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <span>Open Profile</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
