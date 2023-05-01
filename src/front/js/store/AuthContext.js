import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

import { POSTLogin, GETToken } from "../services/LOGINFetchs.js";
import { GET_User } from "../services/USERFetchs.js";
import useUserInput from "../hooks/useUserInput.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [userLog, setUserLog] = useState({ token: "", user: "" });
  
  const { userInput, handleUserInput, handleUserCheck } = useUserInput();


  const handleLogIn = (e) => {
    e.preventDefault();

    POSTLogin(userInput.logEmail, userInput.logPassword)
      .then((data) => {
        setUserLog({token: data.token, user: data.user});             // save your token in the sessionStorage
                                                                      // also you should set your user into the store using the setStore function
        sessionStorage.setItem("jwt-token", data.token);              // cookies. .... CASI MEJOR, PERO CASI NUNCA USAR LOCALSTORAGE QUIZAS EN TIENDAS...
      });
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("jwt-token");
    setUserLog({ token: "", user: "" });
  };

  // ME FALTA SABER LEER EL TOKEN DESDE EL FRONT PARA PODER SACAR SU INFORMACION DE AHI COMO POR EJEMPLO LA ID DEL USUARIO
  // useEffect(() => {
  //   if (sessionStorage.getItem("jwt-token")){
  //       setUserLog({token: sessionStorage.getItem("jwt-token"), user: data.user})
  //     });
  //   }
  // }, []);

  const storeAuth = {
    userLog,
    userInput,
  };

  const actionsAuth = {

    handleLogIn,
    handleLogOut,
    handleUserInput,
    handleUserCheck,
  };

  return (
    <AuthContext.Provider value={{ storeAuth, actionsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
