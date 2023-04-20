import React from "react";

import { Link } from "react-router-dom";

import useAppContext from "../store/AppContext.js";


const SingUpForm = () => {

    const {store, actions} = useAppContext();

    
  return (
    <>
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">HACER VISTAS DE LOS FORMULARIOS</h2>
          </div>
        </div>
    </>
  );
};
export default SingUpForm;


