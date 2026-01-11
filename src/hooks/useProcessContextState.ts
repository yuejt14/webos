import { useCallback, useReducer } from "react";
import { processReducer } from "@/reducers/processReducer";
import type { ProcessContextState, Processes } from "@/types/contexts/process";
import { getStartupApps, getSystemProcesses } from "@/utils/processDirectory";

function getInitialState(): Processes {
  return {
    ...getSystemProcesses(),
    ...getStartupApps(),
  };
}

export function useProcessContextState(): ProcessContextState {
  const [processes, dispatch] = useReducer(
    processReducer,
    null,
    getInitialState,
  );

  const openProcess = useCallback((id: string) => {
    dispatch({ type: "OPEN", id });
  }, []);

  const closeProcess = useCallback((id: string) => {
    dispatch({ type: "CLOSE", id });
  }, []);

  return { processes, openProcess, closeProcess };
}

export default useProcessContextState;
