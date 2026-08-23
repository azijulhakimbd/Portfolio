"use client";

import { Environment } from "@react-three/drei";

export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.45} />

      <directionalLight
        position={[4, 7, 4]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight
        position={[-4, 3, 2]}
        intensity={12}
        distance={8}
        color="#10b981"
      />

      <pointLight
        position={[4, 2, -3]}
        intensity={8}
        distance={7}
        color="#34d399"
      />

      <Environment preset="night" />
    </>
  );
}