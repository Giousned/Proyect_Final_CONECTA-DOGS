import React from "react";

import { Link } from "react-router-dom";

import "../Header/header.css";

export const Header = () => {
  
  return (
    <header className="d-flex align-items-center custom-header" id="home">
      <div className="container text-white-custom text-shadow text-center">
        <h1 className="mb-4">Conecta-Dogs</h1>
        <h3>Conectamos Cuidadores con Propietarios de Perros</h3>
        <br />
        <Link to="/log-in-form" className="button-home">
          <span className="text">Iniciar Sesión</span>
        </Link>
        <Link to="/sign-up-form" className="button-home">
          <span className="text">Registrarse</span>
        </Link>
      </div>
    </header>
  );
};
