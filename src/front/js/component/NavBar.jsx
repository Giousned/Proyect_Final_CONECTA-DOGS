import React from "react";
import { Link } from "react-router-dom";

import { LoginSubmit } from "../pages/LoginSubmit.jsx";

export const Navbar = () => {
  return (<>
    {/* <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Check the Context in action</button>
          </Link>
        </div>
      </div>
    </nav> */}

    <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-custom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <strong>CONECTA-DOGS</strong>
        </Link>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#about-us">
                NOSOTROS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#services">
                SERVICIOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#help">
                AYUDA
              </a>
            </li>
            <li className="nav-item">
              <Link to="/LoginSubmit" className="nav-link">
                INICIAR SESIÓN | REGISTRARSE
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#login-submit">
                INICIAR SESIÓN | REGISTRARSE
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
};
