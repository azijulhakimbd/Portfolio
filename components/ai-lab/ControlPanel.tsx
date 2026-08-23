"use client";

import { Rotate3D, Sparkles } from "lucide-react";

type ControlPanelProps = {
  autoRotate: boolean;
  onToggleAutoRotate: () => void;
  screenColor: string;
  onScreenColorChange: (color: string) => void;
};

const COLORS = [
  "#10b981",
  "#34d399",
  "#22d3ee",
  "#818cf8",
  "#f472b6",
];

export default function ControlPanel({
  autoRotate,
  onToggleAutoRotate,
  screenColor,
  onScreenColorChange,
}: ControlPanelProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-400" />

          <h2 className="text-sm font-semibold text-white">
            Scene Controls
          </h2>
        </div>

        <p className="mt-1 text-xs text-white/40">
          Customize the AI workspace.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-white/60">
              Auto rotation
            </span>

            <button
              type="button"
              onClick={onToggleAutoRotate}
              aria-pressed={autoRotate}
              className={`relative h-6 w-11 rounded-full border transition ${
                autoRotate
                  ? "border-emerald-400/40 bg-emerald-400/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full transition ${
                  autoRotate
                    ? "left-6 bg-emerald-400"
                    : "left-1 bg-white/30"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-white/30">
            <Rotate3D className="h-3 w-3" />
            {autoRotate ? "Orbiting automatically" : "Manual orbit"}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs text-white/60">
            AI screen color
          </p>

          <div className="flex gap-2">
            {COLORS.map((color) => (
              <button
                key={color}
                type="button"
                aria-label={`Set screen color to ${color}`}
                aria-pressed={screenColor === color}
                onClick={() => onScreenColorChange(color)}
                className={`h-7 w-7 rounded-full border-2 transition ${
                  screenColor === color
                    ? "scale-110 border-white"
                    : "border-transparent"
                }`}
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 12px ${color}55`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}