import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";

const SingUpForm2 = () => {
  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">
            {/* <h2 className="text-center p-4">INGRESAR</h2> */}

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/22/17/29/shitzu-7539692_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Información de mi perro</h2>
                <p className="pb-2">
                  Cuéntanos un poquito acerca de tu perro, así podremos ayudarte
                  a encontrar el cuidador perfecto.
                </p>

                <div className="d-grid gap-2">
                  <label htmlFor="foto-perro" className="form-label">
                    Foto del perro
                  </label>
                  <input className="form-control" type="file" id="foto-perro" />

                  <div className="py-2">
                    <label htmlFor="nombre-perro" className="form-label">
                      Nombre *
                    </label>
                    <input
                      type="nombre_perro"
                      className="form-control"
                      id="nombre-perro"
                      aria-describedby="nombre_perro"
                      required
                    />
                    <div id="nombre_perro" className="form-text">
                      Nombre del perro
                    </div>
                  </div>

                  <div className="py-2">
                    <label htmlFor="raza-perro" className="form-label">
                      Raza *
                    </label>
                    <input
                      type="raza_perro"
                      className="form-control"
                      id="raza-perro"
                      aria-describedby="raza_perro"
                      required
                    />
                    <div id="raza_perro" className="form-text">
                      Raza del perro
                    </div>
                  </div>

                  <div className="py-2">
                    <label htmlFor="cumple-perro" className="form-label">
                      Fecha de nacimiento *
                    </label>
                    <br />
                    <input
                      type="month"
                      id="cumple-perro"
                      name="start"
                      min="2020-01"
                      required
                    />
                    <div id="cumple-perro" className="form-text">
                      Ejemplo: abril de 2023
                    </div>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sexo-dog" className="form-label">
                      Sexo *
                    </label>
                    <select className="form-select" aria-label="Sexo del perro">
                      <option defaultValue>Elige una opción</option>
                      <option value="1">Hembra</option>
                      <option value="2">Macho</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="tamaño" className="form-label">
                      Tamaño del perro *
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="pequeño"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="mediano"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="grande"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        value="gigante"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4"
                      >
                        <i className="fas fa-paw"></i> Gigante (+46kg)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/sign-up-form">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Atrás
                    </button>
                  </Link>
                  <Link to="/sign-up-form3">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Siguiente
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingUpForm2;
