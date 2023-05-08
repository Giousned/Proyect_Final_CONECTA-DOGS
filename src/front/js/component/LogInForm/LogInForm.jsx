import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../img/conectadogs-logo.black.png";
import useAuthContext from "../../store/AuthContext.js";
import "../LogInForm/LoginStyles.css";

const LogInForm = () => {

  const { storeAuth, actionsAuth } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    actionsAuth.handleLogIn(e);
    navigate("/");
  }

  return (
    <>
      <section className="p-4 custom-login">
        <div id="login"></div>
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">INICIAR SESIÓN</h2>

            <div className="col-12 col-md-6 py-3 login">
              <img src="https://cdn.pixabay.com/photo/2020/05/07/15/07/dog-5141881_1280.jpg" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 ">
              <form onSubmit={(e) => handleSubmit(e)}>
                <img src={Logo} className="img-fluid" />

                <div className="form-floating m-3">
                  <input type="email" className="form-control" id="emailLogIn" placeholder="name@example.com"
                    name="logEmail"
                    value={storeAuth.userInput.logEmail}
                    onChange={actionsAuth.handleUserInput}
                    required />
                  <label htmlFor="emailLogIn">Correo Electrónico</label>
                </div>
                <div className="form-floating m-3">
                  <input type="password" className="form-control" id="passLogIn" placeholder="Password"
                    name="logPassword"
                    value={storeAuth.userInput.logPassword}
                    onChange={actionsAuth.handleUserInput}
                    required />
                  <label htmlFor="passLogIn">Contraseña</label>
                </div>

                <div>
                  <div className="d-flex justify-content-start">
                    <label>
                      <input type="checkbox"
                        className="mb-2"
                        name="remember"
                        value={storeAuth.userInput.remember}
                        onChange={actionsAuth.handleUserCheck}
                        checked={storeAuth.userInput.remember} /> Recordarme
                    </label>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a href="#"> ¿Olvidaste tu contraseña?</a>
                  </div>

                  <div className="d-grid m-4 d-md-flex justify-content-md-center">
                    <Link to="/sign-up-form" className="action-button shadow animate yellow text-dark"><b>¡REGÍSTRATE AQUÍ!</b></Link>
                    <button className="action-button shadow animate blue" type="submit">
                      Iniciar Sesión
                    </button>
                  </div>

                  <div id="helpLogIn" className="form-text fs-8 fst-italic d-flex justify-content-center mb-3">
                    Nunca compartiremos su información con nadie.
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogInForm;

// <Checkbox label="Incluir Mayúscula" handleClick={actionsAuth.handleCheckMajus} valor={storeAuth.includeMajus} />