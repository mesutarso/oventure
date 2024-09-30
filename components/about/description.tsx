import Image from "next/image";
import { Circle } from "lucide-react";

function Description() {
  return (
    <div>
      <div className={"bg-blueDark text-white"}>
        {/* <div className="container section">
                <h2 className={'mb-12 max-w-lg'} data-aos="zoom-in" data-aos-duration="2500">
                    <strong className={' text-4xl font-semibold '}>Un modèle hybride qui allie Conseil et
                        Technologie </strong>
                </h2>
                <div className={'grid grid-cols-1 md:grid-cols-3 gap-4 '}>
                    <div data-aos="zoom-in-right" data-aos-duration="2500">
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
                            L&apos;offre de conseil est adaptée pour répondre aux besoins spécifiques du ministère en
                            tenant compte des particularités locales et des priorités stratégiques nationales.
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

                    <div className={'flex items-center'} data-aos="zoom-in" data-aos-duration="2500">
                        <Image
                            src={'/images/about.png'}
                            width={500}
                            height={500}
                            alt={'tech'}
                        />
                    </div>

                    <div data-aos="zoom-in-left" data-aos-duration="2500">
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
                            Nous concevons des logiciels adaptés pour accroître la transparence, l&apos;intégrité et ,
                            ultimement, la confiance au sein des divers acteurs du marché carbone.
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
            </div> */}

        <div className="container section space-y-10 ">
          <h2 className={"mb-12 text-center"}>
            <strong
              className={" text-4xl font-semibold "}
              data-aos="zoom-in-down"
              data-aos-duration="2500"
            >
              Que faisons-nous (Notre raison d’être)
            </strong>
          </h2>
          <div className="">
            <div
              className={""}
              data-aos="zoom-in-right"
              data-aos-duration="2500"
            >
              <div className="">
                <p className={"text-center text-xl"}>
                  Nous fournissons des services de conseil spécialisés,
                  développons des solutions de finance climatique sur mesure, et
                  proposons des formations de haut niveau pour renforcer les
                  capacités locales.
                </p>{" "}
                <br />
                <p className={"text-center text-xl"}>
                  Développons des solutions innovantes en finance climat et
                  incubons les entreprises à la nouvelle économie du climat, en
                  leur fournissant des services de conseil spécialisés et des
                  formations de haut niveau pour renforcer les capacités
                  locales.
                </p>{" "}
                <br />
                <p className={"text-center text-xl"}>
                  Notre objectif est de propulser la RDC comme un acteur central
                  des solutions climatiques, en facilitant l’accès aux
                  financements durables et soutenant la mise en œuvre de projets
                  carbone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-20 pb-20">
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
          <div>
            <p data-aos="fade-down-right" data-aos-duration="2500">
              <strong className={"text-blueDark text-3xl font-semibold"}>
                Notre Vision
              </strong>
              <br />
              Être le hub principal de la finance climat en Afrique centrale, et
              de solution pour la nouvelle économie du climat.
            </p>
          </div>
          <div>
            <Image
              src={"/images/about-hero.jpg"}
              alt={"hero"}
              width={500}
              height={500}
              className={"rounded-2xl w-full"}
              data-aos="fade-down-left"
              data-aos-duration="2500"
            />
          </div>
        </div>
      </div>

      <div className={"bg-blueDark text-white"}>
        <div className="container section space-y-10 ">
          <h2 className={"mb-12"}>
            <strong
              className={" text-4xl font-semibold "}
              data-aos="zoom-in-down"
              data-aos-duration="2500"
            >
              Nos Missions
            </strong>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className={"flex  items-start justify-center mb-4 gap-8"}
              data-aos="zoom-in-right"
              data-aos-duration="2500"
            >
              <div className={"w-[20%]"}>
                <Image
                  src={"/images/software.png"}
                  width={150}
                  height={150}
                  alt={"tech"}
                />
              </div>

              <div className={"w-[80%]"}>
                <p className={"mb-4 font-thin text-sm"}>
                  Renforcer les capacités des acteurs locaux pour accélérer la
                  décarbonation de l’économie congolaise.
                </p>
              </div>
            </div>
            <div
              className={"flex  items-start justify-center mb-4 gap-8"}
              data-aos="zoom-in-left"
              data-aos-duration="2500"
            >
              <div className={"w-[20%]"}>
                <Image
                  src={"/images/software.png"}
                  width={150}
                  height={150}
                  alt={"tech"}
                />
              </div>

              <div className={"w-[80%]"}>
                <p className={"mb-4 font-thin text-sm"}>
                  Développer et promouvoir des solutions financières durables
                  qui répondent aux enjeux climatiques mondiaux, tout en
                  valorisant les richesses naturelles de la RDC.
                </p>
              </div>
            </div>
            <div
              className={"flex  items-start justify-center mb-4 gap-8"}
              data-aos="zoom-in-right"
              data-aos-duration="2500"
            >
              <div className={"w-[20%]"}>
                <Image
                  src={"/images/software.png"}
                  width={150}
                  height={150}
                  alt={"tech"}
                />
              </div>

              <div className={"w-[80%]"}>
                <p className={"mb-4 font-thin text-sm"}>
                  Faciliter l’accès aux financements climat,
                </p>
              </div>
            </div>
            <div
              className={"flex  items-start justify-center mb-4 gap-8"}
              data-aos="zoom-in-left"
              data-aos-duration="2500"
            >
              <div className={"w-[20%]"}>
                <Image
                  src={"/images/software.png"}
                  width={150}
                  height={150}
                  alt={"tech"}
                />
              </div>

              <div className={"w-[80%]"}>
                <p className={"mb-4 font-thin text-sm"}>
                  Renforcement des capacités institutionnelles et soutien dans
                  les négociaations internationales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
