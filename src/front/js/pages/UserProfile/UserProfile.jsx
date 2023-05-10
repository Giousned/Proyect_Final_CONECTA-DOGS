import React, { useState } from "react";

import TabButton from '../UserProfile/components/TabButton.jsx';
import UserInformation from "./components/UserInformation.jsx";
import ServicesRates from "./components/ServicesRates.jsx";
import MyDog from "./components/MyDog.jsx";

import useAppContext from "../../store/AppContext.js";

import "./UserProfileStyles.css";

const UserProfile = () => {

    const { store, actions } = useAppContext();

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
                        <img className="avatar-user center-block" src={(store.userInput.userPhoto)
                            ?
                            store.userInput.userPhoto
                            :
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="Avatar de mi perfil" />

                        <div className="tituloperfil text-center">
                            <h2 className="text-dark">{store.userInput.name} {store.userInput.lastName}</h2>
                        </div>

                        <div>
                            <form>
                                <h3>Sobre mí:</h3>
                                <div className="col boxshadow">
                                    <textarea className="form-control" id="aboutMe" rows="3"
                                        name="aboutMe"
                                        value={(store.userInput.aboutMe) ? store.userInput.aboutMe : ""}
                                        onChange={actions.handleUserInput}>
                                    </textarea>
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
                                            id="mydogs-tab"
                                            label="MIS PERROS"
                                            isActive={activeTab === 'mydogs'}
                                            onClick={() => handleTabClick('mydogs')}
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
                                        <div className="tab-pane fade" id="mydogs-tab-pane" role="tabpanel"
                                            aria-labelledby="mydog-tab" tabIndex="0">
                                            <MyDog />
                                        </div>
                                    </div>
                                </div>

                                {(activeTab !== 'mydogs')
                                    ? <div className="d-grid m-4 d-md-flex justify-content-md-end">
                                        <button type="submit" className="action-button shadow animate blue" onClick={actions.handleUpdate}> Guardar cambios </button>
                                    </div>
                                    : null
                                }

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
