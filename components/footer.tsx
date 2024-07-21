'use client'

import React from 'react';
import Icons from './ui/icons';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-4 bg-background">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kacper Karbownik
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icons type="github" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icons type="linkedin" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icons type="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;