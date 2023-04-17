import React from "react";

import { login, register } from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [emailInicio, setEmailInicio] = useState("");
    const [passwordInicio, setPasswordInicio] = useState("");
    const [emailRegistro, setEmailRegistro] = useState("");
    const [passwordRegistro, setPasswordRegistro] = useState("");
    const [usuario, setUsuario] = useState("");
    const [token, setToken] = useState("");
  
  
  
    const handleSubmitRegister = (e) => {
      e.preventDefault();
  
      register(emailRegistro, passwordRegistro)
        .then(() => {
            setEmailRegistro("");
            setPasswordRegistro("");
        })

    };
  
    const handleSubmitLogIn = (e) => {
      e.preventDefault();
  
      login(emailInicio, passwordInicio)
        .then((data) => {
            setToken(data.token)
            setEmailInicio("");
            setPasswordInicio("");
        })

        // getMyTasks(email, password);
    };
  
    const store = {
        emailInicio,
        passwordInicio,
        emailRegistro,
        passwordRegistro,
        usuario,
        token,
    };
  
    const actions = {
        setEmailInicio,
        setPasswordInicio,
        setEmailRegistro,
        setPasswordRegistro,
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