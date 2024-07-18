import React from 'react';
import styles from '../styles/hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.name}>Kacper Karbownik</span>
          <span className={styles.role}>Full-stack + Smart Contract Developer</span>
        </h1>
        <p className={styles.heroDescription}>
          Bridging Web2 and Web3 with innovative solutions. Specializing in React, Node.js, and Solidity.
        </p>
        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.ctaPrimary}>View Projects</a>
          <a href="#contact" className={styles.ctaSecondary}>Contact Me</a>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.codeSnippet}>
          <pre>
            <code>
              {`function smartContract() {
  // Web3 magic happens here
  const blockchain = new Ethereum();
  const future = blockchain.createFuture();
  return future.innovations;
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;