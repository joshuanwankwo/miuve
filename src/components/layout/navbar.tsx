"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useEffect, useState } from "react";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { logOut, register } from "@/app/api/siaServices";

export default function NavBar() {
  const scrolled = useScroll(50);
  const [value] = useLocalStorage("token", "");

  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 py-14 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/siamuive_logo.png"
              alt="Sia muive logo"
              width="200"
              height="90"
              className="mr-2 rounded-sm"
              priority
            />
          </Link>
          <div>
            {value ? (
              <button
                className="rounded-full border border-green bg-[#1ED660] p-1.5 px-6 text-sm text-white transition-all hover:bg-white hover:text-black "
                onClick={() => logOut()}
              >
                Log Out
              </button>
            ) : (
              <button
                className="rounded-full border border-green bg-[#1ED660] p-1.5 px-6 text-sm text-white transition-all hover:bg-white hover:text-black "
                onClick={() => register()}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
