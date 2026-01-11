"use client";

import dynamic from "next/dynamic";
import type {
  Processes,
  SystemProcess,
  WindowedProcess,
} from "@/types/contexts/process";

// System processes - always run, manage the OS shell
export const systemDirectory: Record<string, SystemProcess> = {
  Desktop: {
    Component: dynamic(() => import("@/components/system/Desktop/Desktop")),
  },
  Taskbar: {
    Component: dynamic(() => import("@/components/system/Taskbar/Taskbar")),
  },
};

// App registry - user applications with windows
export const appDirectory: Record<string, WindowedProcess> = {
  HelloWorld: {
    Component: dynamic(() => import("@/components/apps/HelloWorld/HelloWorld")),
    hasWindow: true,
    title: "Hello World",
    icon: "/window.svg",
  },
};

// Apps that auto-launch on startup
const AUTO_START_APPS: string[] = ["HelloWorld"];

export function getSystemProcesses(): Record<string, SystemProcess> {
  return { ...systemDirectory };
}

export function getStartupApps(): Record<string, WindowedProcess> {
  return Object.fromEntries(
    AUTO_START_APPS.map((id) => [id, appDirectory[id]]),
  );
}

export function getStartupProcesses(): Processes {
  return {
    ...getSystemProcesses(),
    ...getStartupApps(),
  };
}
