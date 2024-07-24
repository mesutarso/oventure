import Image from "next/image";

function Experts() {
    return (
        <div className={'container section'}>

            <h1 className={'text-3xl md:text-4xl font-semibold text-blueDark uppercase text-center mb-8'}>Notre
                Équipe</h1>
            <div className="flex items-start gap-10 justify-center flex-wrap">
                <div className={'card max-w-[403px] min-h-[400px] rounded-2xl border-2 border-b-8 border-accent'}>
                    <div className="card-image w-[400px] h-[400px] relative">
                        <Image
                            src={'/founders/founders-1.jpg'}
                            alt={'founders'}
                            fill
                            className={'rounded-t-2xl object-cover '}
                        />
                    </div>
                    <div className="card-content p-5">
                        <h3>
                            <strong className={'text-accent text-xl font-semibold mb-2'}>Richard Impenge Sapu</strong>
                        </h3>
                        <p className="role">
                            <strong className={'text-blueDark text-lg font-semibold'}>Président</strong>
                        </p>

                    </div>
                </div>
                <div className={'card max-w-[405px] min-h-[400px] rounded-2xl  border-2 border-b-8 border-secondary '}>
                    <div className="card-image w-[400px] h-[400px] relative">
                        <Image
                            src={'/founders/founders-2.jpg'}
                            alt={'founders'}
                            fill
                            className={'rounded-t-2xl object-cover '}
                        />
                    </div>
                    <div className="card-content p-5">
                        <h3>
                            <strong className={'text-secondary text-xl font-semibold mb-2'}>Dr. Roberto Ridolfi</strong>
                        </h3>
                        <p className="role">
                            <strong className={'text-blueDark text-lg font-semibold'}>Président CA</strong>
                        </p>

                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 gap-10 justify-center flex-wrap">
                <div className={'card   rounded-2xl border-2 border-b-8 border-accent'}>
                    <div className="card-image relative min-h-[300px]">
                        <Image
                            src={'/teams/cimina.jpg'}
                            alt={'founders'}
                            fill
                            className={'rounded-t-2xl object-cover '}
                        />
                    </div>
                    <div className="card-content p-5">
                        <h3>
                            <strong className={'text-accent text-xl font-semibold mb-2'}>CIMINA MALONGO Florry</strong>
                        </h3>
                        <p className="role">
                            <strong className={'text-blueDark text-lg font-semibold'}>Directeur Financier</strong>
                        </p>

                    </div>
                </div>
                <div className={'card   rounded-2xl  border-2 border-b-8 border-secondary '}>
                    <div className="card-image min-h-[300px]  relative">
                        <Image
                            src={'/teams/okito.jpg'}
                            alt={'founders'}
                            fill
                            className={'rounded-t-2xl object-cover '}
                        />
                    </div>
                    <div className="card-content p-5">
                        <h3>
                            <strong className={'text-secondary text-xl font-semibold mb-2'}>OKITO YATUTU
                                Beau-Fils</strong>
                        </h3>
                        <p className="role">
                            <strong className={'text-blueDark text-lg font-semibold'}>Country Manager</strong>
                        </p>

                    </div>
                </div>
                <div className={'card   rounded-2xl  border-2 border-b-8 border-orange '}>
                    <div className="card-image min-h-[300px]  relative">
                        <Image
                            src={'/teams/dipa.jpg'}
                            alt={'founders'}
                            fill
                            className={'rounded-t-2xl object-cover '}
                        />
                    </div>
                    <div className="card-content p-5">
                        <h3>
                            <strong className={'text-orange text-xl font-semibold mb-2'}>DIPA TSHIBAMBA Guylain</strong>
                        </h3>
                        <p className="role">
                            <strong className={'text-blueDark text-lg font-semibold'}>Directeur Marketing</strong>
                        </p>

                    </div>
                </div>
                <div className={'card   rounded-2xl  border-2 border-b-8 border-pink '}>
                    <div className="card-image min-h-[300px]  relative">
                        <Image
                            src={'/teams/nyoka.jpg'}
                            alt={'founders'}
                            fill
                            className={'rounded-t-2xl object-cover '}
                        />
                    </div>
                    <div className="card-content p-5">
                        <h3>
                            <strong className={'text-pink text-xl font-semibold mb-2'}>NYOKA BETTAVER Sarina
                                Laïla</strong>
                        </h3>
                        <p className="role">
                            <strong className={'text-blueDark text-lg font-semibold'}>Directrice Juridique</strong>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experts
