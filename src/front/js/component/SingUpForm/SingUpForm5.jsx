import React from "react";

import { Link } from "react-router-dom";

import useAppContext from "../../store/AppContext.js";

import "../SingUpForm/singup-form.css";

const SingUpForm5 = () => {

    const {store, actions} = useAppContext();

    const handleChangeLocalidadPropietario = (event) => actions.setLocalidadPropietario(event.target.value);


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
                <h2 className="pb-2">Información personal</h2>
                <p className="pb-2">Cuéntanos un poquito acerca de ti.</p>

                <div className="d-grid gap-2">
                  <label htmlFor="foto-usuario" className="form-label">
                    Foto de perfil
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="foto-usuario"
                    value={store.fotoPropietario}
                    onChange={(e) => actions.setFotoPropietario(e.target.value)}
                  />

                  <div className="py-2">
                    <label htmlFor="nombre-usuario" className="form-label">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre-usuario"
                      aria-describedby="nombre_usuario"
                      placeholder="Nombre del usuario"
                      value={store.nombrePropietario}
                      onChange={(e) => actions.setNombrePropietario(e.target.value)}
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label htmlFor="apellidos-usuario" className="form-label">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidos-usuario"
                      aria-describedby="apellidos_usuario"
                      placeholder="Apellidos del usuario"
                      value={store.apellidosPropietario}
                      onChange={(e) => actions.setApellidosPropietario(e.target.value)}
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label htmlFor="emailRegistroPropietario">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailRegistroPropietario"
                        placeholder="name@example.com"
                        value={store.emailRegistroPropietario}
                        onChange={(e) => actions.setEmailRegistroPropietario(e.target.value)}
                        required
                    />
                </div>

                <div className="py-2">
                    <label htmlFor="passRegistroPropietario">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passRegistroPropietario"
                        placeholder="Password"
                        value={store.passwordRegistroPropietario}
                        onChange={(e) => actions.setPasswordRegistroPropietario(e.target.value)}
                        required
                    />
                </div>

                <div className="py-2">
                    <label htmlFor="direccion-usuario" className="form-label">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion-usuario"
                      aria-describedby="direccion_usuario"
                      placeholder="Dirección del usuario (Calle y número)"
                      value={store.direccionPropietario}
                      onChange={(e) => actions.setDireccionPropietario(e.target.value)}
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label htmlFor="codigo-postal-usuario" className="form-label">
                      Código Postal *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigo-postal-usuario"
                      aria-describedby="codigo_postal_usuario"
                      placeholder="30000"
                      value={store.codigoPostalPropietario}
                      onChange={(e) => actions.setCodigoPostalPropietario(e.target.value)}
                      required
                    />
                  </div>

                  <div className="py-2">
                    <label htmlFor="provincia-propietario" className="form-label">
                      Localidad *
                    </label>
                    <select required name="provincia" id="provincia-propietario" className="form-control" value={store.localidadPropietario} onChange={handleChangeLocalidadPropietario}>
                      <option defaultValue="">Elige Provincia</option>
                      <option value="Álava">Álava</option>
                      <option value="Albacete">Albacete</option>
                      <option value="Alicante">Alicante</option>
                      <option value="Almería">Almería</option>
                      <option value="Asturias">Asturias</option>
                      <option value="Ávila">Ávila</option>
                      <option value="Badajoz">Badajoz</option>
                      <option value="Baleares">Baleares</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Burgos">Burgos</option>
                      <option value="Cáceres">Cáceres</option>
                      <option value="Cádiz">Cádiz</option>
                      <option value="Cantabria">Cantabria</option>
                      <option value="Castellón">Castellón</option>
                      <option value="Ceuta">Ceuta</option>
                      <option value="Ciudad Real">Ciudad Real</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Cuenca">Cuenca</option>
                      <option value="Gerona">Gerona</option>
                      <option value="Granada">Granada</option>
                      <option value="Guadalajara">Guadalajara</option>
                      <option value="Guipúzcoa">Guipúzcoa</option>
                      <option value="Huelva">Huelva</option>
                      <option value="Huesca">Huesca</option>
                      <option value="Jaén">Jaén</option>
                      <option value="La Coruña">La Coruña</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Las Palmas">Las Palmas</option>
                      <option value="León">León</option>
                      <option value="Lérida">Lérida</option>
                      <option value="Lugo">Lugo</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Málaga">Málaga</option>
                      <option value="Melilla">Melilla</option>
                      <option value="Murcia">Murcia</option>
                      <option value="Navarra">Navarra</option>
                      <option value="Orense">Orense</option>
                      <option value="Palencia">Palencia</option>
                      <option value="Pontevedra">Pontevedra</option>
                      <option value="Salamanca">Salamanca</option>
                      <option value="Segovia">Segovia</option>
                      <option value="Sevilla">Sevilla</option>
                      <option value="Soria">Soria</option>
                      <option value="Tarragona">Tarragona</option>
                      <option value="Tenerife">Tenerife</option>
                      <option value="Teruel">Teruel</option>
                      <option value="Toledo">Toledo</option>
                      <option value="Valencia">Valencia</option>
                      <option value="Valladolid">Valladolid</option>
                      <option value="Vizcaya">Vizcaya</option>
                      <option value="Zamora">Zamora</option>
                      <option value="Zaragoza">Zaragoza</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="telefono-propietario" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono-propietario"
                      aria-describedby="telefono"
                      placeholder="666123456"
                      value={store.telefonoPropietario}
                      onChange={(e) => actions.setTelefonoPropietario(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                  <Link to="/sign-up-form4">
                    <button className="btn btn-primary m-2 w-100" type="submit">
                      Atrás
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="btn btn-primary m-2 w-100" type="submit" onClick={(e) => actions.handleSubmitRegisterPropietario(e)}>
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
export default SingUpForm5;