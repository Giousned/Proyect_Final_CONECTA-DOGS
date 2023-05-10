import React, { useState } from "react";

import "./NotificationsStyles.css";

const Notifications = () => {
  return (
    <div className="custom-notifications">
      <div className="container">
        <div className="row">
          <div className="col-12 my-4">
            <p>
              <button className="btn btn-primary" type="button"
                data-bs-toggle="collapse" data-bs-target="#notificaciones"
                aria-expanded="false" aria-controls="notificaciones">
                <i className="fas fa-bell"></i> NOTIFICACIONES SIN LEER{" "}
                <i className="fas fa-bell"></i>
              </button>
            </p>
            <div className="custom-notif-card">
              <div className="collapse collapse-horizontal" id="notificaciones">
                <div className="card card-body">
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>¡Tienes una nueva reserva!</strong> Acéptala para
                    que no la pierdas...
                    <button type="button" className="btn-close"
                      data-bs-dismiss="alert" aria-label="Close">
                    </button>
                  </div>
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>¡Tienes listo tu pago!</strong>
                    <button type="button" className="btn-close"
                      data-bs-dismiss="alert" aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="alert alert-primary" role="alert">
            ¡Tienes una nueva reserva!
          </div>

          <div class="alert alert-primary" role="alert">
            ¡Tienes una nueva reserva aceptada!
          </div>

          <div class="alert alert-danger" role="alert">
            A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>

        </div>
      </div>

    </div>
  );
};

export default Notifications;
