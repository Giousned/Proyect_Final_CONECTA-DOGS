import React from "react";

import { login, register } from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState("");
    const [token, setToken] = useState("");
  
  
  
    const handleSubmitRegister = (e, email, password) => {
      e.preventDefault();
  
      dataReturned = register(email, password);
  
      // setToken(dataReturned.token)
  
      // getMyTasks(email, password);
    };
  
    const handleSubmitLogIn = (e, email, password) => {
      e.preventDefault();
  
      dataReturned = login(email, password);
  
      setToken(dataReturned.token)
    };
  
    const store = {
      email,
      password,
      usuario,
      token,
    };
  
    const actions = {
      setEmail,
      setPassword,
      setUsuario,
      handleSubmitRegister,
      handleSubmitLogIn,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;
