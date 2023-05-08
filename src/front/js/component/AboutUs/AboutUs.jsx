import React from "react";

import "../AboutUs/AboutUsStyles.css";
import AboutUsSection from "./AboutUsSection.jsx";
import AboutUsItem from "./AboutUsItem.jsx";
import Benefits from "./Benefits.jsx";

const AboutUs = () => {
    return (
        <AboutUsSection>
            <h2 className="custom-justify">¿Cómo funciona Conecta-Dogs?</h2>
            <div className="col-12 col-md-3 p-3">
                <img src="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                    className="img-thumbnail" alt="ConectaDogs" />
            </div>
            <AboutUsItem
                image="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                icon="fas fa-1 fa-3x"
                title="Busca"
                description="Busca y contacta con cuidadores de confianza y con experiencia cerca de ti"
            />
            <AboutUsItem
                image="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                icon="fas fa-2 fa-3x"
                title="Reserva"
                description="Encuentra al cuidador adecuado para tu perro y paga online para contar con la cobertura veterinaria"
            />
            <AboutUsItem
                image="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
                icon="fas fa-3 fa-3x"
                title="Relájate"
                description="Tu perro se divertirá y estará en familia y tú recibirás fotografías regularmente"
            />
            <h2 className="custom-justify">Beneficios Conecta-Dogs</h2>
            <div className="col-12 col-md-3 p-3">
                <img src="https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_960_720.jpg"
                    className="img-thumbnail" alt="ConectaDogs" />
            </div>
            <Benefits titulo="Beneficios para tu perro" beneficios={[
                "Atención personalizada en un hogar familiar",
                "No más jaulas",
                "Muchos paseos, juegos y mimos"
            ]} />
            <Benefits titulo="Beneficios para ti" beneficios={[
                "+15.000 cuidadores evaluados por Conecta-Dogs",
                "Valoraciones y comentarios de otros propietarios de perros",
                "Cuidado y atención para tu perro"
            ]} />
            <Benefits titulo="Tranquilidad" beneficios={[
                "Cobertura veterinaria con cada reserva",
                "Mensajes y pago seguro online",
                "Actualizaciones diarias de fotos y mensajes"
            ]} />
        </AboutUsSection>

    );
};

export default AboutUs;