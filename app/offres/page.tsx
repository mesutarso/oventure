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
        className="flex flex-col space-y-8 overflow-hidden container section"
        id="ouventure-consulting"
      >
        <div
          className="max-w-3xl py-12 lg:py-16 flex flex-col items-start w-full mx-auto container text-second space-y-6"
          data-aos="zoom-out-down"
          data-aos-duration="2500"
        >
          <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase">
            Conseil et Consultance en Finance Climat
          </h1>
          <p className="mt-4 text-xs sm:text-sm font-normal lg:w-7/12 lg:max-w-none">
            Nous proposons des services de conseil stratégique pour aider les
            entreprises, les institutions publiques, et les ONG à intégrer et
            comprendre les enjeux climatiques dans leurs modèles économiques. En
            fournissant des analyses approfondies, des stratégies de
            financement, et des recommandations pratiques pour optimiser la
            gestion de projets carbones.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <div className="mx-auto max-w-7xl">
            <div
              className="md:flex md:flex-row-reverse md:gap-16"
              data-aos="zoom-out-down"
              data-aos-duration="2500"
            >
              <div className="self-center md:basis-1/2">
                <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Services Incluent
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
                          Analyse des risques climatiques et des opportunités de
                          financement vert.
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
                          Élaboration de stratégies de décarbonisation pour les
                          entreprises.
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
                          Conseil en compensation carbone et gestion des crédits
                          carbone.
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
                          Assistance à la mise en conformité avec les normes
                          environnementales et climatiques internationales.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                <div
                  className="relative m-auto max-w-4xl"
                  data-aos="flip-left"
                  data-aos-duration="2500"
                >
                  <Image
                    alt="image oventure consulting..."
                    loading="lazy"
                    width="828"
                    height="950"
                    decoding="async"
                    data-nimg="1"
                    className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                    src="/images/oventure-consulting-img-created.png"
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
        <div className="relative container section text-default">
          <div className="mb-4">
            <div
              className="mb-6 mx-auto md:mb-12 text-center"
              data-aos="zoom-out-down"
              data-aos-duration="2500"
            >
              <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase text-white">
                Développement et Gestion de Projets Climat
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-white text-center">
                De la conception, à l’implémentation de projets verts et
                climatiques. Nous offrons un appuie technique et stratégique
                pour garantir la fiabilité, la durabilité et l’alignement à
                l’émission de carbone.
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="aspect-w-16 aspect-h-7">
            <Image
              alt="image's overture software..."
              loading="lazy"
              width="728"
              height="320"
              decoding="async"
              className="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg"
              src="/images/oventure-software.jpg"
              data-aos="flip-down"
              data-aos-duration="2500"
            />
          </div>
          <div
            className="grid mx-auto gap-8 md:gap-y-12 sm:grid-cols-2 mt-12 max-w-5xl"
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
                    Développement de projets de compensation carbone
                  </h3>
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
                    Gestion et suivi des projets climatiques.
                  </h3>
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
                    Recherche de financement pour les projets carbones auprès
                    des institutions internationales.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="finance-climat">
        <div className="mx-auto px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
          <div className="block py-12  md:flex w-full ">
            <div
              className="mx-auto flex max-w-5xl basis-[60%] items-center"
              data-aos="zoom-in-right"
              data-aos-duration="2500"
            >
              <div className="pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
                <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase">
                  FINANCE CLIMAT
                </h1>
                <div className="mx-auto max-w-3xl pt-20">
                  <p className="mb-8 text-xl font-normal ">
                    Nous soutenons les développeurs de projets verts en
                    facilitant l’accès au financement climat. Nous travaillons
                    en étroite collaboration avec des institutions financières,
                    des fonds d’investissement, et des donateurs internationaux
                    pour mobiliser les ressources nécessaires à la mise en œuvre
                    de projets climatiques à fort impact.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>1. Mobilisation de Financements </b> <br />
                    Identifier et accéder à diverses sources de financement
                    nationales et internationales pour soutenir les initiatives
                    climatiques de la RDC. Renforcer la crédibilité et
                    l’attractivité des parties prenantes pour attirer davantage
                    de fonds et d’investissements pour les projets
                    environnementaux.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>2. Élaboration de stratégies durables</b> <br />
                    Conception et mise en œuvre de politiques pour promouvoir
                    des stratégies innovantes et durables d’adaptation et
                    d’atténuation des effets du changement climatique.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>
                      3. Renforcement des capacités institutionnelles et soutien
                      dans les négociations internationales
                    </b>
                    <br />
                    Renforcement des compétences et capacités institutionnelles
                    pour une gestion autonome et durable des financements
                    climatiques.
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
              <div
                className="relative m-auto h-full max-w-4xl object-cover"
                data-aos="zoom-in-left"
                data-aos-duration="2500"
              >
                <Image
                  alt="image finance climant..."
                  width="540"
                  height="405"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl"
                  src="/images/finance-carbone-img.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="finance-climat">
        <div className="mx-auto px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
          <div className="block py-12  md:flex w-full ">
            <div className="block flex-1 items-center md:flex lg:pr-16">
              <div
                className="relative m-auto h-full max-w-4xl object-cover md:py-0 md:pr-8"
                data-aos="zoom-in-left"
                data-aos-duration="2500"
              >
                <Image
                  alt="image finance climant..."
                  width="540"
                  height="405"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl"
                  src="/images/finance-carbone-img.png"
                />
              </div>
            </div>

            <div
              className="mx-auto flex max-w-5xl basis-[60%] items-center"
              data-aos="zoom-in-right"
              data-aos-duration="2500"
            >
              <div className="pb-12 pr-0 md:py-0 md:pb-0">
                <h1 className="font-black leading-tight text-3xl lg:text-6xl uppercase">
                  Climate School - Former et Sensibiliser
                </h1>
                <div className="mx-auto max-w-3xl pt-20">
                  <p className="mb-8 text-xl font-normal ">
                    La Climate School de DECARBONE RDC est spécialisée dans la
                    formation des professionnels, des décideurs publics, et des
                    étudiants sur les enjeux de la finance climat et du
                    développement durable. Ces programmes de formation sont
                    conçus pour renforcer les compétences locales et encourager
                    l’innovation dans le domaine climatique.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>Services Incluent </b> <br />
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>Ateliers de haut lieu </b> <br />
                    sur la finance climat et les mécanismes de marché du
                    carbone.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>Bootcamps carrière</b>
                    <br />
                    pour les jeunes professionnels désireux de se spécialiser
                    dans la finance durable.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>Programmes de formation hybride</b>
                    <br />
                    (en ligne et en présentiel) pour les institutions publiques
                    et privées.
                  </p>
                  <p className="mb-8 text-xl font-normal ">
                    <b>Modules de formation sur mesure</b>
                    <br />
                    pour les entreprises cherchant à intégrer la finance climat
                    dans leurs opérations.
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offres;
