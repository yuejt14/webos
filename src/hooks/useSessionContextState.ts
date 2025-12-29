import { useState } from "react";
import type { SessionContextState } from "@/types/contexts/session";
import type { Theme } from "@/types/theme";

export function useSessionContextState(): SessionContextState {
  const [theme, setTheme] = useState<Theme>("default");

  return {
    theme,
    setTheme,
  };
}
