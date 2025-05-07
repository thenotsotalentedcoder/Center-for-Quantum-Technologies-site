import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const facilities = [
    {
      title: 'Vibration-Free Optical Experimental Table',
      description: 'Essential for precision alignment in quantum optics and QKD experiments, our vibration-isolated optical tables provide the stability needed for sensitive quantum measurements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'High-End Oscilloscopes and Signal Generators',
      description: 'For waveform analysis, signal integrity testing, and protocol debugging, our lab is equipped with state-of-the-art test and measurement equipment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: 'Optical Communication Components',
      description: 'Lasers, single-photon detectors, and polarization controllers for quantum channel experiments form the core of our optical quantum communication research facility.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Secure Networking and Simulation Infrastructure',
      description: 'For modeling cryptographic attacks and testing post-quantum protocols, our computational infrastructure allows for advanced simulation and analysis.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  return (
    <section id="facilities" className="section bg-primary-dark">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg">Facilities & Infrastructure</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p className="text-light-dark max-w-2xl mx-auto font-sans">
            CQT Lab is equipped with state-of-the-art experimental and computational resources to support advanced research and experimentation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeInUp}
              className="bg-primary p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-4 md:mb-0 md:mr-6 p-4 bg-primary-light/30 rounded-lg inline-flex">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light mb-3 font-display">{facility.title}</h3>
                  <p className="text-light-dark font-sans">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeInUp}
          className="bg-primary-light/20 p-8 rounded-xl border border-secondary/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-light to-secondary/80 bg-clip-text text-transparent mb-4 font-display">Future Infrastructure Plans</h3>
              <p className="text-light-dark mb-4 font-sans">
                As CQT continues to grow, we are planning several infrastructure expansions to enhance our research capabilities.
              </p>
              <a href="#" className="btn-outline font-sans">Contact for Collaboration</a>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Quantum Node Network Testbed',
                  'Advanced Photonics Laboratory',
                  'PQC Implementation Environment',
                  'Quantum Algorithm Development Suite'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="flex items-center p-3 bg-primary/50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                    <p className="text-light font-mono text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities; 