import { REGISTER_ENDPOINT } from "@/lib/constants";

export const register = () => {
  fetch(REGISTER_ENDPOINT, {
    method: "POST",
    redirect: "follow",
  })
    .then((res) => res.text())
    .then((result) => {
      // Log the resolved result
      console.log(result);

      // Set the token to localStorage if needed
    })
    .catch((err) => console.log(err));
};
