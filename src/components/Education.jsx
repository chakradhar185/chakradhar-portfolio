import React from 'react';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      institution: 'KL University',
      degree: 'B.Tech — Computer Science & Engineering',
      specialization: 'Artificial Intelligence & Machine Learning',
      status: 'Current Student (2nd Year)',
      timeline: '2023 – Present',
      scoreLabel: 'CGPA',
      scoreValue: '8.2',
      isCurrent: true,
      description:
        'Focusing on Core Computer Science, Artificial Intelligence, Machine Learning algorithms, Data Structures, and Software Development practices.',
    },
    {
      institution: 'Oxford VIT',
      degree: 'Intermediate / Higher Secondary',
      specialization: 'Mathematics, Physics & Chemistry (MPC)',
      timeline: '2021 – 2023',
      scoreLabel: 'Overall Score',
      scoreValue: '93.9%',
      isCurrent: false,
      description:
        'Completed higher secondary education with distinction, focusing on analytical mathematics and physical sciences.',
    },
    {
      institution: "St. Joseph's High School",
      degree: 'Secondary School Certificate (SSC)',
      specialization: 'Class 10 General Studies',
      timeline: 'Completed 2021',
      scoreLabel: 'Overall Score',
      scoreValue: '94%',
      isCurrent: false,
      description:
        'Completed secondary education with high academic achievement and foundational STEM coursework.',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-12">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 ${
                  edu.isCurrent
                    ? 'bg-cyan-500 border-slate-950 dark:border-slate-950 light:border-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-700 dark:bg-slate-700 light:bg-slate-400 border-slate-950 dark:border-slate-950 light:border-white'
                }`}
              ></div>

              {/* Education Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <School className="w-5 h-5 text-cyan-400 light:text-indigo-600" />
                      <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {edu.institution}
                      </h3>
                    </div>
                    <p className="text-base font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-700 mt-1">
                      {edu.degree}
                    </p>
                    {edu.specialization && (
                      <p className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                        Specialization: {edu.specialization}
                      </p>
                    )}
                  </div>

                  {/* Score Highlight Badge */}
                  <div className="flex flex-col items-start sm:items-end">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-indigo-50 border border-cyan-500/30 dark:border-cyan-500/30 light:border-indigo-200">
                      <Award className="w-4 h-4 text-cyan-400 light:text-indigo-600" />
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {edu.scoreLabel}:
                      </span>
                      <span className="text-sm font-extrabold text-cyan-400 dark:text-cyan-400 light:text-indigo-700">
                        {edu.scoreValue}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500 light:text-slate-500 mt-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.timeline}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-4">
                  {edu.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
