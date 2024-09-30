import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="container section space-y-10">
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
        <div>
          <p data-aos="fade-down-right" data-aos-duration="2500">
            <strong className={"text-blueDark text-3xl font-semibold"}>DECARBONE RDC</strong>, filiale du Groupe
            <strong className={"text-blueDark font-semibold"}>
              All In One
            </strong>
            , est une plateforme de référence en finance climat, dédiée à
            l’innovation pour un développement durable. Face aux défis mondiaux
            du changement climatique, notre mission est de positionner la RDC au
            cœur des solutions climatiques globales et un acteur clé de la
            transition énergétique, en catalysant des investissements durables
            et en facilitant la compensation carbone.
          </p>
          <br />
          <p>
            Nous nous spécialisons dans les investissements durables en RDC et
            la compensation carbone dans les pays industrialisés. Notre
            plateforme d’expertise intègre une profonde connaissance des métiers
            liés à la finance climat, apportant des solutions innovantes pour
            répondre aux défis mondiaux et promouvoir les projets verts.
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
  );
}

export default Hero;
