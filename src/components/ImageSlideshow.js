// src/components/ImageSlideshow.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly - update these paths to match your actual file names
import image1 from '../Assets/images/image3.jpg';
import image2 from '../Assets/images/image5.jpg';
import image3 from '../Assets/images/image8.jpg';
import image4 from '../Assets/images/image11.jpg';
import image5 from '../Assets/images/image13.jpg';
import image6 from '../Assets/images/image.jpg';
import image7 from '../Assets/images/image7.jpg';
import image8 from '../Assets/images/image10.jpg';
import image9 from '../Assets/images/image9.jpg';
import image10 from '../Assets/images/image12.jpg';



const ImageSlideshow = () => {
  // If you have a different image format, modify the extensions accordingly
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  
  // Initialize slideshow
  useEffect(() => {
    // Set up interval for slideshow
    timerRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => {
      // Clean up interval on component unmount
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images.length]);
  
  // Variants for framer-motion animations
  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={images[currentIndex]} 
            alt={`CQT lab`}
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Image counter indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-secondary w-4' : 'bg-light-dark/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;