
import Link from "next/link";
import Logo from "../shared/logo";
import Partenaires from "../home/partenaires";

const now = new Date();
const year = now.getFullYear();

export default function Footer() {
  return (
    <>
      <Partenaires />
      <footer className="text-white bg-black">
        <div className="space-y-12 flex flex-col items-center md:justify-center py-20 text-white max-w-5xl container section">
          <h1 className="font-black leading-tight text-3xl lg:text-3xl uppercase lg:w-1/2 md:text-center">
            Catalyseur d&apos;innovation pour un monde{" "}
            <span className="text-secondary">durable.</span>
          </h1>
          <p className="md:text-center mt-4 text-sm md:text-base font-light lg:basis-4/12 lg:w-3/6">
            En matière de compensations, il y a beaucoup de choses inutiles.
            Nous les filtrons pour que vous n&apos;ayez pas à le faire.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-between">
            <div className="space-y-1 flex flex-col">
              <Link className="text-white/60 hover:text-secondary" href="/qui-sommes-nous">
                Qui sommes nous
              </Link>
              <Link className="text-white/60 hover:text-secondary" href="/offres#oventure-consulting">
                Oventure consulting
              </Link>
              <Link className="text-white/60 hover:text-secondary" href="/offres#oventure-software">
                Oventure software
              </Link>
            </div>

              <Logo />

            <div className="space-y-1 flex flex-col">
              <Link className="text-white/60 hover:text-secondary" href="/offres#finance-climat">
                Finance climat
              </Link>
              <Link className="text-white/60 hover:text-secondary" href="/offres/finance-climat-school">
                Finance climat school
              </Link>
              <Link className="text-white/60 hover:text-secondary" href="/contact">
                Nous contactez
              </Link>
            </div>
          </div>
          <p className="text-white/60 text-center mt-4 text-sm md:text-base font-light lg:basis-4/12 lg:w-3/6">
            © 2024 Oventure.
          </p>
        </div>
      </footer>
    </>
  );
}
