import React from "react";

import { Link } from "react-router-dom";

import useAuthContext from "../../store/AuthContext.js";

import "../Header/HeaderStyles.css";

const Header = () => {
  const { storeAuth, actionsAuth } = useAuthContext();

  return (
    <div>
      {storeAuth.userLog.token ? (
        <header className="d-flex align-items-center custom-header" id="home">
          <div className="container text-white-custom text-shadow text-center">
            <h1 className="mt-2 mb-5 text-header-sign1">Conecta-Dogs</h1>
            <h2 className="mt-5 mb-5 text-header-sign2">
              Bienvenido de nuevo, {storeAuth.userLog.user.name}
            </h2>
            <h4 className="mt-5 mb-2 text-header-sign4">
              Conectamos Cuidadores con Propietarios de Perros
            </h4>
          </div>
        </header>
      ) : (
        <header className="d-flex align-items-center custom-header" id="home">
          <div className="container text-white-custom text-shadow text-center">
            <h1 className="mt-2 mb-5 text-header-sign1">Conecta-Dogs</h1>
            <h2 className="mt-5 mb-4 text-header-sign3">Conectamos Cuidadores con Propietarios de Perros</h2>
            <br />
            <Link to="/log-in-form" className="button-home">
              <span className="text">Iniciar Sesión</span>
            </Link>
            <Link to="/sign-up-form" className="button-home">
              <span className="text">Registrarse</span>
            </Link>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
