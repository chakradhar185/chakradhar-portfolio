import React from 'react';
import { Github, Linkedin, Code, Terminal, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/chakradhar185', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chakradhar-mandadapu-639671370', icon: Linkedin },
    { name: 'LeetCode', url: 'https://leetcode.com/u/2500031707/', icon: Code },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/h25000317071', icon: Terminal },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 dark:bg-slate-950 dark:border-slate-900 light:bg-slate-100 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900 dark:border-slate-900 light:border-slate-200">
          
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              M.S.S. CHAKRADHAR
            </h3>
            <p className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
              B.Tech CSE | AI & ML Student • KL University
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 italic">
              "Building, learning and exploring intelligent technology."
            </p>
          </div>

          {/* Quick Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 dark:text-slate-500 light:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 M.S.S. CHAKRADHAR. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with React, Vite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
