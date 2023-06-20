"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { register } from "@/app/api/services";
import { useEffect, useState } from "react";

export default function NavBar() {
  const scrolled = useScroll(50);
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    // Retrieve from localStorage
    const item = window.localStorage.getItem("token");
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, []);

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
            ></Image>
          </Link>
          <div>
            {storedValue ? (
              <button
                className="rounded-full border border-green bg-[#1ED660] p-2.5 px-6 text-sm text-white transition-all hover:bg-white hover:text-black font-bold "
                onClick={() => register()}
              >
                Log Out
              </button>
            ) : (
              <button
                className="rounded-full border border-green bg-[#1ED660] p-2.5 px-6 text-sm text-white transition-all hover:bg-white hover:text-black font-bold "
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
