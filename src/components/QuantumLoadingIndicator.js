import React from 'react';
import { motion } from 'framer-motion';

const QuantumLoadingIndicator = () => {
  // Create array of indicator elements with varied animations
  const indicators = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    delay: i * 0.15,
  }));

  return (
    <div className="flex space-x-3 items-center">
      {indicators.map(({ id, delay }) => (
        <motion.div
          key={id}
          className="flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 180, 360, 180]
            }}
            transition={{
              duration: 1.5,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
            style={{
              boxShadow: "0 0 8px rgba(86, 136, 202, 0.8)"
            }}
          />
        </motion.div>
      ))}
      
      {/* Central animated quantum wave */}
      <motion.div 
        className="relative w-16 h-4 mx-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,15 C10,5 20,25 30,15 C40,5 50,25 60,15 C70,5 80,25 90,15 C100,5 110,25 120,15"
            fill="none"
            stroke="#5688ca"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              pathOffset: [0, 0, 1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        
        {/* Animated dots along the wave */}
        {[0.2, 0.4, 0.6, 0.8].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary"
            style={{ left: `${pos * 100}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{
              y: [5, -5, 5],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {indicators.map(({ id, delay }, index) => (
        <motion.div
          key={`end-${id}`}
          className="flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 180, 360, 180]
            }}
            transition={{
              duration: 1.5,
              delay: indicators.length * 0.15 - delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
            style={{
              boxShadow: "0 0 8px rgba(86, 136, 202, 0.8)"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default QuantumLoadingIndicator; 