import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import useAppContext from "../../store/AppContext.js";

import "./signup-form.css";

export const DogInformation = () => {

    // const { store, actions } = useAppContext();

    // const handleChangeGeneroPerro = (event) => actions.setGeneroPerro(event.target.value);

    // const handleCheckTamanoPequeno = () => actions.setTamanoPequeno(!store.tamanoPequeno);
    // const handleCheckTamanoMediano = () => actions.setTamanoMediano(!store.tamanoMediano);
    // const handleCheckTamanoGrande = () => actions.setTamanoGrande(!store.tamanoGrande);
    // const handleCheckTamanoGigante = () => actions.setTamanoGigante(!store.tamanoGigante);


    // DogInformation2

    // const handleChangeEsterilizado = (event) => actions.setEsterilizado(event.target.value);
    // const handleChangeSociableGatos = (event) => actions.setSociableGatos(event.target.value);
    // const handleChangeSociableKids = (event) => actions.setSociableKids(event.target.value);
    // const handleChangeSociablePerros = (event) => actions.setSociablePerros(event.target.value);
    // const handleCheckActividadBaja = () => actions.setActividadBaja(!actividadBaja);
    // const handleCheckActividadMedia = () => actions.setActividadMedia(!actividadMedia);
    // const handleCheckActividadAlta = () => actions.setActividadAlta(!actividadAlta);


    return (
        <>
            <div className="d-grid gap-2">
                <label htmlFor="foto-perro" className="form-label">
                    Foto del perro
                </label>
                <input className="form-control" type="file" id="foto-perro"
                // value={store.fotoPerro} onChange={(e) => actions.setFotoPerro(e.target.value)} 
                />

                <div className="input-group">
                    <div className="col me-2">
                        <label htmlFor="nombre-perro" className="form-label">
                            Nombre *
                        </label>
                        <input type="text" className="form-control" id="nombre-perro"
                            aria-describedby="nombre_perro" placeholder="Nombre del perro"
                            // value={store.nombrePerro}
                            // onChange={(e) => actions.setNombrePerro(e.target.value)}
                            required />
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="raza-perro" className="form-label">
                            Raza *
                        </label>
                        <input type="text" className="form-control" id="raza-perro"
                            aria-describedby="raza_perro" placeholder="Raza del perro"
                            // value={store.razaPerro}
                            // onChange={(e) => actions.setRazaPerro(e.target.value)}
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
                            // selected={store.nacimientoPerro}
                            // onChange={(date) => actions.setNacimientoPerro(date)}
                            dateFormat="MM/yyyy" showMonthYearPicker
                        />
                        {/* <div className="form-text">
                                Ejemplo: 04-2023
                            </div> */}
                    </div>

                    <div className="col ms-2">
                        <label htmlFor="sexo-dog" className="form-label">
                            Sexo *
                        </label>
                        <select className="form-select" aria-label="Sexo del perro"
                        // value={store.generoPerro} 
                        // onChange={handleChangeGeneroPerro}
                        >
                            <option defaultValue="">Elige una opción</option>
                            <option value="Hembra">Hembra</option>
                            <option value="Macho">Macho</option>
                        </select>
                    </div>
                </div>

                <div className="col">
                    <label htmlFor="tamaño" className="form-label">
                        Tamaño del perro *
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="inlineRadioOptions" id="inlineRadio1"
                        // onChange={handleCheckTamanoPequeno}
                        // checked={store.tamanoPequeno}
                        />
                        <label htmlFor="inlineRadio1" className="form-check-label">
                            <i className="fas fa-paw"></i> Pequeño (0kg - 7kg)
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="inlineRadioOptions" id="inlineRadio2"
                        // onChange={handleCheckTamanoMediano}
                        // checked={store.tamanoMediano}
                        />
                        <label htmlFor="inlineRadio2" className="form-check-label">
                            <i className="fas fa-paw"></i> Mediano (8kg - 18kg)
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="inlineRadioOptions" id="inlineRadio3"
                        // onChange={handleCheckTamanoGrande}
                        // checked={store.tamanoGrande}
                        />
                        <label htmlFor="inlineRadio3" className="form-check-label">
                            <i className="fas fa-paw"></i> Grande (19kg - 45kg)
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-size">
                        <input type="radio" className="form-check-input"
                            name="inlineRadioOptions" id="inlineRadio4"
                        // onChange={handleCheckTamanoGigante}
                        // checked={store.tamanoGigante}
                        />
                        <label htmlFor="inlineRadio4" className="form-check-label">
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
                            // value={store.esterilizado} 
                            // onChange={handleChangeEsterilizado} 
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
                            // value={store.sociableGatos} 
                            // onChange={handleChangeSociableGatos} 
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
                            // value={store.sociableKids} 
                            // onChange={handleChangeSociableKids} 
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
                            // value={store.sociablePerros} 
                            // onChange={handleChangeSociablePerros} 
                            required>
                            <option defaultValue="">Elige una opción</option>
                            <option value="True">Sí</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                </div>

                <div className="col text-center py-1">
                    <label htmlFor="tamaño" className="form-label">
                        Nivel de actividad de tu perro
                    </label>
                    <br />
                    <div className="form-check form-check-inline dog-mtn">
                        <input type="radio" className="form-check-input"
                            name="actividad" id="actividad-baja"
                        // onChange={handleCheckActividadBaja}
                        // checked={store.actividadBaja}
                        />
                        <label className="form-check-label" htmlFor="actividad-baja">
                            Baja
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                        <input type="radio" className="form-check-input"
                            name="actividad" id="actividad-media"
                        // onChange={handleCheckActividadMedia}
                        // checked={store.actividadMedia}
                        />
                        <label className="form-check-label" htmlFor="actividad-media">
                            Media
                        </label>
                    </div>
                    <div className="form-check form-check-inline dog-mtn">
                        <input type="radio" className="form-check-input"
                            name="actividad" id="actividad-alta"
                        // onChange={handleCheckActividadAlta}
                        // checked={store.actividadAlta}
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
                        // value={store.microchip}
                        // onChange={(e) => actions.setMicrochip(e.target.value)}
                        required />
                </div>

                <div className="col">
                    <label htmlFor="FormControlTextarea1" className="form-label">
                        Observaciones
                    </label>
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"
                    // value={store.observaciones}
                    // onChange={(e) => actions.setObservaciones(e.target.value)}
                    ></textarea>
                </div>

            </div>
        </>
    );
}


// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}


// Checkbox.propTypes = {
// value: PropTypes.bool,
// handleClick: PropTypes.func,
// label: PropTypes.string,
// };



// value={store.recordarme} onChange={actions.handleCheckRecordarme} checked={store.recordarme}
// value={store.emailInicio}
// onChange={(e) => actions.setEmailInicio(e.target.value)}