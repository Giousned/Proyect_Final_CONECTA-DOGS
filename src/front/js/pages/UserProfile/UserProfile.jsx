import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import UserInformation from "./components/UserInformation.jsx";
import PersonalInformation from "./components/PersonalInformation.jsx";
import ServicesRates from "./components/ServicesRates.jsx";
import MyDog from "./components/MyDog.jsx";

import useUserInput from "../../hooks/useUserInput.js";
import "./user-profile.css";

export const UserProfile = () => {
    const {
        userInput,
        resetInput,
        handleUserInput,
        handleUserCheck,
        handleUserSelectDate,
    } = useUserInput({ name: "Guillermo", lastname: "Hola" });

    return (
        <div className="user-profile">
            <div className="header">
                <button className="btn btn-primary">
                    <div className="text">Cambiar Fondo</div>
                    <i className="fas fa-images fa-sm"></i>
                </button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="avatar-user"></div>

                        <div className="tituloperfil text-center">
                            <h1>Sandra Madarnas</h1>
                            <h3>Estás registrado como: <b className="border rounded bg-light p-2">PROPIETARIO | CUIDADOR</b></h3>
                        </div>

                        <div>
                            <form>
                                <h3>Sobre mí:</h3>
                                <div className="col">
                                    <textarea className="form-control" id="sobre-mi" rows="3">Breve descripción sobre mí...
                                        Puedo editar ya todos los campos ❤️ 🤗 ❤️ 🤗 ❤️</textarea>
                                </div>


                                {/* Fichas - Tabs */}
                                <div className="col my-3">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home-tab-pane" type="button" role="tab"
                                                aria-controls="home-tab-pane" aria-selected="true"> Información de usuario </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                                aria-controls="profile-tab-pane" aria-selected="false"> Información personal </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="services-tab" data-bs-toggle="tab"
                                                data-bs-target="#services-tab-pane" type="button" role="tab"
                                                aria-controls="services-tab-pane" aria-selected="false"> Servicios y Tarifas </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="mydog-tab" data-bs-toggle="tab"
                                                data-bs-target="#mydog-tab-pane" type="button" role="tab"
                                                aria-controls="mydog-tab-pane" aria-selected="false"> Mi Perro </button>
                                        </li>
                                    </ul>

                                    {/* Contenido de las fichas */}
                                    <div className="tab-content" id="myTabContent">

                                        {/* Información de Usuario */}
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                            aria-labelledby="home-tab" tabindex="0">
                                            <UserInformation />
                                        </div>

                                        {/* Información Personal */}
                                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                            aria-labelledby="profile-tab" tabindex="0">
                                            <PersonalInformation />
                                        </div>

                                        {/* Servicios - Tarifas */}
                                        <div className="tab-pane fade" id="services-tab-pane" role="tabpanel"
                                            aria-labelledby="services-tab" tabindex="0">
                                            <ServicesRates />
                                        </div>

                                        {/* Mi Perro */}
                                        <div className="tab-pane fade" id="mydog-tab-pane" role="tabpanel"
                                            aria-labelledby="mydog-tab" tabindex="0">
                                            <MyDog />
                                        </div>
                                    </div>
                                </div>

                                <div className="col my-3">
                                    <button className="btn btn-primary mx-2">Cambiar la contraseña</button>
                                    <button type="submit" className="btn btn-primary mx-2">Guardar cambios</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
