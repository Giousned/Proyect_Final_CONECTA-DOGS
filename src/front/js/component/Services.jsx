import React from "react";

export const Services = () => {
    return (<>
        <section className="services">
            <div id="services"></div>
            <div className="container my-4 p-4 border rounded-3">
                <div className="row">
                    <div className="col-12 p-2">
                        <h2>Servicios que puedes reservar en Conecta-Dogs?</h2>
                    </div>
                    <div className="col-12 col-md-4">
                        <section className="mx-auto my-5 custom-card">
                            <div className="card testimonial-card mt-2 mb-3">
                                <div className="card-up aqua-gradient"></div>
                                <div className="avatar mx-auto white">
                                    <img src="https://cdn.pixabay.com/photo/2017/01/17/16/45/night-1987408_960_720.png"
                                        className="img-fluid"
                                        alt="" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-weight-bold">Alojamiento</h4>
                                    <hr />
                                    <p>¿Buscas a alguien para cuidar a tu perro durante la noche? Elije a uno de nuestros
                                        cuidadores para que cuide a tu mascota en su casa cuando te vayas.</p>
                                    <a href="#" className="btn btn-primary">Buscar ahora</a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-md-4">
                        <section className="mx-auto my-5 custom-card">
                            <div className="card testimonial-card mt-2 mb-3">
                                <div className="card-up aqua-gradient"></div>
                                <div className="avatar mx-auto white">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/21/38/canines-1296551_960_720.png"
                                        className="img-fluid"
                                        alt="" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-weight-bold">Paseo</h4>
                                    <hr />
                                    <p>¿No puedes pasear a tu perro tanto como te gustaría? Encuentra un paseador que pueda
                                        sacarlo tanto tiempo y tan lejos como sea necesario.</p>
                                    <a href="#" className="btn btn-primary">Buscar ahora</a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-md-4">
                        <section className="mx-auto my-5 custom-card">
                            <div className="card testimonial-card mt-2 mb-3">
                                <div className="card-up aqua-gradient"></div>
                                <div className="avatar mx-auto white">
                                    <img src="https://cdn.pixabay.com/photo/2017/01/17/16/46/sun-1987414_960_720.png"
                                        className="img-fluid"
                                        alt="" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-weight-bold">Guardería de Día</h4>
                                    <hr />
                                    <p>Deja a tu perro con un cuidador hasta un máximo de 10 horas al día.
                                        De esta manera puedes relajarte en tu trabajo, o cuando estás fuera de casa
                                        la mayor parte del día.</p>
                                    <a href="#" className="btn btn-primary">Buscar ahora</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section >
    </>
    );
};