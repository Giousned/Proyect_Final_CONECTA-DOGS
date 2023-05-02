import React from "react";

const ReserveCard = () => {
    return (
        <>
            <div class="wrapper" id="app">
                <div class="card-form">
                    <div class="card-list">
                        <div class="card-item -front">
                            <div class="card-item__side">
                                <div class="card-item__cover">
                                    <img src="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg"
                                        class="card-item__bg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-form__inner text-center">
                        <h5 class="card-title">
                            <i class="fa-solid fa-dog"></i> Pelusa
                        </h5>
                        <h6 className="m-2 p-2">
                            <i class="fas fa-sun fa-xl"></i> Guardería de día
                            <i class="fas fa-user fa-xl ps-4"></i> Dueño: Luis
                        </h6>
                        <h6 className="m-2 p-2">
                            <i class="fas fa-money-check-alt fa-xl ps-4"></i> Monto pagado: 20<i class="fas fa-euro-sign"></i></h6>
                        <p class="card-text m-2">
                            <small class="text-muted">Día de la reserva: 17-05-2023</small>
                        </p>

                        <button class="action-button shadow animate blue">Ver más información</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ReserveCard;