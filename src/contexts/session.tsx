"use client";

import type { ReactElement, ReactNode } from "react";
import { createContext, useContext } from "react";
import useSessionContextState from "@/hooks/useSessionContextState";
import type { SessionContextState } from "@/types/contexts/session";

const SessionContext = createContext<SessionContextState>({ theme: undefined });

export function useSessionContext(): SessionContextState {
  return useContext(SessionContext);
}

export function SessionProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <SessionContext.Provider value={useSessionContextState()}>
      {children}
    </SessionContext.Provider>
  );
}
