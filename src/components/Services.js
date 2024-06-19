// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';

const servicesVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } }
};

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={servicesVariants}
    >
      <h2>Our Services</h2>
      <ul>
        <li>General Dentistry</li>
        <li>Cosmetic Dentistry</li>
        <li>Orthodontics</li>
        <li>Implants</li>
      </ul>
    </motion.section>
  );
};

export default Services;
