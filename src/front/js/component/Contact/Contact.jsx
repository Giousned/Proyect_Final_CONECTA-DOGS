import React, { useState } from "react";

import useUserInput from "../../hooks/useUserInput.js";
import useToastsContext from "../../store/ToastsContext.js";

import { POST_Email_Contact } from "../../services/EMAILFetchs.js";

import Logo from "../../../img/conectadogs-logo.black.png";
import "../Contact/ContactStyles.css";

const Contact = () => {

  const { userInput, handleUserInput } = useUserInput("");
  const { storeToast, actionsToast } = useToastsContext();

  const [ vista, setVista ] = useState("")


  const handleSubmitSendEmail = (e) => {
    e.preventDefault();

    POST_Email_Contact(userInput)
      .then((data) => {
        actionsToast.handleShownToast(data);
        setVista("hide")
        // $('#contactEmailModal').modal('hide');
      });

  }

  return (
    <>
      <div
        className={`modal fade ${vista}`}
        id="contactEmailModal"
        tabIndex="-1"
        aria-labelledby="contactForm"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container text-center">
                <img src={Logo} className="logo" />
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form id="contact" className="contact">
              <h3>Formulario de Contacto</h3>
              <h4>
                Póngase en contacto con nosotros hoy mismo y le responderemos en
                menos de 24 horas.
              </h4>
              <fieldset>
                <input
                  placeholder="Nombre"
                  type="text"
                  tabIndex="1"
                  required
                  name="nombreContacto"
                  value={userInput.nombreContacto}
                  onChange={handleUserInput}
                  autoFocus
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Correo Electrónico"
                  type="email"
                  tabIndex="2"
                  name="emailContacto"
                  value={userInput.emailContacto}
                  onChange={handleUserInput}
                  required
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Escriba su mensaje aquí...."
                  tabIndex="5"
                  name="mensajeContacto"
                  value={userInput.mensajeContacto}
                  onChange={handleUserInput}
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <div className="container text-center m-3">
                  <button
                    type="submit"
                    className="action-button shadow animate blue"
                    onClick={handleSubmitSendEmail}
                  >
                    Enviar
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

