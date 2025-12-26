import type { ReactNode } from "react";
import styles from "./Window.module.scss";

export default function Window({ children }: { children: ReactNode }) {
  return <section className={styles.window}>{children}</section>;
}
