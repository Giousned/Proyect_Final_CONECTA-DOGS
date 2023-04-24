import React from "react";

import useUserInput from "../../hooks/useUserInput.js";


import "./signup-form.css";

export const AdditionalInformation = () => {

    const { userInput, resetInput, handleUserInput, handleUserRadio, handleUserCheck, handleUserSelectDate } = useUserInput();


    return (
        <>
            <h2 className="py-2">Servicios</h2>

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
        </>
    );
}


    // const handleCheckGuarderiaDiurna = () => actions.setGuarderiaDiurna(!guarderiaDiurna);
    // const handleCheckPaseo = () => actions.setPaseo(!paseo);
    // const handleCheckGuarderiaNocturna = () => actions.setGuarderiaNocturna(!guarderiaNocturna);
