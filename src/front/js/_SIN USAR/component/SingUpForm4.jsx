import React from "react";

import { Link } from "react-router-dom";

import useAppContext from "../../store/AppContext.js";

import "../SingUpForm/singup-form.css";

const SingUpForm4 = () => {

    const {store, actions} = useAppContext();

    const handleCheckHorarioComidaManana = () => actions.setHorarioComidaManana(!horarioComidaManana);
    const handleCheckHorarioComidaTarde = () => actions.setHorarioComidaTarde(!horarioComidaTarde);
    const handleCheckHorarioComidaNoche = () => actions.setHorarioComidaNoche(!horarioComidaNoche);
    const handleCheckHorarioPaseosManana = () => actions.setHorarioPaseosManana(!horarioPaseosManana);
    const handleCheckHorarioPaseosTarde = () => actions.setHorarioPaseosTarde(!horarioPaseosTarde);
    const handleCheckHorarioPaseosNoche = () => actions.setHorarioPaseosNoche(!horarioPaseosNoche);

  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2019/05/27/12/04/welsh-corgi-pembroke-4232496_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Información de mi perro</h2>
                <p className="pb-2">
                  Cuéntanos un poquito más acerca de tu perro, así podremos ayudarte a encontrar el cuidador perfecto.
                </p>
                <hr />
                <h3 className="pb-2">Instrucciones para el cuidador</h3>
                <p className="pb-2">
                  Esta información estará disponible para los cuidadores al solicitar la reserva.
                </p>
                <div className="d-grid gap-2">
                  <div className="py-2">
                    <label htmlFor="racion-comida" className="form-label">
                      Ración diaria de comida
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="racion-comida"
                      aria-describedby="racion_comida"
                      placeholder="En kilogramos (kg)"
                      value={store.racionComida}
                      onChange={(e) => actions.setRacionComida(e.target.value)}
                    />
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
                        id="horario-comida-mañana"
                        value={store.horarioComidaManana}
                        onChange={handleCheckHorarioComidaManana}
                        checked={store.horarioComidaManana}
                      />
                      <label className="form-check-label" htmlFor="horario-comida-mañana">
                        Mañana
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="comidas"
                        id="horario-comida-tarde"
                        value={store.horarioComidaTarde}
                        onChange={handleCheckHorarioComidaTarde}
                        checked={store.horarioComidaTarde}
                      />
                      <label className="form-check-label" htmlFor="horario-comida-tarde">
                        Tarde
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="comidas"
                        id="horario-comida-noche"
                        value={store.horarioComidaNoche}
                        onChange={handleCheckHorarioComidaNoche}
                        checked={store.horarioComidaNoche}
                      />
                      <label className="form-check-label" htmlFor="horario-comida-noche">
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
                        id="horario-paseos-mañana"
                        value={store.horarioPaseosManana}
                        onChange={handleCheckHorarioPaseosManana}
                        checked={store.horarioPaseosManana}
                      />
                      <label className="form-check-label" htmlFor="horario-paseos-mañana">
                        Mañana
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="paseos"
                        id="horario-paseos-tarde"
                        value={store.horarioPaseosTarde}
                        onChange={handleCheckHorarioPaseosTarde}
                        checked={store.horarioPaseosTarde}
                      />
                      <label className="form-check-label" htmlFor="horario-paseos-tarde">
                        Tarde
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="paseos"
                        id="horario-paseos-noche"
                        value={store.horarioPaseosNoche}
                        onChange={handleCheckHorarioPaseosNoche}
                        checked={store.horarioPaseosNoche}
                      />
                      <label className="form-check-label" htmlFor="horario-paseos-noche">
                        Noche
                      </label>
                    </div>
                  </div>



                  <div className="py-2">
                    <label
                      htmlFor="FormControlTextarea2"
                      className="form-label"
                    >
                      Escribe aquí lo que desees indicarle al cuidador. Por ej: si tu perro tiene alguna alergia, si toma alguna
                      medicación, algo que deban saber antes de pasear a tu perro, o cualquier otra cosa importante y a tener en cuenta.
                    </label>
                    <textarea
                      className="form-control"
                      id="FormControlTextarea2"
                      rows="3"
                      value={store.masInformacionPerros}
                      onChange={(e) => actions.setMasInformacionPerros(e.target.value)}
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


// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}