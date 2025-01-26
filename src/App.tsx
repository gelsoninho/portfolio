import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import Terminal from './components/Terminal';
import { Projects } from './components/Projects';
import { Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>}>
        <Hero />
        <Terminal />
        <Projects />
        <Expertise />
        
        {/* Contact Section */}
        <footer className="py-12 bg-[#0c0d15]/80 mt-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-6">
              <h2 className="text-2xl font-bold solana-gradient">Contact</h2>
              <div className="flex items-center space-x-8">
                <a 
                  href="mailto:gelson-1530@hotmail.com" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#14F195] transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>gelson-1530@hotmail.com</span>
                </a>
                <a 
                  href="https://github.com/gelsoninho" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#14F195] transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/gelsoninho</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Suspense>
    </div>
  );
}

export default App;