"use client";

import type { ReactElement } from "react";
import { useRef } from "react";
import { useWallpaper } from "@/hooks/useWallpaper";
import styles from "./Desktop.module.scss";

export function Desktop({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const desktopRef = useRef<HTMLElement>(null);
  useWallpaper(desktopRef);
  return (
    <main className={styles.desktop} ref={desktopRef}>
      {children}
    </main>
  );
}
