import { useCallback, useState } from "react";
import type { ProcessContextState, Processes } from "@/types/contexts/process";
import {
  appDirectory,
  getStartupApps,
  getSystemProcesses,
} from "@/utils/processDirectory";

export function useProcessContextState(): ProcessContextState {
  const [processes, setProcesses] = useState<Processes>(() => ({
    ...getSystemProcesses(),
    ...getStartupApps(),
  }));

  const openProcess = useCallback((id: string) => {
    const process = appDirectory[id];
    if (!process) return;

    setProcesses((prev) => ({
      ...prev,
      [id]: process,
    }));
  }, []);

  const closeProcess = useCallback((id: string) => {
    // Prevent closing system processes
    if (id in getSystemProcesses()) return;

    setProcesses((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  return { processes, openProcess, closeProcess };
}

export default useProcessContextState;
