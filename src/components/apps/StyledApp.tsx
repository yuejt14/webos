"use client";

import type { ReactElement, ReactNode } from "react";
import { useSessionContext } from "@/contexts/session";
import themes from "@/styles/themes.module.scss";

function StyledApp({ children }: { children: ReactNode }): ReactElement {
  const { theme } = useSessionContext();
  return <div className={themes[theme || "default"]}>{children}</div>;
}

export default StyledApp;
