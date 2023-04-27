import React, { useState } from "react";

import "./notifications.css";

const Notifications = () => {
    return (
        <div className="custom-notifications">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">
                        <p>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#notificaciones"
                                aria-expanded="false" aria-controls="notificaciones">
                                <i class="fas fa-bell"></i> NOTIFICACIONES SIN LEER <i class="fas fa-bell"></i>
                            </button>
                        </p>
                        <div className="custom-notif-card">
                            <div class="collapse collapse-horizontal" id="notificaciones">
                                <div class="card card-body" >
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>¡Tienes una nueva reserva!</strong> Acéptala para que no la pierdas...
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>¡Tienes listo tu pago!</strong>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;