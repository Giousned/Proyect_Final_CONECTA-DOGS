import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAppContext from "../../store/AppContext.js";
import useUserLog from "../../hooks/useUserLog.js";

import "../LogInForm/login-form.css";

const LogInForm = () => {

  const { store, actions } = useAppContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    actions.handleSubmitLogIn(e);
    navigate("/");
  }
  

  return (
    <>
      <section className="py-2 custom-login">
        <div id="login"></div>
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">INGRESAR</h2>

            <div className="col-12 col-md-6 py-3 login">
              <img src="https://cdn.pixabay.com/photo/2020/05/07/15/07/dog-5141881_1280.jpg" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="pb-4">Iniciar Sesión</h2>

                <div className="form-floating m-3">
                  <input type="email" className="form-control" id="emailLogIn" placeholder="name@example.com"
                    name="logEmail"
                    value={store.userLog.logEmail}
                    onChange={actions.handleUserLogInput}
                    required />
                  <label htmlFor="emailLogIn">Correo Electrónico</label>
                </div>
                <div className="form-floating m-3">
                  <input type="password" className="form-control" id="passLogIn" placeholder="Password"
                    name="logPassword"
                    value={store.userLog.logPassword}
                    onChange={actions.handleUserLogInput}
                    required />
                  <label htmlFor="passLogIn">Contraseña</label>
                </div>

                <div>
                  <div className="text-center">
                    <label>
                      <input type="checkbox"
                      className="mb-2"
                      name="remember" 
                      value={store.userLog.remember} 
                      onChange={actions.handleLogCheck} 
                      checked={store.userLog.remember} /> Recordarme
                    </label>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="d-flex justify-content-center p-3 register">
                    <Link to="/sign-up-form">
                      <p className="text-dark">
                        ¿No te has registrado? ¡REGÍSTRATE YA!
                      </p>
                    </Link>
                  </div>
                  <div id="helpLogIn" className="form-text fs-8 fst-italic d-flex justify-content-center mb-3">
                    Nunca compartiremos su información con nadie.
                  </div>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LogInForm;

// <Checkbox label="Incluir Mayúscula" handleClick={actions.handleCheckMajus} valor={store.includeMajus} />