import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import styles from "./Clock.module.scss";

export default function Clock(): ReactElement {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <button className={styles.clock} type="button">
      <div className={styles.time}>{formattedTime}</div>
      <div className={styles.date}>{formattedDate}</div>
    </button>
  );
}
