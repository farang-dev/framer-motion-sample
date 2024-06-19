// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
};

const About = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={aboutVariants}
    >
      <h2>About Us</h2>
      <p>We provide the best dental care with a team of experienced professionals.</p>
    </motion.section>
  );
};

export default About;
