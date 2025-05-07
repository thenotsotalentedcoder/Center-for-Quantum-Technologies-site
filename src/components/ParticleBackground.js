// import React, { useCallback, useRef, useEffect } from 'react';
// import { Particles } from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';

// const ParticleBackground = ({ isLoadingScreen = false }) => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <div className="particle-canvas">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           fullScreen: { enable: false },
//           background: {
//             color: {
//               value: 'transparent',
//             },
//           },
//           fpsLimit: 60,
//           particles: {
//             number: {
//               value: isLoadingScreen ? 80 : 50,
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//             },
//             color: {
//               value: isLoadingScreen ? 
//                 ["#5688ca", "#8baede", "#ffffff"] : 
//                 ["#5688ca", "#8baede"],
//             },
//             shape: {
//               type: isLoadingScreen ? ["circle", "triangle"] : "circle",
//               stroke: {
//                 width: 0,
//                 color: "#000000",
//               },
//               polygon: {
//                 nb_sides: 5,
//               },
//             },
//             opacity: {
//               value: isLoadingScreen ? 0.7 : 0.5,
//               random: true,
//               animation: {
//                 enable: true,
//                 speed: 1,
//                 minimumValue: 0.1,
//                 sync: false,
//               },
//             },
//             size: {
//               value: isLoadingScreen ? 4 : 3,
//               random: true,
//               animation: {
//                 enable: true,
//                 speed: 2,
//                 minimumValue: 0.3,
//                 sync: false,
//               },
//             },
//             links: {
//               enable: true,
//               distance: isLoadingScreen ? 150 : 100,
//               color: "#5688ca",
//               opacity: 0.3,
//               width: 1,
//             },
//             move: {
//               enable: true,
//               speed: isLoadingScreen ? 3 : 2,
//               direction: isLoadingScreen ? "none" : "none",
//               random: true,
//               straight: false,
//               outModes: "out",
//               bounce: false,
//               attract: {
//                 enable: isLoadingScreen ? true : false,
//                 rotateX: 600,
//                 rotateY: 1200,
//               },
//             },
//           },
//           interactivity: {
//             detectsOn: "canvas",
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: isLoadingScreen ? "repulse" : "grab",
//               },
//               onClick: {
//                 enable: isLoadingScreen ? true : false,
//                 mode: "push",
//               },
//               resize: true,
//             },
//             modes: {
//               grab: {
//                 distance: 140,
//                 links: {
//                   opacity: 1,
//                 },
//               },
//               bubble: {
//                 distance: 400,
//                 size: 40,
//                 duration: 2,
//                 opacity: 8,
//                 speed: 3,
//               },
//               repulse: {
//                 distance: 100,
//                 duration: 0.4,
//               },
//               push: {
//                 quantity: 4,
//               },
//               remove: {
//                 quantity: 2,
//               },
//             },
//           },
//           retina_detect: true,
//           // Add quantum-themed animation effects for loading screen
//           ...(isLoadingScreen && {
//             particles: {
//               groups: {
//                 z5000: {
//                   number: {
//                     value: 10
//                   },
//                   zIndex: {
//                     value: 5000
//                   }
//                 },
//                 z7500: {
//                   number: {
//                     value: 5
//                   },
//                   zIndex: {
//                     value: 7500
//                   }
//                 },
//                 z2500: {
//                   number: {
//                     value: 20
//                   },
//                   zIndex: {
//                     value: 2500
//                   }
//                 },
//                 z1000: {
//                   number: {
//                     value: 40
//                   },
//                   zIndex: {
//                     value: 1000
//                   }
//                 }
//               },
//               number: {
//                 value: 80,
//                 density: {
//                   enable: true,
//                   value_area: 800
//                 }
//               },
//               color: {
//                 value: ["#5688ca", "#8baede", "#ffffff"]
//               },
//               shape: {
//                 type: ["circle", "triangle"],
//                 options: {}
//               },
//               opacity: {
//                 value: 0.7,
//                 random: true,
//                 animation: {
//                   enable: true,
//                   speed: 1,
//                   minimumValue: 0.1,
//                   sync: false
//                 }
//               },
//               size: {
//                 value: 4,
//                 random: {
//                   enable: true,
//                   minimumValue: 0.5
//                 },
//                 animation: {
//                   enable: true,
//                   speed: 5,
//                   minimumValue: 0.1,
//                   sync: false
//                 }
//               },
//               links: {
//                 enable: true,
//                 distance: 150,
//                 color: "#5688ca",
//                 opacity: 0.4,
//                 width: 1,
//                 triangles: {
//                   enable: true,
//                   opacity: 0.1
//                 }
//               },
//               move: {
//                 enable: true,
//                 speed: 3,
//                 direction: "none",
//                 random: true,
//                 straight: false,
//                 outModes: {
//                   default: "out"
//                 },
//                 attract: {
//                   enable: true,
//                   rotateX: 600,
//                   rotateY: 1200
//                 }
//               },
//               life: {
//                 duration: {
//                   sync: false,
//                   value: 3
//                 },
//                 count: 0,
//                 delay: {
//                   random: {
//                     enable: true,
//                     minimumValue: 0.5
//                   },
//                   value: 1
//                 }
//               },
//               wobble: {
//                 distance: 5,
//                 enable: true,
//                 speed: {
//                   min: -5,
//                   max: 5
//                 }
//               }
//             }
//           })
//         }}
//       />
//     </div>
//   );
// };

