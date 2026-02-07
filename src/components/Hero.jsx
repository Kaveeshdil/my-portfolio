import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 bg-slate-900 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Text Details */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-blue-500 font-mono mb-3 tracking-widest uppercase text-[10px] md:text-xs opacity-90">
            Hi, I'm Kaveesh Gunasekara
          </h2>
          
          {/* Main Title: Size reduced for better balance */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-[1.1] tracking-tight">
            Aspiring <br />
            Software Engineer
          </h1>

          {/* Subtitle: Compact size with gradient */}
          <div className="mb-6">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-snug">
               Cloud Enthusiast & <br className="hidden lg:block" /> Full-Stack Developer
            </span>
          </div>

          <p className="text-slate-400 text-sm md:text-base max-w-lg mb-8 font-light leading-relaxed opacity-85">
            Computer Science Graduate from the <span className="text-white">University of Plymouth, UK</span>. 
            (Affiliated with <span className="text-white">NSBM Green University</span>). <br />
            Specializing in MERN, Flutter, and currently learning <span className="text-blue-400">AWS</span>.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 text-sm transform hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-700 text-slate-300 font-bold rounded-full hover:bg-slate-800 transition-all text-sm">
              Contact
            </a>
          </div>
        </div>

        {/* Right Side: Your Profile Picture */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            {/* Image Border/Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* The Image Container - Sized to match new font scale */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-800/50 shadow-2xl transition-all duration-500 group-hover:border-blue-500/30">
              <img 
                src="src/assets/mypic.jpeg" 
                alt="Kaveesha Gunasekara" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;