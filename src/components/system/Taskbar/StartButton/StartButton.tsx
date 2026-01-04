import type { ReactElement } from "react";
import styles from "./StartButton.module.scss";
import StartButtonIcon from "./StartButtonIcon";

export default function StartButton(): ReactElement {
  return (
    <button className={styles.startButton} type="button" aria-label="Start">
      <StartButtonIcon />
    </button>
  );
}
