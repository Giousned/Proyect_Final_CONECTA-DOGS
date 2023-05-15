import React from "react";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { GET_Book } from "../../services/BOOKFetchs.js";

const ReserveInformationDog = () => {

    const params = useParams();

    const [ bookInfo, setBookInfo ] = useState({});
  
    useEffect(() => {
  
      GET_Book(params.id).then((data) => {setBookInfo(data.book);});
  
    }, []);


    return (
        <>
            {bookInfo.dogs
                ? bookInfo.dogs.map((dog, index) => {

                    return (
                        <div className="col-md justify-content-center border border-primary-subtle m-2 p-2 shadow" key={index} >

                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">
                    {dog.dogName}
                </h3>
                <p className="lead">
                {dog.observations}
                </p>
                <p className="lead">
                    Raza: <b><i className="fas fa-dog"></i> {dog.breed}</b>
                </p>
                <p className="lead">
                    Sexo: <b><i className={`fas ${(dog.dogSex == "Macho") ? "fa-mars" : "fa-venus"}`}></i> {dog.dogSex}</b>
                </p>
                <p className="lead">
                    Tamaño: <b><i className=""></i> {dog.dogSize}</b>
                </p>
                <p className="lead">
                    Actividad: <b><i className=""></i> {dog.dogActivity}</b>
                </p>
                <p className="lead">
                    Microchip: <b><i className=""></i> {dog.microchip}</b>
                </p>
                <p className="lead">
                    Esterilizado: <b><i className=""></i> {(dog.neutered == true) ? "Sí" : "No"}</b>
                </p>
                <p className="lead">
                    Sociable con gatos: <b><i className=""></i> {(dog.socialCats == true) ? "Sí" : "No"}</b>
                </p>
                <p className="lead">
                    Sociable con perros: <b><i className=""></i> {(dog.socialDogs == true) ? "Sí" : "No"}</b>
                </p>
                <p className="lead">
                    Sociable con niños: <b><i className=""></i> {(dog.socialKids == true) ? "Sí" : "No"}</b>
                </p>

                                </div>

                                <div className="d-flex mx-auto ">
                                <img src={dog.dogPhoto}
                    className="d-block mx-lg-auto img-fluid imagen-perrito-informacion-reserva" alt="foto-de-mi-perrito" />

                                </div>

                            </div>

            </div >
                    );

                })
                : null
            }
            
        </>
    );
}

export default ReserveInformationDog;