// export default ParticleBackground; 
import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle config - Updated to light blue theme
    const particleCount = 100;
    const particleColor = '#ADD8E6'; // Light blue color
    const particleSizeMin = 1;
    const particleSizeMax = 3;
    const particleSpeedMin = 0.05;
    const particleSpeedMax = 0.2;
    const connectionDistance = 150;
    const connectionOpacity = 0.2;
    
    // Create particles
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (particleSizeMax - particleSizeMin) + particleSizeMin,
        speedX: (Math.random() - 0.5) * (particleSpeedMax - particleSpeedMin) + particleSpeedMin,
        speedY: (Math.random() - 0.5) * (particleSpeedMax - particleSpeedMin) + particleSpeedMin,
        lastMouse: { x: 0, y: 0 }
      });
    }
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      // Create slight ripple effect around mouse
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 2 + 0.1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          fade: true,
          alpha: 1
        });
        
        // Keep particle count manageable
        if (particles.length > particleCount + 20) {
          particles.splice(0, 3);
        }
      }
    };
    
    const onMouseLeave = () => {
      isMouseMoving = false;
    };
    
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles and connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Handle particles created by mouse
        if (p.fade) {
          p.alpha -= 0.01;
          if (p.alpha <= 0) {
            particles.splice(i, 1);
            continue;
          }
        }
        
        // Draw particle with light blue color
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.fade 
          ? `rgba(173, 216, 230, ${p.alpha})`  // Light blue with fading
          : particleColor;
        ctx.fill();
        
        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
          );
          
          if (distance < connectionDistance) {
            const opacity = connectionOpacity * (1 - distance / connectionDistance);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`; // Light blue connections
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        // Draw connections to mouse
        if (isMouseMoving) {
          const mouseDistance = Math.sqrt(
            Math.pow(p.x - mouseX, 2) + Math.pow(p.y - mouseY, 2)
          );
          
          if (mouseDistance < connectionDistance * 2) {
            const opacity = connectionOpacity * 2 * (1 - mouseDistance / (connectionDistance * 2));
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`; // Light blue mouse connections
            ctx.lineWidth = 0.5;
            ctx.stroke();
            
            // Also slightly attract particles to mouse
            p.speedX += (mouseX - p.x) * 0.0003;
            p.speedY += (mouseY - p.y) * 0.0003;
            
            // Limit speed
            const maxSpeed = 0.4;
            const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY);
            if (speed > maxSpeed) {
              p.speedX = (p.speedX / speed) * maxSpeed;
              p.speedY = (p.speedY / speed) * maxSpeed;
            }
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="particle-canvas" 
      style={{ 
        opacity: 0.7,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default ParticleBackground;