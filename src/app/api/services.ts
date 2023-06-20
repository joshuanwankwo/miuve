import { API_ENDPOINT, REGISTER_ENDPOINT } from "@/lib/constants";

export const register = () => {
  fetch(REGISTER_ENDPOINT, {
    method: "POST",
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((result) => {
      // Log the resolved result

      window.localStorage.setItem("token", JSON.stringify(result));
    })
    .catch((err) => console.log(err));
};

export const logOut = () => {
  console.log("here");

  window.localStorage.removeItem("token");
};

// export const download = () => {
//   const token = window.localStorage.getItem("token");

//   fetch(API_ENDPOINT, {
//     method: "GET",
//     redirect: "follow",
//     headers: {
//       Accept: "application/json",
//       Authentication: "Basic" + token,
//     },
//   })
//     .then((res) => res.text())
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => console.log(err));
// };

export const uploadToRenterd = (file: File) => {
  const password = window.localStorage.getItem("token");

  const username = "";

  const authHeader =
    "Basic " + btoa(username + ":" + JSON.parse(password as string));

  const formData = new FormData();

  formData.append("file", file);

  fetch(`${API_ENDPOINT}judicodes/files`, {
    method: "PUT",
    redirect: "follow",
    body: formData,
    headers: {
      Authorization: authHeader,
      "content-type": file.type,
      "content-length": `${file.size}`,
    },
  })
    .then((res) => res.text())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};

// const handleApiResponse = (response: any) => {
//   // Assuming the response is received as a string
//   const responseParts = response.split("\n\n");

//   // Extract the file data from the response
//   const fileData = responseParts[1];

//   // Create a blob from the file data
//   const blob = new Blob([fileData], { type: "image/png" });

//   // Create a URL for the blob
//   const url = URL.createObjectURL(blob);

//   // Set the preview URL
// };

export const downloadFromRentred = async () => {
  const password = window.localStorage.getItem("token");
  const username = "";

  const authHeader =
    "Basic " + btoa(username + ":" + JSON.parse(password as string));
  fetch(`${API_ENDPOINT}judicodes/files`, {
    method: "GET",
    redirect: "follow",
    headers: {
      Authorization: authHeader,
    },
  })
    .then((res) => res.blob())
    .then((result) => {
      console.log(result);
      const blob = new Blob([result], {
        type: "application/octet-stream",
      });
      const imageUrl = URL.createObjectURL(blob);

      console.log(imageUrl);

      return imageUrl;
    })
    .catch((err) => console.log(err));
};

const handleApiResponse = (response: any) => {
  // Create a blob from the image data
  const blob = new Blob([response], { type: "application/octet-stream" });

  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  console.log(url);

  return url;
  // Set the preview URL
};
