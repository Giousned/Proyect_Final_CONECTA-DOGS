import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";
import "../SingUpForm/signUp_form.js";

const SingUpForm4 = () => {
    return (
        <>
            <section className="py-2 custom-login">
                <div className="container p-2 bg-light">
                    <div className="row">
                        {/* <h2 className="text-center p-4">INGRESAR</h2> */}

                        <div className="col-12 col-md-6 py-3">
                            <img src="https://cdn.pixabay.com/photo/2019/05/27/12/04/welsh-corgi-pembroke-4232496_1280.jpg" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 p-2">
                            <form>
                                <h2 className="pb-2">Información de mi perro</h2>
                                <p className="pb-2">Cuéntanos un poquito acerca de tu perro, así podremos ayudarte a encontrar el cuidador perfecto.</p>
                                <hr />
                                <h3 className="pb-2">Instrucciones para el cuidador</h3>
                                <p className="pb-2">Esta información estará disponible para los cuidadores al solicitar la reserva.</p>
                                <div className="d-grid gap-2">

                                    <div className="py-2">
                                        <label for="racion-comida" class="form-label">Ración diaria de comida</label>
                                        <input type="racion_comida" class="form-control" id="racion-comida" aria-describedby="racion_comida" />
                                        <div id="racion_comida" class="form-text">En gramos (gr)</div>
                                    </div>

                                    <div className="py-2">
                                        <label for="tamaño" class="form-label">Horario de comidas</label><br />
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="checkbox" name="comidas" id="mañana1" value="mañana" />
                                            <label class="form-check-label" for="mañana1">Mañana</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="checkbox" name="comidas" id="tarde1" value="tarde" />
                                            <label class="form-check-label" for="tarde1">Tarde</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="checkbox" name="comidas" id="noche1" value="noche" />
                                            <label class="form-check-label" for="noche1">Noche</label>
                                        </div>
                                    </div>

                                    <div className="py-2">
                                        <label for="tamaño" class="form-label">Horario de paseos</label><br />
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="checkbox" name="paseos" id="mañana2" value="mañana" />
                                            <label class="form-check-label" for="mañana2">Mañana</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="checkbox" name="paseos" id="tarde2" value="tarde" />
                                            <label class="form-check-label" for="tarde2">Tarde</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="checkbox" name="paseos" id="noche2" value="noche" />
                                            <label class="form-check-label" for="noche2">Noche</label>
                                        </div>
                                    </div>

                                    <div className="py-2">
                                        <label for="tamaño" class="form-label">Nivel de actividad</label><br />
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="radio" name="actividad" id="bajo" value="bajo" />
                                            <label class="form-check-label" for="bajo">Bajo</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="radio" name="actividad" id="medio" value="medio" />
                                            <label class="form-check-label" for="medio">Medio</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-mtn">
                                            <input class="form-check-input" type="radio" name="actividad" id="moderado" value="moderado" />
                                            <label class="form-check-label" for="moderado">Moderado</label>
                                        </div>
                                    </div>

                                    <div class="py-2">
                                        <label for="FormControlTextarea2" class="form-label">Escribe aquí lo que desees indicarle al cuidador.
                                            Por ej: si tu perro tiene alguna alergia, si toma alguna medicación, algo que deban saber antes de
                                            pasear a tu perro, etc.</label>
                                        <textarea class="form-control" id="FormControlTextarea2" rows="3"></textarea>
                                    </div>

                                </div>

                                <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                                    <Link to="/SingUpForm3">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Atrás</button>
                                    </Link>
                                    <Link to="/SingUpForm5">
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
export default SingUpForm4;