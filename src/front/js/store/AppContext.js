import React from "react";
import { createContext, useContext, useState, useEffect} from "react";

import { POSTRegister, UPDATE_User, GET_User } from "../services/USERFetchs.js";
import { POST_Tariff } from "../services/TARIFFFetchs.js";
import { POST_Dog, UPDATE_Dog, DELETE_Dog } from "../services/DOGFetchs.js";

import useAuthContext from "./AuthContext.js";
import useUserInput from "../hooks/useUserInput.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { storeAuth, actionsAuth } = useAuthContext();

  const { userInput, resetInput, handleUserInput, handleUserCheck, handleUserSelectDate } = useUserInput();

  const handleObteinInputsTariffs = (tarifasUsuario) => {

    const newObjTariffs = {}

    for (let servicio of tarifasUsuario) {
      if (servicio.service.id == 1) {
        newObjTariffs.nurseryDay = true
        newObjTariffs.priceNurseryDay = servicio.price
      }
      if (servicio.service.id == 2) {
        newObjTariffs.walk = true
        newObjTariffs.priceWalk = servicio.price
      }
      if (servicio.service.id == 3) {
        newObjTariffs.nurseryNight = true
        newObjTariffs.priceNurseryNight = servicio.price
      }
      continue
    }
    return newObjTariffs;
  }

  useEffect(() => {

    if(!(storeAuth.userLog.user)) return
    let newObjTariffs = {}
    let newObj = {...storeAuth.userLog.user}

    resetInput(newObj)
    
    if((storeAuth.userLog.user.tariffs).length == 0) return
    
    newObjTariffs = handleObteinInputsTariffs(storeAuth.userLog.user.tariffs)

    for (let servicio in newObjTariffs) {
      newObj[servicio] = newObjTariffs[servicio]
    }

    resetInput(newObj)

  }, [storeAuth.userLog.user])

  const handleRegister = (e) => {
    e.preventDefault();

    POSTRegister(userInput)
      .then(() => resetInput({}))
  };

  const handleRegisterDog = (e, dogInput) => {
    e.preventDefault();

    POST_Dog(dogInput)
      .then(() => {
        actionsAuth.handleUpdateUser();
      });
  };

  const handleUpdateDog = (e, dogInput, dogId) => {
    e.preventDefault();

    UPDATE_Dog(dogInput, dogId)
      .then(() => {
        actionsAuth.handleUpdateUser();
      });
  };

  const handleDeleteDog = (e, dogId) => {
    e.preventDefault();

    DELETE_Dog(dogId)
      .then(() => {
        actionsAuth.handleUpdateUser();
      });
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
    handleRegisterDog,
    handleUpdateDog,
    handleDeleteDog,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
