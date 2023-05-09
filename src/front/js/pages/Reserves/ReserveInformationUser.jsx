import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const ReserveInformationUser = () => {
    return (
        <>
            <div className="col-12 p-4 border border-primary-subtle">
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
                <div className="d-grid gap-2">
                    <button className="action-button shadow animate blue" type="button">Enviar Correo Electrónico</button>
                </div>
            </div>
        </>
    );
}

export default ReserveInformationUser;