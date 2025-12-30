import type { RefObject } from "react";

export type WallpaperEffect = (
  desktopRef: RefObject<HTMLElement>,
) => () => void;
