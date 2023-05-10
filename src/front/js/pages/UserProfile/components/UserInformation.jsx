import React from "react";

import useAppContext from "../../../store/AppContext.js";

import CloudinaryUpload from "../../../component/Widgets/CloudinaryUpload.js";
import PersonalInformation from "../../../component/Forms/PersonalInformation.jsx";



const UserInformation = () => {

    const { store, actions } = useAppContext();

    // let widget = cloudinary.createUploadWidget({ cloudName: "dx764kyct", uploadPreset: "preset1" }, (error, result) => { });
    // widget.open();

    return (
        <div className="my-4">
            <h3 className="my-4">Información personal</h3>
            <label htmlFor="foto-usuario" className="form-label">
                Foto de perfil:
                {/* <input className="form-control" type="file" id="foto-usuario"
                    name="userPhoto" value={store.userInput.userPhoto}
                    onChange={actions.handleUserInput} /> */}
            </label>
            <div className="mb-2">
            <CloudinaryUpload idName="0UserInfo" setEstado={actions.setUserPhoto} />
            </div>

            <PersonalInformation disable={true} />
        </div>
    );
}

export default UserInformation;