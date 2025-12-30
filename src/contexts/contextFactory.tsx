"use client";

import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export function contextFactory<T>(useContextState: () => T) {
  const Context = createContext<T | null>(null);
  const Provider = ({ children }: { children: ReactNode }) => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );
  const useHook = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useContext must be used within a Provider");
    }
    return context;
  };
  return [useHook, Provider] as const;
}
