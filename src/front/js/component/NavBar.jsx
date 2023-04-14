import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // <nav className="navbar navbar-light bg-light">
    // 	<div className="container">
    // 		<Link to="/">
    // 			<span className="navbar-brand mb-0 h1">React Boilerplate</span>
    // 		</Link>
    // 		<div className="ml-auto">
    // 			<Link to="/demo">
    // 				<button className="btn btn-primary">Check the Context in action</button>
    // 			</Link>
    // 		</div>
    // 	</div>
    // </nav>

    <nav class="navbar navbar-expand-lg bg-dark fixed-top navbar-custom">
      <div class="container">
        <a class="navbar-brand" href="#home">
          <strong>CONECTA-DOGS</strong>
        </a>
        <button class="navbar-toggler" type="button" 
		  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#about-us">
                NOSOTROS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#services">
                SERVICIOS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#help">
                AYUDA
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#login-submmit">
                INICIAR SESIÓN | REGISTRARSE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
