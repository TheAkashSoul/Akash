"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const NavList = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="flex gap-5 border border-[#F3F3F3] dark:border-[#262629] h-10 items-center justify-center px-5 rounded-full">
      {NavList.map((nav) => (
        <Link
          href={nav.link}
          key={nav.name}
          className={`font-semibold text-sm ${
            pathName === nav.link
              ? "text-[#0D9488]"
              : "text-[#262629]/80 dark:text-[#F9FAFB]"
          }`}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
