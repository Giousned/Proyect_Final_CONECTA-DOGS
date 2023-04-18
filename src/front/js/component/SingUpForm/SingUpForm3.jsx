import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";
import "../SingUpForm/signUp_form.js";

const SingUpForm3 = () => {
    return (
        <>
            <section className="py-2 custom-login">
                <div className="container p-2 bg-light">
                    <div className="row">
                        {/* <h2 className="text-center p-4">INGRESAR</h2> */}

                        <div className="col-12 col-md-6 py-3">
                            <img src="https://cdn.pixabay.com/photo/2020/03/29/04/10/dog-4979248_1280.jpg" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 p-2">
                            <form>
                                <h2 className="pb-2">Información de mi perro</h2>
                                <p className="pb-2">Cuéntanos otro poquito acerca de tu perro...</p>

                                <div className="d-grid gap-2">

                                    <div className="py-2">
                                        <label for="estirilizado" class="form-label">¿Tu perro está esterilizado?</label>
                                        <select class="form-select" aria-label="estirilizado">
                                            <option selected>Elige una opción</option>
                                            <option value="3">Sí</option>
                                            <option value="4">No</option>
                                        </select>
                                    </div>

                                    <div className="py-2">
                                        <label for="sociable-gatos" class="form-label">¿Tu perro es sociable con gatos?</label>
                                        <select class="form-select" aria-label="sociable-gatos">
                                            <option selected>Elige una opción</option>
                                            <option value="5">Sí</option>
                                            <option value="6">No</option>
                                        </select>
                                    </div>

                                    <div className="py-2">
                                        <label for="sociable-niños" class="form-label">¿Tu perro es sociable con niños?</label>
                                        <select class="form-select" aria-label="sociable-niños">
                                            <option selected>Elige una opción</option>
                                            <option value="7">Sí</option>
                                            <option value="8">No</option>
                                        </select>
                                    </div>

                                    <div className="py-2">
                                        <label for="sociable-perros" class="form-label">¿Tu perro es sociable con otros perros?</label>
                                        <select class="form-select" aria-label="sociable-perros">
                                            <option selected>Elige una opción</option>
                                            <option value="9">Sí</option>
                                            <option value="10">No</option>
                                        </select>
                                    </div>

                                    <div className="py-2">
                                        <label for="microchip" class="form-label">Microchip *</label>
                                        <input type="micro-chip" class="form-control" id="microchip" aria-describedby="micro-chip" required />
                                        <div id="micro-chip" class="form-text">Microchip del perro</div>
                                    </div>

                                    <div class="py-2">
                                        <label for="FormControlTextarea1" class="form-label">Observaciones</label>
                                        <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                                    </div>

                                </div>

                                <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                                    <Link to="/SingUpForm2">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Atrás</button>
                                    </Link>
                                    <Link to="/SingUpForm4">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Siguiente</button>
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
export default SingUpForm3;