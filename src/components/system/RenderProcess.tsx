import dynamic from "next/dynamic";
import type { ReactElement } from "react";
import type { Process } from "@/types/contexts/process";

const Window = dynamic(() => import("@/components/system/Window"));

export function RenderProcess({ Component, hasWindow }: Process): ReactElement {
  return hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );
}
