'use client'
import { ReactNode, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


type Props = {
    children: ReactNode
}

function AosProvider({ children }: Props) {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {children}

        </>
    )
}

export default AosProvider