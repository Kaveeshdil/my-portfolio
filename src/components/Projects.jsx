import React from 'react';
import { Github, Youtube, ExternalLink } from 'lucide-react'; 

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
    <section id="projects" className="py-24 bg-slate-900 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-black text-white mb-16 text-center tracking-tight uppercase">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-500 group ${
              project.featured ? "bg-slate-800 border-blue-500/30 scale-105 shadow-xl shadow-blue-500/10" : "bg-slate-800/40 border-slate-700/50"
            }`}>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase px-2.5 py-1 bg-slate-900 text-blue-400 rounded-md border border-blue-500/10">{t}</span>
                  ))}
                </div>
              </div>

             
              <div className="flex gap-6 border-t border-slate-700/50 pt-6">
                <a href={project.github} target="_blank" rel="noreferrer" title="View Code"
                   className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
                   <Github size={20} />
                </a>
                <a href={project.youtube} target="_blank" rel="noreferrer" title="Watch Demo"
                   className="text-slate-400 hover:text-red-500 transition-all transform hover:scale-110">
                   <Youtube size={22} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-110">
                   <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;