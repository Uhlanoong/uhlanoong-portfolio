import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      style={{
        padding: '80px 20px',
        maxWidth: window.innerWidth > 1200 ? 1000 : 700,
        margin: '0 auto',
        color: '#333',
        lineHeight: 1.7,
      }}
      
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#117a7a',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontWeight: '700',
        }}
      >
        About Me
      </h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.2rem' }}>
        I’m <strong>Uhlanoong</strong>, a passionate and detail-oriented software developer specializing in React, NestJS, and modern web technologies.
      </p>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.2rem' }}>
        I thrive on turning ideas into clean, efficient, and scalable applications that deliver seamless user experiences. Whether it’s architecting a robust backend, designing an intuitive frontend, or integrating APIs, I bring a problem-solving mindset and a love for clean code to every project.
      </p>
    </motion.section>
  );
}

export default About;
