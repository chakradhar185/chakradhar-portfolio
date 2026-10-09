import React from 'react';
import { Award, BookOpen, Code2, Target, Sparkles, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      label: 'Academic Performance',
      value: '8.2 CGPA',
      subtext: 'KL University',
      icon: GraduationCap,
      color: 'from-cyan-500/20 to-indigo-500/20 border-cyan-500/30 text-cyan-400',
    },
    {
      label: 'Problem Solving',
      value: '100+ Solved',
      subtext: 'LeetCode & GFG Practice',
      icon: Code2,
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    },
    {
      label: 'Hackathon Selection',
      value: 'SIH Internal',
      subtext: 'Smart India Hackathon',
      icon: Award,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    },
    {
      label: 'Buildathon Participant',
      value: 'Razorpay',
      subtext: 'Web Solution Demo',
      icon: Sparkles,
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Box & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400 light:text-indigo-600" />
                <span>AI & ML Student & Aspiring Developer</span>
              </h3>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
                <p>
                  I am a second-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at KL University.
                </p>
                <p>
                  I am interested in Agentic AI, AI/ML and full-stack development, and I enjoy turning ideas into practical software projects.
                </p>
                <p>
                  I am continuously improving my programming, problem-solving, machine learning and software development skills through academic projects, hackathons, coding practice and independent learning.
                </p>
              </div>
            </div>

            {/* Career Goal Callout Box */}
            <div className="p-5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-indigo-50/70 border border-slate-800/80 dark:border-slate-800/80 light:border-indigo-100 space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-cyan-400 dark:text-cyan-400 light:text-indigo-700 block">
                Career Goal
              </span>
              <p className="text-sm italic text-slate-300 dark:text-slate-300 light:text-slate-800 leading-normal">
                "I aim to become an AI-focused full-stack developer, building intelligent and scalable applications that solve real-world problems. I am particularly interested in Agentic AI and modern software systems, while continuously strengthening my skills in machine learning, backend development and problem solving."
              </p>
            </div>
          </div>

          {/* Stats / Key Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-4`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-500 mt-0.5">
                      {item.subtext}
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
};

export default About;
