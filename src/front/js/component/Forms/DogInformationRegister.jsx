import React from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import useAppContext from "../../store/AppContext.js";
import useUserInput from "../../hooks/useUserInput.js";

import CloudinaryUpload from "../Widgets/CloudinaryUpload.js";


import "./FormsStyles.css";

const DogInformationRegister = () => {

    const { store, actions } = useAppContext();

    const { userInput, handleUserInput } = useUserInput();

    const handleSubmit = (e) => {
        e.preventDefault();

        actions.handleRegisterDog(e, userInput);
    }


    return (
        <>
            <div className="d-grid gap-2">
                <label htmlFor="foto-perro" className="form-label">
                    Foto del perro
                </label>
                <CloudinaryUpload idName="0DogReg" setEstado={actions.setDogPhoto} />

                {/* <input className="form-control" type="file" id="foto-perro"
                    name="dogPhoto" value={userInput.dogPhoto}
                    onChange={handleUserInput} /> */}

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="nombre-perro" className="form-label">
                            Nombre *
                        </label>
                        <input type="text" className="form-control" id="nombre-perro"
                            aria-describedby="nombre_perro" placeholder="Nombre del perro"
                            name="dogName" value={userInput.dogName}
                            onChange={handleUserInput} required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="raza-perro" className="form-label">
                            Raza *
                        </label>
                        <input type="text" className="form-control" id="raza-perro"
                            aria-describedby="raza_perro" placeholder="Raza del perro"
                            name="breed" value={userInput.breed}
                            onChange={handleUserInput} required />
                    </div>
                </div>

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="fecha-nacimiento-dog" className="form-label">
                            Fecha de nacimiento *
                        </label>
                        <br />
                        <input className="form-control" type="date" id="fecha-nacimiento-dog"
                            aria-describedby="fecha-nacimiento-perro"
                            name="dogBirth"
                            value={userInput.dogBirth}
                            onChange={handleUserInput}
                            required />
                        {/* <DatePicker
                            id="cumple-perro" className="text-center form-control"
                            placeholderText="04-2023"
                            name="dogBirth"
                            selected={userInput.Date}
                            onChange={handleUserSelectDate}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                        /> */}
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="sexo-dog" className="form-label">
                            Sexo *
                        </label>
                        <select className="form-select" aria-label="Sexo del perro"
                            name="dogSex" value={userInput.dogSex}
                            onChange={handleUserInput}>
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
                    <div className={"form-check form-check-inline dog-size" + ((userInput.dogSize == "Pequeño") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogSize" id="sizeSmall" value="Pequeño"
                            onChange={handleUserInput}
                            checked={userInput.dogSize == "Pequeño"}
                        />
                        <label htmlFor="sizeSmall" className="form-check-label">
                            <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-size" + ((userInput.dogSize == "Mediano") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogSize" id="sizeMedium" value="Mediano"
                            onChange={handleUserInput}
                            checked={userInput.dogSize == "Mediano"} />
                        <label htmlFor="sizeMedium" className="form-check-label">
                            <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-size" + ((userInput.dogSize == "Grande") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogSize" id="sizeBig" value="Grande"
                            onChange={handleUserInput}
                            checked={userInput.dogSize == "Grande"} />
                        <label htmlFor="sizeBig" className="form-check-label">
                            <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-size" + ((userInput.dogSize == "Gigante") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogSize" id="sizeHuge"
                            value="Gigante" onChange={handleUserInput}
                            checked={userInput.dogSize == "Gigante"} />
                        <label htmlFor="sizeHuge" className="form-check-label">
                            <i className="fas fa-paw"></i> Gigante (+46kg)
                        </label>
                    </div>
                </div>


                {/* DOGINFORMATION 2 */}
                <div className="input-group">
                    <div className="row my-2">

                        <div className="col-12 col-md-6">
                            <label htmlFor="estirilizado" className="form-label">
                                ¿Tu perro está esterilizado? *
                            </label>
                            <select className="form-select" aria-label="estirilizado"
                                name="neutered" value={userInput.neutered}
                                onChange={handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value={true}>Sí</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="sociable-gatos" className="form-label">
                                ¿Tu perro es sociable con gatos? *
                            </label>
                            <select className="form-select" aria-label="sociable-gatos"
                                name="socialCats" value={userInput.socialCats}
                                onChange={handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value={true}>Sí</option>
                                <option value={false}>No</option>
                            </select>
                        </div>


                        <div className="col-12 col-md-6">
                            <label htmlFor="sociable-niños" className="form-label">
                                ¿Tu perro es sociable con niños? *
                            </label>
                            <select className="form-select" aria-label="sociable-niños"
                                name="socialKids" value={userInput.socialKids}
                                onChange={handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value={true}>Sí</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="sociable-perros" className="form-label">
                                ¿Tu perro es sociable con otros perros? *
                            </label>
                            <select className="form-select" aria-label="sociable-perros"
                                name="socialDogs" value={userInput.socialDogs}
                                onChange={handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value={true}>Sí</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col text-center py-1">
                    <label htmlFor="actividad" className="form-label">
                        Nivel de actividad de tu perro
                    </label>
                    <br />
                    <div className={"form-check form-check-inline dog-mtn" + ((userInput.dogActivity == "Baja") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogActivity" id="activityLow"
                            value="Baja"
                            onChange={handleUserInput}
                            checked={userInput.dogActivity == "Baja"} />
                        <label className="form-check-label" htmlFor="activityLow">
                            Baja
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-mtn" + ((userInput.dogActivity == "Media") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogActivity" id="activityMedium"
                            value="Media"
                            onChange={handleUserInput}
                            checked={userInput.dogActivity == "Media"} />
                        <label className="form-check-label" htmlFor="activityMedium">
                            Media
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-mtn" + ((userInput.dogActivity == "Alta") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="dogActivity" id="activityHigh"
                            value="Alta"
                            onChange={handleUserInput}
                            checked={userInput.dogActivity == "Alta"} />
                        <label className="form-check-label" htmlFor="activityHigh">
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
                        placeholder="Microchip del perro (15 dígitos únicos)" name="microchip"
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
                        onChange={handleUserInput}></textarea>
                </div>

                <button
                    type="submit"
                    className="boton-registro-perro action-button shadow animate my-2 mx-auto"
                    onClick={handleSubmit}
                >
                    Registrar Perro
                </button>

            </div>
        </>
    );
}

export default DogInformationRegister;



// Checkbox.propTypes = {
// value: PropTypes.bool,
// handleClick: PropTypes.func,
// label: PropTypes.string,
// };

