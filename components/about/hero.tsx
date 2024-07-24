import React from 'react'
import Image from "next/image";

function Hero() {
    return (
        <div className="container section space-y-10">
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                <div>
                    <p>
                        <strong className={'text-blueDark text-3xl font-semibold'}>Oventure </strong> est un cabinet de
                        conseil international et un éditeur de logiciels dédié à la finance
                        climat. Nous offrons des services de technologie et de conseil pour promouvoir le
                        financement climatique auprès des développeurs de projets, des institutions financières et
                        des décideurs publiques. Notre mission est de soutenir les développeurs de projets et les
                        gouvernements dans leur levée de fonds pour faciliter la transformation durable. En reliant
                        les projets aux ressources financières essentielles, nous permettons aux parties prenantes
                        de relever les défis climatiques. Engagée envers l&apos;excellence et la durabilité, Oventure
                        transforme les idées visionnaires en solutions impactantes, favorisant la résilience et le
                        développement inclusif.
                    </p>
                </div>
                <div>
                    <Image
                        src={'/images/about-hero.jpg'}
                        alt={'hero'}
                        width={500}
                        height={500}
                        className={'rounded-2xl w-full'}
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero
