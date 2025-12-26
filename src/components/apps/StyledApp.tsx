"use client";

import { useSessionContext } from "@/contexts/session";
import type { ReactElement, ReactNode } from "react";
import themes from "@/styles/themes.module.scss";

function StyledApp({ children }: { children: ReactNode }): ReactElement {
  const { theme } = useSessionContext();
  return <div className={themes[theme || "light"]}>{children}</div>;
}

export default StyledApp;
