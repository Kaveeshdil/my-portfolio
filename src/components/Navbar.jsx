import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl font-black tracking-tighter uppercase cursor-pointer">
          KaVeEsH<span className="text-blue-500">.TECH</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center font-semibold text-sm">
          <a href="#home" className="hover:text-blue-400 transition-colors">HOME</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
          
          {/* DOWNLOAD CV BUTTON */}
          <a 
            href="/Kaveesh_Resume.pdf" 
            download="Kaveesh_Gunasekara_CV"
            className="border border-blue-500 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            RESUME
          </a>

          <a href="#contact" className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 focus:outline-none">
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700 p-6 flex flex-col space-y-5 shadow-xl animate-fade-in-down">
          <a href="#home" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>PROJECTS</a>
          <a href="#about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a 
            href="/Kaveesh_Resume.pdf" 
            download="Kaveesh_Gunasekara_CV"
            className="text-blue-400 border border-blue-500 text-center py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            DOWNLOAD CV
          </a>
          <a href="#contact" className="bg-blue-600 text-center py-2 rounded-lg" onClick={() => setIsOpen(false)}>HIRE ME</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;