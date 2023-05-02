import React from "react";

const ReserveCard2 = () => {
  return (
    <>
      <div className="card card-reserves m-3">
        <div className="row g-0">
          <div className="col-12 col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg"
              className="img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa-solid fa-dog"></i> Pelusa
              </h5>
              <p className="card-text">
                <i className="fas fa-sun"></i> Guardería de día
                <br />
                Dueño: Luis
                <br />
                Monto pagado: 20<i className="fas fa-euro-sign"></i>
              </p>
              <p className="card-text">
                <small className="text-muted">17-05-2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveCard2;
