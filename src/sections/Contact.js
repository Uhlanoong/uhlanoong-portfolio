import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Invalid email format';
    }
    if (!form.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus('Thank you! Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus(null);
    }
  };

  return (
    <motion.section
      id="contact"
      style={{ padding: '60px 20px', maxWidth: 700, margin: 'auto' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 style={{ marginBottom: 20 }}>Contact Me</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} noValidate style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 15 }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: 6 }}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: errors.name ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.name && (
            <small style={{ color: 'red', fontSize: 12 }}>{errors.name}</small>
          )}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: errors.email ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.email && (
            <small style={{ color: 'red', fontSize: 12 }}>{errors.email}</small>
          )}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: 6 }}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: errors.message ? '1px solid red' : '1px solid #ccc',
              resize: 'vertical',
            }}
          />
          {errors.message && (
            <small style={{ color: 'red', fontSize: 12 }}>{errors.message}</small>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005f99')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007acc')}
        >
          Send Message
        </button>

        {status && (
          <p style={{ marginTop: 15, color: 'green', fontWeight: 'bold' }}>{status}</p>
        )}
      </form>

      {/* Direct Contact Links */}
      <address style={{ fontStyle: 'normal' }}>
        <p>
          Email:{' '}
          <motion.a
            href="mailto:uhlanoongrk@gmail.com"
            style={{ color: '#007acc', textDecoration: 'underline' }}
            whileHover={{ scale: 1.1, color: '#005f99' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            uhlanoongrk@gmail.com
          </motion.a>
        </p>
        <p>
          LinkedIn:{' '}
          <motion.a
            href="https://linkedin.com/in/uhlanoong"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007acc', textDecoration: 'underline' }}
            whileHover={{ scale: 1.1, color: '#005f99' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            linkedin.com/in/uhlanoong
          </motion.a>
        </p>
        <p>
          GitHub:{' '}
          <motion.a
            href="https://github.com/uhlanoong"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007acc', textDecoration: 'underline' }}
            whileHover={{ scale: 1.1, color: '#005f99' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            github.com/uhlanoong
          </motion.a>
        </p>
        <p>
        Twitter:{' '}
        <motion.a
          href="https://x.com/uhlanoongrk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007acc', textDecoration: 'underline' }}
          whileHover={{ scale: 1.1, color: '#005f99' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          x.com/uhlanoongrk
        </motion.a>
      </p>
      </address>
    </motion.section>
  );
}

export default Contact;










// https://x.com/uhlanoongrk

// import React from 'react';
// import { motion } from 'framer-motion';

// function Contact() {
//   return (
//     <motion.section
//       id="contact"
//       style={{ padding: '60px 0' }}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <h2>Contact</h2>
//       <p>
//         Email:{' '}
//         <motion.a
//           href="mailto:uhlanoongrk@gmail.com"
//           style={{ color: '#007acc', textDecoration: 'underline' }}
//           whileHover={{ scale: 1.1, color: '#005f99' }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           uhlanoongrk@gmail.com
//         </motion.a>
//       </p>
//       <p>
//         LinkedIn:{' '}
//         <motion.a
//           href="https://linkedin.com/in/uhlanoong"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: '#007acc', textDecoration: 'underline' }}
//           whileHover={{ scale: 1.1, color: '#005f99' }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           linkedin.com/in/uhlanoong
//         </motion.a>
//       </p>
//       <p>
//         GitHub:{' '}
//         <motion.a
//           href="https://github.com/uhlanoong"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: '#007acc', textDecoration: 'underline' }}
//           whileHover={{ scale: 1.1, color: '#005f99' }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           github.com/uhlanoong
//         </motion.a>
//       </p>
//     </motion.section>
//   );
// }

// export default Contact;


