import type { ReactElement } from "react";
import styles from "./Desktop.module.scss";

export function Desktop({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return <main className={styles.desktop}>{children}</main>;
}
