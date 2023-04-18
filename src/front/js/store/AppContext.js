import React from "react";

import { POSTLogin, POSTRegister, GETToken } from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [emailInicio, setEmailInicio] = useState("");
    const [passwordInicio, setPasswordInicio] = useState("");
    const [emailRegistro, setEmailRegistro] = useState("");
    const [passwordRegistro, setPasswordRegistro] = useState("");
    const [userLog, setUserLog] = useState(false);
    const [token, setToken] = useState("");
  
  
  
    const handleSubmitRegister = (e) => {
      e.preventDefault();
  
      POSTRegister(emailRegistro, passwordRegistro)
        .then(() => {
            setEmailRegistro("");
            setPasswordRegistro("");
        })

    };
  
    const handleSubmitLogIn = (e) => {
      e.preventDefault();
  
      POSTLogin(emailInicio, passwordInicio)
        .then((data) => {
            setToken(data.token)
            setEmailInicio("");
            setPasswordInicio("");
            setUserLog(true);
        })

        // getMyTasks(email, password);
    };
  
    const store = {
        emailInicio,
        passwordInicio,
        emailRegistro,
        passwordRegistro,
        userLog,
        token,
    };
  
    const actions = {
        setEmailInicio,
        setPasswordInicio,
        setEmailRegistro,
        setPasswordRegistro,
        setUserLog,
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