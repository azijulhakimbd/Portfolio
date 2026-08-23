"use client";

import { Activity, Smartphone, Zap } from "lucide-react";

type PerformanceBadgeProps = {
  lowPower: boolean;
  reducedMotion: boolean;
};

export default function PerformanceBadge({
  lowPower,
  reducedMotion,
}: PerformanceBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs text-emerald-300">
        <Activity className="h-3.5 w-3.5" />
        Optimized 3D
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50">
        <Zap className="h-3.5 w-3.5" />
        {lowPower ? "Low-power mode" : "Performance mode"}
      </div>

      {reducedMotion && (
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50">
          <Smartphone className="h-3.5 w-3.5" />
          Reduced motion
        </div>
      )}
    </div>
  );
}