"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group } from "three";
import type { TechItem } from "@/lib/3d/scene-config";

type TechOrbitProps = {
  items: TechItem[];
  selectedTech: string | null;
  onSelect: (tech: TechItem) => void;
  autoRotate: boolean;
};

export default function TechOrbit({
  items,
  selectedTech,
  onSelect,
  autoRotate,
}: TechOrbitProps) {
  const groupRef = useRef<Group>(null);

  const positions = useMemo(() => {
    const radius = 3.5;

    return items.map((_, index) => {
      const angle =
        (index / items.length) * Math.PI * 2;

      return [
        Math.cos(angle) * radius,
        1.6 + Math.sin(angle * 2) * 0.4,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, [items]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (autoRotate) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <TechNode
          key={item.id}
          item={item}
          position={positions[index]}
          selected={selectedTech === item.id}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}

type TechNodeProps = {
  item: TechItem;
  position: [number, number, number];
  selected: boolean;
  onSelect: (tech: TechItem) => void;
};

function TechNode({
  item,
  position,
  selected,
  onSelect,
}: TechNodeProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.position.y =
      position[1] + Math.sin(time * 1.5 + position[0]) * 0.12;
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(item);
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <mesh scale={selected ? 1.35 : hovered ? 1.18 : 1}>
        <sphereGeometry args={[0.18, 20, 20]} />

        <meshStandardMaterial
          color={item.color}
          emissive={item.color}
          emissiveIntensity={selected ? 3 : hovered ? 2 : 1}
        />
      </mesh>

      <mesh>
        <ringGeometry args={[0.28, 0.31, 32]} />

        <meshBasicMaterial
          color={item.color}
          transparent
          opacity={selected ? 0.8 : 0.3}
        />
      </mesh>

      <Html
        position={[0, 0.38, 0]}
        center
        distanceFactor={7}
      >
        <div
          className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[8px] tracking-wider backdrop-blur transition ${
            selected
              ? "border-emerald-300/60 bg-emerald-400/15 text-emerald-200"
              : "border-white/10 bg-black/60 text-white/60"
          }`}
        >
          {item.shortName}
        </div>
      </Html>
    </group>
  );
}