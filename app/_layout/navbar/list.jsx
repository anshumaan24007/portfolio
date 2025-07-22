"use client";

import { Dot } from "lucide-react";
import Link from "next/link";

import { Center, MagneticButton } from "@/components";
import { navItems } from "@/data";
import { randomId } from "@/utils";

export function NavbarList() {
  const firstItem = navItems.slice(0, 1);
  const otherItems = navItems.slice(1);

  return (
    <nav className="flex w-full justify-between items-center px-8 max-lg:hidden">
      {/* Left: First nav item */}
      <ul className="flex items-center">
        {firstItem.map(({ href, title }) => (
          <li key={randomId()} className="group p-4">
            <Link href={href} passHref>
              <MagneticButton>
                <span className="text-base capitalize">{title}</span>
                <Center>
                  <Dot className="scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100" />
                </Center>
              </MagneticButton>
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Remaining nav items */}
      <ul className="flex items-center">
        {otherItems.map(({ href, title }) => (
          <li key={randomId()} className="group p-4">
            <Link href={href} passHref>
              <MagneticButton>
                <span className="text-base capitalize">{title}</span>
                <Center>
                  <Dot className="scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100" />
                </Center>
              </MagneticButton>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
