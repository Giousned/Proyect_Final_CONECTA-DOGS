import React from "react";
import useUserInput from "../../../hooks/useUserInput";

const ServicesRates = () => {

    const {
        userInput,
        resetInput,
        handleUserInput,
        handleUserCheck,
        handleUserSelectDate,
    } = useUserInput({ name: "Sandra", lastname: "Madarnas" });

    const handleNumDogsChange = (event) => {
        const numDogs = Number(event.target.value);
        if (numDogs >= 11) {
            alert("Número máximo de perros admitidos por cuidador es de 10");
            return;
        }
        handleUserInput(event);
    };

    return (
        <>
            <h3 className="my-4">Si quieres convertirte en cuidador activa los servicios y tarifas que ofreces</h3>

            <div className="container py-4">
                <h5 className="mb-4">El usuario admite: {userInput.numDogs} perro/s</h5>
                <label htmlFor="numDogs">Elige el número de perros que puedes admitir en tu casa:</label>
                <input type="number" id="numDogs" min="0" max="10"
                    name="numDogs" value={userInput.numDogs}
                    onChange={handleNumDogsChange}
                />
            </div>


            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="guarderia-diurna">
                    Guardería Diurna (Alojamiento de día)
                </label>
                <input type="checkbox" className="form-check-input"
                    name="nurseryDay" id="guarderia-diurna"
                    value={userInput.nurseryDay}
                    onChange={handleUserCheck}
                    checked={userInput.nurseryDay}
                />
                <input type="text" className="form-control"
                    id="precio-guarderia-diurna" aria-describedby="precio_guarderia_diurna"
                    placeholder="Precio en €"
                    name="priceNurseryDay"
                    value={userInput.priceNurseryDay}
                    onChange={handleUserInput}
                />
            </div>

            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="paseo">
                    Paseo (Por horas)
                </label>
                <input type="checkbox" className="form-check-input"
                    name="walk" id="paseo"
                    value={userInput.walk}
                    onChange={handleUserCheck}
                    checked={userInput.walk}
                />
                <input type="text" className="form-control"
                    id="precio-paseo" aria-describedby="precio_paseo"
                    placeholder="Precio en €"
                    name="priceWalk"
                    value={userInput.priceWalk}
                    onChange={handleUserInput}
                />
            </div>

            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="guarderia-nocturna">
                    Guardería Nocturna (Alojamiento de noche)
                </label>
                <input type="checkbox" className="form-check-input"
                    name="nurseryNight" id="guarderia-nocturna"
                    value={userInput.nurseryNight}
                    onChange={handleUserCheck}
                    checked={userInput.nurseryNight}
                />
                <input type="text" className="form-control"
                    id="precio-guarderia-nocturna" aria-describedby="precio_guarderia_nocturna"
                    placeholder="Precio en €"
                    name="priceNurseryNight"
                    value={userInput.priceNurseryNight}
                    onChange={handleUserInput}
                />
            </div>


            <h5 className="m-4">Preferencias de Cobro ¿?</h5>
            <input type="checkbox" className="form-check-input"
                name="transferencia" id="transferencia" />
            <label className="form-check-label px-2 mb-4" htmlFor="transferencia">
                Transferencia
            </label>

            <input type="checkbox" className="form-check-input"
                name="PayPal" id="PayPal" />
            <label className="form-check-label px-2 mb-4" htmlFor="PayPal">
                PayPal
            </label>
        </>
    );
}

export default ServicesRates;