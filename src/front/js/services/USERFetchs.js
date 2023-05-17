import { RUTABACK } from "../constants/RutaBack.js";


export const GET_User = (user_id) => {
    return (fetch(`${RUTABACK}/api/users/${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
        return data;
      })
      .catch(error => {console.log(error);}));  //Error handling
  };

export const GET_All_Users = () => {
    return (fetch(`${RUTABACK}/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
        return data;
      })
      .catch(error => {console.log(error);}));  //Error handling
};


export const GET_Carers = () => {

  const token = sessionStorage.getItem("jwt-token");

  return (fetch(`${RUTABACK}/api/carers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
      }
    })
    .then(resp => {
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
      return data;
    })
    .catch(error => {console.log(error);}));  //Error handling
};


export const UPDATE_User = (newObj, user_id) => {

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/users/${user_id}`, {
        method: "PUT",
        body: JSON.stringify(newObj),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
        }
    })
    .then(resp => {
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        return data;
    })
    .catch(error => {console.log(error);}));  //Error handling
};


export const DELETE_User = (user_id) => {                        // token

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/users/${user_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
      }
      })
      .then(resp => {
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
          //here is were your code should start after the fetch finishes
          return data;
        })
        .catch(error => {console.log(error);}));  //Error handling
};


export const UPDATE_Me_User = () => {                       

  const token = sessionStorage.getItem("jwt-token");

  return (fetch(`${RUTABACK}/api/update-user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
    }
    })
    .then(resp => {
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        return data;
      })
      .catch(error => {console.log(error);}));  //Error handling
};


export const POSTRegister = async (informacionUsuario) => {
    const resp = await fetch(`${RUTABACK}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(informacionUsuario),
    });
  
    const data = await resp.json();

    return data;
};


// OTRO EJEMPLO DE HACER EL FETCH PARA EL REGISTRO DE USUARIO
// export const POST_User = (nuevoUsuario) => {
//     return (fetch(`${RUTABACK}/api/signup`, {
//         method: "POST",
//         body: JSON.stringify(nuevoUsuario),
//         headers: {
//           "Content-Type": "application/json",
//         }
//       })
//       .then((resp) => {
//         return resp.json(); //(returns promise) will try to parse the result as json as return a promise that you can .then for results
//       })
//       .then((data) => {
//         //here is were your code should start after the fetch finishes
//          return data;
//       })
//       .catch(error => {console.log(error);}));  //Error handling
// };