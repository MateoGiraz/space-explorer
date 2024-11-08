import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export function SphereEnv() {
  // Cambia "space_background.jpg" por una textura de cielo estrellado o de nebulosa.
  const spaceTexture = useTexture("assets/textures/space_background.png");

  return (
    <mesh>
      <sphereGeometry args={[1700, 60, 60]} />
      <meshBasicMaterial
        side={BackSide}
        map={spaceTexture}
      />
    </mesh>
  );
}
