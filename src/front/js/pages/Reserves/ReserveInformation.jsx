import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const ReserveInformation = () => {
    return (
        <>
            <div className="reserves">
                <div className="header">
                    <h1 className="text-center p-4">RESERVAS</h1>
                </div>
            </div>


            <div className="container col-xxl-8 px-1 py-1">
                <div className="row flex-lg-row-reverse py-5">

                    <div className="col-12 col-md-6 border p-2 shadow">
                        <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">Pelusa</h3>
                        <p className="lead">
                            Pelusa es una perrita muy amigable, tranquila y educada. Le gusta estar acompañada y los paseos largos...
                        </p>
                        <p className="lead">
                            Raza: <b><i className="fas fa-dog"></i> Mediano <i className="fas fa-venus"></i></b>
                        </p>
                        <p className="lead">
                            <div className="d-grid gap-2 col-10 mx-auto">
                                <a href="#" type="button">Ver información sobre el cuidado del perro</a>
                                {/* NO SE SI TIENE QUE IR A <DogCardInformation /> */}
                            </div>
                        </p>
                        <img src="https://cdn.pixabay.com/photo/2022/03/30/11/12/dog-7101015_960_720.jpg"
                            className="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy" />
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">Propietario - Servicio</h3>
                        <p className="lead">
                            Servicio solicitado: <b><i className="fas fa-sun"></i> Guardería de día</b>
                        </p>
                        <p className="lead">
                            Propietario: <b><i className="fas fa-user"></i> Luis</b>
                        </p>
                        <p className="lead">
                            Monto a pagar: <b><i className="fas fa-euro-sign"></i> 20</b>
                        </p>
                        <p className="lead">
                            Fechas:
                            <br />
                            <b><i className="fas fa-calendar-check"></i> 17-05-2023</b>
                            <br />
                            <i className="fas fa-clock"></i> Entrega: 9:00 - 10:00
                            <br />
                            <i className="fas fa-clock"></i> Recogida: 20:00 - 21:00
                        </p>
                        <div className="d-grid gap-2 m-4">
                            <button className="action-button shadow animate blue" type="button">Enviar Correo Electrónico</button>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="action-button shadow animate blue">Aceptar Reserva</button>
                            <button type="button" className="action-button shadow animate red">Rechazar Reserva</button>
                        </div>

                        <div className="d-grid gap-2 m-4">
                            <Link to="/reserves" className="action-button shadow animate yellow text-center">Ir Atrás</Link>
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