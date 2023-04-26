import React from "react";

import { POSTRegister} from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

import useUserInput from "../hooks/useUserInput.js";


const AppContext = createContext();


export const AppProvider = ({children}) => {

    const { userInput, resetInput, handleUserInput, handleUserCheck, handleUserSelectDate } = useUserInput();


    const handleRegister = (e) => {
      e.preventDefault();
  
      POSTRegister(userInput)
        .then(() => {

        })

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
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;