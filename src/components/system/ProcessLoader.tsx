'use client';

import { useProcessContext } from "@/contexts/processes";
import type { ReactElement } from "react";

function ProcessLoader(): ReactElement {
    const { processes } = useProcessContext();
    return (
        <>
            {Object.entries(processes).map(([id, { Component }]) => (
                <Component key={id}/>
            ))}
        </>
    );
}

export default ProcessLoader;
