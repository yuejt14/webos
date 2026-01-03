"use client";

import { useSessionContextState } from "@/hooks/useSessionContextState";
import type { SessionContextState } from "@/types/contexts/session";
import { contextFactory } from "@/utils/contextFactory";

const [useSessionContext, SessionProvider] =
  contextFactory<SessionContextState>(useSessionContextState);

export { useSessionContext, SessionProvider };
