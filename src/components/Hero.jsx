import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Code, Terminal, Cpu, Sparkles, UserCheck } from 'lucide-react';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/chakradhar185',
      color: 'hover:text-cyan-400 hover:border-cyan-500/50',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/chakradhar-mandadapu-639671370',
      color: 'hover:text-sky-400 hover:border-sky-500/50',
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/2500031707/',
      color: 'hover:text-amber-400 hover:border-amber-500/50',
    },
    {
      name: 'HackerRank',
      icon: Terminal,
      url: 'https://www.hackerrank.com/profile/h25000317071',
      color: 'hover:text-emerald-400 hover:border-emerald-500/50',
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/10 light:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status & Specialization Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-indigo-50/90 border border-slate-800 dark:border-slate-800 light:border-indigo-200 text-xs sm:text-sm font-medium text-cyan-400 dark:text-cyan-400 light:text-indigo-700 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold">B.Tech CSE | AI & ML Student</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">KL University (2nd Year)</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
                M.S.S. <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 light:from-indigo-600 light:via-cyan-600 light:to-indigo-800 bg-clip-text text-transparent">CHAKRADHAR</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                <span className="text-cyan-400 dark:text-cyan-400 light:text-indigo-600">AI & ML Specialization</span>
                <span>•</span>
                <span className="text-indigo-400 dark:text-indigo-400 light:text-cyan-700">Aspiring Agentic AI Developer</span>
              </div>
            </div>

            {/* Primary Hero Introduction (Exact Text) */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed max-w-2xl">
              "Hi, I'm Chakradhar — an AI & ML student passionate about building intelligent and scalable solutions."
            </p>

            {/* Short Supporting Line (Exact Text) */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
              Exploring Agentic AI, Machine Learning and Full-Stack Development while building practical solutions to real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/50 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-cyan-400 light:text-indigo-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-500 light:text-slate-400">
                Connect Profile:
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      title={item.name}
                      className={`p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-600 ${item.color} shadow-sm transition-all duration-200 transform hover:scale-105`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Outer Animated Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-subtle"></div>
              
              {/* Outer Decorative Tech Ring */}
              <div className="absolute -inset-4 rounded-full border border-cyan-500/20 dark:border-cyan-500/20 light:border-indigo-400/30 border-dashed animate-spin-slow pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full p-2 bg-slate-950 dark:bg-slate-950 light:bg-white border-2 border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="./profile.jpg"
                    alt="M.S.S. CHAKRADHAR - AI & ML Student"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Fallback Profile Presentation when profile.jpg isn't placed yet */
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 dark:from-slate-900 dark:to-slate-950 light:from-slate-100 light:to-indigo-50 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-white border border-cyan-500/40 flex items-center justify-center mb-3 shadow-inner">
                      <Cpu className="w-10 h-10 text-cyan-400 light:text-indigo-600" />
                    </div>
                    <span className="text-xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      M.S.S. CHAKRADHAR
                    </span>
                    <span className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mt-1">
                      B.Tech CSE (AI & ML)
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-2">
                      KL University • 2nd Year
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Tech Badges around Image */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-cyan-400 light:text-indigo-600 animate-float">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Agentic AI</span>
              </div>

              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-indigo-400 light:text-cyan-700 animate-float" style={{ animationDelay: '2s' }}>
                <Terminal className="w-3.5 h-3.5" />
                <span>Full-Stack & ML</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
