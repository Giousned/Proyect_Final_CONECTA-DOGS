import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../store/AppContext.js";
import "../SignUpForm/signup-form.css";

const SignUpForm3 = () => {

  const { store, actions } = useAppContext();

  const handleChangeEsterilizado = (event) => actions.setEsterilizado(event.target.value);
  const handleChangeSociableGatos = (event) => actions.setSociableGatos(event.target.value);
  const handleChangeSociableKids = (event) => actions.setSociableKids(event.target.value);
  const handleChangeSociablePerros = (event) => actions.setSociablePerros(event.target.value);
  const handleCheckActividadBaja = () => actions.setActividadBaja(!actividadBaja);
  const handleCheckActividadMedia = () => actions.setActividadMedia(!actividadMedia);
  const handleCheckActividadAlta = () => actions.setActividadAlta(!actividadAlta);



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
                      ¿Tu perro está esterilizado? *
                    </label>
                    <select className="form-select" aria-label="estirilizado" value={store.esterilizado} onChange={handleChangeEsterilizado} required>
                      <option defaultValue="">Elige una opción</option>
                      <option value="True">Sí</option>
                      <option value="False">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sociable-gatos" className="form-label">
                      ¿Tu perro es sociable con gatos? *
                    </label>
                    <select className="form-select" aria-label="sociable-gatos" value={store.sociableGatos} onChange={handleChangeSociableGatos} required>
                      <option defaultValue="">Elige una opción</option>
                      <option value="True">Sí</option>
                      <option value="False">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sociable-niños" className="form-label">
                      ¿Tu perro es sociable con niños? *
                    </label>
                    <select className="form-select" aria-label="sociable-niños" value={store.sociableKids} onChange={handleChangeSociableKids} required>
                      <option defaultValue="">Elige una opción</option>
                      <option value="True">Sí</option>
                      <option value="False">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sociable-perros" className="form-label">
                      ¿Tu perro es sociable con otros perros? *
                    </label>
                    <select className="form-select" aria-label="sociable-perros" value={store.sociablePerros} onChange={handleChangeSociablePerros} required>
                      <option defaultValue="">Elige una opción</option>
                      <option value="True">Sí</option>
                      <option value="False">No</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="tamaño" className="form-label">
                      Nivel de actividad
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="actividad"
                        id="actividad-baja"
                        onChange={handleCheckActividadBaja}
                        checked={store.actividadBaja}
                      />
                      <label className="form-check-label" htmlFor="actividad-baja">
                        Baja
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="actividad"
                        id="actividad-media"
                        onChange={handleCheckActividadMedia}
                        checked={store.actividadMedia}
                      />
                      <label className="form-check-label" htmlFor="actividad-media">
                        Media
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="actividad"
                        id="actividad-alta"
                        onChange={handleCheckActividadAlta}
                        checked={store.actividadAlta}
                      />
                      <label className="form-check-label" htmlFor="actividad-alta">
                        Alta
                      </label>
                    </div>
                  </div>

                  <div className="py-2">
                    <label htmlFor="microchip" className="form-label">
                      Microchip *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="microchip"
                      aria-describedby="micro-chip"
                      placeholder="Microchip del perro"
                      value={store.microchip}
                      onChange={(e) => actions.setMicrochip(e.target.value)}
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
                      value={store.observaciones}
                      onChange={(e) => actions.setObservaciones(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/sign-up-form2">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Atrás
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="btn btn-primary m-2 w-100" type="submit" onClick={(e) => actions.handleSubmitRegisterOwner(e)}>
                      Terminar
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
export default SignUpForm3;


// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}