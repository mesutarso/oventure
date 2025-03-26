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
        label: "CONSEIL ET CONSULTANCE EN FINANCE CLIMAT",
        href: "/offres#ouventure-consulting",
      },
      {
        label: "DÉVELOPPEMENT ET GESTION DE PROJETS CLIMAT",
        href: "/offres#oventure-software",
      },
      {
        label: "FINANCE CLIMAT",
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
    label: "FORMATION",
    href: "/nos-projets",
  },
  // {
  //   label: "NOS PROJETS",
  //   href: "/nos-projets",
  // },
  {
    label: "BLOG",
    href: "/blog",
  },

];
