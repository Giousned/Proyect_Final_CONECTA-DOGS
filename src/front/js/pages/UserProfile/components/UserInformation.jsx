import React from "react";
import useUserInput from "../../../hooks/useUserInput";

const UserInformation = () => {

    const {
        userInput,
        resetInput,
        handleUserInput,
        handleUserCheck,
        handleUserSelectDate,
    } = useUserInput({ name: "Sandra", lastname: "Madarnas" });

    return (
        <>
            <h2 className="text-dark">Nombre: {userInput.name} {userInput.lastname}</h2>
            <div className="form-floating my-1">
                <input type="text" className="form-control" id="nombre-usuario"
                    placeholder="Introduce un nombre"
                    value={userInput.name} name="name"
                    onChange={handleUserInput} />
                <label htmlFor="nombre-usuario">Nombre:</label>
            </div>

            <div className="form-floating my-1">
                <input type="text" className="form-control" id="apellidos-usuario"
                    placeholder="Introduce los apellidos"
                    value={userInput.lastname} name="lastname"
                    onChange={handleUserInput} />
                <label htmlFor="apellidos-usuario">Apellidos</label>
            </div>

            <div className="form-floating my-1">
                <input type="text" className="form-control" id="direccion-usuario"
                    placeholder="Introduce una dirección"
                    value={userInput.address} name="address"
                    onChange={handleUserInput} />
                <label htmlFor="direccion-usuario">Dirección</label>
            </div>

            <div className="form-floating my-1">
                <input type="text" className="form-control" id="codigo-postal-usuario"
                    placeholder="Introduce un código postal"
                    value={userInput.postalcode} name="postalCode"
                    onChange={handleUserInput} />
                <label htmlFor="codigo-postal-usuario">Código Postal</label>
            </div>

            {/* <label htmlFor="provincia-user">Localidad</label> */}
            <select required id="provincia-user" className="form-select p-3"
                name="province" value={userInput.province}
                onChange={handleUserInput}>
                <option defaultValue="">Localidad</option>
                <option value="Álava">Álava</option>
                <option value="Albacete">Albacete</option>
                <option value="Alicante">Alicante</option>
                <option value="Almería">Almería</option>
                <option value="Asturias">Asturias</option>
                <option value="Ávila">Ávila</option>
                <option value="Badajoz">Badajoz</option>
                <option value="Baleares">Baleares</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Burgos">Burgos</option>
                <option value="Cáceres">Cáceres</option>
                <option value="Cádiz">Cádiz</option>
                <option value="Cantabria">Cantabria</option>
                <option value="Castellón">Castellón</option>
                <option value="Ceuta">Ceuta</option>
                <option value="Ciudad Real">Ciudad Real</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Cuenca">Cuenca</option>
                <option value="Gerona">Gerona</option>
                <option value="Granada">Granada</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Guipúzcoa">Guipúzcoa</option>
                <option value="Huelva">Huelva</option>
                <option value="Huesca">Huesca</option>
                <option value="Jaén">Jaén</option>
                <option value="La Coruña">La Coruña</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Las Palmas">Las Palmas</option>
                <option value="León">León</option>
                <option value="Lérida">Lérida</option>
                <option value="Lugo">Lugo</option>
                <option value="Madrid">Madrid</option>
                <option value="Málaga">Málaga</option>
                <option value="Melilla">Melilla</option>
                <option value="Murcia">Murcia</option>
                <option value="Navarra">Navarra</option>
                <option value="Orense">Orense</option>
                <option value="Palencia">Palencia</option>
                <option value="Pontevedra">Pontevedra</option>
                <option value="Salamanca">Salamanca</option>
                <option value="Segovia">Segovia</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Soria">Soria</option>
                <option value="Tarragona">Tarragona</option>
                <option value="Tenerife">Tenerife</option>
                <option value="Teruel">Teruel</option>
                <option value="Toledo">Toledo</option>
                <option value="Valencia">Valencia</option>
                <option value="Valladolid">Valladolid</option>
                <option value="Vizcaya">Vizcaya</option>
                <option value="Zamora">Zamora</option>
                <option value="Zaragoza">Zaragoza</option>
            </select>
        </>
    );
}

export default UserInformation;