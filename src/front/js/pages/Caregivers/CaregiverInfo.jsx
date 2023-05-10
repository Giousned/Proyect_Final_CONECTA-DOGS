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

      <div className="container border border-primary shadow my-4">
        <div className="p-4">
          <h3 className="text-body-emphasis text-center pb-4">
            Contacta con: <b>Belinda</b>
          </h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://cdn-3.expansion.mx/dims4/default/5e9d62b/2147483647/strip/true/crop/1080x1350+0+0/resize/1200x1500!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F3b%2Ff4%2F5df51d984f718eee1cfd09eecf87%2Fbelinda-se-inyecta-los-labios.jpeg"
                className="img-fluid rounded-start"
                width={300}
                alt="..."
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="text-body-emphasis pt-4">Provincia</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Madrid
              </p>

              <h4 className="text-body-emphasis pt-4">Sobre Belinda</h4>
              <p>
                Aquí va el texto del campo: <b>"SOBRE MI"</b>
              </p>

              <h4 className="text-body-emphasis pt-4">Servicios y Tarifas:</h4>
              <p>Servicios y Tarifas:</p>
            </div>
          </div>


          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link
              to="/hire-caregiver"
              className="action-button shadow animate blue"
            >
              Contratar
            </Link>
            <Link
              to="/caregivers-list"
              className="action-button shadow animate red"
            >
              Ir Atrás
            </Link>
          </div>

          <Link
            to="#navbar"
            className="simplescrollup__button simplescrollup__button--hide"
            spy={true}
            smooth={true}
            duration={800}
          >
            <h2>
              <i className="fas fa-arrow-circle-up"></i>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CaregiverInfo;
