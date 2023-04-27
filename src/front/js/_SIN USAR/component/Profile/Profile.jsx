import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import Puppy from "../../../img/2.png";

const Profile = () => {
    return (
        <>
            <div className="profile py-4 my-4">
                <img src={Puppy} className="img-fluid" />

                <div className="d-flex profile">
                    <h1>Perfil</h1>

                    <Link to="/account-info" class="action-button shadow animate blue">Información de la cuenta</Link>
                    <Link to="/user-profile" class="action-button shadow animate red">Editar perfil</Link>
                    <Link to="/user-profile" class="action-button shadow animate green">Servicios y tarifas</Link>
                </div>
            </div>
        </>
    );
}

export default Profile;