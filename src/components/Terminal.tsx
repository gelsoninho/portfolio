import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const solanaAsciiArt = `
   ▄████████  ▄██████▄   ▄█          ▄████████ ███▄▄▄▄      ▄████████ 
  ███    ███ ███    ███ ███         ███    ███ ███▀▀▀██▄   ███    ███ 
  ███    █▀  ███    ███ ███         ███    ███ ███   ███   ███    ███ 
  ███        ███    ███ ███         ███    ███ ███   ███   ███    ███ 
▀███████████ ███    ███ ███       ▀███████████ ███   ███ ▀███████████ 
         ███ ███    ███ ███         ███    ███ ███   ███   ███    ███ 
   ▄█    ███ ███    ███ ███▌    ▄   ███    ███ ███   ███   ███    ███ 
 ▄████████▀   ▀██████▀  █████▄▄██   ███    █▀   ▀█   █▀    ███    █▀  
                        ▀                                               
`;

const Terminal = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < solanaAsciiArt.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + solanaAsciiArt[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Réinitialiser l'animation après une pause de 2 secondes
      const resetTimer = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mt-20 mb-20"
    >
      <div className="bg-[#0c0d15] rounded-lg overflow-hidden shadow-xl solana-glow">
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1f3c]">
          <div className="flex space-x-2">
            <div data-testid="terminal-red" className="w-3 h-3 rounded-full bg-red-500"></div>
            <div data-testid="terminal-yellow" className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div data-testid="terminal-green" className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-[#14F195] text-sm">solana.txt</div>
          <div className="w-16"></div>
        </div>
        <div className="p-4 font-mono text-sm overflow-auto" style={{ height: '400px' }}>
          <pre className="text-[#14F195] whitespace-pre">
            {displayedText}
          </pre>
          {currentIndex < solanaAsciiArt.length && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-[#14F195]"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;