import React, { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const LoadingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="particle-canvas">
      <Particles
        id="loading-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#5688ca", "#8baede", "#ffffff", "#64ffda"],
            },
            shape: {
              type: ["circle", "triangle", "edge"],
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              animation: {
                enable: true,
                speed: 4,
                minimumValue: 0.3,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#5688ca",
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.1,
                color: "#8baede"
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            twinkle: {
              particles: {
                enable: true,
                color: "#ffffff",
                frequency: 0.05,
                opacity: 1
              },
              lines: {
                enable: true,
                color: "#5688ca",
                frequency: 0.005,
                opacity: 1
              }
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          retina_detect: true,
          // Quantum-themed animation features
          motion: {
            reduce: {
              factor: 0,
              value: true
            }
          },
          particles: {
            collisions: {
              enable: true,
              mode: "bounce"
            },
            color: {
              value: ["#5688ca", "#8baede", "#ffffff", "#64ffda"],
              animation: {
                enable: true,
                speed: 10,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out"
              },
              trail: {
                enable: true,
                length: 5,
                fillColor: "#0A192F"
              },
              warp: true
            },
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            opacity: {
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: {
                enable: true,
                minimumValue: 0.5
              },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#5688ca",
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.1
              }
            },
            orbit: {
              enable: true,
              radius: 25,
              rotation: {
                random: {
                  enable: true,
                  minimumValue: 0.1
                },
                value: 0.1
              }
            },
            wobble: {
              distance: 5,
              enable: true,
              speed: {
                min: -5,
                max: 5
              }
            },
            zIndex: {
              random: {
                enable: true,
                minimumValue: 0
              },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1
            }
          }
        }}
      />
    </div>
  );
};

export default LoadingParticles; 