import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";

import PersonalInformation from "../component/Forms/PersonalInformation.jsx";
import DogInformation from "../component/Forms/DogInformation.jsx";
import AdditionalInformation from "../component/Forms/AdditionalInformation.jsx";

import useAppContext from "../store/AppContext.js";


const formUser = {
  personalInfo: {
    imageSrc: "https://cdn.pixabay.com/photo/2017/09/08/03/49/couple-2727559_960_720.png",
    mainTitle: "REGISTRO DE USUARIOS",
    secondaryTitle: "Información personal",
    description: "Cuéntanos un poquito acerca de ti.",
    component: <PersonalInformation />
  },
  dogInfo: {
    imageSrc: "https://cdn.pixabay.com/photo/2022/10/22/17/29/shitzu-7539692_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS",
    secondaryTitle: "Información de mi perro",
    description: "Cuéntanos un poquito acerca de tu perro, así podremos ayudarte a encontrar el cuidador perfecto.",
    component: <DogInformation />
  },
  additionalInfo: {
    imageSrc: "https://cdn.pixabay.com/photo/2018/04/09/14/17/woman-3304166_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS",
    secondaryTitle: "Información adicional",
    description: "¿Qué servicios ofreces y a qué precio?",
    component: <AdditionalInformation />
  }
}

const firstStep = "personalInfo";

const SingUpForm = () => {

  const { store, actions } = useAppContext();

  const [currentStep, setCurrentStep] = useState(firstStep);

  const navigate = useNavigate();


  const handleStopSubmit = (e) => {
    e.preventDefault();
  }

  const handleNext = () => {
    if (store.userInput.radioOwnerCarer == "owner") { setCurrentStep("dogInfo") }
    if (store.userInput.radioOwnerCarer == "carer") { setCurrentStep("additionalInfo") }
  };

  const handleBack = () => {
    if (currentStep == firstStep) { return; }
    setCurrentStep("personalInfo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.handleRegister(e)

    navigate("/");
  };


  return (
    <>
      <section className="py-4 custom-login">
        <div className="container border border-primary custom-form bg-light">
          <div className="row">
            <h2 className="text-center border border-primary p-4">{formUser[currentStep].mainTitle}</h2>
            {/* IMAGEN */}
            <div className="col-12 col-md-6 py-3">
              <img src={formUser[currentStep].imageSrc} className="img-fluid" />
            </div>
            {/* FORMULARIO */}
            <div className="col-12 col-md-6 py-3">
              <form onSubmit={handleStopSubmit}>
                <h2 className="text-center">{formUser[currentStep].secondaryTitle}</h2>
                <p className="text-center">{formUser[currentStep].description}</p>
                {formUser[currentStep].component}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end py-2">
                  <button className="btn btn-primary m-3" onClick={handleBack}> Atrás </button>
                  {currentStep == "personalInfo"
                    ? <button className="btn btn-primary m-3" onClick={handleNext}> Siguiente </button>
                    : <button className="btn btn-primary m-3" type="submit" onClick={handleSubmit}> Enviar </button>
                  }
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
