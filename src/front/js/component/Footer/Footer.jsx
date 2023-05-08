import React from "react";
import { Link } from "react-router-dom";

import "../Footer/FooterStyles.css";
import Logo from "../../../img/conectadogs-logo-white.png";

const Footer = () => {
  return (
    <section className="contact bg-dark py-4">
      <footer className="bg-dark text-center text-lg-start text-white">
        <div className="container p-2">
          <div className="row my-4">
            {/* 1era Columna */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-3 mx-auto">
                <Link to="/" className="navbar-brand">
                  <strong>
                    <img src={Logo} className="logo logo-footer" />
                  </strong>
                </Link>
              </div>
              <p className="text-center">Conectamos Cuidadores con Propietarios de Perros</p>
            </div>
            {/* 2da Columna */}
            <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
              <h5 className="text-uppercase mb-4">SERVICIOS</h5>
              <ul className="list-unstyled">
                <li className="btn text-white btn-floating section-footer">
                  <a href="#" className="text-white"><i className="fas fa-paw pe-3"></i>Guardería de Día</a>
                </li>
                <li className="btn text-white btn-floating section-footer">
                  <a href="#" className="text-white"><i className="fas fa-paw pe-3"></i>Paseo de perros</a>
                </li>
                <li className="btn text-white btn-floating section-footer">
                  <a href="#" className="text-white"><i className="fas fa-paw pe-3"></i>Alojamiento para perros</a>
                </li>
              </ul>
            </div>
            {/* 3era Columna */}
            <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
              <h5 className="text-uppercase mb-4">NOSOTROS</h5>
              <ul className="list-unstyled">
                <li className="btn text-white btn-floating section-footer">
                  <a href="#" className="text-white"><i className="fas fa-paw pe-3"></i>Nosotros</a>
                </li>
                <li className="btn text-white btn-floating section-footer">
                  <a href="#" className="text-white"><i className="fas fa-paw pe-3"></i>Términos y Condiciones</a>
                </li>
                <li className="btn text-white btn-floating section-footer">
                  <a href="#" className="text-white"><i className="fas fa-paw pe-3"></i>Política de Privacidad</a>
                </li>
              </ul>
            </div>
            {/* 4ta Columna */}
            <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
              <h5 className="text-uppercase mb-4">Contacto</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="btn text-white btn-floating section-footer"
                    href="tel:+34666123456" role="button">
                    <i className="fas fa-map-marker-alt pe-3"></i>
                    España </a>
                </li>
                <li>
                  <a className="btn text-white btn-floating section-footer"
                    href="tel:+34666123456" role="button">
                    <i className="fas fa-mobile-alt pe-3"></i>
                    +34 666 123 456 </a>
                </li>
                <li>
                  <a className="btn text-white btn-floating section-footer"
                    href="mailto:conectadogs.gns@gmail.com" role="button">
                    <i className="far fa-envelope pe-3"></i>
                    conectadogs.gns@gmail.com </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          © 2023 Conecta-Dogs.
          <br />
          Proyecto Final - Full Stack Developer - 4Geeks Academy
          <br />
          <ul>
            <a className="btn btn-githubs text-white btn-floating m-1"
              href="https://github.com/SandraMadarnas" target="_blank" role="button">
              <i className="fab fa-github fa-xl"></i> Sandra
            </a>
            <a className="btn btn-githubg text-white btn-floating m-1"
              href="https://github.com/Giousned" target="_blank" role="button">
              <i className="fab fa-github fa-xl"></i> Guillermo
            </a>
            <a className="btn btn-githubn text-white btn-floating m-1"
              href="https://github.com/NurFer13" target="_blank" role="button">
              <i className="fab fa-github fa-xl"></i> Nuria
            </a>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;