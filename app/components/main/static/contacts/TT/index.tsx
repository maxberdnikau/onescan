'use client';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./Content'), { ssr: false });

export default function TT() {
    return(
        <>
            <Content />
        </>
    )
}