import React from "react";
import { Link } from "react-router-dom";

import "../LogInForm/login-form.css";
import "../LogInForm/login_form.js";

const LogInForm = () => {
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

                                <div class="form-floating m-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                                    <label for="floatingInput">Correo Electrónico</label>
                                </div>
                                <div class="form-floating m-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required />
                                    <label for="floatingPassword">Contraseña</label>
                                </div>

                                <div>
                                    <div className="text-center">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Recordarme
                                        </label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#">¿Olvidaste tu contraseña?</a>
                                    </div>
                                    <div class="d-flex justify-content-center p-3 register">
                                        <Link to="/SingUpForm"><p className="text-dark">¿No te has registrado? ¡Regístrate ahora!</p></Link>
                                    </div>
                                </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default LogInForm;

