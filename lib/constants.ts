import type { MenuItem, Offer, Service, Event } from "@/types";

export const MENU: MenuItem[] = [
  {
    label: "ACCUEIL",
    href: "/",
  },
  {
    label: "NOS OFFRES",
    href: "/#",
    subMenu : [

      {
        label: "Oventure consulting",
        href: "/offres#ouventure-consulting",
      },

      {
        label: "Oventure software",
        href: "/offres#oventure-software",
      },
      {
        label: "Finance Climat",
        href: "/offres#finance-climat",
      },
      {
        label: "Finance Climat School",
        href: "/offres/finance-climat-school",
      },

    ]
  },

  {
    label: "QUI SOMMES-NOUS",
    href: "/qui-sommes-nous",
  },
  {
    label: "NOS PROJETS",
    href: "/nos-projets",
  },
  {
    label: "BLOG",
    href: "/blog",
  },
  {
    label: "RECRUTEMENT",
    href: "/recrutement",
  },

];
