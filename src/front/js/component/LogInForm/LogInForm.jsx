import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAppContext from "../../store/AppContext.js";

import "../LogInForm/login-form.css";

const LogInForm = () => {

  const { store, actions } = useAppContext();

  const navigate = useNavigate();

  const handleCheckRecordarme = () => actions.setRecordarme(!store.recordarme);

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
              <form>
                <h2 className="pb-4">Iniciar Sesión</h2>

                <div className="form-floating m-3">
                  <input type="email" className="form-control" id="emailLogIn" placeholder="name@example.com"
                    value={store.emailInicio}
                    onChange={(e) => actions.setEmailInicio(e.target.value)}
                    required />
                  <label htmlFor="emailLogIn">Correo Electrónico</label>
                </div>
                <div className="form-floating m-3">
                  <input type="password" className="form-control" id="passLogIn" placeholder="Password"
                    value={store.passwordInicio}
                    onChange={(e) => actions.setPasswordInicio(e.target.value)}
                    required />
                  <label htmlFor="passLogIn">Contraseña</label>
                </div>

                <div>
                  <div className="text-center">
                    <label>
                      <input type="checkbox" value={store.recordarme} onChange={handleCheckRecordarme} checked={store.recordarme} /> Recordarme
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
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
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={(e) => { actions.handleSubmitLogIn(e); navigate("/") }}>
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