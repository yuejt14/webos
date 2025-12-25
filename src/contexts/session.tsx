'use client';

import useSessionContextState from '@/hooks/useSessionContextState';
import type { SessionContextState } from '@/types/contexts/session';
import { createContext, FC } from 'react';

const SessionContext = createContext<SessionContextState>({ theme: undefined });

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SessionContext.Provider value={useSessionContextState()}>
            {children}
        </SessionContext.Provider>
    );
};

export const SessionConsumer = SessionContext.Consumer;
