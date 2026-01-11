"use client";

import type { ReactElement } from "react";
import { useProcessContext } from "@/contexts/processes";
import type { Process } from "@/types/contexts/process";
import TaskbarEntry from "../TaskbarEntry/TaskbarEntry";
import styles from "./TaskbarEntries.module.scss";

function isWindowedProcess(
  entry: [string, Process],
): entry is [
  string,
  Process & { hasWindow: true; title: string; icon: string },
] {
  return entry[1].hasWindow === true;
}

export default function TaskbarEntries(): ReactElement {
  const { processes } = useProcessContext();

  const windowedProcesses = Object.entries(processes).filter(isWindowedProcess);

  return (
    <div className={styles.taskbarEntries}>
      {windowedProcesses.map(([id, process]) => (
        <TaskbarEntry
          key={id}
          id={id}
          title={process.title}
          icon={process.icon}
          isActive={false}
        />
      ))}
    </div>
  );
}
