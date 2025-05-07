import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const projectList = [
    {
      title: 'Secure Quantum Communication',
      status: 'Ongoing',
      description: 'A collaborative effort with Horizon Tech Services (Islamabad), focusing on the real-world application of QKD for secure data transmission.',
      partners: ['Horizon Tech Services', 'NED University'],
      tags: ['Quantum Key Distribution', 'Secure Communication', 'Data Transmission']
    },
    {
      title: 'Post-Quantum Cryptography Security Analysis',
      status: 'Ongoing',
      description: 'A research project analyzing the security of VPNs, Blockchain infrastructure, and Public Key Infrastructure (PKI) under the lens of post-quantum cryptographic threats and defenses.',
      partners: ['NED University'],
      tags: ['Post-Quantum Cryptography', 'Security Analysis', 'Blockchain', 'PKI']
    },
    {
      title: 'Free Space QKD Implementation',
      status: 'Completed',
      description: 'Successfully completed a Free Space Quantum Key Distribution project, funded by the Sindh Research Support Program (SRSP) – HEC Sindh, demonstrating secure key exchange using quantum mechanics principles.',
      partners: ['HEC Sindh', 'NED University'],
      tags: ['Free Space QKD', 'Key Exchange', 'Quantum Mechanics']
    }
  ];

  return (
    <section id="projects" className="section bg-primary-dark">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg">Projects</h2>
          <div className="h-1 w-16 bg-secondary mx-auto mb-6"></div>
          <p className="text-light-dark max-w-2xl mx-auto">
            Explore our ongoing and completed research projects in quantum technologies.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-primary">
            <button
              onClick={() => setActiveTab(0)}
              className={`px-6 py-2 rounded-md text-sm font-medium font-sans transition-all duration-300 ${
                activeTab === 0 
                  ? 'bg-secondary text-primary-dark' 
                  : 'text-light-dark hover:text-light'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`px-6 py-2 rounded-md text-sm font-medium font-sans transition-all duration-300 ${
                activeTab === 1 
                  ? 'bg-secondary text-primary-dark' 
                  : 'text-light-dark hover:text-light'
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`px-6 py-2 rounded-md text-sm font-medium font-sans transition-all duration-300 ${
                activeTab === 2 
                  ? 'bg-secondary text-primary-dark' 
                  : 'text-light-dark hover:text-light'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList
            .filter(project => 
              activeTab === 0 || 
              (activeTab === 1 && project.status === 'Ongoing') ||
              (activeTab === 2 && project.status === 'Completed')
            )
            .map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                variants={fadeInUp}
                className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-light font-display">{project.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-mono ${
                      project.status === 'Ongoing' 
                        ? 'bg-blue-900/30 text-blue-400'
                        : 'bg-green-900/30 text-green-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-light-dark mb-6 font-sans">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-light-dark mb-2 font-display">Partners:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, i) => (
                        <span key={i} className="text-xs bg-primary-light px-2 py-1 rounded font-sans">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-primary-light/30">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-full font-mono"
                      >
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <a href="#" className="btn-outline font-sans">
            Explore All Research Publications
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 