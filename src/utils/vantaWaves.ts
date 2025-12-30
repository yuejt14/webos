import type { RefObject } from "react";
import type { WallpaperEffect } from "@/types/wallpaper";

const disableControls = {
  mouseControls: false,
  touchControls: false,
};

export const vantaWaves: WallpaperEffect = (
  desktopRef: RefObject<HTMLElement>,
) => {
  let vantaEffect: { destroy: () => void } | null = null;

  (async () => {
    const [{ default: THREE }, { default: WAVES }] = await Promise.all([
      import("@/libs/three.min"),
      import("@/libs/vanta.waves.min"),
    ]);

    if (desktopRef.current) {
      vantaEffect = WAVES({
        el: desktopRef.current,
        THREE,
        ...disableControls,
      });
    }
  })();

  return () => {
    vantaEffect?.destroy();
  };
};
