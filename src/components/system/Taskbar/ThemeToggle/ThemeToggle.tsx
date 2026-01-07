"use client";

import type { ReactElement } from "react";
import { useSessionContext } from "@/contexts/session";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle(): ReactElement {
  const { theme, setTheme } = useSessionContext();

  const toggleTheme = () => {
    setTheme(theme === "default" ? "light" : "default");
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      type="button"
      title={`Switch to ${theme === "default" ? "light" : "dark"} theme`}
    >
      {theme === "default" ? "☀️" : "🌙"}
    </button>
  );
}
