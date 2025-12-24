'use client';

import { Processes } from '@/types/utils/processDirectory';
import processDirectory from '@/utils/processDirectory';
import { createContext, FC, useContext, useState } from 'react';

type ProcessContextState = {
    processes: Processes;
}

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [processes] = useState(processDirectory);

    return (
        <ProcessContext.Provider value={{ processes }}>
            {children}
        </ProcessContext.Provider>
    );
};



export const ProcessConsumer = ProcessContext.Consumer;  