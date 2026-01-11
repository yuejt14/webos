import Image from "next/image";
import type { ReactElement } from "react";
import styles from "./TaskbarEntry.module.scss";

interface TaskbarEntryProps {
  id: string;
  title: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

function isImagePath(icon: string): boolean {
  return icon.startsWith("/") || icon.startsWith("http");
}

export default function TaskbarEntry({
  title,
  icon,
  isActive = false,
  onClick,
}: TaskbarEntryProps): ReactElement {
  return (
    <button
      className={`${styles.taskbarEntry} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      type="button"
      title={title}
    >
      {icon && (
        <span className={styles.icon}>
          {isImagePath(icon) ? (
            <Image src={icon} alt={title} width={16} height={16} />
          ) : (
            icon
          )}
        </span>
      )}
      <span className={styles.title}>{title}</span>
    </button>
  );
}
