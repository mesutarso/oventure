import Video from "next-video";
import Partenaires from "./partenaires";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative h-[600px] lg:h-screen overflow-hidden">
      <Image
        src={"/images/oventure-cover.png"}
        fill
        className=" bg-gradient-to-br from-black bg-second md:bg-transparent "
        alt="cover image"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white space-y-8 container">
        <h1
          className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:w-3/6 uppercase "
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
        1er Incubateur et Réseau d’experts en République Démocratique du Congo à la finance
          <span className="text-secondary"> climat.</span>
        </h1>
        <p
          className="mt-4 text-xs sm:text-sm lg:text-base font-light lg:w-3/6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Plateforme innovante spécialisée dans la formation et consultances en
          finance climat
        </p>
        <div>
          <Link href={"/qui-sommes-nous"}>
            <Button
              className={
                "focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm h-10 rounded-md px-4 py-6 text-xs font-bold uppercase bg-transparent border-main hover:bg-secondary hover:text-white hover:border-none"
              }
              data-aos="zoom-in"
            >
              Découvrir Maintenant
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
