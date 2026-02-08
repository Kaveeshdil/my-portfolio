import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'; 
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Projects /> 

        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="py-12 text-center text-slate-600 border-t border-slate-800 mt-20">
        <p>© 2026 Kaveesha Gunasekara. </p>
      </footer>
    </div>
  );
}

export default App;