import React from 'react';

const Skills = () => {
  
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C#", "Dart", "PHP", "JavaScript"]
    },
    {
      title: "Web & Frameworks",
      skills: ["React", "Flutter", ".NET", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "GitHub Actions", "Figma", "AWS (Learning)"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 px-6 border-t border-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-black text-white mb-16 text-center tracking-tight uppercase">
          Technical <span className="text-blue-500">Expertise</span>
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
              
             
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-900 text-slate-300 text-sm font-medium rounded-xl border border-slate-700 hover:border-blue-500/50 hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;