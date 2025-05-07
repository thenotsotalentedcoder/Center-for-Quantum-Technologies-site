import React from 'react';
import { motion } from 'framer-motion';

const Collaborations = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const partners = [
    {
      name: 'idQuantique',
      location: 'Switzerland',
      description: 'Industry leader in quantum-safe cryptography and quantum random number generation.',
      coordinates: { x: 48, y: 28 },
    },
    {
      name: 'Qubitrium',
      location: 'Turkey',
      description: 'Specialized in quantum education, computing platforms, and simulation environments.',
      coordinates: { x: 52, y: 30 },
    },
    {
      name: 'University of Leeds',
      location: 'United Kingdom',
      description: 'Collaborating in quantum optics and post-quantum cryptographic frameworks.',
      coordinates: { x: 45, y: 25 },
    },
    {
      name: 'INRiM',
      location: 'Italy',
      description: 'Istituto Nazionale di Ricerca Metrologica, collaborating in quantum time-frequency transfer and precision measurement systems.',
      coordinates: { x: 47, y: 29 },
    },
  ];

  return (
    <section id="collaborations" className="section bg-primary-light">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg">International Collaborations</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p className="text-light-dark max-w-2xl mx-auto font-sans">
            To ensure that CQT remains aligned with global advancements, the center maintains strong research and academic linkages with several international entities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeInUp}
              className="bg-primary p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-light to-secondary mr-3"></div>
                <div>
                  <h3 className="text-lg font-bold text-light font-display">{partner.name}</h3>
                  <p className="text-sm text-light-dark font-mono">{partner.location}</p>
                </div>
              </div>
              <p className="text-light-dark text-sm font-sans">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-secondary/30 rounded-lg p-6">
            <p className="text-light-dark font-sans">
              Our global collaborations enable knowledge exchange and foster innovation in quantum technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations; 