"use client";
import { MENU } from "@/lib/constants";
import { MenuItem } from "@/types";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuIndicator,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {Button} from "@/components/ui/button";
import Link from "next/link";


type Props = {
  isSticky?: Boolean
}

export default function NavBar({ isSticky }: Props) {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="space-x-4">
          {
              MENU.map((item: MenuItem, index: number) => {
                  if(item?.subMenu){
                      return (
                         <NavigationMenuItem key={index} >
                             <NavigationMenuTrigger className={isSticky ? 'text-black bg-transparent text-sm' : 'text-white bg-transparent text-sm'}>{item?.label}</NavigationMenuTrigger>
                             <NavigationMenuContent>
                                 <ul className={'p-4 grid grid-cols-1 gap-2'}>
                                     {
                                         item?.subMenu?.map((subItem: MenuItem, index: number) => {
                                             return (
                                                 <li key={index}>
                                                     <Link href={subItem?.href} legacyBehavior passHref>
                                                         <NavigationMenuLink className={'text-sm uppercase text-black hover:text-primary'} >
                                                             {subItem?.label}
                                                         </NavigationMenuLink>
                                                     </Link>
                                                 </li>
                                             )
                                         })
                                     }
                                 </ul>
                             </NavigationMenuContent>
                         </NavigationMenuItem>
                      )
                  }
                  else{
                      return (
                          <NavigationMenuItem key={index} >
                              <Link href={item?.href} legacyBehavior passHref>
                                  <NavigationMenuLink className={isSticky ? 'text-black text-sm' : 'text-white text-sm'}>
                                      {item?.label}
                                  </NavigationMenuLink>
                              </Link>
                          </NavigationMenuItem>
                      )
                  }

              })
          }

            <Link href="/contact">
              <Button className={'bg-blueDark border-0 text-white'}>
                  NOUS CONTACTEZ
              </Button>
            </Link>
      </NavigationMenuList>

    </NavigationMenu>
  );
}
