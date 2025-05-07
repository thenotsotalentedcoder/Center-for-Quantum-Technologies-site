import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Logo from './Assets/Logo2.png';
import LoadingParticles from './components/LoadingParticles';
import QuantumOrbit from './components/QuantumOrbit';
import QuantumLoadingIndicator from './components/QuantumLoadingIndicator';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center flex-col gap-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LoadingParticles />
        </div>
        <QuantumOrbit />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="z-10 relative"
        >
          <motion.img 
            src={Logo} 
            height={200} 
            width={200}
            animate={{ 
              boxShadow: ["0px 0px 20px rgba(86, 136, 202, 0.3)", "0px 0px 60px rgba(86, 136, 202, 0.5)", "0px 0px 20px rgba(86, 136, 202, 0.3)"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="z-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent font-display">
            Center for Quantum Technologies
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-2 z-10"
        >
          <p className="text-light-dark text-center max-w-md font-sans">
            Pioneering quantum research and innovation at NED University
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 z-10"
        >
          <QuantumLoadingIndicator />
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
