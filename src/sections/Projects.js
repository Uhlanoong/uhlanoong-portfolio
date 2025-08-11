import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'CRM',
    description: 'A web application for fishery and farm management with cloud hosting.',
    link: 'https://github.com/uhlanoong/agro-crm',
  },
  {
    name: 'Example API',
    description: 'NestJS API for fish disease identification based on symptoms.',
    link: 'https://github.com/uhlanoong/example-api',
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      style={{ padding: '60px 0' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {projects.map((project) => (
          <motion.div
            key={project.name}
            style={{
              border: '1px solid #ddd',
              borderRadius: 6,
              padding: 20,
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 15px rgba(0,0,0,0.15)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007acc', textDecoration: 'underline' }}
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
