import React from "react";

function Work() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto pb-20 ">
      <div
        className="rounded-xl border text-card-foreground border-none shadow-none bg-[#777CF3]/[9%] lg:bg-transparent"
        data-aos="zoom-in-down"
        data-aos-duration="1800"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="font-black text-2xl lg:text-3xl uppercase w-10/12 lg:w-full text-black">
            Vous travaillez dans une PME/ETI
          </h1>
        </div>
        <div className="p-6 pt-0">
          <p className="mt-4 text-sm font-normal w-full">
            Nous vous aidons à intégrer la transition écologique dans vos
            activités et à agir au bon niveau. Nous avons accompagné plus d’une
            centaine d’entreprises aux différentes étapes de leur transition :
            réalisation d’un Bilan Carbone, définition d’une Stratégie Climat,
            lancement d’offres bas-carbone, engagement des parties prenantes.
            Notre équipe dispose d&apos;expertise sur les secteurs où l’enjeu
            climat est fortement matériel : industrie, agro-agri, fabrication,
            construction, retail, etc.
          </p>
        </div>
      </div>

      <div
        className="rounded-xl border text-card-foreground border-none shadow-none bg-[#F3FCFE] lg:bg-transparent"
        data-aos="zoom-in-down"
        data-aos-duration="2200"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="font-black text-2xl lg:text-3xl uppercase w-10/12 lg:w-full text-primary">
            Vous travaillez dans une grande entreprise?
          </h1>
        </div>
        <div className="p-6 pt-0">
          <p className="mt-4 text-sm font-normal w-full">
            Nous vous accompagnons dans le déploiement de programmes de
            décarbonation ambitieux. Nous intervenons à chaque étape de votre
            transition bas carbone : du bilan carbone à la stratégie climat en
            passant par la formation des dirigeants et équipes. Nous sommes
            spécialistes du déploiement opérationnel de stratégies climat de
            groupe auprès des équipes, des filiales et des fournisseurs.
          </p>
        </div>
      </div>

      <div
        className="rounded-xl border text-card-foreground border-none shadow-none bg-[#FEF7F3] lg:bg-transparent"
        data-aos="zoom-in-down"
        data-aos-duration="2500"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="font-black text-2xl lg:text-3xl uppercase w-10/12 lg:w-full text-blueLight">
            Vous êtes un investisseur ?
          </h1>
        </div>
        <div className="p-6 pt-0">
          <p className="mt-4 text-sm font-normal w-full">
            Nous vous aidons à intégrer la transition écologique dans vos
            activités et à agir au bon niveau. Nous avons accompagné plus d’une
            centaine d’entreprises aux différentes étapes de leur transition :
            réalisation d’un Bilan Carbone, définition d’une Stratégie Climat,
            lancement d’offres bas-carbone, engagement des parties prenantes.
            Notre équipe dispose d&apos;expertise sur les secteurs où l’enjeu
            climat est fortement matériel : industrie, agro-agri, fabrication,
            construction, retail, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
