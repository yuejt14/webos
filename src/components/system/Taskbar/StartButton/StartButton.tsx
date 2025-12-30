import type { ReactElement } from "react";
import styles from "./StartButton.module.scss";

export default function StartButton(): ReactElement {
  return (
    <button className={styles.startButton} type="button">
      Start
    </button>
  );
}
