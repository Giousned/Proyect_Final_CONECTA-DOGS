import React from "react";

import useAppContext from "../store/AppContext.js";

const UsuarioRegistrado = () => {

  const {store, actions} = useAppContext();

  return (
    <div>
      <h2>Bienvenido "PONER ID", está usted registrado y puede acceder a las rutas protegidas</h2>
      <h3>Esto es una ruta privada</h3>
      <h4>Este es su email {store.email}</h4>
    </div>
  );
};

export default UsuarioRegistrado;