import HorizontalCarousel from "@/components/home/office/horizontal-carousel";

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

      <HorizontalCarousel />

    </div>
  );
}

export default Office;
