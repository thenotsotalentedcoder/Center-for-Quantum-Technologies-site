import React from 'react';
import { motion } from 'framer-motion';

const QuantumOrbit = () => {
  // Generate a set of orbital particles with varying properties
  const orbitalParticles = Array.from({ length: 3 }).map((_, index) => ({
    id: index,
    size: 4 + Math.random() * 8,
    distance: 70 + index * 30,
    duration: 8 + Math.random() * 4,
    delay: index * 0.5,
    clockwise: index % 2 === 0,
    color: index === 0 ? "#5688ca" : index === 1 ? "#8baede" : "#64ffda"
  }));

  // Generate smaller electron-like particles
  const electronParticles = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    size: 2 + Math.random() * 3,
    distance: 20 + Math.random() * 120,
    duration: 3 + Math.random() * 12,
    delay: index * 0.2,
    clockwise: Math.random() > 0.5,
    opacity: 0.4 + Math.random() * 0.6,
    color: index % 3 === 0 ? "#5688ca" : index % 3 === 1 ? "#8baede" : "#ffffff"
  }));

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Main orbital rings */}
      {orbitalParticles.map((particle) => (
        <motion.div
          key={`orbit-${particle.id}`}
          className="absolute rounded-full border opacity-20"
          style={{
            width: particle.distance * 2,
            height: particle.distance * 2,
            borderColor: particle.color,
            borderWidth: 1,
          }}
          animate={{
            rotate: particle.clockwise ? 360 : -360,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay
          }}
        />
      ))}

      {/* Orbital particles */}
      {orbitalParticles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`
          }}
          animate={{
            rotate: particle.clockwise ? 360 : -360,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: particle.size,
              height: particle.size,
              x: particle.distance,
              y: 0,
              backgroundColor: particle.color,
              borderRadius: '50%',
              boxShadow: `0 0 8px ${particle.color}`
            }}
          />
        </motion.div>
      ))}

      {/* Electron-like particles */}
      {electronParticles.map((particle) => (
        <motion.div
          key={`electron-${particle.id}`}
          className="absolute rounded-full"
          initial={{
            scale: 0
          }}
          animate={{
            rotate: particle.clockwise ? 360 : -360,
            scale: [0, 1, 1, 0],
            opacity: [0, particle.opacity, particle.opacity, 0]
          }}
          transition={{
            rotate: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay
            },
            scale: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
              times: [0, 0.2, 0.8, 1]
            },
            opacity: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
              times: [0, 0.2, 0.8, 1]
            }
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: particle.size,
              height: particle.size,
              x: particle.distance,
              y: 0,
              backgroundColor: particle.color,
              borderRadius: '50%',
              boxShadow: `0 0 5px ${particle.color}`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default QuantumOrbit; 