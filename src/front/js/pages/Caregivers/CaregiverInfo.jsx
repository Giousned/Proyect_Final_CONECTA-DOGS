import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CaregiversStyles.css";


const CaregiverInfo = () => {

    return (
        <>
            <div className="caregivers">
                <div className="header">
                    <h1 className="text-center p-4">BUSCAR CUIDADOR</h1>
                </div>
            </div>

            <div className="container my-4">
                <div className=" bg-body-tertiary p-4 rounded-3">
                    <h3 className="text-body-emphasis text-center pb-4">Contacta con: <b>María</b></h3>
                    <img src="https://cdn.pixabay.com/photo/2018/01/28/06/21/doberman-3112892_1280.jpg"
                        class="img-fluid rounded-start" width={170} alt="..." />

                    <h3 className="text-body-emphasis pt-4">PROVINCIA</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Madrid</p>

                    <h3 className="text-body-emphasis pt-4">SOBRE María</h3>
                    <p>Aquí va el texto del campo: <b>"SOBRE MI"</b></p>

                    <h3 className="text-body-emphasis pt-4">SERVICIOS Y TARIFAS</h3>
                    <p>Servicios y Tarifas:</p>


                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link to="/hire-caregiver" className="action-button shadow animate blue">Contratar</Link>
                        <Link to="/caregivers-list" className="action-button shadow animate red">Ir Atrás</Link>
                    </div>

                    <Link to="#navbar" className="simplescrollup__button simplescrollup__button--hide"
                        spy={true} smooth={true} duration={800}>
                        <h2>
                            <i className="fas fa-arrow-circle-up"></i>
                        </h2>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default CaregiverInfo;