
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Recrutement() {
    return (
        <>
        <div className={'bg-gradient-to-tl from-blueDark to-blueLight '}>
            <div className="container section flex items-center min-h-[40vh] ">
                <h1 className={'text-3xl md:text-7xl text-white uppercase pt-24'}>Recrutement !</h1>

            </div>
        </div>
            <div className="container section">

                <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 items-center'}>
                    <div className={'space-y-8'}>
                        <h1 className={'text-3xl md:text-4xl font-semibold text-blueDark uppercase'}>Talent makers</h1>
                        <p>
                            Vous recherchez un cabinet de conseil réputé pour son expertise et ses valeurs humaines.
                            Consultez nos offres ou laissez-nous votre CV.
                        </p>
                        <div className={'flex flex-wrap items-center gap-4'}>
                            <Button className={'bg-blueLight text-white'}>
                                <Link href={'/offres'}>
                                    Voir nos offres
                                </Link>

                            </Button>
                            <Button className={'bg-blueDark text-white'}>
                                <a href="mailto:recrutement@oventure-drc.com" className="mail">
                                    Laissez-nous votre CV
                                </a>

                            </Button>
                        </div>


                    </div>
<div>
    <Image
        src={'/images/offre.webp'}
        width={400}
        height={400}
        alt={'recrutement'}
    />
</div>
                </div>
            </div>
        </>
    )
}

export default Recrutement
