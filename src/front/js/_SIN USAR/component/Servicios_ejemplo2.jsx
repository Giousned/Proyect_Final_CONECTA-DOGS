import React from "react";

import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="container d-flex flex-column">
      <h1>Servicios que puedes reservar en Contact-Dogs</h1>

      <div className="d-flex mt-3">

        <div className="d-flex flex-column">
        <i className="fa-solid fa-suitcase fa-2xl mb-3"></i>
          <h4>Alojamiento</h4>
          <span>
          ¿Buscas a alguien para cuidar a tu perro durante la noche? Elije a uno de nuestros cuidadores para que cuide a tu mascota en su casa cuando te vayas.
          </span>
          <Link to="/alojamiento">
            <span className="servicios-brand">Busca ahora</span>
          </Link>
        </div>


        <div className="d-flex flex-column">
        <i className="fa-solid fa-paw fa-2xl mb-3"></i>
          <h4>Paseo</h4>
          <span>
            ¿No puedes pasear a tu perro tanto como te gustaría? Encuentra un paseador que pueda sacarlo tanto tiempo y tan lejos como sea necesario.
          </span>
          <Link to="/paseo">
            <span className="servicios-brand">Busca ahora</span>
          </Link>
        </div>


        <div className="d-flex flex-column">
        <i className="fa-solid fa-house-user fa-2xl mb-3"></i>
          <h4>Guardería de día</h4>
          <span>
          Deja a tu perro con un cuidador hasta un máximo de 10 horas al día. De esta manera puedes relajarte en tu trabajo, o cuando estás fuera de casa la mayor parte del día.
          </span>
          <Link to="/guarderia">
            <span className="servicios-brand">Busca ahora</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
