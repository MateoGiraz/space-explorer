import React from "react";
import { useTexture } from "@react-three/drei";

export function PlanetSystem({ planetCount = 50, distanceFactor = 200 }) {
    const textures = useTexture([
      "assets/textures/mercury.jpg",
      "assets/textures/jupiter.jpg",
      "assets/textures/mars.jpg",
      "assets/textures/neptune.jpg",
      "assets/textures/venus.jpg",
      "assets/textures/makemake.jpg",
      "assets/textures/haumea.jpg",
      "assets/textures/eris.jpg",
      "assets/textures/ceres.jpg",
    ]);
  
    const generateRandomPlanet = () => {
      const size = Math.random() * 50 + 1;
  
      const position = [
        (Math.random() - 0.5) * distanceFactor * 10, // x
        (Math.random() - 0.5) * distanceFactor * 5,  // y
        (Math.random() - 0.5) * distanceFactor * 10  // z
      ];
  
      const texture = textures[Math.floor(Math.random() * textures.length)];
  
      return { size, position, texture };
    };
  
    const randomPlanets = Array.from({ length: planetCount }, generateRandomPlanet);
  
    return (
      <>
        {randomPlanets.map((planet, index) => (
          <mesh key={index} position={planet.position} castShadow>
            <sphereGeometry args={[planet.size, 32, 32]} />
            <meshStandardMaterial map={planet.texture} />
          </mesh>
        ))}
      </>
    );
  }