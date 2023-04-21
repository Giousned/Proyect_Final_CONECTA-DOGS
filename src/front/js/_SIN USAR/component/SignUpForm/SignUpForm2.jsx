import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAppContext from "../../store/AppContext.js";

import "../SignUpForm/signup-form.css";

const SignUpForm2 = () => {

  const { store, actions } = useAppContext();

  const handleChangeGeneroPerro = (event) => actions.setGeneroPerro(event.target.value);

  const handleCheckTamanoPequeno = () => actions.setTamanoPequeno(!store.tamanoPequeno);
  const handleCheckTamanoMediano = () => actions.setTamanoMediano(!store.tamanoMediano);
  const handleCheckTamanoGrande = () => actions.setTamanoGrande(!store.tamanoGrande);
  const handleCheckTamanoGigante = () => actions.setTamanoGigante(!store.tamanoGigante);

  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/22/17/29/shitzu-7539692_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Información de mi perro</h2>
                <p className="pb-2">
                  Cuéntanos un poquito acerca de tu perro, así podremos ayudarte
                  a encontrar el cuidador perfecto.
                </p>
                <div className="d-grid gap-2">
                  <label htmlFor="foto-perro" className="form-label">
                    Foto del perro
                  </label>
                  <input className="form-control" type="file" id="foto-perro" value={store.fotoPerro} onChange={(e) => actions.setFotoPerro(e.target.value)} />

                  <div className="py-2">
                    <label htmlFor="nombre-perro" className="form-label">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre-perro"
                      aria-describedby="nombre_perro"
                      placeholder="Nombre del perro"
                      value={store.nombrePerro}
                      onChange={(e) => actions.setNombrePerro(e.target.value)}
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label htmlFor="raza-perro" className="form-label">
                      Raza *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="raza-perro"
                      aria-describedby="raza_perro"
                      placeholder="Raza del perro"
                      value={store.razaPerro}
                      onChange={(e) => actions.setRazaPerro(e.target.value)}
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label htmlFor="cumple-perro" className="form-label">
                      Fecha de nacimiento *
                    </label>
                    <br />
                    <DatePicker
                      id="cumple-perro"
                      className="text-center"
                      selected={store.nacimientoPerro}
                      onChange={(date) => actions.setNacimientoPerro(date)}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                    />
                    <div className="form-text">
                      Ejemplo: 04-2023
                    </div>
                  </div>

                  <div className="py-2">
                    <label htmlFor="sexo-dog" className="form-label">
                      Sexo *
                    </label>
                    <select className="form-select" aria-label="Sexo del perro" value={store.generoPerro} onChange={handleChangeGeneroPerro}>
                      <option defaultValue="">Elige una opción</option>
                      <option value="Hembra">Hembra</option>
                      <option value="Macho">Macho</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="tamaño" className="form-label">
                      Tamaño del perro *
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        onChange={handleCheckTamanoPequeno}
                        checked={store.tamanoPequeno}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        onChange={handleCheckTamanoMediano}
                        checked={store.tamanoMediano}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        onChange={handleCheckTamanoGrande}
                        checked={store.tamanoGrande}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                      </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        onChange={handleCheckTamanoGigante}
                        checked={store.tamanoGigante}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4"
                      >
                        <i className="fas fa-paw"></i> Gigante (+46kg)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/sign-up-form">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Atrás
                    </button>
                  </Link>
                  <Link to="/sign-up-form3">
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
export default SignUpForm2;


// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}


// Checkbox.propTypes = {
// 	value: PropTypes.bool,
//   handleClick: PropTypes.func,
//   label: PropTypes.string,
// };