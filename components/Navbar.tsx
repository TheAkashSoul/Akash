"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const NavList = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Tweets", link: "/tweets" },
  ];
  return (
    <div className="flex gap-5 border border-[#F3F3F3] dark:border-[#262629] h-10 items-center justify-center px-5 rounded-full">
      {NavList.map((nav) => (
        <div key={nav.name} className="relative h-full flex items-center">
          <span
            className={`absolute w-[100%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0 ${
              pathName === nav.link ? "block" : "hidden"
            }`}
          ></span>
          <Link
            href={nav.link}
            className={`font-semibold text-sm ${
              pathName === nav.link
                ? "text-[#0D9488]"
                : "text-[#262629] dark:text-[#F9FAFB]"
            }`}
          >
            {nav.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
