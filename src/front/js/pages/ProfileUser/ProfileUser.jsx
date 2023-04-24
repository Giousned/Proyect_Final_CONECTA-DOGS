import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profileUserStyles.css";

export const ProfileUser = () => {
  const [profile, setProfile] = useState(0);

  return (
    <>
      {" "}
      {profile < 2 ? (
        <button className="button" onClick={(e) => setProfile(profile + 1)}>
          boh
        </button>
      ) : (
        <section className="Profile">
          <div class="card-container col-12 col-md-7">
            <img
              class="round"
              src="https://www.goodtherapy.org/thumbs/175x175/blog/blog/wp-content/uploads/2014/08/woman-walking-dog.jpg"
              alt="user"
            />
            <div className="col-12 col-md-6">
              <div className="row">
                <h3>NOMBRE</h3>
                <h3>APELLIDOS</h3>
              </div>
              <div className="location_name col-12 col-md-7">
                <span className="location">
                  <i className="icono fas fa-map-marker-alt"></i>
                  LOCALIDAD
                </span>
              </div>
              <div className="details col-12 col-md-7">
                <p>DIRECCION</p>
                <i className="icono fa-solid fa-phone"></i>
                <p>TELEFONO</p>
              </div>
              <div className="row star">
                <p>
                  <i className="fas fa-star stars-reviews"></i>
                  <i className="fas fa-star stars-reviews"></i>
                  <i className="fas fa-star stars-reviews"></i>
                  <i className="fas fa-star stars-reviews"></i>
                  <i className="fas fa-star stars-reviews"></i>
                </p>
              </div>
            </div>
            <div class="skills">
              <h6>Mas sobre mi:</h6>
              <p className="text">
                Me encantan los perros....blalbfargaetcxqhG3 UWRCU3XWHhxe
                jhewchr ih eircer xcwerixijiej x xie e.
              </p>
              <h6>Los perros del cuidador:</h6>
              <p>Tengo un caniche pequeño blablablablablablaaaa</p>
              <ul>
                <li>Servicios y tarifas</li>
                <li>Disponibilidad</li>
                <li>Valoraciones</li>
                <li>Experiencia</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};