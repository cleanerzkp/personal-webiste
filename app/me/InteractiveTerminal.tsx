'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveTerminal: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const fullText = `const kacper = {
  skills: ["TypeScript", "React", "Node.js", "Python", "SQL"],
  passions: ["Full-Stack Development 🌐", "Backend Engineering ⚙️"],
  hobbies: ["Coding 💻", "Gaming 🎮", "Coffee ☕"],
  achievement: "ETH Global Brussels Finalist 🏆",
  learning: ["Advanced Python 🐍", "Machine Learning 🤖"],
};

console.log("Hi 👋 I'm Kacper");`;

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
        {line.split(/(".*?"|\/\/.*|\b(?:const|let|var|function|return|type|interface|skills|passions|hobbies|achievement|learning|building)\b|[{}(),[\]:.])/).filter(part => part).map((part, i) => {
          if (/^".*"$/.test(part)) return <span key={i} className="text-green-500 dark:text-green-300">{part}</span>;
          if (/^\/\/.*$/.test(part)) return <span key={i} className="text-gray-500 dark:text-gray-400">{part}</span>;
          if (/\b(const|let|var|function|return|type|interface)\b/.test(part)) return <span key={i} className="text-blue-500 dark:text-blue-300">{part}</span>;
          if (/[{}(),[\]:.]/.test(part)) return <span key={i} className="text-gray-700 dark:text-gray-300">{part}</span>;
          if (/\b(skills|passions|hobbies|achievement|learning|building)\b/.test(part)) return <span key={i} className="text-purple-500 dark:text-purple-300">{part}</span>;
          if (/\bconsole\b/.test(part)) return <span key={i} className="text-orange-500 dark:text-orange-300">{part}</span>;
          if (/\blog\b/.test(part)) return <span key={i} className="text-orange-500 dark:text-orange-300">{part}</span>;
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
      className="w-full max-w-2xl p-6 rounded-lg shadow-lg font-mono text-sm bg-white/30 dark:bg-gray-800/30 backdrop-blur-md text-gray-900 dark:text-gray-100 overflow-hidden"
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
  className="font-bold py-3 px-8 rounded-full text-center transition duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
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