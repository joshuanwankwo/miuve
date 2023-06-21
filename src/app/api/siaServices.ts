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
  window.localStorage.removeItem("token");
};

export const uploadToRenterd = (file: File) => {
  const password = window.localStorage.getItem("token");
  const username = "";
  const authHeader =
    "Basic " + btoa(username + ":" + JSON.parse(password as string));
  const key = (Math.random() + 1).toString(36).substring(7);

  fetch(`${API_ENDPOINT}judicodes/files/${key}`, {
    method: "PUT",
    redirect: "follow",
    body: file,
    headers: {
      Authorization: authHeader,
    },
  })
    .then((res) => res.text())
    .catch((err) => console.log(err));
};

export const getBase64Url = (name: string, authHeader: any) => {
  return new Promise(async (resolve, reject) => {
    const singleResponse = await fetch(
      `${API_ENDPOINT}judicodes/files/${name}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: authHeader,
        },
      }
    );
    const data = await singleResponse.blob();
    const blob = new Blob([data], {});
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      resolve(reader.result?.toString());
    };
    reader.onerror = function (err) {
      reject(err);
    };
  });
};

export const downloadFromRentred = async () => {
  const password = window.localStorage.getItem("token");
  const username = "";

  const authHeader =
    "Basic " + btoa(username + ":" + JSON.parse(password as string));

  const res = await fetch(`${API_ENDPOINT}judicodes/files`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: authHeader,
    },
  });
  const newRes = await res.json();

  const urls = await Promise.all(
    newRes.map((res: { name: string }) => getBase64Url(res.name, authHeader))
  );

  return urls;
};
