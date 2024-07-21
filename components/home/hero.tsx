import Video from "next-video";
import Partenaires from "./partenaires";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* <Video
        src={'/videos/forest.mp4'}
        autoPlay
        controls={false}
        loop
        muted
        playsInline
        className={" top-0 left-0 w-full h-full object-cover"}
      /> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black bg-second md:bg-transparent "></div> */}
      <Image
        src={"/images/oventure-cover.png"}
        width={1920}
        height={20}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black bg-second md:bg-transparent "
        alt="cover image"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white space-y-8 container">
        <h1 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:w-3/6 uppercase">
          Catalyseur d&apos;innovation pour un monde
          <span className="text-secondary">durable.</span>
        </h1>
        <p className="mt-4 text-xs sm:text-sm lg:text-base font-light lg:w-3/6">
          Investissements durables en RDC et compensation carbone dans les pays
          industrialisés.
        </p>
        <a
          className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm h-10 rounded-md px-4 py-6 text-xs font-bold uppercase bg-transparent border-main hover:bg-secondary hover:text-white hover:border-none"
          href="/#"
        >
          Découvrir Maintenant
        </a>
      </div>
    </div>
  );
}

export default Hero;
