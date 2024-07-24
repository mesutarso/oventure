import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function NosProjets() {
  return (
    <div>
      <div className={"bg-gradient-to-tl from-blueDark to-blueLight "}>
        <div className="container section flex items-center min-h-[40vh] ">
          <h1
            className={
              "text-3xl md:text-7xl text-white uppercase pt-24 font-black"
            }
          >
            Nos Projets
          </h1>
        </div>
      </div>

      <div className="mb-[100px] mt-[100px]">
        <div className="bg-blueDark container rounded-xl min-h-[600px]">
          <div className="gap-10 flex flex-col lg:flex-row items-center justify-center py-20 text-white max-w-5xl mx-auto">
            <div className="lg:basis-1/2 flex flex-col items-start justify-center space-y-8">
              <h1 className="font-black leading-tight text-3xl lg:text-5xl uppercase w-10/12">
                FINAN<span className="text-secondary">CARBON</span>
              </h1>
              <h3 className="font-semibold text-3xl  leading-tight text-md lg:text-md  w-10/12">
                Unlocking project,{" "}
                <span className="text-secondary">financing</span> impact.
              </h3>
            </div>
            <div className="lg:basis-1/2">
              <Image
                alt="Earth"
                loading="lazy"
                width="800"
                height="800"
                decoding="async"
                className="w-full"
                src="/images/dasboard.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40 bg-blueDark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:flex lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20 items-center">
              <div className="w-[33.75rem] flex-none lg:w-[45rem]">
                <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full ">
                  <svg viewBox="0 0 655 380" fill="none" className="h-full">
                    <g clip-path="url(#:S1:-clip)" className="group">
                      <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                        <foreignObject width="655" height="480">
                          <Image
                            alt=""
                            loading="lazy"
                            width="2400"
                            height="1800"
                            decoding="async"
                            className="w-full  object-cover"
                            src={"/images/corporate-oventure-image-114.jpg"}
                          />
                        </foreignObject>
                      </g>
                      <use
                        href="#:S1:-shape"
                        stroke-width="2"
                        className="stroke-secondary-950/10"
                      ></use>
                    </g>
                    <defs>
                      <clipPath id=":S1:-clip">
                        <path
                          id=":S1:-shape"
                          d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first ">
                <div>
                  <h1 className="font-black leading-tight text-3xl text-secondary lg:text-5xl uppercase w-10/12">
                    FINAN<span className="text-primary">CARBON</span>
                  </h1>
                  <div className="mt-6">
                    <div className="space-y-6 text-base text-secondary-600">
                      <p className="text-white">
                        une plateforme SaaS B2B qui connecte les porteurs de
                        projets et les acheteurs de crédits carbone via leurs
                        banques de confiance. Financarbon simplifie la
                        conception, le financement et la gestion des projets
                        carbone, réduisant le risque opérationnel des banques et
                        garantissant la transparence et la qualité des crédits
                        carbone aux acheteurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="mx-auto px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="">
              <h1 className="font-black leading-tight text-3xl text-primary lg:text-4xl uppercase w-10/12">
                Notre Proposition de valeur pour rendre le marché transparent,
                intègre et liquide.
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 border border-primary transition hover:bg-primary hover:text-white sm:p-8">
                  <h3>
                    <a href="/work/family-fund">
                      <span className="absolute inset-0 rounded-3xl"></span>
                      <Image
                        alt="Image"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        src="/images/image-123.png"
                      />
                    </a>
                  </h3>

                  <p className="mt-6 font-display text-2xl font-semibold text-secondary-950 ">
                    Porteur de projets
                  </p>
                  <p className="mt-4 text-base text-secondary-600">
                    Réduction des délais, de la complexité et des coûts des
                    projets.
                  </p>
                </article>
              </div>
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 border border-primary transition hover:bg-primary hover:text-white sm:p-8">
                  <h3>
                    <a href="/work/unseal">
                      <span className="absolute inset-0 rounded-3xl"></span>
                      <Image
                        alt="Image"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        src="/images/image-125.png"
                      />
                    </a>
                  </h3>

                  <p className="mt-6 font-display text-2xl font-semibold text-secondary-950">
                    Acheteur de crédits carbones
                  </p>
                  <p className="mt-4 text-base text-secondary-600">
                    Achat de crédits carbone de qualité, traçables pré et
                    post-émission.
                  </p>
                </article>
              </div>
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 border border-primary transition hover:bg-primary hover:text-white sm:p-8">
                  <h3>
                    <a href="/work/phobia">
                      <span className="absolute inset-0 rounded-3xl"></span>
                      <Image
                        alt="Image"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        src="/images/image-127.png"
                      />
                    </a>
                  </h3>
                  <p className="mt-6 font-display text-2xl font-semibold text-secondary-950">
                    Institutions financières
                  </p>
                  <p className="mt-4 text-base text-secondary-600">
                    Minimisation du risque opérationnel pour les banques
                    investissant dans les projets climatiques.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40 bg-blueDark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:flex lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20 items-center">
              <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first ">
                <div>
                  <h3 className="font-black leading-tight text-2xl text-secondary lg:text-2xl uppercase w-10/12">
                    Une approche unique pour placer la RDC comme leader de la
                    finance carbone en Afrique.
                  </h3>

                  <h3 className="font-black leading-tight text-1xl text-white lg:text-1xl uppercase w-10/12 mt-6">
                    Simplicité
                  </h3>
                  <div className="mt-6">
                    <div className="space-y-6 text-base text-secondary-600">
                      <p className="text-white">
                        Interface intuitive, des outils conviviaux et un
                        processus d&apos;intégration fluide, simplifiant la
                        gestion et le financement des projets
                      </p>
                    </div>
                  </div>

                  <h3 className="font-black leading-tight text-1xl text-white lg:text-1xl uppercase w-10/12 mt-6">
                    Transparence
                  </h3>
                  <div className="mt-6">
                    <div className="space-y-6 text-base text-secondary-600">
                      <p className="text-white">
                        Traçabilité intégrale des données, assurant une
                        visibilité totale aux parties prenantes et à l’Etat.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-black leading-tight text-1xl text-white lg:text-1xl uppercase w-10/12 mt-6">
                    Scalabilité
                  </h3>
                  <div className="mt-6">
                    <div className="space-y-6 text-base text-secondary-600">
                      <p className="text-white">
                        Support des projets carbone dès la conception, avec une
                        plateforme évolutive répondant aux besoins des banques
                        et de leurs clients porteurs de projets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[33.75rem] flex-none lg:w-[45rem]">
                <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full ">
                  <Image
                    alt=""
                    loading="lazy"
                    width="2400"
                    height="1800"
                    decoding="async"
                    className="w-full  object-cover"
                    src={"/images/image-135.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosProjets;
