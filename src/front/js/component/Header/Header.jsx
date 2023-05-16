import React from "react";

import useAuthContext from "../../store/AuthContext.js";

import "../Header/HeaderStyles.css";

const Header = () => {

  const { storeAuth, actionsAuth } = useAuthContext();


  return (
    <div>
      {storeAuth.userLog.token
        ? <header className="d-flex align-items-center custom-header" id="home">
          <div className="container text-white-custom text-shadow text-center">
            <h1 className="mb-4">Conecta-Dogs</h1>
            <h3>Conectamos Cuidadores con Propietarios de Perros</h3>
            <div className="p-2 text-light">
            </div>
          </div>
        </header>
        : <header className="d-flex align-items-center custom-header" id="home">
          <div className="container text-white-custom text-shadow text-center">
            <h1 className="mb-4">Conecta-Dogs</h1>
            <h3>Conectamos Cuidadores con Propietarios de Perros</h3>
            <br />
          </div>
        </header>
      }
    </div>
  );
};

export default Header;
