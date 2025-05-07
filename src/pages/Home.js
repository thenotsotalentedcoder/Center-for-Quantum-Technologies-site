import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Projects from '../components/Projects';
import Collaborations from '../components/Collaborations';
import Facilities from '../components/Facilities';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Research />
      <Projects />
      <Collaborations />
      <Facilities />
      <Contact />
    </motion.div>
  );
};

export default Home; 