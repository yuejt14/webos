import { useState } from "react";
import type { ProcessContextState, Processes } from "@/types/contexts/process";

const useProcessContextState = (
  startupProcess: Processes,
): ProcessContextState => {
  const [processes] = useState<Processes>(startupProcess);
  return { processes };
};

export default useProcessContextState;
