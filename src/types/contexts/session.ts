import type themes from "@/styles/themes.module.scss";

export type Theme = keyof typeof themes;

export type SessionContextState = {
  theme: Theme | undefined;
};
