import React from "react";
import { Link } from "react-router-dom";

export const LoginSubmit = () => {

    return (
        <div className="container">
            <h2>Vista LogIn</h2>
            <br />

            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3"><span>Iniciar Sesión </span><span>Registrarse</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Iniciar Sesión</h4>
                                                    <div class="form-group">
                                                        <input type="email" name="logemail" class="form-style"
                                                            placeholder="Correo Electrónico" id="logemail" autocomplete="off" />
                                                            <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" class="form-style"
                                                            placeholder="Contraseña" id="logpass" autocomplete="off" />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-4">Enviar</a>
                                                    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">¿Olvidaste tu contraseña?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Registrase</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="logname" class="form-style"
                                                            placeholder="Nombre Completo" id="logname" autocomplete="off" />
                                                            <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="logemail" class="form-style"
                                                            placeholder="Correo Electrónico" id="logemail" autocomplete="off" />
                                                            <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" class="form-style"
                                                            placeholder="Contraseña" id="logpass" autocomplete="off" />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-4">Enviar</a>
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



            <Link to="/LoginSubmit">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
