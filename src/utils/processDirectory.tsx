"use client";

import dynamic from "next/dynamic";
import type { Processes } from "@/types/contexts/process";

const START_UP_PROCESSES: string[] = ["HelloWorld", "Taskbar"];

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("@/components/apps/HelloWorld/HelloWorld")),
    hasWindow: true,
  },
  Taskbar: {
    Component: dynamic(() => import("@/components/system/Taskbar/Taskbar")),
    hasWindow: false,
  },
};

export function getStartupProcesses(): Processes {
  return Object.fromEntries(
    START_UP_PROCESSES.map((id) => [id, processDirectory[id]]),
  );
}
