import Link from "next/link";
import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

export function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            er.
            <span className="text-lime-500">Turismo</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};
