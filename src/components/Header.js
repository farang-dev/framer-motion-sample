// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={headerVariants}
    >
      <h1>Welcome to Our Dental Clinic</h1>
    </motion.header>
  );
};

export default Header;
