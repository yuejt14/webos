"use client";

import type { ReactElement, ReactNode } from "react";
import { createContext, useContext } from "react";
import useProcessContextState from "@/hooks/useProcessContextState";
import type { ProcessContextState } from "@/types/contexts/process";
import processDirectory from "@/utils/processDirectory";

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export function useProcessContext(): ProcessContextState {
  return useContext(ProcessContext);
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
