import type { ComponentType } from "react";

type BaseProcess = {
  Component: ComponentType;
};

type SystemProcess = BaseProcess & {
  hasWindow?: false;
};

type WindowedProcess = BaseProcess & {
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
};
