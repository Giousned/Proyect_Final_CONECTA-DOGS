// handle 
// setEstado {}

// * si da guerra
// handle
// setEstado a false

// if autoclose

import React from "react";
import { createContext, useContext, useState } from "react";

const ToastsContext = createContext();

export const ToastsProvider = ({ children }) => {
  
  const [toastInfo, setToastInfo] = useState({ active: "hide", msg: "", color: "info-subtle" });
  

  const handle = () => {

  }

  const handle2 = (e) => {
    e.preventDefault();

  };


  const storeToast = {
    toastInfo,
  };

  const actionsToast = {
    setToastInfo,

    handle,
    handle2,
  };

  return (
    <ToastsContext.Provider value={{ storeToast, actionsToast }}>
      {children}
    </ToastsContext.Provider>
  );
};

const useToastsContext = () => useContext(ToastsContext);

export default useToastsContext;
