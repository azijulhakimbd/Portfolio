"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { TechItem } from "@/lib/3d/scene-config";
import {
  isLowPowerDevice,
  prefersReducedMotion,
} from "@/lib/3d/performance";

import ControlPanel from "@/components/ai-lab/ControlPanel";
import PerformanceBadge from "@/components/ai-lab/PerformanceBadge";
import ProjectInfo from "@/components/ai-lab/ProjectInfo";
import LoadingFallback from "./LoadingFallback";

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

  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] =
    useState(false);
  const [lowPower, setLowPower] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    setReducedMotion(prefersReducedMotion());
    setLowPower(isLowPowerDevice());
  }, []);

  const effectiveAutoRotate = useMemo(() => {
    if (reducedMotion || lowPower) {
      return false;
    }

    return autoRotate;
  }, [autoRotate, lowPower, reducedMotion]);

  if (!mounted) {
    return <LoadingFallback />;
  }

  return (
    <section className="w-full">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#030807] shadow-2xl shadow-emerald-950/20 sm:min-h-[620px]">
          <WorkspaceCanvas
            selectedTech={selectedTech}
            onSelectTech={setSelectedTech}
            autoRotate={effectiveAutoRotate}
            screenColor={screenColor}
            lowPower={lowPower}
          />

          <div className="pointer-events-none absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
            <PerformanceBadge
              lowPower={lowPower}
              reducedMotion={reducedMotion}
            />
          </div>

          <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 flex justify-center sm:bottom-6">
            <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-center text-[10px] text-white/40 backdrop-blur-xl">
              Drag to orbit · Scroll to zoom · Click technology nodes
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ControlPanel
            autoRotate={autoRotate}
            onToggleAutoRotate={() =>
              setAutoRotate((value) => !value)
            }
            screenColor={screenColor}
            onScreenColorChange={setScreenColor}
          />

          <ProjectInfo
            tech={selectedTech}
            onClose={() => setSelectedTech(null)}
          />
        </div>
      </div>
    </section>
  );
}