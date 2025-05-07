import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Since we don't have the actual logo, we'll use a placeholder
// In a real application, you would import your logo like:
// import Logo from './path-to-logo.png';

export default function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-indigo-900 flex items-center justify-center flex-col gap-6">
      {/* Logo with pulsing and floating animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -10, 0] 
        }}
        transition={{
          duration: 2,
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }
        }}
        className="relative"
      >
        {/* Placeholder for the logo */}
        <div className="relative z-10">
          <img 
            src="/api/placeholder/200/200" 
            alt="Center for Quantum Technologies Logo"
            className="rounded-full"
          />
        </div>
        
        {/* Glowing effect behind logo */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-full filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            zIndex: 0
          }}
        />
      </motion.div>
      
      {/* Title with text reveal animation */}
      <motion.h1
        className="text-white text-4xl font-bold tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Center for Quantum Technologies
      </motion.h1>
      
      {/* Loading progress bar */}
      <div className="w-64 bg-indigo-700 rounded-full h-2 overflow-hidden mt-4">
        <motion.div 
          className="h-full bg-blue-400"
          initial={{ width: "0%" }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      
      {/* Loading particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, Math.random() * -window.innerHeight],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Quantum circles animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-blue-400 rounded-full"
            style={{ 
              width: `${(i + 1) * 100}px`, 
              height: `${(i + 1) * 100}px`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
              rotate: 360
            }}
            transition={{
              duration: 8 - i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
}