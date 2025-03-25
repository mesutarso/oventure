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
            Leadership Climat ; Atelier de haut lieu sur la finance climat
          </h1>
        </div>

        <div className="p-6 pt-0">
          <p className="mt-4 text-sm font-normal w-full">
            Les Ateliers de Leadership sur les Finances Climat et les Marchés
            Carbone en RDC sont conçus pour être un point de convergence pour
            les décideurs, les leaders d&apos;opinion, et les acteurs clés de la
            finance et de l&apos;environnement en RDC.
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
            Climate school
          </h1>
        </div>
        <div className="p-6 pt-0">
          <div className="mt-4 text-sm font-normal w-full">
            <p>
              La Climate School de DECARBONE est conçue pour toute personne
              désireuse d’acquérir des connaissances approfondies sur les enjeux
              climatiques et de participer activement à la transition
              écologique.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl border text-card-foreground border-none shadow-none bg-[#F3FCFE] lg:bg-transparent"
        data-aos="zoom-in-down"
        data-aos-duration="2200"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="font-black text-2xl lg:text-3xl uppercase w-10/12 lg:w-full text-primary">
            Bootcamp carrière
          </h1>
        </div>

        <div className="p-6 pt-0 pb-0">
          <div className="mt-4 text-sm font-normal w-full">
            <p>
              Le Bootcamp Carrière de DECARBONE est spécialement conçu pour les
              jeunes professionnels et les étudiants en fin de cycle qui
              souhaitent se spécialiser et se lancer dans des carrières liées à
              la finance climat, au développement durable, et aux domaines
              connexes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
