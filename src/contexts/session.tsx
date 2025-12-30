"use client";

import { contextFactory } from "@/contexts/contextFactory";
import { useSessionContextState } from "@/hooks/useSessionContextState";
import type { SessionContextState } from "@/types/contexts/session";

const [useSessionContext, SessionProvider] =
  contextFactory<SessionContextState>(useSessionContextState);

export { useSessionContext, SessionProvider };
