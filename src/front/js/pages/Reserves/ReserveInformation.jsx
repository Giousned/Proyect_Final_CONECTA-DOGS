import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const ReserveInformation = () => {
    return (
        <>
            <div className="reserves">
                <div className="header">
                    <h1 className="text-center p-4">RESERVAS</h1>
                </div>
            </div>


            <div class="container col-xxl-8 px-1 py-1">
                <div class="row flex-lg-row-reverse py-5">

                    <div class="col-12 col-md-6 border p-2 shadow">
                        <h3 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">Pelusa</h3>
                        <p class="lead">
                            Pelusa es una perrita muy amigable, tranquila y educada. Le gusta estar acompañada y los paseos largos...
                        </p>
                        <p class="lead">
                            Raza: <b><i class="fas fa-dog"></i> Mediano <i class="fas fa-venus"></i></b>
                        </p>
                        <p class="lead">
                            <div class="d-grid gap-2 col-10 mx-auto">
                                <a href="#" type="button">Ver información sobre el cuidado del perro</a>
                                {/* NO SE SI TIENE QUE IR A <DogCardInformation /> */}
                            </div>
                        </p>
                        <img src="https://cdn.pixabay.com/photo/2022/03/30/11/12/dog-7101015_960_720.jpg"
                            class="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy" />
                    </div>

                    <div class="col-12 col-md-6 p-2">
                        <h3 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">Propietario - Servicio</h3>
                        <p class="lead">
                            Servicio solicitado: <b><i className="fas fa-sun"></i> Guardería de día</b>
                        </p>
                        <p class="lead">
                            Propietario: <b><i className="fas fa-user"></i> Luis</b>
                        </p>
                        <p class="lead">
                            Monto a pagar: <b><i className="fas fa-euro-sign"></i> 20</b>
                        </p>
                        <p class="lead">
                            Fechas:
                            <br />
                            <b><i class="fas fa-calendar-check"></i> 17-05-2023</b>
                            <br />
                            <i class="fas fa-clock"></i> Entrega: 9:00 - 10:00
                            <br />
                            <i class="fas fa-clock"></i> Recogida: 20:00 - 21:00
                        </p>
                        <div class="d-grid gap-2 m-4">
                            <button class="action-button shadow animate blue" type="button">Mensaje</button>
                        </div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="action-button shadow animate blue">Aceptar Reserva</button>
                            <button type="button" class="action-button shadow animate red">Rechazar Reserva</button>
                        </div>
                    </div>

                </div>
            </div>

            <Link to="#navbar" className="simplescrollup__button simplescrollup__button--hide"
                spy={true} smooth={true} duration={800}>
                <h2>
                    <i className="fas fa-arrow-circle-up"></i>
                </h2>
            </Link>
        </>
    );
}

export default ReserveInformation;