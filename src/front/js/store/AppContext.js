import React from "react";
import { createContext, useContext, useState, useEffect} from "react";

import { POSTRegister } from "../services/USERFetchs.js";
import { UPDATE_User } from "../services/USERFetchs.js";
import { POST_Tariff } from "../services/TARIFFFetchs.js";
import useAuthContext from "./AuthContext.js";
import useUserInput from "../hooks/useUserInput.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { storeAuth, actionsAuth } = useAuthContext();

  const { userInput, resetInput, handleUserInput, handleUserCheck, handleUserSelectDate } = useUserInput();

  useEffect(() => {

    const newObj = []
    const newObjTarrifs = {}

    if((storeAuth.userLog.user.tariffs) && (storeAuth.userLog.user.tariffs).length != 0){
      for (let servicio of storeAuth.userLog.user.tariffs) {
        if (servicio.service.id == 1) {
          newObjTarrifs["nurseryDay"] = true
          newObjTarrifs["priceNurseryDay"] = servicio.price
        }
        if (servicio.service.id == 2) {
          newObjTarrifs["walk"] = true
          newObjTarrifs["priceWalk"] = servicio.price
        }
        if (servicio.service.id == 3) {
          newObjTarrifs["nurseryNight"] = true
          newObjTarrifs["priceNurseryNight"] = servicio.price
        }
        console.log(newObjTarrifs)

        for (let tarifa in newObjTarrifs) {console.log(tarifa)}
        
      }
    }

    resetInput(newObj)
  }, [storeAuth.userLog.user])

  const handleRegister = (e) => {
    e.preventDefault();

    POSTRegister(userInput)
      .then(() => {resetInput});
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const newarrayTarrif = []
    const newObjTarrifs = { services: newarrayTarrif}

    if ( userInput.nurseryDay) {
      newarrayTarrif.push({serviceActive: true, serviceId: 1, price: userInput.priceNurseryDay})
    }
    else newarrayTarrif.push({serviceActive: false, serviceId: 1, price: 0})

    if ( userInput.walk ) {
      newarrayTarrif.push({serviceActive: true, serviceId: 2, price: userInput.priceWalk})
    }
    else newarrayTarrif.push({serviceActive: false, serviceId: 2, price: 0})

    if ( userInput.nurseryNight ) {
      newarrayTarrif.push({serviceActive: true, serviceId: 3, price: userInput.priceNurseryNight})
    }
    else newarrayTarrif.push({serviceActive: false, serviceId: 3, price: 0})
    
    POST_Tariff(newObjTarrifs);
    UPDATE_User(userInput, storeAuth.userLog.user.id);

  }

  const store = {
    userInput,
  };

  const actions = {
    resetInput,
    handleUserInput,
    handleUserCheck,
    handleUserSelectDate,

    handleRegister,
    handleUpdate,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
