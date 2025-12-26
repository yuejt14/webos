"use client";

import Window from "@/components/system/Window";
import { useProcessContext } from "@/contexts/processes";
import type { ReactElement } from "react";

function ProcessLoader(): ReactElement {
  const { processes } = useProcessContext();
  return (
    <>
      {Object.entries(processes).map(([id, { Component, hasWindow }]) => (
        <Window key={id}>
          <Component key={id} />
        </Window>
      ))}
    </>
  );
}

export default ProcessLoader;
