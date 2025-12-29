"use client";

import type { ReactElement, ReactNode } from "react";
import { createContext, useContext } from "react";
import { useSessionContextState } from "@/hooks/useSessionContextState";
import type { SessionContextState } from "@/types/contexts/session";

const SessionContext = createContext<SessionContextState | null>(null);

export function useSessionContext(): SessionContextState {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }

  return session;
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
