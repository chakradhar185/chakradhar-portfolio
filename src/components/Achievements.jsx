import React from 'react';
import { Trophy, Award, Youtube, ExternalLink, Sparkles } from 'lucide-react';

const Achievements = () => {
  const achievementsList = [
    {
      title: 'Smart India Hackathon (SIH)',
      badge: 'Internal Round Selected',
      event: 'Smart India Hackathon — KL University Selection',
      icon: Trophy,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
      description:
        'Participated in the Smart India Hackathon and successfully selected in the internal round at KL University for demonstrating innovative problem-solving and software execution.',
      linkText: null,
      linkUrl: null,
    },
    {
      title: 'Razorpay Buildathon',
      badge: 'Project Presentation',
      event: 'Razorpay Buildathon Hackathon',
      icon: Award,
      color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
      description:
        'Participated in the Razorpay Buildathon, developing and presenting a functional web application designed for practical solution building.',
      linkText: 'Watch YouTube Demonstration',
      linkUrl: 'https://youtu.be/Csm6LCAGPok?si=cAdkspac7YdbZiQ5',
      isVideo: true,
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <Trophy className="w-3.5 h-3.5" />
            <span>Recognitions & Activities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Hackathons & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Demonstrating active project development, hackathon participation, and technical problem-solving capabilities.
          </p>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center shadow-inner`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4">
                    {item.event}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.linkUrl && (
                  <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md transition-all duration-200"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>{item.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
