import React from "react";
import { createContext, useContext, useState, useEffect} from "react";

import { POSTRegister, UPDATE_User } from "../services/USERFetchs.js";
import { POST_Tariff } from "../services/TARIFFFetchs.js";
import { POST_Dog, UPDATE_Dog, DELETE_Dog } from "../services/DOGFetchs.js";

import useAuthContext from "./AuthContext.js";
import useToastsContext from "./ToastsContext.js";
import useUserInput from "../hooks/useUserInput.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [ userPhoto, setUserPhoto ] = useState("");
  const [ dogPhoto, setDogPhoto ] = useState("");

  const { storeAuth, actionsAuth } = useAuthContext();
  const { storeToast, actionsToast } = useToastsContext();

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
      .then((data) => {
        resetInput({});
        actionsToast.handleShownToast(data);
      })
  };

  const handleRegisterDog = (e, dogInput) => {
    e.preventDefault();

    dogInput["dogPhoto"] = dogPhoto;

    POST_Dog(dogInput)
      .then((data) => {
        actionsToast.handleShownToast(data);
        actionsAuth.handleUpdateUser();
        setDogPhoto("");
      });
  };

  const handleUpdateDog = (e, dogInput, dogId) => {
    e.preventDefault();

    dogInput["dogPhoto"] = dogPhoto;

    UPDATE_Dog(dogInput, dogId)
      .then((data) => {
        actionsToast.handleShownToast(data);
        actionsAuth.handleUpdateUser();
        setDogPhoto("");
      });
  };

  const handleDeleteDog = (e, dogId) => {
    e.preventDefault();

    DELETE_Dog(dogId)
      .then((data) => {
        actionsToast.handleShownToast(data);
        actionsAuth.handleUpdateUser();
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const newArrayTarrif = []
    const newObjTarrifs = { services: newArrayTarrif}

    if ( userInput.nurseryDay ) {
      newArrayTarrif.push({serviceActive: true, serviceId: 1, price: userInput.priceNurseryDay})
    }
    else newArrayTarrif.push({serviceActive: false, serviceId: 1, price: 0})

    if ( userInput.walk ) {
      newArrayTarrif.push({serviceActive: true, serviceId: 2, price: userInput.priceWalk})
    }
    else newArrayTarrif.push({serviceActive: false, serviceId: 2, price: 0})

    if ( userInput.nurseryNight ) {
      newArrayTarrif.push({serviceActive: true, serviceId: 3, price: userInput.priceNurseryNight})
    }
    else newArrayTarrif.push({serviceActive: false, serviceId: 3, price: 0})
    
    POST_Tariff(newObjTarrifs)
      .then((data) => {
        actionsToast.handleShownToast(data);
      });


    userInput["userPhoto"] = userPhoto;

    UPDATE_User(userInput, storeAuth.userLog.user.id)
      .then((data) => {
        actionsToast.handleShownToast(data);
      });

  }

  const store = {
    userInput,
  };

  const actions = {
    setUserPhoto,
    setDogPhoto,

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
