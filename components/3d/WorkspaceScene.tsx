"use client";

import {
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

import {
  SCENE_CONFIG,
  TECH_ITEMS,
  type TechItem,
} from "@/lib/3d/scene-config";

import CameraRig from "./CameraRig";
import Hologram from "./Hologram";
import Laptop from "./Laptop";
import SceneLights from "./SceneLights";
import TechOrbit from "./TechOrbit";

type WorkspaceSceneProps = {
  selectedTech: TechItem | null;
  onSelectTech: (tech: TechItem) => void;
  autoRotate: boolean;
  screenColor: string;
  lowPower: boolean;
  touchDevice: boolean;
};

export default function WorkspaceScene({
  selectedTech,
  onSelectTech,
  autoRotate,
  screenColor,
  lowPower,
  touchDevice,
}: WorkspaceSceneProps) {
  const { camera } = useThree();

  /*
   * Cursor parallax is intentionally disabled on:
   * - touch devices
   * - low-power devices
   *
   * This keeps the interaction useful without adding
   * unnecessary work on mobile.
   */
  const enableParallax =
    SCENE_CONFIG.interaction.cursorParallax &&
    !lowPower &&
    !touchDevice;

  /*
   * Configure star count according to device capability.
   */
  const starCount = lowPower
    ? SCENE_CONFIG.performance.lowPowerStarCount
    : touchDevice
      ? SCENE_CONFIG.stars.mobileCount
      : SCENE_CONFIG.stars.desktopCount;

  /*
   * Configure star animation according to device capability.
   */
  const starSpeed = lowPower
    ? 0
    : touchDevice
      ? SCENE_CONFIG.stars.mobileSpeed
      : SCENE_CONFIG.stars.desktopSpeed;

  /*
   * Reset camera whenever the scene mounts.
   */
  useEffect(() => {
    const [x, y, z] =
      SCENE_CONFIG.camera.position;

    camera.position.set(x, y, z);

    camera.lookAt(
      ...SCENE_CONFIG.camera.lookAt
    );
  }, [camera]);

  /*
   * Mobile devices do not need expensive shadows.
   */
  const enableShadows =
    !lowPower &&
    !touchDevice &&
    SCENE_CONFIG.performance.desktopShadows;

  return (
    <>
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <color
        attach="background"
        args={[
          SCENE_CONFIG.colors.background,
        ]}
      />

      <fog
        attach="fog"
        args={[
          SCENE_CONFIG.colors.background,
          8,
          20,
        ]}
      />

      {/* =====================================================
          LIGHTING
      ====================================================== */}

      <SceneLights
        lowPower={lowPower}
        touchDevice={touchDevice}
      />

      {/* =====================================================
          STAR FIELD
      ====================================================== */}

      <Stars
        radius={SCENE_CONFIG.stars.radius}
        depth={SCENE_CONFIG.stars.depth}
        count={starCount}
        factor={SCENE_CONFIG.stars.factor}
        saturation={0}
        fade
        speed={starSpeed}
      />

      {/* =====================================================
          CURSOR-REACTIVE CAMERA
      ====================================================== */}

      <CameraRig
        enabled={enableParallax}
      />

      {/* =====================================================
          WORKSPACE
      ====================================================== */}

      <group>
        {/* Floor */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.15, 0]}
          receiveShadow={enableShadows}
        >
          <planeGeometry
            args={[
              SCENE_CONFIG.workspace.floorSize,
              SCENE_CONFIG.workspace.floorSize,
            ]}
          />

          <meshStandardMaterial
            color="#050b09"
            metalness={0.5}
            roughness={0.75}
          />
        </mesh>

        {/* Desk */}
        <mesh
          position={
            SCENE_CONFIG.workspace.desk.position
          }
          receiveShadow={enableShadows}
          castShadow={enableShadows}
        >
          <boxGeometry
            args={[
              SCENE_CONFIG.workspace.desk.width,
              SCENE_CONFIG.workspace.desk.height,
              SCENE_CONFIG.workspace.desk.depth,
            ]}
          />

          <meshStandardMaterial
            color={
              SCENE_CONFIG.colors.surfaceLight
            }
            metalness={0.5}
            roughness={0.55}
          />
        </mesh>

        {/* =================================================
            LAPTOP
        ================================================== */}

        <Laptop
          screenColor={screenColor}
        />

        {/* =================================================
            AI HOLOGRAM
        ================================================== */}

        <Hologram
          active={Boolean(selectedTech)}
        />

        {/* =================================================
            TECHNOLOGY ORBIT
        ================================================== */}

        <TechOrbit
          items={TECH_ITEMS}
          selectedTech={
            selectedTech?.id ?? null
          }
          onSelect={onSelectTech}
          autoRotate={autoRotate}
        />
      </group>

      {/* =====================================================
          ORBIT CONTROLS
      ====================================================== */}

      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        enableDamping
        dampingFactor={
          touchDevice
            ? SCENE_CONFIG.orbit
                .mobileDampingFactor
            : SCENE_CONFIG.orbit
                .dampingFactor
        }
        rotateSpeed={
          touchDevice
            ? SCENE_CONFIG.orbit
                .mobileRotateSpeed
            : SCENE_CONFIG.orbit
                .desktopRotateSpeed
        }
        zoomSpeed={
          touchDevice
            ? SCENE_CONFIG.orbit
                .mobileZoomSpeed
            : SCENE_CONFIG.orbit
                .desktopZoomSpeed
        }
        minDistance={
          SCENE_CONFIG.orbit.minDistance
        }
        maxDistance={
          SCENE_CONFIG.orbit.maxDistance
        }
        minPolarAngle={
          SCENE_CONFIG.orbit.minPolarAngle
        }
        maxPolarAngle={
          SCENE_CONFIG.orbit.maxPolarAngle
        }
        touches={{
          ONE: 1,
          TWO: 2,
        }}
      />
    </>
  );
}