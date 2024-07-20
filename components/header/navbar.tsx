"use client";
import { MENU } from "@/lib/constants";
import { MenuItem } from "@/types";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="space-x-4">
        {MENU.map((item: MenuItem, index: number) => (
          <NavigationMenuItem key={index}>
            <Link href={item.href} className="text-lg font-semibold transition-colors hover:text-main sm:text-sm uppercase text-white">
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">
              <Button className={'bg-primary border-0'}>
                  NOUS CONTACTEZ
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
