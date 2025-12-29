import type { ReactElement } from "react";
import { Desktop } from "@/components/system/Desktop/Desktop";
import ProcessLoader from "@/components/system/ProcessLoader";
import { ProcessProvider } from "@/contexts/processes";

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <Desktop>
        <ProcessLoader />
      </Desktop>
    </ProcessProvider>
  );
}
