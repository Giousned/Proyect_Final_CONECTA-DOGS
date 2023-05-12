import React from "react";

import useAppContext from "../../store/AppContext.js";
import "./FormsStyles.css";


const PersonalInformation = (props) => {

    const { store, actions } = useAppContext();

    return (
        <>
            <div className="d-grid row g-3">
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
                            readOnly={props.disable}
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
                    <div className="col">
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

                    <div className="col ms-2">
                        <label htmlFor="pais-user" className="form-label">
                            País *
                        </label>
                        <select required id="pais-user" className="form-select"
                            name="country" value={store.userInput.country}
                            onChange={actions.handleUserInput}>
                            <option defaultValue="">Elige País</option>
                            <option value="Albania">Albania</option>
                            <option value="Germany">Alemania</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Austria">Austria</option>
                            <option value="Belarus">Bielorrusia</option>
                            <option value="Belgium">Bélgica</option>
                            <option value="Bosnia and Herzegovina">Bosnia y Herzegovina</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Croatia">Croacia</option>
                            <option value="Denmark">Dinamarca</option>
                            <option value="Slovakia">Eslovaquia</option>
                            <option value="Slovenia">Eslovenia</option>
                            <option value="Spain">España</option>
                            <option value="Vatican">Estado Vaticano</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finland">Finlandia</option>
                            <option value="France">Francia</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Grecia</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Hungary">Hungría</option>
                            <option value="Iceland">Islandia</option>
                            <option value="Ireland">Irlanda</option>
                            <option value="Isle of Man">Isla del hombre</option>
                            <option value="Italy">Italia</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Letonia</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lituania</option>
                            <option value="Luxembourg">Luxemburgo</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Malta">Malta</option>
                            <option value="Moldova">Moldavia</option>
                            <option value="Monaco">Mónaco</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Norway">Noruega</option>
                            <option value="Netherlands">Países Bajos</option>
                            <option value="Poland">Polonia</option>
                            <option value="Portugal">Portugal</option>
                            <option value="United Kingdom">Reino Unido</option>
                            <option value="Czech Republic">Republica Checa</option>
                            <option value="Romania">Rumania</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Sweden">Suecia</option>
                            <option value="Switzerland">Suiza</option>
                            <option value="Ukraine">Ucrania</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="telefono-user" className="form-label">
                            Teléfono *
                        </label>
                        <input className="form-control" type="tel" id="telefono-user"
                            aria-describedby="telefono" placeholder="666123456"
                            name="phone" value={store.userInput.phone}
                            onChange={actions.handleUserInput}
                            required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="fecha-nacimiento-user" className="form-label">
                            Fecha Nacimiento *
                        </label>
                        <input className="form-control" type="date" id="fecha-nacimiento-user"
                            aria-describedby="fecha-nacimiento"
                            name="birthdate"
                            value={store.userInput.birthdate}
                            onChange={actions.handleUserInput}
                            required />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalInformation;



{/* <div className="my-3">
    <h5>¿Cómo quieres registrarte?</h5>
    <p>Elige una opción</p>
    <div className="row g-2">
        <div className="col-md">
            <div className="form-floating">
                <div className={"glowing-register" + ((userInput.radioOwnerCarer == "owner") ? " activeGlow" : "")}>
                    <input type="radio" id="owner"
                        name="radioOwnerCarer" value="owner"
                        onChange={actions.handleUserInput}
                        checked={userInput.radioOwnerCarer == "owner"} />
                    <label htmlFor="owner">Propietario</label>
                </div>
            </div>
        </div>
        <div className="col-md">
            <div className="form-floating">
                <div className={"glowing-register" + ((userInput.radioOwnerCarer == "carer") ? " activeGlow" : "")}>
                    <input type="radio" id="carer"
                        name="radioOwnerCarer" value="carer"
                        onChange={actions.handleUserInput}
                        checked={userInput.radioOwnerCarer == "carer"} />
                    <label htmlFor="carer">Cuidador</label>
                </div>
            </div>
        </div>
    </div>
</div> */}


// Checkbox.propTypes = {
// value: PropTypes.bool,
// actions.handleClick: PropTypes.func,
// label: PropTypes.string,
// };