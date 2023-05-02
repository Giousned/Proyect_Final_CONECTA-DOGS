import React from "react";

const ReserveCard2 = () => {
    return (
        <>
            <div class="card card-reserves m-3">
                <div class="row g-0">
                    <div class="col-12 col-md-6">
                        <img src="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg"
                            class="img-fluid rounded-start" alt="" />
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">
                                <i class="fa-solid fa-dog"></i> Pelusa
                            </h5>
                            <p class="card-text">
                                <i class="fas fa-sun"></i> Guardería de día
                                <br />
                                Dueño: Luis
                                <br />
                                Monto pagado: 20<i class="fas fa-euro-sign"></i>
                            </p>
                            <p class="card-text">
                                <small class="text-muted">17-05-2023</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReserveCard2;