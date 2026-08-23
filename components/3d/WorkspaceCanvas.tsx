"use client";

import { Canvas } from "@react-three/fiber";
import type { TechItem } from "@/lib/3d/scene-config";
import WorkspaceScene from "./WorkspaceScene";

type WorkspaceCanvasProps = {
  selectedTech: TechItem | null;
  onSelectTech: (tech: TechItem) => void;
  autoRotate: boolean;
  screenColor: string;
  lowPower: boolean;
};

export default function WorkspaceCanvas({
  selectedTech,
  onSelectTech,
  autoRotate,
  screenColor,
  lowPower,
}: WorkspaceCanvasProps) {
  return (
    <Canvas
      shadows={!lowPower}
      dpr={lowPower ? [1, 1.1] : [1, 1.5]}
      camera={{
        position: [0, 3.2, 8],
        fov: 45,
        near: 0.1,
        far: 50,
      }}
      gl={{
        antialias: !lowPower,
        powerPreference: "high-performance",
      }}
    >
      <WorkspaceScene
        selectedTech={selectedTech}
        onSelectTech={onSelectTech}
        autoRotate={autoRotate}
        screenColor={screenColor}
      />
    </Canvas>
  );
}