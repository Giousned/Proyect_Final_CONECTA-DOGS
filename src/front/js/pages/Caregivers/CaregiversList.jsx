import React, { useEffect, useState } from "react";

import { GET_Carers } from "../../services/USERFetchs.js";
import CaregiverCard from "./CaregiverCard.jsx";
import { Map } from "../map.jsx";
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
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3804056.134269121!2d-4.109671131408205!3d40.47713051661223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1683598442995!5m2!1ses!2ses"
            className="caregivers-map"
            width="780" height="680"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <Map/>
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
