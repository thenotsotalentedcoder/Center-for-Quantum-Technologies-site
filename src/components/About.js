import React from 'react';
import { motion } from 'framer-motion';
import ImageSlideshow from './ImageSlideshow';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { number: '2023', label: 'Established' },
    { number: '4', label: 'Research Areas' },
    { number: '3+', label: 'Active Projects' },
    { number: '4+', label: 'Global Partners' }
  ];

  return (
    <section id="about" className="section bg-primary-light">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="heading-lg">About CQT</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                {/* This div ensures proper aspect ratio */}
                <div className="w-full h-full">
                  <ImageSlideshow />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg border border-secondary flex items-center justify-center z-10">
                <span className="text-secondary font-mono font-bold">EST. 2023</span>
              </div>
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-2 border-secondary z-10"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeInUp}
          >
            <p className="text-light-dark mb-6">
              The Center for Quantum Technologies (CQT) at NED University of Engineering & Technology was established in 2023 as a pioneering initiative in Pakistan aimed at fostering advanced research and innovation in the rapidly evolving field of Quantum Information Science and Technology.
            </p>
            <p className="text-light-dark mb-8">
              The center is envisioned to act as a national hub for research, development, and collaboration in quantum communication, computing, and cryptography.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  variants={fadeInUp}
                  className="text-center p-4 bg-primary rounded-lg border border-primary-light"
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-secondary mb-1 font-display">{stat.number}</h4>
                  <p className="text-sm text-light-dark font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;