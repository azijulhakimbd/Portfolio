"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Group } from "three";

type CameraRigProps = {
  enabled: boolean;
};

export default function CameraRig({
  enabled,
}: CameraRigProps) {
  const rigRef = useRef<Group>(null);

  const pointerRef = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!enabled) return;

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      pointerRef.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      pointerRef.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, [enabled]);

  useFrame(() => {
    if (!rigRef.current || !enabled) return;

    const targetX =
      pointerRef.current.x * 0.18;

    const targetY =
      pointerRef.current.y * 0.1;

    rigRef.current.rotation.y +=
      (targetX - rigRef.current.rotation.y) * 0.025;

    rigRef.current.rotation.x +=
      (targetY - rigRef.current.rotation.x) * 0.025;
  });

  return <group ref={rigRef} />;
}