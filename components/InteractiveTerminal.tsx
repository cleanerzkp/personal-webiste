'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const InteractiveTerminal: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

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
    const isDark = theme === 'dark';
    return code.split('\n').map((line, index) => (
      <div key={index} className="flex">
        {line.split(/([{}(),]|"(?:\\.|[^"\\])*"|\/\/.*)/).map((part, i) => {
          // Apply colors based on theme and syntax
          if (part.match(/^".*"$/)) return <span key={i} className={isDark ? "text-[#ce9178]" : "text-[#008000]"}>{part}</span>; // String
          if (part.match(/^\/\/.*$/)) return <span key={i} className={isDark ? "text-[#6a9955]" : "text-[#008000]"}>{part}</span>; // Comment
          if (part.match(/const|let|var|function|return|type|interface/)) return <span key={i} className={isDark ? "text-[#c586c0]" : "text-[#a020f0]"}>{part}</span>; // Keywords
          if (part.match(/[\{\}\(\),]/)) return <span key={i} className={isDark ? "text-[#d4d4d4]" : "text-[#000000]"}>{part}</span>; // Punctuation
          if (part.match(/true|false|null|undefined/)) return <span key={i} className={isDark ? "text-[#569cd6]" : "text-[#0000ff]"}>{part}</span>; // Boolean/Null
          if (part.match(/^[a-zA-Z]+:/)) return <span key={i} className={isDark ? "text-[#9cdcfe]" : "text-[#0000ff]"}>{part}</span>; // Labels
          if (part.match(/console\.log/)) return <span key={i} className={isDark ? "text-[#dcdcaa]" : "text-[#795e26]"}>{part}</span>; // `console.log`
          return <span key={i} className={isDark ? "text-[#d4d4d4]" : "text-[#000000]"}>{part}</span>; // Default
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
      className={`w-full max-w-2xl p-6 rounded-lg shadow-lg font-mono text-sm ${
        theme === 'dark' ? 'bg-[#1e1e1e] text-[#d4d4d4]' : 'bg-[#f5f5f5] text-[#333]'
      } overflow-hidden`}
    >
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div ref={terminalRef} className="h-[calc(100%-1.5rem)] flex flex-col overflow-hidden">
        {!isTyping ? (
          <div className="flex items-center justify-center flex-grow">
            <button
              onClick={handleDiscover}
              className="bg-primary text-primary-foreground hover:bg-primary-dark font-bold py-3 px-8 rounded-full text-center transition duration-300"
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