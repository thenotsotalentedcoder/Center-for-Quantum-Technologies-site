import React from 'react';
import { motion } from 'framer-motion';

// Import team member images
import mmkhan from '../Assets/Team/DR MMK.jpeg';
import emaaz from '../Assets/Team/Emaaz_Rehman.jpg';
import hadiya from '../Assets/Team/Hadiya_Kashif.jpeg';
import saadia from '../Assets/Team/ms Saadia.jpeg';
import muzammil from '../Assets/Team/Muzammil.jpg';

const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const team = [
    {
      name: 'Prof. Dr. M. Mubashir Khan',
      designation: 'Chairman - CSIT',
      image: mmkhan,
      linkedin: '#'
    },
    {
      name: 'Ms. Saadia Arshad',
      designation: 'Lecturer - CSIT',
      image: saadia,
      linkedin: '#'
    },
    {
      name: 'Emaaz Ur Rehman',
      designation: 'Undergraduate - CSIT',
      image: emaaz,
      linkedin: '#'
    },
    {
      name: 'Hadiya Kashif',
      designation: 'Undergraduate - CSIT',
      image: hadiya,
      linkedin: '#'
    },
    {
      name: 'Malik Muzammil',
      designation: 'Undergraduate - CSIT',
      image: muzammil,
      linkedin: '#'
    }
  ];

  return (
    <section id="team" className="section py-12">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-10 text-center"
        >
          <h2 className="heading-lg">Development Team</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-light-dark max-w-2xl mx-auto font-sans">
            Meet the talented team behind the Center for Quantum Technologies website.
          </p>
        </motion.div>

        {/* All cards container with more compact layout */}
        <div className="max-w-5xl mx-auto mb-8">
          {/* First row */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {team.slice(0, 3).map((member, index) => (
              <TeamCard 
                key={index} 
                member={member} 
                index={index} 
              />
            ))}
          </div>
          
          {/* Second row */}
          <div className="flex justify-center gap-6">
            {team.slice(3, 5).map((member, index) => (
              <TeamCard 
                key={index + 3} 
                member={member} 
                index={index + 3} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-primary-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group w-[160px]"
    >
      <div className="p-2 pt-3">
        <div className="border border-secondary/30 rounded-lg overflow-hidden">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="p-2 pt-1 text-center">
        <h3 className="text-sm font-bold text-light mb-0.5 font-display leading-tight">{member.name}</h3>
        <p className="text-light-dark mb-2 font-mono text-xs">{member.designation}</p>
        <a 
          href={member.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-secondary hover:text-light transition-colors duration-300 text-xs border border-secondary/30 rounded-full px-2 py-0.5 hover:bg-secondary/10"
        >
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default Team;