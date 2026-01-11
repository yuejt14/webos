"use client";

import type { ReactElement } from "react";
import { useProcessContext } from "@/contexts/processes";
import styles from "./StartButton.module.scss";
import StartButtonIcon from "./StartButtonIcon";

export default function StartButton(): ReactElement {
  const { openProcess } = useProcessContext();

  const handleClick = () => {
    openProcess("HelloWorld");
  };

  return (
    <button
      className={styles.startButton}
      type="button"
      aria-label="Start"
      onClick={handleClick}
    >
      <StartButtonIcon />
    </button>
  );
}
