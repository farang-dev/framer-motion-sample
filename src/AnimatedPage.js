// src/AnimatedPage.js
import React from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } }
};

const AnimatedPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h1 variants={headerVariants}>
        Welcome to the Animated Page
      </motion.h1>
      <motion.p variants={textVariants}>
        This is a simple example of animations using Framer Motion in a React project.
      </motion.p>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
      >
        Click Me
      </motion.button>
    </motion.div>
  );
};

export default AnimatedPage;
