import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_Carers } from "../../services/USERFetchs.js";
import CaregiverCard from "./CaregiverCard.jsx";
import "./CaregiversStyles.css";


const CaregiversList = () => {
  const [dogsitters, setDogsitters] = useState([]);

  useEffect(() => {
    GET_Carers()
      .then((data) => setDogsitters(data));
  }, []);

  return (
    <>
      <div className="caregivers">
        <div className="header">
          <h1 className="text-center p-4">BUSCAR CUIDADOR</h1>
        </div>
      </div>

      <div className="row">

        {/* MAPA */}
        <div className="col-12 col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3804056.134269121!2d-4.109671131408205!3d40.47713051661223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1683598442995!5m2!1ses!2ses"
            className="caregivers-map"
            width="780" height="680"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* LISTA DE CUIDADORES */}
        <div className="col-12 col-md-6 caregivers-scroll">
          {dogsitters
            ? dogsitters.map((carer, index) => {
              return (
                <CaregiverCard
                  img={
                    carer.userPhoto
                      ? carer.userPhoto
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  name={carer.name}
                  lastName={carer.lastName}
                  province={carer.province}
                  aboutMe={carer.aboutMe}
                  id={carer.id}
                  key={index}
                />
              );
            })
            : null
          }
        </div>
      </div>
    </>
  );
};

export default CaregiversList;



{/* <CaregiverCard
              imgSrc="https://cdn-3.expansion.mx/dims4/default/5e9d62b/2147483647/strip/true/crop/1080x1350+0+0/resize/1200x1500!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F3b%2Ff4%2F5df51d984f718eee1cfd09eecf87%2Fbelinda-se-inyecta-los-labios.jpeg"
              title="Belinda"
              description="Hola. Llevo 20 años teniendo perros y soy miembro de la Fundación Amigos del Perro."
              province="Madrid"
          /> */}

{/* <CaregiverCard
              imgSrc="https://cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/J6VMOF2QJ5AIHNX7O57K3UHHSQ.jpg"
              title="Benito"
              description="¡Hola! Me llaman Bad Bunny, soy una persona joven que se declara amante de los animales."
              province= "Benidorm"
          /> */}

{/* <CaregiverCard
              imgSrc="https://i.pinimg.com/originals/d9/c0/90/d9c090ed153a9c290b607c5b1b541c7b.jpg"
              title="Juan Luis"
              description="Cuidamos a tu perro con cariño en un piso confortable . Somos una familia amante de los perros, listos para cuidarlos y mimarlos."
              province= "Sevilla"
          /> */}