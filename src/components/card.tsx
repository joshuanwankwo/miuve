/* eslint-disable @next/next/no-img-element */
import { uploadToRenterd } from "@/app/api/siaServices";
import React, { useState } from "react";

export default function Card({ file, type }: any) {
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function createFileFromImageUrl(imageUrl: any) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const fileName = getFileNameFromUrl(imageUrl);
    const file = new File([blob], fileName, { type: blob.type });

    return file;
  }

  const handleMigration = () => {
    createFileFromImageUrl(file.url)
      .then((file) => {
        uploadToRenterd(file);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDeletion = () => {
    createFileFromImageUrl(file.url)
      .then((file) => {
        uploadToRenterd(file);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function getFileNameFromUrl(url: any) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  }

  return (
    <div
      className={` animate-fade-up relative col-span-1 flex flex-wrap overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md }`}
      onMouseEnter={type === "aws" ? handleMouseEnter : undefined}
      onMouseLeave={type === "aws" ? handleMouseLeave : undefined}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={type === "aws" ? file.url.split("?")[0] : file}
          alt={type === "aws" ? file.url.split("?")[0] : file}
          className="mx-auto max-w-md text-center"
          style={{
            flex: "1 0 auto",
            objectFit: "fill",
            height: "auto",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
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
            onClick={() => handleDeletion}
            className="flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-red-100 px-7 py-2 text-sm font-semibold text-[#c44e4e] transition-colors hover:bg-red-200"
          >
            🗑️ Delete
          </button>
          <button
            onClick={() => handleMigration()}
            className="flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-green-100 px-7 py-2 text-sm font-semibold text-[#4ef01d] transition-colors hover:bg-green-200"
          >
            Migrate to Sia
          </button>
        </div>
      )}
    </div>
  );
}
