import { RUTABACK } from "../constants/RutaBack.js";


export const GET_Tariff = (tariff_id) => {
    return (fetch(`${RUTABACK}/api/tariffs/${tariff_id}`, {
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

export const GET_All_Tariffs = () => {
    return (fetch(`${RUTABACK}/api/tariffs`, {
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
      
export const UPDATE_Tariff = (newObj, tariff_id) => {

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/tariffs/${tariff_id}`, {
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


export const DELETE_Tariff = (tariff_id) => {                        // token

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/tariffs/${tariff_id}`, {
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
          return data;
        })
        .catch(error => {console.log(error);}));  //Error handling
};




export const POST_Tariff = (objServicioYTarifa) => {

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/signup-tariff`, {
        method: "POST",
        body: JSON.stringify(objServicioYTarifa),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,                 // ⬅⬅⬅ authorization token
        }
      })
      .then((resp) => {
        return resp.json(); //(returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        return data;
      })
      .catch(error => {console.log(error);}));  //Error handling
};
