/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function Card({ url }: any) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={` animate-fade-up relative col-span-1 h-96 w-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={url.url.split("?")[0]}
        alt={url.url.split("?")[0]}
        className="mx-auto max-w-md text-center"
      />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => console.log("Delete")}
            className="flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-red-100 px-7 py-2 text-sm font-semibold text-[#c44e4e] transition-colors hover:bg-red-200"
          >
            🗑️ Delete
          </button>
          <button
            onClick={() => console.log("Share")}
            className="flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-green-100 px-7 py-2 text-sm font-semibold text-[#4ef01d] transition-colors hover:bg-green-200"
          >
            Migrate to Sia
          </button>
        </div>
      )}
    </div>
  );
}
