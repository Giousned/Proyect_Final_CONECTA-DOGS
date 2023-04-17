import React from "react";
import "../Header/header.css";

export const Header = () => {
  return (
    <header className="d-flex align-items-center custom-header" id="home">
      <div className="container text-white-custom text-shadow text-center">
        <h1 className="mb-4">Conecta-Dogs</h1>
        <h3>Conectamos Cuidadores con Propietarios de Perros</h3>
        <br />
        {/* <button className="btn-home">Buscar Cuidadores</button>
        <button className="btn-home">Iniciar Sesión</button> */}
        <button class="button-home">
          <span class="text">Iniciar Sesión</span>
        </button>
        <button class="button-home">
          <span class="text">Registrarse</span>
        </button>
      </div>
    </header>
  );
};
