import React from 'react';
import { motion } from 'framer-motion';

const skills = ['JavaScript', 'React', 'NestJS', 'TypeScript', 'Node.js', 'AWS'];

function Skills() {
  return (
    <motion.section
      id="skills"
      style={{ padding: '60px 0' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2>Skills</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          gap: 15,
          flexWrap: 'wrap',
        }}
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            style={{
              background: '#007acc',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: 5,
              fontWeight: 'bold',
              fontSize: 14,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
