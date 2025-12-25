'use client';

import useProcessContextState from '@/hooks/useProcessContextState';
import type { ProcessContextState } from '@/types/contexts/process';
import processDirectory from '@/utils/processDirectory';
import { createContext, FC, ReactNode } from 'react';

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
            {children}
        </ProcessContext.Provider>
    );
};

export const ProcessConsumer = ProcessContext.Consumer;
