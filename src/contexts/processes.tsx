"use client";

import { contextFactory } from "@/contexts/contextFactory";
import useProcessContextState from "@/hooks/useProcessContextState";
import type { ProcessContextState } from "@/types/contexts/process";

const [useProcessContext, ProcessProvider] =
  contextFactory<ProcessContextState>(useProcessContextState);

export { useProcessContext, ProcessProvider };
