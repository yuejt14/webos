'use client';

import { ProcessConsumer } from "@/contexts/processes";
import { FC } from "react";

const ProcessLoader: FC = () => (
    <ProcessConsumer>
        {({ processes }) => (
            <>
                {Object.entries(processes).map(([id, { Component }]) => (
                    <Component key={id} />
                ))}
            </>
        )}
    </ProcessConsumer>
);

export default ProcessLoader;
