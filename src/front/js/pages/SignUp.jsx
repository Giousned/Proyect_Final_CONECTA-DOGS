import React, { useState } from "react";

import { PersonalInformation } from "../component/forms/PersonalInformation.jsx";
import { DogInformation } from "../component/forms/DogInformation.jsx";
import { DogInformation2 } from "../component/forms/DogInformation2.jsx";
import { AdditionalInformation } from "../component/forms/AdditionalInformation.jsx";


const formUser = {
  0: {
    imageSrc: "https://cdn.pixabay.com/photo/2018/04/09/14/17/woman-3304166_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS - CUIDADOR | PROPIETARIO",
    secondaryTitle: "Información personal",
    description: "Cuéntanos un poquito acerca de ti.",
    component: <PersonalInformation />
  },
  1: {
    imageSrc: "https://cdn.pixabay.com/photo/2022/10/22/17/29/shitzu-7539692_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS - PROPIETARIO",
    secondaryTitle: "Información de mi perro",
    description: "Cuéntanos un poquito acerca de tu perro, así podremos ayudarte a encontrar el cuidador perfecto.",
    component: <DogInformation />
  },
  2: {
    imageSrc: "https://cdn.pixabay.com/photo/2020/03/29/04/10/dog-4979248_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS - PROPIETARIO",
    secondaryTitle: "Información de mi perro",
    description: "Cuéntanos otro poquito acerca de tu perro...",
    component: <DogInformation2 />
  },
  3: {
    imageSrc: "https://cdn.pixabay.com/photo/2018/04/09/14/17/woman-3304166_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS - CUIDADOR",
    secondaryTitle: "Información adicional",
    description: "¿Qué servicios ofreces y a qué precio?",
    component: <AdditionalInformation />
  }
}

const lastStep = 3;
const firstStep = 0;

const SingUpForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep == lastStep) { return; }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep == firstStep) { return; }
    setCurrentStep((prev) => prev - 1);
  };

  const stopSending = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <section className="py-2 custom-login">
        <div className="container bg-light">
          <div className="row">
            <h2 className="text-center p-4">{formUser[currentStep].mainTitle}</h2>
            {/* IMAGEN */}
            <div className="col-12 col-md-6 py-3">
              <img src={formUser[currentStep].imageSrc} className="img-fluid" />
            </div>
            {/* FORMULARIO */}
            <div className="col-12 col-md-6 py-3">
              <form onSubmit={stopSending}>
                <h2>{formUser[currentStep].secondaryTitle}</h2>
                <p>{formUser[currentStep].description}</p>
                {formUser[currentStep].component}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end py-2">
                  <button className="btn btn-primary m-3" onClick={handleBack}> Atrás </button>
                  <button className="btn btn-primary m-3" onClick={handleNext}> Siguiente </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingUpForm;
