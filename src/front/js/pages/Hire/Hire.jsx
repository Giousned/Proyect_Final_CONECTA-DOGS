import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { POST_Book } from "../../services/BOOKFetchs.js";
import { GET_User } from "../../services/USERFetchs.js";

import useUserInput from "../../hooks/useUserInput.js";
import useAuthContext from "../../store/AuthContext.js";
import useToastsContext from "../../store/ToastsContext.js";

import "./HireStyles.css";

const Hire = () => {
  const { storeAuth, actionsAuth } = useAuthContext();
  const { userInput, handleUserInput, handleUserCheck } = useUserInput("");
  const { storeToast, actionsToast } = useToastsContext();

  const [dogsitter, setDogsitter] = useState({});

  const params = useParams();

  useEffect(() => {
    GET_User(params.id).then((data) => {
      setDogsitter(data.user);
      actionsToast.handleShownToast(data);
    });
  }, []);

  // MANDO EL ID DE LA TARIFA DIRECTAMENTE PARA LUEGO BUSCARLA EN EL BACK MAS FACIL Y UNA CLAVE DOGS DONDE DENTRO VA CADA NOMBRE DEL PERRO + SU ID
  const handleContratarServicio = (e) => {
    e.preventDefault();

    const newArrayDog = []

    for (let dog in userInput) {

      if (userInput[dog] === true) {

        let newDogs = { dogName: "", id: "" }

        let str = dog
        let arraySplit = str.split('-');

        newDogs.dogName = arraySplit[0]
        newDogs.id = arraySplit[1]

        newArrayDog.push(newDogs)
      }

    }

    userInput.dogs = newArrayDog;

    POST_Book(userInput)
      .then((data) => {
        actionsToast.handleShownToast(data);
      })
  };

  return (
    <>
      {dogsitter.tariffs ? (
        <div className="hire">
          <div className="header">
            <h1 className="text-center p-4">CONTRATAR CUIDADOR</h1>
          </div>

          <div className="container my-4">
            <div className=" bg-body-tertiary p-4 rounded-3">
              <h3 className="text-body-emphasis text-center pb-4">
                Contacta con: <b>{dogsitter.name}</b>
              </h3>
              {/* SERVICIO */}
              <h4>
                Selecciona el servicio deseado dentro de mis servicios
                disponibles:
              </h4>
              <div className="row g-2">
                {dogsitter.tariffs.map((tarif, index) => {
                  return (
                    <div className="col-12 col-md-4" key={index}>
                      <div className="form-floating">
                        <div
                          className={
                            "glowing-register m-2" +
                            (userInput.tariffId == tarif.id
                              ? " activeGlow"
                              : "")
                          }
                        >
                          <input
                            type="radio"
                            id={tarif.service.title + tarif.id}
                            name="tariffId"
                            value={tarif.id}
                            onChange={handleUserInput}
                            checked={userInput.tariffId == tarif.id}
                          />

                          <label htmlFor={tarif.service.title + tarif.id}>
                            {tarif.service.title}
                          </label>

                          <div className="d-flex justify-content-center mt-2"> <p className="me-2">Precio del servicio:</p> <b>{tarif.price} €</b> </div>

                          <p className="fst-italic justify-content-center">
                            {tarif.service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CALENDARIO */}
              <div className="d-flex mt-2">
                <div className="col-6 me-2">
                  <label htmlFor="fechaEntrega" className="form-label fw-bold text-decoration-underline">
                    ENTREGA:
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type="date"
                    id="fechaEntrega"
                    aria-describedby="fecha-entrega-perro"
                    name="fechaEntrega"
                    value={userInput.fechaEntrega}
                    onChange={handleUserInput}
                    required
                  />
                  <br />
                  <label htmlFor="hora-entrega">Elige una hora: &nbsp;</label>
                  <input
                    type="time"
                    id="hora-entrega"
                    name="horaEntrega"
                    // min="07:00" max="23:00"
                    value={userInput.horaEntrega}
                    onChange={handleUserInput}
                    required
                  />
                  <small>&nbsp;Elige una hora para la entrega</small>{" "}
                  {/* entre las 7:00 y las 23:00 */}
                </div>

                <div className="col-6 ms-2">
                  <label htmlFor="fechaRecogida" className="form-label fw-bold text-decoration-underline">
                    RECOGIDA:
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type="date"
                    id="fechaRecogida"
                    aria-describedby="fecha-recogida-perro"
                    name="fechaRecogida"
                    value={userInput.fechaRecogida}
                    onChange={handleUserInput}
                    required
                  />
                  <br />
                  <label htmlFor="hora-recogida">Elige una hora: &nbsp;</label>
                  <input
                    type="time"
                    id="hora-recogida"
                    name="horaRecogida"
                    // min="07:00" max="23:00"
                    value={userInput.horaRecogida}
                    onChange={handleUserInput}
                    required
                  />
                  <small>&nbsp;Elige una hora para la recogida</small>
                </div>
              </div>

              {/* TUS PERROS */}
              <h3 className="mt-4 pt-4">Tus Perros</h3>
              <p className="lead">
                Tus Perro:
                <br />
                Selecciona el/los perro(s) para los que quieres contratar este
                servicio:
              </p>

              <div className="container d-flex">
                {storeAuth.userLog.user.dogs
                  ? storeAuth.userLog.user.dogs.map((dogInfo, index) => {
                    return (
                      <div className="col-12 col-md-4" key={index}>
                        <div className="form-floating">
                          <div
                            className={
                              "glowing-register m-2" +
                              (userInput[`${dogInfo.dogName}-${dogInfo.id}`] == true
                                ? " activeGlow"
                                : "")
                            }
                          >
                            <label htmlFor={dogInfo.id}>
                              <img
                                src={
                                  dogInfo.dogPhoto
                                    ? dogInfo.dogPhoto
                                    : "https://cdn.pixabay.com/photo/2019/02/02/17/12/animation-3970998_960_720.png"
                                }
                                alt="Checkbox imagen perrito"
                                className="img-fluid"
                              />
                            </label>

                            <input
                              type="checkbox"
                              name={`${dogInfo.dogName}-${dogInfo.id}`}
                              id={dogInfo.id}
                              value={userInput[`${dogInfo.dogName}-${dogInfo.id}`]}
                              onChange={handleUserCheck}
                              checked={userInput[`${dogInfo.dogName}-${dogInfo.id}`]}
                            />

                            <h3 className="text-center mt-4">
                              {dogInfo.dogName}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  : null}
              </div>

              {/* TU TELEFONO */}
              <h3 className="mt-4 pt-4">Tu Teléfono</h3>
              <p className="lead">
                {storeAuth.userLog.user ? storeAuth.userLog.user.phone : null}
              </p>
              {/* MENSAJE */}
              <h3 className="mt-4 pt-4">Mensaje</h3>
              <div className="mb-3">
                <label htmlFor="mensajeACuidador" className="form-label">
                  Comparte más información sobre tu perro con{" "}
                  <b>{dogsitter.name}</b>
                </label>
                <textarea
                  className="form-control"
                  id="mensajeACuidador"
                  name="mensajeACuidador"
                  value={
                    userInput.mensajeACuidador ? userInput.mensajeACuidador : ""
                  }
                  onChange={handleUserInput}
                  rows="3"
                ></textarea>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <Link to={"/caregiver-info/" + dogsitter.id} className="action-button shadow animate red">
                  Ir Atrás
                </Link>
                <button type="button" className="action-button shadow animate blue"
                  onClick={handleContratarServicio}>
                  Enviar
                </button>
              </div>

              <Link
                to="#navbar"
                className="simplescrollup__button simplescrollup__button--hide"
                spy="true"
                smooth="true"
                duration={800}
              >
                <h2>
                  <i className="fas fa-arrow-circle-up"></i>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Hire;

// const newArrayBooks = [];
// const newObjBooks = { books: newArrayBooks };

// if (userInput.tariffId == "guarderiaDia") {
//   newArrayBooks.push({ carerId: 1, serviceId: 1, price: 15 });
// }

// if (userInput.tariffId == "paseo") {
//   newArrayBooks.push({ carerId: 1, serviceId: 2, price: 10 });
// }

// if (userInput.tariffId == "alojamientoNoche") {
//   newArrayBooks.push({ carerId: 1, serviceId: 3, price: 5 });
// }

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
