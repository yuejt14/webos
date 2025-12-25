import { ReactElement } from "react";
import { ProcessProvider } from "@/contexts/processes";
import ProcessLoader from "@/components/system/ProcessLoader";

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
