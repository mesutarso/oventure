import Image from "next/image";
import {Circle} from "lucide-react";

function QuiSommesNous() {
    return (
        <>
            <div className={'bg-gradient-to-tl from-blueDark to-blueLight '}>
                <div className="container section flex items-center min-h-[40vh] ">
                    <h1 className={'text-3xl md:text-7xl text-white uppercase pt-24'}>Qui sommes nous</h1>
                </div>
            </div>
            <div className="container section space-y-10">
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
            <div className={'bg-blueDark text-white'}>
                <div className="container section">
                    <h2 className={'mb-12 max-w-lg'}>
                        <strong className={' text-4xl font-semibold '}>Un modèle hybride qui allie Conseil et Technologie </strong>
                    </h2>
                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-4 '}>
                        <div>
                            <div className={'flex flex-col items-center justify-center mb-4'}>
                                <Image
                                    src={'/images/consulting.png'}
                                    width={150}
                                    height={150}
                                    alt={'tech'}
                                />
                                <h3>
                                    <strong className={'text-xl font-semibold'}>Oventure Consulting</strong>
                                </h3>
                            </div>
                            <p className={'mb-4 text-normal text-sm'}>
                                L&apos;offre de conseil est adaptée pour répondre aux besoins spécifiques du ministère en tenant compte des particularités locales et des priorités stratégiques nationales.
                            </p>
                            <ul className={'space-y-4'}>
                                <li className={'flex items-center gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px]'}>
                                        <Circle className={'mr-2  '} size={10}/>
                                    </div>
                                    <span
                                        className={'font-semibold text-sm'}>Elaboration des politiques sectorielles</span>
                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Evaluation des besoins financiers</span>
                                        <span
                                            className={'font-thin text-sm'}>Identification des besoins financiers pour les projets climatiques</span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Mobilisation de fonds :</span>
                                        <span
                                            className={'font-thin text-sm'}>Stratégies pour accéder aux financements nationaux et internationnaux </span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Gestion des risques financiers</span>
                                        <span
                                            className={'font-thin text-sm'}>Conseils sur la gestion des risques liés au climat et aux finances. </span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Renforcement des capacités : </span>
                                        <span
                                            className={'font-thin text-sm'}>Programmes de formation et de développement des compétences pour le personnel du ministère. </span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Suivi et Reporting :</span>
                                        <span
                                            className={'font-thin text-sm'}>Aide à la mise en place de systèmes de suivi et de reporting des financements climatiques. </span>
                                    </div>

                                </li>

                            </ul>


                        </div>
                        <div className={'flex items-center'}>
                            <Image
                                src={'/images/about.png'}
                                width={500}
                                height={500}
                                alt={'tech'}
                            />
                        </div>
                        <div>
                            <div className={'flex flex-col items-center justify-center mb-4'}>
                                <Image
                                    src={'/images/software.png'}
                                    width={150}
                                    height={150}
                                    alt={'tech'}
                                />
                                <h3>
                                    <strong className={'text-xl font-semibold'}>Oventure Software</strong>
                                </h3>
                            </div>
                            <p className={'mb-4 text-normal text-sm'}>
                               Nous concevons des logiciels adaptés pour accroître la transparence, l&apos;intégrité et , ultimement, la confiance au sein des divers acteurs du marché carbone.
                            </p>
                            <ul className={'space-y-4'}>

                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Vérification et validation de projets:</span>
                                        <span
                                            className={'font-thin text-sm'}>Assurer l&apos;authenticité et la précision des projets pour garantir leur conformité et leur impact.</span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Gestion du suivi de la conformité :</span>
                                        <span
                                            className={'font-thin text-sm'}>Suivre et gérer les exigences réglementaires pour assurer le respect des normes climatiques.</span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Inscription des crédits carbones :</span>
                                        <span
                                            className={'font-thin text-sm'}>Enregistrer les crédits carbones sur les plateformes de marchés pour faciliter leur échange et leur suivi. </span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Facilitation des transactions : </span>
                                        <span
                                            className={'font-thin text-sm'}>Simplifier et sécuriser les échanges de crédits carbonnes entre les différentes parties prenantes </span>
                                    </div>

                                </li>
                                <li className={'flex items-start gap-4'}>
                                    <div className={'rounded-full bg-white h-[10px] w-[10px] mt-1'}>
                                        <Circle className={'mr-2'} size={10}/>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        <span
                                            className={'font-semibold text-sm'}>Analyse de données et rapports :</span>
                                        <span
                                            className={'font-thin text-sm'}>Collecter et analyser les données climatiques pour produire des rapports detaillés et informatifs </span>
                                    </div>

                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default QuiSommesNous
