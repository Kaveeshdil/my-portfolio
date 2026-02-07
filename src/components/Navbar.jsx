import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* KAVEESH GUNASEKARA */}
        <h1 className="text-xl font-black tracking-tighter uppercase">
          KaVeEsH<span className="text-blue-500">.DEV</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-semibold text-sm">
          <a href="#home" className="hover:text-blue-400 transition-colors">HOME</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all">HIRE ME</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700 p-4 flex flex-col space-y-4 shadow-xl">
          <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;