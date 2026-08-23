"use client";

import { Html } from "@react-three/drei";

type ProjectScreenProps = {
  color: string;
};

export default function ProjectScreen({
  color,
}: ProjectScreenProps) {
  return (
    <group position={[0, 1.96, -0.94]}>
      <mesh rotation={[-0.12, 0, 0]}>
        <planeGeometry args={[3.65, 2.15]} />

        <meshStandardMaterial
          color="#020504"
          emissive={color}
          emissiveIntensity={0.08}
          roughness={0.25}
          metalness={0.2}
        />
      </mesh>

      <Html
        transform
        position={[0, 0, 0.08]}
        rotation={[-0.12, 0, 0]}
        distanceFactor={4}
      >
        <div className="pointer-events-none w-[250px] rounded-lg bg-black/80 p-4 font-mono text-white shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[9px] text-emerald-400">
              MAH_AI_LAB
            </span>

            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </div>

          <p className="text-lg font-bold">
            AI ENGINEER
          </p>

          <p className="mt-1 text-[10px] text-white/50">
            Building intelligent web experiences.
          </p>

          <div className="mt-4 space-y-1.5 text-[9px] text-white/60">
            <p>
              <span className="text-emerald-400">01</span> Next.js
            </p>

            <p>
              <span className="text-emerald-400">02</span> TypeScript
            </p>

            <p>
              <span className="text-emerald-400">03</span> AI Engineering
            </p>

            <p>
              <span className="text-emerald-400">04</span> Full Stack
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
}