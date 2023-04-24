import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useUserInput from "../../hooks/useUserInput.js";


import "./signup-form.css";

export const DogInformation = () => {

    const { userInput, resetInput, handleUserInput, handleUserRadio, handleUserCheck, handleUserSelectDate } = useUserInput();


    return (
        <>
            <div className="d-grid gap-2">
                <label htmlFor="foto-perro" className="form-label">
                    Foto del perro
                </label>
                <input className="form-control" type="file" id="foto-perro"
                        name="fotoPerro"
                        value={userInput.fotoPerro}
                        onChange={handleUserInput}
                />

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="nombre-perro" className="form-label">
                            Nombre *
                        </label>
                        <input type="text" className="form-control" id="nombre-perro"
                            aria-describedby="nombre_perro" placeholder="Nombre del perro"
                            name="nombrePerro"
                            value={userInput.nombrePerro}
                            onChange={handleUserInput}
                            required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="raza-perro" className="form-label">
                            Raza *
                        </label>
                        <input type="text" className="form-control" id="raza-perro"
                            aria-describedby="raza_perro" placeholder="Raza del perro"
                            name="raza"
                            value={userInput.raza}
                            onChange={handleUserInput}
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="cumple-perro" className="form-label">
                            Fecha de nacimiento *
                        </label>
                        <br />
                        <DatePicker
                            id="cumple-perro" className="text-center form-control"
                            placeholderText="Ejemplo: 04-2023"
                            name="nacimientoPerro"
                            selected={userInput.nacimientoPerro}
                            onChange={handleUserSelectDate}
                            dateFormat="MM/yyyy" showMonthYearPicker
                        />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="sexo-dog" className="form-label">
                            Sexo *
                        </label>
                        <select className="form-select" aria-label="Sexo del perro"
                                name="generoPerro"
                                value={userInput.generoPerro}
                                onChange={handleUserInput}
                        >
                            <option defaultValue="">Elige una opción</option>
                            <option value="Hembra">Hembra</option>
                            <option value="Macho">Macho</option>
                        </select>
                    </div>
                </div>

                <div className="col">
                    <label htmlFor="tamañoPerro" className="form-label">
                        Tamaño del perro *
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="sizeSmall" id="sizeSmall"
                            onChange={handleUserRadio}
                            checked={userInput.sizeSmall}
                        />
                        <label htmlFor="sizeSmall" className="form-check-label">
                            <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="sizeMedium" id="sizeMedium"
                            onChange={handleUserRadio}
                            checked={userInput.sizeMedium}
                        />
                        <label htmlFor="sizeMedium" className="form-check-label">
                            <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="sizeBig" id="sizeBig"
                            onChange={handleUserRadio}
                            checked={userInput.sizeBig}
                        />
                        <label htmlFor="sizeBig" className="form-check-label">
                            <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="sizeHuge" id="sizeHuge"
                            onChange={handleUserRadio}
                            checked={userInput.sizeHuge}
                        />
                        <label htmlFor="sizeHuge" className="form-check-label">
                            <i className="fas fa-paw"></i> Gigante (+46kg)
                        </label>
                    </div>
                </div>



                {/* DOGINFORMATION 2 */}
                <div className="input-group">
                    <div className="col me-2 py-2">
                        <label htmlFor="estirilizado" className="form-label">
                            ¿Tu perro está esterilizado? *
                        </label>
                        <select className="form-select" aria-label="estirilizado"
                            name="neutered"
                            value={userInput.neutered}
                            onChange={handleUserInput}
                            required>
                            <option defaultValue="">Elige una opción</option>
                            <option value="True">Sí</option>
                            <option value="False">No</option>
                        </select>
                    </div>

                    <div className="col ms-2 py-2">
                        <label htmlFor="sociable-gatos" className="form-label">
                            ¿Tu perro es sociable con gatos? *
                        </label>
                        <select className="form-select" aria-label="sociable-gatos"
                            name="socialCats"
                            value={userInput.socialCats}
                            onChange={handleUserInput}
                            required>
                            <option defaultValue="">Elige una opción</option>
                            <option value="True">Sí</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <div className="col me-2 py-2">
                        <label htmlFor="sociable-niños" className="form-label">
                            ¿Tu perro es sociable con niños? *
                        </label>
                        <select className="form-select" aria-label="sociable-niños"
                            name="socialKids"
                            value={userInput.socialKids}
                            onChange={handleUserInput}
                            required>
                            <option defaultValue="">Elige una opción</option>
                            <option value="True">Sí</option>
                            <option value="False">No</option>
                        </select>
                    </div>

                    <div className="col ms-2 py-2">
                        <label htmlFor="sociable-perros" className="form-label">
                            ¿Tu perro es sociable con otros perros? *
                        </label>
                        <select className="form-select" aria-label="sociable-perros"
                            name="socialDogs"
                            value={userInput.socialDogs}
                            onChange={handleUserInput}
                            required>
                            <option defaultValue="">Elige una opción</option>
                            <option value="True">Sí</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                </div>

                <div className="col text-center py-1">
                    <label htmlFor="actividad" className="form-label">
                        Nivel de actividad de tu perro
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-mtn">
                        <input type="radio" className="form-check-input"
                            name="activityLow" id="activityLow"
                            onChange={handleUserCheck}
                            checked={ userInput.activityLow == "activityLow"}
                        />
                        <label className="form-check-label" htmlFor="actividad-baja">
                            Baja
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                        <input type="radio" className="form-check-input"
                            name="activityMedium" id="activityMedium"
                            onChange={handleUserCheck}
                            checked={ userInput.activityMedium == "activityMedium"}
                        />
                        <label className="form-check-label" htmlFor="actividad-media">
                            Media
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                        <input type="radio" className="form-check-input"
                            name="activityHigh" id="activityHigh"
                            onChange={handleUserCheck}
                            checked={ userInput.activityHigh == "activityHigh"}
                        />
                        <label className="form-check-label" htmlFor="actividad-alta">
                            Alta
                        </label>
                    </div>
                </div>

                <div className="col">
                    <label htmlFor="microchip" className="form-label">
                        Microchip *
                    </label>
                    <input type="text" className="form-control"
                        id="microchip" aria-describedby="micro-chip"
                        placeholder="Microchip del perro"
                        name="microchip"
                        value={userInput.microchip}
                        onChange={handleUserInput}
                        required />
                </div>

                <div className="col">
                    <label htmlFor="FormControlTextarea1" className="form-label">
                        Observaciones
                    </label>
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"
                        name="observations"
                        value={userInput.observations}
                        onChange={handleUserInput}
                    ></textarea>
                </div>

            </div>
        </>
    );
}



