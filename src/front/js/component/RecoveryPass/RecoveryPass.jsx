import React, { useState } from "react";

import useUserInput from "../../hooks/useUserInput.js";
import useToastsContext from "../../store/ToastsContext.js";

import { POST_Email_Recovery } from "../../services/EMAILFetchs.js";

import Logo from "../../../img/conectadogs-logo.black.png";
import "../RecoveryPass/RecoveryPassStyles.css";

const RecoveryPass = () => {

  const { userInput, handleUserInput } = useUserInput("");
  const { storeToast, actionsToast } = useToastsContext();

  const [ vista, setVista ] = useState("")

  const handleSubmitRecoveryEmail = (e) => {
    e.preventDefault();

    POST_Email_Recovery(userInput)
      .then((data) => {
        actionsToast.handleShownToast(data);
        setVista("hide")
      });

  }

  return (
    <>
      <div
        className={`modal fade ${vista}`}
        id="recoveryPassModal"
        tabIndex="-1"
        aria-labelledby="recoveryForm"
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

            <form id="recovery" className="recovery">
              <h3>Formulario de Recuperación de la Contraseña</h3>
              <h4>
                Envíenos un mensaje y se le mandara una contraseña nueva, la cual podrá cambiar luego, desde su perfil, una vez iniciada la sesión.
              </h4>
              <fieldset>
                <input
                  placeholder="Nombre"
                  type="text"
                  tabIndex="1"
                  required
                  name="nombreRecovery"
                  value={userInput.nombreRecovery}
                  onChange={handleUserInput}
                  autoFocus
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Correo Electrónico"
                  type="email"
                  tabIndex="2"
                  name="emailRecovery"
                  value={userInput.emailRecovery}
                  onChange={handleUserInput}
                  required
                />
              </fieldset>
              <fieldset>
                <div className="container text-center m-3">
                  <button
                    type="submit"
                    className="action-button shadow animate blue"
                    onClick={handleSubmitRecoveryEmail}
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

export default RecoveryPass;


