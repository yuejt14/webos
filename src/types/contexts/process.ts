import type { ComponentType } from "react";

type BaseProcess = {
  Component: ComponentType;
};

export type SystemProcess = BaseProcess & {
  hasWindow?: false;
};

export type WindowedProcess = BaseProcess & {
  hasWindow: true;
  title: string;
  icon: string;
};

export type Process = SystemProcess | WindowedProcess;

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
  openProcess: (id: string) => void;
  closeProcess: (id: string) => void;
};
