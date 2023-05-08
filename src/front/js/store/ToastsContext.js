import React from "react";
import { createContext, useContext, useState } from "react";

const ToastsContext = createContext();

export const ToastsProvider = ({ children }) => {
  
  const [toastInfo, setToastInfo] = useState({ active: "hide", msg: "", color: "" });      // , autoclose: false  // if autoclose, si quiero que a veces se cierre solo y otras

  const handleTimeOutHide = () => {
    setTimeout(() => setToastInfo({ active: "hide", msg: "", color: "" }), 2500);
  }
  

  const handleShownToast = (data) => {

    if (data.code != 200) {
        setToastInfo({ active: "show", msg: data.msg, color: "danger-subtle" });
        handleTimeOutHide();
    }
    else {
        setToastInfo({ active: "show", msg: data.msg, color: "info-subtle" });
        handleTimeOutHide();
    }
  }


  const storeToast = {
    toastInfo,
  };

  const actionsToast = {
    setToastInfo,

    handleShownToast,
  };

  return (
    <ToastsContext.Provider value={{ storeToast, actionsToast }}>
      {children}
    </ToastsContext.Provider>
  );
};

const useToastsContext = () => useContext(ToastsContext);

export default useToastsContext;
