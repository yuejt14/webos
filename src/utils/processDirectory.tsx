"use client";

import type { Processes } from "@/types/contexts/process";
import dynamic from "next/dynamic";

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("@/components/apps/HelloWorld")),
  },
};

export default processDirectory;
