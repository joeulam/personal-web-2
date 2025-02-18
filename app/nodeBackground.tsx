"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

export default function NodeBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 100, 
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#a3a2a2", 
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#d1d1d1",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract", 
            },
            onClick: {
              enable: true,
              mode: "push", 
            },
          },
          modes: {
           
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
