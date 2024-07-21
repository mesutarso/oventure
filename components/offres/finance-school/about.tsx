import {Circle} from "lucide-react";
import Image from "next/image";

function About() {
    return (
        <div className={'container section space-y-24'}>
            <h1 className={'text-center text-3xl font-semibold '}>
                Pourquoi la Climate School ?
            </h1>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                <div>
                    <Image src={'/images/oventure-cover.png'} alt={'finance-school'} width={450} height={400}/>
                </div>
                <div className={'grid gap-4'}>
                    <h2 className={'text-2xl font-bold text-primary'}>
                        Expérience d&apos;apprentissage engageante
                    </h2>
                    <p className={'text-gray-400 mb-4'}>
                        Inspirez des actions concrètes à l’échelle de chaque métier et au niveau de l’entreprise

                    </p>
                    <ul className={'space-y-8'}>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-primary font-bold'}/>
                            <span>Plus de 190 chapitres de microlearning ludiques (vidéos + quizzs)</span>
                        </li>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-primary font-bold'}/>
                            <span>Co-créé avec plus de 50 experts scientifiques</span>
                        </li>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-primary font-bold'}/>
                            <span>97% de nos utilisateurs ont déclaré avoir appris quelque chose de nouveau et d’utile.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>

                <div className={'grid gap-4'}>
                    <h2 className={'text-2xl font-bold text-blueDark'}>
                        100% Personnalisable
                    </h2>
                    <p className={'text-gray-400 mb-4'}>
                        Inspirez des actions concrètes à l’échelle de chaque métier et au niveau de l’entreprise

                    </p>
                    <ul className={'space-y-8'}>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-blueDark font-bold'}/>
                            <span>Contenus disponibles à la carte et plateforme à votre charte</span>
                        </li>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-blueDark font-bold'}/>
                            <span>Cours dédiés pour chaque métier de l’entreprise (Finance, RH, Achats…)
</span>
                        </li>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-blueDark font-bold'}/>
                            <span>Production de contenu sur-mesure à la demande</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={'/images/oventure-cover.png'} alt={'finance-school'} width={450} height={400}/>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                <div>
                    <Image src={'/images/oventure-cover.png'} alt={'finance-school'} width={450} height={400}/>
                </div>
                <div className={'grid gap-4'}>
                    <h2 className={'text-2xl font-bold text-primary'}>
                        Facile à Déployer
                    </h2>
                    <p className={'text-gray-400 mb-4'}>
                        Déployez les cours Climate School en moins de 3 mois au sein de votre outil de learning (LMS) ou via notre plateforme digitale (EdApp)
                    </p>
                    <ul className={'space-y-8'}>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-primary font-bold'}/>
                            <span>Onboarding simple et guidé par nos équipes</span>
                        </li>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-primary font-bold'}/>
                            <span>Aucune expertise interne recquise</span>
                        </li>
                        <li className={'flex items-center gap-4'}>
                            <Circle className={'text-primary font-bold'}/>
                            <span>NPS de 93/100 de nos clients</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
