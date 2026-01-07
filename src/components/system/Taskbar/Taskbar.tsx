import type { ReactElement } from "react";
import Clock from "./Clock/Clock";
import StartButton from "./StartButton/StartButton";
import styles from "./Taskbar.module.scss";
import TaskbarEntries from "./TaskbarEntries/TaskbarEntries";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";

export default function Taskbar(): ReactElement {
  return (
    <nav className={styles.taskbar}>
      <StartButton />
      <TaskbarEntries />
      <ThemeToggle />
      <Clock />
    </nav>
  );
}
