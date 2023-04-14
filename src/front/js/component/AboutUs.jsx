import React from "react";

export const AboutUs = () => {
    return (
        <section class="about-us">
            <div id="about-us"></div>
            <div class="container my-4 p-4 border rounded-3">
                <div class="row">
                    <h2>¿Cómo funciona Conecta-Dogs?</h2>
                    <div class="col-12 col-md-3 p-2">
                        <img src="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                            class="img-thumbnail" alt="ConectaDogs" />
                    </div>
                    <div class="col-12 col-md-3 p-2">
                        {/* 1 */}
                        <h4>Busca</h4>
                        <p>Busca y contacta con cuidadores de confianza y con experiencia cerca de ti</p>
                    </div>
                    <div class="col-12 col-md-3 p-2">
                        {/* 2 */}
                        <h4>Reserva</h4>
                        <p>Encuentra al cuidador adecuado para tu perro y paga online para contar con la cobertura veterinaria</p>
                    </div>
                    <div class="col-12 col-md-3 p-2">
                        {/* 3 */}
                        <h4>Relájate</h4>
                        <p>Tu perro se divertirá y estará en familia y tú recibirás fotografías regularmente</p>
                    </div>

                    <h2>¿Por qué Conecta-Dogs?</h2>
                    <div class="col-12 col-md-3 p-2">
                        <img src="https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_960_720.jpg"
                            class="img-thumbnail" alt="ConectaDogs" />
                    </div>
                    <div class="col-12 col-md-3 p-2">
                        {/* 1 */}
                        <h4>Beneficios para tu perro</h4>
                        <ul>
                            <li>Atención personalizada en un hogar familiar</li>
                            <li>No más jaulas</li>
                            <li>Muchos paseos, juegos y mimos</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3 p-2">
                        {/* 2 */}
                        <h4>Beneficios para ti</h4>
                        <ul>
                            <li>+15.000 cuidadores evaluados por Conecta-Dogs</li>
                            <li>Valoraciones y comentarios de otros propietarios de perros</li>
                            <li>Cuidado y atención para tu perro</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3 p-2">
                        {/* 3 */}
                        <h4>Tranquilidad</h4>
                        <ul>
                            <li>Cobertura veterinaria con cada reserva</li>
                            <li>Mensajes y pago seguro online</li>
                            <li>Actualizaciones diarias de fotos y mensajes</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section >
    );
};