"use client";

import type { ReactElement } from "react";
import { RenderProcess } from "@/components/system/Processes/RenderProcess";
import { useProcessContext } from "@/contexts/processes";

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
