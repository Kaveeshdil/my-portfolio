import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "HAYROO E-Commerce",
      description: "Full-stack MERN platform featuring JWT authentication, product management, and automated CI/CD pipelines.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/kaveeshdil", 
      youtube: "#", 
      featured: true 
    },
    {
      title: "AI Infographic Generator",
      description: "Python-based application using NLP (SinhalaBERTO) to generate agricultural infographics from text.",
      tech: ["Python", "NLP", "Matplotlib"],
      github: "https://github.com/kaveeshdil", 
      youtube: "#",
      featured: true 
    },
    {
      title: "UniCabs HUB",
      description: "Ride-sharing mobile app built with Flutter and Firebase to promote energy saving.",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/kaveeshdil",
      youtube: "#",
      featured: false 
    },
    {
      title: "Accommodation Management",
      description: "Web application using PHP and MySQL to streamline student housing assignments.",
      tech: ["PHP", "MySQL", "Tailwind"],
      github: "https://github.com/kaveeshdil",
      youtube: "#",
      featured: false 
    },
    {
      title: "Library Management App",
      description: "Mobile application for library resource management with Firebase backend.",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/kaveeshdil",
      youtube: "#",
      featured: false 
    },
    {
      title: "The Foodie Zone",
      description: "C#/.NET based pre-order system to manage hostel cafeteria inventory.",
      tech: ["C#", ".NET", "MySQL"],
      github: "https://github.com/kaveeshdil",
      youtube: "https://www.youtube.com/watch?v=ftmbs-iPQfw",
      featured: false 
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-tight uppercase inline-block relative">
            My <span className="text-blue-500">Projects</span>
            <div className="h-1 w-1/2 bg-blue-500 absolute -bottom-2 left-1/4 rounded-full"></div>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-2xl border transition-all duration-500 flex flex-col justify-between h-full ${
                project.featured 
                ? "bg-slate-800 border-blue-500/40 shadow-2xl shadow-blue-500/10 scale-[1.02]" 
                : "bg-slate-800/40 border-slate-700/50 hover:border-blue-500/30 hover:-translate-y-1"
              }`}
            >
              <div className="relative z-10">
                {/* Top Row: Folder Icon and External Links */}
                <div className="flex justify-between items-start mb-6">
                  {/* Folder Icon SVG */}
                  <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    {/* GitHub SVG */}
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    {/* YouTube SVG */}
                    {project.youtube !== "#" && (
                      <a href={project.youtube} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s7.12 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                      </a>
                    )}
                    {/* External Link SVG */}
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold uppercase px-2 py-1 bg-blue-500/5 text-blue-400 rounded border border-blue-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;