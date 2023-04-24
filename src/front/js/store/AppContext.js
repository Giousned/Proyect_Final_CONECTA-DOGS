import React from "react";

import { POSTLogin, POSTRegister, GETToken } from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

import useUserLog from "../hooks/useUserLog.js";
import useUserInput from "../hooks/useUserInput.js";


const AppContext = createContext();


export const AppProvider = ({children}) => {

    const { userLog, resetLog, handleStatusLog, handleUserLogInput } = useUserLog();
    const { userInput, resetInput, handleUserInput, handleUserRadio, handleUserCheck, handleUserSelectDate } = useUserInput();


    const [token, setToken] = useState("");
    const [userType, setUserType] = useState("");
        
  
    const handleSubmitRegister = (e) => {
      e.preventDefault();
  
      POSTRegister(userInput)
        .then(() => {
            resetInput;
        })

    };
  
    const handleSubmitLogIn = (e) => {
      e.preventDefault();
  
      POSTLogin(userLog.emailLogIn, userLog.passwordLogIn)
        .then((data) => {
            setToken(data.token)
            setEmailInicio("");
            setPasswordInicio("");
            handleStatusLog();
        })

        // getMyTasks(email, password);
    };

    const handleLogOut = () => {

        sessionStorage.removeItem("jwt-token");
        setToken("");
        handleStatusLog();
      };
    


    const store = {
        token,
        userType,

    };
  
    const actions = {    
        setToken,
        setUserType,


        handleSubmitRegister,
        handleSubmitLogIn,
        handleLogOut,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;


// handleCheckRecordarme: () => actions.setRecordarme(!recordarme),

// handleCheckPropietario: () => actions.setPropietario(!propietario),
// handleCheckCuidador: () => actions.setCuidador(!cuidador),

// handleCheckTamanoPequeno: () => actions.setTamanoPequeno(!tamanoPequeno),
// handleCheckTamanoMediano: () => actions.setTamanoMediano(!tamanoMediano),
// handleCheckTamanoGrande: () => actions.setTamanoGrande(!tamanoGrande),
// handleCheckTamanoGigante: () => actions.setTamanoGigante(!tamanoGigante),

// handleCheckHorarioComidaManana: () => actions.setHorarioComidaManana(!horarioComidaManana),
// handleCheckHorarioComidaTarde: () => actions.setHorarioComidaTarde(!horarioComidaTarde),
// handleCheckHorarioComidaNoche: () => actions.setHorarioComidaNoche(!horarioComidaNoche),
// handleCheckHorarioPaseosManana: () => actions.setHorarioPaseosManana(!horarioPaseosManana),
// handleCheckHorarioPaseosTarde: () => actions.setHorarioPaseosTarde(!horarioPaseosTarde),
// handleCheckHorarioPaseosNoche: () => actions.setHorarioPaseosNoche(!horarioPaseosNoche),
// handleCheckActividadBaja: () => actions.setActividadBaja(!actividadBaja),
// handleCheckActividadMedia: () => actions.setActividadMedia(!actividadMedia),
// handleCheckActividadAlta: () => actions.setActividadAlta(!actividadAlta),

// // handleChange: (event) => setValue(event.target.value),