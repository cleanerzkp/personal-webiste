'use client';
import React from 'react';
import { motion } from 'framer-motion';
import InteractiveTerminal from './InteractiveTerminal';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-background text-foreground">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap- lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Kacper Karbownik
          </h1>
          <h2 className="text-3xl sm:text-4xl text-primary">
            Full-Stack Web3 Developer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Specializing in merging traditional web skills with blockchain technology. Passionate about crafting seamless, user-focused experiences in the decentralized world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;