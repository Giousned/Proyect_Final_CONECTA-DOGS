import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../store/AppContext.js";

import "../SignUpForm/signup-form.css";

const SignUpForm4 = () => {

    const {store, actions} = useAppContext();

    const handleCheckGuarderiaDiurna = () => actions.setGuarderiaDiurna(!guarderiaDiurna);
    const handleCheckPaseo = () => actions.setPaseo(!paseo);
    const handleCheckGuarderiaNocturna = () => actions.setGuarderiaNocturna(!guarderiaNocturna);


  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2018/04/09/14/17/woman-3304166_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Información adicional</h2>
                <p className="pb-2">¿Qué servicios ofreces y a qué precio?</p>

                    <label htmlFor="tamaño" className="form-label">
                      Servicios
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-mtn">
                      <label className="form-check-label" htmlFor="guarderia-diurna">
                        Guardería Diurna
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="guarderiaDiurna"
                        id="guarderia-diurna"
                        value={store.guarderiaDiurna}
                        onChange={handleCheckGuarderiaDiurna}
                        checked={store.guarderiaDiurna}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="precio-guarderia-diurna"
                        aria-describedby="precio_guarderia_diurna"
                        placeholder="Precio en €"
                        value={store.precioGuarderiaDiurna}
                        onChange={(e) => actions.setPrecioGuarderiaDiurna(e.target.value)}
                      />
                    </div>

                    <div className="form-check form-check-inline dog-mtn">
                      <label className="form-check-label" htmlFor="paseo">
                        Paseo
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="paseo"
                        id="paseo"
                        value={store.paseo}
                        onChange={handleCheckPaseo}
                        checked={store.paseo}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="precio-paseo"
                        aria-describedby="precio_paseo"
                        placeholder="Precio en €"
                        value={store.precioPaseo}
                        onChange={(e) => actions.setPrecioPaseo(e.target.value)}
                      />
                    </div>

                    <div className="form-check form-check-inline dog-mtn">
                      <label className="form-check-label" htmlFor="guarderia-nocturna">
                        Guardería Nocturna
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="guarderiaNocturna"
                        id="guarderia-nocturna"
                        value={store.guarderiaNocturna}
                        onChange={handleCheckGuarderiaNocturna}
                        checked={store.guarderiaNocturna}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="precio-guarderia-nocturna"
                        aria-describedby="precio_guarderia_nocturna"
                        placeholder="Precio en €"
                        value={store.precioGuarderiaNocturna}
                        onChange={(e) => actions.setPrecioGuarderiaNocturna(e.target.value)}
                      />
                    </div>


                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/">
                    <button className="btn btn-primary m-2 w-100" type="submit" onClick={(e) => actions.handleSubmitRegisterCuidador(e)}>
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
export default SignUpForm4;
