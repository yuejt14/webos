import type { ProcessContextState, Processes } from "@/types/contexts/process";
import { useState } from "react";

const useProcessContextState = (startupProcess: Processes): ProcessContextState => {
    const [processes] = useState<Processes>(startupProcess);
    return { processes };
};

export default useProcessContextState;
