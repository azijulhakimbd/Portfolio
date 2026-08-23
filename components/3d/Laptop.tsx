"use client";

import { useRef } from "react";
import { Group } from "three";
import ProjectScreen from "./ProjectScreen";

type LaptopProps = {
  screenColor: string;
};

export default function Laptop({ screenColor }: LaptopProps) {
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef} position={[0, 0.55, 0]}>
      {/* Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.25, 2.7]} />
        <meshStandardMaterial
          color="#101816"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0.16, 0.12]} receiveShadow>
        <boxGeometry args={[3.7, 0.06, 1.9]} />
        <meshStandardMaterial
          color="#17231f"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.21, 0.72]}>
        <boxGeometry args={[1.2, 0.03, 0.65]} />
        <meshStandardMaterial
          color="#24352f"
          metalness={0.3}
          roughness={0.45}
        />
      </mesh>

      {/* Screen frame */}
      <mesh position={[0, 1.95, -1.05]} rotation={[-0.12, 0, 0]} castShadow>
        <boxGeometry args={[4.1, 2.55, 0.18]} />
        <meshStandardMaterial
          color="#0b100e"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <ProjectScreen color={screenColor} />

      {/* Screen hinge */}
      <mesh position={[0, 0.72, -1.03]}>
        <boxGeometry args={[3.4, 0.12, 0.18]} />
        <meshStandardMaterial
          color="#1c2b26"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}