import React from "react";

export const AboutUs = () => {
    return (
        <section class="about-us">
            <div id="nosotros"></div>
            <div class="container my-4 p-4 border rounded-3">
                <div class="row">
                    <div class="col-12 col-md-6 p-2">
                        <div class="container">
                            <img src="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                                class="img-thumbnail" alt="ConectaDogs" />
                        </div>
                        <h2>¿Cómo funciona Conecta-Dogs?</h2>
                        <div class="accordion accordion-flush">

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Busca
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    data-bs-parent="#about-us">
                                    <div class="accordion-body">
                                        <strong>Busca y contacta con cuidadores de confianza y con experiencia cerca de ti</strong>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Reserva
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#about-us">
                                    <div class="accordion-body">
                                        <strong>Encuentra al cuidador adecuado para tu perro y paga online para contar con la cobertura veterinaria</strong>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Relájate
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#about-us">
                                    <div class="accordion-body">
                                        <strong>Tu perro se divertirá y estará en familia y tú recibirás fotografías regularmente</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 p-2">
                        <div class="container">
                            <img src="https://cdn.pixabay.com/photo/2019/09/21/18/58/dog-4494554_960_720.jpg"
                                class="img-thumbnail" alt="ConectaDogs" />
                        </div>
                        <h2>¿Por qué Conecta-Dogs?</h2>
                        <div class="accordion accordion-flush">

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        Beneficios para tu perro
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse"
                                    data-bs-parent="#about-us">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Atención personalizada en un hogar familiar</li>
                                            <li>No más jaulas</li>
                                            <li>Muchos paseos, juegos y mimos</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Beneficios para ti
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse"
                                    data-bs-parent="#about-us">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>+15.000 cuidadores evaluados por Conecta-Dogs</li>
                                            <li>Valoraciones y comentarios de otros propietarios de perros</li>
                                            <li>Cuidado y atención para tu perro</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSix" aria-expanded="false"
                                        aria-controls="flush-collapseSix">
                                        Tranquilidad
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#about-us">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Cobertura veterinaria con cada reserva</li>
                                            <li>Mensajes y pago seguro online</li>
                                            <li>Actualizaciones diarias de fotos y mensajes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};