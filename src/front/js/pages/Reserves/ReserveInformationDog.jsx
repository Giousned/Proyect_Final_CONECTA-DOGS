import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const ReserveInformationDog = () => {
    return (
        <>
            <div className="col-md justify-content-center border border-primary-subtle m-2 p-2 shadow">
                <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">
                    Pelusa
                </h3>
                <p className="lead">
                    Pelusa es una perrita muy amigable, tranquila y educada. Le gusta estar acompañada y los paseos largos...
                </p>
                <p className="lead">
                    Raza: <b><i className="fas fa-dog"></i> Mediano</b>
                </p>
                <p className="lead">
                    Sexo: <b><i className="fas fa-venus"></i> Hembra</b>
                </p>

                <div className="d-grid py-2">
                    <Link to="/reserve-information" className="action-button shadow animate yellow text-center">Ver Información del Perro</Link>
                </div>

                <img src="https://cdn.pixabay.com/photo/2022/03/30/11/12/dog-7101015_960_720.jpg"
                    className="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy" />
            </div >
        </>
    );
}

export default ReserveInformationDog;