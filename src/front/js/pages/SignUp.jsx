import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useAppContext from "../store/AppContext.js";

const SingUpForm = () => {
  const [step, setStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({});
  //const [formUser, setFormUser] = useState(0);

  // Crear un objeto que contiene diferentes valores de formulario de usuario
  const formUser = {
    
    imageSrc: "https://cdn.pixabay.com/photo/2019/02/07/16/26/cocker-spaniel-3981587_1280.jpg",
    mainTitle: "REGISTRO DE USUARIOS",
    secondaryTitle: "Información personal",
    description: "Cuéntanos un poquito acerca de ti."

  // 1 : {
  //   imageSrc: "https://cdn.pixabay.com/photo/2019/02/07/16/26/cocker-spaniel-3981587_1280.jpg",
  //   mainTitle: "REGISTRO DE USUARIOS222",
  //   secondaryTitle: "Información personal222",
  //   description: "Cuéntanos un poquito acerca de ti222."
  // }
}

const handleNext = () => {
  setStep(step + 1);
};

const handleBack = () => {
  setStep(step - 1);
};


  // const mockup = () => {}

  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">{formUser.mainTitle}</h2>
            {/* IMAGEN */}
            <div className="col-12 col-md-6 py-3">
              <img src={formUser.imageSrc} className="img-fluid" />
            </div>
            {/* FORMULARIO */}
            <div className="col-12 col-md-6 p-2">
              <form action="" method="get">
                <h2 className="pb-2">{formUser.secondaryTitle}</h2>
                <p className="pb-2">{formUser.description}</p>
                <button className="btn-primary p-2" onClick={handleNext}>SIGUIENTE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingUpForm;
