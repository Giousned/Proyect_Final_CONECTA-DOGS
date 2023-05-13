import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { POST_Login, GET_Token } from "../services/LOGINFetchs.js";
import { UPDATE_Me_User } from "../services/USERFetchs.js";

import useToastsContext from "./ToastsContext.js";
import useUserInput from "../hooks/useUserInput.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const { userInput, handleUserInput, handleUserCheck } = useUserInput();
  const { storeToast, actionsToast } = useToastsContext();

  const [userLog, setUserLog] = useState({ token: "", user: "" });

  const navigate = useNavigate();


  const handleUpdateUser = () => {

    UPDATE_Me_User()
      .then((data) => {
        setUserLog({token: data.token, user: data.user});
        sessionStorage.setItem("jwt-token", data.token);
        actionsToast.handleShownToast(data);     
      });
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    POST_Login(userInput.logEmail, userInput.logPassword)
      .then((data) => {                                               // save your token in the sessionStorage
        setUserLog({token: data.token, user: data.user});             // also you should set your user into the store using the setStore function 
        sessionStorage.setItem("jwt-token", data.token);              // cookies. .... CASI MEJOR, PERO CASI NUNCA USAR LOCALSTORAGE QUIZAS EN TIENDAS...
        actionsToast.handleShownToast(data);
      });
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("jwt-token");
    setUserLog({ token: "", user: "" });
  };

  // SI EXISTE UN TOKEN ACTIVO, HAGO UNA LLAMADA AL BACK Y BUSCO ESE USUARIO Y DEVUELVO SU TOKEN Y SU INFORMACION NUEVA
  // Y SETEO EL ESTADO DE INICIO DE USUARIOLOG
  useEffect(() => {

    if (!sessionStorage.getItem("jwt-token")) {

      navigate("/");
      actionsToast.handleShownToast({ code: 401, msg: "¡El token ha expirado, se le ha redirigido a la página de inicio!" });
      
      return;
    }
    


    GET_Token()
      .then((data) => {
        setUserLog({token: data.token, user: data.user});
        console.log(data.token)
        actionsToast.handleShownToast(data);
      });

  },[]);



  const storeAuth = {
    userLog,
    userInput,
  };

  const actionsAuth = {

    handleLogIn,
    handleLogOut,
    handleUserInput,
    handleUserCheck,
    handleUpdateUser,
  };

  return (
    <AuthContext.Provider value={{ storeAuth, actionsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
