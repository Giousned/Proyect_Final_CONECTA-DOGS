import { RUTABACK } from "../constants/RutaBack.jsx";


export const POSTLogin = async (email, password) => {
  const resp = await fetch(`${RUTABACK}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // if (!resp.ok) throw Error("There was a problem in the login request");

  // if (resp.code === 401) {
  //   throw "Invalid credentials";
  // } else if (resp.code === 400) {
  //   throw "Invalid email or password format";
  // }

  const data = await resp.json();

  // save your token in the sessionStorage
  // also you should set your user into the store using the setStore function

  sessionStorage.setItem("jwt-token", data.token); // cookies. .... CASI MEJOR, PERO CASI NUNCA USAR LOCALSTORAGE QUIZAS EN TIENDAS...

  return data;
};

export const POSTRegister = async (informacionUsuario) => {
  const resp = await fetch(`${RUTABACK}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(informacionUsuario),
  });

  // if (!resp.ok) throw Error("There was a problem in the register request");

  // if (resp.code === 401) {
  //   throw "Invalid credentials";
  // } else if (resp.code === 400) {
  //   throw "Invalid email or password format";
  // }

  const data = await resp.json();

  return data;
};

// asumiendo que "/protected" es un endpoint privado
export const GETToken = async () => {
  // retrieve token form sessionStorage
  const token = sessionStorage.getItem("jwt-token");

  const resp = await fetch(`${RUTABACK}/protected`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
    },
  });

  // if (!resp.ok) throw Error("There was a problem in the login request");

  // if (resp.code === 403) {
  //   throw "Missing or invalid token";
  // } else if (resp.code === 500) throw "Unknown error";

  const data = await resp.json();

  console.log("This is the data you requested", data);

  return data;
};
