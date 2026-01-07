"use client";

import type { ReactElement } from "react";
import { useRef } from "react";
import { useWallpaper } from "@/hooks/useWallpaper";
import styles from "./Desktop.module.scss";

export default function Desktop(): ReactElement {
  const desktopRef = useRef<HTMLDivElement>(null);
  useWallpaper(desktopRef);
  return <div className={styles.desktop} ref={desktopRef} />;
}
