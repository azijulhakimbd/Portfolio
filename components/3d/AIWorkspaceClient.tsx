"use client";

import dynamic from "next/dynamic";
import LoadingFallback from "./LoadingFallback";

const AIWorkspace = dynamic(
  () => import("./AIWorkspace"),
  {
    ssr: false,
    loading: () => <LoadingFallback />,
  }
);

export default function AIWorkspaceClient() {
  return <AIWorkspace />;
}