import { API_ENDPOINT, REGISTER_ENDPOINT } from "@/lib/constants";

export const register = () => {
  fetch(REGISTER_ENDPOINT, {
    method: "POST",
    redirect: "follow",
  })
    .then((res) => res.text())
    .then((result) => {
      // Log the resolved result
      const stringWithoutQuotes = `${result}`.replaceAll('"', "");
      console.log(stringWithoutQuotes);
      window.localStorage.setItem("token", JSON.stringify(stringWithoutQuotes));
    })
    .catch((err) => console.log(err));
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

export const upload = (path: any) => {
  const password = window.localStorage.getItem("token");
  const username = "";

  const authHeader = "Basic " + btoa(username + ":" + password);

  fetch(`${API_ENDPOINT}${path}`, {
    method: "PUT",
    redirect: "follow",
    headers: {
      Authentication: authHeader,
    },
  })
    .then((res) => res.text())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};


export const download = (path: any) => {
    const password = window.localStorage.getItem("token");
    const username = "";
  
    const authHeader = "Basic " + btoa(username + ":" + password);
  
    fetch(`${API_ENDPOINT}${path}`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authentication: authHeader,
      },
    })
      .then((res) => res.text())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };