import React from "react";
import { Link } from "react-router-dom";
{/* import { Link, animateScroll as scroll } from "react-scroll"; */ }
{/* import "./hire.js"; */ }
import "./hire.css";

const Hire = () => {
    return (
        <div className="hire">
            <div className="reserves">
                <div className="header">
                    <h1 className="text-center p-4">CONTRATAR CUIDADOR</h1>
                </div>
            </div>

            <div class="container my-4">
                <div class=" bg-body-tertiary rounded-3">
                    <h3 class="text-body-emphasis text-center pb-4">Contacta con: Sandra M</h3>
                    <h4>Selecciona el servicio:</h4>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <div className="glowing-register m-2">
                                    <input type="radio" id="noche"
                                        name="radioService" value="AlojamientoNoche" />
                                    <label htmlFor="noche">Alojamiento de Noche</label>
                                    <p class="fst-italic justify-content-center pt-2">
                                        Alojamiento para tu perro en casa del cuidador seleccionado incluyendo la noche.
                                        No olvides entregar su comida, premios, cama, cartilla veterinaria y su juguete favorito.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className="glowing-register m-2">
                                    <input type="radio" id="paseo"
                                        name="radioService" value="Paseo" />
                                    <label htmlFor="paseo">Paseo</label>
                                    <p class="fst-italic justify-content-center pt-2">
                                        60 minutos de paseo para tu perro. La recogida y entrega será en tu casa. ¡No olvides la correa!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className="glowing-register m-2">
                                    <input type="radio" id="dia"
                                        name="radioService" value="GuarderiaDia" />
                                    <label htmlFor="dia">Guarderia de Día</label>
                                    <p class="fst-italic justify-content-center pt-2">
                                        Deja a tu perro durante el día en casa de un cuidador de Gudog un máximo de 10 horas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* CALENDARIO ---> NO SE COMO HACERLO */}
                    <div class="container d-flex">
                        <div class="p-5 col-6">
                            <div class="softcard">
                                <div class="calendar-bar">
                                    <button class="prev soft-btn"><i class="fas fa-chevron-left"></i></button>
                                    <div class="current-month"></div>
                                    <button class="next soft-btn"><i class="fas fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar">
                                    <div class="weekdays-name">
                                        <div class="days-name">Sab</div>
                                        <div class="days-name">Dom</div>
                                        <div class="days-name">Lun</div>
                                        <div class="days-name">Mar</div>
                                        <div class="days-name">Mie</div>
                                        <div class="days-name">Jue</div>
                                        <div class="days-name">Vie</div>
                                    </div>
                                    <div class="calendar-days"></div>
                                </div>
                                <div class="goto-buttons">
                                    ENTREGA:
                                </div>
                            </div>
                        </div>

                        <div class="p-5 col-6">
                            <div class="softcard">
                                <div class="calendar-bar">
                                    <button class="prev soft-btn"><i class="fas fa-chevron-left"></i></button>
                                    <div class="current-month"></div>
                                    <button class="next soft-btn"><i class="fas fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar">
                                    <div class="weekdays-name">
                                        <div class="days-name">Sab</div>
                                        <div class="days-name">Dom</div>
                                        <div class="days-name">Lun</div>
                                        <div class="days-name">Mar</div>
                                        <div class="days-name">Mie</div>
                                        <div class="days-name">Jue</div>
                                        <div class="days-name">Vie</div>
                                    </div>
                                    <div class="calendar-days"></div>
                                </div>
                                <div class="goto-buttons">
                                    RECOGIDA:
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CALENDARIO */}
                    <div className="d-flex">
                        <div className="col-6 me-2">
                            <label htmlFor="fechaReserva" className="form-label">
                                ENTREGA:
                            </label>
                            <br />
                            <input className="form-control" type="date" id="fechaReserva"
                                aria-describedby="fecha-nacimiento-perro"
                                name="fechaReserva"
                                value="fechaReserva"
                                required />
                        </div>

                        <div className="col-6 ms-2">
                            <label htmlFor="fechaReserva" className="form-label">
                                RECOGIDA:
                            </label>
                            <br />
                            <input className="form-control" type="date" id="fechaReserva"
                                aria-describedby="fecha-nacimiento-perro"
                                name="fechaReserva"
                                value="fechaReserva"
                                required />
                        </div>
                    </div>

                    <h3 className="mt-4 pt-4">Tus Perros</h3>
                    <p class="lead">
                        Tu Perro o Añadir otro Perro
                    </p>

                    <h3 className="mt-4 pt-4">Tu Teléfono</h3>
                    <p class="lead">
                        666 123 456
                    </p>

                    <h3 className="mt-4 pt-4">Mensaje</h3>
                    <div class="mb-3">
                        <label for="MensajeACuidador" class="form-label">
                            Comparte más información sobre tu perro con <b>SANDRA M.</b>
                        </label>
                        <textarea class="form-control" id="MensajeACuidador" rows="3"></textarea>
                    </div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="action-button shadow animate blue">Enviar</button>
                        <Link to="/more-About" className="action-button shadow animate red">Ir Atrás</Link>
                    </div>

                    <Link to="#navbar" className="simplescrollup__button simplescrollup__button--hide"
                        spy={true} smooth={true} duration={800}>
                        <h2>
                            <i className="fas fa-arrow-circle-up"></i>
                        </h2>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Hire;