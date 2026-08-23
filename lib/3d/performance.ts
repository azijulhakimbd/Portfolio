"use client";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isLowPowerDevice(): boolean {
  if (typeof navigator === "undefined") {
    return false;
  }

  const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;
  const deviceMemory =
    "deviceMemory" in navigator
      ? Number(
          (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8
        )
      : 8;

  return hardwareConcurrency <= 4 || deviceMemory <= 4;
}

export function shouldUseStaticFallback(): boolean {
  return prefersReducedMotion() || isLowPowerDevice();
}