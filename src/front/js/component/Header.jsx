import React from "react";

export const Header = () => {
  return (
    <header className="d-flex align-items-center custom-header" id="home">
      <div className="container text-white-custom text-shadow text-center">
        <h1 className="mb-4">
          Conecta-Dogs
          <br />
          {/* <small className="text-primary-custom">Conectamos Cuidadores con Propietarios de Perros</small> */}
        </h1>

        <input type="radio" name="option" id="cuidadores" />
        <label>Buscar Cuidadores</label>

        <input type="radio" name="option" id="login" />
        <label>Iniciar Sesión | Registrarse</label>
      </div>
    </header>
  );
};
