"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { TechItem } from "@/lib/3d/scene-config";

import {
  isLowPowerDevice,
  prefersReducedMotion,
} from "@/lib/3d/performance";

import ControlPanel from "@/components/ai-lab/ControlPanel";
import PerformanceBadge from "@/components/ai-lab/PerformanceBadge";
import ProjectInfo from "@/components/ai-lab/ProjectInfo";

import LoadingFallback from "./LoadingFallback";
import PerformanceMonitor from "./PerformanceMonitor";

const WorkspaceCanvas = dynamic(
  () => import("./WorkspaceCanvas"),
  {
    ssr: false,
    loading: () => <LoadingFallback />,
  }
);

export default function AIWorkspace() {
  const [selectedTech, setSelectedTech] =
    useState<TechItem | null>(null);

  const [autoRotate, setAutoRotate] =
    useState(true);

  const [screenColor, setScreenColor] =
    useState("#10b981");

  const [mounted, setMounted] =
    useState(false);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  const [lowPower, setLowPower] =
    useState(false);

  const [touchDevice, setTouchDevice] =
    useState(false);

  /*
   * Browser-only capability detection.
   *
   * This runs after hydration so we don't create
   * server/client markup mismatches.
   */
  useEffect(() => {
    setMounted(true);

    setReducedMotion(
      prefersReducedMotion()
    );

    setLowPower(
      isLowPowerDevice()
    );

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

  /*
   * Auto rotation is automatically disabled when:
   *
   * - user prefers reduced motion
   * - device appears to be low power
   *
   * This keeps the 3D experience accessible and
   * reduces unnecessary GPU work.
   */
  const effectiveAutoRotate =
    autoRotate &&
    !reducedMotion &&
    !lowPower;

  /*
   * Avoid rendering browser-dependent content before
   * hydration has completed.
   */
  if (!mounted) {
    return <LoadingFallback />;
  }

  return (
    <section
      aria-label="Interactive AI workspace"
      className="w-full"
    >
      <div
        className="
          grid
          gap-4
          lg:grid-cols-[minmax(0,1fr)_320px]
        "
      >
        {/* =================================================
            3D VIEWPORT
        ================================================== */}

        <div
          className="
            relative
            h-[520px]
            touch-none
            overflow-hidden
            rounded-3xl
            border
            border-emerald-500/10
            bg-[#030807]
            shadow-2xl
            shadow-emerald-950/20
            sm:h-[620px]
          "
        >
          <WorkspaceCanvas
            selectedTech={selectedTech}
            onSelectTech={setSelectedTech}
            autoRotate={effectiveAutoRotate}
            screenColor={screenColor}
            lowPower={lowPower}
          />

          {/* ===============================================
              PERFORMANCE STATUS
          ================================================ */}

          <div
            className="
              pointer-events-none
              absolute
              left-4
              top-4
              z-10
              sm:left-6
              sm:top-6
            "
          >
            <PerformanceBadge
              lowPower={lowPower}
              reducedMotion={
                reducedMotion
              }
            />
          </div>

          {/* ===============================================
              LIVE FPS
          ================================================ */}

          <div
            className="
              pointer-events-none
              absolute
              right-4
              top-4
              z-10
              sm:right-6
              sm:top-6
            "
          >
            <PerformanceMonitor />
          </div>

          {/* ===============================================
              INTERACTION HELP
          ================================================ */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-4
              left-4
              right-4
              z-10
              flex
              justify-center
              sm:bottom-6
            "
          >
            <div
              className="
                rounded-full
                border
                border-white/10
                bg-black/50
                px-4
                py-2
                text-center
                text-[10px]
                leading-relaxed
                text-white/40
                backdrop-blur-xl
              "
            >
              {touchDevice ? (
                <>
                  Drag to orbit · Pinch to zoom ·
                  Tap technology nodes
                </>
              ) : (
                <>
                  Drag to orbit · Scroll to zoom ·
                  Click technology nodes
                </>
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            CONTROL SIDEBAR
        ================================================== */}

        <aside
          className="
            flex
            min-w-0
            flex-col
            gap-4
          "
        >
          <ControlPanel
            autoRotate={autoRotate}
            onToggleAutoRotate={() =>
              setAutoRotate(
                (value) => !value
              )
            }
            screenColor={screenColor}
            onScreenColorChange={
              setScreenColor
            }
          />

          <ProjectInfo
            tech={selectedTech}
            onClose={() =>
              setSelectedTech(null)
            }
          />
        </aside>
      </div>
    </section>
  );
}