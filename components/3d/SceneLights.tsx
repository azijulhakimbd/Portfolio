"use client";

import { SCENE_CONFIG } from "@/lib/3d/scene-config";

type SceneLightsProps = {
  lowPower: boolean;
  touchDevice: boolean;
};

export default function SceneLights({
  lowPower,
  touchDevice,
}: SceneLightsProps) {
  const enableShadows =
    !lowPower &&
    !touchDevice &&
    SCENE_CONFIG.performance.desktopShadows;

  const {
    ambientIntensity,
    directional,
    keyLight,
    fillLight,
  } = SCENE_CONFIG.lighting;

  return (
    <>
      {/* Ambient base light */}
      <ambientLight
        intensity={ambientIntensity}
      />

      {/* Main directional light */}
      <directionalLight
        position={directional.position}
        intensity={directional.intensity}
        castShadow={enableShadows}
        shadow-mapSize-width={
          enableShadows ? 512 : 256
        }
        shadow-mapSize-height={
          enableShadows ? 512 : 256
        }
      />

      {/* Emerald key light */}
      <pointLight
        position={keyLight.position}
        intensity={keyLight.intensity}
        distance={keyLight.distance}
        color={keyLight.color}
      />

      {/* Emerald fill light */}
      <pointLight
        position={fillLight.position}
        intensity={fillLight.intensity}
        distance={fillLight.distance}
        color={fillLight.color}
      />
    </>
  );
}