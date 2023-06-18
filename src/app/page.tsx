"use client";

import Card from "@/components/card";
import { useState } from "react";
import Balancer from "react-wrap-balancer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("aws");
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-green-100 px-7 py-2 transition-colors hover:bg-green-200"
        >
          <h6>🟢</h6>
          <p className="text-sm font-semibold text-[#4ef01d]">
            Introducing Miuve
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Migrate from AWS to Sia renterd</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Easily migrate your data from AWS to Sia decentralized cloud storage
            via renterd
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <button
            onClick={() => setActiveTab("aws")}
            className={`flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 ${
              activeTab === "aws"
                ? " bg-green-600 px-5 py-2 text-sm text-white shadow-md transition-colors hover:border-green-200"
                : "bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-green-200"
            }`}
          >
            {/* <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <p>AWS s3 bucket</p>
          </button>
          <button
            onClick={() => setActiveTab("sia")}
            className={`flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 ${
              activeTab === "sia"
                ? "bg-green-600 px-5 py-2 text-sm text-white shadow-md transition-colors hover:border-green-200"
                : "bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-green-200"
            } `}
          >
            {/* <Github /> */}
            <p>
              <span className="hidden sm:inline-block">Sia Cloud</span> Renterd
            </p>
          </button>
        </div>
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          {features.map((k) => (
            <Card key={k} />
          ))}
        </div>
      </div>
    </>
  );
}

const features = ["hey", "hello", "weldone", "God"];