// const handleChangeGeneroPerro = (event) => actions.setGeneroPerro(event.target.value);

// const handleCheckTamanoPequeno = () => actions.setTamanoPequeno(!store.tamanoPequeno);
// const handleCheckTamanoMediano = () => actions.setTamanoMediano(!store.tamanoMediano);
// const handleCheckTamanoGrande = () => actions.setTamanoGrande(!store.tamanoGrande);
// const handleCheckTamanoGigante = () => actions.setTamanoGigante(!store.tamanoGigante);


// // DogInformation2

// const handleChangeEsterilizado = (event) => actions.setEsterilizado(event.target.value);
// const handleChangeSociableGatos = (event) => actions.setSociableGatos(event.target.value);
// const handleChangeSociableKids = (event) => actions.setSociableKids(event.target.value);
// const handleChangeSociablePerros = (event) => actions.setSociablePerros(event.target.value);
// const handleCheckActividadBaja = () => actions.setActividadBaja(!actividadBaja);
// const handleCheckActividadMedia = () => actions.setActividadMedia(!actividadMedia);
// const handleCheckActividadAlta = () => actions.setActividadAlta(!actividadAlta);
// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}


// Checkbox.propTypes = {
// value: PropTypes.bool,
// handleClick: PropTypes.func,
// label: PropTypes.string,
// };

