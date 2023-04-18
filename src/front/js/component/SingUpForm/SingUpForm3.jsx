import React from "react";

import { Link } from "react-router-dom";

import useAppContext from "../../store/AppContext.js";

import "../SingUpForm/singup-form.css";

const SingUpForm3 = () => {

    const {store, actions} = useAppContext();

  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/29/04/10/dog-4979248_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Información de mi perro</h2>
                <p className="pb-2">
                  Cuéntanos otro poquito acerca de tu perro...
                </p>

                <div className="d-grid gap-2">
                  <div className="py-2">
                    <label htmlFor="estirilizado" className="form-label">
                      ¿Tu perro está esterilizado?
                    </label>
                    <select className="form-select" aria-label="estirilizado">
                      <option defaultValue>Elige una opción</option>
                      <option value="3">Sí</option>
                      <option value="4">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sociable-gatos" className="form-label">
                      ¿Tu perro es sociable con gatos?
                    </label>
                    <select className="form-select" aria-label="sociable-gatos">
                      <option defaultValue>Elige una opción</option>
                      <option value="5">Sí</option>
                      <option value="6">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sociable-niños" className="form-label">
                      ¿Tu perro es sociable con niños?
                    </label>
                    <select className="form-select" aria-label="sociable-niños">
                      <option defaultValue>Elige una opción</option>
                      <option value="7">Sí</option>
                      <option value="8">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sociable-perros" className="form-label">
                      ¿Tu perro es sociable con otros perros?
                    </label>
                    <select
                      className="form-select"
                      aria-label="sociable-perros"
                    >
                      <option defaultValue>Elige una opción</option>
                      <option value="9">Sí</option>
                      <option value="10">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="microchip" className="form-label">
                      Microchip *
                    </label>
                    <input
                      type="micro-chip"
                      className="form-control"
                      id="microchip"
                      aria-describedby="micro-chip"
                      placeholder="Microchip del perro"
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label
                      htmlFor="FormControlTextarea1"
                      className="form-label"
                    >
                      Observaciones
                    </label>
                    <textarea
                      className="form-control"
                      id="FormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/sign-up-form2">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Atrás
                    </button>
                  </Link>
                  <Link to="/sign-up-form4">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Siguiente
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingUpForm3;


// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}