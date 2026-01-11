import type { Processes, WindowedProcess } from "@/types/contexts/process";
import { appDirectory, getSystemProcesses } from "@/utils/processDirectory";

export type ProcessAction =
  | { type: "OPEN"; id: string }
  | { type: "CLOSE"; id: string };

export function processReducer(
  state: Processes,
  action: ProcessAction,
): Processes {
  switch (action.type) {
    case "OPEN": {
      const process: WindowedProcess | undefined = appDirectory[action.id];
      if (!process) return state;
      if (action.id in state) return state;

      return {
        ...state,
        [action.id]: process,
      };
    }

    case "CLOSE": {
      if (action.id in getSystemProcesses()) return state;
      if (!(action.id in state)) return state;

      const { [action.id]: _, ...rest } = state;
      return rest;
    }

    default:
      return state;
  }
}
