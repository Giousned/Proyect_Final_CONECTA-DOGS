import React from "react";
import { createContext, useContext, useState} from "react";

import { POSTRegister } from "../services/USERFetchs.js";
import useAuthContext from "./AuthContext.js";
import useUserInput from "../hooks/useUserInput.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { storeAuth, actionsAuth } = useAuthContext();

  const {
    userInput,
    resetInput,
    handleUserInput,
    handleUserCheck,
    handleUserSelectDate,
  } = useUserInput(storeAuth.userLog.user);


  const handleRegister = (e) => {
    e.preventDefault();

    POSTRegister(userInput)
      // .then(() => {});
  };

  const store = {
    userInput,
  };

  const actions = {
    resetInput,
    handleUserInput,
    handleUserCheck,
    handleUserSelectDate,

    handleRegister,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
