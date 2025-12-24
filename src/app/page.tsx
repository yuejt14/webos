import { ReactElement } from "react";
import { ProcessProvider } from "@/contexts/processes";
import WindowManager from "@/components/system/WindowManager";

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
