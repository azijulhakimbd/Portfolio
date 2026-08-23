"use client";

import { OrbitControls, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { TECH_ITEMS, type TechItem } from "@/lib/3d/scene-config";

import Hologram from "./Hologram";
import Laptop from "./Laptop";
import SceneLights from "./SceneLights";
import TechOrbit from "./TechOrbit";

type WorkspaceSceneProps = {
  selectedTech: TechItem | null;
  onSelectTech: (tech: TechItem) => void;
  autoRotate: boolean;
  screenColor: string;
};

export default function WorkspaceScene({
  selectedTech,
  onSelectTech,
  autoRotate,
  screenColor,
}: WorkspaceSceneProps) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 3.2, 8);
  }, [camera]);

  return (
    <>
      <color attach="background" args={["#030807"]} />

      <fog
        attach="fog"
        args={["#030807", 8, 20]}
      />

      <SceneLights />

      <Stars
        radius={30}
        depth={20}
        count={350}
        factor={1.5}
        saturation={0}
        fade
        speed={0.2}
      />

      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.15, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />

        <meshStandardMaterial
          color="#050b09"
          metalness={0.5}
          roughness={0.75}
        />
      </mesh>

      {/* Desk */}
      <mesh
        position={[0, -0.02, 0]}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[7, 0.25, 4.2]} />

        <meshStandardMaterial
          color="#101816"
          metalness={0.5}
          roughness={0.55}
        />
      </mesh>

      {/* Laptop */}
      <Laptop screenColor={screenColor} />

      {/* AI Core */}
      <Hologram active={Boolean(selectedTech)} />

      {/* Technology orbit */}
      <TechOrbit
        items={TECH_ITEMS}
        selectedTech={selectedTech?.id ?? null}
        onSelect={onSelectTech}
        autoRotate={autoRotate}
      />

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={5}
        maxDistance={12}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.05}
        enableDamping
        dampingFactor={0.06}
      />
    </>
  );
}