import React from "react";
import { useTexture } from "@react-three/drei";

export function Venus() {
  const earthTexture = useTexture("assets/textures/venus.jpg")
  
  return (
    <>
      <mesh position={[-700, 100, -1500]} castShadow>
        <sphereGeometry args={[250, 512, 512]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
    </>
  );
}
