import type { Dispatch, SetStateAction } from "react";
import type { Theme } from "@/types/theme";

export type SessionContextState = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};
