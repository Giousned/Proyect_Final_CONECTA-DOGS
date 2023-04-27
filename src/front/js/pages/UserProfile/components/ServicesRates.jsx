import React, { useState, useEffect } from "react";
import useUserInput from "../../../hooks/useUserInput";

const ServicesRates = () => {

    const {
        userInput,
        resetInput,
        handleUserInput,
        handleUserCheck,
        handleUserSelectDate,
    } = useUserInput({ name: "Sandra", lastname: "Madarnas" });

    const [numDogs, setNumDogs] = useState(1);

    useEffect(() => {
        //  Aquí podemos hacer cualquier operación que queramos cuando el número de perros admitidos cambie.
        console.log(`El usuario ha admitido: ${numDogs} perros`);
    }, [numDogs]);

    const handleNumDogsChange = (event) => {
        const newNumDogs = parseInt(event.target.value, 10);
        setNumDogs(newNumDogs);
    };

    return (
        <>
            <h6 className="mb-4">El usuario admite: {numDogs} perro/s</h6>

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

            <div className="container py-4">
                <label htmlFor="num-dogs">Número de perros admitidos:</label>
                <input type="number" id="num-dogs" min="0" max="10"
                    name="num-dogs" value={numDogs}
                    onChange={handleNumDogsChange}
                />
            </div>

            <h4 className="m-4">Preferencias de Cobro ¿?</h4>
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