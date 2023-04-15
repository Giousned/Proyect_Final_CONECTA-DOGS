import React from "react";

const Motivos = () => {

    return (
            <div className="container d-flex flex-column">
              <h1>¿Por qué Contact-Dogs?</h1>
        
              <div className="d-flex mt-2">
              <i className="fa-solid fa-users fa-2xl"></i>
                <div className="d-flex flex-column">
                  <h4>Beneficios para tu perro</h4>
                  <ul>
                    <li>Atención personalizada en un hogar familiar</li>
                    <li>No más jaulas</li>
                    <li>Muchos paseos, juegos y mimos</li>                
                  </ul>
                </div>
        
                <i className="fa-solid fa-heart-pulse fa-2xl"></i>
                 <div className="d-flex flex-column">
                 <h4>Beneficios para ti</h4>
                  <ul>
                    <li>+15.000 cuidadores evaluados por Gudog</li>
                    <li>Valoraciones y comentarios de otros propietarios de perros</li>
                    <li>Cuidado y atención para tu perro</li>
                  </ul>
                </div>
        
                <i className="fa-solid fa-stethoscope fa-2xl"></i>
                 <div className="d-flex flex-column">
                 <h4>Tranquilidad</h4>
                  <ul>
                    <li>Cobertura veterinaria con cada reserva</li>
                    <li>Mensajes y pago seguro online</li>
                    <li>Actualizaciones diarias de fotos y mensajes</li>
                  </ul>
                </div>

              </div>
            </div>
          );
}

export default Motivos;