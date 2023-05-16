import { RUTABACK } from "../constants/RutaBack.js";


export const POST_Email_Contact = async (newObjEmail) => {
  
  // const token = sessionStorage.getItem("jwt-token");

  const resp = await fetch(`${RUTABACK}/api/emails-contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
    },
    body: JSON.stringify(newObjEmail),
  });

  const data = await resp.json();

  return data;
};


export const POST_Email_Contact_Users = async (newObjEmail, id) => {
  // Retrieve token form sessionStorage
  // const token = sessionStorage.getItem("jwt-token");

  const resp = await fetch(`${RUTABACK}/api/emails-contact/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
    },
    body: JSON.stringify(newObjEmail),
  });

  const data = await resp.json();

  return data;
};