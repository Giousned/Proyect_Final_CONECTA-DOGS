import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import ReserveInformationDog from "./ReserveInformationDog.jsx";
import ReserveInformationUser from "./ReserveInformationUser.jsx";

const ReserveInformation = () => {
    return (
        <>
            <div className="reserves">
                <div className="header">
                    <h1 className="text-center p-4">RESERVAS</h1>
                </div>
            </div>

            <div className="container p-4">
                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="reserveInformationUser" data-bs-toggle="pill" data-bs-target="#pills-user"
                            type="button" role="tab" aria-controls="pills-user" aria-selected="true">
                            INFORMACIÓN GENERAL
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="reserveInformationDog" data-bs-toggle="pill" data-bs-target="#pills-dog"
                            type="button" role="tab" aria-controls="pills-dog" aria-selected="false">
                            INFORMACIÓN DEL PERRO A CUIDAR
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-user" role="tabpanel" aria-labelledby="reserveInformationUser" tabindex="0">
                        <ReserveInformationUser />
                    </div>
                    <div class="tab-pane fade" id="pills-dog" role="tabpanel" aria-labelledby="reserveInformationDog" tabindex="0">
                        <ReserveInformationDog />
                    </div>
                </div>
            </div>


            <div className="d-grid gap-2 d-md-flex justify-content-md-center p-2">
                <button type="button" className="action-button shadow animate blue">Aceptar Reserva</button>
                <button type="button" className="action-button shadow animate red">Rechazar Reserva</button>
            </div>

            <div className="p-4">
                <Link to="/reserves" className="action-button shadow animate yellow text-center">Ir Atrás</Link>
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