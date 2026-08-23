"use client";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

type HologramProps = {
  active: boolean;
};

export default function Hologram({
  active,
}: HologramProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.rotation.x = Math.sin(time * 0.6) * 0.15;

    meshRef.current.position.y =
      2.4 + Math.sin(time * 1.5) * 0.12;
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh
        ref={meshRef}
        position={[0, 2.4, 0]}
      >
        <icosahedronGeometry args={[0.65, 2]} />

        <meshStandardMaterial
          color={active ? "#34d399" : "#10b981"}
          emissive="#10b981"
          emissiveIntensity={active ? 2.5 : 1.4}
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>

      <mesh position={[0, 2.4, 0]}>
        <sphereGeometry args={[0.32, 24, 24]} />

        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.22}
        />
      </mesh>

      <Html position={[0, 3.2, 0]} center>
        <div className="rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 font-mono text-[9px] tracking-[0.25em] text-emerald-300 backdrop-blur">
          AI CORE
        </div>
      </Html>
    </group>
  );
}