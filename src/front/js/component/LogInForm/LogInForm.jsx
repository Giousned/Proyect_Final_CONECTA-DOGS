import React from "react";
import "../LogInForm/login-form.css";
import "../LogInForm/login_form.js";

const LogInForm = () => {
    return (
        <>
            <div className="row">
                <div className="container">
                    {/* <div className="col-12 col-md-4"></div> */}

                    <div className="col-12 col-md-6">
                        <div className="background">
                            <form className="login-form">
                                <h3>Iniciar Sesión</h3>

                                <label for="username">Usuario</label>
                                <input type="text" placeholder="Correo Electrónico" id="username" />

                                <label for="password">Contraseña</label>
                                <input type="password" placeholder="Contraseña" id="password" />

                                <button>Iniciar Sesión</button>

                                <div className="p-2">
                                    <a href="">
                                        <i className="far fa-question-circle"></i>
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>


                                <div className="social">
                                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                                    <div className="fb"><i className="fab fa-facebook-f"></i>  Facebook</div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="background">
                            <form className="login-form">
                                <h3>Registro de Usuario</h3>

                                <div className="form-group glowing-register-wrapper">
                                    <div className="glowing-register m-2">
                                        <input type="radio" id="propietario" name="perfil" value="propietario" />
                                        <label for="propietario">Propietario</label>
                                    </div>
                                    <div className="glowing-register m-2">
                                        <input type="radio" id="cuidador" name="perfil" value="cuidador" />
                                        <label for="cuidador">Cuidador</label>
                                    </div>
                                </div>

                                <label for="name">Nombre</label>
                                <input type="text" placeholder="Nombre" id="username" />

                                <label for="apellidos">Apellidos</label>
                                <input type="text" placeholder="Apellidos" id="username" />

                                <label for="username">Usuario</label>
                                <input type="text" placeholder="Correo Electrónico" id="username" />

                                <label for="password">Contraseña</label>
                                <input type="password" placeholder="Contraseña" id="password" />

                                <button>Registrarse</button>

                                <div className="social">
                                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                                    <div className="fb"><i className="fab fa-facebook-f"></i>  Facebook</div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>







        </>
    );
};

export default LogInForm;

