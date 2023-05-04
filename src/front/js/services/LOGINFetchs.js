import { RUTABACK } from "../constants/RutaBack.js";


export const POST_Login = async (email, password) => {
  const resp = await fetch(`${RUTABACK}/api/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // HAY QUE PONER UN TRY/CATH PARA QUE FUNCIONE Y LOS MISMOS NOMBRES Y CODIGOS QUE EN EL BACK
  // if (!resp.ok) throw Error("There was a problem in the login request");
  // if (resp.code === 400) {
  //   throw "Invalid email or password format";
  // }

  const data = await resp.json();

  // sessionStorage.setItem("jwt-token", data.token); // MEJOR EN EL CONTEXTO AUTENTIFICACION

  return data;
};


// EJEMPLO PARA RUTAS PRIVADAS OBTENIENDO TOKEN PRIMERO Y MANDANDOLO AL BACK
// asumiendo que "/protected" es un endpoint privado
export const GET_Token = async () => {
  // Retrieve token form sessionStorage
  const token = sessionStorage.getItem("jwt-token");

  const resp = await fetch(`${RUTABACK}/api/protected`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
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
