import React from 'react';
import { Code, Layout, Server, Brain, Database, Wrench, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
      skills: ['C', 'Python', 'Java', 'JavaScript'],
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      color: 'from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/30',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30',
      skills: ['Node.js', 'REST APIs'],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
      skills: ['SQL', 'MySQL'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-sky-500/20 to-cyan-500/20 text-sky-400 border-sky-500/30',
      skills: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Categorized technical stack spanning programming languages, full-stack web technologies, machine learning frameworks, and developer tooling.
          </p>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.01] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} border flex items-center justify-center shadow-inner`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/40 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 light:text-indigo-600" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
