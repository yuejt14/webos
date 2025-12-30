import type { ReactElement } from "react";
import TaskbarEntry from "../TaskbarEntry/TaskbarEntry";
import styles from "./TaskbarEntries.module.scss";

export default function TaskbarEntries(): ReactElement {
  // TODO: Connect to actual process state
  const entries = [
    { id: "1", title: "File Explorer", icon: "📁", isActive: true },
    { id: "2", title: "Browser", icon: "🌐", isActive: false },
    { id: "3", title: "Terminal", icon: "⌨️", isActive: false },
  ];

  return (
    <div className={styles.taskbarEntries}>
      {entries.map((entry) => (
        <TaskbarEntry
          key={entry.id}
          id={entry.id}
          title={entry.title}
          icon={entry.icon}
          isActive={entry.isActive}
        />
      ))}
    </div>
  );
}
