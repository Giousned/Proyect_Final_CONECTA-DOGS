import React from "react";

const ReserveCard = () => {
  return (
    <>
      <div className="wrapper" id="app">
        <div className="card-form">
          <div className="card-list">
            <div className="card-item -front">
              <div className="card-item__side">
                <div className="card-item__cover">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg"
                    className="card-item__bg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-form__inner text-center">
            <h5 className="card-title">
              <i className="fa-solid fa-dog"></i> Pelusa
            </h5>
            <h6 className="m-2 p-2">
              <i className="fas fa-sun fa-xl"></i> Guardería de día
              <i className="fas fa-user fa-xl ps-4"></i> Dueño: Luis
            </h6>
            <h6 className="m-2 p-2">
              <i className="fas fa-money-check-alt fa-xl ps-4"></i> Monto
              pagado: 20<i className="fas fa-euro-sign"></i>
            </h6>
            <p className="card-text m-2">
              <small className="text-muted">
                Día de la reserva: 17-05-2023
              </small>
            </p>

            <button className="action-button shadow animate blue">
              Ver más información
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveCard;
