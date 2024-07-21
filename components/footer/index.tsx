import Image from "next/image";

import Link from "next/link";
import Logo from "../shared/logo";

const now = new Date();
const year = now.getFullYear();

export default function Footer() {
  return (
    <footer className="text-white bg-black">
      <div className="space-y-12 flex flex-col items-center justify-center py-20 text-white max-w-5xl mx-auto">
        <h1 className="font-black leading-tight text-3xl lg:text-3xl uppercase lg:w-3/6 text-center">
        Catalyseur d&apos;innovation pour un monde <span className="text-secondary">durable.</span> 
        </h1>
        <p className="text-center mt-4 text-sm md:text-base font-light lg:basis-4/12 lg:w-3/6">
          En matière de compensations, il y a beaucoup de choses inutiles. Nous
          les filtrons pour que vous n&apos;ayez pas à le faire.
        </p>
       
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-between">
          
          <div className="space-y-1 flex flex-col">
            <a className="text-white/60 hover:text-secondary" href="/#">
              Qui sommes nous
            </a>
            <a className="text-white/60 hover:text-secondary" href="/#">
             Oventure consulting
            </a>
            <a className="text-white/60 hover:text-secondary" href="/#">
              Oventure software
            </a>
          </div>
          <a className="hidden md:flex items-center space-x-2" href="/">
          <Logo />
          </a>
          <div className="space-y-1 flex flex-col">
            <a className="text-white/60 hover:text-secondary" href="/#">
              Oventure climat
            </a>
            <a className="text-white/60 hover:text-secondary" href="/#">
              Finance climat school
            </a>
            <a className="text-white/60 hover:text-secondary" href="/#">
              Nous contactez
            </a>
          </div>
        </div>
        <p className="text-white/60 text-center mt-4 text-sm md:text-base font-light lg:basis-4/12 lg:w-3/6">
          © 2024 Oventure.
        </p>
      </div>
    </footer>
  );
}
