import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../store/AppContext.js";

import Logo from "../../../img/conectadogs-logo-white.png";
import "../NavBar/navbar.css";

const NavBar = () => {
  const { store, actions } = useAppContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-custom">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <strong>
              <img src={Logo} className="logo" />
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                {store.userLog ? (
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={actions.handleLogOut}
                  >
                    {" "}
                    LOGOUT{" "}
                  </Link>
                ) : (
                  <Link to="/log-in-form" className="nav-link">
                    {" "}
                    INGRESAR{" "}
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn text-light me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  CONTACTO
                </button>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile-carer"
                  className="nav-link border rounded px-3"
                >
                  <i className="fas fa-user-circle fa-1x"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
