'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InteractiveTerminal from './InteractiveTerminal';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-16 bg-background text-foreground">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Kacper Karbownik</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary mb-4 sm:mb-6">Full-Stack Developer</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
            Blending web skills with backend expertise. Crafting efficient, scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-full text-center transition duration-300 text-lg"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-3 px-8 rounded-full text-center transition duration-300 text-lg"
            >
              Experience
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 mt-8 lg:mt-0"
        >
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;