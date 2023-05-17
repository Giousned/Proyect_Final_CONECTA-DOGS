import { RUTABACK } from "../constants/RutaBack.js";


export const GET_Dog = (dog_id) => {
    return (fetch(`${RUTABACK}/api/dogs/${dog_id}`, {
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

export const GET_All_Dogs = () => {
    return (fetch(`${RUTABACK}/api/dogs`, {
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
      
export const UPDATE_Dog = (newObj, dog_id) => {

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/dogs/${dog_id}`, {
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


export const DELETE_Dog = (dog_id) => {

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/dogs/${dog_id}`, {
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




export const POST_Dog = (nuevoPerro) => {

    const token = sessionStorage.getItem("jwt-token");

    return (fetch(`${RUTABACK}/api/signup-dog`, {
        method: "POST",
        body: JSON.stringify(nuevoPerro),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        }
      })
      .then((resp) => {
        return resp.json(); //(returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //here is were your code should start after the fetch finishes
        return data;
      })
      .catch(error => {console.log(error);}));  //Error handling
};
