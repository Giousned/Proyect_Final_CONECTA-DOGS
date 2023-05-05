import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAppContext from "../store/AppContext.js";

import PersonalInformation from "../component/Forms/PersonalInformation.jsx";

const formUser = {
    imageSrc: "https://cdn.pixabay.com/photo/2017/09/08/03/49/couple-2727559_960_720.png",
    mainTitle: "REGISTRO DE USUARIOS",
    secondaryTitle: "Información personal",
    description: "Cuéntanos un poquito acerca de ti.",
    component: <PersonalInformation disable={false} />
}


const SingUpForm = () => {

  const { store, actions } =useAppContext();

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    actions.handleRegister(e)

    navigate("/log-in-form");
  };


  return (
    <>
      <section className="py-4 custom-login">
        <div className="container border border-primary custom-form bg-light">
          <div className="row">
            <h2 className="text-center border border-primary p-4">{formUser.mainTitle}</h2>
            {/* IMAGEN */}
            <div className="col-12 col-md-6 py-3">
              <img src={formUser.imageSrc} className="img-fluid" />
            </div>
            {/* FORMULARIO */}
            <div className="col-12 col-md-6 py-3">
              <form>
                <h2 className="text-center">{formUser.secondaryTitle}</h2>
                <p className="text-center">{formUser.description}</p>
                {formUser.component}

                <div id="helpLogIn" className="form-text fs-8 fst-italic d-flex justify-content-end py-2">
                  Los campos marcados con * son obligatorios.
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end py-4">
                  <Link to="/log-in-form"><button className="action-button shadow animate blue"> Atrás </button></Link>
                  <button className="action-button shadow animate blue" type="submit" onClick={handleSubmit}> Enviar </button>
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
