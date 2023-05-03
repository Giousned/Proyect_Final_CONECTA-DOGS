import React from "react";

import useAppContext from "../../../store/AppContext.js";

import PersonalInformation from "../../../component/Forms/PersonalInformation.jsx";


const UserInformation = () => {

    const { store, actions } = useAppContext();

    return (
        <div className="my-4">
            <h3 className="my-4">Información personal</h3>
            <label htmlFor="foto-usuario" className="form-label">
                Foto de perfil
                <input className="form-control" type="file" id="foto-usuario"
                    name="userPhoto" value={store.userInput.userPhoto}
                    onChange={actions.handleUserInput} />
            </label>
            <PersonalInformation disable={true} />
        </div>
    );
}

export default UserInformation;