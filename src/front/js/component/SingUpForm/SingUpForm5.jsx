import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";
import "../SingUpForm/signUp_form.js";

const SingUpForm5 = () => {
    return (
        <>
            <section className="py-2 custom-login">
                <div className="container p-2 bg-light">
                    <div className="row">
                        {/* <h2 className="text-center p-4">INGRESAR</h2> */}

                        <div className="col-12 col-md-6 py-3">
                            <img src="https://cdn.pixabay.com/photo/2018/04/09/14/17/woman-3304166_1280.jpg" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 p-2">
                            <form>
                                <h2 className="pb-2">Información personal</h2>
                                <p className="pb-2">Cuéntanos un poquito acerca de ti.</p>

                                <div className="d-grid gap-2">
                                    <label for="foto-usuario" class="form-label">Foto de perfil</label>
                                    <input class="form-control" type="file" id="foto-usuario" />

                                    <div className="py-2">
                                        <label for="nombre-usuario" class="form-label">Nombre *</label>
                                        <input type="nombre_usuario" class="form-control" id="nombre-usuario" aria-describedby="nombre_usuario" required />
                                        <div id="nombre_usuario" class="form-text">Nombre del usuario</div>
                                    </div>

                                    <div className="py-2">
                                        <label for="apellidos-usuario" class="form-label">Apellidos *</label>
                                        <input type="apellidos_usuario" class="form-control" id="apellidos-usuario" aria-describedby="apellidos_usuario" required />
                                        <div id="apellidos_usuario" class="form-text">Apellidos del usuario</div>
                                    </div>

                                    <div className="py-2">
                                        <label for="provincia" class="form-label">Localidad *</label>
                                        <select required name="provincia" class="form-control">
                                            <option value="">Elige Provincia</option>
                                            <option value="Álava/Araba">Álava/Araba</option>
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
                                            <option value="Gerona/Girona">Gerona/Girona</option>
                                            <option value="Granada">Granada</option>
                                            <option value="Guadalajara">Guadalajara</option>
                                            <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                                            <option value="Huelva">Huelva</option>
                                            <option value="Huesca">Huesca</option>
                                            <option value="Jaén">Jaén</option>
                                            <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                                            <option value="La Rioja">La Rioja</option>
                                            <option value="Las Palmas">Las Palmas</option>
                                            <option value="León">León</option>
                                            <option value="Lérida/Lleida">Lérida/Lleida</option>
                                            <option value="Lugo">Lugo</option>
                                            <option value="Madrid">Madrid</option>
                                            <option value="Málaga">Málaga</option>
                                            <option value="Melilla">Melilla</option>
                                            <option value="Murcia">Murcia</option>
                                            <option value="Navarra">Navarra</option>
                                            <option value="Orense/Ourense">Orense/Ourense</option>
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
                                            <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
                                            <option value="Zamora">Zamora</option>
                                            <option value="Zaragoza">Zaragoza</option>
                                        </select>
                                    </div>

                                    <div className="py-2">
                                        <label for="telefono" class="form-label">Teléfono *</label>
                                        <input type="telefono" class="form-control" id="telefono" aria-describedby="telefono" required />
                                    </div>

                                </div>

                                <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                                    <Link to="/SingUpForm4">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Atrás</button>
                                    </Link>
                                    <Link to="/SingUpForm5">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Terminar</button>
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