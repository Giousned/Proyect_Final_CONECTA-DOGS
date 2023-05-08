import React from "react";
import "../Services/ServicesStyles.css";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {
    return (
        <>
            <section className="services">
                <div id="services"></div>
                <div className="container my-4 p-4 border rounded-3">
                    <div className="row">
                        <div className="col-12 p-2">
                            <h2>Servicios que puedes reservar en Conecta-Dogs?</h2>
                        </div>
                        <ServiceCard
                            imgSrc="https://cdn.pixabay.com/photo/2017/01/17/16/45/night-1987408_960_720.png"
                            title="Alojamiento"
                            description="¿Buscas a alguien para cuidar a tu perro durante la noche? Elije a uno de nuestros cuidadores para que cuide a tu mascota en su casa cuando te vayas."
                            btnText="Buscar ahora"
                        />
                        <ServiceCard
                            imgSrc="https://cdn.pixabay.com/photo/2016/03/31/21/38/canines-1296551_960_720.png"
                            title="Paseo"
                            description="¿No puedes pasear a tu perro tanto como te gustaría? Encuentra un paseador que pueda sacarlo tanto tiempo y tan lejos como sea necesario."
                            btnText="Buscar ahora"
                        />
                        <ServiceCard
                            imgSrc="https://cdn.pixabay.com/photo/2017/01/17/16/46/sun-1987414_960_720.png"
                            title="Guardería de Día"
                            description="Deja a tu perro con un cuidador hasta un máximo de 10 horas al día. De esta manera puedes relajarte en tu trabajo, o cuando estás fuera de casa la mayor parte del día."
                            btnText="Buscar ahora"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;