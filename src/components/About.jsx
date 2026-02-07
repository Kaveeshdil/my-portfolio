import React from 'react';
import { GraduationCap, Code2, Rocket, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6 border-t border-slate-800/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-black text-white mb-16 text-center tracking-tight uppercase">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Line A: Professional Bio using CV info */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              I am a <span className="text-white font-medium">BSc (Hons) Computer Science Graduate</span>  from the <span className="text-blue-400">University of Plymouth, UK</span>. 
              I specialize in building scalable, efficient web and mobile applications.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              With hands-on experience in <span className="text-blue-400">Full-Stack Development</span>, I am skilled in database management, CI/CD integration, and 
              transforming complex textual content into visually engaging digital solutions.
            </p>
            <div className="pt-4 border-t border-slate-800">
               <p className="text-slate-500 text-sm">
                 Motivated to build high-performance applications in collaborative environments.
               </p>
            </div>
          </div>

          {/* Line B: Highlighting Key CV Milestones */}
          <div className="grid grid-cols-1 gap-4">
            {/* Education Highlight */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 flex items-start gap-4 hover:border-blue-500/30 transition-all">
              <GraduationCap className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-white font-bold">Education</h4>
                <p className="text-slate-400 text-sm">Computer Science - University of Plymouth, UK.</p>
              </div>
            </div>

            {/* Tech Experience Highlight */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 flex items-start gap-4 hover:border-blue-500/30 transition-all">
              <Code2 className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-white font-bold">Core Skills</h4>
                <p className="text-slate-400 text-sm">MERN Stack, Flutter & Mobile Dev</p>
              </div>
            </div>

            {/* NLP/AI Interest Highlight */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 flex items-start gap-4 hover:border-blue-500/30 transition-all">
              <Rocket className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-white font-bold">Research & AI</h4>
                <p className="text-slate-400 text-sm">Sinhala NLP & Automatic Infographics </p>
              </div>
            </div>

            {/* Extra Curricular */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 flex items-start gap-4 hover:border-blue-500/30 transition-all">
              <Briefcase className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-white font-bold">Leadership</h4>
                <p className="text-slate-400 text-sm">IEEE Duothon 4.0 OC Member </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;