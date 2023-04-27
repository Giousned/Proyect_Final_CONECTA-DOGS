import React from "react";
import useUserInput from "../../../hooks/useUserInput";
import useAppContext from "../../../store/AppContext";
import DogInformation from "../../../component/Forms/DogInformation.jsx"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDog = () => {

    const {
        userInput,
        resetInput,
        handleUserInput,
        handleUserCheck,
        handleUserSelectDate,
    } = useUserInput({ name: "Guillermo", lastname: "Hola" });

    return (
        <>
            <h3 className="my-2">Datos del perro</h3>
            <div className="avatar-dog my-3"></div>

            <DogInformation />


            {/* FORMULARIO CREADO PARA EL PERFIL SI NO QUEREMOS UTILIZAR EL DEL REGISTRO */}

            {/* <h3 className="my-2">Datos del perro</h3>
            <div className="avatar-dog my-3"></div>

            <div className="row my-2">
                <div className="input-group">
                    <div className="col me-2">
                        <div className="form-floating my-1">
                            <input type="text" className="form-control" id="dogName"
                                placeholder="Introduce el nombre del perr@"
                                value={userInput.dogName} name="dogName"
                                onChange={handleUserInput} />
                            <label htmlFor="dogName">Nombre del Perro</label>
                        </div>
                    </div>

                    <div className="col ms-2">
                        <div className="form-floating my-1">
                            <input type="text" className="form-control" id="breed"
                                placeholder="Introduce la raza del perr@"
                                value={userInput.breed} name="breed"
                                onChange={handleUserInput} />
                            <label htmlFor="breed">Raza</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-2">
                <div className="col me-2">
                    <div className="form-floating my-1">
                        <DatePicker
                            id="nacimientoPerro" className="form-control p-3"
                            name="dogBirth"
                            value={userInput.dogBirth}
                            onChange={handleUserInput}
                            dateFormat="MM/yyyy" showMonthYearPicker
                        />
                        <label htmlFor="nacimientoPerro">Fecha de Nacimiento del Perro</label>
                    </div>
                </div>

                <div className="col ms-2">
                    <div className="form-floating my-1">
                        <select className="form-select " aria-label="Sexo del perro"
                            name="dogSex" value={userInput.dogSex}
                            onChange={handleUserInput}>
                            <option defaultValue="">Elige una opción</option>
                            <option value="Hembra">Hembra</option>
                            <option value="Macho">Macho</option>
                        </select>
                        <label htmlFor="sexo-dog">Sexo del Perro</label>
                    </div>
                </div>
            </div>

            <div className="col my-2">
                <label htmlFor="tamañoPerro" className="form-label">
                    Tamaño del perro *
                </label>
                <br />
                <div className={"form-check form-check-inline dog-size" + ((userInput.radioSizeDog == "sizeSmall") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioSizeDog" id="sizeSmall" value="sizeSmall"
                        onChange={handleUserInput}
                        checked={userInput.radioSizeDog == "sizeSmall"}
                    />
                    <label htmlFor="sizeSmall" className="form-check-label">
                        <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                    </label>
                </div>
                <div className={"form-check form-check-inline dog-size" + ((userInput.radioSizeDog == "sizeMedium") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioSizeDog" id="sizeMedium" value="sizeMedium"
                        onChange={handleUserInput}
                        checked={userInput.radioSizeDog == "sizeMedium"} />
                    <label htmlFor="sizeMedium" className="form-check-label">
                        <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                    </label>
                </div>
                <div className={"form-check form-check-inline dog-size" + ((userInput.radioSizeDog == "sizeBig") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioSizeDog" id="sizeBig" value="sizeBig"
                        onChange={handleUserInput}
                        checked={userInput.radioSizeDog == "sizeBig"} />
                    <label htmlFor="sizeBig" className="form-check-label">
                        <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                    </label>
                </div>
                <div className={"form-check form-check-inline dog-size" + ((userInput.radioSizeDog == "sizeHuge") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioSizeDog" id="sizeHuge"
                        value="sizeHuge" onChange={handleUserInput}
                        checked={userInput.radioSizeDog == "sizeHuge"} />
                    <label htmlFor="sizeHuge" className="form-check-label">
                        <i className="fas fa-paw"></i> Gigante (+46kg)
                    </label>
                </div>
            </div>

            <div className="row my-2">
                <div className="col-12 col-md-3">
                    <label htmlFor="estirilizado" className="form-label">
                        ¿Tu perro está esterilizado? *
                    </label>
                    <select className="form-select" aria-label="estirilizado"
                        name="neutered" value={userInput.neutered}
                        onChange={handleUserInput} required>
                        <option defaultValue="">Elige una opción</option>
                        <option value="True">Sí</option>
                        <option value="False">No</option>
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <label htmlFor="sociable-gatos" className="form-label">
                        ¿Tu perro es sociable con gatos? *
                    </label>
                    <select className="form-select" aria-label="sociable-gatos"
                        name="socialCats" value={userInput.socialCats}
                        onChange={handleUserInput} required>
                        <option defaultValue="">Elige una opción</option>
                        <option value="True">Sí</option>
                        <option value="False">No</option>
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <label htmlFor="sociable-niños" className="form-label">
                        ¿Tu perro es sociable con niños? *
                    </label>
                    <select className="form-select" aria-label="sociable-niños"
                        name="socialKids" value={userInput.socialKids}
                        onChange={handleUserInput} required>
                        <option defaultValue="">Elige una opción</option>
                        <option value="True">Sí</option>
                        <option value="False">No</option>
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <label htmlFor="sociable-perros" className="form-label">
                        ¿Tu perro es sociable con otros perros? *
                    </label>
                    <select className="form-select" aria-label="sociable-perros"
                        name="socialDogs" value={userInput.socialDogs}
                        onChange={handleUserInput} required>
                        <option defaultValue="">Elige una opción</option>
                        <option value="True">Sí</option>
                        <option value="False">No</option>
                    </select>
                </div>
            </div>

            <div className="col my-2">
                <label htmlFor="actividad" className="form-label">
                    Nivel de actividad de tu perro
                </label>
                <br />
                <div className={"form-check form-check-inline dog-mtn" + ((userInput.radioActivity == "activityLow") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioActivity" id="activityLow"
                        value="activityLow"
                        onChange={handleUserInput}
                        checked={userInput.radioActivity == "activityLow"} />
                    <label className="form-check-label" htmlFor="activityLow">
                        Baja
                    </label>
                </div>
                <div className={"form-check form-check-inline dog-mtn" + ((userInput.radioActivity == "activityMedium") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioActivity" id="activityMedium"
                        value="activityMedium"
                        onChange={handleUserInput}
                        checked={userInput.radioActivity == "activityMedium"} />
                    <label className="form-check-label" htmlFor="activityMedium">
                        Media
                    </label>
                </div>
                <div className={"form-check form-check-inline dog-mtn" + ((userInput.radioActivity == "activityHigh") ? " activeGlow" : "")}>
                    <input type="radio" className="form-check-input"
                        name="radioActivity" id="activityHigh"
                        value="activityHigh"
                        onChange={handleUserInput}
                        checked={userInput.radioActivity == "activityHigh"} />
                    <label className="form-check-label" htmlFor="activityHigh">
                        Alta
                    </label>
                </div>
            </div>

            <div className="col my-2">
                <label htmlFor="microchip" className="form-label">
                    Microchip *
                </label>
                <input type="text" className="form-control"
                    id="microchip" aria-describedby="micro-chip"
                    placeholder="Microchip del perro" name="microchip"
                    value={userInput.microchip}
                    onChange={handleUserInput}
                    required />
            </div>

            <div className="col my-2">
                <label htmlFor="FormControlTextarea1" className="form-label">
                    Observaciones
                </label>
                <textarea className="form-control" id="FormControlTextarea1" rows="3"
                    name="observations"
                    value={userInput.observations}
                    onChange={handleUserInput}></textarea>
            </div> */}
        </>
    );
}

export default MyDog;