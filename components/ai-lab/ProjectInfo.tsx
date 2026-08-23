"use client";

import { ArrowUpRight, Cpu, X } from "lucide-react";
import type { TechItem } from "@/lib/3d/scene-config";

type ProjectInfoProps = {
  tech: TechItem | null;
  onClose: () => void;
};

export default function ProjectInfo({
  tech,
  onClose,
}: ProjectInfoProps) {
  if (!tech) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
            <Cpu className="h-5 w-5 text-emerald-400" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Explore the workspace
            </p>

            <p className="text-xs text-white/40">
              Click a technology node in the scene.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5 backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: tech.color,
                boxShadow: `0 0 15px ${tech.color}`,
              }}
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              Selected technology
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">
            {tech.name}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1.5 text-white/40 transition hover:bg-white/10 hover:text-white"
          aria-label="Close technology information"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-sm leading-6 text-white/60">
        {tech.description}
      </p>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20"
      >
        Explore projects
        <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}