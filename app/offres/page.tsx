import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Offres() {
  return (
    <div>
      <section className={"bg-gradient-to-tl from-blueDark to-blueLight "}>
        <div
          className="container section flex items-center min-h-[40vh] "
          data-aos="zoom-out-down"
          data-aos-duration="2500"
        >
          <h1
            className={
              "text-3xl md:text-7xl text-white uppercase pt-24 font-black"
            }
          >
            Offres
          </h1>
        </div>
      </section>

      <section
        className="flex flex-col space-y-8 overflow-hidden pb-48"
        
        id="ouventure-consulting"
      >
        <div className="max-w-3xl py-12 lg:py-16 flex flex-col items-start w-full mx-auto container text-second space-y-6"  data-aos="zoom-out-down"
          data-aos-duration="2500">
          <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase">
            Oventure consulting
          </h1>
          <p className="mt-4 text-xs sm:text-sm font-normal lg:w-7/12 lg:max-w-none">
            Sur ces thématiques, nous pouvons vous accompagner sur tous le
            projets : <br />
            L&apos;offre de conseil est adaptée pour répondre aux besoins
            spécifiques de clients.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <div className="mx-auto max-w-7xl">
            <div className="md:flex md:flex-row-reverse md:gap-16" 
                data-aos="zoom-out-down"
                data-aos-duration="2500">
              <div className="self-center md:basis-1/2">
                <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400">
                  L&apos;offre de conseil est adaptée pour répondre aux besoins
                  spécifiques du Ministère en tenant compte des particularités
                  locales et des priorités stratégiques nationales.
                </div>
                <div className="grid mx-auto max-w-4xl gap-4 md:gap-y-6">
                  <div>
                    <div className="flex max-w-full">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-check flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                          Elaboration des politiques sectorielles
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex max-w-full">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-check flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                          Évaluation des besoins financiers:
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-slate-400">
                          Identification des besoins financiers pour les projets
                          climatiques.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex max-w-full">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-check flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                          Mobilisation de fonds
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-slate-400">
                          Stratégies pour accéder aux financements nationaux et
                          internationaux.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex max-w-full">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-check flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                          Gestion des risques financiers
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-slate-400">
                          Conseils sur la gestion des risques liés au climat et
                          aux finances.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex max-w-full">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-check flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                          Renforcement des capacités
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-slate-400">
                          Programmes de formation et de développement des
                          compétences pour le personnel du ministère.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex max-w-full">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-check flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2">
                          Suivi et Reporting
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-slate-400">
                          Aide à la mise en place de systèmes de suivi et de
                          reporting des financements climatiques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                <div className="relative m-auto max-w-4xl" 
                    data-aos="flip-left"
                    data-aos-duration="2500">
                  <Image
                    alt="image"
                    loading="lazy"
                    width="828"
                    height="950"
                    decoding="async"
                    data-nimg="1"
                    className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                    src="/images/consultating-img.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative not-prose scroll-mt-[72px] bg-blueDark"
        id="oventure-software"
      >
        <div className="absolute inset-0 bg-primary-50 dark:bg-slate-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <div className="mb-4">
            <div className="mb-6 mx-auto md:mb-12 text-center"
                data-aos="zoom-out-down"
                data-aos-duration="2500"
            >
              <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase text-white">
                Oventure software
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-white text-center">
                Nous concevons des logiciels adaptés pour accroître la
                transparence, l&apos;intégrité et, ultimement, la confiance au
                sein des divers acteurs du marché carbone.
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="aspect-w-16 aspect-h-7">
            <Image
              alt="image's overture software"
              loading="lazy"
              width="728"
              height="320"
              decoding="async"
              className="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg"
              src="/images/software-img.png"
              data-aos="flip-down"
              data-aos-duration="2500"
            />
          </div>
          <div className="grid mx-auto gap-8 md:gap-y-12 sm:grid-cols-2 mt-12 max-w-5xl" 
                data-aos="zoom-in-up"
                data-aos-duration="2500"
            >
            <div>
              <div className="flex max-w-full sm:max-w-md mx-auto">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-brand-tailwind rtl:mr-0 rtl:ml-2 flex-shrink-0 mr-4 mt-1 w-6 h-6 text-primary-800 text-white"
                  >
                    <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Vérification et validation de projets
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mt-0.5 text-white">
                    Assurer l&apos;authenticité et la précision des projets pour
                    garantir leur conformité et leur impact.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-full sm:max-w-md mx-auto">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-components rtl:mr-0 rtl:ml-2 flex-shrink-0 mr-4 mt-1 w-6 h-6 text-white"
                  >
                    <path d="M3 12l3 3l3 -3l-3 -3z"></path>
                    <path d="M15 12l3 3l3 -3l-3 -3z"></path>
                    <path d="M9 6l3 3l3 -3l-3 -3z"></path>
                    <path d="M9 18l3 3l3 -3l-3 -3z"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Gestion du suivi de la conformité
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mt-0.5 text-white">
                    Suivre et gérer les exigences réglementaires pour assurer le
                    respect des normes climatiques.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-full sm:max-w-md mx-auto">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-list-check rtl:mr-0 rtl:ml-2 flex-shrink-0 mr-4 mt-1 w-6 h-6 text-white"
                  >
                    <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M11 6l9 0"></path>
                    <path d="M11 12l9 0"></path>
                    <path d="M11 18l9 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Inscription des crédits carbones
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mt-0.5 text-white">
                    Enregistrer les crédits carbones sur les plateformes de
                    marché pour faciliter leur échange et leur suivi.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-full sm:max-w-md mx-auto">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-rocket rtl:mr-0 rtl:ml-2 flex-shrink-0 mr-4 mt-1 w-6 h-6 text-white"
                  >
                    <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                    <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                    <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Facilitation des transactions
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mt-0.5 text-white">
                    Simplifier et sécuriser les échanges de crédits carbones
                    entre les différentes parties prenantes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex max-w-full sm:max-w-md mx-auto">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-arrows-right-left rtl:mr-0 rtl:ml-2 flex-shrink-0 mr-4 mt-1 w-6 h-6 text-white"
                  >
                    <path d="M21 7l-18 0"></path>
                    <path d="M18 10l3 -3l-3 -3"></path>
                    <path d="M6 20l-3 -3l3 -3"></path>
                    <path d="M3 17l18 0"></path>
                  </svg>
                </div>
                <div className="mt-0.5">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Analyse des données et rapports
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mt-0.5 text-white">
                    Collecter et analyser les données climatiques pour produire
                    des rapports détaillés et informatifs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[-72px] pt-30 container" id="finance-climat" >
        <div className="mx-auto px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
          <div className="block py-12  md:flex w-full ">
            <div className="mx-auto flex max-w-5xl basis-[60%] items-center"
                data-aos="zoom-in-right"
                data-aos-duration="2500"
            >
              <div className="pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
                <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase">
                  FINANCE CLIMAT
                </h1>
                <div className="mx-auto max-w-3xl pt-20">
                  <p className="mb-8 text-xl font-normal ">
                    De nombreux programmes de transition énergétique et
                    écologique sont mis en place dans le monde pour faire face
                    aux problèmes du réchauffement climatique et de la
                    pollution. Ces programmes sont soutenus par plusieurs pays
                    et instances internationales comme l’ United Nations
                    Environment Program (UNEP) ou le fonds Green Climate Fund
                    (GCF).
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    Ainsi, le financement de projets verts constitue à la fois
                    un engagement irréversible et une opportunité de croissance
                    pour les institutions financières, en étant un métier à part
                    entière nécessitant la mise en place de produits financiers
                    spécifiques selon des labels reconnus.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    Convaincu de l’impératif d’assurer un développement durable
                    pour les générations futures, Oventure a développé un
                    savoir-faire dans le domaine de la Finance Verte (le
                    financement des énergies renouvelables, de l’efficacité
                    énergétique et de la protection de l’environnement) au
                    travers de différentes missions réalisées en faveur
                    d’institutions financières.
                  </p>
                  <div className="flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                    <div className="flex w-auto cursor-pointer">
                      <Button
                        size={"lg"}
                        className={"py-7 px-8 bg-primary border-0 text-white"}
                      >
                        Contactez-nous
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block flex-1 items-center md:flex">
              <div className="relative m-auto h-full max-w-4xl object-cover"
                data-aos="zoom-in-left"
                data-aos-duration="2500"
              >
                <Image
                  alt="Hero TailNext"
                  width="540"
                  height="405"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl"
                  src="/images/finance-climat.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offres;
