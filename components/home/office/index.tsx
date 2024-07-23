import React from "react";
import VideoHome from "../video";

function Office() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="max-w-4xl py-16 lg:py-24 flex flex-col md:flex-row items-start md:items-center justify-between w-full mx-auto container text-second">
        <h1 className="font-black leading-tight text-3xl lg:text-4xl uppercase lg:basis-5/12">
          CABINET CONSEIL ET MANAGEMENT
        </h1>
        <p className="mt-4 text-xs sm:text-sm font-light lg:basis-4/12 max-w-[70vw] lg:max-w-none">
          Oventure est un cabinet de conseil international et un éditeur de
          logiciels dédiés à la finance climat. Nous offrons des services de
          technologie et de conseil pour promouvoir le financement climatique
          auprès des développeurs de projets, des institutions financières et
          des décideurs publiques.
        </p>
      </div>
      <VideoHome />
      <div
        className="relative w-full pb-20 hidden md:block"
        role="region"
        aria-roledescription="carousel"
      >
        <div className="overflow-hidden">
          <div className="flex -ml-1">
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-2/3 lg:basis-2/5"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-primary shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text text-white">
                      grands projets big impact.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-2/3 lg:basis-2/5"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-secondary shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text">
                      le plus grand marché carbone en afrique
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-2/3 lg:basis-2/5"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-blueLight shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text text-white">
                      analyses &amp; rapports
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex md:hidden flex-col items-start justify-start space-y-8 overflow-hidden">
        <div className="relative w-full h-full pb-72">
          <div className="w-11/12 absolute left-4">
            <div className="rounded-xl border text-card-foreground bg-main shadow-sm border-none w-full">
              <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text">
                  grands projets big impact.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full pb-72">
          <div className="w-11/12 absolute left-6">
            <div className="rounded-xl border text-card-foreground bg-third shadow-sm border-none w-full">
              <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text">
                  le plus grand marché carbone en afrique
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full pb-72">
          <div className="w-11/12 absolute left-[35vw]">
            <div className="rounded-xl border text-card-foreground bg-sky-300 shadow-sm border-none w-full">
              <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text">
                  analyses &amp; rapports
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Office;
