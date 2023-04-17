import React from "react";

import { Link } from "react-router-dom";

import {  LINKSFOOTERCONTACTDOGS,  LINKSFOOTERSERVICIOS,  LINKSFOOTERCONDICIONES} from "../constants/LinksFooter.jsx";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center mb-3">
	<div className="d-flex justify-content-around">
	<div className="d-flex flex-column col-4">
      <h3>Contact-Dogs</h3>

      {LINKSFOOTERCONTACTDOGS.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <span className="footer-brand">{item.label}</span>
          </Link>
        );
      })}
    </div>

    <div className="d-flex flex-column col-4">
      <h3>Servicios</h3>

	  {LINKSFOOTERSERVICIOS.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <span className="footer-brand">{item.label}</span>
          </Link>
        );
      })}
    </div>

    <div className="d-flex flex-column col-4">
      <h3>Condiciones</h3>

	  {LINKSFOOTERCONDICIONES.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <span className="footer-brand">{item.label}</span>
          </Link>
        );
      })}

	<div className="d-flex justify-content-center mt-2">

	<i className="fa-brands fa-facebook mx-2"></i>
	<i className="fa-brands fa-twitter mx-2"></i>
	<i className="fa-brands fa-instagram mx-2"></i>

	</div>


    </div>



	</div>
    
      <hr className="border border-2 border-secondary-subtle"></hr>
    <p>
      Made with <i className="fa fa-heart text-danger" /> by Nuria, Sandra &
      Guille in 4Geeks Academy
    </p>
  </footer>
);
