import React from "react";

import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import {
  GET_Book,
  GET_Confirm_Book,
  GET_Deny_Book,
  DELETE_Book,
} from "../../../services/BOOKFetchs.js";

import useToastsContext from "../../../store/ToastsContext.js";
import useAuthContext from "../../../store/AuthContext.js";

const ReserveInformationUser = () => {
  const { storeToast, actionsToast } = useToastsContext();
  const { storeAuth, actionsAuth } = useAuthContext();

  const [bookInfo, setBookInfo] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    GET_Book(params.id).then((data) => {
      setBookInfo(data.book);
    });
  }, [storeAuth.userLog]);

  const handleAceptarReserva = (e) => {
    e.preventDefault();

    GET_Confirm_Book(params.id).then((data) => {
      actionsToast.handleShownToast(data);

      if (data.code == 200) setTimeout(actionsAuth.handleUpdateUser, 1000);
    });
  };

  const handleRechazarReserva = (e) => {
    e.preventDefault();

    GET_Deny_Book(params.id).then((data) => {
      actionsToast.handleShownToast(data);

      if (data.code == 200) setTimeout(actionsAuth.handleUpdateUser, 1000);
    });
  };

  const handleEliminarReserva = (e) => {
    e.preventDefault();

    if (bookInfo?.status == "Aceptada") {
      actionsToast.handleShownToast({
        code: 403,
        msg: "¡Reserva ya aceptada por parte del cuidador! ¡No se puede eliminar! ¡Póngase en contacto con el cuidador, por favor!",
      });
      return;
    }

    DELETE_Book(params.id).then((data) => {
      actionsToast.handleShownToast(data);

      if (data.code == 200) {
        setTimeout(actionsAuth.handleUpdateUser, 1000);
        navigate("/reserves");
      }
    });
  };

  return (
    <>
      {bookInfo?.tariff ? (
        <div className="col-12 p-4 border border-primary-subtle">
          <p className="lead">
            Servicio solicitado:{" "}
            <b>
              <i
                className={`fas ${
                  bookInfo.tariff.service.title == "Guardería de Día"
                    ? "fa-sun"
                    : bookInfo.tariff.service.title == "Paseo"
                    ? "fa-walking"
                    : "fa-moon"
                }`}
              ></i>
              {bookInfo.tariff.service.title}
            </b>
          </p>
          <p className="lead">
            Cuidador:{" "}
            <b>
              <i className="fas fa-user"></i> {bookInfo.tariff.user_to.name}
            </b>
          </p>
          <p className="lead">
            Monto a pagar:{" "}
            <b>
              <i className="fas fa-euro-sign"></i> {bookInfo.tariff.price}{" "}
            </b>
          </p>
          <p className="lead">
            Fechas:
            <br />
            <b>
              <i className="fas fa-calendar-check"></i> Fecha Entrega:{" "}
              {bookInfo.fechaEntrega}
            </b>
            <br />
            <i className="fas fa-clock"></i> Hora Entrega:{" "}
            {bookInfo.horaEntrega}
            <br />
            <b>
              <i className="fas fa-calendar-check"></i> Fecha Recogida:{" "}
              {bookInfo.fechaRecogida}
            </b>
            <br />
            <i className="fas fa-clock"></i> Hora Recogida:{" "}
            {bookInfo.horaRecogida}
          </p>
          <p className="lead">
            Estado de la reserva: <b> {bookInfo.status} </b>
          </p>
          <div className="d-grid gap-2">
            <button className="action-button shadow animate blue" type="button">
              Enviar Correo Electrónico
            </button>
          </div>
        </div>
      ) : null}

      {params.type == "carer" ? (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center p-2">
          <button
            type="submit"
            className="action-button shadow animate red"
            onClick={handleRechazarReserva}
          >
            Rechazar Reserva
          </button>
          <button
            type="submit"
            className="action-button shadow animate blue"
            onClick={handleAceptarReserva}
          >
            Aceptar Reserva
          </button>
        </div>
      ) : (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center p-2">
          <button
            type="submit"
            className="action-button shadow animate red"
            onClick={handleEliminarReserva}
          >
            Eliminar Reserva
          </button>
        </div>
      )}
    </>
  );
};

export default ReserveInformationUser;

{
  /* CAMBIAR FA-SUN
<i className="fa-solid fa-dog"></i>
<i className="fas fa-tree"></i> */
}
