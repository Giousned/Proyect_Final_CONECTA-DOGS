import React from "react";

import { Link } from "react-router-dom";

import useAuthContext from "../../../store/AuthContext.js";

const ReserveCardForMe = () => {
  const { storeAuth, actionsAuth } = useAuthContext();

  return (
    <>
      <div className="wrapper" id="app">
        {storeAuth?.userLog?.user?.book_to?.length
          ? storeAuth?.userLog?.user?.book_to.map((book, index) => {
              return (
                <div className="card-form" key={index}>
                  <div className="card-list">
                    <div className="card-item -front">
                      <div className="card-item__side">
                        <img
                          src={
                            book.books.length > 1
                              ? "https://thumbs.dreamstime.com/b/el-perro-lindo-cr%C3%ADa-la-cara-plana-asombrosa-del-vector-126694606.jpg"
                              : book?.books[index]?.dogs[index]?.dogPhoto
                          }
                          className="card-item__bg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-form__inner text-center">
                    <h5 className="card-title">
                      <i className="fa-solid fa-dog"></i>{" "}
                      {book.books.length > 1
                        ? "Varios Perros"
                        : book?.books[index]?.dogs[index]?.dogName}{" "}
                      {book.books.length > 1 ? (
                        <i className="fa-solid fa-paw"></i>
                      ) : null}
                    </h5>
                    <h6 className="m-2 p-2">
                      <i className="fas fa-sun fa-xl"></i> {book.service.title}
                      <i className="fas fa-user fa-xl ps-4"></i> Propietario:{" "}
                      {
                        storeAuth?.userLog?.user?.book_from[index]?.user_from
                          .name
                      }
                    </h6>
                    <h6 className="m-2 p-2">
                      <i className="fas fa-money-check-alt fa-xl ps-4"></i>{" "}
                      Monto a pagar: <b>{book.price}</b>{" "}
                      <i className="fas fa-euro-sign"></i>
                    </h6>
                    <p className="card-text m-2">
                      <small className="text-muted">
                        Día de la reserva:{" "}
                        {
                          storeAuth?.userLog?.user?.book_from[index]
                            ?.fechaRecogida
                        }
                      </small>
                    </p>

                    <Link
                      to={"/reserve-information/" + book.id}
                      className="nav-link"
                    >
                      <button className="action-button shadow animate blue">
                        Ver más información
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          : <div className="mx-auto"><p>Sin registros de reservas. No le han realizado ninguna reserva aún. </p></div>
          }
      </div>
    </>
  );
};

export default ReserveCardForMe;
