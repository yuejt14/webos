"use client";

import useProcessContextState from "@/hooks/useProcessContextState";
import type { ProcessContextState } from "@/types/contexts/process";
import { contextFactory } from "@/utils/contextFactory";

const [useProcessContext, ProcessProvider] =
  contextFactory<ProcessContextState>(useProcessContextState);

export { useProcessContext, ProcessProvider };
