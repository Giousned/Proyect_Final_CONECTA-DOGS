import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useAppContext from "../../store/AppContext";
import "./signup-form.css";

const DogInformation = () => {

    const { store, actions } = useAppContext();

    return (
        <>
            <div className="d-grid gap-2">
                <label htmlFor="foto-perro" className="form-label">
                    Foto del perro
                </label>
                <input className="form-control" type="file" id="foto-perro"
                    name="dogPhoto" value={store.userInput.dogPhoto}
                    onChange={actions.handleUserInput} />

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="nombre-perro" className="form-label">
                            Nombre *
                        </label>
                        <input type="text" className="form-control" id="nombre-perro"
                            aria-describedby="nombre_perro" placeholder="Nombre del perro"
                            name="dogName" value={store.userInput.dogName}
                            onChange={actions.handleUserInput} required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="raza-perro" className="form-label">
                            Raza *
                        </label>
                        <input type="text" className="form-control" id="raza-perro"
                            aria-describedby="raza_perro" placeholder="Raza del perro"
                            name="breed" value={store.userInput.breed}
                            onChange={actions.handleUserInput} required />
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
                            placeholderText="04-2023"
                            name="dogBirth"
                            selected={store.userInput.Date}
                            onChange={actions.handleUserSelectDate}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                        />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="sexo-dog" className="form-label">
                            Sexo *
                        </label>
                        <select className="form-select" aria-label="Sexo del perro"
                            name="dogSex" value={store.userInput.dogSex}
                            onChange={actions.handleUserInput}>
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
                    <div className={"form-check form-check-inline dog-size" + ((store.userInput.radioSizeDog == "sizeSmall") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioSizeDog" id="sizeSmall" value="sizeSmall"
                            onChange={actions.handleUserInput}
                            checked={store.userInput.radioSizeDog == "sizeSmall"}
                        />
                        <label htmlFor="sizeSmall" className="form-check-label">
                            <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-size" + ((store.userInput.radioSizeDog == "sizeMedium") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioSizeDog" id="sizeMedium" value="sizeMedium"
                            onChange={actions.handleUserInput}
                            checked={store.userInput.radioSizeDog == "sizeMedium"} />
                        <label htmlFor="sizeMedium" className="form-check-label">
                            <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-size" + ((store.userInput.radioSizeDog == "sizeBig") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioSizeDog" id="sizeBig" value="sizeBig"
                            onChange={actions.handleUserInput}
                            checked={store.userInput.radioSizeDog == "sizeBig"} />
                        <label htmlFor="sizeBig" className="form-check-label">
                            <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-size" + ((store.userInput.radioSizeDog == "sizeHuge") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioSizeDog" id="sizeHuge"
                            value="sizeHuge" onChange={actions.handleUserInput}
                            checked={store.userInput.radioSizeDog == "sizeHuge"} />
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
                                name="neutered" value={store.userInput.neutered}
                                onChange={actions.handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value="True">Sí</option>
                                <option value="False">No</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="sociable-gatos" className="form-label">
                                ¿Tu perro es sociable con gatos? *
                            </label>
                            <select className="form-select" aria-label="sociable-gatos"
                                name="socialCats" value={store.userInput.socialCats}
                                onChange={actions.handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value="True">Sí</option>
                                <option value="False">No</option>
                            </select>
                        </div>


                        <div className="col-12 col-md-6">
                            <label htmlFor="sociable-niños" className="form-label">
                                ¿Tu perro es sociable con niños? *
                            </label>
                            <select className="form-select" aria-label="sociable-niños"
                                name="socialKids" value={store.userInput.socialKids}
                                onChange={actions.handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value="True">Sí</option>
                                <option value="False">No</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="sociable-perros" className="form-label">
                                ¿Tu perro es sociable con otros perros? *
                            </label>
                            <select className="form-select" aria-label="sociable-perros"
                                name="socialDogs" value={store.userInput.socialDogs}
                                onChange={actions.handleUserInput} required>
                                <option defaultValue="">Elige una opción</option>
                                <option value="True">Sí</option>
                                <option value="False">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col text-center py-1">
                    <label htmlFor="actividad" className="form-label">
                        Nivel de actividad de tu perro
                    </label>
                    <br />
                    <div className={"form-check form-check-inline dog-mtn" + ((store.userInput.radioActivity == "activityLow") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioActivity" id="activityLow"
                            value="activityLow"
                            onChange={actions.handleUserInput}
                            checked={store.userInput.radioActivity == "activityLow"} />
                        <label className="form-check-label" htmlFor="activityLow">
                            Baja
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-mtn" + ((store.userInput.radioActivity == "activityMedium") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioActivity" id="activityMedium"
                            value="activityMedium"
                            onChange={actions.handleUserInput}
                            checked={store.userInput.radioActivity == "activityMedium"} />
                        <label className="form-check-label" htmlFor="activityMedium">
                            Media
                        </label>
                    </div>
                    <div className={"form-check form-check-inline dog-mtn" + ((store.userInput.radioActivity == "activityHigh") ? " activeGlow" : "")}>
                        <input type="radio" className="form-check-input"
                            name="radioActivity" id="activityHigh"
                            value="activityHigh"
                            onChange={actions.handleUserInput}
                            checked={store.userInput.radioActivity == "activityHigh"} />
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
                        placeholder="Microchip del perro" name="microchip"
                        value={store.userInput.microchip}
                        onChange={actions.handleUserInput}
                        required />
                </div>

                <div className="col">
                    <label htmlFor="FormControlTextarea1" className="form-label">
                        Observaciones
                    </label>
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"
                        name="observations"
                        value={store.userInput.observations}
                        onChange={actions.handleUserInput}></textarea>
                </div>

            </div>
        </>
    );
}

export default DogInformation;



// Checkbox.propTypes = {
// value: PropTypes.bool,
// handleClick: PropTypes.func,
// label: PropTypes.string,
// };

