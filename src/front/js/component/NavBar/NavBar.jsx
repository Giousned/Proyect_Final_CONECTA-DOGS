import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAuthContext from "../../store/AuthContext";
import useAppContext from "../../store/AppContext.js";
import Logo from "../../../img/conectadogs-logo-white.png";
import "../NavBar/NavBarStyles.css";

const NavBar = () => {
  const { storeAuth, actionsAuth } = useAuthContext();

  const { store, actions } = useAppContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-custom navbar-scroll" id="#navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <strong>
              <img src={Logo} className="logo" />
            </strong>
          </Link>
          <button type="button" className="navbar-toggler"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
              <li className="nav-item">
                {storeAuth.userLog.token ? (
                  <Link to="/" className="nav-link " aria-current="page">
                    INICIO
                  </Link>
                ) : null}
              </li>
              {/* <li className="nav-item">
                {storeAuth.userLog.token ? (
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={actionsAuth.handleLogOut}
                  >
                    LOGOUT
                  </Link>
                ) : (
                  <Link to="/log-in-form" className="nav-link">
                    LOGIN
                  </Link>
                )}
              </li> */}
              <li className="nav-item">
                <button type="button" className="btn text-light me-2"
                  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  CONTACTO
                </button>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle border rounded px-3"
                  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user-circle"></i>
                </a>

                {storeAuth.userLog.token ? (
                  <ul className="dropdown-menu custom-ul ps-2">
                    <li>
                      <h5> {store.userInput.name + " " + store.userInput.lastName}</h5>
                      <Link to="/user-profile" className="dropdown-item">
                        <i className="far fa-user pe-2"></i> Ver Perfil
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/notifications" data-notifications="4" className="dropdown-item">
                        <i className="far fa-comment-alt pe-2"></i>{" "} Notificaciones
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/reserves" className="dropdown-item">
                        <i className="far fa-bell pe-2"></i> Reservas
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="nav-item">
                      <Link to="/caregivers-list" className="dropdown-item">
                        <i className="fas fa-search-location"></i> Buscar Cuidadores
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" onClick={actionsAuth.handleLogOut}>
                        <i className="fas fa-sign-out-alt pe-2"></i> Cerrar Sesión
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/log-in-form" className="dropdown-item">
                        <i className="far fa-comment-alt pe-2"></i> Iniciar Sesión
                      </Link>
                    </li>

                    <li>
                      <Link to="/sign-up-form" className="dropdown-item">
                        <i className="far fa-user pe-2"></i> Registrarse
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
