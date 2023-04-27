import React from "react";
import useUserInput from "../../../hooks/useUserInput";

const PersonalInformation = () => {

    const {
        userInput,
        resetInput,
        handleUserInput,
        handleUserCheck,
        handleUserSelectDate,
    } = useUserInput({ name: "Guillermo", lastname: "Nuria" });

    return (
        <div id="profile">
            <div className="form-floating my-1">
                <input type="email" className="form-control" id="emailRegistroUser"
                    placeholder="Introduce un email"
                    value={userInput.email} name="email"
                    onChange={handleUserInput} />
                <label htmlFor="emailRegistroUser">Correo Electrónico</label>
            </div>

            <div className="form-floating my-1">
                <input type="tel" className="form-control" id="telefono-user"
                    placeholder="Introduce un teléfono"
                    value={userInput.phone} name="phone"
                    onChange={handleUserInput} />
                <label htmlFor="telefono-user">Teléfono</label>
            </div>
        </div>
    );
}

export default PersonalInformation;