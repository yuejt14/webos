"use client";

import dynamic from "next/dynamic";
import type { Processes } from "@/types/contexts/process";

const START_UP_PROCESSES: string[] = ["HelloWorld"];

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("@/components/apps/HelloWorld")),
    hasWindow: true,
  },
};

export function getStartupProcesses(): Processes {
  return Object.fromEntries(
    START_UP_PROCESSES.map((id) => [id, processDirectory[id]]),
  );
}
