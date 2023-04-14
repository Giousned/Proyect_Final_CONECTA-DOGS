import React from "react";

export const Services = () => {
    return (
        <section className="services">
            <div id="services"></div>
            <div className="container my-4 p-4 border rounded-3">
                <div className="row">
                    <div className="col-12 p-2">
                        <h2>Servicios que puedes reservar en Conecta-Dogs?</h2>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2017/01/17/16/45/night-1987408_960_720.png"
                                className="img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alojamiento</h5>
                                <p className="card-text">¿Buscas a alguien para cuidar a tu perro durante la noche?
                                    Elije a uno de nuestros cuidadores para que cuide a tu mascota en su casa cuando te vayas.</p>
                                <a href="#" className="btn btn-primary">Buscar ahora</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2016/03/31/21/38/canines-1296551_960_720.png"
                                className="img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Paseo</h5>
                                <p className="card-text">¿No puedes pasear a tu perro tanto como te gustaría? Encuentra un paseador
                                    que pueda sacarlo tanto tiempo y tan lejos como sea necesario.</p>
                                <a href="#" className="btn btn-primary">Buscar ahora</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2017/01/17/16/46/sun-1987414_960_720.png"
                                className="img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Guardería de Día</h5>
                                <p className="card-text">Deja a tu perro con un cuidador hasta un máximo de 10 horas al día.
                                    De esta manera puedes relajarte en tu trabajo, o cuando estás fuera de casa la mayor parte del día.</p>
                                <a href="#" className="btn btn-primary">Buscar ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};