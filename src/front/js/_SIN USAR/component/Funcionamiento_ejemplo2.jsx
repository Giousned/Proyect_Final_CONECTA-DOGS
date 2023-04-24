import React from "react";

const Funcionamiento = () => {
  return (
    <div className="container d-flex flex-column">
      <h1>¿Cómo funciona Contact-Dogs?</h1>

      <div className="d-flex mt-2">
        <i className="fa-solid fa-1 fa-2xl"></i>
        <div className="d-flex flex-column">
          <h4>Busca</h4>
          <span>
            Busca y contacta con cuidadores de confianza y con experiencia cerca
            de ti
          </span>
        </div>

        <i className="fa-solid fa-2 fa-2xl"></i>
        <div className="d-flex flex-column">
          <h4>Reserva</h4>
          <span>
            Encuentra al cuidador adecuado para tu perro y paga online para
            contar con la cobertura veterinaria
          </span>
        </div>

        <i className="fa-solid fa-3 fa-2xl"></i>
        <div className="d-flex flex-column">
          <h4>Relájate</h4>
          <span>
            Tu perro se divertirá y estará en familia y tú recibirás fotografías
            regularmente
          </span>
        </div>
      </div>
    </div>
  );
};

export default Funcionamiento;
