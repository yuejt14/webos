import type { RefObject } from "react";
import { useEffect } from "react";
import { vantaWaves } from "@/utils/vantaWaves";

export function useWallpaper(
  desktopRef: RefObject<HTMLDivElement | HTMLElement | null>,
) {
  useEffect(() => {
    if (!desktopRef?.current) return;
    return vantaWaves(desktopRef as RefObject<HTMLElement>);
  }, [desktopRef]);
}
