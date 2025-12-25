'use client';

import useSessionContextState from '@/hooks/useSessionContextState';
import type { SessionContextState } from '@/types/contexts/session';
import { createContext, type ReactElement, type ReactNode, useContext } from 'react';

const SessionContext = createContext<SessionContextState>({ theme: undefined });

export function useSessionContext(): SessionContextState {
    return useContext(SessionContext);
}

export function ProcessProvider(children: ReactNode): ReactElement {
    return (
        <SessionContext.Provider value={useSessionContextState()}>
            {children}
        </SessionContext.Provider>
    );
}
