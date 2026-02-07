import React from 'react';
// Line A: අවශ්‍ය Icons ටික ලයිබ්‍රරි එකෙන් ගෙන්වා ගැනීම
import { Github, Linkedin, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light">
          I'm currently looking for <span className="text-white font-semibold">Software Engineering Internships</span>. 
          Feel free to reach out via any platform!
        </p>

        {/* Line B: Contact Details with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-blue-500/50 transition-all">
            <Mail className="text-blue-500" size={24} />
            <div className="text-left">
              <p className="text-slate-500 text-xs font-bold uppercase">Email</p>
              <a href="mailto:kaveeshdil@gmail.com" className="text-white font-medium hover:text-blue-400">
                kaveeshdil@gmail.com 
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-blue-500/50 transition-all">
            <Phone className="text-blue-500" size={24} />
            <div className="text-left">
              <p className="text-slate-500 text-xs font-bold uppercase">Phone</p>
              <p className="text-white font-medium">+94 76 495 1441 </p>
            </div>
          </div>
        </div>

        {/* Line C: Social Media Icons Section */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Kaveeshdil" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-lg">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kaveesh-dilhara-jayamini-gunasekara-236621197/" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-blue-500 hover:bg-slate-700 transition-all shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="https://www.facebook.com/kavishdilhara.gunasekara" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-blue-600 hover:bg-slate-700 transition-all shadow-lg">
            <Facebook size={24} />
          </a>
          <a href="https://x.com/DilharaKaveesh" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-lg">
            <Twitter size={24} /> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;