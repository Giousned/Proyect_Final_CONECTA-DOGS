import React from "react";

import { POSTLogin, GETToken } from "../services/Fetchs.js";

import { createContext, useContext, useState, useEffect} from "react";

import useUserInput from "../hooks/useUserInput.js";


const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const { userInput, handleUserInput, handleUserCheck } = useUserInput();

    const [userLog, setUserLog] = useState(false);
    const [token, setToken] = useState("");
        
    
    const handleLogIn = (e) => {
      e.preventDefault();
  
      POSTLogin(userInput.logEmail, userInput.logPassword)
        .then((data) => {
            setToken(data.token);
            setUserLog(true);
        })

    };

    const handleLogOut = () => {

        sessionStorage.removeItem("jwt-token");
        setToken("");
        setUserLog(false);

    };
    

    useEffect(() => {if (sessionStorage.getItem("jwt-token")) setUserLog(true)},[])


    const storeAuth = {
        token,
        userLog,
        userInput,
    };
  
    const actionsAuth = {    
        setToken,

        handleLogIn,
        handleLogOut,
        handleUserInput,
        handleUserCheck,
    };

    return (
        <AuthContext.Provider value={{storeAuth, actionsAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;