import React, { useState } from "react";

import TabButton from '../UserProfile/components/TabButton.jsx';
import UserInformation from "./components/UserInformation.jsx";
import ServicesRates from "./components/ServicesRates.jsx";
import MyDog from "./components/MyDog.jsx";

import { GET_All_Users, GET_User } from "../../services/USERFetchs.js";

import useUserInput from "../../hooks/useUserInput";
import useAppContext from "../../store/AppContext.js";
import "./user-profile.css";

const UserProfile = () => {

    const { store, actions } = useAppContext();

    // GET_User().then((data) => {
        
    // })

    // const {
    //     userInput,
    //     resetInput,
    //     handleUserInput,
    //     handleUserCheck,
    //     handleUserSelectDate,
    // } = useUserInput({ name: "Sandra", lastname: "Madarnas" });

    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="user-profile">
            <div className="header">
            <h1 className="text-center p-4">INFORMACIÓN DE USUARIO</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="avatar-user"></div>

                        <div className="tituloperfil text-center">
                            <h2 className="text-dark">{store.userInput.name} {store.userInput.lastname}</h2>
                        </div>

                        <div>
                            <form>
                                <h3>Sobre mí:</h3>
                                <div className="col boxshadow">
                                    <textarea className="form-control" id="aboutMe" rows="3"
                                        name="aboutMe"
                                        value={store.userInput.aboutMe}
                                        onChange={actions.handleUserInput}>
                                    </textarea>
                                    {/* Breve descripción sobre mí... 🤗 ❤️
                                    Puedo editar ya todos los campos ❤️ 🤗 */}
                                </div>


                                {/* Fichas - Tabs */}
                                <div className="col my-3 border rounded p-2 boxshadow">
                                    <ul className="nav nav-tabs bg-light mb-4 pb-1" id="myTab" role="tablist">
                                        <TabButton
                                            id="home-tab"
                                            label="INFORMACIÓN DE USUARIO"
                                            isActive={activeTab === 'home'}
                                            onClick={() => handleTabClick('home')}
                                        />
                                        <TabButton
                                            id="mydog-tab"
                                            label="MIS PERROS"
                                            isActive={activeTab === 'mydog-tab-pane'}
                                            onClick={() => handleTabClick('mydog-tab-pane')}
                                        />
                                        <TabButton
                                            id="services-tab"
                                            label="OPCIONES DE CUIDADOR"
                                            isActive={activeTab === 'services'}
                                            onClick={() => handleTabClick('services')}
                                        />
                                    </ul>

                                    {/* Contenido de las fichas */}
                                    <div className="tab-content" id="myTabContent">

                                        {/* Información de Usuario */}
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                            aria-labelledby="home-tab" tabIndex="0">
                                            <UserInformation />
                                        </div>

                                        {/* CUIDADOR: Servicios - Tarifas */}
                                        <div className="tab-pane fade" id="services-tab-pane" role="tabpanel"
                                            aria-labelledby="services-tab" tabIndex="0">
                                            <ServicesRates />
                                        </div>

                                        {/* Mis Perros */}
                                        <div className="tab-pane fade" id="mydog-tab-pane" role="tabpanel"
                                            aria-labelledby="mydog-tab" tabIndex="0">
                                            <MyDog />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid m-4 d-md-flex justify-content-md-end">
                                    <button type="submit" className="action-button shadow animate blue">Guardar cambios</button>
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
