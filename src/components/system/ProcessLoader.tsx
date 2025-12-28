"use client";

import dynamic from "next/dynamic";
import type { ReactElement } from "react";
import { useProcessContext } from "@/contexts/processes";
import type { Process } from "@/types/contexts/process";

const Window = dynamic(() => import("@/components/system/Window"));

function RenderProcess({ Component, hasWindow }: Process): ReactElement {
  return hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );
}

function ProcessLoader(): ReactElement {
  const { processes } = useProcessContext();
  return (
    <>
      {Object.entries(processes).map(([id, process]) => (
        <RenderProcess key={id} {...process} />
      ))}
    </>
  );
}

export default ProcessLoader;
