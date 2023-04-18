import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/navbar.css";

export const NavBar = () => {
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

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top navbar-custom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <strong>CONECTA-DOGS</strong>
        </Link>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
            <li className="nav-item">
              <Link to="#about-us" className="nav-link " aria-current="page">
                NOSOTROS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#services" className="nav-link" aria-current="page">
                SERVICIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#blog" className="nav-link">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/LogInForm" className="nav-link">
                INGRESAR
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/SingUpForm" className="nav-link">
                REGISTRARSE
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="#contact" className="nav-link">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
};
