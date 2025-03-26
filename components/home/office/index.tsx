import React from "react";
import VideoHome from "../video";
import HorizontalCarousel from "./horizontal-carousel";

function Office() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="max-w-4xl py-16 lg:py-24 flex flex-col md:flex-row items-start md:items-start justify-between w-full mx-auto container text-second">
        <h1
          className="font-black leading-tight text-3xl lg:text-4xl uppercase lg:basis-5/12"
          data-aos="fade-down-right"
          data-aos-duration="2500"
        >
          Decarbone RDC est une plateforme de
          référence en finance climat, dédiée à l&apos;innovation pour un
          développement durable.
        </h1>
        <p
          className="mt-4 text-xs sm:text-sm font-light lg:basis-4/12 max-w-[70vw] lg:max-w-none"
          data-aos="fade-down-left"
          data-aos-duration="2500"
        >
          Face aux défis mondiaux du changement climatique, notre mission est de
          positionner la RDC au cœur des solutions climatiques globales et un
          acteur clé de la transition énergétique, en catalysant des
          investissements durables et en facilitant la compensation carbone.
        </p>
      </div>
      <div className="relative">
        <HorizontalCarousel />
      </div>
      <div className="bg-[#fbe910] py-20">
        <VideoHome />
      </div>
    </div>
  );
}

export default Office;
