import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-display tracking-tight">
              Center for <span className="bg-gradient-to-r from-secondary via-light to-secondary bg-clip-text text-transparent">Quantum</span> Technologies
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-light-dark mb-6 font-sans">
              Pioneering quantum research and innovation in Pakistan
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-md md:text-lg text-light-dark mb-8 font-sans">
              NED University of Engineering & Technology, Karachi
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-x-4"
          >
            <Link
              to="research"
              smooth={true}
              duration={500}
              offset={-100}
              className="btn-primary inline-block"
            >
              Explore Research
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="btn-outline inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20"
          >
            <div className="inline-block border border-light-dark/30 px-6 py-2 rounded-full">
              <p className="text-light-dark text-sm font-mono">Established: 2023</p>
            </div>
          </motion.div>
        </div>
      </div>
      
     
    </section>
  );
};

export default Hero; 