'use client';

import { FC, ReactNode } from 'react';
import themes from '@/styles/themes.module.scss';
import { SessionConsumer } from '@/contexts/session';

const StyledApp: FC<{ children: ReactNode }> = ({ children }) => (
    <>
        <SessionConsumer>
            {({ theme }) => (
                <div className={themes[theme || 'dark']}>
                    {children}
                </div>
            )}
        </SessionConsumer>
    </>
);

export default StyledApp;
