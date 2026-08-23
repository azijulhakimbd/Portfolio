"use client";

export default function LoadingFallback() {
  return (
    <div className="flex min-h-[520px] w-full items-center justify-center rounded-3xl border border-emerald-500/10 bg-[#030807]">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-emerald-500/20 border-t-emerald-400" />

        <div>
          <p className="text-sm font-medium text-emerald-300">
            Initializing AI Lab
          </p>

          <p className="mt-1 text-xs text-white/40">
            Preparing the 3D workspace...
          </p>
        </div>
      </div>
    </div>
  );
}