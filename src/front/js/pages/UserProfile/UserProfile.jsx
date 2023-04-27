import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TabButton from '../UserProfile/components/TabButton.jsx';
import UserInformation from "./components/UserInformation.jsx";
import PersonalInformation from "./components/PersonalInformation.jsx";
import ServicesRates from "./components/ServicesRates.jsx";
import MyDog from "./components/MyDog.jsx";

import useUserInput from "../../hooks/useUserInput.js";
import "./user-profile.css";

const UserProfile = () => {

    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="user-profile">
            <div className="header">
                {/* <button className="btn btn-primary">
                    <div className="text">Cambiar Fondo</div>
                    <i className="fas fa-images fa-sm"></i>
                </button> */}
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
                                    <textarea className="form-control" id="sobre-mi" rows="3">
                                        Breve descripción sobre mí... 🤗 ❤️
                                        Puedo editar ya todos los campos ❤️ 🤗
                                    </textarea>
                                </div>


                                {/* Fichas - Tabs */}
                                <div className="col my-3 border rounded p-2 custom-tabs">
                                    <ul className="nav nav-tabs bg-light mb-4 pb-1" id="myTab" role="tablist">
                                        <TabButton
                                            id="home-tab"
                                            label="Información de usuario"
                                            isActive={activeTab === 'home'}
                                            onClick={() => handleTabClick('home')}
                                        />
                                        <TabButton
                                            id="profile-tab"
                                            label="Información personal"
                                            isActive={activeTab === 'profile'}
                                            onClick={() => handleTabClick('profile')}
                                        />
                                        <TabButton
                                            id="services-tab"
                                            label="Servicios y Tarifas"
                                            isActive={activeTab === 'services'}
                                            onClick={() => handleTabClick('services')}
                                        />
                                        <TabButton
                                            id="mydog-tab"
                                            label="Mi Perro"
                                            isActive={activeTab === 'mydog-tab-pane'}
                                            onClick={() => handleTabClick('mydog-tab-pane')}
                                        />
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

                                <div className="col my-4 py-4">
                                    <button className="btn btn-danger mx-2">Cambiar la contraseña</button>
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

export default UserProfile;
