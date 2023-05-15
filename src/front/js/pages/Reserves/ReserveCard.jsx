import React from "react";

import { Link } from "react-router-dom";

import useAuthContext from "../../store/AuthContext.js";


const ReserveCard = () => {

  const { storeAuth, actionsAuth } = useAuthContext();


  return (
    <>
      <div className="wrapper" id="app">
        {storeAuth.userLog.user.book_from
          ? storeAuth.userLog.user.book_from.map((book, index) => {

            return(
              <div className="card-form" key={index}>
          <div className="card-list">
            <div className="card-item -front">
              <div className="card-item__side">

                <img
                  src={(book.dogs.length > 1) ? "https://thumbs.dreamstime.com/b/el-perro-lindo-cr%C3%ADa-la-cara-plana-asombrosa-del-vector-126694606.jpg" : book.dogs[0].dogPhoto}
                  className="card-item__bg"
                />

              </div>
            </div>
          </div>
          <div className="card-form__inner text-center">
            <h5 className="card-title">
              <i className="fa-solid fa-dog"></i> {(book.dogs.length > 1) ? "Varios Perros" : book.dogs[0].dogName} {(book.dogs.length > 1) ? <i className="fa-solid fa-paw"></i> : null}
            </h5>
            <h6 className="m-2 p-2">
              <i className="fas fa-sun fa-xl"></i> {book.tariff.service.title}
              <i className="fas fa-user fa-xl ps-4"></i> Propietario: {book.user_from.name}
            </h6>
            <h6 className="m-2 p-2">
              <i className="fas fa-money-check-alt fa-xl ps-4"></i> Monto a pagar: <b>{book.tariff.price}</b> <i className="fas fa-euro-sign"></i>
            </h6>
            <p className="card-text m-2">
              <small className="text-muted">
                Día de la reserva: {book.fechaRecogida}
              </small>
            </p>

            <Link to={"/reserve-information/" + book.id} className="nav-link">
              <button className="action-button shadow animate blue">
                Ver más información
              </button>
            </Link>

          </div>
        </div>

            );

          })
          : null
        }
        
      </div>
    </>
  );
};

export default ReserveCard;
