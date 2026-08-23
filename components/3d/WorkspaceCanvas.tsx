"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import {
  SCENE_CONFIG,
  type TechItem,
} from "@/lib/3d/scene-config";

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
  const [touchDevice, setTouchDevice] =
    useState(false);

  useEffect(() => {
    const detectTouchDevice = () => {
      const isTouch =
        window.matchMedia(
          "(pointer: coarse)"
        ).matches ||
        navigator.maxTouchPoints > 0;

      setTouchDevice(isTouch);
    };

    detectTouchDevice();

    window.addEventListener(
      "resize",
      detectTouchDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        detectTouchDevice
      );
    };
  }, []);

  const enableShadows =
    !lowPower &&
    !touchDevice &&
    SCENE_CONFIG.performance.desktopShadows;

  const enableAntialias =
    !lowPower &&
    !touchDevice &&
    SCENE_CONFIG.performance.desktopAntialias;

  const dpr = lowPower
    ? SCENE_CONFIG.performance.lowPowerDpr
    : touchDevice
      ? SCENE_CONFIG.performance.dprMobile
      : SCENE_CONFIG.performance.dprDesktop;

  const cameraFov = touchDevice
    ? SCENE_CONFIG.responsive.mobileCameraFov
    : SCENE_CONFIG.responsive.desktopCameraFov;

  return (
    <div className="h-full w-full touch-none">
      <Canvas
        shadows={enableShadows}
        dpr={dpr}
        camera={{
          position:
            SCENE_CONFIG.camera.position,
          fov: cameraFov,
          near: SCENE_CONFIG.camera.near,
          far: SCENE_CONFIG.camera.far,
        }}
        gl={{
          antialias: enableAntialias,
          powerPreference:
            "high-performance",
        }}
        performance={{
          min: lowPower ? 0.5 : 0.7,
          max: 1,
          debounce: 200,
        }}
      >
        <WorkspaceScene
          selectedTech={selectedTech}
          onSelectTech={onSelectTech}
          autoRotate={autoRotate}
          screenColor={screenColor}
          lowPower={lowPower}
          touchDevice={touchDevice}
        />
      </Canvas>
    </div>
  );
}