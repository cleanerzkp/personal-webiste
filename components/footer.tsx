'use client'

import React from 'react';
import Icons from './ui/icons';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto py-4 bg-background">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kacper Karbownik
        </p>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/cleanerzkp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons type="github" />
          </a>
          <button 
            onClick={scrollToTop} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons type="linkedin" />
          </button>
          <a 
            href="https://twitter.com/cleanerzk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons type="twitter" />
          </a>
          <a 
            href="https://t.me/cleanerzk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons type="telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;