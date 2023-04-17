import React from "react";

export const AboutUs = () => {
    return (
        <section className="about-us">
            <div id="about-us"></div>
            <div className="container my-4 p-4 border rounded-3">
                <div className="row">

                    <h2 className="custom-justify">¿Cómo funciona Conecta-Dogs?</h2>
                    <div className="col-12 col-md-3 p-3">
                        <img src="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                            className="img-thumbnail" alt="ConectaDogs" />
                    </div>
                    <div className="col-12 col-md-3 p-3">
                        <div className="numbers"><i className="fas fa-1 fa-3x"></i></div>
                        <h4>Busca</h4>
                        <p>Busca y contacta con cuidadores de confianza y con experiencia cerca de ti</p>
                    </div>
                    <div className="col-12 col-md-3 p-3">
                        <div className="numbers"><i className="fas fa-2 fa-3x"></i></div>
                        <h4>Reserva</h4>
                        <p>Encuentra al cuidador adecuado para tu perro y paga online para contar con la cobertura veterinaria</p>
                    </div>
                    <div className="col-12 col-md-3 p-3">
                        <div className="numbers"><i className="fas fa-3 fa-3x"></i></div>
                        <h4>Relájate</h4>
                        <p>Tu perro se divertirá y estará en familia y tú recibirás fotografías regularmente</p>
                    </div>

                    <h2 className="custom-justify">¿Por qué Conecta-Dogs?</h2>
                    <div className="col-12 col-md-3 p-3">
                        <img src="https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_960_720.jpg"
                            className="img-thumbnail" alt="ConectaDogs" />
                    </div>
                    <div className="col-12 col-md-3 p-3 border rounded border-success">
                        <h4 className="m-1 p-1">Beneficios para tu perro</h4>
                        <ul className="list-unstyled custom-justify mt-3">
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Atención personalizada en un hogar familiar</li>
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>No más jaulas</li>
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Muchos paseos, juegos y mimos</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 p-3 border rounded border-success">
                        <h4 className="m-1 p-1">Beneficios para ti</h4>
                        <ul className="list-unstyled custom-justify mt-3">
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>+15.000 cuidadores evaluados por Conecta-Dogs</li>
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Valoraciones y comentarios de otros propietarios de perros</li>
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Cuidado y atención para tu perro</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 p-3 border rounded border-success">
                        <h4 className="m-1 p-1">Tranquilidad</h4>
                        <ul className="list-unstyled custom-justify mt-3">
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Cobertura veterinaria con cada reserva</li>
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Mensajes y pago seguro online</li>
                            <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>Actualizaciones diarias de fotos y mensajes</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section >
    );
};