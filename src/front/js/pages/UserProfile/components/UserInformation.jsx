import React from "react";
import CloudinaryUpload from "../../../component/Widgets/CloudinaryUpload.js";

import useAppContext from "../../../store/AppContext.js";

import PersonalInformation from "../../../component/Forms/PersonalInformation.jsx";



const UserInformation = () => {

    const { store, actions } = useAppContext();

    // let widget = cloudinary.createUploadWidget({ cloudName: "dx764kyct", uploadPreset: "preset1" }, (error, result) => { });
    // widget.open();

    return (
        <div className="my-4">
            <h3 className="my-4">Información personal</h3>
            <label htmlFor="foto-usuario" className="form-label me-2">
                Foto de perfil:
                {/* <input className="form-control" type="file" id="foto-usuario"
                    name="userPhoto" value={store.userInput.userPhoto}
                    onChange={actions.handleUserInput} /> */}
            </label>
            <CloudinaryUpload />

            <PersonalInformation disable={true} />
        </div>
    );
}

export default UserInformation;