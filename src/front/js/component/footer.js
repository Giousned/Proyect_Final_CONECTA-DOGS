import React, { Component } from "react";

export const Footer = () => (
  // <footer className="footer mt-auto py-3 text-center">
  // 	<p>Made with <i className="fa fa-heart text-danger" /> by{" "}Sandra Madarnas</p>
  // </footer>

  <section className="contact bg-dark py-4">
    <div id="contacto"></div>

    <footer className="bg-dark text-center text-white">
      <section className="mb-4">
        <a
          className="btn text-white btn-floating m-1"
          href="#"
          target="_blank"
          role="button"
        >
          <i className="fab fa-instagram fa-2xl"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          href="mailto:conectadogs@gmail.com"
          role="button"
        >
          <i className="far fa-envelope fa-2xl"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          href="tel:+34123456789"
          role="button"
        >
          <i className="fas fa-mobile-alt fa-2xl"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          href="#"
          target="_blank"
          role="button"
        >
          <i className="fab fa-github fa-2xl"></i>
        </a>
      </section>

      <div className="text-center p-3">
        © 2023 Conecta-Dogs.
        <br />
        Proyecto Final - Full Stack Developer - 4Geeks Academy
        <br />
        Hecho por: <b>Guillermo - Nuria - Sandra</b>
      </div>
    </footer>
  </section>
);
