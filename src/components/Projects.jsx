import React from 'react';
import { FolderGit2, ExternalLink, Github, Youtube, Sparkles, Sprout, Cpu, Code2, Layers } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      id: 'kisanai',
      title: 'KisanAI',
      category: 'AI / Full-Stack / Agriculture Technology',
      isFeatured: true,
      icon: Sprout,
      description:
        'KisanAI is an agriculture-focused full-stack platform designed to provide farmers with practical digital tools and intelligent insights to support better agricultural decision-making.',
      highlights: [
        'AI/ML Insights',
        'Full-Stack Development',
        'Agriculture Technology',
        'Real-World Problem Solving',
      ],
      technologies: ['Full-Stack', 'AI/ML', 'Python', 'React', 'Node.js'],
      githubUrl: null, // Ready for URL when provided
      demoUrl: null, // Ready for URL when provided
    },
    {
      id: 'razorpay-buildathon',
      title: 'Razorpay Buildathon Project',
      category: 'Web Development / Hackathon Project',
      isFeatured: true,
      icon: Sparkles,
      description:
        'Built and presented a web-based project as part of the Razorpay Buildathon, focusing on practical web development and solution building.',
      highlights: [
        'Razorpay Buildathon Event',
        'Web Solution Design',
        'Practical Product Building',
        'Video Presentation',
      ],
      technologies: ['Web Development', 'Full-Stack', 'React', 'API Integration'],
      youtubeUrl: 'https://youtu.be/Csm6LCAGPok?si=cAdkspac7YdbZiQ5',
    },
  ];

  const academicProjects = [
    {
      id: 'ctcms',
      title: 'CTCMS — Course Timetable & Management System',
      category: 'Academic System / Python',
      icon: Layers,
      description:
        'A Python-based Course Timetable and Management System designed to organize and manage academic timetable information efficiently.',
      technologies: ['Python', 'Data Structures', 'Timetable Management'],
      githubUrl: 'https://github.com/dsrisarvagna-sudo/CTCMS.git',
    },
    {
      id: 'anagram-search',
      title: 'Anagram Search',
      category: 'Systems & Algorithms / C',
      icon: Code2,
      description:
        'A C-based string processing project focused on identifying and searching anagrams through character comparison and algorithmic string manipulation.',
      technologies: ['C Language', 'String Manipulation', 'Algorithms'],
    },
    {
      id: 'sorting-algorithms-study',
      title: 'Comparative Study on Sorting Algorithms',
      category: 'Computer Science / Algorithmic Efficiency',
      icon: Cpu,
      description:
        'An algorithm-focused study and implementation comparing fundamental sorting techniques including Bubble Sort, Quick Sort and Merge Sort to understand their approaches, efficiency and performance characteristics.',
      technologies: ['C Language', 'Data Structures', 'Sorting Algorithms'],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Works</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Featured & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Academic Projects</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Showcasing real-world AI & full-stack platforms alongside foundational software engineering & algorithmic implementations.
          </p>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* 1. FEATURED PROJECTS SUB-SECTION */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Featured Flagship Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-cyan-500/30 dark:border-cyan-500/30 light:border-indigo-300 shadow-xl group hover:border-cyan-400/60 transition-all duration-300"
                >
                  {/* Background gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-bl-full pointer-events-none"></div>

                  <div>
                    {/* Top Badge & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Featured Project</span>
                      </span>
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5 text-cyan-400 light:text-indigo-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {project.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && (
                      <div className="mb-6 space-y-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">
                          Key Focus Areas:
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack & Action Links */}
                  <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md transition-all duration-200"
                        >
                          <Youtube className="w-4 h-4" />
                          <span>Watch Demo</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-cyan-400 transition-all duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. ACADEMIC & CORE PROJECTS SUB-SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Academic & Core Systems Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-200 flex items-center justify-center">
                        <IconComp className="w-4 h-4 text-cyan-400 light:text-indigo-600" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 hover:underline"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
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

export default Projects;
