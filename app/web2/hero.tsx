'use client';
import React from 'react';
import { motion } from 'framer-motion';
import InteractiveTerminal from './InteractiveTerminal';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-background text-foreground">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Kacper Karbownik</h1>
          <h2 className="text-2xl sm:text-3xl text-primary mb-4">Full-Stack Developer</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Blending web skills with backend expertise. Crafting efficient, scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-6 rounded-full text-center transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-2 px-6 rounded-full text-center transition duration-300"
            >
              Contact
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