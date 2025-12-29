import type { SessionContextState } from "@/types/contexts/session";

const useSessionContextState = (): SessionContextState => ({
  theme: "default", //TODO: Load User theme from local storage
});

export default useSessionContextState;
