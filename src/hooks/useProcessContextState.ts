import { useState } from "react";
import type { ProcessContextState, Processes } from "@/types/contexts/process";
import { getStartupProcesses } from "@/utils/processDirectory";

export function useProcessContextState(): ProcessContextState {
  const [processes] = useState<Processes>(getStartupProcesses());
  return { processes };
}

export default useProcessContextState;
