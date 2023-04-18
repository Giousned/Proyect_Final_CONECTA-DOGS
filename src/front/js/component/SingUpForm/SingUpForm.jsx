import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";
import "../SingUpForm/signUp_form.js";

const SingUpForm = () => {
    return (
        <>
            <section className="py-2 custom-login">
                <div className="container p-2 bg-light">
                    <div className="row">
                        <h2 className="text-center p-4">REGISTRO DE USUARIOS</h2>

                        <div className="col-12 col-md-6 py-3">
                            <img src="https://cdn.pixabay.com/photo/2019/02/07/16/26/cocker-spaniel-3981587_1280.jpg" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 p-2">
                            <form>
                                <h2 className="pb-2">Regístrate</h2>

                                <h3 className="pb-2">¿Cómo quieres registrarte?</h3>
                                <p>Elige una opción</p>
                                <div class="row g-2">
                                    <div class="col-md">
                                        <div class="form-floating">
                                            <div className="glowing-register m-2">
                                                <input type="radio" id="propietario" name="perfil" value="propietario" />
                                                <label for="propietario">Propietario</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md">
                                        <div class="form-floating">
                                            <div className="glowing-register m-2">
                                                <input type="radio" id="cuidador" name="perfil" value="cuidador" />
                                                <label for="cuidador">Cuidador</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="container d-flex">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off" />
                                            <label class="btn btn-primary" for="btn-check-2">Propietario</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="checkbox" class="btn-check" id="btn-check-3" checked autocomplete="off" />
                                            <label class="btn btn-primary" for="btn-check-3">Cuidador</label>
                                        </div>
                                    </div>
                                </div> */}

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                                    <Link to="/SingUpForm2">
                                        <button class="btn btn-primary m-3" type="submit">Siguiente</button>
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
export default SingUpForm;