import React from "react";
import { Link } from "react-router-dom";

export const LoginSubmit = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Iniciar Sesión |</span>
                  <span>| Registrarse</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">
                            Iniciar Sesión
                          </h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Correo Electrónico"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Contraseña"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" className="btn mt-4">
                            Enviar
                          </a>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              ¿Olvidaste tu contraseña?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Registrase</h4>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="propietario"
                              name="age"
                              value="propietario"
                            />
                            <label for="propietario">Propietario</label>
                            <input
                              type="radio"
                              id="cuidador"
                              name="age"
                              value="cuidador"
                            />
                            <label for="cuidador">Cuidador</label>
                            <br />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Nombre Completo"
                              id="logname"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Correo Electrónico"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Contraseña"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" className="btn mt-4">
                            Enviar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <button className="btn btn-primary">Volver a Inicio</button>
      </Link>
    </div>
  );
};
