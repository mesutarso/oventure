"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/shared/logo";
import NavBar from "./navbar";
import Drawer from "./drawer";
import { usePathname } from 'next/navigation'
import {cn} from "@/lib/cn";

export default function Header() {
  const [isSticky, setIsSticky] = useState<Boolean>(false);
  const variants = {
    hidden: { opacity: 0.5, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pathname = usePathname()

  const isHomeOrEvents = useCallback(() => {
    return pathname === "/" || pathname === "/evenements" || pathname === "/actualites";
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={cn(`fixed w-full z-40 top-0  transition-all  duration-300 ease-in-out ${isHomeOrEvents() ? 'bg-transparent' : 'bg-white'} ${
          isSticky ? "bg-white shadow-md isSticky" : `${isHomeOrEvents() ? 'text-white' : 'text-black'}`
      }`)}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <NavBar />
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </motion.header>
  );
}
