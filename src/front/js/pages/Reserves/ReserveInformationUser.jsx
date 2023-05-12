import React from "react";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { GET_Book, GET_Confirm_Book, GET_Deny_Book } from "../../services/BOOKFetchs.js";

import useToastsContext from "../../store/ToastsContext.js";
import useAuthContext from "../../store/AuthContext.js";


const ReserveInformationUser = () => {

    const { storeToast, actionsToast } = useToastsContext();
    const { storeAuth, actionsAuth } = useAuthContext();

    const params = useParams();

    const [ bookInfo, setBookInfo ] = useState({});
  
    useEffect(() => {
  
      GET_Book(params.id).then((data) => {setBookInfo(data.book);});
  
    }, [storeAuth.userLog]);

    const handleAceptarReserva = (e) => {
        e.preventDefault();
    
        GET_Confirm_Book(params.id)
          .then((data) => {
            actionsToast.handleShownToast(data);
            actionsAuth.handleUpdateUser();
          })
    
    }

    const handleRechazarReserva = (e) => {
        e.preventDefault();
    
        GET_Deny_Book(params.id)
          .then((data) => {
            actionsToast.handleShownToast(data);
            actionsAuth.handleUpdateUser();
          })
    
    }


    return (
        <>
            {bookInfo.tariff 
                ? <div className="col-12 p-4 border border-primary-subtle">
                <p className="lead">
                    Servicio solicitado: <b><i className="fas fa-sun"></i> {bookInfo.tariff.service.title}</b>
                </p>
                <p className="lead">
                    Cuidador: <b><i className="fas fa-user"></i> {bookInfo.tariff.user_to.name}</b>
                </p>
                <p className="lead">
                    Monto a pagar: <b><i className="fas fa-euro-sign"></i> {bookInfo.tariff.price} </b>
                </p>
                <p className="lead">
                    Fechas:
                    <br />
                    <b><i className="fas fa-calendar-check"></i> Fecha Entrega: {bookInfo.fechaEntrega}</b>
                    <br />
                    <i className="fas fa-clock"></i> Hora Entrega: {bookInfo.horaEntrega}
                    <br />
                    <b><i className="fas fa-calendar-check"></i> Fecha Recogida: {bookInfo.fechaRecogida}</b>
                    <br />
                    <i className="fas fa-clock"></i> Hora Recogida: {bookInfo.horaRecogida}
                </p>
                <p className="lead">
                    Estado de la reserva: <b> {bookInfo.status} </b>
                </p>
                <div className="d-grid gap-2">
                    <button className="action-button shadow animate blue" type="button">Enviar Correo Electrónico</button>
                </div>
            </div>
                : null
            }

        <div className="d-grid gap-2 d-md-flex justify-content-md-center p-2">
            <button type="submit" className="action-button shadow animate blue" onClick={handleAceptarReserva}>
            Aceptar Reserva
            </button>
            <button type="submit" className="action-button shadow animate red" onClick={handleRechazarReserva}>
            Rechazar Reserva
            </button>
        </div>
            
        </>
    );
}

export default ReserveInformationUser;