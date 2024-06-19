// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.5 } }
};

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={contactVariants}
    >
      <h2>Contact Us</h2>
      <p>Email: contact@dentalclinic.com</p>
      <p>Phone: (123) 456-7890</p>
    </motion.section>
  );
};

export default Contact;
