import { uploadToRenterd } from "@/app/api/siaServices";

export const getFileNameFromUrl = (url: any) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
};

export const createFileFromImageUrl = async (imageUrl: any) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const fileName = getFileNameFromUrl(imageUrl);
  const file = new File([blob], fileName, { type: blob.type });

  return file;
};

export const handleMigration = (file: any) => {
  createFileFromImageUrl(file.url)
    .then((file) => {
      uploadToRenterd(file);
    })
    .catch((error) => {
      console.error(error);
    });
};
