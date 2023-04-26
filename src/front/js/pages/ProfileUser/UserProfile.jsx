import React, { useState } from "react";
import useUserInput from "../../hooks/useUserInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAppContext from "../../store/AppContext";
import "./user-profile.css";

export const UserProfile = () => {
    const { userInput, handleUserInput } = useUserInput();

    return (
        <>
            <div className="header">
                <button className="btn btn-primary">
                    <div className="text">Cambiar Fondo</div>
                    <i className="fas fa-images fa-sm"></i>
                </button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="avatar-user"></div>

                        <div className="tituloperfil text-center">
                            <h1>Sandra Madarnas</h1>
                            <h3>Estás registrado como: <b className="border rounded bg-light p-2">PROPIETARIO | CUIDADOR</b></h3>
                        </div>

                        <div>
                            <form>
                                <h3>Sobre mí:</h3>
                                <div className="col">
                                    <textarea className="form-control" id="sobre-mi" rows="3">Breve descripción sobre mí...
                                        Puedo editar ya todos los campos ❤️ 🤗 ❤️ 🤗 ❤️</textarea>
                                </div>


                                {/* Fichas - Tabs */}
                                <div className="col my-3">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home-tab-pane" type="button" role="tab"
                                                aria-controls="home-tab-pane" aria-selected="true"> Información de usuario </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                                aria-controls="profile-tab-pane" aria-selected="false"> Información personal </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="services-tab" data-bs-toggle="tab"
                                                data-bs-target="#services-tab-pane" type="button" role="tab"
                                                aria-controls="services-tab-pane" aria-selected="false"> Servicios y Tarifas </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="mydog-tab" data-bs-toggle="tab"
                                                data-bs-target="#mydog-tab-pane" type="button" role="tab"
                                                aria-controls="mydog-tab-pane" aria-selected="false"> Mi Perro </button>
                                        </li>
                                    </ul>

                                    {/* Contenido de las fichas */}
                                    <div className="tab-content" id="myTabContent">

                                        {/* Información de Usuario */}
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                            aria-labelledby="home-tab" tabindex="0">
                                            <div className="form-floating my-1">
                                                <input type="text" className="form-control" id="nombre-usuario"
                                                    placeholder="Sandra"
                                                    value={userInput.name} name="name"
                                                    onChange={handleUserInput} />
                                                <label htmlFor="nombre-usuario">Nombre</label>
                                            </div>

                                            <div className="form-floating my-1">
                                                <input type="text" className="form-control" id="apellidos-usuario"
                                                    placeholder="Madarnas"
                                                    value={userInput.lastname} lastname="name"
                                                    onChange={handleUserInput} />
                                                <label htmlFor="apellidos-usuario">Apellidos</label>
                                            </div>

                                            <div className="form-floating my-1">
                                                <input type="text" className="form-control" id="direccion-usuario"
                                                    placeholder="Algún sitio en España"
                                                    value={userInput.address} name="address"
                                                    onChange={handleUserInput} />
                                                <label htmlFor="direccion-usuario">Dirección</label>
                                            </div>

                                            <div className="form-floating my-1">
                                                <input type="text" className="form-control" id="codigo-postal-usuario"
                                                    placeholder="36200"
                                                    value={userInput.postalcode} name="postalcode"
                                                    onChange={handleUserInput} />
                                                <label htmlFor="codigo-postal-usuario">Código Postal</label>
                                            </div>

                                            {/* <label htmlFor="provincia-user">Localidad</label> */}
                                            <select required id="provincia-user" className="form-select" name="province">
                                                <option defaultValue="">Localidad</option>
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


                                        {/* Información Personal */}
                                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                            aria-labelledby="profile-tab" tabindex="0">
                                            <div className="form-floating my-1">
                                                <input type="email" className="form-control" id="emailRegistroUser"
                                                    placeholder="sandra@gmail.com"
                                                    value={userInput.email} name="email"
                                                    onChange={handleUserInput} />
                                                <label htmlFor="emailRegistroUser">Correo Electrónico</label>
                                            </div>

                                            <div className="form-floating my-1">
                                                <input type="tel" className="form-control" id="telefono-user"
                                                    placeholder="666 123 456"
                                                    value={userInput.phone} name="phone"
                                                    onChange={handleUserInput} />
                                                <label htmlFor="telefono-user">Teléfono</label>
                                            </div>
                                        </div>


                                        {/* Servicios - Tarifas */}
                                        <div className="tab-pane fade" id="services-tab-pane" role="tabpanel"
                                            aria-labelledby="services-tab" tabindex="0">
                                            <div className="form-check form-check-inline py-2">
                                                <label className="form-check-label" htmlFor="guarderia-diurna">
                                                    Guardería Diurna (Alojamiento de día)
                                                </label>
                                                <input type="checkbox" className="form-check-input"
                                                    name="nurseryDay" id="guarderia-diurna" />
                                                <input type="text" className="form-control"
                                                    id="precio-guarderia-diurna" aria-describedby="precio_guarderia_diurna"
                                                    placeholder="15€" value={userInput.priceNurseryDay} name="priceNurseryDay"
                                                    onChange={handleUserInput} />
                                            </div>

                                            <div className="form-check form-check-inline py-2">
                                                <label className="form-check-label" htmlFor="paseo">
                                                    Paseo (Por horas)
                                                </label>
                                                <input type="checkbox" className="form-check-input"
                                                    name="walk" id="paseo" />
                                                <input type="text" className="form-control"
                                                    id="precio-paseo" aria-describedby="precio_paseo"
                                                    placeholder="15€" value={userInput.priceWalk} name="priceWalk"
                                                    onChange={handleUserInput} />
                                            </div>

                                            <div className="form-check form-check-inline py-2">
                                                <label className="form-check-label" htmlFor="guarderia-nocturna">
                                                    Guardería Nocturna (Alojamiento de noche)
                                                </label>
                                                <input type="checkbox" className="form-check-input" />
                                                <input type="text" className="form-control"
                                                    id="precio-guarderia-nocturna" aria-describedby="precio_guarderia_nocturna"
                                                    placeholder="15€" value={userInput.priceNurseryNight} name="priceNurseryNight"
                                                    onChange={handleUserInput} />
                                            </div>
                                        </div>


                                        {/* Mi Perro */}
                                        <div className="tab-pane fade" id="mydog-tab-pane" role="tabpanel"
                                            aria-labelledby="mydog-tab" tabindex="0">
                                            <h3 className="my-2">Datos del perro</h3>

                                            <div className="avatar-dog my-3"></div>

                                            <div className="container">

                                                <div className="row">
                                                    <div className="input-group">
                                                        <div className="col me-2">
                                                            <div className="form-floating my-1">
                                                                <input type="text" className="form-control" id="dogName"
                                                                    placeholder="Pelusa"
                                                                    value={userInput.dogname} name="dogname"
                                                                    onChange={handleUserInput} />
                                                                <label htmlFor="dogName">Nombre del Perro</label>
                                                            </div>
                                                        </div>

                                                        <div className="col ms-2">
                                                            <div className="form-floating my-1">
                                                                <input type="text" className="form-control" id="breed"
                                                                    placeholder="ShitZu"
                                                                    value={userInput.breed} name="breed"
                                                                    onChange={handleUserInput} />
                                                                <label htmlFor="breed">Raza</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col me-2">
                                                        <div className="form-floating my-1">
                                                            <DatePicker
                                                                id="nacimientoPerro" className="form-control p-3"
                                                                name="nacimientoPerro"
                                                                value={userInput.nacimientoPerro}
                                                                onChange={handleUserInput}
                                                                dateFormat="MM/yyyy" showMonthYearPicker
                                                            />
                                                            <label htmlFor="nacimientoPerro">Fecha de Nacimiento del Perro</label>
                                                        </div>
                                                    </div>

                                                    <div className="col ms-2">
                                                        <div className="form-floating my-1">
                                                            <select className="form-select " aria-label="Sexo del perro"
                                                                name="generoPerro" value={userInput.generoPerro}
                                                                onChange={handleUserInput}>
                                                                <option defaultValue="">Elige una opción</option>
                                                                <option value="Hembra">Hembra</option>
                                                                <option value="Macho">Macho</option>
                                                            </select>
                                                            <label htmlFor="sexo-dog">Sexo del Perro</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col me-2">

                                                        <h2>AQUI SIGUE METIENDO LA INFO DE LOS DATOS DEL PERRO SIGUIENDO LA MISMA ARQUITECTURA</h2>

                                                    </div>
                                                </div>


                                                {/* /container */}
                                            </div>
                                        </div>
                                        {/* /Tab */}
                                    </div>
                                </div>

                                <div className="col my-3">
                                    <button className="btn btn-primary mx-2">Cambiar la contraseña</button>
                                    <button type="submit" className="btn btn-primary mx-2">Guardar cambios</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
