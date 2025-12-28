"use client";

import type { ReactElement, ReactNode } from "react";
import { createContext, useContext } from "react";
import useProcessContextState from "@/hooks/useProcessContextState";
import type { ProcessContextState } from "@/types/contexts/process";
import processDirectory from "@/utils/processDirectory";

const ProcessContext = createContext<ProcessContextState | null>(null);

export function useProcessContext(): ProcessContextState {
  const processes = useContext(ProcessContext);
  if (!processes) {
    throw new Error("useProcessContext must be used within a ProcessProvider");
  }

  return processes;
}

export function ProcessProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
      {children}
    </ProcessContext.Provider>
  );
}
