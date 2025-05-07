import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const researchAreas = [
    {
      title: 'Fibre-Based Quantum Key Distribution',
      description: 'Implementing quantum-secured communication over optical fiber infrastructure to enable real-world deployment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Free Space Quantum Key Distribution',
      description: 'Exploring secure communication through atmospheric channels for satellite-to-ground and ground-to-ground secure links.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: 'Quantum Computing',
      description: 'Investigating algorithms, simulators, and frameworks in quantum computation with a focus on practical applications in security and optimization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Quantum Random Number Generation',
      description: 'Developing true randomness sources for use in cryptographic applications and security infrastructure.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="research" className="section bg-primary">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg">Research Focus Areas</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p className="text-light-dark max-w-2xl mx-auto">
            CQT Lab is actively engaged in cutting-edge research across several key domains of quantum technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              variants={fadeInUp}
              className="card group hover:border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary-dark group-hover:bg-secondary/10 transition-all duration-300">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light mb-2 font-display">{area.title}</h3>
                  <p className="text-light-dark font-sans">{area.description}</p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-secondary/50 to-secondary transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="inline-block py-4 px-8 border border-secondary/30 rounded-lg">
            <p className="text-light-dark font-sans">
              Our research is focused on both theoretical advances and practical applications
              of quantum technologies for real-world implementation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 