import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";

const SingUpForm4 = () => {
  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">
            {/* <h2 className="text-center p-4">INGRESAR</h2> */}

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2019/05/27/12/04/welsh-corgi-pembroke-4232496_1280.jpg"
                className="img-fluid"
              />
            </div>

                        <div className="col-12 col-md-6 p-2">
                            <form>
                                <h2 className="pb-2">Información de mi perro</h2>
                                <p className="pb-2">Cuéntanos un poquito acerca de tu perro, así podremos ayudarte a encontrar el cuidador perfecto.</p>
                                <hr />
                                <h3 className="pb-2">Instrucciones para el cuidador</h3>
                                <p className="pb-2">Esta información estará disponible para los cuidadores al solicitar la reserva.</p>
                                <div className="d-grid gap-2">

                                    <div className="py-2">
                                        <label for="racion-comida" class="form-label">Ración diaria de comida</label>
                                        <input type="racion_comida" class="form-control" id="racion-comida" aria-describedby="racion_comida"
                                            placeholder="En gramos (gr)" />
                                    </div>

                  <div className="py-2">
                    <label htmlFor="tamaño" className="form-label">
                      Horario de comidas
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="comidas"
                        id="mañana1"
                        value="mañana"
                      />
                      <label className="form-check-label" htmlFor="mañana1">
                        Mañana
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="comidas"
                        id="tarde1"
                        value="tarde"
                      />
                      <label className="form-check-label" htmlFor="tarde1">
                        Tarde
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="comidas"
                        id="noche1"
                        value="noche"
                      />
                      <label className="form-check-label" htmlFor="noche1">
                        Noche
                      </label>
                    </div>
                  </div>

                  <div className="py-2">
                    <label htmlFor="tamaño" className="form-label">
                      Horario de paseos
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="paseos"
                        id="mañana2"
                        value="mañana"
                      />
                      <label className="form-check-label" htmlFor="mañana2">
                        Mañana
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="paseos"
                        id="tarde2"
                        value="tarde"
                      />
                      <label className="form-check-label" htmlFor="tarde2">
                        Tarde
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="paseos"
                        id="noche2"
                        value="noche"
                      />
                      <label className="form-check-label" htmlFor="noche2">
                        Noche
                      </label>
                    </div>
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
                        id="bajo"
                        value="bajo"
                      />
                      <label className="form-check-label" htmlFor="bajo">
                        Bajo
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="actividad"
                        id="medio"
                        value="medio"
                      />
                      <label className="form-check-label" htmlFor="medio">
                        Medio
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="actividad"
                        id="moderado"
                        value="moderado"
                      />
                      <label className="form-check-label" htmlFor="moderado">
                        Moderado
                      </label>
                    </div>
                  </div>

                  <div className="py-2">
                    <label
                      htmlFor="FormControlTextarea2"
                      className="form-label"
                    >
                      Escribe aquí lo que desees indicarle al cuidador. Por ej:
                      si tu perro tiene alguna alergia, si toma alguna
                      medicación, algo que deban saber antes de pasear a tu
                      perro, etc.
                    </label>
                    <textarea
                      className="form-control"
                      id="FormControlTextarea2"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/sign-up-form3">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Atrás
                    </button>
                  </Link>
                  <Link to="/sign-up-form5">
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
export default SingUpForm4;
