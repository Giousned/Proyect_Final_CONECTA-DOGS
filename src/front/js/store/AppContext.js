import React from "react";

import { POSTLogin, POSTRegister, GETToken } from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [userLog, setUserLog] = useState(false);
    const [token, setToken] = useState("");

    // FORMULARIO INICIO
    const [emailInicio, setEmailInicio] = useState("");
    const [passwordInicio, setPasswordInicio] = useState("");
    const [recordarme, setRecordarme] = useState(false);

    // FORMULARIO REGISTRO
    const [propietario, setPropietario] = useState(false);
    const [cuidador, setCuidador] = useState(false);
    const [nombrePerro, setNombrePerro] = useState("");
    const [razaPerro, setRazaPerro] = useState("");
    const [nacimientoPerro, setNacimientoPerro] = useState("");
    const [sexoHembra, setSexoHembra] = useState(false);
    const [sexoMacho, setSexoMacho] = useState(false);
    const [tamañoPequeño, setTamañoPequeño] = useState(false);
    const [tamañoMediano, setTamañoMediano] = useState(false);
    const [tamañoGrande, setTamañoGrande] = useState(false);
    const [tamañoGigante, setTamañoGigante] = useState(false);




    const [fotoPropietario, setFotoPropietario] = useState("");
    const [nombrePropietario, setNombrePropietario] = useState("");
    const [apellidosPropietario, setApellidosPropietario] = useState("");


    const [emailRegistroPropietario, setEmailRegistroPropietario] = useState("");
    const [passwordRegistroPropietario, setPasswordRegistroPropietario] = useState("");

    
  
  
    const handleSubmitRegisterPropietario = (e) => {
      e.preventDefault();
  
      POSTRegister(emailRegistro, passwordRegistro)
        .then(() => {
            setEmailRegistro("");
            setPasswordRegistro("");
        })

    };

    const handleSubmitRegisterCuidador = (e) => {
        e.preventDefault();
    
        // POSTRegister(emailRegistro, passwordRegistro)
        //   .then(() => {
        //       setEmailRegistro("");
        //       setPasswordRegistro("");
        //   })
  
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
        recordarme,
        propietario,
        cuidador,
        nombrePerro,
        razaPerro,
        nacimientoPerro,
        sexoHembra,
        sexoMacho,
        tamañoPequeño,
        tamañoMediano,
        tamañoGrande,
        tamañoGigante,
        
        fotoPropietario,
        nombrePropietario,
        apellidosPropietario,
        emailRegistroPropietario,
        passwordRegistroPropietario,


        userLog,
        token,
    };
  
    const actions = {
        handleCheckRecordarme: () => actions.setRecordarme(!recordarme),
        handleCheckPropietario: () => actions.setPropietario(!propietario),
        handleCheckCuidador: () => actions.setCuidador(!cuidador),
        handleCheckTamañoPequeño: () => actions.setTamañoPequeño(!tamañoPequeño),
        handleCheckTamañoMediano: () => actions.setTamañoMediano(!tamañoMediano),
        handleCheckTamañoGrande: () => actions.setTamañoGrande(!tamañoGrande),
        handleCheckTamañoGigante: () => actions.setTamañoGigante(!tamañoGigante),





        setEmailInicio,
        setPasswordInicio,
        setRecordarme,
        handleCheckRecordarme,
        setPropietario,
        setCuidador,
        setNombrePerro,
        setRazaPerro,
        setNacimientoPerro,
        setSexoHembra,
        setSexoMacho,
        setTamañoPequeño,
        setTamañoMediano,
        setTamañoGrande,
        setTamañoGigante,
        
        
        setFotoPropietario,
        setNombrePropietario,
        setApellidosPropietario,
        setEmailRegistroPropietario,
        setPasswordRegistroPropietario,


        setUserLog,
        handleSubmitRegisterPropietario,
        handleSubmitRegisterCuidador,
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