"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Gauge } from "lucide-react";

type PerformanceMonitorProps = {
  enabled?: boolean;
};

type PerformanceState = {
  fps: number;
  averageFps: number;
};

export default function PerformanceMonitor({
  enabled = true,
}: PerformanceMonitorProps) {
  const [performance, setPerformance] =
    useState<PerformanceState>({
      fps: 0,
      averageFps: 0,
    });

  const framesRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const samplesRef = useRef<number[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const measure = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      framesRef.current += 1;

      const elapsed = time - lastTimeRef.current;

      if (elapsed >= 500) {
        const fps = Math.round(
          (framesRef.current / elapsed) * 1000
        );

        samplesRef.current.push(fps);

        if (samplesRef.current.length > 10) {
          samplesRef.current.shift();
        }

        const average =
          samplesRef.current.reduce(
            (sum, value) => sum + value,
            0
          ) / samplesRef.current.length;

        setPerformance({
          fps,
          averageFps: Math.round(average),
        });

        framesRef.current = 0;
        lastTimeRef.current = time;
      }

      animationFrameRef.current =
        requestAnimationFrame(measure);
    };

    animationFrameRef.current =
      requestAnimationFrame(measure);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled]);

  const status =
    performance.averageFps >= 50
      ? "Excellent"
      : performance.averageFps >= 30
        ? "Good"
        : performance.averageFps > 0
          ? "Needs optimization"
          : "Measuring";

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-[10px] backdrop-blur-xl">
      <Activity className="h-3 w-3 text-emerald-400" />

      <span className="text-white/50">
        FPS
      </span>

      <span className="font-semibold text-white">
        {performance.fps || "--"}
      </span>

      <span className="text-white/20">·</span>

      <Gauge className="h-3 w-3 text-emerald-400" />

      <span className="text-white/50">
        Avg
      </span>

      <span className="font-semibold text-white">
        {performance.averageFps || "--"}
      </span>

      <span
        className={
          status === "Excellent"
            ? "text-emerald-400"
            : status === "Good"
              ? "text-yellow-400"
              : status === "Needs optimization"
                ? "text-red-400"
                : "text-white/40"
        }
      >
        {status}
      </span>
    </div>
  );
}