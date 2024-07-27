'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveTerminal: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const fullText = `const kacper = {
  role: "Full-Stack Web3 Developer",
  skills: ["React", "Node.js", "Solidity", "TypeScript"],
  passion: "Building decentralized applications",
  seeking: "Challenging Web3 projects"
};

console.log(\`Hire \${kacper.role} for your next \${kacper.seeking}!\`);`;

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          i++;
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        } else {
          clearInterval(typingEffect);
        }
      }, 20);
      return () => clearInterval(typingEffect);
    }
  }, [isTyping]);

  const handleDiscover = () => {
    setIsTyping(true);
  };

  const syntaxHighlight = (code: string): JSX.Element[] => {
    return code.split('\n').map((line, index) => (
      <div key={index} className="flex">
        {line.split(/([{}(),]|"(?:\\.|[^"\\])*"|\/\/.*)/).map((part, i) => {
          if (part.match(/^".*"$/)) return <span key={i} className="text-green-500 dark:text-green-300">{part}</span>;
          if (part.match(/^\/\/.*$/)) return <span key={i} className="text-gray-500 dark:text-gray-400">{part}</span>;
          if (part.match(/const|let|var|function|return|type|interface/)) return <span key={i} className="text-blue-500 dark:text-blue-300">{part}</span>;
          if (part.match(/[\{\}\(\),]/)) return <span key={i} className="text-gray-700 dark:text-gray-300">{part}</span>;
          if (part.match(/true|false|null|undefined/)) return <span key={i} className="text-purple-500 dark:text-purple-300">{part}</span>;
          if (part.match(/^[a-zA-Z]+:/)) return <span key={i} className="text-yellow-500 dark:text-yellow-300">{part}</span>;
          if (part.match(/console\.log/)) return <span key={i} className="text-red-500 dark:text-red-300">{part}</span>;
          return <span key={i} className="text-gray-900 dark:text-gray-100">{part}</span>;
        })}
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, height: "400px" }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        height: isTyping ? "300px" : "400px" 
      }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl p-6 rounded-lg shadow-lg font-mono text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div ref={terminalRef} className="h-[calc(100%-1.5rem)] flex flex-col overflow-hidden">
        {!isTyping ? (
          <div className="flex items-center justify-center flex-grow">
            <button
              onClick={handleDiscover}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              About me
            </button>
          </div>
        ) : (
          <pre className="whitespace-pre-wrap flex-grow overflow-auto text-sm leading-relaxed">
            {syntaxHighlight(text)}
            <span className="animate-pulse">▋</span>
          </pre>
        )}
      </div>
    </motion.div>
  );
};

export default InteractiveTerminal;