import React from "react";

import useAppContext from "../../store/AppContext";
import "./signup-form.css";

const PersonalInformation = () => {

    const { store, actions } = useAppContext();

    return (
        <>
            <div className="d-grid row g-3">
                <label htmlFor="foto-usuario" className="form-label">
                    Foto de perfil
                    <input className="form-control" type="file" id="foto-usuario"
                        name="userPhoto" value={store.userInput.userPhoto}
                        onChange={actions.handleUserInput} />
                </label>

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="nombre-usuario" className="form-label">
                            Nombre *
                        </label>
                        <input className="form-control" type="text" id="nombre-usuario"
                            aria-describedby="nombre_usuario" placeholder="Nombre del usuario"
                            name="name" value={store.userInput.name}
                            onChange={actions.handleUserInput}
                            required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="apellidos-usuario" className="form-label">
                            Apellidos *
                        </label>
                        <input className="form-control" type="text" id="apellidos-usuario"
                            aria-describedby="apellidos_usuario" placeholder="Apellidos del usuario"
                            name="lastName" value={store.userInput.lastName}
                            onChange={actions.handleUserInput}
                            required />
                    </div>
                </div>

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="emailRegistroUser" className="form-label">
                            Correo Electrónico *
                        </label>
                        <input className="form-control" type="email" id="emailRegistroUser"
                            placeholder="usuario@ejemplo.com"
                            name="email" value={store.userInput.email}
                            onChange={actions.handleUserInput}
                            required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="passRegistroUser" className="form-label">
                            Contraseña *
                        </label>
                        <input className="form-control" type="password" id="passRegistroUser"
                            placeholder="Contraseña"
                            name="password" value={store.userInput.password}
                            onChange={actions.handleUserInput}
                            required />
                    </div>
                </div>

                <div className="col">
                    <label htmlFor="direccion-usuario" className="form-label">
                        Dirección *
                    </label>
                    <input className="form-control" type="text" id="direccion-usuario"
                        aria-describedby="direccion_usuario" placeholder="Dirección del usuario (Calle y número)"
                        name="address" value={store.userInput.address}
                        onChange={actions.handleUserInput}
                        required />
                </div>

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="codigo-postal-usuario" className="form-label">
                            Código Postal *
                        </label>
                        <input className="form-control" type="text" id="codigo-postal-usuario"
                            aria-describedby="codigo_postal_usuario" placeholder="30000"
                            name="postalCode" value={store.userInput.postalCode}
                            onChange={actions.handleUserInput}
                            required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="provincia-user" className="form-label">
                            Localidad *
                        </label>
                        <select required id="provincia-user" className="form-select"
                            name="province" value={store.userInput.province}
                            onChange={actions.handleUserInput}>
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
                </div>

                <div className="col">
                    <label htmlFor="telefono-user" className="form-label">
                        Teléfono *
                    </label>
                    <input className="form-control" type="tel" id="telefono-user"
                        aria-describedby="telefono" placeholder="666123456"
                        name="phone" value={store.userInput.phone}
                        onChange={actions.handleUserInput}
                        required />
                </div>

                {/* <div className="my-3">
                    <h5>¿Cómo quieres registrarte?</h5>
                    <p>Elige una opción</p>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <div className={"glowing-register" + ((store.userInput.radioOwnerCarer == "owner") ? " activeGlow" : "")}>
                                    <input type="radio" id="owner"
                                        name="radioOwnerCarer" value="owner"
                                        onChange={actions.handleUserInput}
                                        checked={store.userInput.radioOwnerCarer == "owner"} />
                                    <label htmlFor="owner">Propietario</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className={"glowing-register" + ((store.userInput.radioOwnerCarer == "carer") ? " activeGlow" : "")}>
                                    <input type="radio" id="carer"
                                        name="radioOwnerCarer" value="carer"
                                        onChange={actions.handleUserInput}
                                        checked={store.userInput.radioOwnerCarer == "carer"} />
                                    <label htmlFor="carer">Cuidador</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default PersonalInformation;




// Checkbox.propTypes = {
// value: PropTypes.bool,
// handleClick: PropTypes.func,
// label: PropTypes.string,
// };