import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { POST_Book } from "../../services/BOOKFetchs.js";

import useUserInput from "../../hooks/useUserInput.js";
import useAuthContext from "../../store/AuthContext.js";
import useToastsContext from "../../store/ToastsContext.js";

import "./HireStyles.css";


const Hire = () => {

    const { storeAuth, actionsAuth } = useAuthContext();
    const { userInput, handleUserInput, handleUserCheck } = useUserInput("");
    const { storeToast, actionsToast } = useToastsContext();


    const handleContratarServicio = (e) => {
        e.preventDefaulft();

        // POST_Book(userInput)
        //     .then((data) => {
        //         actionsToast.handleShownToast(data);
        //     })

    }


    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab("");
    }, [storeAuth.userLog.user])

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="hire">

            <div className="header">
                <h1 className="text-center p-4">CONTRATAR CUIDADOR</h1>
            </div>

            <div className="container my-4">
                <div className="bg-body-tertiary p-4 rounded-3">
                    <h3 className="text-body-emphasis text-center pb-4">Contacta con: Sandra M</h3>
                    {/* SERVICIO */}
                    <h4>Selecciona el servicio:</h4>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <div className={"glowing-register m-2" + ((userInput.bookService == "alojamientoNoche") ? " activeGlow" : "")}>
                                    <label htmlFor="noche">Alojamiento de Noche</label>

                                    <input type="radio" id="noche"
                                        name="bookService" value="alojamientoNoche"
                                        onChange={handleUserInput}
                                        checked={userInput.bookService == "alojamientoNoche"} 
                                    />

                                    <p className="fst-italic justify-content-center pt-2">
                                        Alojamiento para tu perro en casa del cuidador seleccionado incluyendo la noche.
                                        No olvides entregar su comida, premios, cama, cartilla veterinaria y su juguete favorito.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className={"glowing-register m-2" + ((userInput.bookService == "paseo") ? " activeGlow" : "")}>
                                    <label htmlFor="paseo">Paseo</label>

                                    <input type="radio" id="paseo"
                                        name="bookService" value="paseo"
                                        onChange={handleUserInput}
                                        checked={userInput.bookService == "paseo"}
                                    />

                                    <p className="fst-italic justify-content-center pt-2">
                                        60 minutos de paseo para tu perro. La recogida y entrega será en tu casa. ¡No olvides la correa!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className={"glowing-register m-2" + ((userInput.bookService == "guarderiaDia") ? " activeGlow" : "")}>
                                    <input type="radio" id="dia"
                                        name="bookService" value="guarderiaDia"
                                        onChange={handleUserInput}
                                        checked={userInput.bookService == "guarderiaDia"}
                                    />
                                    <label htmlFor="dia">Guarderia de Día</label>
                                    <p className="fst-italic justify-content-center pt-2">
                                        Deja a tu perro durante el día en casa de un cuidador de Gudog un máximo de 10 horas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CALENDARIO */}
                    <div className="d-flex">
                        <div className="col-6 me-2">
                            <label htmlFor="fechaRecogida" className="form-label">
                                ENTREGA:
                            </label>
                            <br />
                            <input className="form-control" type="date" id="fechaRecogida"
                                aria-describedby="fecha-reserva-perro"
                                name="fechaRecogida"
                                value={userInput.fechaRecogida}
                                onChange={handleUserInput}
                                required />
                            <br />
                            <label for="hora-recogida">Elige una hora: &nbsp;</label>
                            <input type="time" id="hora-recogida" name="horaRecogida"
                                // min="07:00" max="23:00"
                                value={userInput.horaRecogida}
                                onChange={handleUserInput}
                                required />
                            <small>&nbsp;Elige una hora para la recogida</small>      {/* entre las 7:00 y las 23:00 */}
                        </div>

                        <div className="col-6 ms-2">
                            <label htmlFor="fechaEntrega" className="form-label">
                                RECOGIDA:
                            </label>
                            <br />
                            <input className="form-control" type="date" id="fechaEntrega"
                                aria-describedby="fecha-nacimiento-perro"
                                name="fechaEntrega"
                                value={userInput.fechaEntrega}
                                onChange={handleUserInput}
                                required />
                            <br />
                            <label for="hora-entrega">Elige una hora: &nbsp;</label>
                            <input type="time" id="hora-entrega" name="horaEntrega"
                                // min="07:00" max="23:00"
                                value={userInput.horaEntrega}
                                onChange={handleUserInput}
                                required />
                            <small>&nbsp;Elige una hora para la recogida</small>

                        </div>
                    </div>
                    {/* TUS PERROS */}
                    <h3 className="mt-4 pt-4">Tus Perros</h3>
                    <p className="lead">
                        Tus Perro:
                        <br />
                        Selecciona el/los perro(s) para los que quieres contratar este servicio:
                    </p>

                    <div className="container d-flex">

                        {storeAuth.userLog.user.dogs
                            ? storeAuth.userLog.user.dogs.map((dogInfo, index) => {
                                return (
                                    
                            <div className="col-4" key={index}>
                                
                                <div className="form-floating">
                                    <div className={"glowing-register m-2" + ((userInput[`perro${dogInfo.id}`] == true) ? " activeGlow" : "")}>

                                        <label htmlFor={`perro${dogInfo.id}`}>
                                            <img src={(dogInfo.dogPhoto) ? dogInfo.dogPhoto : "https://cdn.pixabay.com/photo/2019/02/02/17/12/animation-3970998_960_720.png"} alt="Checkbox imagen perrito" className="img-fluid" />
                                        </label>

                                        <input type="checkbox"
                                            name={`perro${dogInfo.id}`}
                                            id={`perro${dogInfo.id}`}
                                            value={userInput[`perro${dogInfo.id}`]}
                                            onChange={handleUserCheck}
                                            checked={userInput[`perro${dogInfo.id}`]}
                                        />

                                        <h3 className="text-center mt-4">{dogInfo.dogName}</h3>
                                    </div>
                                </div>
                            </div>);
                            })
                            : null
                        }

                    </div>

                    {/* TU TELEFONO */}
                    <h3 className="mt-4 pt-4">Tu Teléfono</h3>
                    <p className="lead">
                        {(storeAuth.userLog.user) ? storeAuth.userLog.user.phone : null}
                    </p>
                    {/* MENSAJE */}
                    <h3 className="mt-4 pt-4">Mensaje</h3>
                    <div className="mb-3">
                        <label htmlFor="mensajeACuidador" className="form-label">
                            Comparte más información sobre tu perro con <b>SANDRA M.</b>
                        </label>
                        <textarea className="form-control" 
                        id="mensajeACuidador"
                        name="mensajeACuidador"
                        value={(userInput.mensajeACuidador) ? userInput.mensajeACuidador : ""}
                        onChange={handleUserInput}
                        rows="3">
                        </textarea>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="button" className="action-button shadow animate blue" onClick={handleContratarServicio}>Enviar</button>
                        <Link to="/caregiver-info" className="action-button shadow animate red">Ir Atrás</Link>
                    </div>

                    <Link to="#navbar" className="simplescrollup__button simplescrollup__button--hide"
                        spy={true} smooth={true} duration={800}>
                        <h2>
                            <i className="fas fa-arrow-circle-up"></i>
                        </h2>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Hire;


// <div className="col-md">
// <div className="form-floating">
//     <div className="glowing-register m-2">
//         <input type="checkbox" id="perro2"
//             name="perro" value="perro2" />
//         <label htmlFor="perro2">
//             <img src="https://cdn.pixabay.com/photo/2019/12/31/23/20/puppy-4732766_960_720.jpg"
//                 className="img-fluid" />
//         </label>
//         <p className="text-center">Perro 2</p>
//     </div>
// </div>
// </div>