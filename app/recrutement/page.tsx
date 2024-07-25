import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Recrutement() {
  return (
    <>
      <div className={"bg-gradient-to-tl from-blueDark to-blueLight "}>
        <div
          className="container section flex items-center min-h-[40vh] "
          data-aos="zoom-out-down"
          data-aos-duration="2500"
        >
          <h1
            className={
              "text-3xl md:text-7xl text-white uppercase pt-24 font-black"
            }
          >
            Recrutement !
          </h1>
        </div>
      </div>
      <div className="container section">
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 items-center"}>
          <div className={"space-y-8"} data-aos="zoom-out-right" data-aos-duration="2500">
            <h1
              className={
                "text-3xl md:text-4xl font-semibold text-blueDark uppercase"
              }
            >
              Talent makers
            </h1>
            <p>
              Vous recherchez un cabinet de conseil réputé pour son expertise et
              ses valeurs humaines. Consultez nos offres ou laissez-nous votre
              CV.
            </p>
            <div className={"flex flex-wrap items-center gap-4"}>
              <Button className={"bg-blueLight text-white"}>
                <Link href={"/offres"}>VOIR NOS OFFRES</Link>
              </Button>
              <Button className={"bg-blueDark text-white"}>
                <a href="mailto:recrutement@oventure-drc.com" className="mail">
                  LAISSEZ-NOUS VOTRE CV
                </a>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/images/offre.webp"}
              width={400}
              height={400}
              alt={"recrutement"}
              data-aos="zoom-out-left" data-aos-duration="2500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recrutement;
