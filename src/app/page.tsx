import type { ReactElement } from "react";
import ProcessLoader from "@/components/system/Processes/ProcessLoader";
import { ProcessProvider } from "@/contexts/processes";

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
