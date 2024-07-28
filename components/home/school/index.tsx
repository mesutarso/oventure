import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function SchoolSection() {
  return (
    <div className="container ">
      <div
        className="bg-black container rounded-xl min-h-[600px]"
        data-aos="zoom-out-down"
      >
        <div className="gap-10 flex flex-col lg:flex-row items-center justify-center py-20 text-white max-w-5xl mx-auto">
          <div
            className="lg:basis-1/2"
            data-aos="zoom-out"
            data-aos-duration="2500"
          >
            <Image
              alt="Earth"
              loading="lazy"
              width="800"
              height="800"
              decoding="async"
              className="w-full"
              src="/images/finance-school-t.png"
            />
          </div>
          <div
            className="lg:basis-1/2 flex flex-col items-start justify-center space-y-8"
            data-aos="zoom-out"
            data-aos-duration="2500"
          >
            <h1 className="font-black leading-tight text-3xl lg:text-5xl uppercase w-10/12">
              Finance Climat <span className="text-secondary">School</span>
            </h1>
            <h3 className="font-black leading-tight text-md lg:text-md uppercase w-10/12">
              Des formations adaptées à vos besoins
            </h3>
            <p className="mt-4 text-xs sm:text-sm font-normal lg:w-9/12 lg:max-w-none">
              Nos activités de sensibilisation / formation sont au cœur de la
              mission que nous nous sommes donnée.
            </p>
            <Button
              className={
                "border shadow-sm h-10 rounded-md px-4 py-6 text-xs font-bold uppercase bg-transparent border-main hover:text-secondary "
              }
            >
              Découvrir Maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolSection;
