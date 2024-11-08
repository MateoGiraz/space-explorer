import React from "react";
import { useTexture } from "@react-three/drei";

export function Earth() {
  const earthTexture = useTexture("assets/textures/earth.jpg")
  
  return (
    <>
      <mesh position={[0, -50, -500]} castShadow>
        <sphereGeometry args={[120, 512, 512]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
    </>
  );
}
