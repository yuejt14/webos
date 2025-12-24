'use client';

import processDirectory from '@/utils/processDirectory';
import { createContext, FC } from 'react';

const ProcessContext = createContext({});

export const ProcessLoader: FC = () => {
    return (
        <>
            {Object.entries(processDirectory).map(([id, { Component }]) => (
                <Component key={id} />
            ))}
        </>
    );
};
