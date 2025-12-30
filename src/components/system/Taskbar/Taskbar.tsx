import type { ReactElement } from "react";
import StartButton from "@/components/system/StartButton/StartButton";
import styles from "./Taskbar.module.scss";
export default function Taskbar(): ReactElement {
  return (
    <nav className={styles.taskbar}>
      <StartButton />
    </nav>
  );
}
