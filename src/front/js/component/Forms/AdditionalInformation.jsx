import React from "react";

import useAppContext from "../../store/AppContext";
import "./signup-form.css";

const AdditionalInformation = () => {

    const { store, actions } = useAppContext();

    return (
        <>
            <h2 className="py-2">Servicios</h2>
            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="guarderia-diurna">
                    Guardería Diurna (Alojamiento de día)
                </label>
                <input type="checkbox" className="form-check-input"
                    name="nurseryDay" id="guarderia-diurna"
                    value={store.userInput.nurseryDay}
                    onChange={actions.handleUserCheck}
                    checked={store.userInput.nurseryDay}
                /> <br />
                <input type="text" className="form-control"
                    id="precio-guarderia-diurna" aria-describedby="precio_guarderia_diurna"
                    placeholder="Precio en €"
                    name="priceNurseryDay"
                    value={store.userInput.priceNurseryDay}
                    onChange={actions.handleUserInput}
                />
            </div>
            <br />
            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="paseo">
                    Paseo (Por horas)
                </label>
                <input type="checkbox" className="form-check-input"
                    name="walk" id="paseo"
                    value={store.userInput.walk}
                    onChange={actions.handleUserCheck}
                    checked={store.userInput.walk}
                /><br />
                <input type="text" className="form-control"
                    id="precio-paseo" aria-describedby="precio_paseo"
                    placeholder="Precio en €"
                    name="priceWalk"
                    value={store.userInput.priceWalk}
                    onChange={actions.handleUserInput}
                />
            </div>
            <br />
            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="guarderia-nocturna">
                    Guardería Nocturna (Alojamiento de noche)
                </label>
                <input type="checkbox" className="form-check-input"
                    name="nurseryNight" id="guarderia-nocturna"
                    value={store.userInput.nurseryNight}
                    onChange={actions.handleUserCheck}
                    checked={store.userInput.nurseryNight}
                /><br />
                <input type="text" className="form-control"
                    id="precio-guarderia-nocturna" aria-describedby="precio_guarderia_nocturna"
                    placeholder="Precio en €"
                    name="priceNurseryNight"
                    value={store.userInput.priceNurseryNight}
                    onChange={actions.handleUserInput}
                />
            </div>
        </>
    );
}

export default AdditionalInformation;


    // const handleCheckGuarderiaDiurna = () => actions.setGuarderiaDiurna(!guarderiaDiurna);
    // const handleCheckPaseo = () => actions.setPaseo(!paseo);
    // const handleCheckGuarderiaNocturna = () => actions.setGuarderiaNocturna(!guarderiaNocturna);
