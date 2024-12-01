import React from "react";
import Link from "next/link";
import Image from "next/image";
import bettterAuthLogo from "@/public/better-auth.svg";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  return (
    <nav className="px-4 border-b">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <Link className="flex items-center gap-2 font-bold text-lg" href="/">
          <Image
            src={bettterAuthLogo}
            alt="logo"
            className="h-5 w-fit dark:invert"
          />
          <span className="hidden md:block">Better Auth Starter</span>
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};
