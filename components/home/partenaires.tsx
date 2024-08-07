'use client'
import { useMemo } from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function Partenaires() {
    const regies = useMemo(() => [
        {

            title: "Environnement",
            image: '/partenaires/environnement.png'
        },
        {

            title: "Union Europeen",
            image: '/partenaires/eu.svg'
        },
        {

            title: "icones",
            image: '/partenaires/iconeslogo.gif'
        },
        {

            title: "mines",
            image: '/partenaires/mines.png'
        },
        {

            title: "pnud",
            image: '/partenaires/pnud.jpg'
        },
        {

            title: "presidence",
            image: '/partenaires/presidence.png'
        },

        {

            title: "unikin",
            image: '/partenaires/unikin.png'
        },
        {

            title: "unikin",
            image: '/partenaires/afd.JPG'
        },



    ], [])


    return (
        <div className=''>

            <div className="  flex flex-col antialiased   items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={regies}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Partenaires