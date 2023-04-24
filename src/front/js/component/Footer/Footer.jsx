import React from "react";
import "../Footer/footer.css";

const Footer = () => (
  <section className="contact bg-dark py-4">
    <div id="contact"></div>

    <footer className="bg-dark text-center text-white">
      <section className="mb-4">
        <a className="btn btn-instagram text-white btn-floating m-1"
          href="#" target="_blank" role="button">
          <i className="fab fa-instagram fa-2xl"></i>
        </a>

        <a className="btn btn-mail text-white btn-floating m-1"
          href="mailto:conectadogs@gmail.com" role="button">
          <i className="far fa-envelope fa-2xl"></i>
        </a>

        <a className="btn btn-telf text-white btn-floating m-1"
          href="tel:+34123456789" role="button">
          <i className="fas fa-mobile-alt fa-2xl"></i>
        </a>

        <a className="btn btn-github text-white btn-floating m-1"
          href="#" target="_blank" role="button">
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

export default Footer;