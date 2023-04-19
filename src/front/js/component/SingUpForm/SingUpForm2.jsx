import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";
import "../SingUpForm/signUp_form.js";

const SingUpForm2 = () => {
    return (
        <>
            <section className="py-2 custom-login">
                <div className="container p-2 bg-light">
                    <div className="row">

                        <div className="col-12 col-md-6 py-3">
                            <img src="https://cdn.pixabay.com/photo/2022/10/22/17/29/shitzu-7539692_1280.jpg" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 p-2">
                            <form>
                                <h2 className="pb-2">Información de mi perro</h2>
                                <p className="pb-2">Cuéntanos un poquito acerca de tu perro, así podremos ayudarte a encontrar el cuidador perfecto.</p>

                                <div className="d-grid gap-2">
                                    <label for="foto-perro" class="form-label">Foto del perro</label>
                                    <input class="form-control" type="file" id="foto-perro" />

                                    <div className="py-2">
                                        <label for="nombre-perro" class="form-label">Nombre *</label>
                                        <input type="text" name="first-name" class="form-control" id="first-name" maxlength="10"
                                            onkeydown="return /[a-z, ]/i.test(event.key)" required />
                                    </div>

                                    <div className="py-2">
                                        <label for="raza-perro" class="form-label">Raza *</label>
                                        <input type="raza_perro" class="form-control" id="raza-perro" aria-describedby="raza_perro"
                                            placeholder="Raza del perro" required />
                                    </div>

                                    <div className="py-2">
                                        <label for="cumple-perro" class="form-label">Fecha de nacimiento *</label><br />
                                        <input type="month" id="cumple-perro" name="start" min="2020-01" required />
                                        <div id="cumple-perro" class="form-text">Ejemplo: abril de 2023</div>
                                    </div>

                                    <div className="py-2">
                                        <label for="sexo-dog" class="form-label">Sexo *</label>
                                        <select class="form-select" aria-label="Sexo del perro">
                                            <option selected>Elige una opción</option>
                                            <option value="1">Hembra</option>
                                            <option value="2">Macho</option>
                                        </select>
                                    </div>

                                    <div className="py-2">
                                        <label for="tamaño" class="form-label">Tamaño del perro *</label><br />
                                        <div class="form-check form-check-inline dog-size">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="pequeño" />
                                            <label class="form-check-label" for="inlineRadio1"><i class="fas fa-paw"></i> Pequeño (0kg - 7kg)</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-size">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="mediano" />
                                            <label class="form-check-label" for="inlineRadio2"><i class="fas fa-paw"></i> Mediano (8kg - 18kg)</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-size">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="grande" />
                                            <label class="form-check-label" for="inlineRadio3"><i class="fas fa-paw"></i> Grande (19kg - 45kg)</label>
                                        </div>
                                        <div class="form-check form-check-inline dog-size">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="gigante" />
                                            <label class="form-check-label" for="inlineRadio4"><i class="fas fa-paw"></i> Gigante (+46kg)</label>
                                        </div>
                                    </div>

                                </div>

                                <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                                    <Link to="/SingUpForm">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Atrás</button>
                                    </Link>
                                    <Link to="/SingUpForm3">
                                        <button class="btn btn-primary m-2 w-100" type="submit">Siguiente</button>
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
export default SingUpForm2;