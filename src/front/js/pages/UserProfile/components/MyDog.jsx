import React from "react";
import useUserInput from "../../../hooks/useUserInput";

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
            <div className="container">
                <div className="row">
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

                <div className="row">
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

                <div className="row">
                    <div className="col me-2">

                        <h2>AQUI SIGUE METIENDO LA INFO DE LOS DATOS DEL PERRO SIGUIENDO LA MISMA ARQUITECTURA</h2>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MyDog;