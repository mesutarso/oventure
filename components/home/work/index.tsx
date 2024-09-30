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
          <h1 className="font-black text-2xl lg:text-3xl uppercase w-10/12 lg:w-full text-blueLight">
            Etes-vous porteur d’idées à la Nouvelle Économie du Climat ?
          </h1>
        </div>

        <div className="p-6 pt-0">
          <p className="mt-4 text-sm font-normal w-full">
            De la conceptualisation à l&apos;implémentation de votre idée à
            projet durable, avec une stratégie de décarbonation sur-mesure.
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
            Avez-vous besoin d’un incubateur ?
          </h1>
        </div>
        <div className="p-6 pt-0">
          <div className="mt-4 text-sm font-normal w-full">
            <ul>
              <li>
                <b>1. Partenariats pour l’innovation</b>
              </li>
              <br />
              <li>
                <b>Accompagnement des startups </b> : Nous aidons les
                entreprises à développer des solutions financières axées sur le
                climat, telles que des technologies vertes, des systèmes de
                financement durable ou des modèles économiques circulaires.
              </li>
              <br />
              <li>
                <b> Validation des idées</b> : Nous facilitons la validation des
                concepts liés à la finance climat, permettant aux entrepreneurs
                de tester et d’affiner leurs projets avant de les lancer sur le
                marché.
              </li>
              <br />

            </ul>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl border text-card-foreground border-none shadow-none bg-[#F3FCFE] lg:bg-transparent"
        data-aos="zoom-in-down"
        data-aos-duration="2200"
      >

        <div className="p-6 pt-0 pb-0">
          <div className="mt-4 text-sm font-normal w-full">
            <br />
            <ul>
              <li>
                <b>2. Accès aux financements</b>
              </li>
              <br />

              <li>
                <b>Mise en relation avec des investisseurs </b> : Connections de
                startups avec des investisseurs spécialisés dans la finance
                climat, tels que des fonds d&apos;impact ou des investisseurs
                institutionnels soucieux de la Nouvelle Économie du Climat.
              </li>
              <br />
              <li>
                <b>Aide à la préparation de dossiers</b> : Assistance aux
                entrepreneurs dans la préparation de business plans et de
                présentations convaincantes pour obtenir des financements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
